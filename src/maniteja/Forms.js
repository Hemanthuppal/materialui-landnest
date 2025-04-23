import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  Stack,
  useMediaQuery,
  Paper
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import img1 from '../Images/vendorcard.jpg';
import FormsBottomNavbar from './FormsBottomNavbar';
import SearchBar from './PostBack';

// Array of form navigation options
const options = [
  {
    leftLabel: "Best",
    rightLabel: "Deals",
    centerText: "Post Your Property\nwith Landnest",
    path: "/postyourbestdeal-form"
  },
  {
    leftLabel: "  ",
    rightLabel: "   ",
    centerText: "Sell Your Property",
    path: "/sellyourproperty-form"
  },
  {
    leftLabel: "   ",
    rightLabel: "   ",
    centerText: "Rent Your Property",
    path: "/rent-form"
  },
  {
    leftLabel: "   ",
    rightLabel: "   ",
    centerText: "Lease Your Property",
    path: "/lease-form"
  },
];

const Forms = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  // ✅ Detect iPhone SE specifically (375w x 667h)
const isiPhoneSE = useMediaQuery('(max-width: 376px) and (max-height: 670px)');


  // ✅ Detect extra small screens (iPhone SE, Samsung S8+)
  const isSmallScreen = useMediaQuery('(max-width: 376px)');
  const cardHeight = isSmallScreen ? 90 : 110; // ✅ Responsive card height

  const navigate = useNavigate();
  const handleBackClick = () => navigate(-1);

  return (
    <>
      <SearchBar onBackClick={handleBackClick} />

      <Box
        sx={{
          px: 2,
          pt: 10,
          pb: 2,
          maxWidth: '100%',
          mx: 'auto',
          minHeight: isiPhoneSE ? '100vh' : '82vh', // ✅ Conditional height
          backgroundImage: 'url(https://www.transparenttextures.com/patterns/cubes.png)', // ✅ Pattern background
          backgroundColor: '#f5f5f5', // ✅ Fallback background
        }}
      >
        <Stack spacing={3}>
          {options.map((item, index) => (
            <Box key={index} onClick={() => navigate(item.path)} sx={{ cursor: 'pointer' }}>
              <Paper
                elevation={4}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  bgcolor: '#D6C0B3',
                  height: cardHeight, // ✅ Responsive card height
                  borderTopLeftRadius: '40px',
                  borderBottomRightRadius: '40px',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.03)',
                    boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
                  },
                }}
              >
                {item.leftLabel && (
                  <Box
                    sx={{
                      width: 40,
                      height: '99%',
                      bgcolor: '#343a40',
                      color: '#fff',
                      writingMode: 'vertical-rl',
                      transform: 'rotate(180deg)',
                      textAlign: 'center',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 12,
                      fontWeight: 600,
                      borderTopRightRadius: '5px',
                      borderBottomRightRadius: '40px',
                    }}
                  >
                    {item.leftLabel}
                  </Box>
                )}

                <Typography
                  sx={{
                    flexGrow: 1,
                    textAlign: 'center',
                    whiteSpace: 'pre-line',
                    fontWeight: 600,
                    fontSize: isMobile ? '14px' : '16px',
                    color: '#333',
                  }}
                >
                  {item.centerText}
                </Typography>

                {item.rightLabel && (
                  <Box
                    sx={{
                      width: 40,
                      height: '100%',
                      bgcolor: '#343a40',
                      color: '#fff',
                      writingMode: 'vertical-rl',
                      transform: 'rotate(180deg)',
                      textAlign: 'center',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 12,
                      fontWeight: 600,
                      borderBottomLeftRadius: '5px',
                      borderTopLeftRadius: '40px',
                    }}
                  >
                    {item.rightLabel}
                  </Box>
                )}
              </Paper>
            </Box>
          ))}

          {/* ✅ Vendor Registration Section */}
          <Box onClick={() => navigate('/vendor-form')} sx={{ cursor: 'pointer' }}>
            <Paper
              elevation={4}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                bgcolor: '#D6C0B3',
                height: cardHeight, // ✅ Responsive height
                borderTopLeftRadius: '40px',
                borderBottomRightRadius: '40px',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.03)',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
                },
              }}
            >
              {/* Avatar and Text */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexGrow: 1,
                }}
              >
                <Box
                  sx={{
                    width: 90,
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Avatar
                    src={img1}
                    alt="Vendor"
                    sx={{
                      width: 100,
                      height: 100,
                      border: '2px solid #fff',
                    }}
                  />
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    ml: 5,
                    fontWeight: 600,
                    fontSize: isMobile ? '14px' : '18px',
                    color: '#333',
                  }}
                >
                  Vendors Registration
                </Typography>
              </Box>

              {/* ✅ Right Label Added */}
              <Box
                sx={{
                  width: 40,
                  height: '100%',
                  bgcolor: '#343a40',
                  color: '#fff',
                  writingMode: 'vertical-rl',
                  transform: 'rotate(180deg)',
                  textAlign: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 12,
                  fontWeight: 600,
                  borderBottomLeftRadius: '5px',
                  borderTopLeftRadius: '40px',
                }}
              >
                
              </Box>
            </Paper>
          </Box>
        </Stack>
      </Box>

      <FormsBottomNavbar />
    </>
  );
};

export default Forms;
