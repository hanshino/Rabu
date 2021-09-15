import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Navbar from "./containers/Navbar";
import Dashboard from "./pages/Dashboard";
import { useSelector } from "react-redux";
import { cyan } from "@material-ui/core/colors";

const App = () => {
  const appTheme = useSelector(state => state.get("theme"));
  const darkMode = appTheme.get("theme") === "dark";

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: darkMode ? "dark" : "light",
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
        <Navbar />
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default App;
