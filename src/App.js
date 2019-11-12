import React from "react";
import { Homepage } from "./pages/homepage/homepage.component";
import { Shop } from "./pages/shop/shop.component";
import { Header } from "./components/header/header.component";
import { SignInSignUp } from "./pages/signIn-and-signUp/signIn-and-signUp.component";

import { Switch, Route } from "react-router-dom";

import "./index.css";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route path="/signin" component={SignInSignUp} />
      </Switch>
    </div>
  );
};
