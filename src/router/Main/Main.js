import React from "react";
import {
  Switch,
  Route,
  Link,
} from "react-router-dom";
import HomePage from "../../pages/HomePage";
import ProfilePage from "../../pages/ProfilePage";
import WorkoutPage from "../../pages/WorkoutPage";
import LoginPage from "../../pages/LoginPage";
import SignUp from "../../pages/SignUp";
import PrivateRoute from "../PrivateRoute";
import PublicRoute from "../PublicRoute";

export default function Main() {
  const user = null;
  const loggedIn = Boolean(user);
  return (
    <Switch>
      <PrivateRoute
        loggedIn={loggedIn}
        exact
        path="/"
      >
        <HomePage />
      </PrivateRoute>
      <PrivateRoute
        loggedIn={loggedIn}
        exact
        path="/profile-page"
      >
        <ProfilePage />
      </PrivateRoute>
      <PublicRoute
        loggedIn={loggedIn}
        exact
        path="/login-page"
      >
        <LoginPage />
      </PublicRoute>
      <PublicRoute
        loggedIn={loggedIn}
        exact
        path="/signup-page"
      >
        <SignUp />
      </PublicRoute>
      <PrivateRoute
        loggedIn={loggedIn}
        exact
        path="/workout-page"
      >
        <WorkoutPage />
      </PrivateRoute>
    </Switch>
  );
}
