import { WebContents } from 'electron';

export const ipcWebContentSend = <Key extends keyof EventPayloadMapping>(
  key: Key,
  webContents: WebContents,
  payload: EventPayloadMapping[Key],
) => {
  webContents.send(key, payload)
};