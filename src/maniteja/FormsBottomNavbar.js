// import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import HomeIcon from '@mui/icons-material/Home';
// import BuildIcon from '@mui/icons-material/Build';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import './FormsBottomNavbar.css';

// const navItems = [
//   { key: 'home', icon: <HomeIcon />, route: '/dashboard', label: 'Home' },
//   { key: 'construction', icon: <BuildIcon />, route: '/constructions', label: 'Construction' },
//   { key: 'post', icon: <AddCircleIcon />, route: '/post', label: 'Post', isCenter: true },
//   { key: 'services', icon: <CleaningServicesIcon />, route: '/home-service', label: 'Services' },
//   { key: 'profile', icon: <AccountCircleIcon />, route: '/profile', label: 'Profile' },
// ];

// const FormsBottomNavbar = () => {
//   const [active, setActive] = useState('post');
//   const navigate = useNavigate();
//   const navRef = useRef(null);

//   useEffect(() => {
//     const current = document.querySelector(`.nav-item[data-key="${active}"]`);
//     const indicator = document.querySelector('.nav-indicator');
//     if (current && indicator) {
//       const { offsetLeft, offsetWidth } = current;
//       indicator.style.left = `${offsetLeft + offsetWidth / 2 - 25}px`;
//     }
//   }, [active]);

//   const handleNav = (item) => {
//     setActive(item.key);
//     navigate(item.route);
//   };

//   return (
//     <div className="nav-wrapper">
//       <div className="nav-bar" ref={navRef}>
//         {navItems.map((item) => (
//           <div
//             key={item.key}
//             data-key={item.key}
//             className={`nav-item ${active === item.key ? 'active' : ''} ${item.isCenter ? 'center' : ''}`}
//             onClick={() => handleNav(item)}
//           >
//             {item.icon}
//             {!item.isCenter && <span className="nav-label">{item.label}</span>}
//           </div>
//         ))}
//         <div className="nav-indicator" />
//       </div>
//     </div>
//   );
// };

// export default FormsBottomNavbar;

// import React, { useEffect, useRef } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import HomeIcon from '@mui/icons-material/Home';
// import BuildIcon from '@mui/icons-material/Build';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import './FormsBottomNavbar.css';

// const navItems = [
//   { key: 'home', icon: <HomeIcon />, route: '/dashboard' },
//   { key: 'construction', icon: <BuildIcon />, route: '/constructions' },
//   { key: 'post', icon: <AddCircleIcon />, route: '/post', isCenter: true },
//   { key: 'services', icon: <CleaningServicesIcon />, route: '/home-service' },
//   { key: 'profile', icon: <AccountCircleIcon />, route: '/profile' },
// ];

// const FormsBottomNavbar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const navRef = useRef(null);

//   const currentKey = navItems.find(item => location.pathname.startsWith(item.route))?.key || 'post';

//   useEffect(() => {
//     const current = document.querySelector(`.nav-item[data-key="${currentKey}"]`);
//     const indicator = document.querySelector('.nav-indicator');
//     if (current && indicator) {
//       const { offsetLeft, offsetWidth } = current;
//       indicator.style.left = `${offsetLeft + offsetWidth / 2 - 25}px`;
//     }
//   }, [currentKey]);

//   const handleNav = (item) => {
//     navigate(item.route);
//   };

//   return (
//     <div className="nav-wrapper">
//       <div className="nav-bar" ref={navRef}>
//         {navItems.map((item) => (
//           <div
//             key={item.key}
//             data-key={item.key}
//             className={`nav-item ${currentKey === item.key ? 'active' : ''} ${item.isCenter ? 'center' : ''}`}
//             onClick={() => handleNav(item)}
//           >
//             {item.icon}
//           </div>
//         ))}
//         <div className="nav-indicator" />
//       </div>
//     </div>
//   );
// };

// export default FormsBottomNavbar;
// import React, { useEffect, useRef } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import HomeIcon from '@mui/icons-material/Home';
// import BuildIcon from '@mui/icons-material/Build';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import './FormsBottomNavbar.css';

// import ConstructionIcon from '@mui/icons-material/Construction';



