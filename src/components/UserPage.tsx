import { Typography } from "@mui/material";
import React from "react";
import UserList from "./UserList";

const UserPage: React.FC = () => {
  return (
    <>
      <Typography variant="h4" sx={{ textAlign: "center", marginBottom: 3 }}>
        Список пользователей нашего приложения:
      </Typography>
      <UserList />
    </>
  );
};

export default UserPage;
