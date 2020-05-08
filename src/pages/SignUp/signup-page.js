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
import * as firebase from "firebase/app";

const validAdmins = ["wyokyla23@gmail.com"];

const useStyles = makeStyles((theme) => ({
  root: {},
  loginGridContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5em",
    minHeight: "400px",
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
  loginHereButton: {
    marginBottom: "2em",
  },
}));

export default function SignUpPage() {
  const classes = useStyles();

  const initialValues = {
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  };

  const schema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Too short!")
      .max(20, "Too long!")
      .required("Required"),
    password: Yup.string()
      .min(6, "Too short!")
      .max(20, "Too long!")
      .required("Required"),
    confirmPassword: Yup.string()
      .min(6, "Too short!")
      .max(20, "Too long!")
      .required("Required")
      .test(
        "Passwords-match",
        "Passwords must match",
        function (confirmPassword) {
          const password = this.parent.password;
          return password === confirmPassword;
        }
      ),
    email: Yup.string()
      .email("Invalid email")
      .required("Required"),
  });
  // add login functionality
  const onSubmit = (
    { email, password },
    formik
  ) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(
        email,
        password
      )
      .then((result) => {
        const userObject = result.user;
        let admin = false;
        if (
          validAdmins.some(
            (userEmail) => userEmail === email
          )
        ) {
          admin = true;
        }
        const db = firebase.firestore();
        db.collection("users")
          .doc(userObject.uid)
          .set({
            email,
            admin,
          });
      })
      .catch((error) => {
        console.error(error);
        console.log(email, password);
      });
  };
  const {
    handleChange,
    touched,
    errors,
    handleSubmit,
    handleBlur,
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
                required
                id="username"
                name="username"
                label="username"
                onBlur={handleBlur}
                error={Boolean(
                  touched.username &&
                    errors.username
                )}
                helperText={
                  touched.username &&
                  errors.username
                }
              />
            </Grid>
            <Grid item>
              <TextField
                onChange={handleChange}
                required
                id="email"
                name="email"
                label="email"
                onBlur={handleBlur}
                error={Boolean(
                  touched.email && errors.email
                )}
                helperText={
                  touched.email && errors.email
                }
              />
            </Grid>
            <Grid item>
              <TextField
                onChange={handleChange}
                required
                type="password"
                id="password"
                name="password"
                label="password"
                onBlur={handleBlur}
                error={Boolean(
                  touched.password &&
                    errors.password
                )}
                helperText={
                  touched.password &&
                  errors.password
                }
              />
            </Grid>
            <Grid item>
              <TextField
                onChange={handleChange}
                required
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                label="confirm password"
                onBlur={handleBlur}
                error={Boolean(
                  touched.confirmPassword &&
                    errors.confirmPassword
                )}
                helperText={
                  touched.confirmPassword &&
                  errors.confirmPassword
                }
              />
            </Grid>
            <Grid item>
              <Button
                type="submit"
                variant="outlined"
              >
                Sign Up
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
            <Typography
              className={classes.loginHereButton}
            >
              Already have an account? Log
              in&nbsp;
              <Link
                className={classes.signupButton}
                to="/login-page"
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
