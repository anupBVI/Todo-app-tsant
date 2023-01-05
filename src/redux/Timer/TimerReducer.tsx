import { startTimer } from './TimerActions';

const initialState: any = [
  {
    date: '05/01/2023',
    start: '00:00AM',
    end: '10:00AM',
    breaks: [
      {
        startBreak: '01:00PM',
        endBreak: '02:00PM',
      },
    ],
  },
];

const TimerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case startTimer: {

      const x = [
        {
          date : action.payload.date,
          start: action.payload.start,
          end: '',
          breaks: [
            {
              startBreak: '',
              endBreak: '',
            },
          ],
        }
      ]

      return x
      ;
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