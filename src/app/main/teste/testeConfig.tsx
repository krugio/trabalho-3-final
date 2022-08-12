import { lazy } from 'react';

import { authRoles } from 'app/auth';

const Teste = lazy(() => import('./Teste'));

const ExampleConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  auth: authRoles.admin,
  routes: [
    {
      path: 'teste',
      element: <Teste />,
    },
  ],
};

export default ExampleConfig;
