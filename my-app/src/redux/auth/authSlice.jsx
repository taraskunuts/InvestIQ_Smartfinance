import { createSlice } from "@reduxjs/toolkit";


const getUser = () => {

    try {

        const saved = localStorage.getItem("user");

        return saved ? JSON.parse(saved) : null;

    } catch {

        return null;

    }

};



const authSlice = createSlice({

    name: "auth",

    initialState: {

        user: getUser(),

    },


    reducers: {


        login: (state, action) => {

            state.user = action.payload;


            localStorage.setItem(
                "user",
                JSON.stringify(action.payload)
            );

        },


        logout: (state) => {

            state.user = null;

            localStorage.removeItem("user");

        },


    },


});



export const {
    login,
    logout
} = authSlice.actions;


export const selectUser = (state) => state.auth.user;


export default authSlice.reducer;