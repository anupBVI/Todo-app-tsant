import { ADD_TIMER } from "./TimerActionTypes"

export const addTimer = (payload:any)=>{
    return {
        type : ADD_TIMER,
        payload
    }
}