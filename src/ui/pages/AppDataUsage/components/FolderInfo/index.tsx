import { cilFolderOpen } from '@coreui/icons';
import CIcon from '@coreui/icons-react';

interface Props {
  name: string;
  size: number;
}

export const FolderInfo = ({ name, size }: Props) => {
  return (
    <div>
      <div className="d-flex flex-row align-items-center justify-content-between ms-4">
        <div>
          <CIcon icon={cilFolderOpen} className="me-2" />
          <span>{name}</span>
        </div>
        <div>
          <span>{`${(size / (1024 * 1024)).toFixed(2)} MB`}</span>
        </div>
      </div>
    </div>
  );
};
