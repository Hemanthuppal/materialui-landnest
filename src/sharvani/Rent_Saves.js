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
  BottomNavigationAction
} from '@mui/material';
import {
  ArrowBackIosNew,
  Search as SearchIcon,
  Tune as TuneIcon,
  Favorite as FavoriteIcon,
  List as ListIcon,
  Home as HomeIcon,
  Mail as MailIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

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

  return (
    <>
      {/* Searchbar and Back */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#e0e0e0',
          borderRadius: '10px',
          py: 1.2,
          px: 1,
          mb: 2,
          mx: 2,
          mt: 2
        }}
      >
        <IconButton onClick={() => navigate(-1)}>
          <ArrowBackIosNew sx={{ fontSize: 20 }} />
        </IconButton>
        <Box
          sx={{
            flexGrow: 1,
            backgroundColor: '#fff',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            px: 2,
            height: 40,
            mx: 1
          }}
        >
          <Box sx={{ flexGrow: 1 }} />
          <SearchIcon sx={{ fontSize: 20, color: '#666' }} />
        </Box>
        <IconButton>
          <TuneIcon sx={{ fontSize: 20 }} />
        </IconButton>
      </Box>

      <Box sx={{ pb: 10 }}>
        {saved.length === 0 ? (
          <Typography sx={{ px: 2, mt: 4 }} color="text.secondary">
            No saved properties.
          </Typography>
        ) : (
          saved.map((property) => (
            <Card key={property.id} sx={{ mb: 2, mx: 2 }}>
              <CardMedia component="img" height="180" image={property.image} />
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
