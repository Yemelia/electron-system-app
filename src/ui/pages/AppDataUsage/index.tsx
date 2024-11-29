import { useAppDataInfo } from '../../hooks';

import './index.scss';
import { ParentFolder } from './components/ParentFolder';

export const AppDataUsage = () => {
  const appDataFolderInfo = useAppDataInfo();

  return (
    <div>
      <div>App Data info</div>
      {appDataFolderInfo ? (
        <ParentFolder parentFolder={appDataFolderInfo.roaming} />
      ) : (
        'Loading ....'
      )}
    </div>
  );
};
