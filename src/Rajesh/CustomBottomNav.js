import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import './CustomBottomNav.css';

const navItems = [
  { key: 'home', icon: <HomeIcon />, route: '/dashboard', label: 'Home' },
  { key: 'list', icon: <FormatListBulletedIcon />, route: '/lease_details', label: 'List' },
  { key: 'saves', icon: <FavoriteBorderIcon />, route: '/lease_save', label: 'Saves' },
  { key: 'inbox', icon: <MailOutlineIcon />, route: '/inboxlist', label: 'Inbox' },
];

const CustomBottomNav = () => {
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
            className={`nav-item ${currentKey === item.key ? 'nav-item-active' : ''}`}
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

export default CustomBottomNav;
