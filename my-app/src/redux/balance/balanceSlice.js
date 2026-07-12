import { createSlice } from '@reduxjs/toolkit';

const getInitialBalance = () => {
  const saved = localStorage.getItem('currentBalance') || '';
  if (saved.startsWith('[') || saved.startsWith('{')) {
    return ''; 
  }
  return saved;
};

const savedBalance = getInitialBalance();

export const balanceSlice = createSlice({
  name: "balance",
  initialState: {   
    value: savedBalance, 
    isSet: !!savedBalance
  },
  reducers: {
    setBalance: (state, action) => {
      if (typeof action.payload === 'object') {
        console.error("Попытка записать объект в баланс:", action.payload);
        return;
      }
      state.value = action.payload;
      state.isSet = true;
    }
  }
});

export const selectBalance = (state) => state.balance.value;
export const selectIsSet = (state) => state.balance.isSet;

export const { setBalance } = balanceSlice.actions;
export default balanceSlice.reducer;
