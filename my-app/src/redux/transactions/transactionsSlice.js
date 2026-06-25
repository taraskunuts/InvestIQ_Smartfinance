import { createSlice } from '@reduxjs/toolkit';



export const  transactionSlice = createSlice({
      name: "balance",
        initialState: {items: []},
      reducers:{
        addTransaction: (state, action) => {
      state.items.push(action.payload);
    },
       deleteTransaction:(state, action)=>{
        state.items = state.items.filter(item => item.id!== action.payload)
       }
      }
})
export const selectTransactions = (state) => state.transactions.items;
export const  { addTransaction,deleteTransaction} = transactionSlice.actions;
export default transactionSlice.reducer;