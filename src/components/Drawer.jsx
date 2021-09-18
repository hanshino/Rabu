import React from "react";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Drawer = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Toolbar>
        <Typography variant="body2" color="GrayText">
          {t("app.name")}
        </Typography>{" "}
      </Toolbar>
      <Divider />
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={t("navbar.home")} />
        </ListItem>
        <ListItem button component={Link} to="/dashboard">
          <ListItemIcon>
            <GroupsIcon />
          </ListItemIcon>
          <ListItemText primary={t("navbar.dashboard")} />
        </ListItem>
      </List>
    </div>
  );
};

export default Drawer;
