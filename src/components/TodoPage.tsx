import { Typography } from "@mui/material";
import React from "react";
import TodoList from "./TodoList";
import TodoModal from "./TodoModal";

const TodoPage: React.FC = () => {
  return (
    <>
      <Typography variant="h4" sx={{ textAlign: "center", marginBottom: 3 }}>
        Список задач:
      </Typography>
      <TodoModal />
      <TodoList />
    </>
  );
};

export default TodoPage;
