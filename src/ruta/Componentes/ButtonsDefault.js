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

const ButtonsDefault = () => {
  const classes = useStyles();
  const Enlaces = [
    "https://react-cms-omega.vercel.app/?txt=0",
    "https://react-cms-omega.vercel.app/?txt=1",
    "https://react-cms-omega.vercel.app/?txt=2",
    "https://react-cms-omega.vercel.app/?txt=3",
    "https://react-cms-omega.vercel.app/?txt=4",
    "https://react-cms-omega.vercel.app/?txt=5"
  ];
  return (
    <div>
      <div className={classes.root}>
        <Btn Valor={Enlaces[0]} />
        <Btn Valor={Enlaces[1]} />
        <Btn Valor={Enlaces[2]} />
        <Btn Valor={Enlaces[3]} />
        <Btn Valor={Enlaces[4]} />
        <Btn Valor={Enlaces[5]} />
        <Button size="small" color="primary" href={Enlaces[0]}>
          Estadisticas
        </Button>
      </div>
    </div>
  );
};
export default ButtonsDefault;
