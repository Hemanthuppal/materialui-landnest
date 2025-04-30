import React, { useState } from 'react';
import { Box, Card, CardContent, CardMedia, Typography, IconButton, Tooltip, Grid } from '@mui/material';
import { Edit, Delete, Share, LocationOn } from '@mui/icons-material';
import buildingImage from '../Images/house.jpeg';
import buildingImage2 from '../Images/house1.jpg';
import CustomSearchBar from '../Rajesh/CustomSearchBar';
import W_Navbar from './W_Navbar';

const W_Post = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [saved, setSaved] = useState(() => {
    const stored = localStorage.getItem('savedBuy');
    return stored ? JSON.parse(stored) : [];
  });

  // State to track whether the Edit/Delete icons are visible
  const [showEditDelete, setShowEditDelete] = useState(null);

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

  const filteredProperties = propertyData.filter((property) =>
    property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    property.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCardClick = (property) => {
    // Toggle Edit/Delete icons visibility when clicking "Move Vert"
    setShowEditDelete((prev) => (prev === property.id ? null : property.id));
  };

  const handleDelete = (propertyId) => {
    // Remove property from list (implement as needed)
    console.log(`Deleted property with id: ${propertyId}`);
  };

  return (
    <Box sx={{ backgroundColor: 'rgb(239, 231, 221)', minHeight: '120vh' }}>
      {/* Sticky Search Bar */}
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

      {/* Property List */}
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
              <Box sx={{ position: 'absolute', top: 6, right: 6, display: 'flex', gap: 0.8 }}>
                <Tooltip title="Share">
                  <IconButton sx={{ bgcolor: 'white', boxShadow: 1, p: 0.8 }}>
                    <Share />
                  </IconButton>
                </Tooltip>
              </Box>
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
                <IconButton>
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
                {[{ label: 'Facing', value: property.facing },
                  { label: `Area (${property.dimensions})`, value: property.area },
                  { label: 'Listed By', value: property.listedBy }].map((item, index) => (
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

              {/* Move Vert Button - Clicking it shows Edit/Delete icons */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mt: 1,
                }}
              >
                <Typography variant="caption" color="text.secondary">
                  Move Vert
                </Typography>

                {showEditDelete === property.id && (
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Tooltip title="Edit">
                      <IconButton sx={{ color: 'blue' }} onClick={() => console.log('Edit clicked')}>
                        <Edit />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton sx={{ color: 'red' }} onClick={() => handleDelete(property.id)}>
                        <Delete />
                      </IconButton>
                    </Tooltip>
                  </Box>
                )}
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>

      <W_Navbar />
    </Box>
  );
};

export default W_Post;
