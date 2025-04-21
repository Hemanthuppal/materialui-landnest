import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  Chip,
} from '@mui/material';

import {
  GoogleMap,
  Marker,
  useJsApiLoader,
} from '@react-google-maps/api';

import { useNavigate } from 'react-router-dom';

import FormsBottomNavbar from '../maniteja/FormsBottomNavbar';
import CustomSearchBar from "./WorkerSearchbar";

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
    lng: 80.9462
  };

  const handleMarkerClick = (worker) => {
    setSelectedWorker(worker);
  };

  return (
    <Box sx={{ pb: 7, maxWidth: 480, mx: "auto", width: '100%', position: 'relative' }}>
      
      {/* Fixed Search Header */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: 'white',
          zIndex: 10,
          px: 2,
          pt: 2,
          pb: 1,
          borderBottom: '1px solid #ccc',
        }}
      >
        <CustomSearchBar />
        <Typography variant="subtitle1" sx={{ mt: 2, mb: 1 }}>
          Looking for Home Services
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: 1,
            overflowX: 'auto',
            whiteSpace: 'nowrap',
            pb: 1,
          }}
        >
          {workerTypes.map((type, index) => (
            <Chip key={index} label={type} variant="outlined" sx={{ flexShrink: 0 }} />
          ))}
        </Box>
      </Box>

      {/* Map and Content */}
      <Box sx={{ position: 'relative', width: '100%', height: '100vh', px: 2, pt: '180px', pb: 10 }}>
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }}
            center={center}
            zoom={14}
          >
            {workers.map(worker => (
              <Marker
                key={worker.id}
                position={{ lat: worker.lat, lng: worker.lng }}
                onClick={() => handleMarkerClick(worker)}
              />
            ))}
          </GoogleMap>
        ) : (
          <Typography textAlign="center" mt={2}>Loading map...</Typography>
        )}

        {/* Floating Worker Card */}
        {selectedWorker && (
          <Card 
            onClick={() => navigate('/work-details')}
            sx={{
              position: 'absolute',
              bottom: 90,
              left: 16,
              right: 16,
              borderRadius: 3,
              p: 2,
              backgroundColor: 'white',
              zIndex: 10,
              marginBottom: '42%',
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
        )}
      </Box>

      <FormsBottomNavbar />
    </Box>
  );
};

export default HomeService;
