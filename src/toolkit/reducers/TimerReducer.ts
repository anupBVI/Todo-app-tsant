import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  currentTracking: {
    currentDate: "",
    loggedInAt: "",
    Totalbreaks: [],
  },
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    startTimer2: (state: any, action: any) => {
      const { currentDate, loggedInAt } = action.payload;

      state.currentTracking = {
        ...state.currentTracking,
        currentDate: currentDate,
        loggedInAt: loggedInAt,
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

export const { startTimer2, logBreaks } = timerSlice.actions;
export default timerSlice.reducer;
