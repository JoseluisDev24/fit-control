import React from "react";
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Chip,
  Box,
} from "@mui/material";

const UserCard = ({
  name,
  plan,
  status,
}: {
  name: string;
  plan: string;
  status: "Activo" | "Vencido";
}) => {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        p: 1,
        maxWidth: 400,
        height: "96px",
        borderRadius: "20px",
      }}
    >
      <Avatar
        src="/gymProfile.jpeg"
        alt={name}
        sx={{ width: 52, height: 52, mr: 1, ml: 1 }}
      />

      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {plan}
        </Typography>
        <Box mt={0}>
          <Chip
            label={status}
            color={status === "Activo" ? "success" : "error"}
            sx={{ fontWeight: "bold" }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default UserCard;
