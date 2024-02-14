import { createSlice } from "@reduxjs/toolkit";
import { todosData } from "../../utils/TodosData";

const initialState = {
  todos: todosData,
};
const TodoSlice = createSlice({
  initialState: initialState,
  name: "Todo_Data",
  reducers: {
    completeTodoAction: (state, action) => {
      const { payload } = action;
      state.todos[payload].isCompleted = true;
      console.log("payload", action);
    },
    addTodoAction: (state, action) => {
      state.todos.push(action.payload);
      console.log("addTodoAction", action.payload);
    },
    deleteTodoAction: (state, action) => {
      const { payload } = action;
      state.todos.splice(payload, 1);
    },
  },
});

export default TodoSlice.reducer;
export const { completeTodoAction, addTodoAction, deleteTodoAction } =
  TodoSlice.actions;
