import React, { useState, useEffect } from "react";
import { ReactDOM } from "react-dom";

import { getUsers } from "./users";

import UserList from "home/UserList";

export default function HomeContent() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  return (
    <div>
      <UserList users={users} />
    </div>
  );
}
