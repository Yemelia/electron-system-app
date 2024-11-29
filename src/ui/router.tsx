import {
  createBrowserRouter,
} from "react-router-dom";
import App from './App';
import { AppDataUsage } from './pages/AppDataUsage';
import { DefaultLayout } from './layouts/Default';
import OrdersPage from './pages/orders';

export const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        path: '/',
        Component: DefaultLayout,
        children: [
          {
            path: '/app-data-usage',
            Component: AppDataUsage,
          },
          {
            path: '/orders',
            Component: OrdersPage,
          },
        ],
      },
    ],
  },
]);