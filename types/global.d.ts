// Domain
type Statistics = {
  cpuUsage: number,
  ramUsage: number,
  storageUsage: number;
};

type SystemInfo = {
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

interface EventPayloadMapping {
  getSystemInfo: Promise<SystemInfo>;
  getAppDataInfo: Promise<FoldersDetails>;
  changeView: View;
  sendFrameAction: FrameWidowAction;
  openFolderByPath: OpenFolderActionPayload;
};

type FrameWidowAction = 'CLOSE' | 'MAXIMIZE' | 'MINIMIZE';

interface OpenFolderActionPayload {
  path: string;
  highlight?: boolean;
};

type UnsubscribeFunction = () => void;

interface Window {
  electron: {
    getSystemInfo: () => Promise<Promise<SystemInfo>>,
    getAppDataInfo: () => Promise<Promise<FoldersDetails>>,
    subscribeChangeView:
      (callback: (
        view: View
      ) => void) => UnsubscribeFunction;
    sendFrameAction: (payload: FrameWidowAction) => void;
    openFolderByPath: (payload: OpenFolderActionPayload) => void;
  }
}