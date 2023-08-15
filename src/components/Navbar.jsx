import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar position="fixed" sx={{ mb: "15px" }}>
      <Toolbar>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          Tokopedia&#39;s Play
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
