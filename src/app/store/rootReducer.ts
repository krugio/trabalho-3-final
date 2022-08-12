import { combineReducers } from '@reduxjs/toolkit';
import eCommerceApp from 'app/main/orders/store';
import analyticsDashboardApp from 'app/main/dashboards/analytics/store';
import projectDashboardApp from 'app/main/dashboards/project/store';
import helpCenterApp from 'app/main/help-center/store';
import notificationPanel from 'app/theme-layouts/shared-components/notificationPanel/store';
import chatPanel from 'app/theme-layouts/shared-components/chatPanel/store';
import quickPanel from 'app/theme-layouts/shared-components/quickPanel/store';
import fuse from './fuse';
import i18n from './i18nSlice';
import user from './userSlice';
import { product, products } from '../main/products/store';
import { example, examples } from '../main/example/store';
import recados from '../main/teste/store/recadosSlice';

const combinedReducer = combineReducers({
  fuse,
  i18n,
  user,
  product,
  products,
  analyticsDashboardApp,
  projectDashboardApp,
  helpCenterApp,
  eCommerceApp,
  chatPanel,
  notificationPanel,
  quickPanel,
  example,
  examples,
  recados,
});

export default combinedReducer;
