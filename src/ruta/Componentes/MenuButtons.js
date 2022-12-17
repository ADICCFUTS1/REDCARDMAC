import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import RefreshIcon from "@material-ui/icons/Refresh";
import Globe from "./icons/Globe";
import Divider from "@material-ui/core/Divider";

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

export default function MenuButtons() {
  const classes = useStyles();
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className={classes.root}>
      <Button variant="outlined" color="secondary" onClick={refreshPage}>
        <RefreshIcon />
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        href="https://redcard-estadisticas.netlify.app/mundial/grupos"
      >
        <Globe />
      </Button>
      <Divider />
    </div>
  );
}
