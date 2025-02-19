"use client"
import React from 'react'
import { Box, Grid } from '@mui/material'
import UserCard from '../components/UserCard/UserCard'



function Page() {
  const users = [
    { id: 1, name: "Juan Pérez", plan: "Plan Premium", status: "Activo" },
    { id: 2, name: "María López", plan: "Plan Básico", status: "Vencido" },
    { id: 3, name: "Carlos Gómez", plan: "Plan Pro", status: "Activo" },
    { id: 4, name: "Carlos Gómez", plan: "Plan Pro", status: "Activo" },
    { id: 5, name: "Carlos Gómez", plan: "Plan Pro", status: "Activo" },

  ];

  return (
    <Box className="py-4 px-2">
      <Grid container spacing={2}>
        {users.map((user) => (
          <Grid item key={user.id} xs={12} sm={6} md={4}>
            <UserCard
              name={user.name}
              plan={user.plan}
              status={user.status as "Activo" | "Vencido"}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Page
