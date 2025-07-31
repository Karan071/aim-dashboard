import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";

const rootReducer = combineReducers({
    // Add your reducers here
    user: userReducer,
});

export default rootReducer;

