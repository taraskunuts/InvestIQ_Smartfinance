import { configureStore } from '@reduxjs/toolkit';

import balanceReducer from '../redux/balance/balanceSlice';
import transactionReducer from '../redux/transactions/transactionsSlice';

const store = configureStore({
  reducer: {
    balance: balanceReducer,
    transactions: transactionReducer,
  },
});


export default store;
