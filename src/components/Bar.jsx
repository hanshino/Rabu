import React from "react";
import { useDispatch } from "react-redux";
import { toggleBar } from "../actions";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { useTranslation } from "react-i18next";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import GitHubIcon from "@material-ui/icons/GitHub";

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  rightButtons: {
    "& > *": {
      marginRight: theme.spacing(1),
    },
  },
}));

const Bar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={() => dispatch(toggleBar())}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap className={classes.title}>
          {t("app.title")}
        </Typography>
        <div className={classes.rightButtons}>
          <IconButton edge="end" color="inherit">
            <Brightness7Icon />
          </IconButton>
          <IconButton edge="end" color="inherit">
            <GitHubIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Bar;
