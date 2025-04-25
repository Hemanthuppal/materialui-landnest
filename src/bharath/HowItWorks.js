// import React, { useEffect, useState } from 'react';
// import {
//   Box,
//   Typography,
//   Button,
//   Paper,
//   useTheme,
//   IconButton,
//   Grid,
//   useMediaQuery, BottomNavigation,
//   BottomNavigationAction
// } from '@mui/material';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import { keyframes } from '@mui/system';
// import HomeIcon from '@mui/icons-material/Home';
// import BuildIcon from '@mui/icons-material/Build';
// import AddIcon from '@mui/icons-material/Add';
// import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import FormsBottomNavbar from '../maniteja/FormsBottomNavbar';
// import logotop from './Images/landnest-logo.jpg'


// // Steps for flowchart
// const steps = [
//   'Your Space',
//   'Free Consultation & Analysing Scope of Work',
//   'Rough Estimate Based on Floor Plan',
//   '3D Presentation & Advance Payment',
//   'Brief Explanation on Designing & Pricing',
//   'Onsite Meeting',
//   'Finalise Design',
//   'Delivery',
//   'Project Completion'
// ];

// // Animation
// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(20px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// const InteriorServicesEnhanced = () => {
//   const theme = useTheme();
//   const navigate = useNavigate();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//    const [value, setValue] = useState('construction');


//   return (
//     <>
//       {/* Sticky Header Section */}
//       <Box sx={{
//         position: 'sticky',
//         top: 0,
//         zIndex: 1200,
//         bgcolor: 'background.paper',
//         boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
//       }}>
//         {/* Top Navigation Bar */}
//         <Box display="flex" alignItems="center" justifyContent="space-between" p={1} sx={{
//           background: 'black',
//           borderBottom: '1px solid rgba(0,0,0,0.08)'
//         }}>
//           {/* Back Arrow - Left Side */}
//           <IconButton
//             onClick={() => navigate(-1)}
//             sx={{
//               color: 'white',
//               '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }
//             }}
//           >
//             <ArrowBackIosIcon />
//           </IconButton>

//           {/* Center Text - "landnest" */}
//           <Typography variant="h6" component="div" sx={{
//             color: 'white',
//             fontWeight: 'bold',
//             flexGrow: 1,
//             textAlign: 'center'
//           }}>
//             landnest
//           </Typography>

//           {/* Right Side Logo */}
//           <Box sx={{
//             width: 100,
//             height: 50,
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center'
//           }}>
//             <img
//               src={logotop}
//               alt="Landnest Logo"
//               style={{
//                 maxWidth: '100%',
//                 maxHeight: '100%',
//                 objectFit: 'contain'
//               }}
//             />
//           </Box>
//         </Box>

//         {/* Construction/Interior Navigation */}
//         <Box sx={{
//           padding: isMobile ? 1 : 0.5,
//           display: 'flex',
//           justifyContent: 'space-between',
//           boxShadow: '0 5px 10px rgba(0,0,0,0.1)',
//         }}>
//           {/* Construction - Inactive */}
//           <Box
//             component={Link}
//             to="/constructions"
//             sx={{
//               flex: 1,
//               textAlign: 'center',
//               py: 2,
//               textDecoration: 'none',
//               background: `
//           linear-gradient(145deg, rgb(22, 22, 22), rgb(15, 15, 15)),
//           url('https://www.transparenttextures.com/patterns/dark-matter.png')
//         `,
//               backgroundBlendMode: 'overlay',
//               borderRight: '1px solid rgba(0,0,0,0.1)',
//               borderTopLeftRadius: '30px',
//               boxShadow: `
//           inset 0 0 15px rgba(0,0,0,0.2),
//           0 2px 5px rgba(0,0,0,0.1)
//         `,
//               transform: 'scale(0.98)',
//               transition: 'all 0.3s ease',
//               '&:hover': {
//                 background: `
//             linear-gradient(145deg, rgb(35, 35, 35), rgb(25, 25, 25)),
//             url('https://www.transparenttextures.com/patterns/dark-matter.png')
//           `,
//                 transform: 'scale(1)',
//                 boxShadow: `
//             inset 0 0 20px rgba(0,0,0,0.3),
//             0 3px 8px rgba(0,0,0,0.2)
//           `
//               }
//             }}>
//             <Typography variant={isMobile ? "h6" : "h5"} component="div" sx={{
//               fontWeight: 700,
//               // color: 'rgba(255,255,255,0.7)',
//               color: 'white',
//               letterSpacing: '1px',
//               textShadow: '0 1px 5px rgba(0,0,0,0.7)',
//               fontFamily: 'Inter, Roboto, Helvetica, sans-serif',
//             }}>
//               Constructions
//             </Typography>
//           </Box>

