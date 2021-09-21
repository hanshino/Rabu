import React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

const NewRoomButton = () => {
  return (
    <Fab
      color="primary"
      aria-label="create a multiboss room"
      sx={{
        position: "fixed",
        margin: 0,
        right: 20,
        bottom: 20,
        top: "auto",
        left: "auto",
      }}
      component={Link}
      to="/room/create"
    >
      <AddIcon />
    </Fab>
  );
};

export default NewRoomButton;
