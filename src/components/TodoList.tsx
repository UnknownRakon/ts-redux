import { Box, ButtonGroup, Button } from "@mui/material";
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
    return <h1>Идёт загрузка...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
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
        {todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            id={todo.id}
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
