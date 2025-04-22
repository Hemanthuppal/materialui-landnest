// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import HomeIcon from '@mui/icons-material/Home';
// import BuildIcon from '@mui/icons-material/Build';
// import AddIcon from '@mui/icons-material/Add';
// import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import './nav2.css';

// const navLinks = [
//   { key: 'home', icon: <HomeIcon />, route: '#' },
//   { key: 'construction', icon: <BuildIcon />, route: '#' },
//   { key: 'add', icon: <AddIcon />, route: '#', isMain: true },
//   { key: 'services', icon: <CleaningServicesIcon />, route: '#' },
//   { key: 'profile', icon: <AccountCircleIcon />, route: '#' },
// ];

// const FloatingBottomNav = () => {
//   const [selected, setSelected] = useState('add');
//   const navigate = useNavigate();

//   const handleNavClick = (link) => {
//     setSelected(link.key);
//     navigate(link.route);
//   };

//   return (
//     <div className="glassy-nav-container">
//       {navLinks.map((link) => (
//         <button
//           key={link.key}
//           className={`glassy-nav-button ${link.isMain ? 'glassy-main-button' : ''} ${selected === link.key ? 'nav-selected' : ''}`}
//           onClick={() => handleNavClick(link)}
//         >
//           <span className="glassy-nav-icon">{link.icon}</span>
//         </button>
//       ))}
//     </div>
//   );
// };

// export default FloatingBottomNav;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import AddIcon from '@mui/icons-material/Add';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './nav2.css';

const menuItems = [
  { key: 'home', icon: <HomeIcon />, route: '' },
  { key: 'build', icon: <BuildIcon />, route: '' },
  { key: 'post', icon: <AddIcon />, route: '', isMain: true },
  { key: 'clean', icon: <CleaningServicesIcon />, route: '' },
  { key: 'profile', icon: <AccountCircleIcon />, route: '' },
];

const LuxuryBottomNavbar = () => {
  const [active, setActive] = useState('post');
  const navigate = useNavigate();

  const handleClick = (item) => {
    setActive(item.key);
    navigate(item.route);
  };

  return (
    <div className="lux-nav-container">
      {menuItems.map((item) => (
        <button
          key={item.key}
          className={`lux-nav-btn ${item.isMain ? 'lux-nav-main' : ''} ${active === item.key ? 'active-glow' : ''}`}
          onClick={() => handleClick(item)}
        >
          <span className="lux-nav-icon">{item.icon}</span>
        </button>
      ))}
    </div>
  );
};

export default LuxuryBottomNavbar;
