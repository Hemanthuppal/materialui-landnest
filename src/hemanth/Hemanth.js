import React from 'react';
import { 
  BottomNavigation, 
  BottomNavigationAction, 
  Paper,
  ThemeProvider,
  createTheme
} from '@mui/material';
import {
  Home as HomeIcon,
  List as ListIcon,
  Bookmark as SavedIcon,
  Inbox as InboxIcon,
} from '@mui/icons-material';
import { styled } from '@mui/system';

// Create a default theme
const theme = createTheme();

const StyledBottomNavigation = styled(BottomNavigation)(({ theme }) => ({
  backgroundColor: theme?.palette?.background?.paper || '#ffffff', // Fallback to white
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  boxShadow: '0px -2px 10px rgba(0, 0, 0, 0.1)',
}));

const MobileFooter = () => {
  const [value, setValue] = React.useState(0);

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={3}>
        <StyledBottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            // Add your navigation logic here
            console.log('Navigating to:', newValue);
          }}
        >
          <BottomNavigationAction 
            label="Home" 
            icon={<HomeIcon />} 
            sx={{
              '&.Mui-selected': {
                color: 'primary.main',
              },
            }}
          />
          <BottomNavigationAction 
            label="List" 
            icon={<ListIcon />} 
            sx={{
              '&.Mui-selected': {
                color: 'primary.main',
              },
            }}
          />
          <BottomNavigationAction 
            label="Saved" 
            icon={<SavedIcon />} 
            sx={{
              '&.Mui-selected': {
                color: 'primary.main',
              },
            }}
          />
          <BottomNavigationAction 
            label="Inbox" 
            icon={<InboxIcon />} 
            sx={{
              '&.Mui-selected': {
                color: 'primary.main',
              },
            }}
          />
        </StyledBottomNavigation>
      </Paper>
    </ThemeProvider>
  );
};

export default MobileFooter;