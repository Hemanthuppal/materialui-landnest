import React, { useState } from 'react';
import {
  Box,
  Chip,
  Typography,
  IconButton,
  Card,
  Paper,
  BottomNavigation,
  BottomNavigationAction
} from '@mui/material';

import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { useNavigate } from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MailIcon from '@mui/icons-material/Mail';

import buildingImage from '../Images/house.jpeg';
import buildingImage2 from '../Images/house1.jpg';
import CustomSearchBar from '../Rajesh/CustomSearchBar';

const rentalTypes = [
  "1BHK", "2BHK", "3BHK", "4+ BHK", "PLOT/LAND", "DUPLEX HOUSE",
  "COMMERCIAL LAND", "COMMERCIAL BUILDING/ Space", "VILLA",
  "PG-SCHOOL-OFFICE", "SHOPPING mall/shop"
];

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
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

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
    height: 'calc(100vh - 240px)' // Adjust height for chips + nav
  };

  const center = {
    lat: 26.8467,
    lng: 80.9462
  };

  return (
    <Box sx={{ pb: 7, maxWidth: 480, mx: "auto", position: 'relative' }}>
       {/* Sticky Search Bar */}
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

      {/* Rental Type Chips */}
      <Box sx={{ p: 2 }}>
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
      </Box>

      {/* Google Map */}
      {isLoaded ? (
        <Box sx={{ px: 2, pb: 10 }}> {/* Add padding around map */}
        <Box sx={{ width: '100%', height: containerStyle.height }}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={14}
            options={{
              gestureHandling: 'greedy',  // allows scroll to zoom
              zoomControl: true,
              mapTypeControl: false,
              streetViewControl: false,
              fullscreenControl: false
            }}
            
          >
            {properties.map(property => (
              <Marker
                key={property.id}
                position={{ lat: property.lat, lng: property.lng }}
                onClick={() => setSelectedProperty(property)}
              />
            ))}
          </GoogleMap>
          </Box>

          {/* Property Card Overlay */}
          {selectedProperty && (
            <Card
            
              elevation={4}
              sx={{
                position: 'absolute',
                bottom: 164,
                left: 0,
                right: 0,
                margin: '0 auto',
                width: '100%',
                maxWidth: 480,
                bgcolor: '#fff',
                borderRadius: 2,
                boxShadow: 6,
                zIndex: 999
              }}
              onClick={() => navigate('/rent-description')}
            >
              <Box sx={{ position: 'relative', p: 2 }}>
                <IconButton
                  size="small"
                  sx={{ position: 'absolute', top: 8, right: 8 }}
                  onClick={(e) => {
                    e.stopPropagation(); // ✅ Prevents triggering navigation
                    setSelectedProperty(null);
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <Typography variant="h6" gutterBottom>
                  {selectedProperty.title}
                </Typography>
                <img
                  src={selectedProperty.image}
                  alt={selectedProperty.title}
                  style={{
                    width: '100%',
                    height: 180,
                    objectFit: 'cover',
                    borderRadius: 8
                  }}
                />
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {selectedProperty.description}
                </Typography>
                <Typography variant="body2">{selectedProperty.address}</Typography>
                <Typography variant="h6" sx={{ mt: 1, color: 'green' }}>
                  {selectedProperty.price}
                </Typography>
               
              </Box>
            </Card>
          )}
        </Box>
      ) : (
        <Typography sx={{ textAlign: 'center' }}>Loading map...</Typography>
      )}

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
