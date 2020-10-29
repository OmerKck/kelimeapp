import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { checkToken } from "../service/kelimeApiService";
const AuthRoute = (props) => {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  // const [user, setUser] = useState("");
  const { rest, component: Component } = props;

  useEffect(() => {
    checkToken()
      .then((res) => {
        if (res.status === 200) {
          setIsAuth(true);
          localStorage.setItem("user", JSON.stringify(res.data));
          console.log("adminRoute", JSON.parse(localStorage.user).admin);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  if (!loading) {
    return (
      <Route
        {...rest}
        render={(props) =>
          isAuth && JSON.parse(localStorage.user).admin !== 1 ? (
            <Redirect to="/" />
          ) : (
            <Component {...props} />
          )
        }
      />
    );
  } else {
    return <p>loading</p>;
  }
};

export default AuthRoute;
