// import React from 'react';
// import {
//   BottomNavigation,
//   BottomNavigationAction,
//   Paper
// } from '@mui/material';
// import {
//   Home as HomeIcon,
//   List as ListIcon,
//   Favorite as FavoriteIcon,
//   Mail as MailIcon
// } from '@mui/icons-material';
// import { useNavigate, useLocation } from 'react-router-dom';
// import './BottomNavbar.css';

// const BottomNavbar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Map pathname to bottom navigation index
//   const getTabValue = (path) => {
//     switch (path) {
//       case '/dashboard':
//         return 0;
//       case '/details':
//         return 1;
//       case '/rent-saves':
//         return 2;
//       case '/inboxlist':
//         return 3;
//       default:
//         return 0;
//     }
//   };

//   const handleChange = (event, newValue) => {
//     if (newValue == 0) navigate('/dashboard');
//     if (newValue == 1) navigate('/details');
//     if (newValue == 2) navigate('/rent-saves');
//     if (newValue == 3) navigate('/inboxlist');
//   };

//   return (
//     <Paper className="rent-bottomnavbar-paper" elevation={3}>
//       <BottomNavigation
//         value={getTabValue(location.pathname)}
//         onChange={handleChange}
//         showLabels
//         className="rent-bottomnavbar-navigation"
//       >
//         <BottomNavigationAction label="Home" icon={<HomeIcon />} />
//         <BottomNavigationAction label="List" icon={<ListIcon />} />
//         <BottomNavigationAction label="Saves" icon={<FavoriteIcon />} />
//         <BottomNavigationAction label="Inbox" icon={<MailIcon />} />
//       </BottomNavigation>
//     </Paper>
//   );
// };

// export default BottomNavbar;
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import '../../Rajesh/CustomBottomNav.css';

const navItems = [
  { key: 'home', icon: <HomeIcon />, route: '/dashboard', label: 'Home' },
  { key: 'list', icon: <FormatListBulletedIcon />, route: '/details', label: 'List' },
  { key: 'saves', icon: <FavoriteBorderIcon />, route: '/rent-saves', label: 'Saves' },
  { key: 'inbox', icon: <MailOutlineIcon />, route: '/inboxlist', label: 'Inbox' },
];

const BottomNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentKey, setCurrentKey] = useState('');
  const navRef = useRef(null);

  // Update active key based on location.pathname
  useEffect(() => {
    const activeItem = navItems.find((item) => location.pathname.startsWith(item.route))?.key || 'home';
    setCurrentKey(activeItem);
  }, [location.pathname]);

  // Handle navigation and set active key
  const handleNav = (item) => {
    setCurrentKey(item.key);
    navigate(item.route);
  };

  // Use useEffect to adjust the indicator position
  useEffect(() => {
    const current = navRef.current?.querySelector(`.nav-item[data-key="${currentKey}"]`);
    const indicator = navRef.current?.querySelector('.nav-indicator');
    if (current && indicator) {
      const { offsetLeft, offsetWidth } = current;
      indicator.style.left = `${offsetLeft + offsetWidth / 2 - 25}px`; // Adjust the indicator position based on the active item
    }
  }, [currentKey]);

  return (
    <div className="nav-wrapper">
      <div className="nav-bar" ref={navRef}>
        {navItems.map((item) => (
          <div
            key={item.key}
            data-key={item.key}
            className={`nav-item ${currentKey == item.key ? 'nav-item-active' : ''}`}
            onClick={() => handleNav(item)}
          >
            {item.icon}
            <div className="nav-label">{item.label}</div>
          </div>
        ))}
        <div className="nav-indicator" />
      </div>
    </div>
  );
};

export default BottomNavbar;
