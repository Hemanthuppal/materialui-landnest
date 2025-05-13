import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Card,
  Paper,
  IconButton
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { useNavigate, useLocation } from 'react-router-dom';
import FormsBottomNavbar from '../maniteja/FormsBottomNavbar';
import {BASE_URL} from './../Api/ApiUrls';

const GOOGLE_MAPS_API_KEY = "AIzaSyAZAU88Lr8CEkiFP_vXpkbnu1-g-PRigXU";

const HomeServiceCategory = () => {
  const [vendors, setVendors] = useState([]);
  const [selectedWorker, setSelectedWorker] = useState(null);
  const [category, setCategory] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  });

  const center = {
    lat: 17.3147955,
    lng: 76.1804832,
  };

  const containerStyle = {
    width: '100%',
    height: 'calc(100vh - 200px)',
  };

  useEffect(() => {
    // Get category from navigation state
    if (location.state?.category) {
      setCategory(location.state.category);
    }
  }, [location]);

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const response = await fetch(`${BASE_URL}/vendors/`);
        const data = await response.json();
        setVendors(data);
      } catch (error) {
        console.error("Error fetching vendors:", error);
      }
    };

    fetchVendors();
  }, []);

  // Filter vendors based on the selected category
  const filteredVendors = category
    ? vendors.filter(vendor => 
        vendor.profession && vendor.profession.toLowerCase().includes(category.toLowerCase()))
    : [];

  return (
    <Box
      sx={{
        pb: 7,
        maxWidth: 480,
        mx: "auto",
        position: 'relative',
        bgcolor: 'rgb(239, 231, 221)',
        minHeight: '100vh'
      }}
    >
      {/* Category Header */}
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          bgcolor: 'rgb(239, 231, 221)',
          px: 2,
          py: 2,
          display: 'flex',
          alignItems: 'center',
          borderBottom: '1px solid rgba(0,0,0,0.1)'
        }}
      >
        <IconButton onClick={() => navigate(-1)} sx={{ mr: 1 }}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          {category || 'Home Services'}
        </Typography>
      </Box>

      {/* No vendors message */}
      {filteredVendors.length === 0 && (
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '200px',
          px: 2,
          textAlign: 'center'
        }}>
          <Box sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            padding: '16px',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <Typography variant="h6">
              No workers available in this category
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              We couldn't find any workers matching "{category}"
            </Typography>
          </Box>
        </Box>
      )}

      {/* Google Map */}
      {filteredVendors.length > 0 && (
        <Box sx={{ px: 0, pb: 10 }}>
          {isLoaded ? (
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
                {filteredVendors.map((vendor) => (
                  vendor.lat && vendor.long && (
                    <Marker
                      key={vendor.vendor_id}
                      position={{
                        lat: Number(vendor.lat),
                        lng: Number(vendor.long),
                      }}
                      onClick={() => setSelectedWorker(vendor)}
                    />
                  )
                ))}
              </GoogleMap>
            </Box>
          ) : (
            <Typography sx={{ textAlign: 'center' }}>Loading map...</Typography>
          )}

          {/* Floating Worker Card */}
          {selectedWorker && (
            <Box
              sx={{
                position: 'absolute',
                bottom: 200,
                left: 0,
                right: 0,
                px: 2,
                zIndex: 999,
              }}
            >
              <Card
                onClick={() => navigate(`/work-details/${selectedWorker.vendor_id}`)}
                sx={{
                  borderRadius: 3,
                  p: 2,
                  backgroundColor: '#fff',
                  boxShadow: 3,
                }}
              >
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <img
                    src={`${BASE_URL}${selectedWorker.profile}`}
                    alt={selectedWorker.name}
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: 10,
                      objectFit: 'cover',
                    }}
                  />
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {selectedWorker.profession}
                    </Typography>
                    <Typography variant="body2">Name: {selectedWorker.name}</Typography>
                    <Typography variant="body2">Mobile: {selectedWorker.mobile}</Typography>
                    <Typography variant="body2">Email: {selectedWorker.email}</Typography>
                    <Typography variant="body2">Experience: {selectedWorker.experience}+ year(s)</Typography>
                    <Typography variant="body2">⭐⭐⭐⭐</Typography>
                  </Box>
                </Box>
              </Card>
            </Box>
          )}
        </Box>
      )}

      {/* Bottom Navigation */}
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <FormsBottomNavbar />
      </Paper>
    </Box>
  );
};

export default HomeServiceCategory;