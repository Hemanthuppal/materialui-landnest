import React, { useEffect, useState } from 'react';
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
  Favorite,
  Share,
  ThumbUpAltOutlined,
  ThumbUpAlt,
  Call,
  LocationOn,
  Home as HomeIcon,
  List as ListIcon,
  Favorite as FavoriteIcon,
  Mail as MailIcon
} from '@mui/icons-material';
import CustomSearchBar from './CustomSearchBar';
import CustomBottomNav from './CustomBottomNav';

const LeaseSave = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(2); // set current tab to "Saves"
  const [saved, setSaved] = useState([]);
  const [likedCards, setLikedCards] = useState({});

  useEffect(() => {
    const savedLeases = localStorage.getItem('savedLease');
    setSaved(savedLeases ? JSON.parse(savedLeases) : []);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) navigate('/dashboard');
    if (newValue === 1) navigate('/lease_details');
    if (newValue === 2) navigate('/lease_save');
    if (newValue === 3) navigate('/inboxlist');
  };

  const toggleLike = (id) => {
    setLikedCards((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const removeFromSave = (property) => {
    const updated = saved.filter((p) => p.id !== property.id);
    setSaved(updated);
    localStorage.setItem('savedLease', JSON.stringify(updated));
  };

  return (
    <>
     <Box
    sx={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      bgcolor: '#fff', // background to cover content underneath
      px: 1,
      py: 1,
      backgroundColor: 'rgb(239, 231, 221)'
    }}
  >
    <CustomSearchBar />
  </Box>
      <Box sx={{ pt: 2, pb: 10, minHeight: '100vh', backgroundColor: 'rgb(239, 231, 221)' }}>
        {saved.length === 0 ? (
          <Typography align="center" variant="h6" sx={{ mt: 5, color: 'text.secondary' }}>
            No saved lease properties yet.
          </Typography>
        ) : (
          saved.map((property) => (
            <Card
              key={property.id}
              sx={{
                mb: 4,
                mx: 2,
                borderRadius: 4,
                boxShadow: 3,
                transition: 'transform 0.2s ease-in-out',
                '&:hover': { transform: 'scale(1.015)', boxShadow: 6 }
              }}
              onClick={(e) => {
                const isButtonClick = e.target.closest('button') || e.target.closest('svg');
                if (!isButtonClick) {
                  navigate('/lease_description', { state: { property } });
                }
              }}
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
                  <Tooltip title="Remove from Wishlist">
                    <IconButton
                      sx={{ bgcolor: 'white', boxShadow: 1 }}
                      onClick={() => removeFromSave(property)}
                    >
                      <Favorite color="error" />
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
                    <IconButton
                      sx={{
                        bgcolor: 'white',
                        boxShadow: 1,
                        color: likedCards[property.id] ? 'blue' : 'default'
                      }}
                      onClick={() => toggleLike(property.id)}
                    >
                      {likedCards[property.id] ? <ThumbUpAlt /> : <ThumbUpAltOutlined />}
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

                <Box sx={{ display: 'flex', border: '1px solid #e0e0e0', borderRadius: 2, overflow: 'hidden' }}>
                  {[ 
                    { label: 'Facing', value: property.facing },
                    { label: `Area (${property.dimensions})`, value: property.area },
                    { label: 'Listed By', value: property.listedBy }
                  ].map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        flex: 1,
                        p: 1.5,
                        textAlign: 'center',
                        borderRight: index < 2 ? '1px solid #e0e0e0' : 'none'
                      }}
                    >
                      <Typography variant="caption" color="text.secondary">{item.label}</Typography>
                      <Typography variant="body2" fontWeight="bold">{item.value}</Typography>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          ))
        )}
      </Box>

      
        <CustomBottomNav />
      
    </>
  );
};

export default LeaseSave;

