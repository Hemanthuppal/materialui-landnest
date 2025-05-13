// import React from 'react';
// import { Box, Typography, Button, Container, Grid, Card, CardContent, useTheme, useMediaQuery, IconButton } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import { Link } from 'react-router-dom';
// import BottomNavbar from '../sharvani/BottomNavbar';

// const Interiors = () => {

//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//   const navigate = useNavigate();


//   const cards = [
//     {
//       title: "Full Time Interiors",
//       description: "Professional 2D plans with detailed measurements",
//       bgImage: 'url(https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
//     },
//     {
//       title: "Commercial Spaces Interiors",
//       description: "Professional 2D plans with detailed measurements",
//       bgImage: 'url(https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
//     },
//     {
//       title: "Modular Kitchens",
//       description: "Detailed exterior view facade designs",
//       bgImage: 'url(https://images.unsplash.com/photo-1556909212-d5b604d0c90d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
//     },
//     {
//       title: "Luxury Interiors",
//       description: "Complete construction document sets",
//       bgImage: 'url(https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
//     },
//     {
//       title: "Home Renovations",
//       description: "Detailed cost estimates and proposals",
//       bgImage: 'url(https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
//     },
//     {
//       title: "Landscaping",
//       description: "Complete construction document sets",
//       bgImage: 'url(https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
//     },
//     {
//       title: "3D Elevations",
//       description: "Detailed cost estimates and proposals",
//       bgImage: 'url(https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
//     }
//   ];

//   return (

//     <>


//       <Box display="flex" alignItems="center" p={1} sx={{
//         background: 'white',
//         boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
//         position: 'sticky',
//         top: 0,
//         zIndex: 1100
//       }}>
//         <IconButton
//           onClick={() => navigate('/constructions')}
//           sx={{
//             color: '#4A00E0',
//             '&:hover': {
//               backgroundColor: 'rgba(74, 0, 224, 0.1)'
//             }
//           }}
//         >
//           <ArrowBackIosIcon />
//         </IconButton>
//       </Box>

//         <Box sx={{
//                 backgroundColor: '#e6f2ff',  // Light blue color
//                 padding: isMobile ? 2 : 2,
//                 borderRadius: 1,
//                 position: 'sticky',
//                 top: 0,
//                 zIndex: 1100
//                 // Optional: adds slight rounded corners
//               }}>
//                 <Grid container justifyContent="space-between" alignItems="center">
//                   <Grid item>
//                     <Link to="/constructions" style={{ textDecoration: 'none', color: 'inherit' }}>
//                       <Typography variant={isMobile ? "h6" : "h5"} component="div">
//                         Constructions
//                       </Typography>
//                     </Link>

//                   </Grid>
//                   <Grid item>
//                     <Link to="/interiors" style={{ textDecoration: 'none', color: 'inherit' }}>
//                       <Typography variant={isMobile ? "h6" : "h5"} component="div">
//                         Interiors
//                       </Typography>
//                     </Link>
//                   </Grid>
//                 </Grid>
//               </Box>

//       <Container sx={{ padding: 1, backgroundColor: "lightgray" }}>
//         {/* Services Row */}
//         <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
//           <Typography
//             variant="body1">Our services</Typography>
//           <Typography
//             variant="body1">Portfolio</Typography>
//           <Typography onClick={() => navigate('/how-it-works')} sx={{ cursor: 'pointer' }}
//             variant="body1">How it works?</Typography>
//         </Box>

//         {/* Full-width Image with Overlay Text & Button */}
//         <Box
//           sx={{
//             width: '100%',
//             height: 200,
//             backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3))', // Replace with your image
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             borderRadius: 1,
//             position: 'relative',
//             mb: 3,
//           }}
//         >
//           {/* Text on the left */}
//           <Typography
//             variant="h5"
//             sx={{
//               position: 'absolute',
//               top: '20%',
//               left: '5%',
//               color: 'white',
//               fontWeight: 'bold',
//               textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
//             }}
//           >
//             "Designing Dreams
//             <br /> Crafting Delight".
//           </Typography>

//           {/* Button at the bottom */}
//           <Button
//             variant="contained"
//             color="error"
//             sx={{
//               position: 'absolute',
//               bottom: '10%',
//               left: '17%',
//               fontWeight: 'bold',
//               borderRadius: 30,
//               boxShadow: 2,
//             }}
//           >
//             Start my transformation
//           </Button>
//         </Box>



