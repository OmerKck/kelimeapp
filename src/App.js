import React from "react";
import { Switch, Redirect, useLocation } from "react-router-dom";
import AuthRoute from "./components/AuthRoute";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import { Home, Login, Register } from "./pages";
import Game from "./pages/home/Game";

const App = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/login" && location.pathname !== "/register" ? (
        <Header />
      ) : null}
      <Switch>
        <AuthRoute path="/login" component={Login} />
        <AuthRoute path="/register" component={Register} />
        <PrivateRoute path="/" exact component={Home} />
        <PrivateRoute path="/game" component={Game} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
