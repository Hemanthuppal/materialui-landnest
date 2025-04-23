import React, { useEffect, useState } from 'react';
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Paper,
  BottomNavigation,
  BottomNavigationAction,
  Tooltip
} from '@mui/material';
import {
  Home as HomeIcon,
  List as ListIcon,
  Favorite as FavoriteIcon,
  Mail as MailIcon,
  Share as ShareIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import CustomSearchBar from '../Rajesh/CustomSearchBar';
import FormsBottomNavbar from './CustomNav';

const BuySaves = () => {
  const [saved, setSaved] = useState([]);
  const [value, setValue] = useState(2);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem('savedBuy');
    if (stored) {
      setSaved(JSON.parse(stored));
    }
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) navigate('/dashboard');
    if (newValue === 1) navigate('/buy-details');
    if (newValue === 2) navigate('/buy-saves');
    if (newValue === 3) navigate('/inboxlist');
  };

  const handleRemove = (id) => {
    const updated = saved.filter((item) => item.id !== id);
    setSaved(updated);
    localStorage.setItem('savedBuy', JSON.stringify(updated));
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
      navigate('/buy-description', { state: { property } });
    }
  };

  return (
    <>
      {/* Fixed Search Bar */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          backgroundColor: 'rgb(239, 231, 221)',
          boxShadow: 1,
        }}
      >
        <CustomSearchBar />
      </Box>

      {/* Content Below Search Bar */}
      <Box sx={{ pt: 10, pb: 10, backgroundColor: 'rgb(239, 231, 221)', minHeight: '100vh' }}>
        {saved.length === 0 ? (
          <Typography sx={{ px: 2, mt: 4 }} color="text.secondary">
            No saved properties.
          </Typography>
        ) : (
          saved.map((property) => (
            <Card
              key={property.id}
              sx={{
                mt: 2, // 🟢 Margin top to avoid touching the search bar
                mb: 2,
                mx: 2,
                borderRadius: 3,
                boxShadow: 3,
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer'
              }}
              onClick={(e) => handleCardClick(e, property)}
            >
              {/* Icons over image */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  zIndex: 2,
                  display: 'flex',
                  gap: 1
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

              {/* Image */}
              <CardMedia
                component="img"
                height="180"
                image={property.image}
                alt={property.title}
              />

              {/* Title & location */}
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

      {/* Bottom Navigation */}
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
     
        <FormsBottomNavbar/>
      </Paper>
    </>
  );
};

export default BuySaves;
