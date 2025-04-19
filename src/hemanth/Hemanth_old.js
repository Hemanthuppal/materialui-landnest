import React, { useState } from 'react';
import {
  Box,
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  Modal,
  Typography,
  Stack,
  IconButton
} from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MailIcon from '@mui/icons-material/Mail';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SellIcon from '@mui/icons-material/Sell';
import HouseIcon from '@mui/icons-material/House';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BusinessIcon from '@mui/icons-material/Business';

const Property_Map = () => {
  const [open, setOpen] = useState(false);

  const handlePostClick = () => {
    setOpen(!open);
  };

  const postOptions = [
    { label: "Sell", icon: <SellIcon fontSize="large" /> },
    { label: "Rent", icon: <HouseIcon fontSize="large" /> },
    { label: "Deals", icon: <LocalOfferIcon fontSize="large" /> },
    { label: "Lease", icon: <AssignmentIcon fontSize="large" /> },
    { label: "Vendor", icon: <BusinessIcon fontSize="large" /> },
  ];

  return (
    <Box sx={{ p: 2, pb: 7, maxWidth: 480, mx: "auto" }}>
      {/* Modal for Post Options */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        sx={{ 
          display: 'flex', 
          alignItems: 'flex-end', 
          justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)' // Optional: semi-transparent dark background
        }}
      >
        <Box sx={{ 
          backgroundColor: 'transparent', 
          p: 2, 
          mb: 10,
          width: '100%',
          maxWidth: 360,
          mx: 'auto'
        }}>
          <Typography variant="subtitle1" textAlign="center" gutterBottom sx={{ color: 'white' }}>
            What would you like to post?
          </Typography>
          <Stack direction="row" justifyContent="space-around" alignItems="center">
            {postOptions.map((option, index) => (
              <Box key={index} textAlign="center">
                <IconButton 
                  disableRipple 
                  disableFocusRipple 
                  sx={{ 
                    color: 'white',
                    backgroundColor: 'rgba(25, 118, 210, 0.9)',
                    '&:hover': {
                      backgroundColor: 'rgba(25, 118, 210, 1)'
                    }
                  }}
                >
                  {option.icon}
                </IconButton>
                <Typography variant="caption" sx={{ color: 'white' }}>{option.label}</Typography>
              </Box>
            ))}
          </Stack>
        </Box>
      </Modal>

      {/* Bottom Navigation */}
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation showLabels>
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="List" icon={<ListIcon />} />
          <BottomNavigationAction label="Post" icon={<AddCircleIcon />} onClick={handlePostClick} />
          <BottomNavigationAction label="Saves" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Inbox" icon={<MailIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

export default Property_Map;