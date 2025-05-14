import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Chip,
  Typography,
  Paper
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import buildingImage from '../Images/house.jpeg';
import CustomSearchBar from '../Rajesh/CustomSearchBar';
import ReUsableCard from './ReUsableCard';
import CustomBottomNav from './CustomNavbarHotProperties';
import { BASE_URL } from '../Api/ApiUrls';

const rentalTypes = [
  "PLOT/LAND", "COMMERCIAL LAND/PLOT", "RENT WITH DUPLEX BUILDING",  "DUPLEX HOUSE",
  "RENTAL BUILDING", "PG-OFFICES", "FLAT","VILLA",
  "COMMERCIAL BUILDING", "APARTMENT","OTHERS"
];

// Fix Leaflet marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

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
  item.type == "best-deal" && item.Admin_status == "Approved"
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
  
            // Get all images or default to buildingImage
            // Ensure images is always an array
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
              images: images, // Make sure this is always an array
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
  
    // 🔍 Filter based on selected type
    const filteredProperties = selectedType
      ? properties.filter(p => p.title.toLowerCase().includes(selectedType.toLowerCase()))
      : properties;
  
    const redIcon = new L.Icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
      iconRetinaUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });
  
    useEffect(() => {
      if (filteredProperties.length == 0) return;
  
      const mapContainer = document.getElementById('leaflet-map');
      if (!mapContainer || mapContainer._leaflet_id) return;
  
      const map = L.map('leaflet-map').setView([17.429299, 78.499021], 9);
  
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '',
      }).addTo(map);
  
      filteredProperties.forEach(property => {
        if (!property.lat || !property.lng) return;
  
        const marker = L.marker([property.lat, property.lng], { icon: redIcon }).addTo(map);
  
        marker.on('click', () => {
          setSelectedProperty(property);
        });
      });
  
      return () => {
        map.remove();
      };
    }, [filteredProperties]);
  
    const toggleSave = (property) => {
      const isSaved = saved.find((p) => p.id == property.id);
      const updated = isSaved ? saved.filter((p) => p.id !== property.id) : [...saved, property];
      setSaved(updated);
      localStorage.setItem('savedHot', JSON.stringify([...saved, {
        ...property,
        images: property.images || [property.image] // Fallback to single image if no array
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
                  // Clear any property selection when clicking a type
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
  
        {/* 🗺️ Leaflet Map */}
        <Box sx={{ px: 2, pb: 10 }}>
          <Box sx={{ width: '100%', height: 'calc(100vh - 240px)' }}>
            <div id="leaflet-map" style={{ height: '100%', width: '100%', borderRadius: '8px' }}></div>
          </Box>
  
          {/* 🏠 Property Card Popup */}
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
  
        {/* 📱 Bottom Navigation */}
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <CustomBottomNav />
        </Paper>
      </Box>
  );
};

export default Hot_Property_Map;
