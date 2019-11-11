import React from "react";
import { Homepage } from "./pages/homepage/homepage.component";

import { Switch, Route } from "react-router-dom";

import "./index.css";

const Hats = () => (
  <div>
    <h1>HATS</h1>
  </div>
);

export const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/hats" component={Hats} />
      </Switch>
    </div>
  );
};
