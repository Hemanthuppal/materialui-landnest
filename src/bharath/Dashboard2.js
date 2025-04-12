import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Box,
  Typography,
  Grid,
  Paper,
  BottomNavigation,
  BottomNavigationAction,
  Avatar,
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import AddIcon from '@mui/icons-material/Add';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 20,
  backgroundColor: alpha(theme.palette.common.white, 0.9),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#9e9e9e',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#424242',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(0.8, 0.8, 0.8, 0),
    paddingLeft: `calc(1em + ${theme.spacing(2)})`,
    fontSize: '0.9rem',
    width: '100%',
  },
}));

const Sidebar = styled(Box)(({ theme }) => ({
  width: '50px',
  backgroundColor: '#f8f9fa',
  height: '100%',
  padding: theme.spacing(1, 0),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
  borderRight: '2px solid #e3e3e3',
}));

const CategoryCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1.5),
  borderRadius: 12,
  marginBottom: theme.spacing(1.5),
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
}));

const ImageCard = styled(Paper)(({ theme }) => ({
  position: 'relative',
  borderRadius: 12,
  overflow: 'hidden',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  '& img': {
    width: '100%',
    height: '120px',
    objectFit: 'cover',
  },
  '& .overlay': {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: '#fff',
    padding: theme.spacing(0.8),
    fontSize: '0.9rem',
    fontWeight: 500,
  },
}));

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', bgcolor: '#f8f9fa' }}>
      <AppBar position="static" sx={{ bgcolor: 'white', boxShadow: 'none' }}>
        <Toolbar sx={{ minHeight: '56px !important', px: 1 }}>
          <IconButton edge="start" sx={{ mr: 1 }}>
            <Avatar 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=32&h=32&q=80"
              sx={{ width: 32, height: 32 }}
            />
          </IconButton>
          <Search sx={{ flex: 1, mx: 1 }}>
            <SearchIconWrapper>
              <SearchIcon sx={{ fontSize: '1.2rem' }} />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" />
          </Search>
          <IconButton size="small">
            <FavoriteBorderIcon sx={{ fontSize: '1.2rem', color: '#757575' }} />
          </IconButton>
          <IconButton size="small">
            <NotificationsNoneIcon sx={{ fontSize: '1.2rem', color: '#757575' }} />
          </IconButton>
          <IconButton size="small">
            <ChatBubbleOutlineIcon sx={{ fontSize: '1.2rem', color: '#757575' }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box sx={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <Sidebar>
          <Typography sx={{ fontSize: '0.75rem', color: '#424242', mb: 1 }}>New</Typography>
          <Typography 
            sx={{ 
              writingMode: 'vertical-rl', 
              transform: 'rotate(180deg)',
              fontSize: '0.75rem',
              color: '#424242',
              mb: 2
            }}
          >
            Building For Sale
          </Typography>
          <Typography sx={{ fontSize: '0.75rem', color: '#424242', mb: 1 }}>Quick Deals</Typography>
          <Typography 
            sx={{ 
              writingMode: 'vertical-rl', 
              transform: 'rotate(180deg)',
              fontSize: '0.75rem',
              color: '#424242',
              mb: 2
            }}
          >
            Hot Properties
          </Typography>
          <Typography sx={{ fontSize: '0.75rem', color: '#424242' }}>Best Deals</Typography>
        </Sidebar>

        <Box sx={{ flex: 1, p: 1.5, overflow: 'auto' }}>
          <Typography variant="h6" sx={{ fontSize: '1.1rem', fontWeight: 600, mb: 1.5, color: '#424242' }}>
            Looking for
          </Typography>

          <Grid container spacing={1} sx={{ mb: 2 }}>
            <Grid item xs={6}>
              <ImageCard>
                <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Buy" />
                <div className="overlay">Buy</div>
              </ImageCard>
            </Grid>
            <Grid item xs={6}>
              <ImageCard>
                <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Rent" />
                <div className="overlay">Rent</div>
              </ImageCard>
            </Grid>
            <Grid item xs={6}>
              <ImageCard>
                <img src="https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Lease" />
                <div className="overlay">Lease</div>
              </ImageCard>
            </Grid>
          </Grid>

          <CategoryCard>
            <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 600, mb: 1, color: '#424242' }}>
              Constructions
            </Typography>
            <ImageCard>
              <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="New Building Construction" />
              <div className="overlay">New Building Construction</div>
            </ImageCard>
          </CategoryCard>

          <CategoryCard>
            <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 600, mb: 1, color: '#424242' }}>
              Interiors
            </Typography>
            <Grid container spacing={1.5}>
              <Grid item xs={6}>
                <ImageCard>
                  <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Interiors" />
                  <div className="overlay">Interiors</div>
                </ImageCard>
              </Grid>
              <Grid item xs={6}>
                <ImageCard>
                  <img src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Renovations" />
                  <div className="overlay">Renovations</div>
                </ImageCard>
              </Grid>
            </Grid>
          </CategoryCard>

          <CategoryCard sx={{ bgcolor: '#fffde7', boxShadow: 'none' }}>
            <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 600, mb: 1, color: '#424242' }}>
              Home service
            </Typography>
            <Typography sx={{ fontSize: '0.9rem', color: '#616161' }}>
              Painting Electrician Plumbing etc..
            </Typography>
          </CategoryCard>
        </Box>
      </Box>

      <BottomNavigation
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
          label="Home" 
          icon={<HomeIcon sx={{ fontSize: '1.3rem' }} />} 
        />
        <BottomNavigationAction 
          label="Construction & Interiors" 
          icon={<BuildIcon sx={{ fontSize: '1.3rem' }} />}
        />
        <BottomNavigationAction
          label="Post"
          icon={<AddIcon sx={{ fontSize: '1.3rem' }} />}
          sx={{ 
            '& .MuiSvgIcon-root': { color: '#2196f3' },
            '& .MuiBottomNavigationAction-label': { color: '#2196f3' }
          }}
        />
        <BottomNavigationAction 
          label="Home Services" 
          icon={<CleaningServicesIcon sx={{ fontSize: '1.3rem' }} />}
        />
        <BottomNavigationAction 
          label="Profile" 
          icon={<AccountCircleIcon sx={{ fontSize: '1.3rem' }} />}
        />
      </BottomNavigation>
    </Box>
  );
}

export default App;