import { lazy } from 'react';

const ConfirmationRequired = lazy(() => import('./ConfirmationRequired'));

const confirmationRequiredConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pages/authentication/confirmation-required',
      element: <ConfirmationRequired />,
    },
  ],
};

export default confirmationRequiredConfig;
