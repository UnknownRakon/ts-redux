import { Typography } from "@mui/material";
import React from "react";
import TodoList from "./TodoList";

const TodoPage: React.FC = () => {
  return (
    <>
      <Typography variant="h4" sx={{ textAlign: "center", marginBottom: 3 }}>
        Список задач:
      </Typography>
      <TodoList />
    </>
  );
};

export default TodoPage;
