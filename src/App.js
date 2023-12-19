import "@mui/material";
import "react-icons";
import "react-icons/bi";
import "react-icons/md";
import "react-icons/bs";
import "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";

import theme from "./theme";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { initiateSocketConnection, socket } from "./helpers/socketHelper";
import Router from "./router";
import { useState, useEffect } from "react";
import Footer from "./components/Home/Footer";

function App() {
  const [darkmode, setDarkMode] = useState(true);
  const [isOnline, setIsOnline] = useState(true);

  initiateSocketConnection();

  useEffect(() => {
    if (localStorage.getItem("darkmode") === null) {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-schema: dark)").matches
      ) {
        localStorage.setItem("darkmode", "true");
        setDarkMode(true);
        document.body.style = "background: #101113;";
      } else {
        localStorage.setItem("darkmode", "false");
        setDarkMode(false);
        document.body.style = "background: #f0f2f5;";
      }
    } else {
      if (localStorage.getItem("darkmode") === "true") {
        setDarkMode(true);

        document.body.style = "background: #101113;";
      } else {
        setDarkMode(false);

        document.body.style = "background: #f0f2f5;";
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
