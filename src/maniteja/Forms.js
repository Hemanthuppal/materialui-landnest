import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  Stack,
  useMediaQuery,
  Paper,
  Button
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import img1 from '../Images/vendorcard.jpg';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
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
  const navigate = useNavigate();

  const handleBackClick = () => navigate(-1);

  return (
    <>
      <SearchBar
        onBackClick={handleBackClick}
      />

      <Box
        sx={{
          px: 2,
          pt: 10,
          pb: 10,
          maxWidth: '100%',
          mx: 'auto',
          minHeight: '100vh',
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
                  height: 100,
                  borderTopLeftRadius: '40px', // ✅ Simplified border-radius logic
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
                      transform: 'rotate(180deg)', // 🔁 Rotates the text 180 degrees
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

                {/* ✅ Fixed fallback to only centerText as label isn't defined in options */}
                <Typography
                  sx={{
                    flexGrow: 1,
                    textAlign: 'center',
                    whiteSpace: 'pre-line', // ✅ To support line breaks
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
                      transform: 'rotate(180deg)', // 🔁 Rotates the text 180 degrees
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
                bgcolor: '#D6C0B3',
                height: 100,
                borderTopLeftRadius: '40px',
                borderBottomRightRadius: '40px',
                borderTopRightRadius: '10px',
                borderBottomleftRadius: '10px',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.03)',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
                },
              }}
            >
              <Box
                sx={{
                  width: 60,
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
                    width: 55,
                    height: 55,
                    border: '2px solid #fff',
                  }}
                />
              </Box>
              <Typography
                variant="body1"
                sx={{
                  ml: 2,
                  fontWeight: 600,
                  fontSize: isMobile ? '14px' : '18px',
                  color: '#333',
                }}
              >
                Vendors Registration
              </Typography>
            </Paper>
          </Box>
        </Stack>
        <FormsBottomNavbar />
      </Box>
    </>
  );
};

export default Forms;




// import React from "react";
// import { Box, Typography, Stack } from "@mui/material";

// const cardData = [
//   { title: "Post Your Property with Landnest" },
//   { title: "Sell Your Property" },
//   { title: "Rent Your Property" },
//   { title: "Lease Your Property" },
// ];

// const Forms = () => {
//   return (
//     <Stack spacing={3} sx={{ p: 3, alignItems: "center" }}>
//       {cardData.map((card, index) => (
//         <Box
//           key={index}
//           sx={{
//             width: 360,
//             height: 80,
//             position: "relative",
//             transform: "skewX(-15deg)",
//             backgroundColor: "#d4c5af",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             boxShadow: 3,
//             borderRadius: "25px",
//             overflow: "hidden",
//           }}
//         >
//           {/* Un-skew content inside */}
//           <Box
//             sx={{
//               transform: "skewX(15deg)",
//               textAlign: "center",
//               px: 2,
//             }}
//           >
//             <Typography variant="subtitle1" fontWeight="bold">
//               {card.title}
//             </Typography>
//           </Box>
//         </Box>
//       ))}
//     </Stack>
//   );
// };

// export default Forms;

