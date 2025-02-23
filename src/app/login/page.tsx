import React from 'react'
import { Button, TextField, Typography } from '@mui/material'

interface Props {}

function Login(props: Props) {
    const {} = props

    return (
        <div className="flex items-center justify-center pt-4">
      <div className="shadow-lg rounded-lg p-8 w-full max-w-md bg-white text-gray-700">
        <Typography
          variant="h4"
          component="h1"
          className="text-center mb-6 pb-6 font-semibold"
        >
          Iniciar Sesión
        </Typography>

        {/* {error && <Typography color="error">{error}</Typography>} */}

        <form  className="space-y-4">
          <TextField
            label="Correo Electrónico"
            type="email"
            name="email"
            fullWidth
            required
            variant="outlined"
            // value={formik.values.email}
            // onChange={formik.handleChange}
          />
          <TextField
            label="Contraseña"
            type="password"
            name="password"
            fullWidth
            required
            variant="outlined"
            // value={formik.values.password}
            // onChange={formik.handleChange}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            // disabled={!formik.isValid || isLoading}
          >
            {/* {isLoading ? "Cargando..." : "Ingresar"} */}
            Ingresar
          </Button>
        </form>
      </div>
    </div>
    )
}

export default Login
