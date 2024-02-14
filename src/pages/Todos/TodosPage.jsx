import React from "react";
import TodosCard from "../../components/ToDo_Component/TodosCard";
import { useDispatch, useSelector } from "react-redux";
import { completeTodoAction, deleteTodoAction } from "../../store/slices/TodoSlice";

const TodosPage = () => {
  const todos_Data = useSelector((state) => state.todos_data.todos);
  const dispatch = useDispatch();
  const completeTodo = (current_ind) => {
    dispatch(completeTodoAction(current_ind));
  };
  const deleteTodo = (current_ind) => {
    dispatch(deleteTodoAction(current_ind));
  };

  return <TodosCard todos={todos_Data} completeTodo={completeTodo} deleteTodo={deleteTodo}/>;
};

export default TodosPage;
