import React, { useEffect } from "react";
import { useAction } from "../hooks/useActions";
import { useTypeSelector } from "../hooks/usedTypeSelector";

const TodoList: React.FC = () => {
  const { error, limit, loading, page, todos } = useTypeSelector(
    (state) => state.todo
  );

  const pages = [1, 2, 3, 4, 5];

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
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.id} - {todo.title}
        </div>
      ))}
      <div style={{ display: "flex" }}>
        {pages.map((p) => (
          <div
            onClick={() => setTodoPage(p)}
            style={{
              border: p === page ? "2px solid red" : "1px solid black",
              padding: 10,
            }}
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
