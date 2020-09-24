import React, { useEffect, useState } from "react";
import { Switch, Redirect, useLocation } from "react-router-dom";
import AuthRoute from "./components/AuthRoute";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import { Home, Login, Register } from "./pages";

const App = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname === "/" && <Header />}
      <Switch>
        <AuthRoute path="/login" component={Login} />
        <AuthRoute path="/register" component={Register} />
        <PrivateRoute path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
