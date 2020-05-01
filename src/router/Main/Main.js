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

export default function Main() {
  return (
    <Switch>
      <Route exact path="/home-page">
        <HomePage />
      </Route>
      <Route exact path="/profile-page">
        <ProfilePage />
      </Route>
      <Route exact path="/login-page">
        <LoginPage />
      </Route>
      <Route exact path="/workout-page">
        <WorkoutPage />
      </Route>
    </Switch>
  );
}
