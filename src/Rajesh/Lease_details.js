import React, { useState, useEffect ,useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext/AuthContext';
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
  Chip,
    CircularProgress
} from '@mui/material';
import {
  FavoriteBorder,
  Favorite,
  Share,
  ThumbUpAltOutlined,
  ThumbUpAlt,
  Call,
  LocationOn,
  ChevronLeft,
  ChevronRight
} from '@mui/icons-material';
import axios from 'axios';
import buildingImage from '../Images/house.jpeg';
import CustomSearchBar from './CustomSearchBar';
import BottomNavbar from './CustomBottomNav';
import { BASE_URL } from '../Api/ApiUrls';

const PropertyCard = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [saved, setSaved] = useState(() => {
    const stored = localStorage.getItem('saveLease');
    return stored ? JSON.parse(stored) : [];
  });
  const [likedCards, setLikedCards] = useState({});
  const [properties, setProperties] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [selectedType, setSelectedType] = useState(null);
   const { userId, logout } = useContext(AuthContext);
      const [selectedProperty, setSelectedProperty] = useState(null);
      const [savedProperties, setSavedProperties] = useState([]);
        const [cartItems, setCartItems] = useState([]); // Stores complete cart items
        
       
        
        const [saving, setSaving] = useState({});
      

      const rentalTypes = [
        "1BHK", "2BHK", "3BHK", "4+ BHK", "PLOT/LAND", "DUPLEX HOUSE",
        "COMMERCIAL LAND", "COMMERCIAL BUILDING/ Space", "VILLA",
        "PG-SCHOOL-OFFICE", "SHOPPING mall/shop"
      ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesResponse = await axios.get(`${BASE_URL}/property-category/`);
        setCategories(categoriesResponse.data);

        const propertiesResponse = await axios.get(`${BASE_URL}/property/`);
         const filtered = propertiesResponse.data
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at)) // Sort by created_at DESC
        .filter(item =>
          item.type && item.type.toLowerCase().includes("lease")
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
          const images = item.property_images?.length > 0 
            ? item.property_images.map(img => `${BASE_URL}${img.image}`)
            : [buildingImage];

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
            property_name:item.property_name,
            images: images, // Now using all images
            propertyData: item
          };
        });

        setProperties(parsed);
        // Initialize current image index for each property
        const initialIndexes = {};
        parsed.forEach(property => {
          initialIndexes[property.id] = 0;
        });
        setCurrentImageIndex(initialIndexes);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleNextImage = (propertyId, e) => {
    e.stopPropagation();
    setCurrentImageIndex(prev => {
      const currentIndex = prev[propertyId];
      const property = properties.find(p => p.id == propertyId);
      const nextIndex = (currentIndex + 1) % property.images.length;
      return {
        ...prev,
        [propertyId]: nextIndex
      };
    });
  };

  const handlePrevImage = (propertyId, e) => {
    e.stopPropagation();
    setCurrentImageIndex(prev => {
      const currentIndex = prev[propertyId];
      const property = properties.find(p => p.id == propertyId);
      const prevIndex = (currentIndex - 1 + property.images.length) % property.images.length;
      return {
        ...prev,
        [propertyId]: prevIndex
      };
    });
  };

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
  
 
  // Fetch saved properties from API on component mount
  useEffect(() => {
    const fetchSavedProperties = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/user-cart/?user_id=${userId}`);
        setCartItems(response.data);
        setSavedProperties(response.data.map(item => item.property_id));
      } catch (error) {
        console.error('Error fetching saved properties:', error);
      }
    };

    fetchSavedProperties();
  }, [userId]);

  // API functions
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



  const removeFromCart = async (cartId) => {
    try {
      await axios.delete(`${BASE_URL}/user-cart/${cartId}/`);
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
      const cartItem = cartItems.find(item => item.property_id === propertyId);

      if (isSaved) {
        // Remove from saved
        await removeFromCart(cartItem.cart_id);
        setSavedProperties(prev => prev.filter(id => id !== propertyId));
        setCartItems(prev => prev.filter(item => item.property_id !== propertyId));
      } else {
        // Add to saved
        const newItem = await addToCart(propertyId);
        setSavedProperties(prev => [...prev, propertyId]);
        setCartItems(prev => [...prev, newItem.data]);
      }
    } catch (error) {
      console.error('Error updating saved properties:', error);
      // Optionally show error to user
    } finally {
      setSaving(prev => ({ ...prev, [propertyId]: false }));
    }
  };

  const isSaved = (property) => savedProperties.includes(property.id);
  // Filter properties based on search query and selected type
  const filteredProperties = properties.filter((property) => {
    const matchesSearch = 
      property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesType = selectedType 
      ? property.title.toLowerCase().includes(selectedType.toLowerCase())
      : true;
    
    return matchesSearch && matchesType;
  });

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
 {/* Property Types */}
      <Box sx={{ px: 2 }}>
        <Typography variant="subtitle1" sx={{ mb: 1 }}>Lease Properties </Typography>
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
              onClick={() => setSelectedType(prev => (prev == type ? null : type))}
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
                  navigate('/lease-description', { state: { propertyId: property.id, property: property.propertyData } });
                }
              }}
            >
              <Box position="relative">
                {/* Carousel */}
                <Box sx={{ position: 'relative', width: '100%', height: '140px' }}>
  <CardMedia
    component="img"
    image={property.images[currentImageIndex[property.id]]}
    alt="Property"
    sx={{
      width: '100%',
      height: '140px',
      objectFit: 'cover',
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
    }}
  />
  
  {/* Left/Right Carousel Arrows (hidden by default) */}
  {property.images.length > 1 && (
    <>
      <IconButton
        sx={{
          position: 'absolute',
          top: '50%',
          left: 8,
          opacity: 0,
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(255,255,255,0.3)',
          backdropFilter: 'blur(2px)',
          '&:hover': { 
            opacity: 1,
            backgroundColor: 'rgba(255,255,255,0.5)' 
          }
        }}
        onClick={(e) => handlePrevImage(property.id, e)}
      >
        <ChevronLeft fontSize="small" />
      </IconButton>
      <IconButton
        sx={{
          position: 'absolute',
          top: '50%',
          right: 8,
          opacity: 0,
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(255,255,255,0.3)',
          backdropFilter: 'blur(2px)',
          '&:hover': { 
            opacity: 1,
            backgroundColor: 'rgba(255,255,255,0.5)' 
          }
        }}
        onClick={(e) => handleNextImage(property.id, e)}
      >
        <ChevronRight fontSize="small" />
      </IconButton>
    </>
  )}
  
  {/* Dot Indicators */}
  {property.images.length > 1 && (
    <Box
      sx={{
        position: 'absolute',
        bottom: 10,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: 1
      }}
    >
      {property.images.map((_, index) => (
        <Box
          key={index}
          onClick={(e) => {
            e.stopPropagation();
            setCurrentImageIndex(prev => ({
              ...prev,
              [property.id]: index
            }));
          }}
          sx={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            backgroundColor: currentImageIndex[property.id] == index ? '#1976d2' : '#ccc',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }}
        />
      ))}
    </Box>
  )}

                <Box sx={{ position: 'absolute', top: 6, right: 6, display: 'flex', gap: 0.8 }}>
                  <Tooltip title="Add to Wishlist">
                    <IconButton
                      sx={{ bgcolor: 'white', boxShadow: 1, p: 0.8 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSave(property);
                        
                      }}
                      disabled={saving[property.id]}
                    >
                      {isSaved(property) ? <Favorite color="error" /> : <FavoriteBorder />}
                      {saving[property.id] && <CircularProgress size={24} sx={{ position: 'absolute' }} />}
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
      {property.title}-{property.property_name}
    </Typography>
    <Typography variant="body2" fontWeight="bold" color="primary" noWrap>
    ₹{Number(String(property.price).replace(/[^0-9]/g, '')).toLocaleString('en-IN')}
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
              {selectedType ? (
                          <Typography>
                            No properties listed in the "{selectedType}" category
                          </Typography>
                        ) : (
                          <Typography>No properties found matching your search.</Typography>
                        )}
          </Box>
        )}
      </Box>
<Box sx={{mt:2}}></Box>
      <BottomNavbar />
      
    </Box>
  );
};
export default PropertyCard;