import React, { useEffect, useState } from 'react';
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  CardActions,
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
  Share as ShareIcon,
  Delete as DeleteIcon
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

  const handleCardClick = (id) => {
    navigate(`/rent-description`);
  };

  return (
    <>
      <CustomSearchBar />

      <Box sx={{ pb: 10 }}>
        {saved.length === 0 ? (
          <Typography sx={{ px: 2, mt: 4 }} color="text.secondary">
            No saved properties.
          </Typography>
        ) : (
          saved.map((property) => (
            <Card key={property.id} sx={{ mb: 2, mx: 2, cursor: 'pointer' }}>
              <CardMedia
                component="img"
                height="180"
                image={property.image}
                onClick={() => handleCardClick(property.id)}
              />
              <CardContent onClick={() => handleCardClick(property.id)}>
                <Typography variant="h6">{property.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {property.location}
                </Typography>
              </CardContent>
              <CardActions>
                <Tooltip title="Share">
                  <IconButton onClick={() => handleShare(property)}>
                    <ShareIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Remove">
                  <IconButton onClick={() => handleRemove(property.id)}>
                    <DeleteIcon color="error" />
                  </IconButton>
                </Tooltip>
              </CardActions>
            </Card>
          ))
        )}
      </Box>

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
