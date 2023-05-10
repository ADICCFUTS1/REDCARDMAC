import React, { useState, useEffect } from "react";

import Typography from "@material-ui/core/Typography";
import OldButtons from "./Componentes/OldButtons";
import { getFormattedTime } from "./utils"; // Importamos el script aquí

export default (props) => {
  const { todos } = props;

  return (
    <div>
      <Typography>
        ¡Recuerde que interacuar con los anuncios nos ayuda a seguir mejorando!
      </Typography>
      {/* <Typography variant="h4">
        ¡Si disfrutas la app, un clic en los anuncios nos ayuda!
      </Typography> */}
      <p></p>
      <Typography gutterBottom variant="h5" component="h2">
        Todos los eventos:
      </Typography>
      {!todos
        ? "Cargando..."
        : todos.map((todo, index) => {
            return (
              <div>
                <Typography>{todo.Competicion}:</Typography>
                <Typography variant="h6" gutterBottom>
                  {getFormattedTime(todo)} {todo.Partido}
                </Typography>
                <OldButtons {...todo} />
              </div>
            );
          })}
    </div>
  );
};
