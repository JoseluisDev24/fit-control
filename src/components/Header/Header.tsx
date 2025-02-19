"use client";
import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import Image from "next/image";
import BurgerMenu from "../BurguerMenu/BurguerMenu";


function Header() {
  return (
    <Box className="top-0 flex flex-col items-center py-3 px-5 gap-8 bg-[rgb(35,15,97)] shadow-sm text-white rounded-b-3xl sm:items-start ">
      <Box className="flex items-center justify-between w-full gap-4 pt-4">
        <Image
          width={50}
          height={50}
          src="/gymProfile.jpeg"
          alt="imagen perfil"
          className="rounded-full w-14 border-2 border-violet-400"
        />
        <BurgerMenu />
      </Box>
      <Box className="flex items-center justify-between gap-4">
        <Box>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Fit Control
          </Typography>
          <Typography variant="subtitle2" className=" pt-2 text-slate-300">
            Av. Andres Romero 123, Sarandi Grande, Florida.
          </Typography>
        </Box>
      </Box>
      <Box className="flex items-center gap-4 sm:w-3/12">
        <form action="" className="w-screen px-5 flex justify-center sm:px-0">
          <TextField
            // label="Buscar usuarios..."
            type="text"
            name="search"
            fullWidth
            variant="outlined"
            size="small"
            className="bg-[rgb(131,82,195)] rounded-3xl"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton sx={{ color: "white" }}>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton sx={{ color: "white" }}>
                      <AddIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
            sx={{
              "& fieldset": { border: "none" },
              "& input": { color: "white", paddingLeft: "8px" }, // Ajuste para centrar el texto con los iconos
              "& label": {
                color: "lightgray",
                fontSize: "16px",
              },
              "& .MuiInputLabel-shrink": {
                left: 0, // Evita que se mueva al hacer focus
              },
            }}
          />
        </form>
      </Box>
      <Box className="flex items-center gap-4">
        {["Todos", "Activos", "Vencidos"].map((text) => (
          <Button
            key={text}
            variant="contained"
            color="secondary"
            sx={{
              backgroundColor: "transparent",
              boxShadow: "none",
              borderRadius: "0",
              textTransform: "none",
              width: "80px",
              textAlign: "center",
              "&:hover": {
                backgroundColor: "rgb(131,82,195)",
                borderRadius: "3rem",
                transition: "0.3s",
              },
            }}
          >
            {text}
          </Button>
        ))}
      </Box>
    </Box>
  );
}

export default Header;
