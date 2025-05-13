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
  Menu,
  MenuItem
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
    ChevronRight,
        MoreVert,
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
   const [anchorEl, setAnchorEl] = useState(null);
    const [menuPropertyId, setMenuPropertyId] = useState(null);
  // const [saved, setSaved] = useState(() => {
  //   const stored = localStorage.getItem('savedBuy');
  //   return stored ? JSON.parse(stored) : [];
  // });
  const [likedCards, setLikedCards] = useState({});
  const [properties, setProperties] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState({});


  
  const handleShare = (event, property) => {
    event.stopPropagation();
    alert(`Share clicked for: ${property.title}`);
  };

  const handleMenuOpen = (event, propertyId) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
    setMenuPropertyId(propertyId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuPropertyId(null);
  };
const handleEdit = () => {
  navigate(`/user-edit-lease/${menuPropertyId}`);
};

const handleDelete = async () => {
  const confirmDelete = window.confirm(`Are you sure you want to delete property ID ${menuPropertyId}?`);

  if (!confirmDelete) {
    // User clicked "No"
    // handleMenuClose();
    return;
  }

  try {
    const response = await fetch(`${BASE_URL}/property/${menuPropertyId}/`, {
      method: 'DELETE',
    });

    if (response.ok) {
      alert(`Property ID ${menuPropertyId} deleted successfully.`);
      // Optionally refresh your data or remove the item from the UI
    } else {
      const errorData = await response.json();
      alert(`Failed to delete property ID ${menuPropertyId}. Reason: ${errorData.detail || 'Unknown error'}`);
    }
  } catch (error) {
    console.error('Error deleting property:', error);
    alert('An error occurred while trying to delete the property.');
  } finally {
    handleMenuClose();
  }
};



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
 
           const matchedCategory = categoriesResponse.data.find(
             cat => cat.category_id === item.category_id
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
       const property = properties.find(p => p.id === propertyId);
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
       const property = properties.find(p => p.id === propertyId);
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
          const currentLat = position.coords.latitude
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
  
  

  const filteredProperties = properties.filter((property) =>
    property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    property.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

 

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
                  // navigate('/lease-description', { state: { propertyId: property.id, property: property.propertyData } });
                }
              }}
            >
              <Box position="relative">
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
                            backgroundColor: currentImageIndex[property.id] === index ? '#1976d2' : '#ccc',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s'
                          }}
                        />
                      ))}
                    </Box>
                  )}

                <Box sx={{ position: 'absolute', top: 6, right: 6, display: 'flex', gap: 1 }}>
                               <Tooltip title="Share">
                                 <IconButton
                                   size="small"
                                   sx={{ bgcolor: 'white' }}
                                   onClick={(e) => handleShare(e, property)}
                                 >
                                   <Share fontSize="small" />
                                 </IconButton>
                               </Tooltip>
               
                               <Tooltip title="More Options">
                                 <IconButton
                                   size="small"
                                   sx={{ bgcolor: 'white' }}
                                   onClick={(e) => handleMenuOpen(e, property.id)}
                                 >
                                   <MoreVert fontSize="small" />
                                 </IconButton>
                               </Tooltip>
                             </Box>
                             <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              >
                <MenuItem onClick={handleEdit}>Edit</MenuItem>
                <MenuItem onClick={handleDelete}>Delete</MenuItem>
              </Menu>
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
                    Location Verified
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
                    { label: `Area `, value: property.area },
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