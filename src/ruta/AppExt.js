import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import OldButtons from "./Componentes/OldButtons";
import { fetchApi } from "./api";
import { getFormattedTime } from "./utils"; // Importamos el script aquí

export default function AppExt() {
  const [todos, setTodos] = useState([]);
  const [position, setPosition] = useState(0);
  const handleChangePosition = (event) => {
    const value = event.target.value;
    if (todos && todos.length !== 0 && value <= todos.length && value >= 0)
      setPosition(value);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetchApi();
      setTodos(response);
    }

    fetchData();
  }, []);

  return (
    <div>
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
      {/*})}*/}
    </div>
  );
}