//         {/* Pricing Buttons */}
//         <Grid container spacing={2} sx={{ mb: 2 }}>
//           {/* First Row - 1BHK and 2BHK */}
//           <Grid item xs={6}>
//             <Button
//               fullWidth
//               variant="contained"
//               color="error"
//               sx={{
//                 py: 0.8,
//                 borderRadius: 30,
//                 borderWidth: 2,
//                 fontWeight: 'bold',
//                 left: '45%'

//               }}
//             >
//               1BHK starting at 1.8L
//             </Button>
//           </Grid>
//           <Grid item xs={6}>
//             <Button
//               fullWidth
//               variant="contained"
//               color="error"
//               sx={{
//                 py: 0.8,
//                 borderRadius: 30,
//                 borderWidth: 2,
//                 fontWeight: 'bold',
//                 left: '45%'

//               }}
//             >
//               2BHK starting at 2.5L
//             </Button>
//           </Grid>

//           {/* Second Row - Another 2BHK */}
//           <Grid item xs={12}>
//             <Button
//               fullWidth
//               variant="contained"
//               color="error"
//               sx={{
//                 py: 0.8,
//                 borderRadius: 30,
//                 borderWidth: 2,
//                 fontWeight: 'bold',
//                 left: '45%'

//               }}
//             >
//               3BHK starting at 3.5L
//             </Button>
//           </Grid>
//         </Grid>

//         {/* Transformation Button */}
//         <Button
//           fullWidth
//           variant="contained"
//           color="secondary"
//           sx={{
//             py: 0.8,
//             fontSize: '1rem',
//             fontWeight: 'bold',
//             borderRadius: 30,
//             mt: 1
//           }}
//         >
//           Start my transformation
//         </Button>


//         <Typography
//           variant="h5"
//           fontWeight="bold"
//           gutterBottom
//           sx={{
//             textAlign: 'left',
//             mt: 2,
//             mb: 2,
//             color: 'primary.main',
//             fontSize: '1.5rem',
//             paddingLeft: 2
//           }}
//         >
//           Our Services
//         </Typography>





//         <Box sx={{ width: '100%' }}>
//           {cards.map((card, index) => (
//             <Card key={index} sx={{
//               backgroundImage: `${card.bgImage}`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//               minHeight: 200,
//               width: '100%',
//               display: 'flex',
//               alignItems: 'center',
//               color: 'white',
//               position: 'relative',
//               borderRadius: '12px',
//               boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
//               mb: 3,
//               '&::before': {
//                 content: '""',
//                 position: 'absolute',
//                 top: 0,
//                 left: 0,
//                 right: 0,
//                 bottom: 0,
//                 backgroundColor: 'rgba(0,0,0,0.5)',
//                 borderRadius: '12px'
//               }
//             }}>
//               <CardContent sx={{
//                 position: 'relative',
//                 zIndex: 1,
//                 textAlign: 'left',
//                 width: '100%',
//                 padding: isMobile ? 3 : 4,
//               }}>
//                 <Typography variant="h6" component="div" fontWeight="bold" gutterBottom>
//                   {card.title}
//                 </Typography>
//                 <Typography variant="body1" component="div">
//                   {card.description}
//                 </Typography>
//               </CardContent>
//             </Card>
//           ))}
//         </Box>
//       </Container>

//         <Box sx={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 1000 }}>
//               <BottomNavbar />
//             </Box>
//     </>
//   );
// }

// export default Interiors;
















