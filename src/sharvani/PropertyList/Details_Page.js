import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
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
  CircularProgress
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
import buildingImage from '../../Images/house.jpeg';
import buildingImage2 from '../../Images/house1.jpg';
import CustomSearchBar from '../../Rajesh/CustomSearchBar';
import BottomNavbar from '../BottomNavbar/BottomNavbar';

const PropertyCard = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [saved, setSaved] = useState(() => {
    const stored = localStorage.getItem('savedRent');
    return stored ? JSON.parse(stored) : [];
  });
  const [likedCards, setLikedCards] = useState({});

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('http://46.37.122.105:89/property/');
        // Filter properties where type is "rent"
        const rentProperties = response.data.filter(property => 
          property.type && property.type.toLowerCase() === "rent"
        );
        setProperties(rentProperties);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
        console.error('Error fetching properties:', err);
      }
    };

    fetchProperties();
  }, []);

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
    const isSaved = saved.find((p) => p.property_id === property.property_id);
    let updated;

    if (isSaved) {
      updated = saved.filter((p) => p.property_id !== property.property_id);
    } else {
      updated = [...saved, property];
    }

    setSaved(updated);
    localStorage.setItem('savedRent', JSON.stringify(updated));
  };

  const isSaved = (property) => saved.some((p) => p.property_id === property.property_id);

  const filteredProperties = properties.filter((property) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      (property.type && property.type.toLowerCase().includes(searchLower)) ||
      (property.location && property.location.toLowerCase().includes(searchLower)) ||
      (property.nearby && property.nearby.toLowerCase().includes(searchLower))
    );
  });

  const toggleLike = (id) => {
    setLikedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Format price with Indian Rupee symbol
  const formatPrice = (price) => {
    if (!price) return 'Price not available';
    return `₹${price.toLocaleString('en-IN')}`;
  };

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return 'Date not available';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB');
  };

  if (loading) {
    return (
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        backgroundColor: 'rgb(239, 231, 221)'
      }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        backgroundColor: 'rgb(239, 231, 221)'
      }}>
        <Typography color="error">Error: {error}</Typography>
      </Box>
    );
  }

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
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => {
            // Extract coordinates if available
            const locationCoords = property.location?.includes('Lat:') 
              ? property.location.split(', ').map(coord => coord.split(': ')[1])
              : ['', ''];
            
            return (
              <Card
                key={property.property_id}
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
                    navigate('/rent-description', { state: { property } });
                  }
                }}
              >
                <Box position="relative">
                  <CardMedia
                    component="img"
                    image={property.image || buildingImage} // Fallback to placeholder image
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
                          color: likedCards[property.property_id] ? 'blue' : 'default',
                          p: 0.8,
                        }}
                        onClick={() => toggleLike(property.property_id)}
                      >
                        {likedCards[property.property_id] ? <ThumbUpAlt /> : <ThumbUpAltOutlined />}
                      </IconButton>
                    </Tooltip>
                  </Box>
                </Box>

                <CardContent sx={{ px: 2, py: 0.2, pb: '7px !important' }}>
                  <Typography variant="subtitle1" fontWeight="bold" gutterBottom noWrap>
                    {property.type || 'Rental Property'}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" mb={0.2} noWrap>
                    {property.nearby || property.location || 'Location not specified'}
                  </Typography>

                  <Grid container justifyContent="space-between" alignItems="center">
                    <Typography variant="body2" fontWeight="bold" color="primary">
                      {formatPrice(property.price)}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {formatDate(property.created_at)}
                    </Typography>
                  </Grid>

                  <Box display="flex" alignItems="center" mt={0.2}>
                    <IconButton
                      onClick={(e) => {
                        e.stopPropagation();
                        if (locationCoords[0] && locationCoords[1]) {
                          openGoogleMapsWithDirections(locationCoords[0], locationCoords[1]);
                        }
                      }}
                    >
                      <LocationOn fontSize="small" color="action" />
                    </IconButton>
                    <Typography variant="caption" color="text.primary" ml={0.5}>
                      {property.location ? 'Location Verified' : 'Location not verified'}
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

                  <Box
                    sx={{
                      display: 'flex',
                      border: '1px solid #e0e0e0',
                      borderRadius: 2,
                      overflow: 'hidden',
                    }}
                  >
                    {[
                      { label: 'Facing', value: property.facing || 'Not specified' },
                      { label: 'Area', value: property.site_area ? `${property.site_area} sq ft` : 'Not specified' },
                      { label: 'Parking', value: property.parking ? 'Available' : 'Not available' },
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
            );
          })
        ) : (
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '200px',
            px: 2
          }}>
            <Typography>No rental properties found</Typography>
          </Box>
        )}
      </Box>

      <BottomNavbar />
    </Box>
  );
};

export default PropertyCard;