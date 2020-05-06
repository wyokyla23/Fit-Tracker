import React from "react";
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
    maxWidth: 900,
    minWidth: 700,
    [theme.breakpoints.down("sm")]: {
      minWidth: 500,
    },
    [theme.breakpoints.down("xs")]: {
      minWidth: 300,
    },
  },
  media: {
    height: 100,
  },
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
  exerciseButton: {
    justifyContent: "center",
  },
}));

export default function WorkoutCard() {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.workoutCardContainer}
    >
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
        </CardActionArea>
        <CardActions
          className={classes.exerciseButton}
        >
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
