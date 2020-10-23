import React from "react";
import { Switch, Redirect, useLocation } from "react-router-dom";
import AuthRoute from "./components/AuthRoute";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import AdminRoute from "./components/AdminRoute";
import {
  Home,
  Login,
  Register,
  AdminLogin,
  AdminHome,
  CategoryCreate,
  CategoryHome,
  CategoryUpdate,
  QuestionHome,
  QuestionCreate,
  QuestionUpdate,
} from "./pages";

import Game from "./pages/home/Game";

const App = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/login" &&
      location.pathname !== "/register" &&
      location.pathname !== "/adminlogin" ? (
        <Header />
      ) : null}

      <Switch>
        <AuthRoute path="/login" component={Login} />
        <AuthRoute path="/register" component={Register} />
        <AuthRoute path="/adminlogin" component={AdminLogin} />
        <PrivateRoute path="/" exact component={Home} />
        <PrivateRoute path="/game" component={Game} />
        <AdminRoute path="/category" component={CategoryHome} />
        <AdminRoute path="/category-create" component={CategoryCreate} />
        <AdminRoute path="/category-update" component={CategoryUpdate} />
        <AdminRoute path="/question" component={QuestionHome} />
        <AdminRoute path="/question-create" component={QuestionCreate} />
        <AdminRoute path="/question-update" component={QuestionUpdate} />
        <AdminRoute path="/admin" component={AdminHome} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
