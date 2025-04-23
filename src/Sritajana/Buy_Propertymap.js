import React, { useState } from 'react';
import {
  Box,
  Chip,
  Typography,
  IconButton,
  Card,
  Tooltip,
  Paper,
  BottomNavigation,
  BottomNavigationAction
} from '@mui/material';
import { Close } from '@mui/icons-material';

import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { useNavigate } from 'react-router-dom';



import buildingImage from '../Images/house.jpeg';
import buildingImage2 from '../Images/house1.jpg';
import CustomSearchBar from '../Rajesh/CustomSearchBar';
import ReUsableCard from './../sharvani/ReUsableCard';

import CustomBottomNav from './CustomNav';

import {InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FilterListIcon from '@mui/icons-material/FilterList';

const rentalTypes = [
  "1BHK", "2BHK", "3BHK", "4+ BHK", "PLOT/LAND", "DUPLEX HOUSE",
  "COMMERCIAL LAND", "COMMERCIAL BUILDING/ Space", "VILLA",
  "PG-SCHOOL-OFFICE", "SHOPPING mall/shop"
];

const GOOGLE_MAPS_API_KEY = "AIzaSyAZAU88Lr8CEkiFP_vXpkbnu1-g-PRigXU";

const properties = [
  {
    id: 1,
    title: 'Plot For Buy in Btm Layout 2nd Stage',
    location: '16th Main Road, BTM layout 2nd...',
    price: '₹3.25 Cr/m',
    date: '01-04-2025',
    facing: 'East',
    area: '1600 sq ft',
    dimensions: '40×40',
    listedBy: 'Owner/Agent',
    lat: 26.8467,
    lng: 80.9462,
    image: buildingImage
  },
  {
    id: 2,
    title: 'Commercial Plot for Buy near Silk Board',
    location: 'Silk Board Junction, Bangalore...',
    price: '₹2.75 Cr/m',
    date: '02-04-2025',
    facing: 'North',
    area: '1400 sq ft',
    dimensions: '35×40',
    listedBy: 'Builder',
    lat: 26.8500,
    lng: 80.9500,
    image: buildingImage2
  }
];

const Rent_Property_Map = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const [saved, setSaved] = useState(() => {
    const stored = localStorage.getItem('savedRent');
    return stored ? JSON.parse(stored) : [];
  });

  const [likedCards, setLikedCards] = useState({});

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) navigate('/dashboard');
    if (newValue === 1) navigate('/details');
    if (newValue === 2) navigate('/Buy-saves');
    if (newValue === 3) navigate('/inboxlist');
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  });

  const containerStyle = {
    width: '100%',
    height: 'calc(100vh - 240px)' // Adjust height for chips + nav
  };

  const center = {
    lat: 26.8467,
    lng: 80.9462
  };

  const toggleSave = (property) => {
    const isSaved = saved.find((p) => p.id === property.id);
    let updated;

    if (isSaved) {
      updated = saved.filter((p) => p.id !== property.id);
    } else {
      updated = [...saved, property];
    }

    setSaved(updated);
    localStorage.setItem('savedRent', JSON.stringify(updated));
  };

  const isSaved = (property) => saved.some((p) => p.id === property.id);

  const toggleLike = (id) => {
    setLikedCards((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <Box
      sx={{
        pb: 7,
        maxWidth: 480,
        mx: "auto",
        position: 'relative',
        backgroundColor: 'rgb(239, 231, 221)', // ✅ Your background color
        minHeight: '100vh'
      }}
    >
      



<Box
  sx={{
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    bgcolor: 'rgb(239, 231, 221)', // matches the beige tone
    px: 1,
    py: 1,
    
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
        <Box sx={{ px: 2, pb: 10 }}>
          <Box sx={{ width: '100%', height: containerStyle.height }}>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={14}
              options={{
                gestureHandling: 'greedy',
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

          {selectedProperty && (
            <Box sx={{
              position: 'absolute',
              bottom: 164,
              left: 0,
              right: 0,
              margin: '0 auto',
              width: '100%',
              maxWidth: 480,
              zIndex: 999
            }}>
              <ReUsableCard
                property={selectedProperty}
                onCardClick={() => navigate('/Buy-description', { state: { property: selectedProperty } })}
                isSaved={isSaved}
                toggleSave={toggleSave}
                likedCards={likedCards}
                toggleLike={toggleLike}
                onClose={() => setSelectedProperty(null)}
              />
            </Box>
          )}
        </Box>
      ) : (
        <Typography sx={{ textAlign: 'center' }}>Loading map...</Typography>
      )}

      {/* Bottom Navigation */}
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <CustomBottomNav/>
      </Paper>
    </Box>
  );
};

export default Rent_Property_Map;