//           {/* Interiors - Active */}
//           <Box
//             component={Link}
//             to="/interiors"
//             sx={{
//               flex: 1,
//               textAlign: 'center',
//               py: 2,
//               background: `
//           linear-gradient(145deg, rgba(232,224,208,0.95), rgba(216,204,186,0.95)),
//           url('https://www.transparenttextures.com/patterns/cream-paper.png')
//         `,
//               backgroundBlendMode: 'overlay',
//               textDecoration: 'none',
//               borderBottomRightRadius: '30px',
//               boxShadow: `
//           inset 0 0 15px rgba(0,0,0,0.1),
//           0 2px 5px rgba(0,0,0,0.08)
//         `,
//               transform: 'scale(0.98)',
//               transition: 'all 0.3s ease',
//               '&:hover': {
//                 transform: 'scale(1)',
//                 boxShadow: `
//             inset 0 0 20px rgba(0,0,0,0.15),
//             0 3px 8px rgba(0,0,0,0.15)
//           `
//               }
//             }}
//           >
//             <Typography variant={isMobile ? "h6" : "h5"} component="div" sx={{
//               fontWeight: 700,
//               color: 'green',
//               letterSpacing: '1px',
//               textShadow: '0 1px 3px rgba(255,255,255,0.5)',
//               fontFamily: 'Inter, Roboto, Helvetica, sans-serif',
//             }}>
//               Interiors
//             </Typography>
//           </Box>
//         </Box>
//       </Box>
//        {/* Services Navigation - Stays below the main tabs */}
//        <Box sx={{ 
//           display: 'flex', 
//           justifyContent: 'space-around', 
//           p: 1, 
//           bgcolor: '#fff',
//           borderBottom: '1px solid rgba(0,0,0,0.08)'
//         }}>
//             <Link to="/interiors" style={{ textDecoration: 'none', color: 'inherit' }}>

//           <Typography>Our Services</Typography>
//           </Link>

//           <Typography>Portfolio</Typography>
//           <Typography sx={{ color: 'green', fontWeight: 'bold' }}>How it works?</Typography>
//         </Box>

//       {/* Main Content */}
//       <Box sx={{ width: '100%', minHeight: '100vh',  backgroundColor:"#e7dbc9"
// , pb: 12 }}>
//         {/* Tagline */}
//         <Typography
//           variant="h6"
//           sx={{ textAlign: 'center', fontWeight: 'bold', my: 3, px: 2, pt: 2 }}
//         >
//           "ONE STOP SOLUTION FOR ALL INTERIOR NEEDS"
//         </Typography>

//         {/* Vertical Flowchart */}
//         <Box sx={{ position: 'relative', px: { xs: 2, sm: 6 }, py: 4 }}>
//           {/* Vertical Line */}
//           <Box
//             sx={{
//               position: 'absolute',
//               top: 32,
//               bottom: 0,
//               left: 45,
//               width: '4px',
//               bgcolor: 'black',
//               borderRadius: 2,
//               mx: 'auto',
//               height: '90%'
//             }}
//           />
//           {steps.map((step, index) => (
//             <Box
//               key={index}
//               sx={{
//                 position: 'relative',
//                 display: 'flex',
//                 alignItems: 'flex-start',
//                 mb: 6,
//                 animation: `${fadeIn} 0.6s ease-in-out forwards`,
//                 opacity: 0,
//                 animationDelay: `${index * 0.2}s`
//               }}
//             >
//               {/* Dot */}
//               <Box
//                 sx={{
//                   width: 60,
//                   height: 60,
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   // bgcolor: theme.palette.primary.main,
//                   bgcolor: '#438b98',
//                   color: '#fff',
//                   borderRadius: '50%',
//                   fontWeight: 'bold',
//                   fontSize: '1rem',
//                   boxShadow: 3,
//                   mr: 2,
//                   flexShrink: 0
//                 }}
//               >
//                 {index + 1}
//               </Box>
//               {/* Step */}
//               <Paper
//                 elevation={4}
//                 sx={{
//                   p: 2,
//                   borderRadius: 2,
//                   flexGrow: 1,
//                   background: 'linear-gradient(90deg, #fff, #f5f7f6)',
//                   transition: 'transform 0.3s, box-shadow 0.3s',
//                   '&:hover': {
//                     transform: 'translateY(-4px)',
//                     boxShadow: 6
//                   }
//                 }}
//               >
//                 <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
//                   {step}
//                 </Typography>
//               </Paper>
//             </Box>
//           ))}
//         </Box>

