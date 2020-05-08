import React from "react";
import WorkoutCard from "../../components/WorkoutCards";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  workoutCardContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "3em",
    minHeight: "300px",
    [theme.breakpoints.down("md")]: {
      minHeight: "200px",
    },
  },
}));

export default function ProfilePage(props) {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={4}
      className={classes.workoutCardContainer}
    >
      <Grid item>
        <WorkoutCard />
      </Grid>
      <Grid item>
        <WorkoutCard />
      </Grid>
      <Grid item>
        <WorkoutCard />
      </Grid>
    </Grid>
  );
}
