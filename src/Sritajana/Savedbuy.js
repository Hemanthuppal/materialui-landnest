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
  BottomNavigation,
  BottomNavigationAction,
} from '@mui/material';
import {
  FavoriteBorder,
  Share,
  LocationOn,
  Phone,
  Tune,
  Home,
  Favorite,
  ListAlt,
  Chat,
  Search,
} from '@mui/icons-material';
import Pic from './../Images/plot.jpeg';
import picture from './../Images/images.jpeg'



const SavedBuy = () => {
  const [navValue, setNavValue] = React.useState(2);

  const listings = [
    {
      title: 'Plot For Sale in Btm Layout 2nd Stage',
      address: '16th Main Road, BTM layout 2nd Stage',
      price: '3.25 cr',
      date: '01-04-2025',
      facing: 'East',
      area: '1600 sq ft',
      listedBy: 'Owner/Agent',
      image: Pic, // ✅ Corrected
    },
    {
      title: 'Premium Site in HSR Sector 7',
      address: '27th Cross Road, HSR Layout Sector 7',
      price: '4.10 cr',
      date: '28-03-2025',
      facing: 'North',
      area: '2000 sq ft',
      listedBy: 'Agent Only',
      image: picture, // ✅ Corrected
    },
  ];
  

  return (
    
    <Box
      sx={{
        maxWidth: '480px',
        margin: '0 auto',
        backgroundColor: '#white',
        paddingBottom: '80px',
      }}
    >
      <Card sx={{ mx: 2, my: 2, p: 2, borderRadius: 3 }}>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Saved
        </Typography>

        {/* Search and Filter */}
        <Box display="flex" gap={1} mb={2}>
          <Box
            sx={{
              flex: 1,
              bgcolor: '#fff',
              px: 2,
              py: 1,
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              fontSize: '0.9rem',
            }}
          >
            <Search fontSize="small" />
            Search
          </Box>
          <IconButton sx={{ bgcolor: '#fff', borderRadius: 2 }}>
            <Tune />
          </IconButton>
        </Box>

        {/* Property Cards */}
        {listings.map((item, i) => (
          <Card key={i} sx={{ mb: 2, borderRadius: 3 }}>
            <Box position="relative">
              <CardMedia
                component="img"
                height="180"
                image={item.image}
                alt="Property"
              />
              <Box
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1,
                }}
              >
                <IconButton size="small" sx={{ bgcolor: '#fff' }}>
                  <FavoriteBorder fontSize="small" />
                </IconButton>
                <IconButton size="small" sx={{ bgcolor: '#fff' }}>
                  <Share fontSize="small" />
                </IconButton>
              </Box>
            </Box>

            <CardContent>
              <Typography fontWeight="bold" fontSize="0.95rem">
                {item.title}
              </Typography>
              <Box display="flex" justifyContent="space-between" mt={0.5}>
                <Typography variant="body2" color="text.secondary">
                  {item.address}
                </Typography>
                <Typography fontSize="0.9rem" fontWeight="bold">
                  {item.price}
                </Typography>
              </Box>
              <Typography variant="caption" color="text.secondary">
                Date: {item.date}
              </Typography>

              <Box display="flex" alignItems="center" mt={1}>
                <LocationOn fontSize="small" />
                <Typography variant="body2" ml={0.5}>
                  Location
                </Typography>
                <Button
                  size="small"
                  startIcon={<Phone />}
                  sx={{
                    ml: 'auto',
                    bgcolor: '#28a745',
                    color: '#fff',
                    px: 2,
                    textTransform: 'none',
                    borderRadius: 2,
                    '&:hover': { bgcolor: '#218838' },
                  }}
                >
                  Call
                </Button>
              </Box>

              <Divider sx={{ my: 1 }} />

              <Grid container spacing={1}>
                <Grid item xs={4}>
                  <Box textAlign="center" mr={6} ml={1}>
                    <Typography variant="caption">Facing</Typography>
                    <Typography fontWeight="bold" fontSize="0.9rem">
                      {item.facing}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box textAlign="center"mr={6}>
                    <Typography variant="caption">Area</Typography>
                    <Typography fontWeight="bold" fontSize="0.9rem">
                      {item.area}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box textAlign="center">
                    <Typography variant="caption">Listed by</Typography>
                    <Typography fontWeight="bold" fontSize="0.9rem">
                      {item.listedBy}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        ))}
      </Card>

      {/* Bottom Navigation Fixed */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          maxWidth: '480px',
          margin: '0 auto',
          zIndex: 10,
          borderTop: '1px solid #ccc',
        }}
      >
        <BottomNavigation
          showLabels
          value={navValue}
          onChange={(e, newValue) => setNavValue(newValue)}
        >
          <BottomNavigationAction label="Home" icon={<Home />} />
          <BottomNavigationAction label="List" icon={<ListAlt />} />
          <BottomNavigationAction label="Saves" icon={<Favorite />} />
          <BottomNavigationAction label="Inbox" icon={<Chat />} />
        </BottomNavigation>
      </Box>
    </Box>
  );
};

export default SavedBuy;
