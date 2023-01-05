import { START_TIMER } from "./TimerActionTypes";

const initialState: any = {
  startedAt: "",
};

const InitialState = [
  {
    currentDate: "05/01/2021",
    loggedInAt: "10:00Am",
    loggedOutAt:"07:00Pm",
    totalLoggedInTime:"08:00",
    breaks: [
      {
        break1: "lunch",
        breakStarted : "01:00Pm",
        breakEnded : "02:00Pm",
        totalBreakTime : "01:00"
      },
      {
        break2: "Coffee",
        breakStarted : "04:00Pm",
        breakEnded : "04:15Pm",
        totalBreakTime : "00:15"
      },
    ],
  },
];

const TimerReducer = (state = InitialState, action: any) => {
  switch (action.type) {
    case START_TIMER: {

      console.log(action.payload)
      
      
      return {
        startedAt: action.payload,
        state
      };
    }
    default:
      return state;
  }
};
export default TimerReducer;

// const initialState = [
//   {
//     date: "",
//     startTime: "",
//     endTime: "",
//     breaks: [
//       {
//         startBreak: "",
//         endBreak: "",
//       },
//       {
//         startBreak: "",
//         endBreak: "",
//       },
//     ],
//   },
// ];
