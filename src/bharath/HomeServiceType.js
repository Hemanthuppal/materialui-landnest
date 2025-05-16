import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Typography,
  Card,
  Paper,
} from '@mui/material';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { useNavigate, useLocation } from 'react-router-dom';
import FormsBottomNavbar from '../maniteja/FormsBottomNavbar';
import CustomSearchBar from "../Rajesh/CustomSearchBar";
import { BASE_URL } from './../Api/ApiUrls';

const GOOGLE_MAPS_API_KEY = "AIzaSyAZAU88Lr8CEkiFP_vXpkbnu1-g-PRigXU";

const containerStyle = {
  width: '100%',
  height: 'calc(100vh - 240px)',
};

const defaultCenter = {
  lat: 17.3147955,
  lng: 76.1804832,
};

// Define libraries outside the component
const libraries = ['places'];

const HomeServiceType = () => {
  const [vendors, setVendors] = useState([]);
  const [selectedWorker, setSelectedWorker] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const mapRef = useRef(null);
  
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries: libraries, // Use the constant here
  });
 // Get category from navigation state
  const category = location.state?.category || '';
  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const response = await fetch(`${BASE_URL}/vendors/`);
        const data = await response.json();
        
        const filteredVendors = category 
          ? data.filter(vendor => 
              vendor.profession && 
              vendor.profession.toLowerCase().includes(category.toLowerCase()))
          : data;

        setVendors(filteredVendors);
      } catch (error) {
        console.error("Error fetching vendors:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVendors();
  }, [category]);

  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
    if (vendors.length === 0) {
      map.setCenter(defaultCenter);
      map.setZoom(14);
      return;
    }
    const bounds = new window.google.maps.LatLngBounds();
    vendors.forEach((vendor) => {
      const lat = parseFloat(vendor.lat);
      const lng = parseFloat(vendor.long);
      if (!isNaN(lat) && !isNaN(lng)) {
        bounds.extend({ lat, lng });
      }
    });
    map.fitBounds(bounds);
  }, [vendors]);

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

      <Box sx={{ px: 2, pt: 2 }}>
        <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
          {category || 'All'} Services
        </Typography>
      </Box>

      {vendors.length === 0 && !loading && (
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
              No workers available
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              {category ? `We couldn't find any ${category} workers` : 'No workers found'}
            </Typography>
          </Box>
        </Box>
      )}

      {vendors.length > 0 && (
        <Box sx={{ px: 2, pb: 10 }}>
          {isLoaded ? (
            <Box sx={{ width: '100%', height: containerStyle.height }}>
              <GoogleMap
                mapContainerStyle={containerStyle}
                onLoad={onMapLoad}
                options={{
                  gestureHandling: 'greedy',
                  zoomControl: true,
                  mapTypeControl: false,
                  streetViewControl: false,
                  fullscreenControl: false,
                }}
              >
                {vendors.map((vendor) => {
                  const lat = parseFloat(vendor.lat);
                  const lng = parseFloat(vendor.long);
                  return (
                    lat && lng && (
                      <Marker
                        key={vendor.vendor_id}
                        position={{ lat, lng }}
                        onClick={() => setSelectedWorker(vendor)}
                      />
                    )
                  );
                })}
              </GoogleMap>
            </Box>
          ) : (
            <Typography sx={{ textAlign: 'center' }}>Loading map...</Typography>
          )}

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

      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <FormsBottomNavbar />
      </Paper>
    </Box>
  );
};

export default HomeServiceType;
