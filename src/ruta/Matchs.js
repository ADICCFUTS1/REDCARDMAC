import React, { useState } from "react";

import {
  makeStyles,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import RefreshIcon from "@material-ui/icons/Refresh";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Btn from "./btn";

import * as bloque from "./btns";

import Titulo from "./titulo";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

const isDark = window.matchMedia("(prefers-color-scheme:dark)").matches;
const lightTheme = {
  backgroundColor: "white",
  color: "black"
};

const darkTheme = {
  backgroundColor: "#35353a",
  color: "white"
};
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center"
  }
}));

export default function Matchs() {
  const classes = useStyles();

  function refreshPage() {
    window.location.reload(false);
  }
  var lis = [];

  let BB = [
    "",
    "",
    "",
    "",

    "",
    "",

    "",

    "",
    "",

    /****/
    "error!!1",
    "error!!1",
    "error!!1",
    "error!!1",
    "error!!1",
    "error!!1",
    "error!!1",
    "error!!1",
    "error!!1"
  ];

  for (let i = 0; i < Match.length; i++) {
    lis.push(
      <div>
        <Divider />
        <Typography variant="h5" gutterBottom>
          {Title[i]}
          {": "}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {dta[i]} {Match[i]}
        </Typography>
      </div>
    );
    /*SWITCH*/

    switch (i) {
      case i:
        lis.push(<div className={classes.root}>{BB[i]}</div>);
        break;
      default:
      //console.log("default");
    }
    /*SWITCH*/

    lis.push(
      <div className={classes.root}>
        <Button variant="contained" color="primary" href={Est[i]}>
          Estadisticas
        </Button>
      </div>
    );
  }

  return (
    <div style={isDark ? darkTheme : lightTheme}>
      <React.Fragment>
        <CssBaseline />
        <Container>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography variant="h5" component="h5">
                Calendario {datef}
              </Typography>
              <Titulo />
            </Paper>
          </Grid>
          <div className={classes.root}>
            <Button variant="outlined" color="secondary" onClick={refreshPage}>
              <RefreshIcon />
            </Button>
            <Typography variant="h6" component="h6">
              Es necesario tener actualizado el componente webview de Android,
              para comprobarlo siga este enlace:{" "}
              <a
                href={
                  "https://play.google.com/store/apps/details?id=com.google.android.webview"
                }
                target="_blank"
              >
                Ver en Play Store
              </a>
            </Typography>
          </div>
          <div>
            <Divider />
          </div>
          <div>{lis}</div>
        </Container>
      </React.Fragment>
    </div>
  );
}
export const light = {
  palette: {
    type: "light"
  }
};
export const dark = {
  palette: {
    type: "dark"
  }
};
