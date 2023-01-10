import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/Themes";
import { useDarkMode } from "./styles/useDarkMode";
import { GlobalStyles } from "./styles/Globalstyle";
import Toggle from "./styles/Toggler";
import "./styles/App.css";
import { fetchApi } from "./api";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "./Componentes/Header"; // Importamos el componente Header aquí
// import Destacado from "./cards/Card1"; // Importamos el componente Destacado aquí
import TodosLosEventos from "./AppExt"; // Importamos el componente TodosLosEventos aquí
import MenuButtons from "./Componentes/MenuButtons";

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

const MainJS = () => {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  const [todos, setTodos] = useState([]);

  const fetchData = async () => {
    const response = await fetchApi(); // aquí se obtienen los datos del JSON
    setTodos(response); // aquí se asignan los datos al estado del componente
  };

  useEffect(() => {
    fetchData();
  }, []); // se ejecutará cada vez que se renderiza el componente

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <div className="App">
        <React.Fragment>
          <CssBaseline />
          <Container>
            <Toggle theme={theme} toggleTheme={themeToggler} />
            <Header />
            <MenuButtons />
            {/* <div style={{ marginTop: "10px" }}></div>
            <Destacado todos={todos} /> */}
            <div style={{ marginTop: "10px" }}></div>
            <TodosLosEventos todos={todos} />
          </Container>
        </React.Fragment>
      </div>
    </ThemeProvider>
  );
};

export default MainJS;
