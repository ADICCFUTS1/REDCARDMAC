import React, { useState, useEffect } from "react";

import {
  makeStyles,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Btn from "./btn";

import Button from "@material-ui/core/Button";
import OldButtons from "./Componentes/OldButtons";
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

export default (props) => {
  const classes = useStyles();

  const url = "Datos.json";
  const [todos, setTodos] = useState();
  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setTodos(responseJSON);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div>
      {/*{props.data.rows.map((item, indx) => {*/}
      {!todos
        ? "Cargando..."
        : todos.map((todo, index) => {
            var dta = [];
            var date = new Date(todo.dt * 1000);
            var hours = "0" + date.getHours();
            var minutes = "0" + date.getMinutes();
            var formattedTime =
              hours.substr(-2) +
              ":" +
              minutes.substr(-2); /*+ ':' + seconds.substr(-2)*/
            dta.push(formattedTime);
            return (
              <div>
                <Typography>{todo.Competicion}:</Typography>
                <Typography variant="h6" gutterBottom>
                  {dta} {todo.Partido}
                </Typography>
                <OldButtons {...todo} />
              </div>
            );
          })}
      {/*})}*/}
    </div>
  );
};
