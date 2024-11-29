import { ipcMain } from 'electron';
import { validateEventFrame } from '../../utils';
import { getSystemInfo } from './getSystemInfo';
import { getAppDataFoldersAndSizes } from './getAppDataInfo';

const ipcMainHandle = <Key extends keyof EventPayloadMapping>(
  key: string,
  handler: () => EventPayloadMapping[Key]
) => {
  ipcMain.handle(key, (event) => {
    validateEventFrame(event.senderFrame);

    return handler();
  })
};

export const ipcMainHandleHandlers = () => {
  ipcMainHandle<'getSystemInfo'>('getSystemInfo', getSystemInfo);
  ipcMainHandle<'getAppDataInfo'>('getAppDataInfo', getAppDataFoldersAndSizes);
}