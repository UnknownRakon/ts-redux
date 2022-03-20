import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useAction } from "../hooks/useActions";
import { useTypeSelector } from "../hooks/usedTypeSelector";
import { fetchUsers } from "../store/action-creators/user";
import { User } from "../types/user";
import UserListItem from "./UserListItem";

const UserList: React.FC = () => {
  const { error, loading, users } = useTypeSelector((state) => state.user);

  const { fetchUsers } = useAction();
  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <h1>Идёт загрузка...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
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
      {users.map((user: User) => (
        <UserListItem
          key={user.id}
          name={user.name}
          email={user.email}
          address={user.address}
          phone={user.phone}
          website={user.website}
          company={user.company.name}
        />
      ))}
    </Box>
  );
};

export default UserList;
