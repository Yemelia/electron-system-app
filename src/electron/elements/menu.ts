import { app, Menu } from 'electron'
import { ipcWebContentSend, isDev } from '../utils';
import { getMainWindow } from '../windowManager';

export const createMenu = () => {
  const mainWindow = getMainWindow();

  Menu.setApplicationMenu(Menu.buildFromTemplate([
    {
      label: 'App',
      type: 'submenu',
      submenu: [
        {
          label: 'DevTools',
          click: () => mainWindow.webContents.openDevTools(),
          visible: isDev(),
        },
        {
          label: 'Quit',
          click: () => app.quit(),
        },
      ]
    },
    {
      label: 'View',
      type: 'submenu',
      submenu: [
        {
          label: 'CPU',
          click: () => ipcWebContentSend('changeView', mainWindow.webContents, 'CPU'),
        },
        {
          label: 'RAM',
          click: () => ipcWebContentSend('changeView', mainWindow.webContents, 'RAM'),
        },
        {
          label: 'STORAGE',
          click: () => ipcWebContentSend('changeView', mainWindow.webContents, 'STORAGE'),
        }
      ],
    }
  ]));
}