
// Domain
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

interface ParentFolderDetails {
  totalSize: number;
  folders: FolderDetails[],
  path: string;
}

interface FoldersDetails {
  roaming: ParentFolderDetails,
  local: ParentFolderDetails,
}

type View = 'CPU' | 'RAM' | 'STORAGE';

// Actions

type FrameWidowAction = 'CLOSE' | 'MAXIMIZE' | 'MINIMIZE';

interface OpenFolderActionPayload {
  path: string;
  highlight?: boolean;
};

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
    openFolderByPath: (payload: OpenFolderActionPayload) => void;
  }
}