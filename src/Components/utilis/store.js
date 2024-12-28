import {configureStore} from "@reduxjs/toolkit"
import nodeReducer  from "../utilis/nodeInputSlice"
import newNodeReducer from '../utilis/newNodeSlice';

const store = configureStore(
    {
       reducer:{
        node: nodeReducer,
        newNode:newNodeReducer
       }
    }
)

export default store