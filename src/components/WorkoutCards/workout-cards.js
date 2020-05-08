import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    minWidth: 300,
    [theme.breakpoints.down("sm")]: {
      minWidth: 200,
    },
    [theme.breakpoints.down("xs")]: {
      minWidth: 100,
    },
  },
  media: {
    height: 100,
  },
  workoutCardTypography: {
    textAlign: "center",
  },
}));

export default function WorkoutCard() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://cdn2.coachmag.co.uk/sites/coachmag/files/styles/insert_main_wide_image/public/2016/07/1-1-bench-press.jpg?itok=bJYGPFGO"
              title="Contemplative Reptile"
            />
            <Typography
              className={
                classes.workoutCardTypography
              }
            >
              Dumbbell Bench Press
            </Typography>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item>
        <Button
          size="small"
          color="primary"
          to="/workout-page"
        >
          Learn More
        </Button>
      </Grid>
    </Grid>
  );
}
