import React, { useEffect, useState } from 'react';
import {
  Box, Typography, Grid, Chip, Card, CardContent, IconButton, Paper,Container
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import BedIcon from '@mui/icons-material/Bed';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import BathtubIcon from '@mui/icons-material/Bathtub';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BalconyIcon from '@mui/icons-material/Balcony';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PowerIcon from '@mui/icons-material/Power';
import CropSquareOutlinedIcon from '@mui/icons-material/CropSquareOutlined';
import CompassCalibrationOutlinedIcon from '@mui/icons-material/CompassCalibrationOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import buildingImage from '../Images/house.jpeg';
import CustomBottomNav from './CustomNav';
import { BASE_URL } from '../Api/ApiUrls';

const Buy_description = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { propertyId } = location.state || {};
  const [categories, setCategories] = useState([]);
  const [property, setProperty] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const handleImageClick = (image) => {
    setSelectedImage(image); // Update selected image
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch categories first
        const categoriesRes = await axios.get(`${BASE_URL}/property-category/`);
        setCategories(categoriesRes.data);
        
        // Then fetch property if propertyId exists
        if (propertyId) {
          const propertyRes = await axios.get(`${BASE_URL}/property/${propertyId}/`);
          setProperty(propertyRes.data);
        }
      } catch (err) {
        console.error('Failed to fetch data:', err);
      }
    };

    fetchData();
  }, [propertyId]);

  if (!property) {
    return (
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh' 
      }}>
        <Typography>Loading property...</Typography>
      </Box>
    );
  }

  // Find the category that matches the property's category_id
  const propertyCategory = categories.find(cat => cat.category_id === property.category_id);
  const categoryName = propertyCategory ? propertyCategory.category : property.type;

  const {
    property_images = [],property_name, building_image,
    type, price, location: loc,
    site_area, buildup_area,no_of_flores,
    facing, roadwidth, list, length, width,
    nearby, created_at, bedrooms_count,
    bathrooms_count, parking, balcony
  } = property;

  const images = property_images.length > 0 
    ? property_images.map(img => `${BASE_URL}${img.image}`)
    : [buildingImage];

  return (
    <Box sx={{ width: '100vw', minHeight: '100vh', backgroundColor: 'rgb(239, 231, 221)', pb: 10 }}>
      {/* Header */}
      <Box sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        bgcolor: 'rgb(49, 48, 49)',
        color: 'white',
        p: 2,
        display: 'flex',
        alignItems: 'center',
      }}>
        <IconButton onClick={() => navigate(-1)} sx={{ color: 'white', mr: 1 }}>
          <ArrowBackIosNewIcon />
        </IconButton>
        <Typography variant="h6" fontWeight="bold">
        {categoryName?.replace(/"/g, '')|| 'Property Type'} 
        </Typography>
      </Box>

      {/* Property Content */}
      <Box sx={{ pt: '80px', px: 2 }}>
        <Card sx={{
          borderRadius: '20px',
          background: 'linear-gradient(135deg, #ffffff 0%,rgb(248, 248, 248) 100%)',
          boxShadow: 5,
        }}>
          {/* Image Carousel */}
          <Carousel
           

            selectedItem={images.indexOf(selectedImage)}
            showThumbs={false}
            showArrows={false}
            autoPlay
            infiniteLoop
            interval={3000}
            showIndicators={true} // Always show bottom indicators (dots)
            showStatus={false}
            swipeable
            emulateTouch
            dynamicHeight
            stopOnHover
            transitionTime={600}
            swipeScrollTolerance={5}
            useKeyboardArrows
          >
            {images.map((image, index) => (
              <Box
                key={index}
                component="img"
                src={image}
                alt="Property"
                loading="lazy"
                sx={{
                  width: '100%',
                  height: { xs: 250, sm: 300, md: 400 },
                  objectFit: 'cover',
                  borderTopLeftRadius: '20px',
                  borderTopRightRadius: '20px',
                }}
              />
            ))}
          </Carousel>
          <Container sx={{ mt: 3 }}>
  <Box
    sx={{
      display: 'flex',
      overflowX: 'auto',
      gap: 2,
      pb: 1,
      '&::-webkit-scrollbar': { display: 'none' }, // Hide scrollbar
      scrollbarWidth: 'none', // Firefox
      msOverflowStyle: 'none', // IE and Edge
      
    }}
  >
    {images.map((image, index) => (
      <Box
        key={index}
        onClick={() => handleImageClick(image)}
        sx={{
          minWidth: 100,
          height: 80,
          borderRadius: '12px',
          overflow: 'hidden',
          position: 'relative',
          cursor: 'pointer',
          boxShadow: selectedImage === image
            ? '0px 4px 20px rgba(0, 0, 0, 0.3)'
            : '0px 2px 8px rgba(0, 0, 0, 0.1)',
          transform: selectedImage === image ? 'scale(1.08)' : 'scale(1)',
          transition: 'all 0.4s ease',
          border: selectedImage === image ? '2px solid #1976d2' : '2px solid transparent',
          flexShrink: 0,
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.2)',
          },
        }}
      >
        <Box
          component="img"
          src={image}
          alt={`Thumbnail ${index + 1}`}
          loading="lazy"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </Box>
    ))}
  </Box>
