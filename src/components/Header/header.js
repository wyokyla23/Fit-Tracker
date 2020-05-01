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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  buttonContainer: {
    justifyContent: "flex-end",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
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
            to="./home-page"
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
          <Grid
            container
            className={classes.buttonContainer}
          >
            <Button
              component={Link}
              to="./home-page"
              color="inherit"
            >
              Home
            </Button>
            <Button
              component={Link}
              to="./profile-page"
              color="inherit"
            >
              Profile
            </Button>
            <Button
              component={Link}
              to="./login-page"
              color="inherit"
            >
              Login
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
