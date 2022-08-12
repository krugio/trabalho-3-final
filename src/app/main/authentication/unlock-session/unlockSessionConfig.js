import { lazy } from 'react';

const UnlockSession = lazy(() => import('./UnlockSession'));

const unlockSessionConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pages/authentication/unlock-session',
      element: <UnlockSession />,
    },
  ],
};

export default unlockSessionConfig;
