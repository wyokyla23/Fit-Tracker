import React from "react";
import {
  Route,
  Redirect,
} from "react-router-dom";

export default function PublicRoute({
  loggedIn,
  ...rest
}) {
  if (loggedIn) {
    return <Redirect to="/" />;
  } else {
    return <Route {...rest} />;
  }
}
