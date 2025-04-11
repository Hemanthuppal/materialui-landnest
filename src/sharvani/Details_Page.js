import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Button,
  Grid,
  Divider,
  TextField,
  InputAdornment,
  Paper,
  BottomNavigation,
  BottomNavigationAction
} from '@mui/material';

import {
  FavoriteBorder,
  Call,
  LocationOn,
  Search as SearchIcon,
  FilterList as FilterListIcon,
  Share,
  ThumbUpAltOutlined,
  Home as HomeIcon,
  List as ListIcon,
  Favorite as FavoriteIcon,
  Mail as MailIcon
} from '@mui/icons-material';
import buildingImage from '../Images/building.jpeg'; // Adjust the path if needed


const PropertyCard = () => {
  return (
    <Card sx={{ mb: 3, borderRadius: 3,bgcolor: '#f9f9f9' }}>
      <Box position="relative">
        <CardMedia
          component="img"
          height="180"
          image={buildingImage} // Replace with your actual image path
          alt="Property"
        />

        {/* Top Right Icons */}
        <Box sx={{ position: 'absolute', top: 8, right: 8, display: 'flex', gap: 1 }}>
          <IconButton sx={{ bgcolor: 'white' }}>
            <FavoriteBorder />
          </IconButton>
          <IconButton sx={{ bgcolor: 'white' }}>
            <Share />
          </IconButton>
        </Box>

        {/* Bottom Right Like */}
        <Box sx={{ position: 'absolute', bottom: 8, right: 8 }}>
          <Button
            variant="contained"
            size="small"
            color="primary"
            startIcon={<ThumbUpAltOutlined />}
            sx={{ borderRadius: 3 }}
          >
            
          </Button>
        </Box>
      </Box>

      <CardContent>
        <Typography variant="subtitle1" fontWeight="bold">
          Plot For Sale in Btm Layout 2nd Stage
        </Typography>
        <Typography variant="body2" color="text.secondary">
          16th Main Road, BTM layout 2nd...
        </Typography>

        <Grid container justifyContent="space-between" alignItems="center" mt={1}>
          <Typography variant="subtitle1" fontWeight="bold">
            3.25 cr/m
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Date: 01-04-2025
          </Typography>
        </Grid>

        <Box display="flex" alignItems="center" mt={1}>
          <LocationOn fontSize="small" color="action" />
          <Typography variant="body2" color="text.primary">
            Location
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button size="small" variant="contained" color="success" startIcon={<Call />}>
            Call
          </Button>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Grid container spacing={1} textAlign="center" >
  <Grid item xs={4}>
    <Box
      sx={{
        p: 2,
        height: '80%',
        boxShadow: 2,
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <Typography variant="body2" color="text.secondary">Facing</Typography>
      <Typography variant="body2" fontWeight="bold">East</Typography>
    </Box>
  </Grid>

  <Grid item xs={4}>
    <Box
      sx={{
        p: 2,
        height: '80%',
        boxShadow: 2,
        borderRadius: 2,
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <Typography variant="body2" color="text.secondary">Area (40*40)</Typography>
      <Typography
        variant="body2"
        fontWeight="bold"
        color="primary"
        sx={{ textDecoration: 'underline' }}
      >
        1600 sq ft
      </Typography>
    </Box>
  </Grid>

  <Grid item xs={4}>
    <Box
      sx={{
        p: 2,
        height: '80%',
        boxShadow: 2,
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <Typography variant="body2" color="text.secondary">
        <LocationOn fontSize="small" color="action" /> Listed by
      </Typography>
      <Typography variant="body2" fontWeight="bold">Owner/Agent</Typography>
    </Box>
  </Grid>
</Grid>

      </CardContent>
    </Card>
  );
};

const Details_Page = () => {
  return (
    <Box sx={{ p: 2, pb: 8 }}>
      {/* Search Bar */}
      <Box sx={{ display: 'flex', mb: 2 }}>
        <TextField
          fullWidth
          placeholder="Search"
          variant="outlined"
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <IconButton sx={{ ml: 1 }}>
          <FilterListIcon />
        </IconButton>
      </Box>

      {/* Property Cards */}
      <PropertyCard />
      <PropertyCard />
      

      {/* Bottom Navigation */}
      <Paper
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
        }}
        elevation={3}
      >
        <BottomNavigation showLabels>
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="List" icon={<ListIcon />} />
          <BottomNavigationAction label="Saves" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Inbox" icon={<MailIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

export default Details_Page;
