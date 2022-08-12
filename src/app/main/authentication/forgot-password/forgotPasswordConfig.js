import { lazy } from 'react';

const ForgotPassword = lazy(() => import('./ForgotPassword'));

const forgotPasswordPagesConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'forgot-password',
      element: <ForgotPassword />,
    },
  ],
};

export default forgotPasswordPagesConfig;
