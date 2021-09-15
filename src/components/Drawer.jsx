import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import { useTranslation } from "react-i18next";

const Drawer = () => {
  const { t } = useTranslation();
  return (
    <div>
      <List
        subheader={
          <ListSubheader component="div">{t("app.name")}</ListSubheader>
        }
      >
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={t("navbar.home")} />
        </ListItem>
      </List>
    </div>
  );
};

export default Drawer;
