import { lazy } from 'react';

const Order = lazy(() => import('./detail/Order'));
const Orders = lazy(() => import('./list/Orders'));

const ordersConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: '/orders',
      element: <Orders />,
    },
    {
      path: '/orders/:orderId',
      element: <Order />,
    },
  ],
};

export default ordersConfig;
