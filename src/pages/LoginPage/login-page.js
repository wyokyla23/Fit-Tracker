import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { TextField } from "@material-ui/core";
import * as Yup from "yup";

const useStyles = makeStyles((theme) => ({
  root: {},
  loginGridContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5em",
    minHeight: "300px",
    [theme.breakpoints.down("md")]: {
      minHeight: "200px",
    },
  },
  signupButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  signupButton: {
    color: "blue",
  },
  paperContainer: {
    maxWidth: "900px",
  },
}));

export default function LoginPage() {
  const classes = useStyles();

  const initialValues = {
    username: "",
    password: "",
  };

  const schema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Too short!")
      .max(20, "Too long!")
      .required("Required"),
    password: Yup.string()
      .min(2, "Too short!")
      .max(20, "Too long!")
      .required("Required"),
  });
  // add login functionality
  const onSubmit = (values, formik) => {
    console.log({ values });
  };
  const {
    handleChange,
    values,
    handleSubmit,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: schema,
    onSubmit: onSubmit,
  });

  return (
    <Container className={classes.paperContainer}>
      <Paper elevation={24}>
        <form onSubmit={handleSubmit}>
          <Grid
            container
            spacing={4}
            className={classes.loginGridContainer}
          >
            <Grid item>
              <TextField
                onChange={handleChange}
                value={values.username}
                required
                id="username"
                name="username"
                label="username"
              />
            </Grid>
            <Grid item>
              <TextField
                onChange={handleChange}
                value={values.password}
                required
                id="password"
                name="password"
                label="password"
              />
            </Grid>
            <Grid item>
              <Button
                type="submit"
                variant="outlined"
              >
                Log In
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={4}
            className={
              classes.signupButtonContainer
            }
          >
            <Typography>
              No account? Sign up&nbsp;
              <Link
                className={classes.signupButton}
                to="/signup-page"
              >
                here
              </Link>
            </Typography>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}
