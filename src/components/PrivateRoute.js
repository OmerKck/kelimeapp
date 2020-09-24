import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { checkToken } from "../service/kelimeApiService";
const PrivateRoute = (props) => {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  const { rest, component: Component } = props;

  useEffect(() => {
    checkToken()
      .then((res) => {
        if (res.status === 200) {
          setIsAuth(true);
          localStorage.setItem("user", JSON.stringify(res.data));
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
          !isAuth ? <Redirect to="/login" /> : <Component {...props} />
        }
      />
    );
  } else {
    return <p>loading</p>;
  }
};

export default PrivateRoute;
