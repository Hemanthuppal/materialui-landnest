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
import buildingImage from '../../Images/house.jpeg';
import buildingImage2 from '../../Images/house1.jpg';
import CustomSearchBar from '../../Rajesh/CustomSearchBar';
import BottomNavbar from '../BottomNavbar/BottomNavbar';

const PropertyCard = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [saved, setSaved] = useState(() => {
    const stored = localStorage.getItem('savedRent');
    return stored ? JSON.parse(stored) : [];
  });

  const [likedCards, setLikedCards] = useState({}); // 🔵 Per-card like state

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
      py: 1,
      backgroundColor: 'rgb(239, 231, 221)'
    }}
  >
    <CustomSearchBar value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
  </Box>
  <Box sx={{ pb: 8 ,backgroundColor: 'rgb(239, 231, 221)'}}>
  {filteredProperties.map((property) => (
    <Card
      key={property.id}
      sx={{
        mb: 2,
        mx: 2,
        borderRadius: 3,
        boxShadow: 2,
        transition: 'transform 0.2s ease-in-out',
        '&:hover': { transform: 'scale(1.015)', boxShadow: 4 },
      }}
      onClick={(e) => {
        const isButtonClick = e.target.closest('button') || e.target.closest('svg');
        if (!isButtonClick) {
          navigate('/rent-description', { state: { property } });
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
            height: '160px',
            objectFit: 'cover',
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
          }}
        />
        <Box sx={{ position: 'absolute', top: 6, right: 6, display: 'flex', gap: 0.8 }}>
          <Tooltip title="Add to Wishlist">
            <IconButton
              sx={{ bgcolor: 'white', boxShadow: 1, p: 0.8 }}
              onClick={() => toggleSave(property)}
            >
              {isSaved(property) ? <Favorite color="error" /> : <FavoriteBorder />}
            </IconButton>
          </Tooltip>
          <Tooltip title="Share">
            <IconButton sx={{ bgcolor: 'white', boxShadow: 1, p: 0.8 }}>
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
                p: 0.8
              }}
              onClick={() => toggleLike(property.id)}
            >
              {likedCards[property.id] ? <ThumbUpAlt /> : <ThumbUpAltOutlined />}
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      <CardContent sx={{ p: 1.5 }}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom noWrap>
          {property.title}
        </Typography>
        <Typography variant="caption" color="text.secondary" mb={0.3} noWrap>
          {property.location}
        </Typography>

        <Grid container justifyContent="space-between" alignItems="center">
          <Typography variant="body2" fontWeight="bold" color="primary">
            {property.price}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {property.date}
          </Typography>
        </Grid>

        <Box display="flex" alignItems="center" mt={1}>
          <LocationOn fontSize="small" color="action" />
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
          >
            Call
          </Button>
        </Box>

        <Divider sx={{ my: 1 }} />

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
                p: 1,
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
  ))}
</Box>


<BottomNavbar/>
    </>
  );
};

export default PropertyCard;
