import React from 'react';
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  Box,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import AddIcon from '@mui/icons-material/Add';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const FormsBottomNavbar = () => {
  const [value, setValue] = React.useState('');
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 'home':
        navigate('/dashboard');
        break;
      case 'construction':
        navigate('/constructions');
        break;
      case 'post':
        navigate('/post');
        break;
      case 'services':
        navigate('/home-service');
        break;
      case 'profile':
        navigate('');
        break;
      default:
        break;
    }
  };

  return (
    <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1000 }}>
      <Paper elevation={8}>
        <BottomNavigation
          value={value}
          onChange={handleChange}
          showLabels
          sx={{
            borderTop: '1px solid #e0e0e0',
            height: '60px',
            '& .MuiBottomNavigationAction-root': {
              minWidth: 'auto',
              padding: '6px 0',
              color: '#757575',
            },
            '& .MuiBottomNavigationAction-label': {
              fontSize: '0.7rem',
            },
          }}
        >
          <BottomNavigationAction
            value="home"
            label="Home"
            icon={<HomeIcon sx={{ fontSize: '1.3rem' }} />}
          />
          <BottomNavigationAction
            value="construction"
            label="Construction & Interiors"
            icon={<BuildIcon sx={{ fontSize: '1.3rem' }} />}
          />
          <BottomNavigationAction
            value="post"
            label="Post"
            icon={<AddIcon sx={{ fontSize: '1.3rem' }} />}
            sx={{
              '& .MuiSvgIcon-root': { color: '#2196f3' },
              '& .MuiBottomNavigationAction-label': { color: '#2196f3' },
            }}
          />
          <BottomNavigationAction
            value="services"
            label="Home Services"
            icon={<CleaningServicesIcon sx={{ fontSize: '1.3rem' }} />}
          />
          <BottomNavigationAction
            value="profile"
            label="Profile"
            icon={<AccountCircleIcon sx={{ fontSize: '1.3rem' }} />}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

export default FormsBottomNavbar;
