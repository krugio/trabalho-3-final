import { lazy } from 'react';

const Products = lazy(() => import('./list/Products'));
const Product = lazy(() => import('./detail/Product'));

const productsConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'products',
      element: <Products />,
    },
    {
      path: 'products/:productId/*',
      element: <Product />,
    },
  ],
};

export default productsConfig;
