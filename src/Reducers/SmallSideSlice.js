import { createSlice } from "@reduxjs/toolkit";

export const SmallSideSlice= createSlice({

    // name
    name: 'small',


    // Initial State
    initialState:{
        smallSlice: false
    },



    // Reducer method
    reducers:{
        ShowSmall:(state, action)=>{
            state.smallSlice= action.payload;
        },
    }


})
export const{ShowSmall}= SmallSideSlice.actions
export default SmallSideSlice.reducer