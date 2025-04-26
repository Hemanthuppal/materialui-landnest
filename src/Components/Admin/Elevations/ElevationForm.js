import React from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  useMediaQuery,
}from "@mui/material";
import { useTheme } from "@mui/material/styles";


const ElevationForm = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Upload Elevation
      </Typography>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          maxWidth: 500,
          mx: "auto",
        }}
      >
        <TextField
          label="Elevation Name"
          variant="outlined"
          fullWidth
          size="small"
          InputProps={{ sx: { height: "40px" } }}
        />

        <Button variant="outlined" component="label">
          Upload Image
          <input hidden type="file" />
        </Button>
        <Button variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default ElevationForm;
