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

const RentSaves = () => {
  const [saved, setSaved] = useState([]);
  const [value, setValue] = useState(2);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem('savedRent');
    if (stored) {
      setSaved(JSON.parse(stored));
    }
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) navigate('/dashboard');
    if (newValue === 1) navigate('/details');
    if (newValue === 2) navigate('/rent-saves');
    if (newValue === 3) navigate('/inbox');
  };

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
    <>
 <Box
    sx={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      bgcolor: '#fff', // background to cover content underneath
      px: 1,
      py: 1
    }}
  >
    <CustomSearchBar />
  </Box>
      <Box sx={{ pb: 10 }}>
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
        <BottomNavigation value={value} onChange={handleChange} showLabels>
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="List" icon={<ListIcon />} />
          <BottomNavigationAction label="Saves" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Inbox" icon={<MailIcon />} />
        </BottomNavigation>
      </Paper>
    </>
  );
};

export default RentSaves;
