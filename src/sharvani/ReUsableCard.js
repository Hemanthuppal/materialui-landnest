// components/PropertyCard.js
import React from 'react';
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
import { Favorite, FavoriteBorder, Share,Close, ThumbUpAlt, ThumbUpAltOutlined, Call, LocationOn } from '@mui/icons-material';

const ReUsableCard = ({ property, onCardClick, isSaved, toggleSave, likedCards, toggleLike,onClose }) => {

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
          e.stopPropagation(); // prevent card click
          onClose();
        }}
      >
        <Close />
      </IconButton>
    </Tooltip>
  )}
      <CardMedia
  component="img"
  image={property.image}
  alt="Property"
  sx={{
    width: '100%',
    height: '160px',
    objectFit: 'cover',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16
  }}
/>

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
              onClick={(e) => e.stopPropagation()}
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
  {/* First row: Title and Price */}
  <Grid container justifyContent="space-between" alignItems="center">
    <Grid item xs={8}>
      <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ fontSize: '1rem' }}>
        {property.title}
      </Typography>
    </Grid>
    <Grid item xs="auto">
      <Typography variant="subtitle1" fontWeight="bold" color="primary" sx={{ fontSize: '0.9rem' }}>
        {property.price}
      </Typography>
    </Grid>
  </Grid>

  {/* Second row: Location and Date */}
  <Grid container justifyContent="space-between" alignItems="center">
    <Grid item xs={8}>
      <Typography
        variant="body2"
        color="text.secondary"
        mb={0.2}
        sx={{
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: 'block',
          maxWidth: '70%',
        }}
      >
        {property.location}
      </Typography>
    </Grid>
    <Grid item xs="auto" >
      <Typography variant="caption" color="text.secondary">
    {property.date}
      </Typography>
    </Grid>
  </Grid>

  {/* Location verified + Call Button */}
  <Box display="flex" alignItems="center" mt={0.5}>
        <Tooltip title="View directions in Google Maps">
          <IconButton 
            size="small" 
            onClick={handleLocationClick}
            sx={{ p: 0, color: 'primary.main' }}
          >
            <LocationOn fontSize="small" />
          </IconButton>
        </Tooltip>
        <Typography variant="body2" color="text.primary" ml={0.5}>
          Location Verified
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Button
          size="small"
          variant="outlined"
          color="success"
          startIcon={<Call />}
          sx={{ textTransform: 'none', fontSize: '0.75rem', py: 0.2, px: 1.5 }}
          onClick={(e) => {
            e.stopPropagation();
            window.location.href = `tel:${property.mobile_no}`;
          }}
        >
          Call
        </Button>
      </Box>

  {/* Property Info Columns */}
  <Box sx={{ display: 'flex', border: '1px solid #e0e0e0', borderRadius: 2, overflow: 'hidden' }}>
    {[
      { label: 'Facing', value: property.facing },
      { label: 'Area', value: `${property.area} (${property.length} × ${property.width})` },

      { label: 'Listed By', value: property.listedBy }
    ].map((item, index) => (
      <Box
        key={index}
        sx={{
          flex: 1,
          px: 1.2,
          py: 0.5,
          textAlign: 'center',
          borderRight: index < 2 ? '1px solid #e0e0e0' : 'none'
        }}
      >
        <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem' }}>
          {item.label}
        </Typography>
        <Typography variant="body2" fontWeight="bold" sx={{ fontSize: '0.8rem' }}>
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
