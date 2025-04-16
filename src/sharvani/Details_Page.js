import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  Tooltip,
  Paper,
  BottomNavigation,
  BottomNavigationAction
} from '@mui/material';
import {
  FavoriteBorder,
  Share,
  ThumbUpAltOutlined,
  Call,
  LocationOn,
  Search as SearchIcon,
  Tune as TuneIcon,
  ArrowBackIosNew as ArrowBackIosNewIcon,
  Home as HomeIcon,
  List as ListIcon,
  Favorite as FavoriteIcon,
  Mail as MailIcon
} from '@mui/icons-material';
import buildingImage from '../Images/house.jpeg';
import buildingImage2 from '../Images/house1.jpg';

const PropertyCard = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) navigate('/dashboard');
    if (newValue === 1) navigate('/details');
    if (newValue === 2) navigate('/rent-saves');
    if (newValue === 3) navigate('/inbox');
  };

  const propertyData = [
    {
      id: 1,
      title: 'Plot For Rent in Btm Layout 2nd Stage',
      location: '16th Main Road, BTM layout 2nd...',
      price: '₹3.25 Cr/m',
      date: '01-04-2025',
      facing: 'East',
      area: '1600 sq ft',
      dimensions: '40×40',
      listedBy: 'Owner/Agent',
      image: buildingImage
    },
    {
      id: 2,
      title: 'Commercial Plot for Rent near Silk Board',
      location: 'Silk Board Junction, Bangalore...',
      price: '₹2.75 Cr/m',
      date: '02-04-2025',
      facing: 'North',
      area: '1400 sq ft',
      dimensions: '35×40',
      listedBy: 'Builder',
      image: buildingImage2
    }
  ];

  const handleCardClick = (property) => {
    navigate(`/rent-description`);
  };

  return (
    <>
      {/* Back + Styled Search Bar */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#e0e0e0',
          borderRadius: '10px',
          py: 1.2,
          px: 1,
          mb: 2,
          mx: 2,
          mt: 2
        }}
      >
        {/* Back Icon */}
        <IconButton onClick={() => navigate(-1)}>
          <ArrowBackIosNewIcon sx={{ fontSize: 20 }} />
        </IconButton>

        {/* Search Box */}
        <Box
          sx={{
            flexGrow: 1,
            backgroundColor: '#fff',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            px: 2,
            height: 40,
            mx: 1
          }}
        >
          <Box sx={{ flexGrow: 1 }} />
          <SearchIcon sx={{ fontSize: 20, color: '#666' }} />
        </Box>

        {/* Filter Icon */}
        <IconButton>
          <TuneIcon sx={{ fontSize: 20 }} />
        </IconButton>
      </Box>

      {/* Property Cards */}
      <Box sx={{ pb: 10 }}>
        {propertyData.map((property) => (
          <Card
            key={property.id}
            sx={{
              mb: 4,
              borderRadius: 4,
              bgcolor: '#ffffff',
              boxShadow: 3,
              transition: 'transform 0.2s ease-in-out',
              '&:hover': {
                transform: 'scale(1.015)',
                boxShadow: 6
              },
              mx: 2
            }}
            onClick={() => handleCardClick(property)}
          >
            <Box position="relative">
              <CardMedia
                component="img"
                height="200"
                image={property.image}
                alt="Property"
                sx={{ borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
              />
              <Box sx={{ position: 'absolute', top: 8, right: 8, display: 'flex', gap: 1 }}>
                <Tooltip title="Add to Wishlist">
                  <IconButton sx={{ bgcolor: 'white', boxShadow: 1 }}>
                    <FavoriteBorder />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Share">
                  <IconButton sx={{ bgcolor: 'white', boxShadow: 1 }}>
                    <Share />
                  </IconButton>
                </Tooltip>
              </Box>
              <Box sx={{ position: 'absolute', bottom: 8, right: 8 }}>
                <Tooltip title="Like">
                  <IconButton sx={{ bgcolor: 'white', boxShadow: 1 }}>
                    <ThumbUpAltOutlined />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>

            <CardContent sx={{ p: 2.5 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {property.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={1}>
                {property.location}
              </Typography>

              <Grid container justifyContent="space-between" alignItems="center">
                <Typography variant="subtitle1" fontWeight="bold" color="primary">
                  {property.price}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Listed on: {property.date}
                </Typography>
              </Grid>

              <Box display="flex" alignItems="center" mt={2}>
                <LocationOn fontSize="small" color="action" />
                <Typography variant="body2" color="text.primary" ml={0.5}>
                  Location Verified
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Button
                  size="small"
                  variant="outlined"
                  color="success"
                  startIcon={<Call />}
                  sx={{ textTransform: 'none' }}
                >
                  Call
                </Button>
              </Box>

              <Divider sx={{ my: 2 }} />

              <Grid
                container
                sx={{
                  border: '1px solid #e0e0e0',
                  borderRadius: 2,
                  overflow: 'hidden'
                }}
              >
                <Grid item xs={4}>
                  <Box sx={{ borderRight: '1px solid #e0e0e0', p: 1.5, textAlign: 'center' }}>
                    <Typography variant="caption" color="text.secondary">
                      Facing
                    </Typography>
                    <Typography variant="body2" fontWeight="bold">
                      {property.facing}
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={4}>
                  <Box sx={{ borderRight: '1px solid #e0e0e0', p: 1.5, textAlign: 'center' }}>
                    <Typography variant="caption" color="text.secondary">
                      Area ({property.dimensions})
                    </Typography>
                    <Typography variant="body2" fontWeight="bold">
                      {property.area}
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={4}>
                  <Box sx={{ p: 1.5, textAlign: 'center' }}>
                    <Typography variant="caption" color="text.secondary">
                      Listed By
                    </Typography>
                    <Typography variant="body2" fontWeight="bold">
                      {property.listedBy}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Bottom Navigation */}
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation value={value} onChange={handleChange} showLabels>
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="List" icon={<ListIcon />} />
          <BottomNavigationAction label="Saves" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Inbox" icon={<MailIcon />} />
        </BottomNavigation>
      </Paper>
    </>
  );
};

export default PropertyCard;
