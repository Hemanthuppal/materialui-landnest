// PropertyCard.js
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
  Divider,
  Tooltip,
} from '@mui/material';
import {
  FavoriteBorder,
  Favorite,
  Share,
  ThumbUpAltOutlined,
  ThumbUpAlt,
  Call,
  LocationOn,
} from '@mui/icons-material';
import buildingImage from '../Images/Leasebuilding.png';
import buildingImage2 from '../Images/building.jpeg';
import CustomSearchBar from './CustomSearchBar';
import BottomNavbar from './CustomBottomNav';

const LeasePropertyCard = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [saved, setSaved] = useState(() => {
    const stored = localStorage.getItem('savedLease');
    return stored ? JSON.parse(stored) : [];
  });

  const [likedCards, setLikedCards] = useState({});

  const propertyData = [
    {
      id: 1,
      title: 'Plot For Lease in Btm Layout 2nd Stage',
      location: '16th Main Road, BTM layout 2nd...',
      price: '₹3.25 Cr/m',
      date: '01-04-2025',
      facing: 'East',
      area: '1600 sq ft',
      dimensions: '40×40',
      listedBy: 'Owner/Agent',
      image: buildingImage,
      lat: 12.9174,     // Sample coordinates
    long: 77.6101,
    },
    {
      id: 2,
      title: 'Commercial Plot for Lease near Silk Board',
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
  
  const toggleSave = (property) => {
    const isSaved = saved.find((p) => p.id === property.id);
    let updated;

    if (isSaved) {
      updated = saved.filter((p) => p.id !== property.id);
    } else {
      updated = [...saved, property];
    }

    setSaved(updated);
    localStorage.setItem('savedLease', JSON.stringify(updated));
  };

  const isSaved = (property) => saved.some((p) => p.id === property.id);

  const filteredProperties = propertyData.filter((property) =>
    property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    property.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleLike = (id) => {
    setLikedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
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
            onClick={(e) => {
              const isButtonClick = e.target.closest('button') || e.target.closest('svg');
              if (!isButtonClick) {
                navigate('/lease-description', { state: { property } });
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
              <Box sx={{ position: 'absolute', top: 6, right: 6, display: 'flex', gap: 0.8 }}>
                <Tooltip title="Add to Wishlist">
                  <IconButton
                    sx={{ bgcolor: 'white', boxShadow: 1, p: 0.8 }}
                    onClick={() => toggleSave(property)}
                  >
                    {isSaved(property) ? <Favorite color="error" /> : <FavoriteBorder />}
                  </IconButton>
                </Tooltip>
                <Tooltip title="Share">
                  <IconButton sx={{ bgcolor: 'white', boxShadow: 1, p: 0.8 }}>
                    <Share />
                  </IconButton>
                </Tooltip>
              </Box>
              <Box sx={{ position: 'absolute', bottom: 6, right: 6 }}>
                <Tooltip title="Like">
                  <IconButton
                    sx={{
                      bgcolor: 'white',
                      boxShadow: 1,
                      color: likedCards[property.id] ? 'blue' : 'default',
                      p: 0.8,
                    }}
                    onClick={() => toggleLike(property.id)}
                  >
                    {likedCards[property.id] ? <ThumbUpAlt /> : <ThumbUpAltOutlined />}
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>

            <CardContent sx={{ px: 2,py:0.2,pb: '7px !important'}}>
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
    e.stopPropagation(); // prevents navigation on card click
    openGoogleMapsWithDirections(property.lat, property.long);
  }}
>
  <LocationOn fontSize="small" color="action" />
</IconButton>


                <Typography variant="caption" color="text.primary" ml={0.5}>
                  Location Verified
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Button
                  size="small"
                  variant="outlined"
                  color="success"
                  startIcon={<Call />}
                  sx={{ textTransform: 'none', px: 1.2, py: 0.3, fontSize: '0.7rem' }}
                >
                  Call
                </Button>
              </Box>

              {/* <Divider sx={{ my: 1 }} /> */}

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
                      py:0.2,
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

      <BottomNavbar />
    </Box>
  );
};

export default LeasePropertyCard;
