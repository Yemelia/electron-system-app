import { WebFrameMain } from 'electron';
import { pathToFileURL } from 'url';
import { isDev } from './isDev';
import { getUIPath } from './pathResolver';

export const validateEventFrame = (frame: WebFrameMain | null) => {
  if (isDev() && frame && new URL(frame.url).host === 'localhost:5123') {
    return;
  }

  if (!frame || frame.url !== pathToFileURL(getUIPath()).toString()) {
    throw new Error('Malicious event');
  }
}