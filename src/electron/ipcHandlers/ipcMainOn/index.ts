import { ipcMain } from 'electron';
import { validateEventFrame } from '../../utils';
import { sendFrameAction } from './sendFrameAction';
import { EventPayloadMapping } from '../../types';

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
}
