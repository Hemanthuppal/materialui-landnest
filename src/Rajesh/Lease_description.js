import React, { useEffect, useState } from 'react';
import {
  Box, Typography, Grid, Chip, Card, CardContent, IconButton, Paper
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
import buildingImage from '../Images/house.jpeg';
import CustomBottomNav from './CustomBottomNav';
import { BASE_URL } from './../Api/ApiUrls';

const Lease_description = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { propertyId } = location.state || {};
  const [categories, setCategories] = useState([]);
  const [property, setProperty] = useState(null);


  useEffect(() => {
    // Fetch categories first
    axios.get('http://46.37.122.105:89/property-category/')
      .then((res) => {
        setCategories(res.data);
        // Then fetch property if propertyId exists
        if (propertyId) {
          axios.get(`http://46.37.122.105:89/property/${propertyId}/`)
            .then((propertyRes) => setProperty(propertyRes.data))
            .catch((err) => console.error('Failed to fetch property:', err));
        }
      })
      .catch((err) => console.error('Failed to fetch categories:', err));
  }, [propertyId]);

  
  if (!property) {
    return <Typography sx={{ mt: 10, textAlign: 'center' }}>Loading property...</Typography>;
  }
// Find the category that matches the property's category_id
const propertyCategory = categories.find(cat => cat.category_id === property.category_id);
const categoryName = propertyCategory ? propertyCategory.category : property.type;
  const {
    property_images = [],
    type, price, location: loc,
    site_area, buildup_area,
    facing, roadwidth, list,length,width,
    nearby, created_at, bedrooms_count,
    bathrooms_count, parking, balcony
  } = property;

  const imageUrl = property_images?.[0]?.image
    ? `http://46.37.122.105:89${property_images[0].image}`
    : buildingImage;

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
          {/* {type?.replace(/"/g, '') || 'Property'} */}
          Lease
        </Typography>
      </Box>

      {/* Property Content */}
      <Box sx={{ pt: '80px', px: 2 }}>
        <Card sx={{
          borderRadius: '20px',
          background: 'linear-gradient(135deg, #ffffff 0%,rgb(248, 248, 248) 100%)',
          boxShadow: 5,
        }}>
          <Box component="img" src={imageUrl} alt="Property" sx={{
            width: '100%', height: 220, objectFit: 'cover',
            borderTopLeftRadius: '20px', borderTopRightRadius: '20px',
          }} />

          <CardContent>
            {/* Title & Price */}
            <Grid container justifyContent="space-between" alignItems="center" sx={{ pb: 2 }}>
              <Grid item xs={8}>
                <Typography fontWeight="bold" fontSize="18px">
                  {categoryName?.replace(/"/g, '') || 'Property Type'}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {loc || 'Not Specified'}
                </Typography>
              </Grid>
              <Grid item sx={{ textAlign: 'right' }}>
                <Typography fontWeight="bold" fontSize="18px" color="rgb(240, 65, 30)">
                  ₹{price?.toLocaleString()}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Listed by {list?.replace(/"/g, '') || 'Owner'}
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
              <Box sx={{ textAlign: 'center', flex: 1 }}>
                <Typography fontWeight="bold" color="primary">
                  {site_area || 'NA'} sq ft
                </Typography>
                <Typography variant="caption">Site Area</Typography>
              </Box>
              <Box sx={{ textAlign: 'center', flex: 1 }}>
                <Typography fontWeight="bold" color="primary">
                  {roadwidth || 'NA'} ft
                </Typography>
                <Typography variant="caption">Road Width</Typography>
              </Box>
              <Box sx={{ textAlign: 'center', flex: 1 }}>
                <Typography fontWeight="bold" color="primary">
                  {facing?.replace(/"/g, '') || 'NA'}
                </Typography>
                <Typography variant="caption">Facing</Typography>
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
                  { icon: <BedIcon />, title: `${bedrooms_count || 'NA'} Bedroom${bedrooms_count !== 1 ? 's' : ''}`, subtitle: 'No. of Bedrooms' },
                  { icon: <CalendarTodayIcon />, title: created_at?.split('T')[0] || 'NA', subtitle: 'Posted on' },
                ],
                [
                  { icon: <BathtubIcon />, title: `${bathrooms_count || 'NA'} Bathroom${bathrooms_count !== 1 ? 's' : ''}`, subtitle: 'No. of Bathrooms' },
                  { icon: <AccessTimeIcon />, title: 'Immediately', subtitle: 'Available From' },
                ],
                [
                  { icon: <BalconyIcon />, title: balcony ? 'Available' : 'NA', subtitle: 'Balcony' },
                  { icon: <HomeWorkIcon />, title: type?.replace(/"/g, '') || 'NA', subtitle: 'Property Type' },
                ],
                [
                  { icon: <DirectionsCarIcon />, title: parking ? 'Available' : 'NA', subtitle: 'Parking' },
                  { icon: <PowerIcon />, title: 'None', subtitle: 'Power Backup' },
                ],
              ].map((row, rowIndex) => (
                <Box key={rowIndex} sx={{ display: 'flex' }}>
                  {row.map((item, colIndex) => (
                    <Box
                      key={colIndex}
                      sx={{
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        p: 2,
                        borderRight: colIndex === 0 ? '1px solid #9e9e9e' : 'none',
                        borderBottom: rowIndex < 3 ? '1px solid #9e9e9e' : 'none',
                      }}
                    >
                      <Box sx={{ color: 'rgb(50, 47, 52)' }}>{item.icon}</Box>
                      <Box>
                        <Typography fontWeight={600} fontSize="15px">
                          {item.title}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
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
                ['Floor', '0/0', <LayersOutlinedIcon />],
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

export default Lease_description;