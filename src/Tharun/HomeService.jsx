import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  Paper,
  BottomNavigation,
  BottomNavigationAction,
  Chip,
} from '@mui/material';

import {
  GoogleMap,
  Marker,
  useJsApiLoader,
} from '@react-google-maps/api';

import { useNavigate } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MailIcon from '@mui/icons-material/Mail';

import CustomSearchBar from '../Rajesh/CustomSearchBar';

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
    googleMapsApiKey: GOOGLE_MAPS_API_KEY
  });

  const center = {
    lat: 26.8467,
    lng: 80.9462
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
    <Box sx={{ pb: 7, maxWidth: 480, mx: "auto", width: '100%', position: 'relative' }}>
      {/* Top Section */}
      <Box sx={{ px: 2, pt: 2, zIndex: 2, position: 'relative' }}>
        <CustomSearchBar />
        <Typography variant="subtitle1" sx={{ mt: 2, mb: 1 }}>
          Looking for Home Services
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1,
            justifyContent: 'center',
            mb: 2
          }}
        >
          {workerTypes.map((type, index) => (
            <Chip key={index} label={type} variant="outlined" />
          ))}
        </Box>
      </Box>

      {/* Fullscreen Map with Card on top */}
      <Box sx={{ position: 'relative', width: '100%', height: '100vh' }}>
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
              zIndex: 10
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

export default HomeService;
