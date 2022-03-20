import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { setItemChecked } from "../store/action-creators/todo";
import { useAction } from "../hooks/useActions";

export interface TodoItemProps {
  id: number;
  title: string;
  completed: boolean;
}

const TodoListItem: React.FC<TodoItemProps> = ({ id, title, completed }) => {
  const { setItemChecked } = useAction();
  return (
    <Card sx={{ width: 300 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {id}
          </Avatar>
        }
        title={title}
      />
      <CardContent>
        <FormGroup sx={{ display: "flex", alignItems: "center" }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={completed}
                onChange={() => setItemChecked(id)}
              />
            }
            label={completed ? "Выполнено" : "Не выполнено"}
          />
        </FormGroup>
      </CardContent>
    </Card>
  );
};

export default React.memo(TodoListItem);
