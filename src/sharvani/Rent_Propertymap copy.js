import React, { useState, useEffect } from 'react';
import {
  Box,
  Chip,
  Typography,
} from '@mui/material';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import buildingImage from '../Images/house.jpeg';
import buildingImage2 from '../Images/house1.jpg';
import CustomSearchBar from '../Rajesh/CustomSearchBar';
import ReUsableCard from './ReUsableCard';
import BottomNavbar from './BottomNavbar/BottomNavbar';
import { BASE_URL } from '../Api/ApiUrls';

const rentalTypes = [
  "1BHK", "2BHK", "3BHK", "4+ BHK", "PLOT/LAND", "DUPLEX HOUSE",
  "COMMERCIAL LAND", "COMMERCIAL BUILDING/ Space", "VILLA",
  "PG-SCHOOL-OFFICE", "SHOPPING mall/shop"
];

const GOOGLE_MAPS_API_KEY = "AIzaSyAZAU88Lr8CEkiFP_vXpkbnu1-g-PRigXU";

const Rent_Property_Map = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const navigate = useNavigate();
  const [saved, setSaved] = useState(() => {
    const stored = localStorage.getItem('savedRent');
    return stored ? JSON.parse(stored) : [];
  });
  
  const [likedCards, setLikedCards] = useState({});

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  });

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/property/`);
        // Filter properties where type is "rent/lease"
        const rentProperties = response.data.filter(property => 
          property.type && property.type.toLowerCase() == "rent"
        );
        setProperties(rentProperties);
console.log("rentproperties",rentProperties);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
        console.error('Error fetching properties:', err);
      }
    };

    fetchProperties();
  }, []);

  const containerStyle = {
    width: '100%',
    height: 'calc(100vh - 240px)' // Adjust height for chips + nav
  };

  // Calculate center based on properties if available, otherwise use default
  const center = properties.length > 0 
    ? { 
        lat: parseFloat(properties[0].latitude) || 26.8467, 
        lng: parseFloat(properties[0].longitude) || 80.9462 
      }
    : { lat: 26.8467, lng: 80.9462 };

  const toggleSave = (property) => {
    const isSaved = saved.find((p) => p.id == property.id);
    let updated;

    if (isSaved) {
      updated = saved.filter((p) => p.id !== property.id);
    } else {
      updated = [...saved, property];
    }

    setSaved(updated);
    localStorage.setItem('savedRent', JSON.stringify(updated));
  };

  const isSaved = (property) => saved.some((p) => p.id == property.id);

  const toggleLike = (id) => {
    setLikedCards((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  if (loading) {
    return (
      <Box sx={{ 
        height: '100vh', 
        maxWidth: 480, 
        mx: 'auto', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'rgb(239, 231, 221)'
      }}>
        <Typography>Loading properties...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ 
        height: '100vh', 
        maxWidth: 480, 
        mx: 'auto', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'rgb(239, 231, 221)'
      }}>
        <Typography color="error">Error: {error}</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        height: '100vh',
        maxWidth: 480,
        mx: 'auto',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgb(239, 231, 221)',
        position: 'relative',
      }}
    >
      {/* Sticky Search Bar */}
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          bgcolor: '#fff',
          px: 1,
          py: 1,
          backgroundColor: 'rgb(239, 231, 221)'
        }}
      >
        <CustomSearchBar />
      </Box>

      {/* Rental Type Chips */}
      <Box sx={{ px: 2, flexShrink: 0 }}>
        <Typography variant="subtitle1" sx={{ mb: 1 }}>Property Rental Type</Typography>
        <Box
          sx={{
            display: 'flex',
            gap: 1,
            overflowX: 'auto',
            whiteSpace: 'nowrap',
            pb: 1
          }}
        >
          {rentalTypes.map((type, index) => (
            <Chip 
              key={index} 
              label={type} 
              variant="outlined" 
              sx={{ 
                flexShrink: 0,
                border: '1px solid black',
              }} 
            />
          ))}
        </Box>
      </Box>

      {/* Google Map */}
      {isLoaded ? (
        <Box sx={{ px: 2, pb: 10 }}>
          <Box sx={{ width: '100%', height: '100%' }}>
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
                  position={{ 
                    lat: parseFloat(property.latitude) || 0, 
                    lng: parseFloat(property.longitude) || 0 
                  }}
                  onClick={() => setSelectedProperty(property)}
                />
              ))}
            </GoogleMap>
          </Box>

          {selectedProperty && (
            <Box sx={{
              position: 'absolute',
              bottom: 62,
              left: 0,
              right: 0,
              margin: '0 auto',
              width: '100%',
              maxWidth: 480,
              zIndex: 999
            }}>
              <ReUsableCard
                property={selectedProperty}
                onCardClick={() => {
                  console.log('Selected property:', selectedProperty); // Debug log
                  if (selectedProperty && selectedProperty.id) {
                    navigate('/rent-description', {
                      state: { propertyId: selectedProperty.id }
                    });
                  } else {
                    console.warn('selectedProperty or property_id is undefined');
                  }
                }}
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

      <BottomNavbar/>
    </Box>
  );
};

export default Rent_Property_Map;