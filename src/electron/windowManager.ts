import { BrowserWindow } from 'electron';
import { getPreloadPath, getUIPath, isDev } from './utils';

let window: BrowserWindow | null = null;

export const createMainWindow = () => {
  window = new BrowserWindow({
    width: 1200,
    height: 600,
    webPreferences: {
      preload: getPreloadPath(),
    },
    frame: true,
  });

  if (isDev()) {
    window.loadURL('http://localhost:5123/');
  } else {
    window.loadFile(getUIPath());
  }

  return window;
};

export const getMainWindow = (): BrowserWindow => window!;