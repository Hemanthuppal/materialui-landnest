// // src/Components/Admin/Header/Header.js
// import React, { useState } from 'react';
// import Logo from '../../../assets/LandNestLogo.jpg';
// import LogoutIcon from '@mui/icons-material/Logout';
// import {
//   AppBar,
//   Toolbar,
//   Box,
//   IconButton,
//   Button,
//   Avatar,
//   Drawer,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemText,
//   Menu,
//   MenuItem,
//   useTheme,
//   useMediaQuery,
//   Divider,
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import { useNavigate, useLocation, Link } from 'react-router-dom';

// const navItems = [
//   { label: 'Users', path: '/view' },
//   { label: 'Bestdeals', path: '/admin-bestdeals' },
//   { label: '2Dplans', path: '/admin-2dplans' },
//   { label: '3Dplans', path: '/admin-3dplans' },
//   { label: 'Elevations', path: '/admin-elevation' },
//   { label: 'Explore Category', path: '/admin-explore-category' },
//   { label: 'Package', path: '/admin-packages' },
// ];

// export default function Header() {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [profileAnchorEl, setProfileAnchorEl] = useState(null);

//   const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
//   const handleAvatarClick = (event) => setProfileAnchorEl(event.currentTarget);
//   const handleProfileMenuClose = () => setProfileAnchorEl(null);

//   const isActive = (path) => location.pathname == path;

//   const handleLogout = () => {
//     handleProfileMenuClose();
//     // Clear any admin session data if needed
//     // localStorage.removeItem('adminToken');
//     window.location.href = '/login'; // Full page reload to ensure clean state
//   };

//   const drawer = (
//     <Box sx={{ width: 250 }}>
//       <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
//         <IconButton onClick={handleDrawerToggle}>
//           <CloseIcon />
//         </IconButton>
//       </Box>
//       <Divider />
//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item.label} disablePadding>
//             <ListItemButton
//               onClick={() => {
//                 handleDrawerToggle();
//                 navigate(item.path);
//               }}
//               selected={isActive(item.path)}
//             >
//               <ListItemText
//                 primary={item.label}
//                 primaryTypographyProps={{
//                   fontWeight: isActive(item.path) ? 'bold' : 'normal',
//                 }}
//               />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <>
//       <AppBar
//         position="fixed"
//         sx={{
//           backgroundColor: 'white',
//           color: 'text.primary',
//           boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//           zIndex: theme.zIndex.drawer + 1,
//         }}
//       >
//         <Toolbar>
//           {isMobile ? (
//             <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
//               <IconButton onClick={handleDrawerToggle} sx={{ mr: 2 }}>
//                 <MenuIcon />
//               </IconButton>
//               <Link to="/view" style={{ textDecoration: 'none' }}>
//                 <img src={Logo} alt="logo" style={{ height: '50px' }} />
//               </Link>
//               <Box display="flex" alignItems="center">
//                 <IconButton>
//                   <NotificationsNoneIcon />
//                 </IconButton>
//                 <Avatar
//                   onClick={handleAvatarClick}
//                   sx={{ width: 40, height: 40, ml: 2 }}
//                   alt="Admin"
//                 />
//               </Box>
//             </Box>
//           ) : (
//             <>
//               <Link to="/view" style={{ textDecoration: 'none' }}>
//                 <img src={Logo} alt="logo" style={{ height: '75px', paddingTop: '8px' }} />
//               </Link>
//               <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', gap: 2 }}>
//                 {navItems.map((item) => (
//                   <Button
//                     key={item.label}
//                     onClick={() => navigate(item.path)}
//                     sx={{
//                       color: isActive(item.path) ? 'primary.main' : 'text.primary',
//                       fontWeight: isActive(item.path) ? 'bold' : 'normal',
//                       textTransform: 'none',
//                     }}
//                   >
//                     {item.label}
//                   </Button>
//                 ))}
//               </Box>
//               <Box display="flex" alignItems="center">
//                 <IconButton>
//                   <NotificationsNoneIcon />
//                 </IconButton>
//                 <Avatar
//                   onClick={handleAvatarClick}
//                   sx={{ width: 40, height: 40, ml: 2, cursor: 'pointer' }}
//                   alt="Admin"
//                 />
//               </Box>
//             </>
//           )}
//         </Toolbar>
//       </AppBar>

