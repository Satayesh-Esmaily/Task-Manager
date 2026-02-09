import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useContext } from "react";
import { CustomThemeContext } from "../theme/ThemeContext";

export default function Header() {
  const { toggleTheme } = useContext(CustomThemeContext);

  return (
   <AppBar position="static">
  <Toolbar variant="dense">

    <IconButton edge="start" 
    color="inherit" 
    aria-label="menu" sx={{ mr: 2 }}>
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" 
    color="inherit" 
    component="div">

      Mini MUI Project
    </Typography>
  </Toolbar>
</AppBar>
  );
}
