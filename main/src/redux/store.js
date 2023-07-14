import {configureStore} from "@reduxjs/toolkit";
import {profileReducer, userReducer}  from "./reducers/userReducer.js";

const store = configureStore({
    reducer:{
        user: userReducer,
        profile: profileReducer
    },
})

export default store;

export const server = "https://coursebundler-8v3y.onrender.com/api/v1";