//       <Drawer
//         variant="temporary"
//         open={mobileOpen}
//         onClose={handleDrawerToggle}
//         ModalProps={{ keepMounted: true }}
//         sx={{
//           '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
//         }}
//       >
//         {drawer}
//       </Drawer>

//       <Menu
//         anchorEl={profileAnchorEl}
//         open={Boolean(profileAnchorEl)}
//         onClose={handleProfileMenuClose}
//         anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
//         transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//       >
//         <MenuItem onClick={() => { handleProfileMenuClose(); navigate('/admin-profile'); }}>
//           Profile
//         </MenuItem>
//         <Divider />
//         <MenuItem
//           onClick={handleLogout}
//           sx={{ color: 'error.main' }}
//         >
//           <LogoutIcon sx={{ mr: 1 }} /> Logout
//         </MenuItem>
//       </Menu>
//     </>
//   );
// }

import React, { useState } from "react";
import Logo from "../../../assets/LandNestLogo.jpg";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Button,
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
  Divider,
  Typography,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { useNavigate, useLocation, Link } from "react-router-dom";

const navItems = [
  { label: "Users", path: "/admin-customers" },
  { label: "Bestdeals", path: "/admin-bestdeals" },
  { label: "2Dplans", path: "/admin-2dplans" },
  { label: "3Dplans", path: "/admin-3dplans" },
  { label: "Elevations", path: "/admin-elevation" },
  { label: "Explore Category", path: "/admin-material" },
  { label: "Package", path: "/admin-packages" },
];

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const [notificationCount] = useState(3); // Mock notification count

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const handleAvatarClick = (event) => setProfileAnchorEl(event.currentTarget);
  const handleProfileMenuClose = () => setProfileAnchorEl(null);

  const isActive = (path) => location.pathname == path;

  const handleLogout = () => {
    handleProfileMenuClose();
    // Clear any admin session data if needed
    // localStorage.removeItem('adminToken');
    window.location.href = "/login"; // Full page reload to ensure clean state
  };

  const drawer = (
    <Box
      sx={{
        width: 280,
        background:
          "linear-gradient(145deg, rgba(232,224,208,0.95), rgba(216,204,186,0.95))",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
          background: "linear-gradient(135deg, #0d0d25, #000)",
          color: "#f7e896",
        }}
      >
        <Typography variant="h6">LANDNEST</Typography>
        <IconButton onClick={handleDrawerToggle} sx={{ color: "#f7e896" }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              onClick={() => {
                handleDrawerToggle();
                navigate(item.path);
              }}
              selected={isActive(item.path)}
              sx={{
                "&.Mui-selected": {
                  background:
                    "linear-gradient(135deg, rgba(241,229,124,0.3), rgba(230,206,69,0.3))",
                  borderLeft: "4px solid #e6ce45",
                },
                "&:hover": {
                  background:
                    "linear-gradient(135deg, rgba(241,229,124,0.2), rgba(230,206,69,0.2))",
                },
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontWeight: isActive(item.path) ? "bold" : "normal",
                  color: isActive(item.path) ? "#0d0d25" : "inherit",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ mt: "auto", p: 2 }}>
        <Button
          fullWidth
          variant="contained"
          startIcon={<LogoutIcon />}
          onClick={handleLogout}
          sx={{
            background: "linear-gradient(135deg, #f1e57c, #e6ce45)",
            color: "#000",
            fontWeight: "bold",
            "&:hover": {
              background: "linear-gradient(135deg, #ffe85c, #f0d53e)",
            },
          }}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: "linear-gradient(135deg, #0d0d25, #000)",
          color: "#f7e896",
          boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
          zIndex: theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          {isMobile ? (
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              width="100%"
            >
              <IconButton
                onClick={handleDrawerToggle}
                sx={{ mr: 2, color: "#f7e896" }}
              >
                <MenuIcon />
              </IconButton>
              <Link to="/view" style={{ textDecoration: "none" }}>
                <img
                  src={Logo}
                  alt="logo"
                  style={{
                    height: "40px",
                    borderRadius: "50%",
                    border: "2px solid #f7e896",
                  }}
                />
              </Link>
              <Box display="flex" alignItems="center">
                <IconButton sx={{ color: "#f7e896" }}>
                  <Badge badgeContent={notificationCount} color="error">
                    <NotificationsNoneIcon />
                  </Badge>
                </IconButton>
                <Avatar
                  onClick={handleAvatarClick}
                  sx={{
                    width: 36,
                    height: 36,
                    ml: 2,
                    border: "2px solid #f7e896",
                    cursor: "pointer",
                  }}
                  alt="Admin"
                />
              </Box>
            </Box>
          ) : (
            <>
              <Link
                to="/view"
                style={{
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src={Logo}
                  alt="logo"
                  style={{
                    height: "50px",
                    borderRadius: "50%",
                    border: "2px solid #f7e896",
                    marginRight: "16px",
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    color: "#f7e896",
                    fontWeight: "bold",
                    letterSpacing: "1px",
                  }}
                >
                  LANDNEST ADMIN
                </Typography>
              </Link>
              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  justifyContent: "center",
                  gap: 1,
                  ml: 4,
                }}
              >
                {navItems.map((item) => (
                  // <Button
                  // disableRipple
                  // disableElevation
                  //   key={item.label}
                  //   onClick={() => navigate(item.path)}
                  //   sx={{
                  //     color: isActive(item.path) ? '#f7e896' : 'rgba(247,232,150,0.8)',
                  //     fontWeight: isActive(item.path) ? 'bold' : 'normal',
                  //     textTransform: 'none',
                  //     letterSpacing: '0.5px',
                  //     minWidth: 'auto',
                  //     px: 2,
                  //     '&:hover': {
                  //       color: '#f7e896',
                  //       background: 'rgba(247,232,150,0.1)'
                  //     }
                  //   }}
                  // >
                  //   {item.label}
                  // </Button>
                  <Button
                    disableRipple
                    disableElevation
                    key={item.label}
                    onClick={() => navigate(item.path)}
                    sx={{
                      color: isActive(item.path)
                        ? "#f7e896"
                        : "rgba(247,232,150,0.8)",
                      fontWeight: isActive(item.path) ? "bold" : "normal",
                      textTransform: "none",
                      letterSpacing: "0.5px",
                      minWidth: "auto",
                      px: 2,
                      borderBottom: isActive(item.path)
                        ? "3px solid #f7e896"
                        : "3px solid transparent",
                      borderRadius: 0,
                      "&:hover": {
                        color: "#f7e896",
                        background: "rgba(247,232,150,0.1)",
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
              <Box display="flex" alignItems="center">
                <IconButton sx={{ color: "#f7e896" }}>
                  <Badge badgeContent={notificationCount} color="error">
                    <NotificationsNoneIcon />
                  </Badge>
                </IconButton>
                <Avatar
                  onClick={handleAvatarClick}
                  sx={{
                    width: 40,
                    height: 40,
                    ml: 2,
                    border: "2px solid #f7e896",
                    cursor: "pointer",
                  }}
                  alt="Admin"
                />
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 280,
            borderRight: "none",
          },
        }}
      >
        {drawer}
      </Drawer>

      <Menu
        anchorEl={profileAnchorEl}
        open={Boolean(profileAnchorEl)}
        onClose={handleProfileMenuClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          elevation: 3,
          sx: {
            background:
              "linear-gradient(145deg, rgba(232,224,208,0.95), rgba(216,204,186,0.95))",
            minWidth: 200,
            borderRadius: 2,
            overflow: "hidden",
            "& .MuiDivider-root": {
              my: 0.5,
            },
          },
        }}
      >
        <MenuItem
          onClick={() => {
            handleProfileMenuClose();
            navigate("/admin-profile");
          }}
          sx={{
            "&:hover": {
              background: "rgba(241,229,124,0.2)",
            },
          }}
        >
          Profile
        </MenuItem>
        <Divider />
        <MenuItem
          disableRipple
          disableElevation
          onClick={handleLogout}
          sx={{
            color: "error.main",
            "&:hover": {
              background: "rgba(241,229,124,0.2)",
            },
          }}
        >
          <LogoutIcon sx={{ mr: 1 }} /> Logout
        </MenuItem>
      </Menu>
    </>
  );
}
