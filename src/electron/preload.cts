const electron = require('electron');

const ipcInvoke =
  <Key extends keyof EventPayloadMapping>(
    key: Key,
  ): Promise<EventPayloadMapping[Key]> => {
    return electron.ipcRenderer.invoke(key);
  }

const ipcOn =
  <Key extends keyof EventPayloadMapping>(
    key: Key,
    callback: (payload: EventPayloadMapping[Key]) => void,
  ) => {
    const cb = (_: Electron.IpcRendererEvent, payload: any) => callback(payload);
    electron.ipcRenderer.on(key, cb);

    return () => electron.ipcRenderer.off(key, cb);
  }

const ipcSend =
  <Key extends keyof EventPayloadMapping>(
    key: Key,
    payload: EventPayloadMapping[Key],
  ) => {
    electron.ipcRenderer.send(key, payload);
  }

electron.contextBridge.exposeInMainWorld('electron', {
  subscribeChangeView: (callback) => {
    return ipcOn('changeView', (view) => {
      callback(view);
    });
  },
  getSystemInfo: () => ipcInvoke('getSystemInfo'),
  getAppDataInfo: () => ipcInvoke('getAppDataInfo'),
  sendFrameAction: (payload) => ipcSend('sendFrameAction', payload),
  openFolderByPath: (payload) => ipcSend('openFolderByPath', payload),
} satisfies Window['electron']);
