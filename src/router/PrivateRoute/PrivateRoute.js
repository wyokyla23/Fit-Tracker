import React from "react";
import {
  Route,
  Redirect,
} from "react-router-dom";

export default function PrivateRoute({
  loggedIn,
  ...rest
}) {
  if (loggedIn) {
    return <Route {...rest} />;
  } else {
    return <Redirect to="/login-page" />;
  }
}
