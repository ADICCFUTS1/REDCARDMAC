import React, { useState, useEffect } from "react";

import Typography from "@material-ui/core/Typography";
import OldButtons from "./Componentes/OldButtons";
import { getFormattedTime } from "./utils"; // Importamos el script aquí
import { fetchApi } from "./api";

const TodosLosEventos = (props) => {
  const { todos } = props;
  const [data, setData] = useState([]); // agregamos un estado para almacenar los datos actualizados

  const fetchData = async () => {
    // aquí deberías incluir la lógica para obtener los datos actualizados
    // por ejemplo, podrías hacer una llamada a una API o a una función que recupere los datos de alguna otra fuente
    const updatedData = await fetchApi(); // suponiendo que esta función es la que obtiene los datos actualizados
    setData(updatedData); // actualizamos el estado con los datos recientes
  };

  useEffect(() => {
    const interval = setInterval(fetchData, 150000); // establecemos el intervalo de tiempo en 5 segundos (5000 milisegundos)
    return () => clearInterval(interval); // esto se ejecutará cuando se desmonte el componente, para limpiar el intervalo y evitar memory leaks
  }, []);

  return (
    <div>
      <Typography gutterBottom variant="h5" component="h2">
        Todos los eventos:
      </Typography>
      {!data // en lugar de usar la propiedad todos, usamos la variable data para mostrar los datos actualizados
        ? "Cargando..."
        : data.map((todo, index) => {
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

export default TodosLosEventos;
