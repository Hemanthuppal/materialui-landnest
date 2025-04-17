import React from 'react';
import { BottomNavigation, BottomNavigationAction, Paper, Badge, Box } from '@mui/material';
import { Home, Explore, FavoriteBorder, MailOutline } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const FormsBottomNavbar = () => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // Navigation based on index or add route paths in array
    switch (newValue) {
      case 0:
        // navigate('/home');
        break;
      case 1:
        // navigate('/list');
        break;
      case 2:
        // navigate('/saves');
        break;
      case 3:
        // navigate('/inbox');
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
            background: '#fff',
            borderTop: '1px solid #e0e0e0',
          }}
        >
          <BottomNavigationAction label="Home" icon={<Home />} />
          <BottomNavigationAction label="List" icon={<Explore />} />
          <BottomNavigationAction
            label="Saves"
            icon={
              <Badge
                variant="dot"
                color="error"
                overlap="circular"
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              >
                <FavoriteBorder />
              </Badge>
            }
          />
          <BottomNavigationAction label="Inbox" icon={<MailOutline />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

export default FormsBottomNavbar;
