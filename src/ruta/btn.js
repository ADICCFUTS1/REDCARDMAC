import React from "react";
//import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";

/*const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));*/

//componente a exportar
const Btn = (props) => {
  return (
    <Button variant="contained" color="primary" href={props.Valor}>
      ABRIR
    </Button>
  );
};

//exportando el componente deseado
export default Btn;
