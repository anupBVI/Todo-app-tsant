import {
  ADD_CATEGORY,
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
} from "./TodoActionTypes";
import { GlobalOutlined } from "@ant-design/icons";
import { v4 as uuidv4 } from "uuid";

const initialState = [
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
  {
    categoryN: "Technology",
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
  {
    categoryN: "Health",
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
];

const TodoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_CATEGORY: {
      console.log(action.payload);
      return [...state, action.payload];
    }

    case ADD_TODO: {
      const categoryIndex = state.findIndex(
        (cat) => cat.categoryN === action.payload.category
      );

      if (categoryIndex !== -1) {
        state[categoryIndex].actualData.push({
          id: uuidv4(),
          title: action.payload.title,
          description: action.payload.description,
          url: action.payload.url,  
          isCompleted: false,
        });
      }
      return [...state];
    }

    case DELETE_TODO: {
      console.log("delete id , ", action.payload);

      let newState = state.map((item) => {
        if (item.categoryN === action.payload.category) {
          return {
            ...item,
            actualData: item.actualData.filter(
              (data) => data.id !== action.payload.id
            ),
          };
        }
        return item;
      });
      console.log(newState);
      return newState;
    }

    case EDIT_TODO: {
      console.log("Hello");

      const editedData = state.map((item: any) => {
        console.log(action);
        if (item.categoryN === action.payload.category) {
          console.log("need to change -", action.payload.category);
          return {
            ...item,
            actualData: item.actualData.map((dataItem: any) => {
              if (dataItem.id === action.payload.id) {
                return {
                  ...dataItem,
                  // id:action.payload.id,

                  title: action.payload.values.title,
                  description: action.payload.values.description,
                  url: action.payload.values.url,
                  isCompleted: false,
                };
              }
              return dataItem;
            }),
          };
        }
        return item;
      });

      return editedData;
    }

    default:
      return state;
  }
};

export default TodoReducer;
