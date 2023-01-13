import { createSlice } from "@reduxjs/toolkit";
import { genActionStyle } from "antd/es/alert/style";
import staticMethods from "antd/es/message";



const initialState: any = {
  currentTracking: {
    isAuth: false,
    currentDate: "",
    loggedInAt: "",
    Totalbreaks: [],

    breaks2: false,
    showAll2: false,
    totalLoggedInTime2: null,
    fullDay2: "09:00:00",
    halfDay2: "05:00:00",
    compared2: null,
  },
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    setAuthorization: (state: any, action) => {
      console.log("payload", action.payload);

      state.currentTracking = {
        ...state.currentTracking,
        isAuth: action.payload,
      };
    },

    startTimer: (state: any, action: any) => {
      const { currentDate, loggedInAt } = action.payload;

      state.currentTracking = {
        ...state.currentTracking,
        isAuth: state.isAuth,
        loggedInAt: loggedInAt,
        currentDate: currentDate,
      };
    },

    stopTimer: (state: any, action: any) => {},

    startBreak: (state: any, action: any) => {},


    stopBreak: (state: any, action) => {
      // console.log(action.payload)
      state.currentTracking = {
        ...state.currentTracking,
        breaks: action.payload,
      };
    },

    logBreaks: (state, action: any) => {
      console.log("IN REDUCER", action.payload);

      const newBreakTime = [
        // ...state.currentTracking.Totalbreaks,
        // // { break: action.payload },
        ...action.payload,
      ];
      //   console.log("NEW BREAK", newBreakTime, state.currentTracking.Totalbreak);
      state.currentTracking = {
        ...state.currentTracking,
        Totalbreaks: newBreakTime,
      };
    },
  },
});

export const {
  setAuthorization,
  startTimer,
  stopTimer,
  startBreak,
  stopBreak,
  logBreaks,
} = timerSlice.actions;
export default timerSlice.reducer;
