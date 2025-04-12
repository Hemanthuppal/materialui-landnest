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
  borderRadius: 25,
  backgroundColor: alpha(theme.palette.common.white, 0.95),
  width: '100%',
  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#9e9e9e',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: '100%',
  '& .MuiInputBase-input': {
    padding: '8px 8px 8px 40px',
    fontSize: '0.9rem',
    width: '100%',
  },
}));

const Sidebar = styled(Box)(({ theme }) => ({
  width: '60px',
  backgroundColor: '#f0f2f5',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRight: '2px solid #2196f3',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    right: 0,
    top: 0,
    width: '2px',
    height: '100%',
    background: 'linear-gradient(to bottom, #2196f3 70%, transparent)',
  },
}));

const CategoryCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: 16,
  marginBottom: theme.spacing(2),
  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
}));

const ImageCard = styled(Paper)(({ theme }) => ({
  position: 'relative',
  borderRadius: 16,
  overflow: 'hidden',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  height: '140px',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  '& .overlay': {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: '#fff',
    padding: '8px 12px',
    fontSize: '0.9rem',
    fontWeight: 500,
  },
}));

// Custom styled bottom navigation icons with 3D gold effect
const StyledBottomNavIcon = styled(Box)(({ theme }) => ({
  width: 32,
  height: 32,
  borderRadius: '50%',
  background: 'linear-gradient(145deg, #FFD700, #FFA500)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '2px 2px 5px rgba(0,0,0,0.2), -2px -2px 5px rgba(255,255,255,0.5)',
  '& svg': {
    fontSize: '1.2rem',
    color: '#fff',
  },
}));

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', maxWidth: '430px', margin: '0 auto', bgcolor: '#fff' }}>
      <AppBar position="static" sx={{ bgcolor: 'white', boxShadow: 'none', pt: 1 }}>
        <Toolbar sx={{ minHeight: '48px !important', px: 2, gap: 1 }}>
          <IconButton edge="start" sx={{ p: 0 }}>
            <Avatar 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=32&h=32&q=80"
              sx={{ width: 36, height: 36 }}
            />
          </IconButton>
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{ fontSize: '1.2rem' }} />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" />
          </Search>
          <IconButton size="small">
            <FavoriteBorderIcon sx={{ fontSize: '1.3rem', color: '#757575' }} />
          </IconButton>
          <IconButton size="small">
            <NotificationsNoneIcon sx={{ fontSize: '1.3rem', color: '#757575' }} />
          </IconButton>
          <IconButton size="small">
            <ChatBubbleOutlineIcon sx={{ fontSize: '1.3rem', color: '#757575' }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box sx={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <Sidebar>
          <Box sx={{ py: 2, display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'center' }}>
            <Typography sx={{ fontSize: '0.75rem', color: '#424242' }}>New</Typography>
            <Typography sx={{ 
              writingMode: 'vertical-rl', 
              transform: 'rotate(180deg)',
              fontSize: '0.75rem',
              color: '#424242',
              letterSpacing: '0.5px',
              whiteSpace: 'nowrap'
            }}>
              Building For Sale
            </Typography>
            <Typography sx={{ fontSize: '0.75rem', color: '#424242' }}>Quick Deals</Typography>
            <Typography sx={{ 
              writingMode: 'vertical-rl', 
              transform: 'rotate(180deg)',
              fontSize: '0.75rem',
              color: '#424242',
              letterSpacing: '0.5px',
              whiteSpace: 'nowrap'
            }}>
              Hot Properties
            </Typography>
            <Typography sx={{ fontSize: '0.75rem', color: '#424242' }}>Best Deals</Typography>
          </Box>
        </Sidebar>

        <Box sx={{ flex: 1, p: 2, overflow: 'auto' }}>
          <Typography sx={{ fontSize: '1.1rem', fontWeight: 600, mb: 2, color: '#1a1a1a' }}>
            Looking for
          </Typography>

          <Grid container spacing={2} sx={{ mb: 3 }}>
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
            <Typography sx={{ fontSize: '1rem', fontWeight: 600, mb: 2, color: '#1a1a1a' }}>
              Constructions
            </Typography>
            <ImageCard sx={{ height: '160px' }}>
              <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="New Building Construction" />
              <div className="overlay">New Building Construction</div>
            </ImageCard>
          </CategoryCard>

          <CategoryCard>
            <Typography sx={{ fontSize: '1rem', fontWeight: 600, mb: 2, color: '#1a1a1a' }}>
              Interiors
            </Typography>
            <Grid container spacing={2}>
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
            <Typography sx={{ fontSize: '1rem', fontWeight: 600, mb: 1, color: '#1a1a1a' }}>
              Home service
            </Typography>
            <Typography sx={{ fontSize: '0.9rem', color: '#616161' }}>
              Painting Electrician Plumbing etc..
            </Typography>
          </CategoryCard>
        </Box>
      </Box>

      <Paper elevation={3} sx={{ mt: 'auto' }}>
        <BottomNavigation
          showLabels
          sx={{
            height: 65,
            '& .MuiBottomNavigationAction-root': {
              minWidth: 'auto',
              padding: '6px 0',
              color: '#757575',
            },
            '& .MuiBottomNavigationAction-label': {
              fontSize: '0.65rem',
              marginTop: '4px',
            },
          }}
        >
          <BottomNavigationAction 
            label="Home" 
            icon={
              <StyledBottomNavIcon>
                <HomeIcon />
              </StyledBottomNavIcon>
            } 
          />
          <BottomNavigationAction 
            label="Construction & Interiors" 
            icon={
              <StyledBottomNavIcon>
                <BuildIcon />
              </StyledBottomNavIcon>
            }
          />
          <BottomNavigationAction
            label="Post"
            icon={
              <StyledBottomNavIcon sx={{ background: 'linear-gradient(145deg, #2196f3, #1976d2)' }}>
                <AddIcon />
              </StyledBottomNavIcon>
            }
          />
          <BottomNavigationAction 
            label="Home Services" 
            icon={
              <StyledBottomNavIcon>
                <CleaningServicesIcon />
              </StyledBottomNavIcon>
            }
          />
          <BottomNavigationAction 
            label="Profile" 
            icon={
              <StyledBottomNavIcon>
                <AccountCircleIcon />
              </StyledBottomNavIcon>
            }
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

export default App;