import { createSlice } from '@reduxjs/toolkit';



export const  balanceSlice = createSlice({
      name: "balance",
        initialState: { value: 0, isSet: false },
      reducers:{
       setBalance:(action, state)=>{
        state.value=action.payload;
        state.isSet = true;

       }
      }
})
export const selectBalance = (state) => state.balance.value;
export const selectIsSet = (state) => state.balance.isSet;

export const  { setBalance} = balanceSlice.actions;
export default balanceSlice.reducer;