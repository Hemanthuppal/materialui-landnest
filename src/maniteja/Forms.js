import React from 'react';
import { Box, Typography, Avatar, Stack, useMediaQuery, Paper, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Home, Sell, Apartment, Work } from '@mui/icons-material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from 'react-router-dom';
import img1 from '../Images/vendorform.jpg';

const options = [
  { label: "Post Your Property\nwith Landinest", icon: <Home />, vertical: true, path: "/postyourbestdeal-form" },
  { label: "Sell Your Property", icon: <Sell />, path: "/sellyourproperty-form" },
  { label: "Rent Your Property", icon: <Apartment />, path: "/rent-form" },
  { label: "Lease Your Property", icon: <Work />, path: "/lease-form" },
];

const Forms = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        px: 2,
        pt: 3,
        pb: 10,
        maxWidth: "100%",
        mx: "auto",
        bgcolor: "linear-gradient(to right, #f5f5f5, #eae0d5)",
        minHeight: "100vh",
        backgroundImage: "url(https://www.transparenttextures.com/patterns/cubes.png)",
      }}
    >
      {/* Back Button */}
      <Button
        startIcon={<ArrowBackIosNewIcon />}
        onClick={() => navigate(-1)}
        sx={{
          mb: 1,
          fontWeight: 600,
          color: "#333",
          '&:hover': {
            backgroundColor: '#e0e0e0',
          }
        }}
      >
        Back
      </Button>

      {/* Header Banner */}
      <Box
        sx={{
          mb: 3,
          borderRadius: 4,
          overflow: 'hidden',
          boxShadow: 3,
        }}
      >
        <img
          src={img1}
          alt="Vendor Form"
          style={{
            width: '100%',
            height: isMobile ? '150px' : '250px',
            objectFit: 'cover',
          }}
        />
      </Box>

      <Stack spacing={3}>
        {/* Property Options */}
        {options.map((item, index) => (
          <Box key={index} onClick={() => navigate(item.path)} sx={{ cursor: 'pointer' }}>
            <Paper
              elevation={4}
              sx={{
                display: "flex",
                alignItems: "center",
                bgcolor: "#D6C0B3",
                borderRadius: "20px",
                height: isMobile ? 70 : 90,
                backdropFilter: "blur(10px)",
                transition: "transform 0.3s ease",
                '&:hover': {
                  transform: "scale(1.03)",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
                },
              }}
            >
              <Box
                sx={{
                  width: 60,
                  height: "100%",
                  bgcolor: "#343a40",
                  color: "#fff",
                  writingMode: item.vertical ? "vertical-rl" : "horizontal-tb",
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderTopLeftRadius: "20px",
                  borderBottomLeftRadius: "20px",
                  fontSize: 18,
                }}
              >
                {item.icon}
              </Box>
              <Typography
                variant="body1"
                sx={{
                  ml: 3,
                  fontWeight: 600,
                  fontSize: isMobile ? "15px" : "18px",
                  whiteSpace: "pre-line",
                  color: "#333",
                }}
              >
                {item.label}
              </Typography>
            </Paper>
          </Box>
        ))}

        {/* Vendor Registration Box */}
        <Box onClick={() => navigate("/vendor-form")} sx={{ cursor: 'pointer' }}>
          <Paper
            elevation={4}
            sx={{
              display: "flex",
              alignItems: "center",
              bgcolor: "rgba(255,255,255,0.85)",
              borderRadius: "20px",
              height: isMobile ? 70 : 90,
              backdropFilter: "blur(10px)",
              transition: "transform 0.3s ease",
              '&:hover': {
                transform: "scale(1.03)",
                boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
              },
            }}
          >
            <Avatar
              src={img1}
              alt="Vendor"
              sx={{ width: 55, height: 55, m: 2, border: "2px solid #fff" }}
            />
            <Typography
              variant="body1"
              sx={{
                fontWeight: 600,
                fontSize: isMobile ? "15px" : "18px",
                color: "#333",
              }}
            >
              Vendors Registration
            </Typography>
          </Paper>
        </Box>
      </Stack>
    </Box>
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

