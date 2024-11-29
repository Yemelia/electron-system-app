import { ipcMainHandleHandlers } from './ipcMainHandle';
import { ipcMainOnHandlers } from './ipcMainOn'

export const ipcHandlers = () => {
  ipcMainOnHandlers();
  ipcMainHandleHandlers();
}