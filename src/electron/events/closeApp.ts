import { app } from 'electron';
import { getMainWindow } from '../windowManager';

export function handleCloseEvents() {
	const mainWindow = getMainWindow();
	let willClose = false;

	mainWindow.on('close', (e) => {
		if (willClose) {
			return;
		}

		e.preventDefault();
			mainWindow.hide();
	
			if (app.dock) {
				app.dock.hide();
			}
	});

	app.on('before-quit', () => {
		willClose = true;
	});

	mainWindow.on('show', () => {
		willClose = false;
	});
}