import { cilFolderOpen, cilFolder, cilScreenDesktop } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { FolderInfo } from '../FolderInfo';
import { MouseEvent, useCallback, useState } from 'react';
import { baitToGb } from '../../utils';
import { CTooltip } from '@coreui/react';

interface Props {
  parentFolder: ParentFolderDetails;
}

export const ParentFolder = ({ parentFolder }: Props) => {
  const [showSubfolders, setSubFolders] = useState(false);
  const handleFolderClick = useCallback(() => {
    setSubFolders((show) => !show);
  }, []);

  const handleOpenInFileExplorer = useCallback(
    (event: MouseEvent) => {
      event.stopPropagation();

      window.electron.openFolderByPath({
        path: parentFolder.path,
      });
    },
    [parentFolder.path],
  );

  return (
    <div className="flex">
      <div
        className="d-flex align-items-center justify-content-between"
        onClick={handleFolderClick}
      >
        <div>
          <CIcon icon={showSubfolders ? cilFolderOpen : cilFolder} /> Roaming
        </div>
        <div className="d-flex">
          <div className="me-3">{`${baitToGb(parentFolder.totalSize)} GB`}</div>
          <div>
            <CTooltip content="Open in File Explorer">
              <CIcon
                icon={cilScreenDesktop}
                onClick={handleOpenInFileExplorer}
              />
            </CTooltip>
          </div>
        </div>
      </div>
      {showSubfolders &&
        parentFolder.folders.map(({ name, size, path }) => (
          <FolderInfo name={name} size={size} path={path} />
        ))}
    </div>
  );
};
