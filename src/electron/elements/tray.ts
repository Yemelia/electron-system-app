import { app, Menu, Tray } from 'electron';
import * as path from 'path';
import { getAssetsPath } from '../utils';
import { getMainWindow } from '../windowManager';

export const createTray = () => {
  const mainWindow = getMainWindow();
  const tray = new Tray(
    path.join(getAssetsPath(),
    'performance.png'),
  );

  tray.setContextMenu(Menu.buildFromTemplate([
    {
      label: 'Show',
      click: () => {
        mainWindow.show();

        if (app.dock) {
          app.dock.show();
        }
      }
    },
    {
      label: 'Quit',
      click: () => app.quit(),
    }
  ]));
};