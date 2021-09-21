import React from "react";
import "./styles/loader.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./containers/Navbar";
import Dashboard from "./pages/Dashboard";
import NewRoom from "./pages/NewRoom";
import { useSelector } from "react-redux";
import { cyan } from "@mui/material/colors";
import Loader from "./components/Loader";
import { useTranslation } from "react-i18next";

const App = () => {
  const { i18n } = useTranslation();
  const appTheme = useSelector(state => state.theme);
  const darkMode = appTheme.theme === "dark";

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          primary: {
            main: "#80deea",
          },
          secondary: cyan,
        },
      }),
    [darkMode]
  );

  if (!i18n.language) {
    return (
      <ThemeProvider theme={theme}>
        <Loader />
      </ThemeProvider>
    );
  }

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Navbar>
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/room/create" component={NewRoom} />
          </Switch>
        </Navbar>
      </ThemeProvider>
    </Router>
  );
};

export default App;
