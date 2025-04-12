import React, { useState } from 'react';
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
  Modal,
  Stack
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
import SellIcon from '@mui/icons-material/Sell';
import HouseIcon from '@mui/icons-material/House';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BusinessIcon from '@mui/icons-material/Business';

// Custom Color Palette (approximated from the image)
const primaryColor = '#2196f3'; // Blue
const secondaryColor = '#f5f5f5'; // Light Gray
const accentColor = '#e0f2f7'; // Light Blue-ish
const cardBackgroundColor = '#ffffff';
const textColorPrimary = '#212121'; // Dark Gray
const textColorSecondary = '#757575'; // Medium Gray
const homeServiceBg = '#fffde7'; // Light Yellow-ish

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 5, // Slightly less rounded
  backgroundColor: alpha(theme.palette.common.white, 0.6), // More opaque white
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.8),
  },
  marginLeft: theme.spacing(1),
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1), // Less padding
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: textColorPrimary,
  '& .MuiInputBase-input': {
    padding: theme.spacing(0.5, 1, 0.5, 0), // Reduced vertical padding
    paddingLeft: `calc(1em + ${theme.spacing(2)})`, // Adjusted left padding
    fontSize: '0.875rem', // Slightly smaller font
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Sidebar = styled(Paper)(({ theme }) => ({
  background: accentColor,
  padding: theme.spacing(1), // Reduced padding
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start', // Align text to the left
  borderRadius: 0, // No border radius
  boxShadow: 'none', // No shadow
  width: '50px', // Adjusted width
  marginRight: theme.spacing(1),
}));

const SidebarItem = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(0.75, 1), // Adjusted padding
  fontWeight: 500, // Slightly lighter font weight
  fontSize: '0.8rem', // Smaller font size
  color: textColorPrimary,
  cursor: 'pointer',
  marginBottom: theme.spacing(0.5), // Reduced margin
  whiteSpace: 'nowrap', 
}));

const SidebarItem1 = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(0.75, 1), // Adjusted padding
  fontWeight: 500, // Slightly lighter font weight
  fontSize: '0.8rem', // Smaller font size
  color: textColorPrimary,
  cursor: 'pointer',
  marginTop: theme.spacing(-2), // Reduced margin
  whiteSpace: 'nowrap', 
}));

const VerticalText = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(0.75, 1),
  fontWeight: 500,
  fontSize: '0.8rem',
  color: textColorPrimary,
  cursor: 'pointer',
  marginBottom: theme.spacing(0.5),
  writingMode: 'vertical-rl', // Apply vertical writing mode (right-to-left, top-to-bottom)
  transform: 'rotate(180deg)', // Rotate to make it top-to-bottom
}));

const CategoryBox = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1.5), // Adjusted padding
  marginBottom: theme.spacing(1.5), // Adjusted margin
  borderRadius: 5,
  boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', // Subtle shadow
}));

const CategoryTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600, // Slightly lighter font weight
  fontSize: '1rem',
  color: textColorPrimary,
  marginBottom: theme.spacing(1),
}));

