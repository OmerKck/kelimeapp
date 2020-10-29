import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { checkToken } from "../service/kelimeApiService";
const AdminRoute = (props) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  const { rest, component: Component } = props;

  useEffect(() => {
    checkToken()
      .then((res) => {
        console.log("res admin", res.data.admin);
        if (res.status === 200) {
          if (res.data.admin) {
            setIsAdmin(true);
          }
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
          !isAdmin ? <Redirect to="/" /> : <Component {...props} />
        }
      />
    );
  } else {
    return <p>loading</p>;
  }
};

export default AdminRoute;
