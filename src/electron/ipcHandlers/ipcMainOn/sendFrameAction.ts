import { getMainWindow } from '../../windowManager';

export const sendFrameAction = (payload: FrameWidowAction) => {
  const mainWindow = getMainWindow();

  switch(payload) {
    case 'CLOSE':
      mainWindow.close();
      break;
    case 'MAXIMIZE':
      mainWindow.maximize();
      break;
    case 'MINIMIZE':
      mainWindow.minimize();
      break;
  }
}