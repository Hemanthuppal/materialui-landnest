import React, { useEffect, useState } from 'react';
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Tooltip
} from '@mui/material';
import {
  
  Favorite as FavoriteIcon,
 
  Share as ShareIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import CustomSearchBar from '../Rajesh/CustomSearchBar';
import BottomNavbar from './BottomNavbar/BottomNavbar';

const RentSaves = () => {
  const [saved, setSaved] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem('savedRent');
    if (stored) {
      setSaved(JSON.parse(stored));
    }
  }, []);

  

  const handleRemove = (id) => {
    const updated = saved.filter((item) => item.id !== id);
    setSaved(updated);
    localStorage.setItem('savedRent', JSON.stringify(updated));
  };

  const handleShare = (property) => {
    const shareText = `Check out this property: ${property.title}, located at ${property.location}`;
    if (navigator.share) {
      navigator.share({
        title: property.title,
        text: shareText,
        url: window.location.href
      });
    } else {
      alert("Sharing is not supported on this browser.");
    }
  };

  const handleCardClick = (e, property) => {
    const isIconClick = e.target.closest('button');
    if (!isIconClick) {
      navigate('/rent-description', { state: { property } });
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: 'rgb(239, 231, 221)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
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
  
      {/* Saved Cards Section */}
      <Box sx={{ flex: 1, pb: 10 }}>
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
                boxShadow: 3,
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
              }}
              onClick={(e) => handleCardClick(e, property)}
            >
              {/* Top Right Icons */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  zIndex: 2,
                  display: 'flex',
                  gap: 1,
                }}
              >
                <Tooltip title="Share">
                  <IconButton
                    onClick={(e) => {
                      e.stopPropagation();
                      handleShare(property);
                    }}
                    sx={{ backgroundColor: 'white', '&:hover': { backgroundColor: '#f0f0f0' } }}
                  >
                    <ShareIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
  
                <Tooltip title="Remove">
                  <IconButton
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemove(property.id);
                    }}
                    sx={{ backgroundColor: 'white', '&:hover': { backgroundColor: '#f0f0f0' } }}
                  >
                    <FavoriteIcon color="error" fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Box>
  
              {/* Image and Content */}
              <CardMedia component="img" height="180" image={property.image} alt={property.title} />
              <CardContent>
                <Typography variant="h6">{property.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {property.location}
                </Typography>
              </CardContent>
            </Card>
          ))
        )}
      </Box>
  
      {/* Bottom Nav */}
      <BottomNavbar />
    </Box>
  );
  
};

export default RentSaves;
