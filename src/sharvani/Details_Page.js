import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Button,
  Grid,
  Tooltip,
} from '@mui/material';
import {
  FavoriteBorder,
  Favorite,
  Share,
  ThumbUpAltOutlined,
  ThumbUpAlt,
  Call,
  LocationOn,
} from '@mui/icons-material';
import axios from 'axios';
import buildingImage from '../Images/house.jpeg';
import CustomSearchBar from '../Rajesh/CustomSearchBar';
import BottomNavbar from './BottomNavbar/BottomNavbar';
import { BASE_URL } from '../Api/ApiUrls';

const PropertyCard = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [saved, setSaved] = useState(() => {
    const stored = localStorage.getItem('saveRent');
    return stored ? JSON.parse(stored) : [];
  });
  const [likedCards, setLikedCards] = useState({});
  const [properties, setProperties] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch categories first
        const categoriesResponse = await axios.get(`${BASE_URL}/property-category/`);
        setCategories(categoriesResponse.data);

        // Then fetch properties
        const propertiesResponse = await axios.get(`${BASE_URL}/property/`);
        const filtered = propertiesResponse.data.filter(item =>
          item.type && item.type.toLowerCase().includes("rent")
        );

        const parsed = filtered.map(item => {
          const parseCoord = (coord) => {
            if (!coord) return null;
            const cleaned = coord.replace(/"/g, '').replace(':', '.');
            return parseFloat(cleaned);
          };

          // Find matching category
          const matchedCategory = categoriesResponse.data.find(
            cat => cat.category_id === item.category_id
          );

          const categoryName = matchedCategory ? matchedCategory.category : 'Property';

          // Fixed image URL construction
          const imageUrl = item.property_images?.[0]?.image
            ? `${BASE_URL}${item.property_images[0].image}`
            : buildingImage;

          return {
            id: item.property_id,
            title: categoryName,
            location: item.location || 'Not specified',
            price: `₹${item.price?.toLocaleString()}`,
            date: item.created_at?.split('T')[0],
            facing: item.facing?.replace(/"/g, '') || 'N/A',
            area: item.site_area ? `${item.site_area} sq ft` : 'N/A',
            dimensions: item.roadwidth ? `${item.roadwidth} ft road` : 'N/A',
            listedBy: item.list?.replace(/"/g, '') || 'Agent',
            lat: parseCoord(item.lat),
            long: parseCoord(item.long),
            length: item.length,
            width: item.width,
            mobile_no: item.mobile_no,
            image: imageUrl,
            propertyData: item // Store the full property data for description page
          };
        });

        setProperties(parsed);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const openGoogleMapsWithDirections = (destLat, destLng) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const currentLat = position.coords.latitude;
          const currentLng = position.coords.longitude;

          const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${currentLat},${currentLng}&destination=${destLat},${destLng}&travelmode=driving`;

          window.open(googleMapsUrl, '_blank');
        },
        (error) => {
          console.error("Error getting location:", error);
          alert("Could not get your location. Please allow location access.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  const toggleSave = (property) => {
    const isSaved = saved.find((p) => p.id === property.id);
    let updated;

    if (isSaved) {
      updated = saved.filter((p) => p.id !== property.id);
    } else {
      updated = [...saved, property];
    }

    setSaved(updated);
    localStorage.setItem('saveRent', JSON.stringify(updated));
  };

  const isSaved = (property) => saved.some((p) => p.id === property.id);

  const filteredProperties = properties.filter((property) =>
    property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    property.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleLike = (id) => {
    setLikedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if (loading) {
    return (
      <Box sx={{
        backgroundColor: 'rgb(239, 231, 221)',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Typography>Loading properties...</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ backgroundColor: 'rgb(239, 231, 221)', minHeight: '120vh' }}>
      {/* Sticky Search Bar */}
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          px: 1,
          py: 1,
          backgroundColor: 'rgb(239, 231, 221)',
        }}
      >
        <CustomSearchBar value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      </Box>

      {/* Property List */}
      <Box sx={{ pb: 8 }}>
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <Card
              key={property.id}
              sx={{
                mb: 1.2,
                mx: 2,
                borderRadius: 3,
                boxShadow: 2,
                transition: 'transform 0.2s ease-in-out',
                '&:hover': { transform: 'scale(1.015)', boxShadow: 4 },
              }}
              onClick={(e) => {
                const isButtonClick = e.target.closest('button') || e.target.closest('svg');
                if (!isButtonClick) {
                  navigate('/rent-description', { state: { propertyId: property.id, property: property.propertyData } });
                }
              }}
            >
              <Box position="relative">
                <CardMedia
                  component="img"
                  image={property.image}
                  alt="Property"
                  sx={{
                    width: '100%',
                    height: '140px',
                    objectFit: 'cover',
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                  }}
                />
                <Box sx={{ position: 'absolute', top: 6, right: 6, display: 'flex', gap: 0.8 }}>
                  <Tooltip title="Add to Wishlist">
                    <IconButton
                      sx={{ bgcolor: 'white', boxShadow: 1, p: 0.8 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSave(property);
                      }}
                    >
                      {isSaved(property) ? <Favorite color="error" /> : <FavoriteBorder />}
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Share">
                    <IconButton
                      sx={{ bgcolor: 'white', boxShadow: 1, p: 0.8 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Share />
                    </IconButton>
                  </Tooltip>
                </Box>
                <Box sx={{ position: 'absolute', bottom: 6, right: 6 }}>
                  <Tooltip title="Like">
                    <IconButton
                      sx={{
                        bgcolor: 'white',
                        boxShadow: 1,
                        color: likedCards[property.id] ? 'blue' : 'default',
                        p: 0.8,
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLike(property.id);
                      }}
                    >
                      {likedCards[property.id] ? <ThumbUpAlt /> : <ThumbUpAltOutlined />}
                    </IconButton>
                  </Tooltip>
                </Box>
              </Box>

                 <CardContent sx={{ px: 2, py: 0.2, pb: '7px !important' }}>
              {/* Title and Price row */}
              <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={0.5}>
                <Typography 
                  variant="subtitle1" 
                  fontWeight="bold" 
                  noWrap 
                  sx={{ 
                    flex: 1,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    pr: 1 
                  }}
                >
                  {property.title}
                </Typography>
                <Typography variant="body2" fontWeight="bold" color="primary" noWrap>
                  {property.price}
                </Typography>
              </Box>
            
              {/* Location and Date row */}
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={0.5}>
                <Typography 
                  variant="caption" 
                  color="text.secondary" 
                  noWrap
                  sx={{
                    flex: 1,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    pr: 1
                  }}
                >
                  {property.location}
                </Typography>
                <Typography variant="caption" color="text.secondary" noWrap>
                  {new Date(property.date).toLocaleDateString('en-IN', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric'
                  })}
                </Typography>
              </Box>
            
              {/* Location Verified and Call button */}
              <Box display="flex" alignItems="center" mb={1}>
                <IconButton
                  onClick={(e) => {
                    e.stopPropagation();
                    if (property.lat && property.long) {
                      openGoogleMapsWithDirections(property.lat, property.long);
                    }
                  }}
                  size="small"
                  sx={{ p: 0.5 }}
                >
                  <LocationOn fontSize="small" color="action" />
                </IconButton>
                <Typography variant="caption" color="text.primary" ml={0.5}>
                  Location Verified
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Button
                  size="small"
                  variant="outlined"
                  color="success"
                  startIcon={<Call fontSize="small" />}
                  sx={{ 
                    textTransform: 'none', 
                    px: 1, 
                    py: 0.2, 
                    fontSize: '0.7rem',
                    minWidth: 'auto'
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  Call
                </Button>
              </Box>
            
              {/* Property details */}
              <Box
                sx={{
                  display: 'flex',
                  border: '1px solid #e0e0e0',
                  borderRadius: 1,
                  overflow: 'hidden',
                }}
              >
                {[
                  { label: 'Facing', value: property.facing || 'N/A' },
                  { 
                    label: 'Area', 
                    value: (
                      <Box>
                        <Box component="span">{property.area || 'N/A'}</Box>
                        {property.length && property.width && (
                          <Typography 
                            component="span" 
                            variant="caption" 
                            color="text.secondary"
                            sx={{ display: ['none', 'inline'], ml: 0.5 }}
                          >
                            ({property.length} × {property.width})
                          </Typography>
                        )}
                      </Box>
                    ) 
                  },
                  { label: 'Listed By', value: property.listedBy || 'N/A' },
                ].map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      flex: 1,
                      px: 0.5,
                      py: 0.2,
                      textAlign: 'center',
                      borderRight: index < 2 ? '1px solid #e0e0e0' : 'none',
                      minWidth: 0
                    }}
                  >
                    <Typography variant="caption" color="text.secondary" noWrap>
                      {item.label}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      fontWeight="bold" 
                      noWrap={index !== 1} // Allow area to wrap if needed
                      sx={{
                        fontSize: '0.8rem',
                        lineHeight: 1.2
                      }}
                    >
                      {item.value}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
            </Card>
          ))
        ) : (
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '200px',
            px: 2
          }}>
            <Typography>No properties found matching your search.</Typography>
          </Box>
        )}
      </Box>

      <BottomNavbar />
    </Box>
  );
};

export default PropertyCard;