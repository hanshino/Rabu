import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleBar, changeDark, changeLight } from "../actions";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { useTranslation } from "react-i18next";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import GitHubIcon from "@mui/icons-material/GitHub";

const drawerWidth = 240;

const Bar = () => {
  const dispatch = useDispatch();
  const appTheme = useSelector(state => state.theme);
  const { t } = useTranslation();

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={() => dispatch(toggleBar())}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          {t("app.title")}
        </Typography>
        <Box component="nav" sx={{ "& > *": { m: 1 } }}>
          {appTheme.theme === "dark" ? (
            <IconButton
              edge="end"
              color="inherit"
              onClick={() => dispatch(changeLight())}
            >
              <Brightness7Icon />
            </IconButton>
          ) : (
            <IconButton
              edge="end"
              color="inherit"
              onClick={() => dispatch(changeDark())}
            >
              <Brightness4Icon />
            </IconButton>
          )}
          <IconButton edge="end" color="inherit">
            <GitHubIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Bar;
