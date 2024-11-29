type Statistics = {
  cpuUsage: number,
  ramUsage: number,
  storageUsage: number;
};

type StaticData = {
  totalStorage: number;
  cpuModel: string;
  gpuModel: string;
  totalMemoryGB: number;
};

interface FolderDetails {
  name: string;
  path: string;
  size: number;
}

interface FoldersDetails {
  roaming: FolderDetails[];
  local: FolderDetails[];
}

type View = 'CPU' | 'RAM' | 'STORAGE';

type FrameWidowAction = 'CLOSE' | 'MAXIMIZE' | 'MINIMIZE';

type UnsubscribeFunction = () => void;

interface Window {
  electron: {
    subscribeStatistics:
      (callback: (
        statistics: Statistics
      ) => void) => UnsubscribeFunction;
    getStaticData: () => Promise<Promise<StaticData>>,
    getAppDataInfo: () => Promise<Promise<FoldersDetails>>,
    subscribeChangeView:
      (callback: (
        view: View
      ) => void) => UnsubscribeFunction;
    sendFrameAction: (payload: FrameWidowAction) => void;
  }
}