import {
  Box,
  ButtonGroup,
  Button,
  CircularProgress,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";

import React, { useEffect } from "react";
import { useAction } from "../hooks/useActions";
import { useTypeSelector } from "../hooks/usedTypeSelector";
import TodoListItem from "./TodoListItem";

const TodoList: React.FC = () => {
  const { error, limit, loading, page, todos } = useTypeSelector(
    (state) => state.todo
  );

  const { fetchTodos, setTodoPage } = useAction();

  useEffect(() => {
    fetchTodos(page, limit);
  }, [page]);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", paddingTop: 5 }}>
        <CircularProgress size={100} />
      </Box>
    );
  }
  if (error) {
    return (
      <Typography
        variant="h5"
        color={red[500]}
        sx={{ textAlign: "center", marginBottom: 3 }}
      >
        {error}
      </Typography>
    );
  }

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          gap: 5,
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          borderRadius: 1,
        }}
      >
        {todos.map((todo, index) => (
          <TodoListItem
            key={todo.id}
            id={todo.id}
            index={index}
            title={todo.title}
            completed={todo.completed}
          />
        ))}
      </Box>
      <ButtonGroup sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={() => setTodoPage(-1)}
          disabled={page === 1 ? true : false}
        >
          Назад
        </Button>
        <Button onClick={() => setTodoPage(1)}>Вперёд</Button>
      </ButtonGroup>
    </div>
  );
};

export default TodoList;
