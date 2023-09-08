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

function App() {
  initiateSocketConnection();

  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
