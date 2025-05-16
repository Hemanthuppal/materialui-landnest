import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Card,
  Chip,
  Paper,
} from '@mui/material';

import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { useNavigate } from 'react-router-dom';
import FormsBottomNavbar from '../maniteja/FormsBottomNavbar';
import CustomSearchBar from "../Rajesh/CustomSearchBar";
import {BASE_URL} from './../Api/ApiUrls';

const GOOGLE_MAPS_API_KEY = "AIzaSyAZAU88Lr8CEkiFP_vXpkbnu1-g-PRigXU";

const workerTypes = [
  "Painting", "Carpenter", "Flooring", "AC Technician", "Cleaning maid",
  "Gardener", "Sofa Cleaning", "Water Purifier", "Kitchen/Toilet Cleaning", "Plumbing","Electrical"
];

const HomeService = () => {
  const [vendors, setVendors] = useState([]);
  const [selectedWorker, setSelectedWorker] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const navigate = useNavigate();

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
    height: 'calc(100vh - 240px)',
  };

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

  // Filter vendors based on selected worker type
  const filteredVendors = selectedType
    ? vendors.filter(vendor => 
        vendor.profession && vendor.profession.toLowerCase().includes(selectedType.toLowerCase()))
    : vendors;

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
      {/* Sticky Search Header */}
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          bgcolor: 'rgb(239, 231, 221)',
          px: 1,
          py: 1,
        }}
      >
        <CustomSearchBar />
      </Box>

      {/* Worker Type Chips */}
      <Box sx={{ px: 2 }}>
        <Typography variant="subtitle1" sx={{ mb: 1 }}>
          Looking for Home Services
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: 1,
            overflowX: 'auto',
            whiteSpace: 'nowrap',
            pb: 1
          }}
        >
          {workerTypes.map((type, index) => (
            <Chip
              key={index}
              label={type}
              variant="filled"
              onClick={() => {
                setSelectedWorker(null);
                setSelectedType(prev => (prev == type ? null : type));
              }}
              sx={{
                flexShrink: 0,
                bgcolor: selectedType == type ? '#000000' : 'transparent',
                color: selectedType == type ? '#ffffff' : '#000000',
                border: '1px solid black',
                fontWeight: 'bold',
                '&:hover': {
                  bgcolor: selectedType == type ? '#000000' : 'rgba(0, 0, 0, 0.1)',
                },
              }}
            />
          ))}
        </Box>
      </Box>

      {/* No vendors message */}
      {selectedType && filteredVendors.length == 0 && (
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
              We couldn't find any workers matching "{selectedType}"
            </Typography>
          </Box>
        </Box>
      )}

      {/* Google Map - only show if there are vendors or no type selected */}
      {(!selectedType || filteredVendors.length > 0) && (
        <Box sx={{ px: 2, pb: 10 }}>
          {isLoaded ? (
            <Box sx={{ width: '100%', height: containerStyle.height }}>
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={7}
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
                        lat: parseFloat(vendor.lat),
                        lng: parseFloat(vendor.long),
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
                bottom: 250,
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

export default HomeService;