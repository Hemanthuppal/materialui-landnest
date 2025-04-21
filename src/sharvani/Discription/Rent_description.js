
import {React,useState} from 'react';
import {
  Box,
  Typography,
  Grid,
  Chip,
 
  Card,
  CardContent,
  IconButton,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';

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

import buildingImage from '../../Images/house.jpeg';
import BottomNavbar from '../BottomNavbar/BottomNavbar';

const Rent_description = () => {
  const navigate = useNavigate();
  

  return (
    <Box sx={{ width: '100vw', minHeight: '100vh', bgcolor: ' #f8f9fa', pb: 10 ,backgroundColor: 'rgb(239, 231, 221)'}}>
      {/* Header with Back Button */}
      <Box
  sx={{
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10, // Ensure it's above other elements
    bgcolor: 'rgb(49, 48, 49)',
    color: 'white',
    p: 2,
    display: 'flex',
    alignItems: 'center',
  }}
>
  <IconButton onClick={() => navigate(-1)} sx={{ color: 'white', mr: 1 }}>
    <ArrowBackIosNewIcon />
  </IconButton>
  <Typography variant="h6" fontWeight="bold">
    1BHK House For Rent
  </Typography>
</Box>


      {/* Details Card */}
      <Box sx={{ px: 2, mt: 10 }}>
        <Card
          sx={{
            borderRadius: '20px',
            background: 'linear-gradient(135deg, #ffffff 0%,rgb(248, 248, 248) 100%)',
            boxShadow: 5,
          }}
        >
          {/* Image */}
          <Box
            component="img"
            src={buildingImage}
            alt="Property"
            sx={{
              width: '100%',
              height: 220,
              objectFit: 'cover',
              borderTopLeftRadius: '20px',
              borderTopRightRadius: '20px',
            }}
          />

          <CardContent>
            {/* Title & Price */}
            <Grid container justifyContent="space-between" alignItems="center" sx={{ pb: 2 }}>
              <Grid item xs={8}>
                <Typography fontWeight="bold" fontSize="18px">
                  1BHK House For Rent in Hitec City
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  NRR Puram, Gowldoddy, Hitec City.
                </Typography>
              </Grid>
              <Grid item sx={{ textAlign: 'right' }}>
                <Typography fontWeight="bold" fontSize="18px" color="rgb(240, 65, 30)">
                  ₹20,000/month
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Price from owner
                </Typography>
              </Grid>
            </Grid>

            {/* Basic Info */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                bgcolor: ' #ede7f6',
                borderRadius: 2,
                p: 2,
                mb: 2,
              }}
            >
              {[
                { label: 'Built Up Area', value: '450 Sq ft' },
                { label: 'Risk Area', value: 'NA' },
                { label: 'Land', value: 'Unverified' },
              ].map((item, i) => (
                <Box key={i} sx={{ textAlign: 'center', flex: 1 }}>
                  <Typography fontWeight="bold" color="primary">
                    {item.value}
                  </Typography>
                  <Typography variant="caption">{item.label}</Typography>
                </Box>
              ))}
            </Box>

            {/* Nearby */}
            <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
              Nearby:
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
              {['ABC Colony', 'Gachibowli', 'ABC Village'].map((place, i) => (
                <Chip
                  key={i}
                  label={place}
                  sx={{
                    bgcolor: 'rgb(211, 135, 173)',
                    color: 'rgb(35, 35, 36)',
                    fontWeight: 'bold',
                    fontSize: '13px',
                  }}
                />
              ))}
            </Box>

            {/* Overview */}
            <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
              Overview:
            </Typography>
            <Box
              sx={{
                border: '2px solid #424242',
                borderRadius: 2,
                overflow: 'hidden',
              }}
            >
              {[
                [
                  { icon: <BedIcon />, title: '1 Bedroom', subtitle: 'No. of Bedrooms' },
                  { icon: <CalendarTodayIcon />, title: 'Mar-31-2025', subtitle: 'Posted on' },
                ],
                [
                  { icon: <BathtubIcon />, title: '1 Bathroom', subtitle: 'No. of Bathrooms' },
                  { icon: <AccessTimeIcon />, title: 'Immediately', subtitle: 'Available From' },
                ],
                [
                  { icon: <BalconyIcon />, title: 'NA', subtitle: 'Balcony' },
                  { icon: <HomeWorkIcon />, title: 'Independent', subtitle: 'Property Type' },
                ],
                [
                  { icon: <DirectionsCarIcon />, title: 'Bike and Car', subtitle: 'Parking' },
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
                ['Built Up Area', '450 Sq.ft', <CropSquareOutlinedIcon />],
                ['Facing', 'North', <CompassCalibrationOutlinedIcon />],
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
<BottomNavbar/>
    </Box>
  );
};

export default Rent_description;