//         {/* Celebrate Section */}
//         <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 6, px: 2 }}>
//           {/* Starburst Shape */}
//           <Box
//             sx={{
//               width: 200,
//               height: 200,
//               backgroundColor: '#438b98',
//               clipPath:
//                 'polygon(50% 0%, 58% 15%, 69% 10%, 70% 25%, 83% 20%, 80% 35%, 93% 35%, 85% 50%, 93% 65%, 80% 65%, 83% 80%, 70% 75%, 69% 90%, 58% 85%, 50% 100%, 42% 85%, 31% 90%, 30% 75%, 17% 80%, 20% 65%, 7% 65%, 15% 50%, 7% 35%, 20% 35%, 17% 20%, 30% 25%, 31% 10%, 42% 15%)',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               textAlign: 'center',
//               color: '#000',
//               mb: 3,
//               boxShadow: 3,
//             }}
//           >
//             <Typography
//               sx={{
//                 fontSize: '0.85rem',
//                 fontWeight: 700,
//                 letterSpacing: '0.05em',
//                 lineHeight: 1.6,
//               }}
//             >
//               CELEBRATE
//               <br />
//               & ENJOY
//               <br />
//               YOUR
//               <br />
//               SPACE
//             </Typography>
//           </Box>

//           {/* Tagline */}
//           <Typography
//             variant="h6"
//             sx={{
//               textAlign: 'center',
//               fontWeight: 'bold',
//               fontSize: { xs: '1rem', sm: '1.2rem' },
//               maxWidth: 400,
//               color: '#111',
//             }}
//           >
//             DESIGN YOUR DREAM HOME EFFORTLESSLY, JUST A CLICK AWAY.
//           </Typography>

//           {/* Get Started Button */}
//           <Box sx={{ px: 2, mt: 3, width: '100%', maxWidth: 400 }}>
//             <Button
//               fullWidth
//               variant="contained"
//               onClick={() => navigate('/get-started')}
//               sx={{
//                 bgcolor: 'red',
//                 fontWeight: 'bold',
//                 fontSize: '1rem',
//                 py: 1.5,
//                 borderRadius: 8,
//                 boxShadow: 3,
//                 '&:hover': {
//                   bgcolor: '#d32f2f',
//                   transform: 'scale(1.03)',
//                 }
//               }}
//             >
//               GET STARTED
//             </Button>
//           </Box>
//         </Box>
//       </Box>


//                       <FormsBottomNavbar />

//     </>
//   );
// };

