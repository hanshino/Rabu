import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

export default function () {
  return (
    <Box>
      <CssBaseline />
      <div className="mask">
        <div className="loader"></div>
      </div>
    </Box>
  );
}
