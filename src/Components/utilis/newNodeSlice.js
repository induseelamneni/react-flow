import { createSlice } from "@reduxjs/toolkit";

const newNodeSlice = createSlice({
    name:'newNode',
    initialState:null,
    reducers:{
        addNode:(state, action) => {
            return action.payload


        },
        removeNode:(state,action)=>{
            return null
        }
    }
    
})

export const {addNode, removeNode} = newNodeSlice.actions

export default newNodeSlice.reducer