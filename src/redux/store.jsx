import { configureStore } from "@reduxjs/toolkit";
import TestingReducer from "../redux/TestingSlice"
import proReducer from "../redux/proSlice"
const store=configureStore({
    reducer:{
        app:TestingReducer,
        cart:proReducer
    }
})
export default store;