import { createSlice } from '@reduxjs/toolkit';

export const balanceSlice = createSlice({
  name: "balance",
  initialState: {   value: '', isSet: false },
  reducers: {
    setBalance: (state, action) => {
      state.value = action.payload;
      state.isSet = true;
    }
  }
});

export const selectBalance = (state) => state.balance.value;
export const selectIsSet = (state) => state.balance.isSet;

export const { setBalance } = balanceSlice.actions;
export default balanceSlice.reducer;
