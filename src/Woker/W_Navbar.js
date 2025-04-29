import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import './W_Navbar.css';

const navItems = [
  { key: 'home', icon: <HomeIcon />, route: '/dashboard', label: 'Home' },
  { key: 'list', icon: <FormatListBulletedIcon />, route: '/lease_details', label: 'List' },
  { key: 'saves', icon: <FavoriteBorderIcon />, route: '/lease_save', label: 'Saves' },
  { key: 'inbox', icon: <MailOutlineIcon />, route: '/inboxlist', label: 'Inbox' },
];

const W_Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentKey, setCurrentKey] = useState('');
  const navRef = useRef(null);

  
  useEffect(() => {
    let activeItem = 'home'; // Default fallback
  
    const listPaths = ['/W_Buy', '/W_Rent', '/W_Lease', '/W_Post'];
    const isListPath = listPaths.some((path) => location.pathname.startsWith(path));
  
    if (isListPath) {
      activeItem = 'list';
    } else {
      const matchedItem = navItems.find((item) =>
        location.pathname.startsWith(item.route)
      );
      if (matchedItem) {
        activeItem = matchedItem.key;
      }
    }
  
    setCurrentKey(activeItem);
  }, [location.pathname, navItems]);
  

  const handleNav = (item) => {
    setCurrentKey(item.key);
    navigate(item.route);
  };

  useEffect(() => {
    const current = navRef.current?.querySelector(`.nav-item[data-key="${currentKey}"]`);
    const indicator = navRef.current?.querySelector('.nav-indicator');
    if (current && indicator) {
      const { offsetLeft, offsetWidth } = current;
      indicator.style.left = `${offsetLeft + offsetWidth / 2 - 25}px`;
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

export default W_Navbar;