import React, { useEffect, useState } from 'react';
import {
  Box, Typography, Button, Container, Grid, Card, CardContent, useTheme, useMediaQuery, IconButton, BottomNavigation,
  BottomNavigationAction, Paper
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';

import FormsBottomNavbar from '../maniteja/FormsBottomNavbar';
import logotop from './Images/landnest-logo.jpg'


import fullHomeImg from './Images/fullhome.jpg';
import commercialImg from './Images/commercial.jpg';
import kitchenImg from './Images/kitchen.jpg';
import luxuryImg from './Images/luxury.webp';
import renovationImg from './Images/renovation.jpeg';
import landscapingImg from './Images/Landscaping.jpeg';
import elevation3DImg from './Images/3delevation.jpg';

const Interiors = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const [value, setValue] = useState('construction');

  // const cards = [
  //   {
  //     title: "Full Home Interiors",
  //     description: "Professional 2D plans with detailed measurements",
  //     bgImage: 'url(https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
  //   },
  //   {
  //     title: "Commercial Spaces Interiors",
  //     description: "Professional 2D plans with detailed measurements",
  //     bgImage: 'url(https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
  //   },
  //   {
  //     title: "Modular Kitchens",
  //     description: "Detailed exterior view facade designs",
  //     bgImage: 'url(https://images.unsplash.com/photo-1556909212-d5b604d0c90d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
  //   },
  //   {
  //     title: "Luxury Interiors",
  //     description: "Complete construction document sets",
  //     bgImage: 'url(https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
  //   },
  //   {
  //     title: "Home Renovations",
  //     description: "Detailed cost estimates and proposals",
  //     bgImage: 'url(https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
  //   },
  //   {
  //     title: "Landscaping",
  //     description: "Complete construction document sets",
  //     bgImage: 'url(https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
  //   },
  //   {
  //     title: "3D Elevations",
  //     description: "Detailed cost estimates and proposals",
  //     bgImage: 'url(https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
  //   }
  // ];


  const cards = [
  {
    title: "Full Home Interiors",
    description: "Professional 2D plans with detailed measurements",
    bgImage: `url(${fullHomeImg})`
  },
  {
    title: "Commercial Spaces Interiors",
    description: "Professional 2D plans with detailed measurements",
    bgImage: `url(${commercialImg})`
  },
  {
    title: "Modular Kitchens",
    description: "Detailed exterior view facade designs",
    bgImage: `url(${kitchenImg})`
  },
  {
    title: "Luxury Interiors",
    description: "Complete construction document sets",
    bgImage: `url(${luxuryImg})`
  },
  {
    title: "Home Renovations",
    description: "Detailed cost estimates and proposals",
    bgImage: `url(${renovationImg})`
  },
  {
    title: "Landscaping",
    description: "Complete construction document sets",
    bgImage: `url(${landscapingImg})`
  },
  {
    title: "3D Elevations",
    description: "Detailed cost estimates and proposals",
    bgImage: `url(${elevation3DImg})`
  }
];


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
        {/* Top Navigation Bar */}
        <Box display="flex" alignItems="center" justifyContent="space-between" p={1} sx={{
          background: 'black',
          borderBottom: '1px solid rgba(0,0,0,0.08)'
        }}>
          {/* Back Arrow - Left Side */}
          <IconButton
            onClick={() => navigate(-1)}
            sx={{
              color: 'white',
              '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }
            }}
          >
            <ArrowBackIosIcon />
          </IconButton>

          {/* Center Text - "landnest" */}
          <Typography variant="h6" component="div" sx={{
            color: 'white',
            fontWeight: 'bold',
            flexGrow: 1,
            textAlign: 'left'
          }}>
            LANDNEST
          </Typography>

          {/* Right Side Logo */}
          <Box sx={{
            width: 100,
            height: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img
              src={logotop}
              alt="Landnest Logo"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain'
              }}
            />
          </Box>
        </Box>




        <Box sx={{
          padding: isMobile ? 1 : 0.5,
          display: 'flex',
          justifyContent: 'space-between',
          boxShadow: '0 5px 10px rgba(0,0,0,0.1)',
        }}>
          {/* Construction - Inactive */}
          <Box
            component={Link}
            to="/constructions"
            sx={{
              flex: 1,
              textAlign: 'center',
              py: 2,
              textDecoration: 'none',
              background: `
          linear-gradient(145deg, rgb(22, 22, 22), rgb(15, 15, 15)),
          url('https://www.transparenttextures.com/patterns/dark-matter.png')
        `,
              backgroundBlendMode: 'overlay',
              borderRight: '1px solid rgba(0,0,0,0.1)',
              borderTopLeftRadius: '30px',
              boxShadow: `
          inset 0 0 15px rgba(0,0,0,0.2),
          0 2px 5px rgba(0,0,0,0.1)
        `,
              transform: 'scale(0.98)',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: `
            linear-gradient(145deg, rgb(35, 35, 35), rgb(25, 25, 25)),
            url('https://www.transparenttextures.com/patterns/dark-matter.png')
          `,
                transform: 'scale(1)',
                boxShadow: `
            inset 0 0 20px rgba(0,0,0,0.3),
            0 3px 8px rgba(0,0,0,0.2)
          `
              }
            }}>
            <Typography variant={isMobile ? "h6" : "h5"} component="div" sx={{
              fontWeight: 500,
              color: 'white',
              textShadow: '0 1px 5px rgba(0,0,0,0.7)',
              fontFamily: 'Inter, Roboto, Helvetica, sans-serif',
            }}>
              Constructions
            </Typography>
          </Box>

          {/* Interiors - Active */}
          <Box
            component={Link}
            to="/interiors"
            sx={{
              flex: 1,
              textAlign: 'center',
              py: 2,
              background: `
          linear-gradient(145deg, rgba(232,224,208,0.95), rgba(216,204,186,0.95)),
          url('https://www.transparenttextures.com/patterns/cream-paper.png')
        `,
              backgroundBlendMode: 'overlay',
              textDecoration: 'none',
              borderBottomRightRadius: '30px',
              boxShadow: `
          inset 0 0 15px rgba(0,0,0,0.1),
          0 2px 5px rgba(0,0,0,0.08)
        `,
              transform: 'scale(0.98)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'scale(1)',
                boxShadow: `
            inset 0 0 20px rgba(0,0,0,0.15),
            0 3px 8px rgba(0,0,0,0.15)
          `
              }
            }}
          >
            <Typography variant={isMobile ? "h6" : "h5"} component="div" sx={{
              fontWeight: 800,
              // color: '#5d4037',
              color: '#333333',
              // color:"#556b2f",
              letterSpacing: '1px',
              textShadow: '0 1px 3px rgba(255,255,255,0.5)',
              fontFamily: 'Inter, Roboto, Helvetica, sans-serif',
            }}>
              Interiors
            </Typography>
          </Box>
        </Box>
        <Box sx={{
          position: 'sticky',
          top: isMobile ? 145 : 138, // Adjust based on header height
          zIndex: 1100,
          padding: isMobile ? 1 : 0.5,
          display: 'flex',
          justifyContent: 'space-between',
          boxShadow: '0 5px 10px rgba(0,0,0,0.1)',
        }}>
          {/* Our Services - Active */}
          <Box
            component={Link}
            to="/interiors"
            sx={{
              flex: 1,
              textAlign: 'center',
              py: 2,
              background: `
        linear-gradient(145deg, rgba(232,224,208,0.95), rgba(216,204,186,0.95)),
        url('https://www.transparenttextures.com/patterns/cream-paper.png')
      `,
              backgroundBlendMode: 'overlay',
              textDecoration: 'none',
              borderTopLeftRadius: '30px',
              boxShadow: `
        inset 0 0 15px rgba(0,0,0,0.1),
        0 2px 5px rgba(0,0,0,0.08)
      `,
              transform: 'scale(0.98)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'scale(1)',
                boxShadow: `
          inset 0 0 20px rgba(0,0,0,0.15),
          0 3px 8px rgba(0,0,0,0.15)
        `
              }
            }}
          >
            <Typography variant={isMobile ? "body1" : "h6"} component="div" sx={{
              fontWeight: 600,
              color: '#333333',
              textShadow: '0 1px 3px rgba(255,255,255,0.5)',
              fontFamily: 'Inter, Roboto, Helvetica, sans-serif',
            }}>
              Our Services
            </Typography>
          </Box>

          {/* Portfolio - Inactive */}
          <Box

            sx={{
              flex: 1,
              textAlign: 'center',
              py: 2,
              textDecoration: 'none',
              background: `
        linear-gradient(145deg, rgb(22, 22, 22), rgb(15, 15, 15)),
        url('https://www.transparenttextures.com/patterns/dark-matter.png')
      `,
              backgroundBlendMode: 'overlay',
              borderRight: '1px solid rgba(0,0,0,0.1)',
              borderLeft: '1px solid rgba(0,0,0,0.1)',
              boxShadow: `
        inset 0 0 15px rgba(0,0,0,0.2),
        0 2px 5px rgba(0,0,0,0.1)
      `,
              transform: 'scale(0.98)',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: `
          linear-gradient(145deg, rgb(35, 35, 35), rgb(25, 25, 25)),
          url('https://www.transparenttextures.com/patterns/dark-matter.png')
        `,
                transform: 'scale(1)',
                boxShadow: `
          inset 0 0 20px rgba(0,0,0,0.3),
          0 3px 8px rgba(0,0,0,0.2)
        `
              }
            }}
          >
            <Typography variant={isMobile ? "body1" : "h6"} component="div" sx={{
              fontWeight: 400,
              color: 'white',
              textShadow: '0 1px 5px rgba(0,0,0,0.7)',
              fontFamily: 'Inter, Roboto, Helvetica, sans-serif',
            }}>
              Portfolio
            </Typography>
          </Box>

          {/* How It Works - Inactive */}
          <Box
            component={Link}
            to="/how-it-works"
            sx={{
              flex: 1,
              textAlign: 'center',
              py: 2,
              textDecoration: 'none',
              background: `
        linear-gradient(145deg, rgb(22, 22, 22), rgb(15, 15, 15)),
        url('https://www.transparenttextures.com/patterns/dark-matter.png')
      `,
              backgroundBlendMode: 'overlay',
              borderBottomRightRadius: '30px',
              boxShadow: `
        inset 0 0 15px rgba(0,0,0,0.2),
        0 2px 5px rgba(0,0,0,0.1)
      `,
              transform: 'scale(0.98)',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: `
          linear-gradient(145deg, rgb(35, 35, 35), rgb(25, 25, 25)),
          url('https://www.transparenttextures.com/patterns/dark-matter.png')
        `,
                transform: 'scale(1)',
                boxShadow: `
          inset 0 0 20px rgba(0,0,0,0.3),
          0 3px 8px rgba(0,0,0,0.2)
        `
              }
            }}
          >
            <Typography variant={isMobile ? "body1" : "h6"} component="div" sx={{
              fontWeight: 400,
              color: 'white',
              textShadow: '0 1px 5px rgba(0,0,0,0.7)',
              fontFamily: 'Inter, Roboto, Helvetica, sans-serif',
            }}>
              How It Works
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Sticky Services Navigation */}


      <Container sx={{ padding: 1, backgroundColor: "#e7dbc9", pb: 10 }}>
        {/* Services Row */}


        {/* Full-width Image with Overlay Text & Button */}
        <Box
          sx={{
            width: '100%',
            height: 200,
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3))',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: 1,
            position: 'relative',
            mb: 3,
          }}
        >
          {/* Text on the left */}
          <Typography
            variant="h5"
            sx={{
              position: 'absolute',
              top: '20%',
              left: '5%',
              color: 'white',
              fontWeight: 'bold',
              textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
            }}
          >
            "Designing Dreams
            <br /> Crafting Delight".
          </Typography>

          {/* Button at the bottom */}
          <Button
            variant="contained"
            color="error"
            sx={{
              position: 'absolute',
              bottom: '10%',
              left: '50%',
              transform: 'translateX(-50%)',
              fontWeight: 'bold',
              borderRadius: 30,
              boxShadow: 2,
              width: isMobile ? '80%' : 'auto',
              maxWidth: '300px'
            }}
          >
            Start my transformation
          </Button>
        </Box>

        {/* Pricing Buttons */}
        <Grid container spacing={2} sx={{
          mb: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center' // This centers the buttons horizontally
        }}>
          <Grid item xs={12} sx={{ width: isMobile ? '80%' : '100%', maxWidth: '300px' }}>
            <Button
              fullWidth
              variant="contained"
              color="error"
              sx={{
                py: 0.8,
                borderRadius: 30,
                borderWidth: 2,
                fontWeight: 'bold',
              }}
            >
              1BHK starting at 1.8L
            </Button>
          </Grid>
          <Grid item xs={12} sx={{ width: isMobile ? '80%' : '100%', maxWidth: '300px' }}>
            <Button
              fullWidth
              variant="contained"
              color="error"
              sx={{
                py: 0.8,
                borderRadius: 30,
                borderWidth: 2,
                fontWeight: 'bold',
              }}
            >
              2BHK starting at 2.5L
            </Button>
          </Grid>
          <Grid item xs={12} sx={{ width: isMobile ? '80%' : '100%', maxWidth: '300px' }}>
            <Button
              fullWidth
              variant="contained"
              color="error"
              sx={{
                py: 0.8,
                borderRadius: 30,
                borderWidth: 2,
                fontWeight: 'bold',
              }}
            >
              3BHK starting at 3.5L
            </Button>
          </Grid>
        </Grid>

        {/* Transformation Button */}
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          sx={{
            py: 0.8,
            fontSize: '1rem',
            fontWeight: 'bold',
            borderRadius: 30,
            mt: 1,
            width: isMobile ? '80%' : '100%',
            maxWidth: '300px',
            mx: 'auto',
            display: 'block'
          }}
        >
          Start my transformation
        </Button>

        <Typography
          variant="h5"
          fontWeight="bold"
          gutterBottom
          sx={{
            textAlign: 'center',
            mt: 2,
            mb: 2,
            color: 'primary.main',
            fontSize: '1.5rem',
            paddingLeft: 2
          }}
        >
          Our Services
        </Typography>

        <Box sx={{ width: '100%' }}>
          {cards.map((card, index) => (
            <Card key={index} sx={{
              backgroundImage: `${card.bgImage}`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: 200,
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              color: 'white',
              position: 'relative',
              borderRadius: '12px',
              boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
              mb: 3,
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.5)',
                borderRadius: '12px'
              }
            }}>
              <CardContent sx={{
                position: 'relative',
                zIndex: 1,
                textAlign: 'left',
                width: '100%',
                padding: isMobile ? 3 : 4,
              }}>
                <Typography variant="h6" component="div" fontWeight="bold" gutterBottom>
                  {card.title}
                </Typography>
                <Typography variant="body1" component="div">
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>



      <FormsBottomNavbar />

    </>
  );
}

export default Interiors;