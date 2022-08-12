import { lazy } from 'react';

const ResetPassword = lazy(() => import('./ResetPassword'));

const resetPasswordConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pages/authentication/reset-password',
      element: <ResetPassword />,
    },
  ],
};

export default resetPasswordConfig;
