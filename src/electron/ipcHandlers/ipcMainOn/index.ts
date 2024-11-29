import { ipcMain } from 'electron';
import { validateEventFrame } from '../../utils';
import { sendFrameAction } from './sendFrameAction';
import { openFolderByPath } from './openInFileExplorer';

const ipcMainOn = <Key extends keyof EventPayloadMapping>(
  key: string,
  handler: (payload: EventPayloadMapping[Key]) => void,
) => {
  ipcMain.on(key, (event, payload) => {
    validateEventFrame(event.senderFrame);

    return handler(payload);
  })
};

export const ipcMainOnHandlers = () => {
  ipcMainOn<'sendFrameAction'>('sendFrameAction', sendFrameAction);
  ipcMainOn<'openFolderByPath'>('openFolderByPath', openFolderByPath);
}
