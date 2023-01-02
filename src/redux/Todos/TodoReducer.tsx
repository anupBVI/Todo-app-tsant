import { COMPLETE_TODO } from "./TodoActionTypes";
import { GlobalOutlined } from "@ant-design/icons";
import { v4 as uuidv4 } from "uuid";
import { Action } from "@remix-run/router";

const initialState = {
  todos: [
    {
      categoryN: "General",
      icon: <GlobalOutlined style={{ fontSize: "1.3rem", color: "green" }} />,
      actualData: [
        {
          id: uuidv4(),
          title: "Default 01",
          description: "Default Description",
          url: "Default Url",
          isCompleted: false,
        },
      ],
    },
  ],
};

const TodoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case COMPLETE_TODO: {
      const toggleTodos = state.todos.map((elem: any) => {
        return elem.actualData.id === action.payload.id
          ? { ...action.payload, isCompleted: !action.payload.isCompleted }
          : elem;
      });
      return {
        ...state,
        todos : toggleTodos
      };
    }
    default:
      return state;
  }
};

export default TodoReducer;
