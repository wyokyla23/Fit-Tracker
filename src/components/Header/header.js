import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";
import * as firebase from "firebase/app";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontSize: "2.5rem",
    fontFamily: "roboto",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },
  },
  buttonContainer: {
    justifyContent: "flex-end",
  },
  appBar: {
    backgroundColor: theme.palette.common.purple,
  },
  toolBar: {
    minHeight: "90px",
  },
  gridItem: {
    flexGrow: 2,
  },
  iconTitleContainer: {
    justifyContent: "flex-start",
  },
}));

export default function Header({
  loggedIn,
  isAdmin,
  user,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        className={classes.appBar}
      >
        <Toolbar className={classes.toolBar}>
          <Grid
            container
            className={classes.iconTitleContainer}
          >
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Button
              component={Link}
              to="/"
              disableRipple
              color="inherit"
            >
              <Typography
                variant="h6"
                className={classes.title}
              >
                Fit Tracker
              </Typography>
            </Button>
          </Grid>
          <Grid
            container
            className={classes.buttonContainer}
          >
            <Grid
              item
              className={classes.gridItem}
            >
              <Button
                component={Link}
                to="/"
                color="inherit"
              >
                Home
              </Button>
            </Grid>
            <Grid
              item
              className={classes.gridItem}
            >
              <Button
                component={Link}
                to="/profile-page"
                color="inherit"
              >
                Profile
              </Button>
            </Grid>
            <Grid
              item
              className={classes.gridItem}
            >
              <Button
                component={Link}
                to="/find-workouts-page"
                color="inherit"
              >
                Find A Workout
              </Button>
            </Grid>
            {isAdmin && (
              <Grid
                item
                className={classes.gridItem}
              >
                <Button
                  component={Link}
                  to="/admin/create-workout"
                  color="inherit"
                >
                  Create Workout
                </Button>
              </Grid>
            )}
            <Grid
              item
              className={classes.gridItem}
            >
              {loggedIn ? (
                <Button
                  component={Link}
                  to="/login-page"
                  color="inherit"
                  onClick={() =>
                    firebase
                      .auth()
                      .signOut()
                      .then(function () {
                        console.log("signed out");
                      })
                      .catch(function (error) {
                        console.error(error);
                      })
                  }
                >
                  Log Out
                </Button>
              ) : (
                <Button
                  component={Link}
                  to="/login-page"
                  color="inherit"
                >
                  Login
                </Button>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
