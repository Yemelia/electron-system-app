import { cilFolderOpen } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { FolderInfo } from '../FolderInfo';
import { useCallback, useState } from 'react';

interface Props {
  folders?: FolderDetails[];
}

export const ParentFolder = ({ folders = [] }: Props) => {
  const [showSubfolders, setSubFolders] = useState(true);
  const handleFolderClick = useCallback(() => {
    setSubFolders((show) => !show);
  }, []);

  return (
    <div className="flex">
      <div onClick={handleFolderClick}>
        <CIcon icon={cilFolderOpen} /> Roaming
      </div>
      {showSubfolders && folders.map(({ name, size }) => <FolderInfo name={name} size={size} />)}
    </div>
  );
};
