import { combineReducers } from "@reduxjs/toolkit";
import userAuthReducer from "./slices/authSlice";
import userAssessmentReducer from "./slices/platformDesk/assessmentSlice"

const rootReducer = combineReducers({
    auth: userAuthReducer, 
    assessment: userAssessmentReducer,
});

export default rootReducer;

