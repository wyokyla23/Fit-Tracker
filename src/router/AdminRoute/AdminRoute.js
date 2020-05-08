import React from "react";
import {
  Route,
  Redirect,
} from "react-router-dom";

export default function AdminRoute({
  loggedIn,
  isAdmin,
  ...rest
}) {
  if (loggedIn) {
    if (isAdmin) {
      return <Route {...rest} />;
    } else {
      return <Redirect to="/unauthorized" />;
    }
  } else {
    return <Redirect to="/login-page" />;
  }
}
