import { ADD_TIMER } from "./TimerActionTypes";

const initialState = [
  {
    date: "",
    startTime: "",
    endTime: "",
    breaks: [
      {
        startBreak: "",
        endBreak: "",
      },
      {
        startBreak: "",
        endBreak: "",
      },
    ],
  },
];

const TimerReducer = (state=initialState , action:any)=>{
    switch (action.type){
        case ADD_TIMER : {
            return {
                state
            }
        }
        default : return state
    }
}

export default TimerReducer;