// export default InteriorServicesEnhanced;






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
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import FormsBottomNavbar from '../maniteja/FormsBottomNavbar';
import logotop from './Images/landnest-logo.jpg'

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
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [value, setValue] = useState('construction');

  // Determine active tab based on current route
  const isHowItWorks = location.pathname.includes('how-it-works') ||
    location.pathname === '/interiors' && location.hash === '#how-it-works';
  const isPortfolio = location.pathname.includes('portfolio');
  const isServices = !isHowItWorks && !isPortfolio;

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

        {/* Construction/Interior Navigation */}
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
              fontWeight: 700,
              color: 'white',
              letterSpacing: '1px',
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
              fontWeight: 700,
              color: 'green',
              letterSpacing: '1px',
              textShadow: '0 1px 3px rgba(255,255,255,0.5)',
              fontFamily: 'Inter, Roboto, Helvetica, sans-serif',
            }}>
              Interiors
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Sticky Services Navigation */}
      <Box sx={{
        position: 'sticky',
        top: isMobile ? 145 : 138, // Adjust based on header height
        zIndex: 1100,
        padding: isMobile ? 1 : 0.5,
        display: 'flex',
        justifyContent: 'space-between',
        boxShadow: '0 5px 10px rgba(0,0,0,0.1)',
        bgcolor: 'background.paper'
      }}>
        {/* Our Services - Left */}
        <Box
          component={Link}
          to="/interiors"
          sx={{
            flex: 1,
            textAlign: 'center',
            py: 2,
            textDecoration: 'none',
            background: isServices ? `
        linear-gradient(145deg, rgba(232,224,208,0.95), rgba(216,204,186,0.95)),
        url('https://www.transparenttextures.com/patterns/cream-paper.png')
      ` : `
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
              background: isServices ? `
          linear-gradient(145deg, rgba(242,234,218,0.95), rgba(226,214,196,0.95)),
          url('https://www.transparenttextures.com/patterns/cream-paper.png')
        ` : `
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
            fontWeight: 700,
            color: isServices ? 'green' : 'white',
            letterSpacing: '1px',
            textShadow: isServices ? '0 1px 3px rgba(255,255,255,0.5)' : '0 1px 5px rgba(0,0,0,0.7)',
            fontFamily: 'Inter, Roboto, Helvetica, sans-serif',
          }}>
            Our Services
          </Typography>
        </Box>

        {/* Portfolio - Middle */}
        <Box

          sx={{
            flex: 1,
            textAlign: 'center',
            py: 2,
            textDecoration: 'none',
            background: isPortfolio ? `
        linear-gradient(145deg, rgba(232,224,208,0.95), rgba(216,204,186,0.95)),
        url('https://www.transparenttextures.com/patterns/cream-paper.png')
      ` : `
        linear-gradient(145deg, rgb(22, 22, 22), rgb(15, 15, 15)),
        url('https://www.transparenttextures.com/patterns/dark-matter.png')
      `,
            backgroundBlendMode: 'overlay',
            borderRight: '1px solid rgba(0,0,0,0.1)',
            boxShadow: `
        inset 0 0 15px rgba(0,0,0,0.2),
        0 2px 5px rgba(0,0,0,0.1)
      `,
            transform: 'scale(0.98)',
            transition: 'all 0.3s ease',
            '&:hover': {
              background: isPortfolio ? `
          linear-gradient(145deg, rgba(242,234,218,0.95), rgba(226,214,196,0.95)),
          url('https://www.transparenttextures.com/patterns/cream-paper.png')
        ` : `
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
            fontWeight: 700,
            color: isPortfolio ? 'green' : 'white',
            letterSpacing: '1px',
            textShadow: isPortfolio ? '0 1px 3px rgba(255,255,255,0.5)' : '0 1px 5px rgba(0,0,0,0.7)',
            fontFamily: 'Inter, Roboto, Helvetica, sans-serif',
          }}>
            Portfolio
          </Typography>
        </Box>

        {/* How it works - Right */}
        <Box
          sx={{
            flex: 1,
            textAlign: 'center',
            py: 2,
            background: isHowItWorks ? `
        linear-gradient(145deg, rgba(232,224,208,0.95), rgba(216,204,186,0.95)),
        url('https://www.transparenttextures.com/patterns/cream-paper.png')
      ` : `
        linear-gradient(145deg, rgb(22, 22, 22), rgb(15, 15, 15)),
        url('https://www.transparenttextures.com/patterns/dark-matter.png')
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
              background: isHowItWorks ? `
          linear-gradient(145deg, rgba(242,234,218,0.95), rgba(226,214,196,0.95)),
          url('https://www.transparenttextures.com/patterns/cream-paper.png')
        ` : `
          linear-gradient(145deg, rgb(35, 35, 35), rgb(25, 25, 25)),
          url('https://www.transparenttextures.com/patterns/dark-matter.png')
        `,
              transform: 'scale(1)',
              boxShadow: `
          inset 0 0 20px rgba(0,0,0,0.15),
          0 3px 8px rgba(0,0,0,0.15)
        `
            }
          }}
        >
          <Typography variant={isMobile ? "body1" : "h6"} component="div" sx={{
            fontWeight: 700,
            color: isHowItWorks ? 'green' : 'white',
            letterSpacing: '1px',
            textShadow: isHowItWorks ? '0 1px 3px rgba(255,255,255,0.5)' : '0 1px 5px rgba(0,0,0,0.7)',
            fontFamily: 'Inter, Roboto, Helvetica, sans-serif',
          }}>
            How it works?
          </Typography>
        </Box>
      </Box>

      {/* Main Content */}
      <Box sx={{ width: '100%', minHeight: '100vh', backgroundColor: "#e7dbc9", pb: 12 }}>
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

      <FormsBottomNavbar />
    </>
  );
};

export default InteriorServicesEnhanced;