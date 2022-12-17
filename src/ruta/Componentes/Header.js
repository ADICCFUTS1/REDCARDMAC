import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Titulo from "../titulo";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center"
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography variant="h5" component="h5">
        Calendario {datef}
      </Typography>
      <Titulo />
    </Paper>
  );
}
