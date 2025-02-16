"use client";
import React from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

interface Props {}

function Header(props: Props) {
  return (
    <header className="top-0 flex flex-col items-center justify-between py-3 px-5 gap-10 bg-blue-700 shadow-sm text-white rounded-b-xl sm:items-start">
      <Box className="flex items-center justify-between gap-4">
        <img
          src="/gymProfile.jpeg"
          alt="imagen perfil"
          className="rounded-full w-16 border-2 border-violet-400"
        />
        <Box>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Fit Control
          </Typography>
          <Typography variant="body2" className="text-xs pt-2">
            Mas control, mejor servicio para tu gym.
          </Typography>
        </Box>
      </Box>
      <Box className="flex items-center gap-4 sm:w-3/12">
        <form action="" className="w-screen px-5 flex justify-center sm:px-0">
          <TextField
            label="Buscar usuarios"
            type="text"
            name="search"
            fullWidth
            variant="outlined"
            size="small"
            className="bg-white rounded-xl"
          />
        </form>
      </Box>
    </header>
  );
}

export default Header;
