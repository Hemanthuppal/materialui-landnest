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
   ChevronLeft,
    ChevronRight
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import CustomSearchBar from '../Rajesh/CustomSearchBar';
import BottomNavbar from './BottomNavbar/BottomNavbar';

const RentSaves = () => {
  const [saved, setSaved] = useState([]);
  const [likedCards, setLikedCards] = useState({});
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem('saveRent');
    if (stored) {
      const savedProperties = JSON.parse(stored);
      setSaved(savedProperties);
      
      // Initialize current image index for each property
      const indexes = {};
      savedProperties.forEach(property => {
        indexes[property.id] = 0;
      });
      setCurrentImageIndex(indexes);
    }
  }, []);

  const handleRemove = (id) => {
    const updated = saved.filter((item) => item.id !== id);
    setSaved(updated);
    localStorage.setItem('saveRent', JSON.stringify(updated));
  };

  const toggleLike = (id) => {
    setLikedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleNextImage = (propertyId, e) => {
    e.stopPropagation();
    setCurrentImageIndex(prev => {
      const currentIndex = prev[propertyId] || 0;
      const property = saved.find(p => p.id == propertyId);
      const nextIndex = (currentIndex + 1) % (property.images?.length || 1);
      return {
        ...prev,
        [propertyId]: nextIndex
      };
    });
  };

  const handlePrevImage = (propertyId, e) => {
    e.stopPropagation();
    setCurrentImageIndex(prev => {
      const currentIndex = prev[propertyId] || 0;
      const property = saved.find(p => p.id == propertyId);
      const prevIndex = (currentIndex - 1 + (property.images?.length || 1)) % (property.images?.length || 1);
      return {
        ...prev,
        [propertyId]: prevIndex
      };
    });
  };

  const handleLocationClick = (e, property) => {
    e.stopPropagation();
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;
          
          if (property.lat && property.lng) {
            const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${property.lat},${property.lng}&travelmode=driving`;
            window.open(mapsUrl, '_blank');
          } else {
            const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${property.location}`;
            window.open(mapsUrl, '_blank');
          }
        },
        (error) => {
          console.error("Error getting user location:", error);
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
        {saved.length == 0 ? (
          <Typography sx={{ px: 2, mt: 4 }} color="text.secondary">
            No saved properties.
          </Typography>
        ) : (
          saved.map((property) => {
            // Ensure images is always an array with at least one item
            const images = property.images?.length > 0 ? property.images : ['/default-property-image.jpg'];
            const currentIndex = currentImageIndex[property.id] || 0;
            const showCarouselControls = images.length > 1;

            return (
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
                    navigate('/rent-description', { state: { propertyId: property.id, property: property.propertyData } });
                  }
                }}
              >
                <Box position="relative">
                  {/* Carousel Container */}
                  <Box sx={{ position: 'relative', width: '100%', height: '140px' }}>
                    <CardMedia
                      component="img"
                      image={images[currentIndex]}
                      alt="Property"
                      sx={{
                        width: '100%',
                        height: '140px',
                        objectFit: 'cover',
                        borderTopLeftRadius: 12,
                        borderTopRightRadius: 12,
                      }}
                    />
                    
                    {/* Carousel Navigation Arrows */}
                    {showCarouselControls && (
                      <>
                        <IconButton
                          sx={{
                            position: 'absolute',
                            top: '50%',
                            left: 8,
                            opacity: 0,
                            transform: 'translateY(-50%)',
                            backgroundColor: 'rgba(255,255,255,0.3)',
                            backdropFilter: 'blur(2px)',
                            '&:hover': { 
                              opacity: 1,
                              backgroundColor: 'rgba(255,255,255,0.5)' 
                            }
                          }}
                          onClick={(e) => handlePrevImage(property.id, e)}
                        >
                          <ChevronLeft fontSize="small" />
                        </IconButton>
                        <IconButton
                          sx={{
                            position: 'absolute',
                            top: '50%',
                            right: 8,
                            opacity: 0,
                            transform: 'translateY(-50%)',
                            backgroundColor: 'rgba(255,255,255,0.3)',
                            backdropFilter: 'blur(2px)',
                            '&:hover': { 
                              opacity: 1,
                              backgroundColor: 'rgba(255,255,255,0.5)' 
                            }
                          }}
                          onClick={(e) => handleNextImage(property.id, e)}
                        >
                          <ChevronRight fontSize="small" />
                        </IconButton>
                      </>
                    )}
                    
                    {/* Carousel Indicators */}
                    {showCarouselControls && (
                      <Box
                        sx={{
                          position: 'absolute',
                          bottom: 10,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          display: 'flex',
                          gap: 1
                        }}
                      >
                        {images.map((_, index) => (
                          <Box
                            key={index}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentImageIndex(prev => ({
                                ...prev,
                                [property.id]: index
                              }));
                            }}
                            sx={{
                              width: 8,
                              height: 8,
                              borderRadius: '50%',
                              backgroundColor: currentIndex == index ? '#1976d2' : '#ccc',
                              cursor: 'pointer',
                              transition: 'background-color 0.3s'
                            }}
                          />
                        ))}
                      </Box>
                    )}
                  </Box>

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
                  {/* Rest of your card content remains the same */}
                  <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={0.5}>
                    <Typography 
                      variant="subtitle1" 
                      fontWeight="bold" 
                      noWrap 
                      sx={{ 
                        flex: 1,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        pr: 1 
                      }}
                    >
                      {property.title}-{property.property_name}
                    </Typography>
                    <Typography variant="body2" fontWeight="bold" color="primary" noWrap>
                      ₹{Number(String(property.price).replace(/[^0-9]/g, '')).toLocaleString('en-IN')}
                    </Typography>
                  </Box>
                  
                  <Box display="flex" justifyContent="space-between" alignItems="center" mb={0.5}>
                    <Typography 
                      variant="caption" 
                      color="text.secondary" 
                      noWrap
                      sx={{
                        flex: 1,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        pr: 1
                      }}
                    >
                      {property.location}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" noWrap>
                      {new Date(property.date).toLocaleDateString('en-IN', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric'
                      })}
                    </Typography>
                  </Box>

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
                      Location 
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
            );
          })
        )}
      </Box>

      <BottomNavbar />
    </Box>
  );
};

export default RentSaves;