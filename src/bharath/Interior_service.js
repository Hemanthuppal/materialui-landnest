import React from 'react';
import {
  Box,
  Typography,
  Button,
  Divider
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import BottomNavbar from '../sharvani/BottomNavbar'; // ✅ Import BottomNavbar

const steps = [
  'Your Space',
  'Free Consultation & Analysing scope of work',
  'Rough Estimate Based on Floor plan',
  '3D Presentation & Advance Payment',
  'Brief Exploration on Designing & Pricing',
  'Onsite meeting',
  'Finalise Design',
  'Delivery',
  'Project Completion'
];

const InteriorServices = () => {
  return (
    <Box sx={{ width: '100%', minHeight: '100vh', bgcolor: '#f5f7f6', pb: 12 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', p: 2, bgcolor: '#fff' }}>
        <ArrowBackIosIcon sx={{ fontSize: 18, mr: 1 }} />
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>How it works</Typography>
      </Box>

      {/* Nav Tabs */}
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

      {/* Workflow Timeline */}
      <Box sx={{ px: 3 }}>
        {steps.map((step, i) => (
          <React.Fragment key={i}>
            <Box
              sx={{
                bgcolor: '#fff',
                px: 2,
                py: 2,
                borderRadius: 2,
                boxShadow: 1,
                fontWeight: 'bold',
                textAlign: 'center'
              }}
            >
              {step}
            </Box>
            {i !== steps.length - 1 && (
              <Box sx={{ display: 'flex', justifyContent: 'center', my: 1 }}>
                <ArrowDownwardIcon sx={{ color: 'gray' }} />
              </Box>
            )}
          </React.Fragment>
        ))}
      </Box>

      {/* Celebrate Box */}
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
        <Box
          sx={{
            bgcolor: '#2b8a92',
            color: '#fff',
            width: 180,
            height: 180,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '0.9rem',
            p: 2,
            boxShadow: 2,
            clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
          }}
        >
          CELEBRATE & ENJOY YOUR SPACE
        </Box>
      </Box>

      {/* Final Tagline */}
      <Typography
        variant="h6"
        sx={{ textAlign: 'center', fontWeight: 'bold', px: 2 }}
      >
        DESIGN YOUR DREAM HOME EFFORTLESSLY, JUST A CLICK AWAY.
      </Typography>

      <Box sx={{ px: 2, mt: 2 }}>
        <Button
          fullWidth
          variant="contained"
          sx={{
            bgcolor: 'red',
            fontWeight: 'bold',
            fontSize: '1rem',
            py: 1.5,
            borderRadius: 8,
            boxShadow: 3
          }}
        >
          GET STARTED
        </Button>
      </Box>

      {/* Bottom Navigation */}
      <BottomNavbar /> {/* ✅ Bottom navbar added here */}
    </Box>
  );
};

export default InteriorServices;
