import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Chip,
  BottomNavigation,
  BottomNavigationAction,
  Paper,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Divider from '@mui/material/Divider';

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

const Rent_description = () => {
  return (
    <Box sx={{
        width: '100vw',
        minHeight: '100vh',
        bgcolor: '#fff',
        boxSizing: 'border-box',
        pb: 7
      }}>
      {/* Header */}
      <Box sx={{ bgcolor: '#3e3e3e', color: 'white', p: 2 }}>
        <Typography variant="subtitle1" fontWeight="bold">
          1BHK House For Rent
        </Typography>
      </Box>

      {/* Image */}
      <Box sx={{ mt: 2, px: 2 }}>
        <img
          src={buildingImage}
          alt="Property"
          style={{ width: '100%', height: 200, objectFit: 'cover', borderRadius: 8 }}
        />
      </Box>

      {/* Text Section */}
      <Box sx={{ px: 2 }}>
        <Grid
          container
          justifyContent="space-between"
          alignItems="flex-start"
          wrap="nowrap"
          sx={{ borderBottom: '1px solid #e0e0e0', pb: 1, pt: 2 }}
        >
          <Grid item sx={{ flexGrow: 1, minWidth: 0 }}>
            <Typography fontWeight="bold" fontSize="16px">
              18HK House For Rent in Hitec city
            </Typography>
            <Typography variant="caption" color="text.secondary" fontSize="12px">
              Independent House, NRR Puram, near Gowldoddy, Hitec city.
            </Typography>
          </Grid>
          <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
          <Grid item sx={{ textAlign: 'right' }}>
            <Typography fontWeight="bold" fontSize="16px" color="primary">
              20k/month
            </Typography>
            <Typography variant="caption" color="text.secondary" fontSize="12px">
              Price from independent
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Info Block */}
      <Box
  sx={{
    mt: 2,
    width: 'calc(100% - 32px)',
    mx: 2,
    p: 2,
    
    borderRadius: 2,
    bgcolor: '#ffffff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxSizing: 'border-box',
  }}
>
  {[
    { label: 'Built Up Area', value: '450 Sq ft' },
    { label: 'Risk Area', value: 'NA' },
    { label: 'Land', value: 'Unverified' },
  ].map((item, index) => (
    <Box
      key={index}
      sx={{
        flex: 1,
        textAlign: 'center',
        px: 1,
        '&:not(:last-child)': {
          borderRight: '1px solid #e0e0e0'
        }
      }}
    >
      <Typography fontWeight="bold" fontSize="16px">
        {item.value}
      </Typography>
      <Typography variant="caption" color="text.secondary" fontSize="12px">
        {item.label}
      </Typography>
    </Box>
  ))}
</Box>

      {/* Nearby */}
      <Box
        sx={{
          width: 'calc(100% - 32px)',
          px: 2,
          py: 2,
          mx: 2,
          boxSizing: 'border-box',
        }}
      >
        <Typography
          variant="subtitle1"
          fontWeight="bold"
          fontSize="16px"
          gutterBottom
          sx={{ mb: 1.5 }}
        >
          Nearby:
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1,
            width: '100%',
          }}
        >
          {['ABC colony', 'Gatchbowl', 'ABC Village'].map((item, i) => (
            <Chip
              key={i}
              label={item}
              size="medium"
              sx={{
                backgroundColor: 'rgb(239, 203, 229)',
                color: '#000',
                fontSize: '14px',
                mr: 1,
                mb: 1
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Overview */}
      <Box sx={{ width: 'calc(100% - 32px)', mx: 2, mb: 3 }}>
  <Typography
    variant="subtitle1"
    fontWeight="bold"
    fontSize={16}
    gutterBottom
    sx={{ color: '#212121' }}
  >
    Overview:
  </Typography>

  <Box
    sx={{
      width: '100%',
      border: '2px solid #f8bbd0', // Outer border
      borderRadius: 2,
      bgcolor: '#ffffff',
      overflow: 'hidden',
    }}
  >
    {[
      [
        { title: '1 Bedroom', subtitle: 'No. of Bedroom', icon: <BedIcon fontSize="small" /> },
        { title: 'Mar-31-2025', subtitle: 'Posted on', icon: <CalendarTodayIcon fontSize="small" /> },
      ],
      [
        { title: '1 Bathroom', subtitle: 'No. of Bathroom', icon: <BathtubIcon fontSize="small" /> },
        { title: 'Immediately', subtitle: 'Available From', icon: <AccessTimeIcon fontSize="small" /> },
      ],
      [
        { title: 'NA', subtitle: 'Balcony', icon: <BalconyIcon fontSize="small" /> },
        { title: 'Independent', subtitle: 'Independent house', icon: <HomeWorkIcon fontSize="small" /> },
      ],
      [
        { title: 'Bike and car', subtitle: 'Parking', icon: <DirectionsCarIcon fontSize="small" /> },
        { title: 'None', subtitle: 'Power Backup', icon: <PowerIcon fontSize="small" /> },
      ],
    ].map((row, rowIndex) => (
      <Box key={rowIndex} sx={{ display: 'flex', width: '100%' }}>
        {row.map((item, colIndex) => (
          <Box
            key={colIndex}
            sx={{
              width: '50%',
              minHeight: 90,
              borderRight: colIndex === 0 ? '1px solid #f8bbd0' : 'none',
              borderBottom: rowIndex < 3 ? '1px solid #f8bbd0' : 'none',
              p: 2,
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            {/* Icon Section */}
            <Box sx={{ color: '#616161', display: 'flex', alignItems: 'center' }}>
              {item.icon}
            </Box>

            {/* Text Section */}
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Typography fontWeight={600} fontSize={15} sx={{ color: '#212121' }}>
                {item.title}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: '#616161',
                  fontSize: 13,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
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
</Box>





      {/* Final Info Grid */}
      <Box
  sx={{
    px: 2,
    py: 1.5,
    bgcolor: '#fff',
    mt: 2,
    border: '1px solid #e0e0e0',
    borderRadius: 1,
  }}
>
  {[
    ['Built Up Area', '450 Sq.ft', <CropSquareOutlinedIcon sx={{ mr: 1, color: '#616161' }} />],
    ['Facing', 'North', <CompassCalibrationOutlinedIcon sx={{ mr: 1, color: '#616161' }} />],
    ['Floor', '0/0', <LayersOutlinedIcon sx={{ mr: 1, color: '#616161' }} />],
    ['Gated Security', 'No', <SecurityOutlinedIcon sx={{ mr: 1, color: '#616161' }} />],
  ].map(([label, value, icon], i) => (
    <Box
      key={i}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: i < 3 ? '1px solid #e0e0e0' : 'none',
        py: 1.2,
        px: 1,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {icon}
        <Typography variant="body2" fontSize="14px" color="#212121">
          {label}
        </Typography>
      </Box>
      <Typography variant="body2" fontSize="14px" fontWeight={500} color="#212121">
        {value}
      </Typography>
    </Box>
  ))}
</Box>


      {/* Bottom Navigation */}
      <Paper
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          maxWidth: 430,
          mx: 'auto',
          borderTop: '1px solid #ccc',
          bgcolor: '#fff',
        }}
        elevation={3}
      >
        <BottomNavigation showLabels sx={{ bgcolor: '#fff' }}>
          <BottomNavigationAction
            label="Home"
            icon={<HomeIcon sx={{ color: '#666' }} />}
            sx={{ color: '#666', fontSize: '12px' }}
          />
          <BottomNavigationAction
            label="List"
            icon={<FormatListBulletedIcon sx={{ color: '#666' }} />}
            sx={{ color: '#666', fontSize: '12px' }}
          />
          <BottomNavigationAction
            label="Saves"
            icon={<FavoriteBorderIcon sx={{ color: '#666' }} />}
            sx={{ color: '#666', fontSize: '12px' }}
          />
          <BottomNavigationAction
            label="Inbox"
            icon={<MailOutlineIcon sx={{ color: '#666' }} />}
            sx={{ color: '#666', fontSize: '12px' }}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

export default Rent_description;