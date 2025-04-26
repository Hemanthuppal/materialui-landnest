import React, { useEffect, useState } from 'react';
import {
  Box, Typography, Grid, Chip, Card, CardContent, IconButton, Paper
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import BedIcon from '@mui/icons-material/Bed';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import buildingImage from '../Images/house.jpeg';
import CustomBottomNav from './CustomNav';
import BathtubIcon from '@mui/icons-material/Bathtub';


const Buy_description = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { propertyId } = location.state || {};

  const [property, setProperty] = useState(null);

  useEffect(() => {
    console.log('Property ID:', propertyId); // Log the property ID
  
    if (propertyId) {
      axios.get(`http://46.37.122.105:89/property/${propertyId}/`)
        .then((res) => setProperty(res.data))
        .catch((err) => console.error('Failed to fetch property:', err));
    }
  }, [propertyId]);
  
  if (!property) {
    return <Typography sx={{ mt: 10, textAlign: 'center' }}>Loading property...</Typography>;
  }

  const {
    property_images = [],
    type, price, location: loc,
    site_area, buildup_area,
    facing, roadwidth, list,
    nearby, created_at, bedrooms_count,
    bathrooms_count, parking, balcony
  } = property;

  const imageUrl = property_images?.[0]?.image
    ? `http://46.37.122.105:89${property_images[0].image}`
    : buildingImage;

  return (
    <Box sx={{ width: '100vw', minHeight: '100vh', backgroundColor: 'rgb(239, 231, 221)', pb: 10 }}>
      {/* Header */}
      <Box sx={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        bgcolor: 'rgb(49, 48, 49)', color: 'white', p: 2,
        display: 'flex', alignItems: 'center', height: '64px',
      }}>
        <IconButton onClick={() => navigate(-1)} sx={{ color: 'white', mr: 1 }}>
          <ArrowBackIosNewIcon />
        </IconButton>
        <Typography variant="h6" fontWeight="bold">
          {type?.replace(/"/g, '') || 'Property'}
        </Typography>
      </Box>

      {/* Property Content */}
      <Box sx={{ pt: '80px', px: 2, mt: 4 }}>
        <Card sx={{
          borderRadius: '20px',
          background: 'linear-gradient(135deg, #ffffff 0%,rgb(248, 248, 248) 100%)',
          boxShadow: 5,
        }}>
          <Box component="img" src={imageUrl} alt="Property" sx={{
            width: '100%', height: 220, objectFit: 'cover',
            borderTopLeftRadius: '20px', borderTopRightRadius: '20px',
          }} />

          <CardContent>
            {/* Title & Price */}
            <Grid container justifyContent="space-between" alignItems="center" sx={{ pb: 2 }}>
              <Grid item xs={8}>
                <Typography fontWeight="bold" fontSize="18px">
                  {type?.replace(/"/g, '') || 'Property Type'}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {loc || 'Not Specified'}
                </Typography>
              </Grid>
              <Grid item sx={{ textAlign: 'right' }}>
                <Typography fontWeight="bold" fontSize="18px" color="rgb(240, 65, 30)">
                  ₹{price?.toLocaleString()}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Listed by {list?.replace(/"/g, '') || 'Owner'}
                </Typography>
              </Grid>
            </Grid>

            {/* Basic Info */}
            <Box sx={{
              display: 'flex', justifyContent: 'space-between',
              bgcolor: '#ede7f6', borderRadius: 2, p: 2, mb: 2,
            }}>
              <Box sx={{ textAlign: 'center', flex: 1 }}>
                <Typography fontWeight="bold" color="primary">
                  {site_area || 'NA'} sq ft
                </Typography>
                <Typography variant="caption">Site Area</Typography>
              </Box>
              <Box sx={{ textAlign: 'center', flex: 1 }}>
                <Typography fontWeight="bold" color="primary">
                  {roadwidth || 'NA'} ft
                </Typography>
                <Typography variant="caption">Road Width</Typography>
              </Box>
              <Box sx={{ textAlign: 'center', flex: 1 }}>
                <Typography fontWeight="bold" color="primary">
                  {facing?.replace(/"/g, '') || 'NA'}
                </Typography>
                <Typography variant="caption">Facing</Typography>
              </Box>
            </Box>

            {/* Nearby */}
            <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
              Nearby:
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
              <Chip
                label={nearby?.replace(/"/g, '') || 'Not Available'}
                sx={{
                  bgcolor: 'rgb(211, 135, 173)',
                  color: 'rgb(35, 35, 36)',
                  fontWeight: 'bold',
                  fontSize: '13px',
                }}
              />
            </Box>

            {/* Overview */}
            <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
              Overview:
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography><BedIcon /> {bedrooms_count || 'NA'} Bedrooms</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography><BathtubIcon /> {bathrooms_count || 'NA'} Bathrooms</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography><CalendarTodayIcon /> {created_at?.split('T')[0]}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>{balcony ? 'Balcony Available' : 'No Balcony'}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>{parking ? 'Parking Available' : 'No Parking'}</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>

      {/* Bottom Navigation */}
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <CustomBottomNav />
      </Paper>
    </Box>
  );
};

export default Buy_description;
