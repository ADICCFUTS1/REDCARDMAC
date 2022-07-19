import React from "react";

//import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import Typography from "@material-ui/core/Typography";

//componente a exportar
const Titulo = () => {
  return (
    <div>
      <Typography variant="h6" component="h6">
        SEGUINOS!
      </Typography>
      <Button
        color="primary"
        target="_blank"
        href="https://www.facebook.com/innovadesignalp"
      >
        <FacebookIcon />
      </Button>
      {""}
      <Button
        color="secondary"
        target="_blank"
        href="https://www.instagram.com/innovadesignalp/"
      >
        <InstagramIcon />
      </Button>
    </div>
  );
};

//exportando el componente deseado
export default Titulo;
