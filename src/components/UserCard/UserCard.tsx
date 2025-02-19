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
        p: 2,
        maxWidth: 400,
        height: "100px",
        borderRadius: "20px",
      }}
    >
      <Avatar
        src="/gymProfile.jpeg"
        alt={name}
        sx={{ width: 56, height: 56, mr: 2 }}
      />

      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {plan}
        </Typography>
        <Box mt={1}>
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
