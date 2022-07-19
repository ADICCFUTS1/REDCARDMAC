import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";

import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness7Icon from "@material-ui/icons/Brightness7";

const Toggle = ({ theme, toggleTheme }) => {
  //const icon = !theme ? <Brightness7Icon /> : <Brightness3Icon />;

  return (
    <div>
      {theme === "light" ? (
        <IconButton
          edge="end"
          color="inherit"
          aria-label="mode"
          onClick={toggleTheme}
        >
          <Brightness3Icon />
        </IconButton>
      ) : (
        <IconButton
          edge="end"
          color="inherit"
          aria-label="mode"
          onClick={toggleTheme}
        >
          <Brightness7Icon />
        </IconButton>
      )}
    </div>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired
};

export default Toggle;
