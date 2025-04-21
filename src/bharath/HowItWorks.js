import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Paper,
  useTheme,
  IconButton,
  Grid,
  useMediaQuery, BottomNavigation,
  BottomNavigationAction
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { keyframes } from '@mui/system';
import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import AddIcon from '@mui/icons-material/Add';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Steps for flowchart
const steps = [
  'Your Space',
  'Free Consultation & Analysing Scope of Work',
  'Rough Estimate Based on Floor Plan',
  '3D Presentation & Advance Payment',
  'Brief Explanation on Designing & Pricing',
  'Onsite Meeting',
  'Finalise Design',
  'Delivery',
  'Project Completion'
];

// Animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const InteriorServicesEnhanced = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
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
              navigate('/profile');
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
        boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
      }}>
        {/* Back Arrow Box - Stays at the very top */}
        <Box display="flex" alignItems="center" p={1} sx={{
          background: 'white',
          borderBottom: '1px solid rgba(0,0,0,0.08)'
        }}>
          <IconButton
            onClick={() => navigate('/interiors')}
            sx={{
              color: '#4A00E0',
              '&:hover': {
                backgroundColor: 'rgba(74, 0, 224, 0.1)'
              }
            }}
          >
            <ArrowBackIosIcon />
          </IconButton>
        </Box>

        {/* Navigation Tabs - Stays below back arrow */}
        <Box sx={{
              bgcolor: 'rgb(212, 209, 205)',
              padding: isMobile ? 2 : 2,
          borderBottom: '1px solid rgba(0,0,0,0.08)',
          marginBottom : '20px'

        }}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Link to="/constructions" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography variant={isMobile ? "h6" : "h5"} component="div">
                  Constructions
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link to="/interiors" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography variant={isMobile ? "h6" : "h5"} component="div"  sx={{ 
                    color: 'green',
                    fontWeight: 'bold'
                  }}>
                  Interiors
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Box>

        {/* Services Navigation - Stays below the main tabs */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-around', 
          p: 1, 
          bgcolor: '#fff',
          borderBottom: '1px solid rgba(0,0,0,0.08)'
        }}>
            <Link to="/interiors" style={{ textDecoration: 'none', color: 'inherit' }}>

          <Typography>Our Services</Typography>
          </Link>

          <Typography>Portfolio</Typography>
          <Typography sx={{ color: 'green', fontWeight: 'bold' }}>How it works?</Typography>
        </Box>
      </Box>

      {/* Main Content */}
      <Box sx={{ width: '100%', minHeight: '100vh',  backgroundColor:"#e7dbc9"
, pb: 12 }}>
        {/* Tagline */}
        <Typography
          variant="h6"
          sx={{ textAlign: 'center', fontWeight: 'bold', my: 3, px: 2, pt: 2 }}
        >
          "ONE STOP SOLUTION FOR ALL INTERIOR NEEDS"
        </Typography>

        {/* Vertical Flowchart */}
        <Box sx={{ position: 'relative', px: { xs: 2, sm: 6 }, py: 4 }}>
          {/* Vertical Line */}
          <Box
            sx={{
              position: 'absolute',
              top: 32,
              bottom: 0,
              left: 45,
              width: '4px',
              bgcolor: 'black',
              borderRadius: 2,
              mx: 'auto',
              height: '90%'
            }}
          />
          {steps.map((step, index) => (
            <Box
              key={index}
              sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'flex-start',
                mb: 6,
                animation: `${fadeIn} 0.6s ease-in-out forwards`,
                opacity: 0,
                animationDelay: `${index * 0.2}s`
              }}
            >
              {/* Dot */}
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  // bgcolor: theme.palette.primary.main,
                  bgcolor: '#438b98',
                  color: '#fff',
                  borderRadius: '50%',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  boxShadow: 3,
                  mr: 2,
                  flexShrink: 0
                }}
              >
                {index + 1}
              </Box>
              {/* Step */}
              <Paper
                elevation={4}
                sx={{
                  p: 2,
                  borderRadius: 2,
                  flexGrow: 1,
                  background: 'linear-gradient(90deg, #fff, #f5f7f6)',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 6
                  }
                }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  {step}
                </Typography>
              </Paper>
            </Box>
          ))}
        </Box>

        {/* Celebrate Section */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 6, px: 2 }}>
          {/* Starburst Shape */}
          <Box
            sx={{
              width: 200,
              height: 200,
              backgroundColor: '#438b98',
              clipPath:
                'polygon(50% 0%, 58% 15%, 69% 10%, 70% 25%, 83% 20%, 80% 35%, 93% 35%, 85% 50%, 93% 65%, 80% 65%, 83% 80%, 70% 75%, 69% 90%, 58% 85%, 50% 100%, 42% 85%, 31% 90%, 30% 75%, 17% 80%, 20% 65%, 7% 65%, 15% 50%, 7% 35%, 20% 35%, 17% 20%, 30% 25%, 31% 10%, 42% 15%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              color: '#000',
              mb: 3,
              boxShadow: 3,
            }}
          >
            <Typography
              sx={{
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                lineHeight: 1.6,
              }}
            >
              CELEBRATE
              <br />
              & ENJOY
              <br />
              YOUR
              <br />
              SPACE
            </Typography>
          </Box>

          {/* Tagline */}
          <Typography
            variant="h6"
            sx={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: { xs: '1rem', sm: '1.2rem' },
              maxWidth: 400,
              color: '#111',
            }}
          >
            DESIGN YOUR DREAM HOME EFFORTLESSLY, JUST A CLICK AWAY.
          </Typography>

          {/* Get Started Button */}
          <Box sx={{ px: 2, mt: 3, width: '100%', maxWidth: 400 }}>
            <Button
              fullWidth
              variant="contained"
              onClick={() => navigate('/get-started')}
              sx={{
                bgcolor: 'red',
                fontWeight: 'bold',
                fontSize: '1rem',
                py: 1.5,
                borderRadius: 8,
                boxShadow: 3,
                '&:hover': {
                  bgcolor: '#d32f2f',
                  transform: 'scale(1.03)',
                }
              }}
            >
              GET STARTED
            </Button>
          </Box>
        </Box>
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

export default InteriorServicesEnhanced;