const ImageCard = styled(Paper)(({ theme }) => ({
  position: 'relative',
  borderRadius: 5,
  overflow: 'hidden',
  cursor: 'pointer',
  boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', // Subtle shadow
  '& img': {
    display: 'block',
    width: '100%',
    height: 'auto',
  },
  '& .overlay': {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    background: 'rgba(0, 0, 0, 0.6)', // Slightly more opaque
    color: cardBackgroundColor,
    padding: theme.spacing(0.75), // Reduced padding
    fontWeight: 500,
    fontSize: '0.8rem',
    textAlign: 'center',
  },
}));
function App() {


   const [open, setOpen] = useState(false);
  
    const handlePostClick = () => {
      setOpen(!open);
    };
  
    const postOptions = [
      { label: "Sell", icon: <SellIcon fontSize="large" /> },
      { label: "Rent", icon: <HouseIcon fontSize="large" /> },
      { label: "Deals", icon: <LocalOfferIcon fontSize="large" /> },
      { label: "Lease", icon: <AssignmentIcon fontSize="large" /> },
      { label: "Vendor", icon: <BusinessIcon fontSize="large" /> },
    ];
  return (
    <Box sx={{ flexGrow: 1, bgcolor: secondaryColor, minHeight: '100vh', paddingBottom: 8 }}>
      <AppBar position="static" color="inherit" elevation={0} sx={{ borderBottom: `1px solid #eee` }}>
        <Toolbar sx={{ minHeight: 56 }}> {/* Adjusted toolbar height */}
          <IconButton
            size="small" // Smaller avatar
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }} // Reduced margin
          >
            <Avatar alt="User Avatar" src="https://via.placeholder.com/30" sx={{ width: 30, height: 30 }} /> {/* Smaller size */}
          </IconButton>
          <Typography variant="subtitle1" sx={{ flexGrow: 1, color: textColorPrimary, fontWeight: 500 }} /> {/* Removed default title */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{ fontSize: '1rem', color: textColorSecondary }} /> {/* Smaller search icon */}
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <IconButton color="inherit" size="small" sx={{ ml: 0.5 }}> {/* Reduced margin */}
            <FavoriteBorderIcon sx={{ fontSize: '1.1rem', color: textColorSecondary }} />
          </IconButton>
          <IconButton color="inherit" size="small" sx={{ ml: 0.5 }}>
            <NotificationsNoneIcon sx={{ fontSize: '1.1rem', color: textColorSecondary }} />
          </IconButton>
          <IconButton color="inherit" size="small" sx={{ ml: 0.5 }}>
            <ChatBubbleOutlineIcon sx={{ fontSize: '1.1rem', color: textColorSecondary }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box sx={{ display: 'flex', paddingTop: 1, paddingX: 1 }}> {/* Reduced padding */}
        {/* Sidebar */}
        <Sidebar>
      <SidebarItem variant="subtitle2">New</SidebarItem>
      <VerticalText variant="subtitle2">Building For Sale</VerticalText>
      <SidebarItem variant="subtitle2">Quick </SidebarItem>
      <SidebarItem1 variant="subtitle2"> Deals</SidebarItem1>
      <VerticalText variant="subtitle2">Hot Properties</VerticalText>
      <SidebarItem variant="subtitle2">Best </SidebarItem>
      <SidebarItem1 variant="subtitle2"> Deals</SidebarItem1>
    </Sidebar>

        {/* Main Content */}
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" gutterBottom sx={{ fontSize: '1.1rem', fontWeight: 600, color: textColorPrimary, mb: 1 }}> {/* Smaller title */}
            Looking for
          </Typography>
          <Grid container spacing={1} mb={1.5}> {/* Reduced spacing and margin */}
            <Grid item xs={6}>
              <ImageCard>
                <img src="https://via.placeholder.com/200/007bff/FFFFFF?Text=Buy" alt="Buy" style={{ height: '90px', objectFit: 'cover' }} /> {/* Fixed height */}
                <div className="overlay">Buy</div>
              </ImageCard>
            </Grid>
            <Grid item xs={6}>
              <ImageCard>
                <img src="https://via.placeholder.com/200/28a745/FFFFFF?Text=Rent" alt="Rent" style={{ height: '90px', objectFit: 'cover' }} /> {/* Fixed height */}
                <div className="overlay">Rent</div>
              </ImageCard>
            </Grid>
            <Grid item xs={6}>
              <ImageCard>
                <img src="https://via.placeholder.com/200/dc3545/FFFFFF?Text=Lease" alt="Lease" style={{ height: '90px', objectFit: 'cover' }} /> {/* Fixed height */}
                <div className="overlay">Lease</div>
              </ImageCard>
            </Grid>
            <Grid item xs={6}></Grid> {/* Empty grid item for spacing */}
          </Grid>

          <CategoryBox>
            <CategoryTitle variant="subtitle1" sx={{ fontSize: '1rem' }}>Constructions</CategoryTitle>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <ImageCard>
                  <img src="https://via.placeholder.com/400/6c757d/FFFFFF?Text=New+Building+Construction" alt="New Building Construction" style={{ height: '120px', objectFit: 'cover' }} /> {/* Fixed height */}
                  <div className="overlay">New Building Construction</div>
                </ImageCard>
              </Grid>
            </Grid>
          </CategoryBox>

          <CategoryBox>
            <CategoryTitle variant="subtitle1" sx={{ fontSize: '1rem' }}>Interiors</CategoryTitle>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <ImageCard>
                  <img src="https://via.placeholder.com/200/fd7e14/FFFFFF?Text=Interiors" alt="Interiors" style={{ height: '90px', objectFit: 'cover' }} /> {/* Fixed height */}
                  <div className="overlay">Interiors</div>
                </ImageCard>
              </Grid>
              <Grid item xs={6}>
                <ImageCard>
                  <img src="https://via.placeholder.com/200/17a2b8/FFFFFF?Text=Renovations" alt="Renovations" style={{ height: '90px', objectFit: 'cover' }} /> {/* Fixed height */}
                  <div className="overlay">Renovations</div>
                </ImageCard>
              </Grid>
            </Grid>
          </CategoryBox>

          <CategoryBox sx={{ bgcolor: homeServiceBg, boxShadow: 'none', borderRadius: 5 }}> {/* Custom background and no shadow */}
            <CategoryTitle variant="subtitle1" sx={{ fontSize: '1rem' }}>Home service</CategoryTitle>
            <Paper sx={{ padding: 1.5, bgcolor: 'transparent', boxShadow: 'none' }}> {/* Transparent paper */}
              <Typography variant="body2" sx={{ color: textColorPrimary, fontSize: '0.85rem' }}>
                Painting Electrician Plumbing etc..
              </Typography>
            </Paper>
          </CategoryBox>
        </Box>
      </Box>


      <BottomNavigation
        showLabels
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          bgcolor: cardBackgroundColor, // White background
          borderTop: `1px solid #eee`,
          height: 56, // Fixed height
        }}
      >
        <BottomNavigationAction label={<Typography sx={{ fontSize: '0.7rem' }}>Home</Typography>} icon={<HomeIcon sx={{ fontSize: '1.2rem', color: textColorSecondary }} />} />
        <BottomNavigationAction label={<Typography sx={{ fontSize: '0.7rem', textAlign: 'center' }}>Construction&<br />Interiors</Typography>} icon={<BuildIcon sx={{ fontSize: '1.2rem', color: textColorSecondary }} />} />
        <BottomNavigationAction label={<Typography sx={{ fontSize: '0.7rem' }}>Post</Typography>} icon={<AddIcon sx={{ fontSize: '1.2rem', color: primaryColor }} />} onClick={handlePostClick}/> {/* Assuming the middle icon is blue */}
        <BottomNavigationAction label={<Typography sx={{ fontSize: '0.7rem' }}>Home Services</Typography>} icon={<CleaningServicesIcon sx={{ fontSize: '1.2rem', color: textColorSecondary }} />} />
        <BottomNavigationAction label={<Typography sx={{ fontSize: '0.7rem' }}>Profile</Typography>} icon={<AccountCircleIcon sx={{ fontSize: '1.2rem', color: textColorSecondary }} />} />
      </BottomNavigation>


      <Modal
        open={open}
        onClose={() => setOpen(false)}
        sx={{ 
          display: 'flex', 
          alignItems: 'flex-end', 
          justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)' // Optional: semi-transparent dark background
        }}
      >
        <Box sx={{ 
          backgroundColor: 'transparent', 
          p: 2, 
          mb: 10,
          width: '100%',
          maxWidth: 360,
          mx: 'auto'
        }}>
          <Typography variant="subtitle1" textAlign="center" gutterBottom sx={{ color: 'white' }}>
            What would you like to post?
          </Typography>
          <Stack direction="row" justifyContent="space-around" alignItems="center">
            {postOptions.map((option, index) => (
              <Box key={index} textAlign="center">
                <IconButton 
                  disableRipple 
                  disableFocusRipple 
                  sx={{ 
                    color: 'white',
                    backgroundColor: 'rgba(25, 118, 210, 0.9)',
                    '&:hover': {
                      backgroundColor: 'rgba(25, 118, 210, 1)'
                    }
                  }}
                >
                  {option.icon}
                </IconButton>
                <Typography variant="caption" sx={{ color: 'white' }}>{option.label}</Typography>
              </Box>
            ))}
          </Stack>
        </Box>
      </Modal>
    </Box>
  );
}

export default App;