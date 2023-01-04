import { combineReducers } from "redux";
import cakeReducer from "./Cake/CakeReducer";
import IceCreamReducer from "./IceCream/IceCreamReducer";
import TimerReducer from "./Timer/TimerReducer";
import TodoReducer from "./Todos/TodoReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: IceCreamReducer,
  todos : TodoReducer,
  timer : TimerReducer
});

export default rootReducer;
