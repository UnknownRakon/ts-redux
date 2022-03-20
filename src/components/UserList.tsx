import React, { useEffect } from "react";
import { useAction } from "../hooks/useActions";
import { useTypeSelector } from "../hooks/usedTypeSelector";
import { fetchUsers } from "../store/action-creators/user";

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
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default UserList;
