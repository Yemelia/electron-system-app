import { useEffect, useState } from 'react'

export const useSystemInfo = () => {
  const [systemInfo, setSystemInfo] = useState<StaticData>();

  useEffect(() => {
    window.electron.getStaticData()
      .then((dataPromise) => dataPromise)
      .then((data) => setSystemInfo(data));
  }, []);

  return systemInfo;
}