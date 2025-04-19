import React from 'react';
import {
  Box, Card, CardMedia, CardContent, Typography, IconButton, Grid,
  useMediaQuery, useTheme,
} from '@mui/material';
import pic1 from './Images/2d-pic1.jpg';
import pic2 from './Images/2d-pic2.jpg';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';
import BottomNavbar from '../sharvani/BottomNavbar';

const data = [
  {
    id: 1,
    title: '2D Plans',
    image: pic1
  },
  {
    id: 2,
    title: 'Floor Plans',
    image: pic1
  },
  {
    id: 3,
    title: 'Layout Designs',
    image: pic2
  },
  {
    id: 4,
    title: 'Space Planning',
    image: pic2
  },
  {
    id: 5,
    title: 'Measurement Plans',
    image: pic1
  },
  {
    id: 6,
    title: 'Structural Drawings',
    image: pic2
  },
  {
    id: 7,
    title: 'Elevation Views',
    image: pic1
  },
  {
    id: 8,
    title: 'Section Drawings',
    image: pic2
  }
];

const chunkArray = (array, chunkSize) => {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const TwodPlansInterior = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const rows = chunkArray(data, 2);

  return (
    <>
      {/* Sticky Header Section */}
      <Box sx={{
        position: 'sticky',
        top: 0,
        zIndex: 1200,
        bgcolor: 'background.paper',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        {/* Back Arrow */}
        <Box display="flex" alignItems="center" p={1} sx={{
          background: 'white',
          borderBottom: '1px solid rgba(0,0,0,0.08)'
        }}>
          <IconButton
            onClick={() => navigate('/constructions')}
            sx={{
              color: '#4A00E0',
              '&:hover': { backgroundColor: 'rgba(74, 0, 224, 0.1)' }
            }}
          >
            <ArrowBackIosIcon />
          </IconButton>
        </Box>

        {/* Construction/Interior Navigation */}
        <Box sx={{
          backgroundColor: '#e6f2ff',
          padding: isMobile ? 2 : 2,
          borderBottom: '1px solid rgba(0,0,0,0.08)'
        }}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Link to="/constructions" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography variant={isMobile ? "h6" : "h5"} component="div"  sx={{ color: 'green', fontWeight: 'bold' }}>
                  Constructions
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link to="/interiors" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography variant={isMobile ? "h6" : "h5"} component="div">
                  Interiors
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Page Title */}
      <Typography
        variant="h5"
        align="center"
        fontWeight="bold"
        sx={{
          mt: 3,
          mb: 2,
          fontSize: isMobile ? '1.5rem' : '2rem'
        }}
      >
        2D Plans Interior
      </Typography>

      {/* Content Cards */}
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: 2, 
        px: 2,
        pb: 10,
        mt: 2
      }}>
        {rows.map((row, rowIndex) => (
          <Box
            key={rowIndex}
            display="flex"
            gap={2}
          >
            {row.map((item) => (
              <Card
                key={item.id}
                sx={{ 
                  flex: 1,
                  borderRadius: 2,
                  boxShadow: 3,
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    transition: 'transform 0.3s ease'
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="160"
                  image={item.image}
                  alt={item.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ padding: '12px' }}>
                  <Typography variant="subtitle1" align="center" fontWeight="bold">
                    {item.title}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        ))}
      </Box>

      {/* Bottom Navigation */}
      <Box sx={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 1000 }}>
        <BottomNavbar />
      </Box>
    </>
  );
};

export default TwodPlansInterior;