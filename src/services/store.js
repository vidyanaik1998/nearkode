import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../services/profileSlice"


export const store = configureStore({
    reducer:{
        profile :profileReducer,

    }
})


export  default store;