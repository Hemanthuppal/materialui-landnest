import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const fields = [
  { label: "Site Area", name: "site_area" },
  { label: "Facing", name: "facing" },
  { label: "List", name: "list" },
  { label: "Price", name: "price" },
  { label: "No.of floors", name: "no_of_flores" },
  { label: "Buildup area", name: "buildup_area" },
  { label: "Borewell", name: "borewell" },
  { label: "Parking", name: "parking" },
  { label: "1bhk-count", name: "_1bhk_count" },
  { label: "2bhk-count", name: "_2bhk_count" },
  { label: "3bhk-count", name: "_3bhk_count" },
  { label: "4bhk-count", name: "_4bhk_count" },
  { label: "Duplex bedrooms", name: "duplex_bedrooms" },
  { label: "Floors", name: "no_of_flores" },
  { label: "Rooms-Count", name: "rooms_count" },
  { label: "Bedrooms-count", name: "bedrooms_count" },
  { label: "Shop-count", name: "shop_count" },
  { label: "House-count", name: "house_count" },
];

const AdminUploadPropertiesForm = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Upload Property Details
      </Typography>
      <Box
        component="form"
        sx={{
          mt: 2,
        }}
      >
        <Grid container spacing={2}>
          {fields.map((field) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={2}
              key={field.name}
            >
              <TextField
                label={field.label}
                name={field.name}
                variant="outlined"
                fullWidth
                size="small"
                InputProps={{ sx: { height: "40px" } }}
              />
            </Grid>
          ))}
        </Grid>

        <Box mt={3} display="flex" justifyContent="center">
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AdminUploadPropertiesForm;
