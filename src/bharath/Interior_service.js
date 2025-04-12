import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Button,
  Divider
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import HomeIcon from '@mui/icons-material/Home';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import StoreIcon from '@mui/icons-material/Store';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

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
    <Box sx={{ width: '100%', minHeight: '100vh', bgcolor: '#f5f7f6', pb: 10 }}>
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

      {/* Step Cards Grid */}
      <Grid container spacing={2} sx={{ px: 2 }}>
        {steps.map((step, i) => (
          <Grid item xs={4} key={i}>
            <Box
              sx={{
                bgcolor: '#fff',
                height: 90,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                p: 1,
                borderRadius: 2,
                boxShadow: 1,
                fontSize: '0.9rem',
                fontWeight: 500,
              }}
            >
              {step}
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Celebrate Box */}
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
        <Box sx={{
          width: 160,
          height: 160,
          bgcolor: '#2b8a92',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          textAlign: 'center',
          fontWeight: 'bold',
          p: 2
        }}>
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
      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          bgcolor: '#fff',
          borderTop: '1px solid #ccc',
          display: 'flex',
          justifyContent: 'space-around',
          py: 1
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <HomeIcon />
          <Typography variant="caption">Home</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <FormatListBulletedIcon />
          <Typography variant="caption">List</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <StoreIcon />
          <Typography variant="caption">Saves</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <MailOutlineIcon />
          <Typography variant="caption">Inbox</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default InteriorServices;
