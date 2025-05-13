import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ConstructionIcon from '@mui/icons-material/Construction';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './W_Navbar.css';

const navItems = [
  { key: 'home', icon: <HomeIcon />, route: '/dashboard', label: 'Home' },
  { key: 'construction', icon: <ConstructionIcon />, route: '/constructions', label: 'Construction &Interior' },
  { key: 'spacer', isSpacer: true },
  { key: 'services', icon: <CleaningServicesIcon />, route: '/home-service', label: 'Home Services' },
  { key: 'profile', icon: <AccountCircleIcon />, route: '/work-detail', label: 'Profile' },
];

const centerItem = { key: 'post', icon: <AddCircleIcon />, route: '/post', label: '', isCenter: true };

const W_Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const navRef = useRef(null);
  const [currentKey, setCurrentKey] = useState('home');

  useEffect(() => {
    let activeItem = 'home';

    const profileRoutes = ['/W_Buy', '/W_Post', '/W_Lease', '/W_Rent'];
    const isProfilePath = profileRoutes.some((path) => location.pathname.startsWith(path));

    if (isProfilePath) {
      activeItem = 'profile';
    } else if (location.pathname.startsWith(centerItem.route)) {
      activeItem = centerItem.key;
    } else {
      const matchedItem = navItems.find((item) =>
        location.pathname.startsWith(item.route)
      );
      activeItem = matchedItem?.key || 'home';
    }

    setCurrentKey(activeItem);

    // Move indicator under active item
    const navEl = navRef.current;
    const activeEl = navEl?.querySelector(`[data-key="${activeItem}"]`);
    const indicator = navEl?.querySelector('.cbn-indicator');

    if (activeEl && indicator) {
      indicator.style.width = `${activeEl.offsetWidth}px`;
      indicator.style.left = `${activeEl.offsetLeft}px`;
    }
  }, [location.pathname]);

  const handleNav = (item) => {
    if (!item.isSpacer) navigate(item.route);
  };

  return (
    <div className="cbn-wrapper">
      <div className="cbn-bar" ref={navRef}>
        {navItems.map((item) =>
          item.isSpacer ? (
            <div key="spacer" className="cbn-spacer" />
          ) : (
            <div
              key={item.key}
              data-key={item.key}
              className={`cbn-nav-item ${currentKey == item.key ? 'cbn-active' : ''}`}
              onClick={() => handleNav(item)}
            >
              {item.icon}
              <div className="cbn-label">{item.label}</div>
            </div>
          )
        )}

        <div
          className={`cbn-nav-item cbn-center ${currentKey == centerItem.key ? 'cbn-active' : ''}`}
          data-key={centerItem.key}
          onClick={() => handleNav(centerItem)}
        >
          {centerItem.icon}
          <div className="cbn-label">{centerItem.label}</div>
        </div>

        <div className="cbn-indicator" />
      </div>
    </div>
  );
};

export default W_Navbar;
