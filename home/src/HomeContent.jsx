import React, { useState, useEffect } from "react";

import { getUsers } from "./users";
import Header from "home/Header";
import Footer from "home/Footer";
import UserList from "home/UserList";

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
