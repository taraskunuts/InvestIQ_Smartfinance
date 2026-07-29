import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "../redux/auth/authSlice";
import balanceReducer from "../redux/balance/balanceSlice";
import transactionsReducer from "../redux/transactions/transactionsSlice";
import reportReducer from "../redux/report/reportSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  balance: balanceReducer,
  transactions: transactionsReducer,
  report: reportReducer,
});

export default rootReducer;