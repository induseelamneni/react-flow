import { createSlice } from "@reduxjs/toolkit";

const nodeInputSlice = createSlice({
    name:'nodeInput',
    initialState:null,
    reducers:{
        addNodeInput:(state, action) => {
            return action.payload


        },
        removeNodeInput:(state,action)=>{
            return null
        }
    }
    
})

export const {addNodeInput, removeNodeInput} = nodeInputSlice.actions

export default nodeInputSlice.reducer