import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Button,
  Grid,
  Tooltip,
  Menu,
  MenuItem,
} from '@mui/material';
import {
  Share,
  LocationOn,
  MoreVert,
} from '@mui/icons-material';
import buildingImage from '../Images/house.jpeg';
import buildingImage2 from '../Images/house1.jpg';
import CustomSearchBar from '../Rajesh/CustomSearchBar';
import W_Navbar from './../Woker/W_Navbar';

const W_Buy = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuPropertyId, setMenuPropertyId] = useState(null);

  const propertyData = [
    {
      id: 1,
      title: 'Plot For Buy in Btm Layout 2nd Stage',
      location: '16th Main Road, BTM layout 2nd...',
      price: '₹3.25 Cr/m',
      date: '01-04-2025',
      facing: 'East',
      area: '1600 sq ft',
      dimensions: '40×40',
      listedBy: 'Owner/Agent',
      image: buildingImage,
      lat: 12.9174,
      long: 77.6101,
    },
    {
      id: 2,
      title: 'Commercial Plot for Buy near Silk Board',
      location: 'Silk Board Junction, Bangalore...',
      price: '₹2.75 Cr/m',
      date: '02-04-2025',
      facing: 'North',
      area: '1400 sq ft',
      dimensions: '35×40',
      listedBy: 'Builder',
      image: buildingImage2,
      lat: 12.9177,
      long: 77.6233,
    },
  ];

  const handleShare = (event, property) => {
    event.stopPropagation();
    alert(`Share clicked for: ${property.title}`);
  };

  const handleMenuOpen = (event, propertyId) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
    setMenuPropertyId(propertyId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuPropertyId(null);
  };

  const handleEdit = () => {
    alert(`Edit clicked for property ID: ${menuPropertyId}`);
    handleMenuClose();
  };

  const handleDelete = () => {
    alert(`Delete clicked for property ID: ${menuPropertyId}`);
    handleMenuClose();
  };

  const openGoogleMapsWithDirections = (destLat, destLng) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const currentLat = position.coords.latitude;
          const currentLng = position.coords.longitude;

          const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${currentLat},${currentLng}&destination=${destLat},${destLng}&travelmode=driving`;

          window.open(googleMapsUrl, '_blank');
        },
        (error) => {
          console.error("Error getting location:", error);
          alert("Could not get your location. Please allow location access.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  const filteredProperties = propertyData.filter((property) =>
    property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    property.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box sx={{ backgroundColor: 'rgb(239, 231, 221)', minHeight: '120vh' }}>
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          px: 1,
          py: 1,
          backgroundColor: 'rgb(239, 231, 221)',
        }}
      >
        <CustomSearchBar value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      </Box>

      <Box sx={{ pb: 8 }}>
        {filteredProperties.map((property) => (
          <Card
            key={property.id}
            sx={{
              mb: 1.2,
              mx: 2,
              borderRadius: 3,
              boxShadow: 2,
              transition: 'transform 0.2s ease-in-out',
              '&:hover': { transform: 'scale(1.015)', boxShadow: 4 },
            }}
            onClick={(e) => {
              const isButtonClick = e.target.closest('button') || e.target.closest('svg');
              if (!isButtonClick) {
                navigate('/buy-description', { state: { property } });
              }
            }}
          >
            <Box position="relative">
              <CardMedia
                component="img"
                image={property.image}
                alt="Property"
                sx={{
                  width: '100%',
                  height: '140px',
                  objectFit: 'cover',
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                }}
              />

              {/* Share and More icons */}
              <Box sx={{ position: 'absolute', top: 6, right: 6, display: 'flex', gap: 1 }}>
                <Tooltip title="Share">
                  <IconButton
                    size="small"
                    sx={{ bgcolor: 'white' }}
                    onClick={(e) => handleShare(e, property)}
                  >
                    <Share fontSize="small" />
                  </IconButton>
                </Tooltip>

                <Tooltip title="More Options">
                  <IconButton
                    size="small"
                    sx={{ bgcolor: 'white' }}
                    onClick={(e) => handleMenuOpen(e, property.id)}
                  >
                    <MoreVert fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Box>

              {/* Edit/Delete Menu */}
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              >
                <MenuItem onClick={handleEdit}>Edit</MenuItem>
                <MenuItem onClick={handleDelete}>Delete</MenuItem>
              </Menu>
            </Box>

            <CardContent sx={{ px: 2, py: 0.2, pb: '7px !important' }}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom noWrap>
                {property.title}
              </Typography>
              <Typography variant="caption" color="text.secondary" mb={0.2} noWrap>
                {property.location}
              </Typography>

              <Grid container justifyContent="space-between" alignItems="center">
                <Typography variant="body2" fontWeight="bold" color="primary">
                  {property.price}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {property.date}
                </Typography>
              </Grid>

              <Box display="flex" alignItems="center" mt={0.2}>
                <IconButton
                  onClick={(e) => {
                    e.stopPropagation();
                    openGoogleMapsWithDirections(property.lat, property.long);
                  }}
                >
                  <LocationOn fontSize="small" color="action" />
                </IconButton>

                <Typography variant="caption" color="text.primary" ml={0.5}>
                  Location Verified
                </Typography>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  border: '1px solid #e0e0e0',
                  borderRadius: 2,
                  overflow: 'hidden',
                }}
              >
                {[
                  { label: 'Facing', value: property.facing },
                  { label: `Area (${property.dimensions})`, value: property.area },
                  { label: 'Listed By', value: property.listedBy },
                ].map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      flex: 1,
                      px: 1,
                      py: 0.2,
                      textAlign: 'center',
                      borderRight: index < 2 ? '1px solid #e0e0e0' : 'none',
                    }}
                  >
                    <Typography variant="caption" color="text.secondary" noWrap>
                      {item.label}
                    </Typography>
                    <Typography variant="body2" fontWeight="bold" noWrap>
                      {item.value}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>

      <W_Navbar />
    </Box>
  );
};

export default W_Buy;
