import React, { useState, useEffect, useContext } from 'react';
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
import buildingImage from '../../Images/house.jpeg';
import CustomSearchBar from '../../Rajesh/CustomSearchBar';
import BottomNavbar from '../../maniteja/FormsBottomNavbar';
import { BASE_URL } from '../../Api/ApiUrls';
import {AuthContext} from '../../AuthContext/AuthContext';

const PropertyCard = () => {
  const navigate = useNavigate();
 const { userId, logout } = useContext(AuthContext); 

  const [searchQuery, setSearchQuery] = useState('');
  const [saved, setSaved] = useState(() => {
    const stored = localStorage.getItem('savedBuy');
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
          // Filter based on user_id and type == "sell"
      const filtered = propertiesResponse.data.filter(item =>
        item.user_id == userId &&
        item.type &&
        item.type.toLowerCase() == "lease"
      );

        const parsed = filtered.map(item => {
          const parseCoord = (coord) => {
            if (!coord) return null;
            const cleaned = coord.replace(/"/g, '').replace(':', '.');
            return parseFloat(cleaned);
          };

          // Find matching category
          const matchedCategory = categoriesResponse.data.find(
            cat => cat.category_id == item.category_id
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
    const isSaved = saved.find((p) => p.id == property.id);
    let updated;

    if (isSaved) {
      updated = saved.filter((p) => p.id !== property.id);
    } else {
      updated = [...saved, property];
    }

    setSaved(updated);
    localStorage.setItem('savedBuy', JSON.stringify(updated));
  };

  const isSaved = (property) => saved.some((p) => p.id == property.id);

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
                  navigate('/buy-description', { state: { propertyId: property.id, property: property.propertyData } });
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
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom noWrap>
                  {property.title}
                </Typography>
                <Typography variant="caption" color="text.secondary" mb={0.2} noWrap>
                  {property.location}
                </Typography>

                <Grid container justifyContent="space-between" alignItems="center">
                  <Typography variant="body2" fontWeight="bold" color="primary">
                    {property.price}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                  {new Date(property.date).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })}
                  </Typography>
                </Grid>

                <Box display="flex" alignItems="center" mt={0.2}>
                  <IconButton
                    onClick={(e) => {
                      e.stopPropagation();
                      if (property.lat && property.long) {
                        openGoogleMapsWithDirections(property.lat, property.long);
                      }
                    }}
                  >
                    <LocationOn fontSize="small" color="action" />
                  </IconButton>

                  <Typography variant="caption" color="text.primary" ml={0.5}>
                    Location 
                  </Typography>
                  <Box sx={{ flexGrow: 1 }} />
                  <Button
                    size="small"
                    variant="outlined"
                    color="success"
                    startIcon={<Call />}
                    sx={{ textTransform: 'none', px: 1.2, py: 0.3, fontSize: '0.7rem' }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Call
                  </Button>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    border: '1px solid #e0e0e0',
                    borderRadius: 2,
                    overflow: 'hidden',
                  }}
                >
                  {[
                    { label: 'Facing', value: property.facing },
                    { label: `Area (${property.dimensions})`, value: property.area },
                    { label: 'Listed By', value: property.listedBy },
                  ].map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        flex: 1,
                        px: 1,
                        py: 0.2,
                        textAlign: 'center',
                        borderRight: index < 2 ? '1px solid #e0e0e0' : 'none',
                      }}
                    >
                      <Typography variant="caption" color="text.secondary" noWrap>
                        {item.label}
                      </Typography>
                      <Typography variant="body2" fontWeight="bold" noWrap>
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