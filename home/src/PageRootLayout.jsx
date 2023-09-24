import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "remixicon/fonts/remixicon.css";
import "./index.scss";

import Header from "home/Header";
import Footer from "home/Footer";
import HomeContent from "home/HomeContent";
import UserDetailEditor from "userdetailseditor/UserDetailEditor";

export default function PageRootLayout() {
  return (
    <Router>
      <div className="text-3xl mx-auto max-w-6xl">
        <Header />
        <div className="my-10">
          <Switch>
            <Route exact path="/" component={HomeContent} />
            <Route path="/users/:id" component={UserDetailEditor} />
            <Route path="/user/-1" component={UserDetailEditor} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
