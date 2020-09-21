import React from "react";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import AuthRoute from "./components/AuthRoute";
import PrivateRoute from "./components/PrivateRoute";
import { Home, Login, Register } from "./pages";

const App = () => {
  return (
    <div>
      {/* sadasdsadasdasdas */}
      <BrowserRouter>
        <Switch>
          <PrivateRoute path="/" exact component={Home} />
          <AuthRoute path="/login" component={Login} />
          <AuthRoute path="/register" component={Register} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
