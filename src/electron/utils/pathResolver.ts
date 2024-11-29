import { app } from 'electron';
import * as path from 'path';
import { isDev } from './isDev';

export const getPreloadPath = () => {
  return path.join(
    app.getAppPath(),
    isDev() ? '.' : '..',
    '/dist-electron/preload.cjs',
  );
};

export const getUIPath = () => path.join(app.getAppPath(), '/dist-react/index.html');

export const getAssetsPath = () => {
  return path.join(app.getAppPath(), isDev() ? '.' : '..', '/src/assets');
}