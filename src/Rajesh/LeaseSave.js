import React, { useEffect, useState } from 'react';
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
} from '@mui/material';
import {
  Favorite,
  Share,
  ThumbUpAltOutlined,
  ThumbUpAlt,
  Call,
  LocationOn,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import CustomSearchBar from './CustomSearchBar';
import BottomNavbar from './CustomBottomNav';

const LeaseSaves = () => {
  const [saved, setSaved] = useState([]);
  const [likedCards, setLikedCards] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem('savedLease');
    if (stored) {
      setSaved(JSON.parse(stored));
    }
  }, []);

  const handleRemove = (id) => {
    const updated = saved.filter((item) => item.id !== id);
    setSaved(updated);
    localStorage.setItem('savedLease', JSON.stringify(updated));
  };

  const toggleLike = (id) => {
    setLikedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <Box sx={{ backgroundColor: 'rgb(239, 231, 221)', minHeight: '110vh' }}>
      {/* Sticky Search Bar */}
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          px: 1,
          py: 1,
          backgroundColor: 'rgb(239, 231, 221)',
        }}
      >
        <CustomSearchBar />
      </Box>

      {/* Saved Property Cards */}
      <Box sx={{ pb: 8 }}>
        {saved.length === 0 ? (
          <Typography sx={{ px: 2, mt: 4 }} color="text.secondary">
            No saved properties.
          </Typography>
        ) : (
          saved.map((property) => (
            <Card
              key={property.id}
              sx={{
                mb: 2,
                mx: 2,
                borderRadius: 3,
                boxShadow: 2,
                transition: 'transform 0.2s ease-in-out',
                '&:hover': { transform: 'scale(1.015)', boxShadow: 4 },
              }}
              onClick={(e) => {
                const isButtonClick = e.target.closest('button') || e.target.closest('svg');
                if (!isButtonClick) {
                  navigate('lease-description', { state: { property } });
                }
              }}
            >
              <Box position="relative">
                <CardMedia
                  component="img"
                  image={property.image}
                  alt="Property"
                  sx={{
                    width: '100%',
                    height: '140px',
                    objectFit: 'cover',
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                  }}
                />
                <Box sx={{ position: 'absolute', top: 6, right: 6, display: 'flex', gap: 0.8 }}>
                  <Tooltip title="Remove from Wishlist">
                    <IconButton
                      sx={{ bgcolor: 'white', boxShadow: 1, p: 0.8 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemove(property.id);
                      }}
                    >
                      <Favorite color="error" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Share">
                    <IconButton
                      sx={{ bgcolor: 'white', boxShadow: 1, p: 0.8 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        const shareText = `Check out this property: ${property.title}, located at ${property.location}`;
                        if (navigator.share) {
                          navigator.share({
                            title: property.title,
                            text: shareText,
                            url: window.location.href,
                          });
                        } else {
                          alert("Sharing is not supported on this browser.");
                        }
                      }}
                    >
                      <Share />
                    </IconButton>
                  </Tooltip>
                </Box>
                <Box sx={{ position: 'absolute', bottom: 6, right: 6 }}>
                  <Tooltip title="Like">
                    <IconButton
                      sx={{
                        bgcolor: 'white',
                        boxShadow: 1,
                        color: likedCards[property.id] ? 'blue' : 'default',
                        p: 0.8,
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLike(property.id);
                      }}
                    >
                      {likedCards[property.id] ? <ThumbUpAlt /> : <ThumbUpAltOutlined />}
                    </IconButton>
                  </Tooltip>
                </Box>
              </Box>

              <CardContent sx={{ px: 2,py:0.2 ,pb: '7px !important'}}>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom noWrap>
                  {property.title}
                </Typography>
                <Typography variant="caption" color="text.secondary" mb={0.2} noWrap>
                  {property.location}
                </Typography>

                <Grid container justifyContent="space-between" alignItems="center">
                  <Typography variant="body2" fontWeight="bold" color="primary">
                    {property.price}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {property.date}
                  </Typography>
                </Grid>

                <Box display="flex" alignItems="center" mt={0.2}>
                  <LocationOn fontSize="small" color="action" />
                  <Typography variant="caption" color="text.primary" ml={0.5}>
                    Location Verified
                  </Typography>
                  <Box sx={{ flexGrow: 1 }} />
                  <Button
                    size="small"
                    variant="outlined"
                    color="success"
                    startIcon={<Call />}
                    sx={{ textTransform: 'none', px: 1.2, py: 0.2, fontSize: '0.7rem' }}
                  >
                    Call
                  </Button>
                </Box>

                {/* <Divider sx={{ my: 1 }} /> */}

                <Box
                  sx={{
                    display: 'flex',
                    border: '1px solid #e0e0e0',
                    borderRadius: 2,
                    overflow: 'hidden',
                  }}
                >
                  {[
                    { label: 'Facing', value: property.facing },
                    { label: `Area (${property.dimensions})`, value: property.area },
                    { label: 'Listed By', value: property.listedBy },
                  ].map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        flex: 1,
                        px: 1,
                        py:0.2,
                        textAlign: 'center',
                        borderRight: index < 2 ? '1px solid #e0e0e0' : 'none',
                      }}
                    >
                      <Typography variant="caption" color="text.secondary" noWrap>
                        {item.label}
                      </Typography>
                      <Typography variant="body2" fontWeight="bold" noWrap>
                        {item.value}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          ))
        )}
      </Box>

      <BottomNavbar />
    </Box>
  );
};

export default LeaseSaves;
