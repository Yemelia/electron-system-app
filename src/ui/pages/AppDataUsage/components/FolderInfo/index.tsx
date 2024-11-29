import { cilFolderOpen, cilScreenDesktop } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { baitToMb } from '../../utils';
import { CTooltip } from '@coreui/react';
import { useCallback } from 'react';

interface Props {
  name: string;
  size: number;
  path: string;
}

export const FolderInfo = ({ name, size, path }: Props) => {
  const handleOpenInFileExplorer = useCallback(() => {
    window.electron.openFolderByPath({
      path: path,
      highlight: true,
    });
  }, [path]);

  return (
    <div>
      <div className="d-flex flex-row align-items-center justify-content-between ms-4">
        <div>
          <CIcon icon={cilFolderOpen} className="me-2" />
          <span>{name}</span>
        </div>
        <div className="d-flex">
          <div className="me-3">{`${baitToMb(size)} MB`}</div>
          <div>
            <CTooltip content="Open in File Explorer">
              <CIcon icon={cilScreenDesktop} onClick={handleOpenInFileExplorer} />
            </CTooltip>
          </div>
        </div>
      </div>
    </div>
  );
};
