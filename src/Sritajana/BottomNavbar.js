// BottomNavbar.js
import React from 'react';
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper
} from '@mui/material';
import {
  Home as HomeIcon,
  List as ListIcon,
  Favorite as FavoriteIcon,
  Mail as MailIcon
} from '@mui/icons-material';

const BottomNavbar = () => {
  return (
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
      <BottomNavigation showLabels>
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="List" icon={<ListIcon />} />
        <BottomNavigationAction label="Saves" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Inbox" icon={<MailIcon />} />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNavbar;
