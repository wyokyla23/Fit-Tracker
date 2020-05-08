import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { useFormik } from "formik";
import firebase from "firebase/app";
import * as Yup from "yup";

const useStyles = makeStyles((theme) => ({
  root: {},
  createWorkoutGridContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5em",
    minHeight: "400px",
    [theme.breakpoints.down("md")]: {
      minHeight: "200px",
    },
  },
}));

export default function EditWorkoutPlan() {
  const db = firebase.firestore();
  const classes = useStyles();

  const initialValues = {
    workoutName: "",
    workoutDescription: "",
    workoutSetsReps: "",
    workoutType: "",
  };

  const schema = Yup.object().shape({
    workoutName: Yup.string()
      .min(3, "Too short")
      .max(25, "Too long")
      .required("Required"),
    workoutDescription: Yup.string()
      .min(4, "Too short")
      .max(100, "Too long")
      .required("Required"),
    workoutSetsReps: Yup.string()
      .min(5, "Too short")
      .max(20, "Too long")
      .required("Required"),
    workoutType: Yup.string()
      .min(2, "Too short")
      .max(10, "Too long")
      .required("required"),
  });

  const onSubmit = (values, formik) => {
    console.log({ values });
    const ourDocument = {
      workoutName: values.workoutName,
      workoutDescription:
        values.workoutDescription,
      workoutSetsReps: values.workoutSetsReps,
    };
    let docRef = db
      .collection("exercises")
      .add(ourDocument);
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
    <Container>
      <Paper elevation={24}>
        <form onSubmit={handleSubmit}>
          <Grid
            container
            spacing={2}
            className={
              classes.createWorkoutGridContainer
            }
          >
            <Grid item>
              <TextField
                name="workoutName"
                label="workoutName"
                id="workoutName"
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(
                  touched.workoutName &&
                    errors.workoutName
                )}
                helperText={
                  touched.workoutName &&
                  errors.workoutName
                }
              />
            </Grid>
            <Grid item>
              <TextField
                name="workoutDescription"
                label="workoutDescription"
                id="workoutDescription"
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(
                  touched.workoutDescription &&
                    errors.workoutDescription
                )}
                helperText={
                  touched.workoutDescription &&
                  errors.workoutDescription
                }
              />
            </Grid>
            <Grid item>
              <TextField
                name="workoutSetsReps"
                label="workoutSetsReps"
                id="workoutSetsReps"
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(
                  touched.workoutSetsReps &&
                    errors.workoutSetsReps
                )}
                helperText={
                  touched.workoutSetsReps &&
                  errors.workoutSetsReps
                }
              />
              <TextField
                name="workoutType"
                label="workoutType"
                id="workoutType"
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(
                  touched.workoutType &&
                    errors.workoutType
                )}
                helperText={
                  touched.workoutType &&
                  errors.workoutType
                }
              />
            </Grid>
            <Grid item></Grid>
            <Grid item>
              <Button
                type="submit"
                variant="outlined"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}
