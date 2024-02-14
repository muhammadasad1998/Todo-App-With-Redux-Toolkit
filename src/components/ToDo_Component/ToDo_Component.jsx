import React, { useState } from "react";
import { Button, Paper, Stack, Typography } from "@mui/material";
import { todosData } from "../../utils/TodosData";
import TodosCard from "./TodosCard";
import { Link } from "react-router-dom";
import { Container } from "postcss";
import Input_Components from "../Input_Component/Input_Components";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodoAction,
  completeTodoAction,
  deleteTodoAction,
} from "../../store/slices/TodoSlice";

const ToDo_Component = () => {
  const [todos, setTodos] = useState(todosData);
  const [value, setValue] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [todosShow, settodosShow] = useState(true);
  const todos_Data = useSelector((state) => state.todos_data.todos);
  const dispatch = useDispatch();
  // console.log(todos_Data)
  const onChangeHandle = (e) => {
    if (e.target.id == "todo") {
      const value = e.target.value;
      setValue(value);
    } else if (e.target.id == "todoDesc") {
      const value = e.target.value;
      setDescription(value);
    }
    console.log(value);
  };

  const onSubmitHandle = () => {
    if (!value) return;
    dispatch(addTodoAction({ text: value, description, isCompleted: false })); // Pass both text and description
    setValue("");
    setDescription("");
  };
  // const addTodo = ({ text, description }) => {
  //   setTodos((prevTodos) => {
  //     const newTodos = [...prevTodos, { text, description, isCompleted: false }];
  //     console.log("Add To DO Clicked", newTodos);
  //     return newTodos;
  //   });
  // };
  const completeTodo = (current_ind) => {
    dispatch(completeTodoAction(current_ind));
  };

  const deleteTodo = (current_ind) => {
    // setTodos((prevTodos) => {
    //   const newTodos = [...prevTodos];
    //   newTodos.splice(current_ind, 1);
    //   return newTodos;
    // });
    dispatch(deleteTodoAction(current_ind));
  };
  return (
    <>
      <Stack justifyContent="center" alignItems="center" className="h-screen">
        <Button
          sx={{ my: 2 }}
          variant="outlined"
          color="warning"
          onClick={() => settodosShow(!todosShow)}
        >
          {todosShow ? "See Todos" : "Add Todo"}
        </Button>

        {todosShow ? (
          <Paper
            className="max-w-sm"
            elevation={24}
            sx={{ p: 2, borderRadius: 5, textAlign: "center" }}
          >
            <Typography variant="h4" textAlign="center" fontWeight="bold">
              Add Todo
            </Typography>
            <Input_Components
              onChange={onChangeHandle}
              type="text"
              id="todo"
              label="Todo Title"
              placeholder="Enter your Todo Title"
              value={value}
            />
            <Input_Components
              onChange={onChangeHandle}
              type="text"
              id="todoDesc"
              label="Todo Description"
              placeholder="Enter your Todo Description"
              value={description}
            />
            <Button
              onClick={onSubmitHandle}
              variant="contained"
              fullWidth
              color="success"
              sx={{ mt: 2 }}
            >
              Add
            </Button>
          </Paper>
        ) : (
          <div className="container mx-auto">
            <Typography textAlign="center" variant="h3" mb={5}>
              Todos
            </Typography>
            <TodosCard
              todos={todos_Data}
              completeTodo={completeTodo}
              deleteTodo={deleteTodo}
            />
          </div>
        )}
      </Stack>

      {/* {todos.map((current_obj, current_index) => {
          const { text, description } = current_obj;
          return <h1>{text}</h1>;
        })} */}
    </>
  );
};

export default ToDo_Component;
