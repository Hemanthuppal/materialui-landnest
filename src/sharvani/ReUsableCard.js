// components/PropertyCard.js
import React, { useState } from 'react';
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Tooltip,
  IconButton,
  Divider,
  Grid,
  Button
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Favorite, FavoriteBorder, Share,Chat, Close, ThumbUpAlt, ThumbUpAltOutlined, Call, LocationOn, ChevronLeft, ChevronRight } from '@mui/icons-material';

const ReUsableCard = ({ property, onCardClick, isSaved, toggleSave, likedCards, toggleLike, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Ensure images is always defined and has at least one item
  const images = property.images && property.images.length > 0
    ? property.images
    : ['/default-property-image.jpg']; // or any default image path

  const handleNextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  const navigate = useNavigate();

  const handleLocationClick = (e) => {
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
    <Card
      sx={{
        mb: 4,
        mx: 2,
        borderRadius: 4,
        boxShadow: 3,
        transition: 'transform 0.2s ease-in-out',
        '&:hover': { transform: 'scale(1.015)', boxShadow: 6 }
      }}
      onClick={(e) => {
        const isButtonClick = e.target.closest('button') || e.target.closest('svg');
        if (!isButtonClick && onCardClick) {
          onCardClick();
        }
      }}
    >
      <Box position="relative">
        {onClose && (
          <Tooltip title="Close">
            <IconButton
              sx={{
                bgcolor: 'white',
                boxShadow: 1,
                position: 'absolute',
                top: 8,
                left: 8,
                zIndex: 2
              }}
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
            >
              <Close />
            </IconButton>
          </Tooltip>
        )}

        {/* Carousel Container */}
        <Box sx={{ position: 'relative', width: '100%', height: '160px' }}>
          <CardMedia
            component="img"
            image={images[currentImageIndex]}
            alt="Property"
            sx={{
              width: '100%',
              height: '160px',
              objectFit: 'cover',
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16
            }}
          />

          {/* Carousel Navigation Arrows */}
          {property.images.length > 1 && (
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
                onClick={handlePrevImage}
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
                onClick={handleNextImage}
              >
                <ChevronRight fontSize="small" />
              </IconButton>
            </>
          )}

          {/* Carousel Indicators */}
          {property.images.length > 1 && (
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
              {property.images.map((_, index) => (
                <Box
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(index);
                  }}
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: currentImageIndex == index ? '#1976d2' : '#ccc',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s'
                  }}
                />
              ))}
            </Box>
          )}
        </Box>

        <Box sx={{ position: 'absolute', top: 8, right: 8, display: 'flex', gap: 1 }}>
          <Tooltip title="Add to Wishlist">
            <IconButton
              sx={{ bgcolor: 'white', boxShadow: 1 }}
              onClick={(e) => {
                e.stopPropagation();
                toggleSave(property);
              }}
            >
              {isSaved(property) ? <Favorite color="error" /> : <FavoriteBorder />}
            </IconButton>
          </Tooltip>
          <Tooltip title="Share">
            <IconButton
              sx={{ bgcolor: 'white', boxShadow: 1 }}
              onClick={(e) => {
                e.stopPropagation();
                const phone = `91${property.mobile_no}`; // Indian country code
                window.location.href = `https://wa.me/${phone}`;
              }}
            >
              <Share />
            </IconButton>
          </Tooltip>


        </Box>

        <Box sx={{ position: 'absolute', bottom: 8, right: 8 }}>
          <Tooltip title="Like">
            <IconButton
              sx={{
                bgcolor: 'white',
                boxShadow: 1,
                color: likedCards?.[property.id] ? 'blue' : 'default'
              }}
              onClick={(e) => {
                e.stopPropagation();
                toggleLike(property.id);
              }}
            >
              {likedCards?.[property.id] ? <ThumbUpAlt /> : <ThumbUpAltOutlined />}
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      <CardContent sx={{ px: 2, py: 0.5, pb: '7px !important' }}>
        {/* Title and Price - Strictly aligned */}
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: 1,
          mb: 0.5
        }}>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            sx={{
              fontSize: '1rem',
              flex: 1,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}
          >
            {property.title}-{property.property_name}
          </Typography>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            color="primary"
            sx={{
              fontSize: '0.9rem',
              whiteSpace: 'nowrap',
              ml: 1
            }}
          >
            ₹{Number(String(property.price).replace(/[^0-9]/g, '')).toLocaleString('en-IN')}
          </Typography>
        </Box>

        {/* Location and Date - Strictly aligned */}
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 1,
          mb: 0.5
        }}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              flex: 1,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}
          >
            {property.location}
          </Typography>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{
              whiteSpace: 'nowrap',
              ml: 1
            }}
          >
            {new Date(property.date).toLocaleDateString('en-IN', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric'
            })}
          </Typography>
        </Box>

        {/* Location verified + Call Button */}
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          mt: 0.5,
          mb: 1
        }}>
          <Tooltip title="View directions in Google Maps">
            <IconButton
              size="small"
              onClick={handleLocationClick}
              sx={{ p: 0, color: 'primary.main' }}
            >
              <LocationOn fontSize="small" />
            </IconButton>
          </Tooltip>
          <Typography variant="body2" color="text.primary" sx={{ ml: 0.5 }}>
            Location
          </Typography>
         {/* <Tooltip title="Send Message">
    <IconButton
      size="small"
      onClick={(e) => { 
        e.stopPropagation();
        navigate('/chat', { state: { property: property.id } });
      }}
      sx={{ p: 0, color: 'primary.main', ml: 1 }}
    >
      <Chat fontSize="small" />
    </IconButton>
  </Tooltip> */}
          <Box sx={{ flexGrow: 1 }} />
          <Button
            size="small"
            variant="outlined"
            color="success"
            startIcon={<Call fontSize="small" />}
            sx={{
              textTransform: 'none',
              fontSize: '0.75rem',
              py: 0.2,
              px: 1.5,
              minWidth: 'fit-content'
            }}
            onClick={(e) => {
              e.stopPropagation();
              window.location.href = `tel:${property.mobile_no}`;
            }}
          >
            Call
          </Button>
        </Box>

        {/* Property Info Columns - Compact and Consistent */}
        <Box sx={{
          display: 'flex',
          border: '1px solid #e0e0e0',
          borderRadius: 1,
          overflow: 'hidden',
          '& > div:not(:last-child)': {
            borderRight: '1px solid #e0e0e0'
          }
        }}>
          {[
            {
              label: 'Facing',
              value: property.facing || 'N/A',
              width: '30%'
            },
            {
              label: 'Area Sqft',
              value: property.length && property.width
                ? `${property.length * property.width} sqft`
                : 'N/A',
              width: '40%'
            },
            {
              label: 'Listed By',
              value: property.listedBy || 'N/A',
              width: '30%'
            }
          ].map((item, index) => (
            <Box
              key={index}
              sx={{
                width: item.width,
                px: 0.5,
                py: 0.5,
                textAlign: 'center'
              }}
            >
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{
                  fontSize: '0.65rem',
                  lineHeight: 1.2,
                  display: 'block'
                }}
              >
                {item.label}
              </Typography>
              <Typography
                variant="body2"
                fontWeight="bold"
                sx={{
                  fontSize: '0.75rem',
                  lineHeight: 1.2,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}
              >
                {item.value}
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ReUsableCard;