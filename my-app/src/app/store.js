import { configureStore } from '@reduxjs/toolkit';

import balanceReducer from '../redux/balance/balanceSlice';
import transactionsReducer from '../redux/transactions/transactionsSlice';

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    balance: balanceReducer,           
  },
});


export default store;