</Container>

          <CardContent>
            {/* Title & Price */}
            <Grid container justifyContent="space-between" alignItems="center" sx={{ pb: 2 }}>
  <Grid item xs={8}>
    <Typography fontWeight="bold" fontSize="18px">
      {categoryName?.replace(/"/g, '') || 'Property Type'}- {property_name?.replace(/"/g, '') || 'Property Type'}
    </Typography>
  </Grid>
  <Grid item sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
  <Typography 
  variant="caption" 
  color="text.secondary" 
  sx={{ 
    display: 'flex',
    alignItems: 'center',
    maxWidth: '200px', // Adjust as needed
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }}
>
  <LocationOnIcon sx={{ fontSize: '16px', mr: 0.5 }} />
  {loc ? `${loc.substring(0, 25)}${loc.length > 25 ? '...' : ''}` : 'Not Specified'}
</Typography>
    <Typography fontWeight="bold" fontSize="18px" color="rgb(240, 65, 30)">
      ₹{price?.toLocaleString() || 'NA'}
    </Typography>
  </Grid>
</Grid>
            {/* Basic Info */}
            <Box sx={{
  display: 'flex',
  justifyContent: 'space-between',
  bgcolor: '#ede7f6',
  borderRadius: 2,
  p: 2,
  mb: 2,
}}>
  {/* Site Area */}
  <Box sx={{ textAlign: 'center', flex: 1 }}>
    <Typography fontWeight="bold" color="primary">
      {site_area || 'NA'} sq ft
    </Typography>
    <Typography variant="caption" color="text.secondary">
      Site Area
    </Typography>
  </Box>

  {/* Road Width */}
  <Box sx={{ textAlign: 'center', flex: 1 }}>
    <Typography fontWeight="bold" color="primary">
      {roadwidth || 'NA'} ft
    </Typography>
    <Typography variant="caption" color="text.secondary">
      Road Width
    </Typography>
  </Box>

  {/* Facing */}
  <Box sx={{ textAlign: 'center', flex: 1 }}>
    <Typography fontWeight="bold" color="primary">
      {facing?.replace(/"/g, '') || 'NA'}
    </Typography>
    <Typography variant="caption" color="text.secondary">
      Facing
    </Typography>
  </Box>
</Box>

            {/* Nearby */}
            <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
              Nearby:
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
              <Chip
                label={nearby?.replace(/"/g, '') || 'Not Available'}
                sx={{
                  bgcolor: 'rgb(211, 135, 173)',
                  color: 'rgb(35, 35, 36)',
                  fontWeight: 'bold',
                  fontSize: '13px',
                }}
              />
            </Box>

            {/* Overview */}
            <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
              Overview:
            </Typography>
           
            <Box sx={{
  border: '2px solid #424242',
  borderRadius: 2,
  overflow: 'hidden',
}}>
  {[
    [
      { icon: <BedIcon fontSize="small" />, title: `${bedrooms_count || '2'} Bedroom${bedrooms_count !== 1 ? 's' : ''}`, },
      { icon: <CalendarTodayIcon fontSize="small" />, title: created_at ? new Date(created_at).toLocaleDateString('en-IN') : 'NA', subtitle: 'Posted on' },
    ],
    [
      { icon: <BathtubIcon fontSize="small" />, title: `${bathrooms_count || '3'} Bathroom${bathrooms_count !== 1 ? 's' : ''}`,  },
      { icon: <AccessTimeIcon fontSize="small" />, title: 'Immediately', subtitle: 'Available From' },
    ],
    [
      { icon: <BalconyIcon fontSize="small" />, title: balcony ? 'Available' : 'Yes', subtitle: 'Balcony' },
      { icon: <HomeWorkIcon fontSize="small" />, title: type?.replace(/"/g, '') || 'NA', subtitle: 'Property Type' },
    ],
    [
      { icon: <DirectionsCarIcon fontSize="small" />, title: parking ? 'Available' : 'NA', subtitle: 'Parking' },
      { icon: <PowerIcon fontSize="small" />, title: 'None', subtitle: 'Power Backup' },
    ],
  ].map((row, rowIndex) => (
    <Box key={rowIndex} sx={{ display: 'flex', width: '100%' }}>
      {row.map((item, colIndex) => (
        <Box
          key={colIndex}
          sx={{
            flex: '0 0 50%',
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            p: 1.5, // Slightly reduced padding
            boxSizing: 'border-box',
            borderRight: colIndex === 0 ? '1px solid #9e9e9e' : 'none',
            borderBottom: rowIndex < 3 ? '1px solid #9e9e9e' : 'none',
            minWidth: 0,
          }}
        >
          <Box sx={{ 
            color: 'rgb(50, 47, 52)', 
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
          }}>
            {item.icon}
          </Box>
          <Box sx={{ minWidth: 0, overflow: 'hidden' }}>
            <Typography 
              fontWeight={500} // Slightly reduced weight
              fontSize="0.875rem" // 14px instead of 15px
              sx={{ 
                whiteSpace: 'normal', 
                wordBreak: 'break-word',
                lineHeight: 1.3
              }}
            >
              {item.title}
            </Typography>
            <Typography 
              variant="caption" 
              color="text.secondary" 
              fontSize="0.75rem" // 12px
              sx={{ 
                whiteSpace: 'normal', 
                wordBreak: 'break-word',
                lineHeight: 1.3
              }}
            >
              {item.subtitle}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  ))}
</Box>
            {/* Final Info */}
            <Box sx={{ mt: 3, borderTop: '1px dashed #d1c4e9', pt: 2 }}>
              {[
                ['Built Up Area', `${buildup_area || 'NA'} Sq.ft`, <CropSquareOutlinedIcon />],
                ['Facing', facing?.replace(/"/g, '') || 'NA', <CompassCalibrationOutlinedIcon />],
                ['Floor', `${no_of_flores || 'NA'}`, <LayersOutlinedIcon />],
                ['Gated Security', 'No', <SecurityOutlinedIcon />],
              ].map(([label, value, icon], i) => (
                <Box
                  key={i}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mb: i !== 3 ? 1.5 : 0,
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', color: 'rgb(52, 50, 53)' }}>
                    {icon}
                    <Typography fontSize={14} sx={{ ml: 1 }} color="text.primary">
                      {label}
                    </Typography>
                  </Box>
                  <Typography fontWeight={500} color="text.primary" fontSize={14}>
                    {value}
                  </Typography>
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* Bottom Navigation */}
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <CustomBottomNav />
      </Paper>
    </Box>
  );
};

export default Buy_description;