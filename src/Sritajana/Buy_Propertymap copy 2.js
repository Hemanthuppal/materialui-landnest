import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import {
  Box,
  Chip,
  Typography,
  Paper,
  CircularProgress
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  GoogleMap,
  Marker,
  useJsApiLoader
} from '@react-google-maps/api';
import { AuthContext } from '../AuthContext/AuthContext';
import buildingImage from '../Images/house.jpeg';
import CustomSearchBar from '../Rajesh/CustomSearchBar';
import ReUsableCard from './../sharvani/ReUsableCard';
import CustomBottomNav from './CustomNav';
import { BASE_URL } from '../Api/ApiUrls';

const rentalTypes = [
  "PLOT/LAND", "COMMERCIAL LAND/PLOT", "RENT WITH DUPLEX BUILDING", "DUPLEX HOUSE",
  "RENTAL BUILDING", "PG-OFFICES", "FLAT", "VILLA",
  "COMMERCIAL BUILDING", "APARTMENT", "OTHERS"
];

const Buy_Property_Map = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [properties, setProperties] = useState([]);
  const [selectedType, setSelectedType] = useState(null);
  const [categories, setCategories] = useState([]);
  const [likedCards, setLikedCards] = useState({});
  const { userId, logout } = useContext(AuthContext);
  const [savedProperties, setSavedProperties] = useState([]);
  const [saving, setSaving] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch saved properties from API
  useEffect(() => {
    const fetchSavedProperties = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/user-cart/?user_id=${userId}`);
        // Ensure response.data is an array before mapping
        const savedItems = Array.isArray(response.data) ? response.data : [];
        setSavedProperties(savedItems.map(item => item.property_id));
      } catch (error) {
        console.error('Error fetching saved properties:', error);
        setSavedProperties([]); // Set empty array on error
      }
    };

    if (userId) {
      fetchSavedProperties();
    }
  }, [userId]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const categoriesResponse = await axios.get(`${BASE_URL}/property-category/`);
        setCategories(categoriesResponse.data);

        const propertiesResponse = await axios.get(`${BASE_URL}/property/`);
        const filtered = propertiesResponse.data.filter(item =>
          item.type && item.type.toLowerCase().includes("sell")
        );

        const parsed = filtered.map(item => {
          const parseCoord = (coord) => {
            if (!coord) return null;
            const cleaned = coord.replace(/"/g, '').replace(':', '.');
            return parseFloat(cleaned);
          };

          const matchedCategory = categoriesResponse.data.find(
            cat => cat.category_id == item.category_id
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
            images: images,
            propertyData: item
          };
        });

        setProperties(parsed);
      } catch (error) {
        console.error('Error fetching properties:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  // API functions for cart operations
  const addToCart = async (propertyId) => {
    try {
      const response = await axios.post(`${BASE_URL}/user-cart/`, {
        user_id: userId,
        property_id: propertyId
      });
      return response.data;
    } catch (error) {
      console.error('Error adding to cart:', error);
      throw error;
    }
  };

  const removeFromCart = async (propertyId) => {
    try {
      const cartResponse = await axios.get(`${BASE_URL}/user-cart/?user_id=${userId}&property_id=${propertyId}`);
      if (cartResponse.data && cartResponse.data.length > 0) {
        await axios.delete(`${BASE_URL}/user-cart/${cartResponse.data[0].cart_id}/`);
      }
    } catch (error) {
      console.error('Error removing from cart:', error);
      throw error;
    }
  };

  const toggleSave = async (property) => {
    const propertyId = property.id;
    setSaving(prev => ({ ...prev, [propertyId]: true }));
    
    try {
      const isSaved = savedProperties.includes(propertyId);
      
      if (isSaved) {
        await removeFromCart(propertyId);
        setSavedProperties(prev => prev.filter(id => id !== propertyId));
      } else {
        await addToCart(propertyId);
        setSavedProperties(prev => [...prev, propertyId]);
      }
    } catch (error) {
      console.error('Error updating saved properties:', error);
    } finally {
      setSaving(prev => ({ ...prev, [propertyId]: false }));
    }
  };

  const isSaved = (property) => savedProperties.includes(property.id);

  const toggleLike = (id) => {
    setLikedCards((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

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

  if (loading) {
    return (
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        backgroundColor: 'rgb(239, 231, 221)'
      }}>
        <CircularProgress />
      </Box>
    );
  }

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
        <Typography variant="subtitle1" sx={{ mb: 1 }}>Buy Properties </Typography>
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

      {/* No properties message */}
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

      {/* Google Map */}
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
                    navigate('/Buy-description', {
                      state: { propertyId: selectedProperty.id }
                    });
                  }
                }}
                isSaved={isSaved}
                toggleSave={toggleSave}
                likedCards={likedCards}
                toggleLike={toggleLike}
                onClose={() => setSelectedProperty(null)}
                saving={saving[selectedProperty.id]}
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

export default Buy_Property_Map;