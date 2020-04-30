import React from "react";
import {
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import HomePage from "../../pages/HomePage";
import ProfilePage from "../../pages/ProfilePage";
import WorkoutPage from "../../pages/WorkoutPage";

export default function Main() {
  return (
    <ThemeProvider>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/ProfilePage">
          <ProfilePage />
        </Route>
        <Route exact path="/WorkoutPage">
          <WorkoutPage />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}
