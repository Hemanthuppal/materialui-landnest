import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './FormsBottomNavbar.css';

const navItems = [
  { key: 'home', icon: <HomeIcon />, route: '/dashboard', label: 'Home' },
  { key: 'construction', icon: <BuildIcon />, route: '/constructions', label: 'Construction' },
  { key: 'post', icon: <AddCircleIcon />, route: '/post', label: 'Post', isCenter: true },
  { key: 'services', icon: <CleaningServicesIcon />, route: '/home-service', label: 'Services' },
  { key: 'profile', icon: <AccountCircleIcon />, route: '/profile', label: 'Profile' },
];

const FormsBottomNavbar = () => {
  const [active, setActive] = useState('post');
  const navigate = useNavigate();
  const navRef = useRef(null);

  useEffect(() => {
    const current = document.querySelector(`.nav-item[data-key="${active}"]`);
    const indicator = document.querySelector('.nav-indicator');
    if (current && indicator) {
      const { offsetLeft, offsetWidth } = current;
      indicator.style.left = `${offsetLeft + offsetWidth / 2 - 25}px`;
    }
  }, [active]);

  const handleNav = (item) => {
    setActive(item.key);
    navigate(item.route);
  };

  return (
    <div className="nav-wrapper">
      <div className="nav-bar" ref={navRef}>
        {navItems.map((item) => (
          <div
            key={item.key}
            data-key={item.key}
            className={`nav-item ${active === item.key ? 'active' : ''} ${item.isCenter ? 'center' : ''}`}
            onClick={() => handleNav(item)}
          >
            {item.icon}
            {!item.isCenter && <span className="nav-label">{item.label}</span>}
          </div>
        ))}
        <div className="nav-indicator" />
      </div>
    </div>
  );
};

export default FormsBottomNavbar;
