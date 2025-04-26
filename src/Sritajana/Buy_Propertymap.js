import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Chip,
  Typography,
  Paper
} from '@mui/material';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { useNavigate } from 'react-router-dom';

import buildingImage from '../Images/house.jpeg';
import CustomSearchBar from '../Rajesh/CustomSearchBar';
import ReUsableCard from './../sharvani/ReUsableCard';
import CustomBottomNav from './CustomNav';

const rentalTypes = [
  "1BHK", "2BHK", "3BHK", "4+ BHK", "PLOT/LAND", "DUPLEX HOUSE",
  "COMMERCIAL LAND", "COMMERCIAL BUILDING/ Space", "VILLA",
  "PG-SCHOOL-OFFICE", "SHOPPING mall/shop"
];

const GOOGLE_MAPS_API_KEY = "AIzaSyAZAU88Lr8CEkiFP_vXpkbnu1-g-PRigXU";

const Rent_Property_Map = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [properties, setProperties] = useState([]);
  const [value, setValue] = useState(0);
  const [saved, setSaved] = useState(() => {
    const stored = localStorage.getItem('savedBuy');
    return stored ? JSON.parse(stored) : [];
  });

  const [likedCards, setLikedCards] = useState({});
  const navigate = useNavigate();

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  });

  const containerStyle = {
    width: '100%',
    height: 'calc(100vh - 240px)'
  };

  const center = {
    lat: 26.8467,
    lng: 80.9462
  };

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('http://46.37.122.105:89/property/');
        const filtered = response.data.filter(item =>
          item.type && item.type.toLowerCase().includes("sell")
        );

        const parsed = filtered.map(item => {
          const parseCoord = (coord) => {
            if (!coord) return null;
            const cleaned = coord.replace(/"/g, '').replace(':', '.');
            return parseFloat(cleaned);
          };

          return {
            id: item.property_id,
            title: item.type?.replace(/"/g, '') || 'Property',
            location: item.location || 'Not specified',
            price: `₹${item.price}`,
            date: item.created_at?.split('T')[0],
            facing: item.facing?.replace(/"/g, '') || 'N/A',
            area: item.site_area ? `${item.site_area} sq ft` : 'N/A',
            dimensions: item.roadwidth ? `${item.roadwidth} ft road` : 'N/A',
            listedBy: item.list?.replace(/"/g, '') || 'Agent',
            lat: parseCoord(item.lat),
            lng: parseCoord(item.long),
            image: item.property_images?.[0]?.image
              ? `http://46.37.122.105:89${item.property_images[0].image}`
              : buildingImage
          };
        });

        setProperties(parsed);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, []);

  const toggleSave = (property) => {
    const isSaved = saved.find((p) => p.id === property.id);
    const updated = isSaved ? saved.filter((p) => p.id !== property.id) : [...saved, property];
    setSaved(updated);
    localStorage.setItem('savedBuy', JSON.stringify(updated));
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
        backgroundColor: 'rgb(239, 231, 221)',
        minHeight: '100vh'
      }}
    >
      {/* 🔍 Search Bar */}
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

      {/* 📌 Property Types */}
      <Box sx={{ px: 2 }}>
        <Typography variant="subtitle1" sx={{ mb: 1 }}>Buy Property </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: 1,
            overflowX: 'auto',
            whiteSpace: 'nowrap',
            pb: 1,
          }}
        >
          {rentalTypes.map((type, index) => (
            <Chip key={index} label={type} variant="outlined" sx={{ flexShrink: 0, border: '1px solid black' }} />
          ))}
        </Box>
      </Box>

      {/* 🗺️ Google Map */}
      {isLoaded ? (
        <Box sx={{ px: 2, pb: 10 }}>
          <Box sx={{ width: '100%', height: containerStyle.height }}>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={13}
              options={{
                gestureHandling: 'greedy',
                zoomControl: true,
                mapTypeControl: false,
                streetViewControl: false,
                fullscreenControl: false
              }}
            >
              {properties.map(property => (
                property.lat && property.lng && (
                  <Marker
                    key={property.id}
                    position={{ lat: property.lat, lng: property.lng }}
                    onClick={() => setSelectedProperty(property)}
                  />
                )
              ))}
            </GoogleMap>
          </Box>

          {/* 🏠 Show property card on click */}
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
                onCardClick={() => {
                  console.log('Selected property:', selectedProperty); // Debug log
                  if (selectedProperty && selectedProperty.id) {
                    navigate('/Buy-description', {
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

      {/* 📱 Bottom Navigation */}
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <CustomBottomNav />
      </Paper>
    </Box>
  );
};

export default Rent_Property_Map;
