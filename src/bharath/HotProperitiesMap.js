import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Chip,
  Typography,
  Paper
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  GoogleMap,
  Marker,
  useJsApiLoader
} from '@react-google-maps/api';

import buildingImage from '../Images/house.jpeg';
import CustomSearchBar from '../Rajesh/CustomSearchBar';
import ReUsableCard from './ReUsableCard';
import CustomBottomNav from './CustomNavbarHotProperties';
import { BASE_URL } from '../Api/ApiUrls';

const rentalTypes = [
  "PLOT/LAND", "COMMERCIAL LAND/PLOT", "RENT WITH DUPLEX BUILDING", "DUPLEX HOUSE",
  "RENTAL BUILDING", "PG-OFFICES", "FLAT", "VILLA",
  "COMMERCIAL BUILDING", "APARTMENT", "OTHERS"
];

const Hot_Property_Map = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [properties, setProperties] = useState([]);
  const [selectedType, setSelectedType] = useState(null);
  const [saved, setSaved] = useState(() => {
    const stored = localStorage.getItem('savedHot');
    return stored ? JSON.parse(stored) : [];
  });
  const [categories, setCategories] = useState([]);
  const [likedCards, setLikedCards] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const categoriesResponse = await axios.get(`${BASE_URL}/property-category/`);
        setCategories(categoriesResponse.data);

        const propertiesResponse = await axios.get(`${BASE_URL}/property/`);
        const filtered = propertiesResponse.data.filter(item =>
          item.type === "best-deal" && item.Admin_status === "Approved"
        );

        const parsed = filtered.map(item => {
          const parseCoord = (coord) => {
            if (!coord) return null;
            const cleaned = coord.replace(/"/g, '').replace(':', '.');
            return parseFloat(cleaned);
          };

          const matchedCategory = categoriesResponse.data.find(
            cat => cat.category_id === item.category_id
          );

          const categoryName = matchedCategory ? matchedCategory.category : 'Property';

          const images = item.property_images?.length > 0
            ? item.property_images.map(img => `${BASE_URL}${img.image}`)
            : [buildingImage];

          return {
            id: item.property_id,
            title: categoryName,
            location: item.location || 'Not specified',
            price: `₹${item.price}`,
            date: item.created_at?.split('T')[0],
            facing: item.facing?.replace(/"/g, '') || 'N/A',
            area: item.site_area ? `${item.site_area} sq ft` : 'N/A',
            dimensions: item.roadwidth ? `${item.roadwidth} ft road` : 'N/A',
            listedBy: item.list?.replace(/"/g, '') || 'Agent',
            lat: parseCoord(item.lat),
            lng: parseCoord(item.long),
            length: item.length,
            width: item.width,
            property_name: item.property_name,
            mobile_no: item.mobile_no,
            admin_mobile: item.admin_mobile,
            images: images,
            propertyData: item
          };
        });

        setProperties(parsed);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, []);

  // Filter based on selected type
  const filteredProperties = selectedType
    ? properties.filter(p => p.title.toLowerCase().includes(selectedType.toLowerCase()))
    : properties;

  const GOOGLE_MAPS_API_KEY = "AIzaSyAZAU88Lr8CEkiFP_vXpkbnu1-g-PRigXU";

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  });

  const center = {
    lat: 17.429299,
    lng: 78.499021
  };

  const containerStyle = {
    width: '100%',
    height: 'calc(100vh - 240px)'
  };

  const toggleSave = (property) => {
    const isSaved = saved.find((p) => p.id == property.id);
    const updated = isSaved ? saved.filter((p) => p.id !== property.id) : [...saved, property];
    setSaved(updated);
    localStorage.setItem('savedHot', JSON.stringify([...saved, {
      ...property,
      images: property.images || [property.image]
    }]));
  };

  const isSaved = (property) => saved.some((p) => p.id == property.id);

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
      {/* Search Bar */}
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

      {/* Property Types */}
      <Box sx={{ px: 2 }}>
        <Typography variant="subtitle1" sx={{ mb: 1 }}>Hot Properties </Typography>
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
            <Chip
              key={index}
              label={type}
              variant="filled"
              onClick={() => {
                setSelectedProperty(null);
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

      {/* No properties message - moved outside the map container */}
      {selectedType && filteredProperties.length === 0 && (
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
              No properties listed in this category
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              We couldn't find any properties matching "{selectedType}"
            </Typography>
          </Box>
        </Box>
      )}

      {/* Google Map - only show if there are properties or no type selected */}
      {(!selectedType || filteredProperties.length > 0) && (
        <Box sx={{ px: 2, pb: 10 }}>
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={{ width: '100%', height: containerStyle.height }}
              center={center}
              zoom={14}
            >
              {filteredProperties.map(property => (
                property.lat && property.lng && (
                  <Marker
                    key={property.id}
                    position={{ lat: property.lat, lng: property.lng }}
                    onClick={() => setSelectedProperty(property)}
                  />
                )
              ))}
            </GoogleMap>
          ) : (
            <Typography>Loading map...</Typography>
          )}

          {/* Property Card Popup */}
          {selectedProperty && (
            <Box sx={{
              position: 'absolute',
              bottom: 115,
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
                  if (selectedProperty && selectedProperty.id) {
                    navigate('/hot-property-description', {
                      state: { propertyId: selectedProperty.id }
                    });
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
      )}

      {/* Bottom Navigation */}
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <CustomBottomNav />
      </Paper>
    </Box>
  );
};
export default Hot_Property_Map;