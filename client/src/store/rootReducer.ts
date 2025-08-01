import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import userAuthReducer from "./slices/authSlice";

const rootReducer = combineReducers({
    user: userReducer,
    auth: userAuthReducer, 
});

export default rootReducer;

