import React from "react";
import {
  Switch,
  Route,
  Link,
} from "react-router-dom";
// import * as firebase from "firebase/app";
import HomePage from "../../pages/HomePage";
import ProfilePage from "../../pages/ProfilePage";
import WorkoutPage from "../../pages/WorkoutPage";
import FindWorkouts from "../../pages/FindWorkoutsPage";
import LoginPage from "../../pages/LoginPage";
import SignUp from "../../pages/SignUp";
import PrivateRoute from "../PrivateRoute";
import PublicRoute from "../PublicRoute";
import AdminRoute from "../AdminRoute";
import NotFound from "../../pages/NotFound";
import CreateWorkout from "../../pages/admin/CreateWorkout";
import EditWorkout from "../../pages/admin/EditWorkout";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Main({ user, loggedIn }) {
  const isAdmin = Boolean(user?.admin);
  return (
    <Switch>
      <AdminRoute
        loggedIn={loggedIn}
        isAdmin={isAdmin}
        exact
        path="/admin/create-workout"
      >
        <CreateWorkout />
      </AdminRoute>
      <AdminRoute
        loggedIn={loggedIn}
        isAdmin={isAdmin}
        exact
        path="/admin/edit-workout/:exerciseId"
      >
        <EditWorkout />
      </AdminRoute>
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
      <PrivateRoute
        loggedIn={loggedIn}
        exact
        path="/find-workouts-page"
      >
        <FindWorkouts />
      </PrivateRoute>
      <Route exact path="/unauthorized" />
      <Route path="/">
        <NotFound />
      </Route>
    </Switch>
  );
}
