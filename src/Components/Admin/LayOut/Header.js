// src/Components/Admin/Header/Header.js
import React, { useState } from 'react';
import Logo from '../../../Images/plot.jpeg';
import LogoutIcon from '@mui/icons-material/Logout';
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
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
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const navItems = [
  { label: 'Dashboard', path: 'dashboard' },
  { label: 'Properties', path: 'properties' },
  { label: 'Transactions', path: 'transactions' },
  { label: 'All Leads', path: 'leads' },
  { label: 'Agents', path: 'agents' },
  { label: 'Referral & Commission', path: 'referral' },
  { label: 'Subscriptions', path: 'subscriptions' },
];

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const handleAvatarClick = (event) => setProfileAnchorEl(event.currentTarget);
  const handleProfileMenuClose = () => setProfileAnchorEl(null);

  const isActive = (path) => location.pathname.includes(`/admin/${path}`);

  const drawer = (
    <Box sx={{ width: 250 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
        <IconButton onClick={handleDrawerToggle}>
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
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontWeight: isActive(item.path) ? 'bold' : 'normal',
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'white',
          color: 'text.primary',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          zIndex: theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          {isMobile ? (
            <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
              <IconButton onClick={handleDrawerToggle} sx={{ mr: 2 }}>
                <MenuIcon />
              </IconButton>
              <Link to="dashboard" style={{ textDecoration: 'none' }}>
                <img src={Logo} alt="logo" style={{ height: '50px' }} />
              </Link>
              <Box display="flex" alignItems="center">
                <IconButton>
                  <NotificationsNoneIcon />
                </IconButton>
                <Avatar
                  onClick={handleAvatarClick}
                  sx={{ width: 40, height: 40, ml: 2 }}
                  alt="Admin"
                />
              </Box>
            </Box>
          ) : (
            <>
              <Link to="dashboard" style={{ textDecoration: 'none' }}>
                <img src={Logo} alt="logo" style={{ height: '75px', paddingTop: '8px' }} />
              </Link>
              <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', gap: 2 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    onClick={() => navigate(item.path)}
                    sx={{
                      color: isActive(item.path) ? 'primary.main' : 'text.primary',
                      fontWeight: isActive(item.path) ? 'bold' : 'normal',
                      textTransform: 'none',
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
              <Box display="flex" alignItems="center">
                <IconButton>
                  <NotificationsNoneIcon />
                </IconButton>
                <Avatar
                  onClick={handleAvatarClick}
                  sx={{ width: 40, height: 40, ml: 2, cursor: 'pointer' }}
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
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
        }}
      >
        {drawer}
      </Drawer>

      <Menu
        anchorEl={profileAnchorEl}
        open={Boolean(profileAnchorEl)}
        onClose={handleProfileMenuClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem onClick={() => { handleProfileMenuClose(); navigate('profile'); }}>
          Profile
        </MenuItem>
        <MenuItem onClick={() => { handleProfileMenuClose(); navigate('kyc'); }}>
          KYC
        </MenuItem>
        <Divider />
        <MenuItem 
          onClick={() => { 
            handleProfileMenuClose(); 
            // Add logout logic here
            navigate('/login'); 
          }}
          sx={{ color: 'error.main' }}
        >
          <LogoutIcon sx={{ mr: 1 }} /> Logout
        </MenuItem>
      </Menu>
    </>
  );
}