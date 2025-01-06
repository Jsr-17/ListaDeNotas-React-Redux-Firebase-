import { SaveOutlined } from "@mui/icons-material";
import { Grid, Typography, Button, TextField } from "@mui/material";
import React from "react";
import { ImageGalery } from "../components";

export const NoteView = () => {
  return (
    <Grid container direction="row" justifyContent="space-between">
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          28 Enero ,3034
        </Typography>
      </Grid>
      <Grid item>
        <Button color="primary" sx={{ padding: 2 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }}></SaveOutlined>
        </Button>
      </Grid>
      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un titulo"
          label="Título"
          sx={{ border: "none", mb: 1 }}
        ></TextField>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="¿Que sucedió hoy?"
          label="Escriba aqui"
          minRows={10}
        ></TextField>
      </Grid>
      <ImageGalery></ImageGalery>
    </Grid>
  );
};
