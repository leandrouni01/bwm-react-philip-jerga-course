import React from "react";
import { Switch, Route } from "react-router-dom";

import RentalHome from "./pages/RentalHome";
import Login from "./pages/Login";
import Register from "./pages/Register";

const Routes = () => {
  return (
    <div className="container bwm-container">
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/">
          <RentalHome />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
