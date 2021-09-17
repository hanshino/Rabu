import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./containers/Navbar";
import Dashboard from "./pages/Dashboard";
import { useSelector } from "react-redux";
import { cyan } from "@mui/material/colors";

const App = () => {
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

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Navbar>
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </Navbar>
      </ThemeProvider>
    </Router>
  );
};

export default App;
