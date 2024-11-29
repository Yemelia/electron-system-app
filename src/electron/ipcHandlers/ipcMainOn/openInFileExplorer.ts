import { shell } from 'electron';

export const openFolderByPath = ({
  path,
  highlight = false,
}: OpenFolderActionPayload) => {

  if (!highlight) {
    shell.openPath(path).then((result) => {
      if (result) {
        console.error('Error while opening folder:', result);
      }
    });

    return;
  }

  shell.showItemInFolder(path);
};
