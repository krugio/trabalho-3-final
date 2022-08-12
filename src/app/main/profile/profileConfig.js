import { lazy } from 'react';

const Profile = lazy(() => import('./Profile'));

const profileConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'profile',
      element: <Profile />,
    },
  ],
};

export default profileConfig;
