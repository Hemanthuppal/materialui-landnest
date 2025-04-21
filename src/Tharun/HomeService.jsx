import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  Chip,
  Paper,
  BottomNavigation,
  BottomNavigationAction,
} from '@mui/material';

import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { useNavigate } from 'react-router-dom';
import FormsBottomNavbar from '../maniteja/FormsBottomNavbar';
import CustomSearchBar from "../Rajesh/CustomSearchBar";

const GOOGLE_MAPS_API_KEY = "AIzaSyAZAU88Lr8CEkiFP_vXpkbnu1-g-PRigXU";

const workers = [
  {
    id: 1,
    name: "ABC",
    role: "Painter",
    mobile: "XXXXXXXXXX",
    email: "abc@gmail.com",
    experience: "2+ years",
    rating: 4,
    lat: 26.8467,
    lng: 80.9462,
    image: 'https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?s=612x612&w=0&k=20&c=kPvoBm6qCYzQXMAn9JUtqLREXe9-PlZyMl9i-ibaVuY='
  },
  {
    id: 2,
    name: "XYZ",
    role: "Carpenter",
    mobile: "YYYYYYYYYY",
    email: "xyz@gmail.com",
    experience: "5+ years",
    rating: 5,
    lat: 26.8500,
    lng: 80.9500,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqIZXTe5iRAKg6-DVQypvrm1wuVQtUxsAX1Q&s'
  }
];

const workerTypes = [
  "Painting", "Carpenter", "Flooring", "AC Technician", "Cleaning maid",
  "Gardener", "Sofa Cleaning", "Water Purifier", "Kitchen/Toilet Cleaning"
];

const HomeService = () => {
  const [selectedWorker, setSelectedWorker] = useState(null);
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  });

  const center = {
    lat: 26.8467,
    lng: 80.9462,
  };

  const containerStyle = {
    width: '100%',
    height: 'calc(100vh - 240px)', // Adjust for chips + nav
  };

  const handleMarkerClick = (worker) => {
    setSelectedWorker(worker);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) navigate('/dashboard');
    if (newValue === 1) navigate('/details');
    if (newValue === 2) navigate('/rent-saves');
    if (newValue === 3) navigate('/inbox');
  };

  return (
    <Box sx={{ pb: 7, maxWidth: 480, mx: "auto", position: 'relative' }}>
      
      {/* Sticky Search Header */}
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          bgcolor: '#fff',
          px: 1,
          py: 1,
        }}
      >
        <CustomSearchBar />
      </Box>

      {/* Worker Type Chips */}
      <Box sx={{ p: 2 }}>
        <Typography variant="subtitle1" sx={{ mb: 1 }}>
          Looking for Home Services
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: 1,
            overflowX: 'auto',
            whiteSpace: 'nowrap',
            pb: 1,
            mb: 2,
          }}
        >
          {workerTypes.map((type, index) => (
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
                fullscreenControl: false,
              }}
            >
              {workers.map(worker => (
                <Marker
                  key={worker.id}
                  position={{ lat: worker.lat, lng: worker.lng }}
                  onClick={() => handleMarkerClick(worker)}
                />
              ))}
            </GoogleMap>
          </Box>

          {/* Floating Worker Card */}
          {selectedWorker && (
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
              <Card
                onClick={() => navigate('/work-details')}
                sx={{
                  borderRadius: 3,
                  p: 2,
                  backgroundColor: 'white',
                }}
              >
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <img
                    src={selectedWorker.image}
                    alt={selectedWorker.name}
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: 10,
                      objectFit: 'cover'
                    }}
                  />
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {selectedWorker.role}
                    </Typography>
                    <Typography variant="body2">Name: {selectedWorker.name}</Typography>
                    <Typography variant="body2">Mobile: {selectedWorker.mobile}</Typography>
                    <Typography variant="body2">Email: {selectedWorker.email}</Typography>
                    <Typography variant="body2">Experience: {selectedWorker.experience}</Typography>
                    <Typography variant="body2">⭐⭐⭐⭐</Typography>
                  </Box>
                </Box>
              </Card>
            </Box>
          )}
        </Box>
      ) : (
        <Typography sx={{ textAlign: 'center' }}>Loading map...</Typography>
      )}

      {/* Bottom Navigation */}
      <FormsBottomNavbar />
    </Box>
  );
};

export default HomeService;
