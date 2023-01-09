import {
    END_BREAK,
    START_BREAK,
    START_TIMER,
    STOP_TIMER,
  } from './TimerActionTypes';
  
  export const startTimer = (payload: any) => {
    return {
      type: START_TIMER,
      payload,
    };
  };

  
  export const endTimer = (payload: any) => {
    return {
      type: STOP_TIMER,
      payload,
    };
  };
  export const startBreak = (payload: any) => {
    return {
      type: START_BREAK,
      payload,
    };
  };
  export const endBreak = (payload: any) => {
    return {
      type: END_BREAK,
      payload,
    };
  };