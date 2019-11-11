import React from "react";
import { Homepage } from "./pages/homepage/homepage.component";
import { Shop } from "./pages/shop/shop.component";

import { Switch, Route } from "react-router-dom";

import "./index.css";

export const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </div>
  );
};
