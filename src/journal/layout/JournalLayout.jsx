import { Box, Toolbar } from "@mui/material";
import React from "react";
import { NavBar, SideBar } from "../components";

//Ancho de la la barras tanto lateral como horizontal

const drawerWidth = 280;

export const JournalLayout = ({ children }) => {
  return (
    // Este funtional component se va a encargar de ser el elemento que representa los datos de la aplicacion
    <Box sx={{ display: "flex" }}>
      <NavBar drawerWidth={drawerWidth}></NavBar>

      <SideBar drawerWidth={drawerWidth}></SideBar>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* Este va ser donde sera representado cada uno de los elementos del layout */}
        <Toolbar></Toolbar>
        {children}
      </Box>
    </Box>
  );
};