// const navItems = [
//   { key: 'home', icon: <HomeIcon />, route: '/dashboard', label: 'Home' },
//   { key: 'construction', icon: <ConstructionIcon />, route: '/constructions', label: 'Construction & Interior' },
//   { key: 'spacer', isSpacer: true },
//   { key: 'services', icon: <CleaningServicesIcon />, route: '/home-service', label: 'Home Services' },
//   { key: 'profile', icon: <AccountCircleIcon />, route: '/work-detail', label: 'Profile' },
// ];

// const centerItem = { key: 'post', icon: <AddCircleIcon />, route: '/post', label: 'Post', isCenter: true };

// const FormsBottomNavbar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const navRef = useRef(null);

//   const currentKey = location.pathname.startsWith(centerItem.route)
//     ? centerItem.key
//     : navItems.find((item) => location.pathname.startsWith(item.route))?.key || 'home';

//   useEffect(() => {
//     const current = document.querySelector(`.nav-item[data-key="${currentKey}"]`);
//     const indicator = document.querySelector('.nav-indicator');
//     if (current && indicator) {
//       const { offsetLeft, offsetWidth } = current;
//       indicator.style.left = `${offsetLeft + offsetWidth / 2 - 25}px`;
//     }
//   }, [currentKey]);

//   const handleNav = (item) => {
//     if (!item.isSpacer) navigate(item.route);
//   };

//   return (
//     <div className="nav-wrapper">
//       <div className="nav-bar" ref={navRef}>
//         {navItems.map((item) =>
//           item.isSpacer ? (
//             <div key="spacer" className="nav-spacer" />
//           ) : (
//             <div
//               key={item.key}
//               data-key={item.key}
//               className={`nav-item ${currentKey === item.key ? 'active' : ''}`}
//               onClick={() => handleNav(item)}
//             >
//               {item.icon}
//               <div className="nav-label">{item.label}</div>
//             </div>
//           )
//         )}

//         <div
//           className={`nav-item center ${currentKey === centerItem.key ? 'active' : ''}`}
//           data-key={centerItem.key}
//           onClick={() => handleNav(centerItem)}
//         >
//           {centerItem.icon}
//           <div className="nav-label">{centerItem.label}</div>
//         </div>

//         <div className="nav-indicator" />
//       </div>
//     </div>
//   );
// };

// export default FormsBottomNavbar;

import React, { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ConstructionIcon from '@mui/icons-material/Construction';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './FormsBottomNavbar.css';

const navItems = [
  { key: 'home', icon: <HomeIcon />, route: '/dashboard', label: 'Home' },
  { key: 'construction', icon: <ConstructionIcon />, route: '/constructions', label: 'Construction &Interior' },
  { key: 'spacer', isSpacer: true },
  { key: 'services', icon: <CleaningServicesIcon />, route: '/home-service', label: 'Home Services' },
  { key: 'profile', icon: <AccountCircleIcon />, route: '/work-detail', label: 'Profile' },
];

const centerItem = { key: 'post', icon: <AddCircleIcon />, route: '/post', label: '', isCenter: true };

const CustomBottomNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const navRef = useRef(null);

  const currentKey = location.pathname.startsWith(centerItem.route)
    ? centerItem.key
    : navItems.find((item) => location.pathname.startsWith(item.route))?.key || 'home';

  useEffect(() => {
    const current = document.querySelector(`.cbn-nav-item[data-key="${currentKey}"]`);
    const indicator = document.querySelector('.cbn-indicator');
    if (current && indicator) {
      const { offsetLeft, offsetWidth } = current;
      indicator.style.left = `${offsetLeft + offsetWidth / 2 - 20}px`;
    }
  }, [currentKey]);

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
              className={`cbn-nav-item ${currentKey === item.key ? 'cbn-active' : ''}`}
              onClick={() => handleNav(item)}
            >
              {item.icon}
              <div className="cbn-label">{item.label}</div>
            </div>
          )
        )}

        <div
          className={`cbn-nav-item cbn-center ${currentKey === centerItem.key ? 'cbn-active' : ''}`}
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

export default CustomBottomNavbar;
