import { combineReducers } from "@reduxjs/toolkit";
import userAuthReducer from "./slices/authSlice";

const rootReducer = combineReducers({
    auth: userAuthReducer, 
});

export default rootReducer;

