import { combineReducers } from "redux";
import cakeReducer from "./Cake/CakeReducer";
import IceCreamReducer from "./IceCream/IceCreamReducer";
import TodoReducer from "./Todos/TodoReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: IceCreamReducer,
  todos : TodoReducer
});

export default rootReducer;
