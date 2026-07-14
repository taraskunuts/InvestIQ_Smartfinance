import { createSlice } from '@reduxjs/toolkit';

const getInitialBalance = () => {
  const saved = localStorage.getItem('currentBalance');
  if (!saved || saved.startsWith('[') || saved.startsWith('{')) {
    return 0; 
  }
  return Number(saved) || 0;
};

export const balanceSlice = createSlice({
  name: "balance",
  initialState: {   
    value: getInitialBalance(), 
    isSet: getInitialBalance() !== 0
  },
  reducers: {
    setBalance: (state, action) => {
      if (action.payload === null || typeof action.payload === 'object') {
        return;
      }
      const newValue = Number(action.payload);
      if (isNaN(newValue)) return;
      
      state.value = newValue;
      state.isSet = true;
      localStorage.setItem('currentBalance', String(newValue));
    }
  }
});

export const selectBalance = (state) => state.balance.value;
export const selectIsSet = (state) => state.balance.isSet;
export const { setBalance } = balanceSlice.actions;
export default balanceSlice.reducer;

