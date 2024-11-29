import { app } from 'electron';

import { createTray } from './elements';
import { createMainWindow } from './windowManager';
import { ipcHandlers } from './ipcHandlers';
import { handleCloseEvents } from './events';

// Disable app menu
// Menu.setApplicationMenu(null);

app.on('ready', () => {
	createMainWindow();

	ipcHandlers();

	createTray();

	handleCloseEvents();
});

