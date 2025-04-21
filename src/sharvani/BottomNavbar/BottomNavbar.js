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
import { useNavigate, useLocation } from 'react-router-dom';
import './BottomNavbar.css';

const BottomNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Map pathname to bottom navigation index
  const getTabValue = (path) => {
    switch (path) {
      case '/dashboard':
        return 0;
      case '/details':
        return 1;
      case '/rent-saves':
        return 2;
      case '/inboxlist':
        return 3;
      default:
        return 0;
    }
  };

  const handleChange = (event, newValue) => {
    if (newValue === 0) navigate('/dashboard');
    if (newValue === 1) navigate('/details');
    if (newValue === 2) navigate('/rent-saves');
    if (newValue === 3) navigate('/inboxlist');
  };

  return (
    <Paper className="rent-bottomnavbar-paper" elevation={3}>
      <BottomNavigation
        value={getTabValue(location.pathname)}
        onChange={handleChange}
        showLabels
        className="rent-bottomnavbar-navigation"
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="List" icon={<ListIcon />} />
        <BottomNavigationAction label="Saves" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Inbox" icon={<MailIcon />} />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNavbar;
