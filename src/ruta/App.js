import React, { useState, useEffect } from "react";

import {
  makeStyles,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Buttons from "./Componentes/Buttons";

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

export default (props) => {
  const classes = useStyles();

  const [data, setData] = useState([]);

  useEffect(() => {
    // API to fetch some dummy data
    fetch(
      "https://opensheet.elk.sh/1uD_UtAaYl8lh7w_8VWRCnVi-Ugat-O_2V-puezenbdw/Admin!A1:K15"
    )
      .then((resp) => resp.json())
      .then((apiData) => {
        setData(apiData);
      });
  }, []); // Dependency-array
  return (
    <div>
      {/*{props.data.rows.map((item, indx) => {*/}
      {!data
        ? "Cargando..."
        : data.map((item, index) => {
            var dta = [];
            var date = new Date(item.dt * 1000);
            var hours = date.getHours();
            var minutes = "0" + date.getMinutes();
            var formattedTime =
              hours + ":" + minutes.substr(-2); /*+ ':' + seconds.substr(-2)*/
            dta.push(formattedTime);
            //console.log(item.Enlace2);
            return (
              <div key={index}>
                <Typography>{item.Competicion}:</Typography>
                <Typography variant="h6" gutterBottom>
                  {dta} {item.Partido}
                </Typography>
                <Buttons {...item} />
                <div className={classes.root}>
                  <Button
                    variant="contained"
                    color="primary"
                    href={item.Estadisticas}
                  >
                    Estadisticas
                  </Button>
                </div>
              </div>
            );
          })}
      {/*})}*/}
    </div>
  );
};
