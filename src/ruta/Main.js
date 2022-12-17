import React, { useState, useEffect, useCallback } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/Themes";
import { useDarkMode } from "./styles/useDarkMode";
import { GlobalStyles } from "./styles/Globalstyle";
import Toggle from "./styles/Toggler";
import "./styles/App.css";
import { fetchApi } from "./api";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "./Componentes/Header";
// import Destacado from "./cards/Card1";
import TodosLosEventos from "./AppExt";
import MenuButtons from "./Componentes/MenuButtons";

const MainJS = React.memo(() => {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  const [todos, setTodos] = useState([]);

  const fetchData = useCallback(async () => {
    const response = await fetchApi();
    setTodos(response);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData, todos]);

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
});

export default MainJS;
