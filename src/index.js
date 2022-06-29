import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import styled from "styled-components";
import theme from "styled-theming";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from './redux/store/store';
// import { lightTheme } from "./redux/theme/light";
// import { darkTheme } from "./redux/theme/dark";
// import DarkThemeProvider from "./components/DarkThemeProvider";
// import ThemeProvider from "./components/Theme";
export const backgroundColor = theme("theme", {
  light: "#fff",
  dark: "#2d2d2d",
});

export const textColor = theme("theme", {
  light: "#000",
  dark: "#fff",
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(theme)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <DarkThemeProvider> */}
      <Container>
      <h1>My Dark Theme</h1>
        <App />
    </Container>

      {/* </DarkThemeProvider> */}
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
