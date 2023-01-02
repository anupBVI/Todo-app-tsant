import { COMPLETE_TODO } from "./TodoActionTypes"

export const completeTodo = ()=>{
    return{
        type : COMPLETE_TODO,
    }
}