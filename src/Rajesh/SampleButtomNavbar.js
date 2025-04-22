import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import AddIcon from '@mui/icons-material/Add';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './SampleBottomNavbar.css';



const navItems = [
  { key: 'home', icon: <HomeIcon />, route: '#' },
  { key: 'construction', icon: <BuildIcon />, route: '#' },
  { key: 'post', icon: <AddIcon />, route: '#' },
  { key: 'services', icon: <CleaningServicesIcon />, route: '#' },
  { key: 'profile', icon: <AccountCircleIcon />, route: '#' },
];

const SampleBottomNavbar = () => {
  const [active, setActive] = useState('post');
  const navigate = useNavigate();

  const handleClick = (item) => {
    setActive(item.key);
    navigate(item.route);
  };

  const activeIndex = navItems.findIndex(item => item.key === active);
  const itemWidth = 100 / navItems.length;

  return (
    <div className="bottom-navbar">
      <svg className="wave" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path
          d={`
            M0,0 
            H${activeIndex * itemWidth} 
            C${activeIndex * itemWidth + itemWidth / 4},0
             ${activeIndex * itemWidth + itemWidth / 4},45
             ${activeIndex * itemWidth + itemWidth / 2},45
            C${activeIndex * itemWidth + itemWidth * 3 / 4},45
             ${activeIndex * itemWidth + itemWidth * 3 / 4},0
             ${activeIndex * itemWidth + itemWidth},0 
            H100 
            V100
            H0 
            Z
          `}
        />
      </svg>

      {navItems.map((item) => (
        <button
          key={item.key}
          className={`nav-btn ${active === item.key ? 'active' : ''}`}
          onClick={() => handleClick(item)}
        >
          <span className="icon">{item.icon}</span>
        </button>
      ))}
    </div>
  );
};

export default SampleBottomNavbar;
