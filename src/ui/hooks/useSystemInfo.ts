import { useEffect, useState } from 'react';

export const useSystemInfo = () => {
  const [systemInfo, setSystemInfo] = useState<SystemInfo>();

  useEffect(() => {
    window.electron.getSystemInfo()
      .then((dataPromise) => dataPromise)
      .then((data) => setSystemInfo(data));
  }, []);

  return systemInfo;
}