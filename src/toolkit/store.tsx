import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from './reducers/counterReducer';
import counterReducer from "./reducers/counterReducer"
import TimerReducer from "./reducers/TimerReducer";

export const store = configureStore({
    reducer : {
        counter : counterReducer,
        timer : TimerReducer
    }
})