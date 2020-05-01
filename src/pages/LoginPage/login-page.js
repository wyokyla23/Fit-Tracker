import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default function LoginPage() {
  const classes = useStyles();

  return (
    <Container>
      <Paper elevation={24}>
        <h1>derp</h1>
      </Paper>
    </Container>
  );
}
