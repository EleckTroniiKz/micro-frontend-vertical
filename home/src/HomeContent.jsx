import React, { useState, useEffect } from "react";

import { getUsers } from "./users";
import Header from "./Header";
import Footer from "./Footer";
import UserList from "./UserList";

export default function HomeContent() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  return (
    <div>
      <Header />
      <UserList users={users} />
      <Footer />
    </div>
  );
}
