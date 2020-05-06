import React, {
  useState,
  useEffect,
} from "react";
import {
  Switch,
  Route,
  Link,
} from "react-router-dom";
// import * as firebase from "firebase/app";
import HomePage from "../../pages/HomePage";
import ProfilePage from "../../pages/ProfilePage";
import WorkoutPage from "../../pages/WorkoutPage";
import LoginPage from "../../pages/LoginPage";
import SignUp from "../../pages/SignUp";
import PrivateRoute from "../PrivateRoute";
import PublicRoute from "../PublicRoute";
import NotFound from "../../pages/NotFound";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Main({ user, loggedIn }) {
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
      <Route path="/">
        <NotFound />
      </Route>
    </Switch>
  );
}
