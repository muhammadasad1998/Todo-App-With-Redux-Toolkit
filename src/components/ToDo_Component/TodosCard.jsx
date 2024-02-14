import React, { useState } from "react";
import { todosData } from "../../utils/TodosData";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useSelector } from "react-redux";

const TodosCard = ({ todos, completeTodo, deleteTodo }) => {
  const [todosdata, setTodos] = useState(todos);
  const todos_Data = useSelector((state)=>state.todos_data.todos)
console.log(todos_Data)
  return (
    <>
      <Grid2 container spacing={2}>
        {todos.map((current_obj, current_ind) => {
          const { text, description, isCompleted } = current_obj;
          return (
            <Grid2 md={3} sm={4} xs={6}>
              <Card
                key={current_ind} // Add a unique key for each card
                sx={{
                  backgroundColor: isCompleted ? "lightgreen" : "lightblue",
                  transition: "all 0.3s ease-in",
                  borderRadius: 5,
                  p: 2,
                }}
                className="rounded"
              >
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <Chip
                      label={isCompleted ? "Completed" : "Pending"}
                      color={isCompleted ? "success" : "error"}
                    />
                  </Typography>
                  <Typography sx={{textDecoration: isCompleted ? 'line-through' : ''}} variant="h5" component="div">
                    {text}
                  </Typography>
                  <Typography
                    sx={{ mb: 1.5 }}
                    color="text.secondary"
                  ></Typography>
                  <Typography sx={{textDecoration: isCompleted ? 'line-through' : ''}} variant="body2">{description}</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => completeTodo(current_ind)}
                    id="complete"
                    color={isCompleted ? "warning" : "success"}
                    variant="outlined"
                    size="small"
                    sx={{ display: isCompleted ? "none" : "" }}
                  >
                    Complete
                  </Button>
                  <Button
                    onClick={() => deleteTodo(current_ind)}
                    id="delete"
                    color="error"
                    variant="outlined"
                    size="small"
                  >
                    X
                  </Button>
                </CardActions>
              </Card>
            </Grid2>
          );
        })}
      </Grid2>
    </>
  );
};

export default TodosCard;
