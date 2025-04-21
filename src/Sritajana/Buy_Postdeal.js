import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  TextField,
  Typography,
  Paper,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import axios from 'axios';

const Buy_Postdeal = () => {
  const [lat, setLat] = useState('28.6139');
  const [lng, setLng] = useState('77.2090');
  const [address, setAddress] = useState('');

  const fetchLocation = async () => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyAZAU88Lr8CEkiFP_vXpkbnu1-g-PRigXU`
      );
      const result = response.data.results[0];
      if (result) {
        setAddress(result.formatted_address);
      } else {
        setAddress('Location not found');
      }
    } catch (error) {
      console.error(error);
      setAddress('Error fetching location');
    }
  };

  return (
    <Container maxWidth="xs" sx={{ pt: 4 }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Post your Best Deal
      </Typography>

      <Paper elevation={3} sx={{ p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Property Type"
              variant="outlined"
              size="small"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Budget"
              variant="outlined"
              size="small"
              type="number"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Latitude"
              variant="outlined"
              size="small"
              value={lat}
              onChange={(e) => setLat(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Longitude"
              variant="outlined"
              size="small"
              value={lng}
              onChange={(e) => setLng(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <Button onClick={fetchLocation} variant="outlined" fullWidth>
              Get Location Address
            </Button>
          </Grid>

          {address && (
            <Grid item xs={12}>
              <Typography variant="body2" color="text.secondary">
                📍 {address}
              </Typography>
            </Grid>
          )}

          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>
              Map Preview
            </Typography>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: 250,
                borderRadius: 2,
                overflow: 'hidden',
                border: '1px solid #ccc',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <img
                src={`https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=600x300&markers=color:red%7C${lat},${lng}&key=AIzaSyAZAU88Lr8CEkiFP_vXpkbnu1-g-PRigXU`}
                alt="Map"
                style={{
                  width: '100%',
                  objectFit: 'cover',
                }}
              />
              <IconButton
                size="small"
                sx={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  backgroundColor: '#fff',
                }}
              >
                <FavoriteBorderIcon color="error" />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Description"
              multiline
              rows={4}
              fullWidth
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>

        <Box mt={3} display="flex" justifyContent="space-between" gap={2}>
          <Button variant="contained" color="error" fullWidth>
            Cancel
          </Button>
          <Button variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Buy_Postdeal;
