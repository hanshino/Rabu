import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import Navbar from "./containers/Navbar";
import Dashboard from "./pages/Dashboard";
import DarkTheme from "./theme";

const App = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = React.useMemo(
    () =>
      prefersDarkMode
        ? DarkTheme
        : createTheme({
            palette: {
              type: "light",
            },
          }),
    [prefersDarkMode]
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
