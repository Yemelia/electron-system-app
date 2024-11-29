import * as fs from 'fs';
import * as path from 'path';
import * as dir from 'node-dir';

const appDataRoamingPath = process.env.APPDATA ||
  (process.platform === 'darwin'
      ? path.join(process.env.HOME!, 'Library/Application Support')
      : path.join(process.env.HOME!, '.config'));

// const appDataLocal = process.env.LOCALAPPDATA!;

function getFolderSize(folderPath: string): Promise<number> {
  return new Promise((resolve, reject) => {
    dir.files(folderPath, (err, files) => {
      if (err) {
          reject(err);
      } else {
        const size = files.reduce((total, file) => {
          const stats = fs.statSync(file);
          return total + stats.size;
        }, 0);
        resolve(size);
      }
    });
  });
}

export async function getAppDataFoldersAndSizes(): Promise<FoldersDetails> {
  const foldersDetails: FoldersDetails = {
    roaming: [],
    local: [],
  }

  try {
    const folderDetails: FolderDetails[] = [];

    const folders = fs.readdirSync(appDataRoamingPath, { withFileTypes: true })
      .filter(file => file.isDirectory())
      // Handle folders with no permissions
      .filter((folder) => folder.name !== 'Microsoft');

    for (const folder of folders) {
      const folderPath = path.join(appDataRoamingPath, folder.name);
      const size = await getFolderSize(folderPath);

      folderDetails.push({
        name: folder.name,
        path: folderPath,
        size: size,
      });
    }

    foldersDetails.roaming = folderDetails;
  } catch (err) {
    console.error('Error AppData:', err);
  }

  return foldersDetails;
}
