import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

const DarkThemeProvider = ({ children }) => {
  const isDarkThemeEnabled = useSelector((state) => state.themeReducer.darkThemeEnabled);
  return (
    <ThemeProvider theme={{ theme: isDarkThemeEnabled  ? "dark" : "light" }}>
      {children}
    </ThemeProvider>
  );
};

export default DarkThemeProvider