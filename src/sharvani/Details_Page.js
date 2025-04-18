// PropertyCard.js
import React, { useState } from 'react';
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
  Divider,
  Tooltip,
  Paper,
  BottomNavigation,
  BottomNavigationAction
} from '@mui/material';
import {
  FavoriteBorder,
  Favorite,
  Share,
  ThumbUpAltOutlined,
  ThumbUpAlt,
  Call,
  LocationOn,
  Home as HomeIcon,
  List as ListIcon,
  Favorite as FavoriteIcon,
  Mail as MailIcon
} from '@mui/icons-material';
import buildingImage from '../Images/house.jpeg';
import buildingImage2 from '../Images/house1.jpg';
import CustomSearchBar from './../Rajesh/CustomSearchBar';

const PropertyCard = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [saved, setSaved] = useState(() => {
    const stored = localStorage.getItem('savedRent');
    return stored ? JSON.parse(stored) : [];
  });

  const [likedCards, setLikedCards] = useState({}); // 🔵 Per-card like state

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) navigate('/dashboard');
    if (newValue === 1) navigate('/details');
    if (newValue === 2) navigate('/rent-saves');
    if (newValue === 3) navigate('/inbox');
  };

  const propertyData = [
    {
      id: 1,
      title: 'Plot For Rent in Btm Layout 2nd Stage',
      location: '16th Main Road, BTM layout 2nd...',
      price: '₹3.25 Cr/m',
      date: '01-04-2025',
      facing: 'East',
      area: '1600 sq ft',
      dimensions: '40×40',
      listedBy: 'Owner/Agent',
      image: buildingImage
    },
    {
      id: 2,
      title: 'Commercial Plot for Rent near Silk Board',
      location: 'Silk Board Junction, Bangalore...',
      price: '₹2.75 Cr/m',
      date: '02-04-2025',
      facing: 'North',
      area: '1400 sq ft',
      dimensions: '35×40',
      listedBy: 'Builder',
      image: buildingImage2
    }
  ];

  const toggleSave = (property) => {
    const isSaved = saved.find((p) => p.id === property.id);
    let updated;

    if (isSaved) {
      updated = saved.filter((p) => p.id !== property.id);
    } else {
      updated = [...saved, property];
    }

    setSaved(updated);
    localStorage.setItem('savedRent', JSON.stringify(updated));
  };

  const isSaved = (property) => saved.some((p) => p.id === property.id);

  const filteredProperties = propertyData.filter((property) =>
    property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    property.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleLike = (id) => {
    setLikedCards((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <>
      
  <Box
    sx={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      bgcolor: '#fff', // background to cover content underneath
      px: 1,
      py: 1
    }}
  >
    <CustomSearchBar value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
  </Box>
      <Box sx={{ pb: 10 }}> {/* 🔵 Padding Bottom to avoid overlap */}
        {filteredProperties.map((property) => (
          <Card
            key={property.id}
            sx={{
              mb: 4,
              mx: 2,
              borderRadius: 4,
              boxShadow: 3,
              transition: 'transform 0.2s ease-in-out',
              '&:hover': { transform: 'scale(1.015)', boxShadow: 6 }
            }}
            onClick={(e) => {
              // Prevent navigation if the user clicked on a button or icon
              const isButtonClick = e.target.closest('button') || e.target.closest('svg');
              if (!isButtonClick) {
                navigate('/rent-description', { state: { property } });
              }
            }}
          >
             
            <Box position="relative">
              <CardMedia
                component="img"
                height="200"
                image={property.image}
                alt="Property"
                sx={{ borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
              />
              <Box sx={{ position: 'absolute', top: 8, right: 8, display: 'flex', gap: 1 }}>
                <Tooltip title="Add to Wishlist">
                  <IconButton
                    sx={{ bgcolor: 'white', boxShadow: 1 }}
                    onClick={() => toggleSave(property)}
                  >
                    {isSaved(property) ? <Favorite color="error" /> : <FavoriteBorder />}
                  </IconButton>
                </Tooltip>
                <Tooltip title="Share">
                  <IconButton sx={{ bgcolor: 'white', boxShadow: 1 }}>
                    <Share />
                  </IconButton>
                </Tooltip>
              </Box>
              <Box sx={{ position: 'absolute', bottom: 8, right: 8 }}>
                <Tooltip title="Like">
                  <IconButton
                    sx={{
                      bgcolor: 'white',
                      boxShadow: 1,
                      color: likedCards[property.id] ? 'blue' : 'default'
                    }}
                    onClick={() => toggleLike(property.id)}
                  >
                    {likedCards[property.id] ? <ThumbUpAlt /> : <ThumbUpAltOutlined />}
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>

            <CardContent sx={{ p: 2.5 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {property.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={1}>
                {property.location}
              </Typography>

              <Grid container justifyContent="space-between" alignItems="center">
                <Typography variant="subtitle1" fontWeight="bold" color="primary">
                  {property.price}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Listed on: {property.date}
                </Typography>
              </Grid>

              <Box display="flex" alignItems="center" mt={2}>
                <LocationOn fontSize="small" color="action" />
                <Typography variant="body2" color="text.primary" ml={0.5}>
                  Location Verified
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Button
                  size="small"
                  variant="outlined"
                  color="success"
                  startIcon={<Call />}
                  sx={{ textTransform: 'none' }}
                >
                  Call
                </Button>
              </Box>

              <Divider sx={{ my: 2 }} />

              <Box sx={{ display: 'flex', border: '1px solid #e0e0e0', borderRadius: 2, overflow: 'hidden' }}>
  {[ 
    { label: 'Facing', value: property.facing },
    { label: `Area (${property.dimensions})`, value: property.area },
    { label: 'Listed By', value: property.listedBy }
  ].map((item, index) => (
    <Box
      key={index}
      sx={{
        flex: 1,
        p: 1.5,
        textAlign: 'center',
        borderRight: index < 2 ? '1px solid #e0e0e0' : 'none'
      }}
    >
      <Typography variant="caption" color="text.secondary">{item.label}</Typography>
      <Typography variant="body2" fontWeight="bold">{item.value}</Typography>
    </Box>
  ))}
</Box>


            </CardContent>
          </Card>
        ))}
      </Box>

      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation value={value} onChange={handleChange} showLabels>
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="List" icon={<ListIcon />} />
          <BottomNavigationAction label="Saves" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Inbox" icon={<MailIcon />} />
        </BottomNavigation>
      </Paper>
    </>
  );
};

export default PropertyCard;
