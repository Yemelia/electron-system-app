import { WebContents } from 'electron';
import { EventPayloadMapping } from '../types';

export const ipcWebContentSend = <Key extends keyof EventPayloadMapping>(
  key: Key,
  webContents: WebContents,
  payload: EventPayloadMapping[Key],
) => {
  webContents.send(key, payload)
};