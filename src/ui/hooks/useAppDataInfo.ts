import { useEffect, useState } from 'react'

export const useAppDataInfo = () => {
  const [foldersInfo, setFoldersInfo] = useState<FoldersDetails>();

  useEffect(() => {
    window.electron.getAppDataInfo()
      .then((dataPromise) => dataPromise)
      .then((data) => setFoldersInfo(data));
  }, []);

  return foldersInfo;
}