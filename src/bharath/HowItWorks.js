// import React from 'react';
// import {
//   Box,
//   Typography,
//   Button,
//   Divider
// } from '@mui/material';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
// import BottomNavbar from '../sharvani/BottomNavbar'; // ✅ Import BottomNavbar

// const steps = [
//   'Your Space',
//   'Free Consultation & Analysing scope of work',
//   'Rough Estimate Based on Floor plan',
//   '3D Presentation & Advance Payment',
//   'Brief Exploration on Designing & Pricing',
//   'Onsite meeting',
//   'Finalise Design',
//   'Delivery',
//   'Project Completion'
// ];

// const InteriorServices = () => {
//   return (
//     <Box sx={{ width: '100%', minHeight: '100vh', bgcolor: '#f5f7f6', pb: 12 }}>
//       {/* Header */}
//       <Box sx={{ display: 'flex', alignItems: 'center', p: 2, bgcolor: '#fff' }}>
//         <ArrowBackIosIcon sx={{ fontSize: 18, mr: 1 }} />
//         <Typography variant="h6" sx={{ fontWeight: 'bold' }}>How it works</Typography>
//       </Box>

//       {/* Nav Tabs */}
//       <Box sx={{ display: 'flex', justifyContent: 'space-around', p: 1, bgcolor: '#fff' }}>
//         <Typography>Constructions</Typography>
//         <Typography sx={{ color: 'green', fontWeight: 'bold' }}>Interior</Typography>
//       </Box>
//       <Box sx={{ display: 'flex', justifyContent: 'space-around', p: 1, bgcolor: '#fff' }}>
//         <Typography>Our Services</Typography>
//         <Typography>Portfolio</Typography>
//         <Typography sx={{ color: 'green', fontWeight: 'bold' }}>How it works?</Typography>
//       </Box>

//       {/* Tagline */}
//       <Typography
//         variant="h6"
//         sx={{ textAlign: 'center', fontWeight: 'bold', my: 3, px: 2 }}
//       >
//         “ONE STOP SOLUTION FOR ALL INTERIOR NEEDS”
//       </Typography>

//       {/* Workflow Timeline */}
//       <Box sx={{ px: 3 }}>
//         {steps.map((step, i) => (
//           <React.Fragment key={i}>
//             <Box
//               sx={{
//                 bgcolor: '#fff',
//                 px: 2,
//                 py: 2,
//                 borderRadius: 2,
//                 boxShadow: 1,
//                 fontWeight: 'bold',
//                 textAlign: 'center'
//               }}
//             >
//               {step}
//             </Box>
//             {i !== steps.length - 1 && (
//               <Box sx={{ display: 'flex', justifyContent: 'center', my: 1 }}>
//                 <ArrowDownwardIcon sx={{ color: 'gray' }} />
//               </Box>
//             )}
//           </React.Fragment>
//         ))}
//       </Box>

//       {/* Celebrate Box */}
//       <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
//         <Box
//           sx={{
//             bgcolor: '#2b8a92',
//             color: '#fff',
//             width: 180,
//             height: 180,
//             borderRadius: '50%',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             textAlign: 'center',
//             fontWeight: 'bold',
//             fontSize: '0.9rem',
//             p: 2,
//             boxShadow: 2,
//             clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
//           }}
//         >
//           CELEBRATE & ENJOY YOUR SPACE
//         </Box>
//       </Box>

//       {/* Final Tagline */}
//       <Typography
//         variant="h6"
//         sx={{ textAlign: 'center', fontWeight: 'bold', px: 2 }}
//       >
//         DESIGN YOUR DREAM HOME EFFORTLESSLY, JUST A CLICK AWAY.
//       </Typography>

//       <Box sx={{ px: 2, mt: 2 }}>
//         <Button
//           fullWidth
//           variant="contained"
//           sx={{
//             bgcolor: 'red',
//             fontWeight: 'bold',
//             fontSize: '1rem',
//             py: 1.5,
//             borderRadius: 8,
//             boxShadow: 3
//           }}
//         >
//           GET STARTED
//         </Button>
//       </Box>

//       {/* Bottom Navigation */}
//       <BottomNavbar /> {/* ✅ Bottom navbar added here */}
//     </Box>
//   );
// };

// export default InteriorServices;


import React from 'react';
import {
  Box,
  Typography,
  Button,
  Paper,
  useTheme
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { keyframes } from '@mui/system';
import BottomNavbar from '../sharvani/BottomNavbar';

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

  return (
    <>
      {/* Main Container */}
      <Box sx={{ width: '100%', minHeight: '100vh', bgcolor: '#f5f7f6', pb: 12 }}>
        {/* Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', p: 2, bgcolor: '#fff' }}>
          <ArrowBackIosIcon sx={{ fontSize: 18, mr: 1 }} />
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            How it works
          </Typography>
        </Box>

        {/* Navigation Tabs */}
        <Box sx={{ display: 'flex', justifyContent: 'space-around', p: 1, bgcolor: '#fff' }}>
          <Typography>Constructions</Typography>
          <Typography sx={{ color: 'green', fontWeight: 'bold' }}>Interior</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-around', p: 1, bgcolor: '#fff' }}>
          <Typography>Our Services</Typography>
          <Typography>Portfolio</Typography>
          <Typography sx={{ color: 'green', fontWeight: 'bold' }}>How it works?</Typography>
        </Box>

        {/* Tagline */}
        <Typography
          variant="h6"
          sx={{ textAlign: 'center', fontWeight: 'bold', my: 3, px: 2 }}
        >
          “ONE STOP SOLUTION FOR ALL INTERIOR NEEDS”
        </Typography>

        {/* Vertical Flowchart */}
        <Box sx={{ position: 'relative', px: { xs: 2, sm: 6 }, py: 4 }}>
          {/* Vertical Line */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 30,
              width: '4px',
              bgcolor: '#cfd8dc',
              borderRadius: 2,
              mx: 'auto'
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
                  bgcolor: theme.palette.primary.main,
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
                'polygon(50% 0%, 61% 18%, 85% 15%, 74% 35%, 98% 50%, 74% 65%, 85% 85%, 61% 82%, 50% 100%, 39% 82%, 15% 85%, 26% 65%, 2% 50%, 26% 35%, 15% 15%, 39% 18%)',
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

      {/* Bottom Navigation */}
      <Box sx={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 1000 }}>
        <BottomNavbar />
      </Box>
    </>
  );
};

export default InteriorServicesEnhanced;



