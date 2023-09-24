import React from "react";

import UserDetailEditor from "./UserDetailEditor";
import Header from "./Header";
import Footer from "./Footer";

export default function HomeContent() {
  return (
    <div>
      <Header />
      <UserDetailEditor />
      <Footer />
    </div>
  );
}
