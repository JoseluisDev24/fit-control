"use client"
import React, { useState } from "react";
import { Menu, MenuItem, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function BurgerMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {/* Botón de menú hamburguesa */}
      <IconButton onClick={handleClick} sx={{ color: "white"}}>
        <MenuIcon />
      </IconButton>

      {/* Menú desplegable */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            backgroundColor: "rgb(35,15,97)", // Color de fondo del menú
            color: "white", // Color del texto
            borderRadius: "10px",
          },
        }}
      >
        <MenuItem onClick={handleClose}>Inicio</MenuItem>
        <MenuItem onClick={handleClose}>Perfil</MenuItem>
        <MenuItem onClick={handleClose}>Configuración</MenuItem>
      </Menu>
    </div>
  );
}

export default BurgerMenu;
