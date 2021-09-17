import React from "react";
import DrawerItem from "../components/Drawer";
import Bar from "../components/Bar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Hidden from "@mui/material/Hidden";
import Drawer from "@mui/material/Drawer";
import { useSelector, useDispatch } from "react-redux";
import { toggleBar } from "../actions";

const drawerWidth = 240;

const Navbar = props => {
  const { window } = props;
  const nav = useSelector(state => state.nav);
  const dispatch = useDispatch();
  const { drawerOpen } = nav;
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Bar />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={drawerOpen}
          onClose={() => dispatch(toggleBar())}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <DrawerItem />
        </Drawer>

        <Hidden xsDown implementation="css">
          <Drawer
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            variant="permanent"
            open
          >
            <DrawerItem />
          </Drawer>
        </Hidden>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {props.children}
      </Box>
    </Box>
  );
};

export default Navbar;
