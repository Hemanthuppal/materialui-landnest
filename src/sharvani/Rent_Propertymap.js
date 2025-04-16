// Rent_Property_Map.js
import React, { useState } from 'react';
import {
  Box,
  TextField,
  IconButton,
  InputAdornment,
  Chip,
  Typography,
  Card,
  Paper,
  BottomNavigation,
  BottomNavigationAction,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button
} from '@mui/material';

import {
  GoogleMap,
  Marker,
  useJsApiLoader
} from '@react-google-maps/api';

import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MailIcon from '@mui/icons-material/Mail';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import TuneIcon from '@mui/icons-material/Tune';


import buildingImage from '../Images/house.jpeg';
import buildingImage2 from '../Images/house1.jpg';

const rentalTypes = [
  "1BHK", "2BHK", "3BHK", "4+ BHK", "PLOT/LAND", "DUPLEX HOUSE",
  "COMMERCIAL LAND", "COMMERCIAL BUILDING/ Space", "VILLA",
  "PG-SCHOOL-OFFICE", "SHOPPING mall/shop"
];

// Replace with your actual API Key
const GOOGLE_MAPS_API_KEY = "AIzaSyAZAU88Lr8CEkiFP_vXpkbnu1-g-PRigXU";

const properties = [
  {
    id: 1,
    title: "2BHK Apartment",
    description: "2 Beds • 2 Baths • 960 Sq.ft",
    address: "10100 Burnt Store Rd #104",
    price: "₹ 50,000/-",
    lat: 26.8467,
    lng: 80.9462,
    image: buildingImage
  },
  {
    id: 2,
    title: "3BHK Villa",
    description: "3 Beds • 3 Baths • 1200 Sq.ft",
    address: "202 City Center",
    price: "₹ 75,000/-",
    lat: 26.8500,
    lng: 80.9500,
    image: buildingImage2
  }
];

const Rent_Property_Map = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [value, setValue] = useState(0);

  const handleCardClick = () => {
    navigate('/rent-description');
  };
  
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) navigate('/dashboard');
    if (newValue === 1) navigate('/details');
    if (newValue === 2) navigate('/rent-saves');
    if (newValue === 3) navigate('/inbox');
  };
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY
  });

  const containerStyle = {
    width: '100%',
    height: '500px'  // ⬆ Increased height
  };

  const center = {
    lat: 26.8467,
    lng: 80.9462
  };

  const handleMarkerClick = (property) => {
    setSelectedProperty(property);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProperty(null);
  };

  return (
    <Box sx={{ p: 2, pb: 7, maxWidth: 480, mx: "auto" }}>
      <Card elevation={4} sx={{ p: 2 }}>
        
        {/* Back + Search Bar */}
{/* Back + Styled Search Bar with exact icons */}
<Box
 sx={{
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#e0e0e0',
  borderRadius: '10px',
  py: 1.2, // top and bottom padding
  px: 1,   // optional: horizontal padding
  mb: 2,
}}

>
  {/* Back Arrow Icon */}
  <IconButton onClick={() => navigate(-1)}>
    <ArrowBackIosNewIcon sx={{ fontSize: 20 }} />
  </IconButton>

  {/* Search Box */}
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

  {/* Filter Icon */}
  <IconButton>
    <TuneIcon sx={{ fontSize: 20 }} />
  </IconButton>
</Box>



        {/* Property Rental Types */}
        <Typography variant="subtitle1" sx={{ mb: 1 }}>Property Rental Type</Typography>
        <Box
          sx={{
            display: 'flex',
            gap: 1,
            overflowX: 'auto',
            whiteSpace: 'nowrap',
            pb: 1,
            mb: 2
          }}
        >
          {rentalTypes.map((type, index) => (
            <Chip key={index} label={type} variant="outlined" sx={{ flexShrink: 0 }} />
          ))}
        </Box>

        {/* Google Map */}
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={14}
          >
            {properties.map(property => (
              <Marker
                key={property.id}
                position={{ lat: property.lat, lng: property.lng }}
                onClick={() => handleMarkerClick(property)}
              />
            ))}
          </GoogleMap>
        ) : (
          <Typography>Loading map...</Typography>
        )}
      </Card>

      {/* Modal for Property Details */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        {selectedProperty && (
          <>
            <DialogTitle>{selectedProperty.title}</DialogTitle>
            <DialogContent>
              <img
                src={selectedProperty.image}
                alt={selectedProperty.title}
                style={{ width: '100%', height: 200, objectFit: 'cover', borderRadius: 8 }}
                onClick={handleCardClick}
              />
              <Typography variant="body2" sx={{ mt: 2 }}>{selectedProperty.description}</Typography>
              <Typography variant="body2">{selectedProperty.address}</Typography>
              <Typography variant="h6" sx={{ mt: 1, color: 'green' }}>{selectedProperty.price}</Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCardClick}>View Details</Button>
              <Button onClick={handleClose}>Close</Button>
            </DialogActions>
          </>
        )}
      </Dialog>

          {/* Bottom Navigation */}
          <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation value={value} onChange={handleChange} showLabels>
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="List" icon={<ListIcon />} />
          <BottomNavigationAction label="Saves" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Inbox" icon={<MailIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

export default Rent_Property_Map;
