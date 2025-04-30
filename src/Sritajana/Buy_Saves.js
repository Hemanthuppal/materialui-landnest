import React, { useEffect, useState } from 'react';
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
  Favorite,
  Share,
  ThumbUpAltOutlined,
  ThumbUpAlt,
  Call,
  LocationOn,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import CustomSearchBar from '../Rajesh/CustomSearchBar';
import BottomNavbar from './CustomNav';

const BuySaves = () => {
  const [saved, setSaved] = useState([]);
  const [likedCards, setLikedCards] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem('savedBuy');
    if (stored) {
      setSaved(JSON.parse(stored));
    }
  }, []);

  const handleRemove = (id) => {
    const updated = saved.filter((item) => item.id !== id);
    setSaved(updated);
    localStorage.setItem('savedBuy', JSON.stringify(updated));
  };

  const toggleLike = (id) => {
    setLikedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleLocationClick = (e, property) => {
    e.stopPropagation();
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;
          
          // Check if property has valid coordinates
          if (property.lat && property.lng) {
            // Open maps with directions
            const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${property.lat},${property.lng}&travelmode=driving`;
            window.open(mapsUrl, '_blank');
          } else {
            // Fallback to just showing the property location if coordinates are missing
            const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${property.location}`;
            window.open(mapsUrl, '_blank');
          }
        },
        (error) => {
          console.error("Error getting user location:", error);
          // Fallback without user location if permission denied
          if (property.lat && property.lng) {
            const mapsUrl = `https://www.google.com/maps/?q=${property.lat},${property.lng}`;
            window.open(mapsUrl, '_blank');
          } else {
            const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${property.location}`;
            window.open(mapsUrl, '_blank');
          }
        }
      );
    } else {
      // Geolocation not supported - just open maps with property location
      if (property.lat && property.lng) {
        const mapsUrl = `https://www.google.com/maps/?q=${property.lat},${property.lng}`;
        window.open(mapsUrl, '_blank');
      } else {
        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${property.location}`;
        window.open(mapsUrl, '_blank');
      }
    }
  };

  return (
    <Box sx={{ backgroundColor: 'rgb(239, 231, 221)', minHeight: '110vh' }}>
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
        <CustomSearchBar />
      </Box>

      {/* Saved Property Cards */}
      <Box sx={{ pb: 8 }}>
        {saved.length === 0 ? (
          <Typography sx={{ px: 2, mt: 4 }} color="text.secondary">
            No saved properties.
          </Typography>
        ) : (
          saved.map((property) => (
            <Card
              key={property.id}
              sx={{
                mb: 2,
                mx: 2,
                borderRadius: 3,
                boxShadow: 2,
                transition: 'transform 0.2s ease-in-out',
                '&:hover': { transform: 'scale(1.015)', boxShadow: 4 },
              }}
              onClick={(e) => {
                const isButtonClick = e.target.closest('button') || e.target.closest('svg');
                if (!isButtonClick) {
                  navigate('/buy-description', { state: { propertyId: property.id, property: property.propertyData } });
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
                  <Tooltip title="Remove from Wishlist">
                    <IconButton
                      sx={{ bgcolor: 'white', boxShadow: 1, p: 0.8 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemove(property.id);
                      }}
                    >
                      <Favorite color="error" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Share">
                    <IconButton
                      sx={{ bgcolor: 'white', boxShadow: 1, p: 0.8 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        const shareText = `Check out this property: ${property.title}, located at ${property.location}`;
                        if (navigator.share) {
                          navigator.share({
                            title: property.title,
                            text: shareText,
                            url: window.location.href,
                          });
                        } else {
                          alert("Sharing is not supported on this browser.");
                        }
                      }}
                    >
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
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLike(property.id);
                      }}
                    >
                      {likedCards[property.id] ? <ThumbUpAlt /> : <ThumbUpAltOutlined />}
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
                  {new Date(property.date).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })}
                  </Typography>
                </Grid>

                <Box display="flex" alignItems="center" mt={0.2}>
                  <Tooltip title="View directions in Google Maps">
                    <IconButton 
                      size="small" 
                      onClick={(e) => handleLocationClick(e, property)}
                      sx={{ p: 0, color: 'primary.main' }}
                    >
                      <LocationOn fontSize="small" />
                    </IconButton>
                  </Tooltip>
                  <Typography variant="caption" color="text.primary" ml={0.5}>
                    Location Verified
                  </Typography>
                  <Box sx={{ flexGrow: 1 }} />
                  <Button
                    size="small"
                    variant="outlined"
                    color="success"
                    startIcon={<Call />}
                    sx={{ textTransform: 'none', px: 1.2, py: 0.2, fontSize: '0.7rem' }}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (property.mobile_no) {
                        window.location.href = `tel:${property.mobile_no}`;
                      } else {
                        alert("Phone number not available");
                      }
                    }}
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
                    { label: 'Facing', value: property.facing },
                    { label: 'Area', value: `${property.area} (${property.length} × ${property.width})` },
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
          ))
        )}
      </Box>

      <BottomNavbar />
    </Box>
  );
};

export default BuySaves;