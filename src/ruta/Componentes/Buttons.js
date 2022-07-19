import React, { useState, useEffect } from "react";

import {
  makeStyles,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Btn from "../btn";

import Button from "@material-ui/core/Button";
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

const Buttons = (props) => {
  const classes = useStyles();
  return (
    <div>
      {props.Switch !== "null" ? (
        <div className={classes.root}>
          {props.Enlace1 !== undefined ? <Btn Valor={props.Enlace1} /> : ""}{" "}
          {props.Enlace2 !== undefined ? <Btn Valor={props.Enlace2} /> : ""}{" "}
          {props.Enlace3 !== undefined ? <Btn Valor={props.Enlace3} /> : ""}{" "}
          {props.Enlace4 !== undefined ? <Btn Valor={props.Enlace4} /> : ""}{" "}
          {props.Enlace5 !== undefined ? <Btn Valor={props.Enlace5} /> : ""}{" "}
          {props.Enlace6 !== undefined ? <Btn Valor={props.Enlace6} /> : ""}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default Buttons;
