import { createSlice } from '@reduxjs/toolkit';

const getInitialTransactions = () => {
  try {
    const saved = localStorage.getItem('transactions');
    if (!saved) return [];
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export const transactionSlice = createSlice({
  name: "transactions",
  initialState: { 
    items: getInitialTransactions()
  },
  reducers: {
    addTransaction: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem('transactions', JSON.stringify(state.items)); 
    },
    deleteTransaction: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      localStorage.setItem('transactions', JSON.stringify(state.items)); 
    }
  }
});

export const selectTransactions = (state) => state.transactions.items;
export const { addTransaction, deleteTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;
