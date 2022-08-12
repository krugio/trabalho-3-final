import { combineReducers } from '@reduxjs/toolkit';
import order from './orderSlice';
import orders from './ordersSlice';

const reducer = combineReducers({
  orders,
  order,
});

export default reducer;
