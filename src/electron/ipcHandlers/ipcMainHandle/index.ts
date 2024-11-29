import { ipcMain } from 'electron';
import { EventPayloadMapping } from '../../types';
import { validateEventFrame } from '../../utils';
import { getStaticData } from './getStaticData';
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
  ipcMainHandle<'getStaticData'>('getStaticData', getStaticData);
  ipcMainHandle<'getAppDataInfo'>('getAppDataInfo', getAppDataFoldersAndSizes);
}