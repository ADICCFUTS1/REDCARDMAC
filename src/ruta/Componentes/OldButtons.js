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
      {props.Switch !== 0 ? (
        <div className={classes.root}>
          {props.EnlaceMatchs.valor1 !== "" ? (
            <Btn Valor={props.EnlaceMatchs.valor1} />
          ) : (
            ""
          )}{" "}
          {props.EnlaceMatchs.valor2 !== "" ? (
            <Btn Valor={props.EnlaceMatchs.valor2} />
          ) : (
            ""
          )}{" "}
          {props.EnlaceMatchs.valor3 !== "" ? (
            <Btn Valor={props.EnlaceMatchs.valor3} />
          ) : (
            ""
          )}{" "}
          {props.EnlaceMatchs.valor4 !== "" ? (
            <Btn Valor={props.EnlaceMatchs.valor4} />
          ) : (
            ""
          )}{" "}
          {props.EnlaceMatchs.valor5 !== "" ? (
            <Btn Valor={props.EnlaceMatchs.valor5} />
          ) : (
            ""
          )}
          {props.EnlaceMatchs.valor6 !== "" ? (
            <Btn Valor={props.EnlaceMatchs.valor6} />
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
      <div className={classes.root}>
        <Button variant="contained" color="primary" href={props.Estadisticas}>
          Estadisticas
        </Button>
      </div>
    </div>
  );
};
export default Buttons;
