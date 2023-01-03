import react from "react";
import { ADD_CATEGORY, ADD_TODO, DELETE_TODO, EDIT_TODO } from "./TodoActionTypes";

interface CatData {
  categoryN: string;
  icon: React.ReactNode;
  actualData: {}[];
}

export const addCategory = (payload: CatData) => {
  console.log(payload);
  return {
    type: ADD_CATEGORY,
    payload,
  };
};

interface AData {
  category: string;
  icon: string;
  id: string;
  title: string;
  description: string;
  url: string;
  isCompleted: boolean;
}

export const addTodo = (payload: AData) => {
  console.log(payload);
  return {
    type: ADD_TODO,
    payload,
  };
};

interface DData {
  id: string;
  category: string;
}

export const deleteTodo = (payload: DData) => {
  return {
    type: DELETE_TODO,
    payload: payload,
  };
};



export const editTodo = (payload: any) => {
    console.log("Edit todo")
    
  return {
    type: EDIT_TODO,
    payload:payload,
  };
};



