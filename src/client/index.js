import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import {
  AppContextConsumer,
  AppContextProvider,
} from "@client/shared/contexts";
import MainModule from "./modules";
import "react-toastify/dist/ReactToastify.css";

function App() {
  console.log("----------hello");
  return (
    <>
      <AppContextProvider>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={true}
          closeOnClick
          pauseOnHover
        />
        <AppContextConsumer>
          {({ theme, themeVariant }) => {
            document.body.style.backgroundColor =
              theme[themeVariant]?.palette?.background.default;
            return (
              <ThemeProvider theme={{ ...theme[themeVariant] }}>
                <CssBaseline />
                <MainModule />
              </ThemeProvider>
            );
          }}
        </AppContextConsumer>
      </AppContextProvider>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
