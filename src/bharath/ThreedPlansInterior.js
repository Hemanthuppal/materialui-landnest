import React, { useEffect, useState } from 'react';
import {
  Box, Card, CardMedia, CardContent, Typography, IconButton, Grid,
  useMediaQuery, useTheme, BottomNavigation,
  BottomNavigationAction,   Paper
} from '@mui/material';
import pic1 from './Images/3d-pic1.jpg';
import pic2 from './Images/3d-pic2.jpg';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import AddIcon from '@mui/icons-material/Add';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const data = [
  {
    id: 1,
    title: '3D Visualization',
    image: pic1
  },
  {
    id: 2,
    title: 'Virtual Walkthrough',
    image: pic1
  },
  {
    id: 3,
    title: 'Interior Renderings',
    image: pic2
  },
  {
    id: 4,
    title: 'Space Planning',
    image: pic2
  },
  {
    id: 5,
    title: 'Lighting Simulation',
    image: pic1
  },
  {
    id: 6,
    title: 'Material Selection',
    image: pic2
  },
  {
    id: 7,
    title: 'Furniture Layout',
    image: pic1
  },
  {
    id: 8,
    title: 'Final Presentation',
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

const ThreedPlansInterior = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const rows = chunkArray(data, 2);
   const [value, setValue] = useState('construction');
      const handleChange = (event, newValue) => {
        setValue(newValue);
        // Navigate to the corresponding route
        switch (newValue) {
          case 'home':
            navigate('/dashboard');
            break;
          case 'construction':
            navigate('/constructions');
            break;
          case 'post':
            navigate('/post');
            break;
          case 'services':
            navigate('/home-service');
            break;
          case 'profile':
            navigate('/work-detail');
            break;
          default:
            navigate('/');
        }
      };

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
              bgcolor: 'rgb(212, 209, 205)',
              padding: isMobile ? 2 : 2,
          borderBottom: '1px solid rgba(0,0,0,0.08)'
        }}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Link to="/constructions" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography variant={isMobile ? "h6" : "h5"} component="div" sx={{ color: 'green', fontWeight: 'bold' }}>
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
   

      {/* Content Cards */}
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: 2, 
        px: 2,
        pb: 10,
        mt: 2, 
        backgroundColor: '#e7dbc9',
      }}>

<Typography
        variant="h5"
        align="center"
        fontWeight="bold"
        sx={{
          mt: 3,
          fontSize: isMobile ? '1.5rem' : '2rem'
        }}
      >
        3D Plans Interior
      </Typography>
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

      <Paper
            sx={{
              position: 'fixed',
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 1000,
            }}
            elevation={3}
          >
            <BottomNavigation
              value={value}
              onChange={handleChange}
              showLabels
              sx={{
                borderTop: '1px solid #e0e0e0',
                height: '60px',
                '& .MuiBottomNavigationAction-root': {
                  minWidth: 'auto',
                  padding: '6px 0',
                  color: 'black',
                },
                '& .MuiBottomNavigationAction-label': {
                  fontSize: '0.7rem',
                },
              }}
            >
              <BottomNavigationAction
                value="home"
                label="Home"
                icon={<HomeIcon sx={{ fontSize: '1.3rem' }} />}
              />
              <BottomNavigationAction
                value="construction"
                label="Construction & Interiors"
                icon={<BuildIcon sx={{ fontSize: '1.3rem' }} />}
              />
              <BottomNavigationAction
                value="post"
                label="Post"
                icon={<AddIcon sx={{ fontSize: '1.3rem' }} />}
                sx={{
                  '& .MuiSvgIcon-root': { color: '#2196f3' },
                  '& .MuiBottomNavigationAction-label': { color: '#2196f3' }
                }}
              />
              <BottomNavigationAction
                value="services"
                label="Home Services"
                icon={<CleaningServicesIcon sx={{ fontSize: '1.3rem' }} />}
              />
              <BottomNavigationAction
                value="profile"
                label="Profile"
                icon={<AccountCircleIcon sx={{ fontSize: '1.3rem' }} />}
              />
            </BottomNavigation>
                </Paper>
    </>
  );
};

export default ThreedPlansInterior;