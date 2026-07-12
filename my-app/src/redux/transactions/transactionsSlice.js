import { createSlice } from '@reduxjs/toolkit';


const savedTransaction = localStorage.getItem('transactions');


export const  transactionSlice = createSlice({
      name: "transactions",
        initialState: { items:  savedTransaction && Array.isArray(JSON.parse(savedTransaction)) 
      ? JSON.parse(savedTransaction) 
      : []},
      reducers:{
        addTransaction: (state, action) => {
      state.items.push(action.payload);
   localStorage.setItem('transactions', JSON.stringify(state.items)); 
    },
       deleteTransaction:(state, action)=>{
        state.items = state.items.filter(item => item.id!== action.payload)
          localStorage.setItem('transactions', JSON.stringify(state.items)); 
       }
      }
})
export const selectTransactions = (state) => state.transactions.items;
export const  { addTransaction,deleteTransaction} = transactionSlice.actions;
export default transactionSlice.reducer;