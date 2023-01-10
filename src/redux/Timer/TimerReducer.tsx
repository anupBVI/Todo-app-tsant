import Item from "antd/es/list/Item";
import { START_BREAK, START_TIMER } from "./TimerActionTypes";

const iState = [
  {
    currentDate: "",
    loggedInAt: "",
    Totalbreaks: {
      break: "00:00:01",
    },
  },
];

const InitialState = [
  {
    currentDate: "05/01/2021",
    loggedInAt: "10:00Am",
    loggedOutAt: "07:00Pm",
    totalLoggedInTime: "08:00",
    breaks: [
      {
        break1: "lunch",
        breakStarted: "01:00Pm",
        breakEnded: "02:00Pm",
        totalBreakTime: "01:00",
      },
      {
        break2: "Coffee",
        breakStarted: "04:00Pm",
        breakEnded: "04:15Pm",
        totalBreakTime: "00:15",
      },
    ],
  },
];

const TimerReducer = (state: any = iState, action: any) => {
  switch (action.type) {
    case START_TIMER: {
      const { currentDate, loggedInAt } = action.payload;

      return [
        {
          currentDate: currentDate,
          loggedInAt: loggedInAt,
          Totalbreaks: [
            {
              breaks: "00:00:02",
            },
          ],
        },
      ];
    }

    case START_BREAK: {
      console.log(state[0]);

      if (state[0].Totalbreaks !== null) {
        state[0].Totalbreaks?.push({ breaks: action.payload });
      }

      return state;
    }
    default:
      return [...state];
  }
};
export default TimerReducer;
