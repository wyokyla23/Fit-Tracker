import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { Formik } from "formik";
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

  return (
    <Container className={classes.paperContainer}>
      <Paper elevation={24}>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
        >
          <Grid
            container
            spacing={4}
            className={classes.loginGridContainer}
          >
            <Grid item>
              <TextField
                required
                id="username"
                name="username"
                label="username"
              />
            </Grid>
            <Grid item>
              <TextField
                required
                id="password"
                name="password"
                label="password"
              />
            </Grid>
            <Grid item>
              <Button variant="outlined">
                Submit
              </Button>
            </Grid>
          </Grid>
        </Formik>
      </Paper>
    </Container>
  );
}
