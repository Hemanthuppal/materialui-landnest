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

      <CardContent sx={{ p: 2 }}> {/* 🔽 Reduced padding from 2.5 to 2 */}
        <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ fontSize: '1rem' }}> {/* 🔽 Slightly smaller font */}
          {property.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={0.5}> {/* 🔽 Reduced bottom margin */}
          {property.location}
        </Typography>

        <Grid container justifyContent="space-between" alignItems="center">
          <Typography variant="subtitle1" fontWeight="bold" color="primary" sx={{ fontSize: '0.9rem' }}> {/* 🔽 Font tweak */}
            {property.price}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Listed on: {property.date}
          </Typography>
        </Grid>

        <Box display="flex" alignItems="center" mt={1.5}> {/* 🔽 Reduced top margin */}
          <LocationOn fontSize="small" color="action" />
          <Typography variant="body2" color="text.primary" ml={0.5}>
            Location Verified
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button
            size="small"
            variant="outlined"
            color="success"
            startIcon={<Call />}
            sx={{ textTransform: 'none', fontSize: '0.75rem', py: 0.5, px: 1.5 }} // 🔽 Compressed button
          >
            Call
          </Button>
        </Box>

        <Divider sx={{ my: 1.2 }} /> {/* 🔽 Reduced divider spacing */}

        <Box sx={{ display: 'flex', border: '1px solid #e0e0e0', borderRadius: 2, overflow: 'hidden' }}>
          {[
            { label: 'Facing', value: property.facing },
            { label: `Area (${property.dimensions})`, value: property.area },
            { label: 'Listed By', value: property.listedBy }
          ].map((item, index) => (
            <Box
              key={index}
              sx={{
                flex: 1,
                p: 1.2, // 🔽 Reduced padding inside info columns
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
