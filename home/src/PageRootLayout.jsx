import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "remixicon/fonts/remixicon.css";
import "./index.scss";

import HomeContent from "home/HomeContent";
import HomeContainer from "userdetailseditor/HomeContainer";

export default function PageRootLayout() {
  return (
    <Router>
      <div className="text-3xl mx-auto max-w-6xl">
        <div className="my-10">
          <Switch>
            <Route exact path="/" component={HomeContent} />
            <Route path="/users/:id" component={HomeContainer} />
            <Route path="/user/-1" component={HomeContainer} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}
