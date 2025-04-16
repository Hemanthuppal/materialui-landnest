// LeaseSave.js
import React, { useEffect, useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  IconButton,
  Button,
  Divider
} from '@mui/material';
import { Call, LocationOn, Delete } from '@mui/icons-material';

const LeaseSave = () => {
  const [savedProperties, setSavedProperties] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('leaseFavorites')) || [];
    setSavedProperties(saved);
  }, []);

  const handleDelete = (id) => {
    const updated = savedProperties.filter(item => item.id !== id);
    localStorage.setItem('leaseFavorites', JSON.stringify(updated));
    setSavedProperties(updated);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" mb={3}>
        Saved Properties
      </Typography>

      {savedProperties.length === 0 ? (
        <Typography variant="body1">No saved properties yet.</Typography>
      ) : (
        savedProperties.map((property) => (
          <Card
            key={property.id}
            sx={{
              mb: 4,
              borderRadius: 4,
              boxShadow: 3,
              transition: 'transform 0.2s ease-in-out',
              '&:hover': { transform: 'scale(1.01)' }
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={property.image}
              alt="Saved Property"
            />

            <CardContent>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h6" fontWeight="bold">
                  {property.title}
                </Typography>
                <IconButton onClick={() => handleDelete(property.id)} color="error">
                  <Delete />
                </IconButton>
              </Box>

              <Typography variant="body2" color="text.secondary" mb={1}>
                {property.location}
              </Typography>

              <Grid container justifyContent="space-between" alignItems="center">
                <Typography variant="subtitle1" color="primary" fontWeight="bold">
                  {property.price}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Listed on: {property.date}
                </Typography>
              </Grid>

              <Box display="flex" alignItems="center" mt={2}>
                <LocationOn fontSize="small" />
                <Typography variant="body2" ml={0.5}>
                  Location Verified
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Button
                  size="small"
                  variant="outlined"
                  color="success"
                  startIcon={<Call />}
                  sx={{ textTransform: 'none' }}
                >
                  Call Now
                </Button>
              </Box>

              <Divider sx={{ my: 2 }} />

              <Grid container>
                <Grid item xs={4} textAlign="center">
                  <Typography variant="caption" color="text.secondary">
                    Facing
                  </Typography>
                  <Typography variant="body2" fontWeight="bold">
                    {property.facing}
                  </Typography>
                </Grid>
                <Grid item xs={4} textAlign="center">
                  <Typography variant="caption" color="text.secondary">
                    Area ({property.dimensions})
                  </Typography>
                  <Typography variant="body2" fontWeight="bold">
                    {property.area}
                  </Typography>
                </Grid>
                <Grid item xs={4} textAlign="center">
                  <Typography variant="caption" color="text.secondary">
                    Listed By
                  </Typography>
                  <Typography variant="body2" fontWeight="bold">
                    {property.listedBy}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        ))
      )}
    </Box>
  );
};

export default LeaseSave;
