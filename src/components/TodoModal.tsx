import React, { useState } from "react";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Todo } from "../types/todo";
import { useAction } from "../hooks/useActions";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: 3,
};

const TodoModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [newTodo, setTodo] = useState<string>("");

  const { createTodo } = useAction();

  const todoObj: Todo = {
    id: Date.now(),
    title: newTodo,
    completed: false,
  };

  const buttonclick = () => {
    createTodo(todoObj);
    handleClose();
  };

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button onClick={handleOpen} variant="contained" endIcon={<AddIcon />}>
          Добавить новую задачу
        </Button>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            label="Название задачи"
            color="secondary"
            focused
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTodo(e.target.value)
            }
          />
          <Button
            variant="contained"
            onClick={buttonclick}
            color="secondary"
            endIcon={<AddIcon />}
          >
            Добавить новую задачу
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default TodoModal;
