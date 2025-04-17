
import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  Stack,
  TextField,
  InputAdornment,
  IconButton,
  Badge,
  Grid,
  Card,
  CardContent,
  Button
} from '@mui/material';
import {
  Search as SearchIcon,
  FavoriteBorder as FavoriteIcon,
  NotificationsNone as NotificationsIcon,
  QuestionAnswer as MessengerIcon,
  Home as BuyIcon,
  House as RentIcon,
  Business as LeaseIcon,
  ArrowForward as ArrowIcon,
  Construction as ConstructionIcon,
  DesignServices as InteriorsIcon,
  Handyman as RenovationsIcon

} from '@mui/icons-material';
import { Link } from 'react-router-dom';


const Dashboard = () => {
  const cards = [
    {
      title: "Buy",
      icon: <BuyIcon fontSize="large" />,
      bgImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)"
    },
    {
      title: "Rent",
      icon: <RentIcon fontSize="large" />,
      bgImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)"
    },
    {
      title: "Lease",
      icon: <LeaseIcon fontSize="large" />,
      bgImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)"
    }
  ];

  const constructionCards = [
    {
      title: "New Building Construction",
      icon: <ConstructionIcon fontSize="large" />,
      bgImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)"
    },
    {
      title: "Interiors",
      icon: <InteriorsIcon fontSize="large" />,
      bgImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)"
    },
    {
      title: "Renovations",
      icon: <RenovationsIcon fontSize="large" />,
      bgImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1600566752227-513c689ad1e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)"
    }
  ];

  return (
    <Box>

      <Box display="flex" height="auto">

        {/* Left Sidebar */}
        <Box
          sx={{
            width: '200px',
            height: '100vh',
            bgcolor: 'green',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px 0',
            marginLeft: '10px',
            marginTop: '10px',
            boxSizing: 'border-box',
            borderRight: '1px solid #e0e0e0',
            borderTopLeftRadius: '40px',
            borderBottomRightRadius: '40px',
          }}
        >
          {/* Profile Pic */}
          <Avatar
            sx={{
              width: 60,
              height: 60,
              mb: 2,
              bgcolor: 'primary.main'
            }}
          >
            P
          </Avatar>

          {/* Menu Items */}
          <Stack spacing={3} alignItems="center">
            {/* NEW - Horizontal */}
            <Typography variant="body2" fontWeight="bold" textAlign="center">
              NEW
            </Typography>

            {/* Building For Sale - Vertical */}
            <Typography variant="body2" textAlign="center">
              Building<br />For sale
            </Typography>

            {/* Quick Deals - Horizontal */}
            <Typography variant="body2" textAlign="center">
              Quick Deals
            </Typography>

            {/* Hot properties - Vertical */}
            <Typography variant="body2" textAlign="center">
              Hot<br />properties
            </Typography>

            {/* Best Deals - Horizontal */}
            <Typography variant="body2" textAlign="center">
              Best Deals
            </Typography>
          </Stack>
        </Box>

        {/* Main Content Area */}
        <Box flex={1} p={2}>
          {/* Header with Search and Icons */}
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mb={4}
          >
            {/* Search Bar */}
            <TextField
              variant="outlined"
              placeholder="Search"
              size="small"
              sx={{
                width: '250px',
                '& .MuiOutlinedInput-root': {
                  borderRadius: '20px',
                }
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />

            {/* Icons */}
            <Box display="flex" gap={2}>
              <IconButton>
                <Badge badgeContent={4} color="error">
                  <FavoriteIcon />
                </Badge>
              </IconButton>

              <IconButton>
                <Badge badgeContent={7} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>

              <IconButton>
                <Badge badgeContent={3} color="error">
                  <MessengerIcon />
                </Badge>
              </IconButton>
            </Box>
          </Box>




          <Box mb={2}>
            <Typography variant="h6" align="center" mb={1}>
              Looking For
            </Typography>

            <Card sx={{
              backgroundColor: '#f5f5f5',
              borderRadius: '10px',
              padding: '10px',
              boxShadow: 'none'
            }}>
              <Grid container spacing={3}>
                {cards.slice(0, 2).map((card, index) => (
                  <Grid item xs={6} key={index}>
                    <Card sx={{
                      height: '100px',
                      width: '175px',
                      borderRadius: '12px',
                      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                      background: card.bgImage,
                      backgroundSize: 'cover',
                      color: 'white',
                      display: 'flex',
                      cursor: 'pointer',
                      position: 'relative',
                      '&:hover': {
                        transform: 'scale(1.02)',
                        transition: 'transform 0.3s ease'
                      }
                    }}>
                      <CardContent sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        width: '100%'
                      }}>
                        <Box sx={{ textAlign: 'left' }}>
                          {card.icon}
                          <Typography variant="h6" component="div" mt={1}>
                            {card.title}
                          </Typography>
                        </Box>
                        <IconButton sx={{
                          position: 'absolute',
                          right: 8,
                          bottom: 8,
                          color: 'white'
                        }}>
                          <ArrowIcon />
                        </IconButton>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}

                <Grid item xs={12}>
                  <Box display="flex" justifyContent="flex-start">
                    <Card sx={{
                      height: '100px',
                      width: '175px',
                      borderRadius: '12px',
                      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                      background: cards[2].bgImage,
                      backgroundSize: 'cover',
                      color: 'white',
                      display: 'flex',
                      cursor: 'pointer',
                      position: 'relative',
                      '&:hover': {
                        transform: 'scale(1.02)',
                        transition: 'transform 0.3s ease'
                      }
                    }}>
                      <CardContent sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        width: '100%'
                      }}>
                        <Box sx={{ textAlign: 'left' }}>
                          {cards[2].icon}
                          <Typography variant="h6" component="div" mt={1}>
                            {cards[2].title}
                          </Typography>
                        </Box>
                        <IconButton sx={{
                          position: 'absolute',
                          right: 8,
                          bottom: 8,
                          color: 'white'
                        }}>
                          <ArrowIcon />
                        </IconButton>
                      </CardContent>
                    </Card>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Box>


          <Box mb={2}>
            <Typography variant="h6" align="center" mb={1}>
              Construction  </Typography>

            <Card sx={{
              backgroundColor: '#f5f5f5',
              borderRadius: '10px',
              padding: '10px',
              boxShadow: 'none'
            }}>
              <Grid container spacing={3}>
                {/* First row - single card (New Building Construction) */}
                <Grid item xs={12}>
                  <Box display="flex" justifyContent="flex-start">
                  <Link to="/constructions" style={{ textDecoration: 'none', cursor:'pointer' }}>
                    <Card sx={{
                      height: '100px',
                      width: "370px",
                      borderRadius: '12px',
                      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                      background: constructionCards[0].bgImage,
                      backgroundSize: 'cover',
                      color: 'white',
                      display: 'flex',
                      cursor: 'pointer',
                      position: 'relative',
                      '&:hover': {
                        transform: 'scale(1.02)',
                        transition: 'transform 0.3s ease'
                      }
                    }}>
                      <CardContent sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        width: '100%'
                      }}>
                        <Box sx={{ textAlign: 'left' }}>
                          {constructionCards[0].icon}
                          <Typography variant="h6" component="div" mt={1}>
                            {constructionCards[0].title}
                          </Typography>
                        </Box>
                        <IconButton sx={{
                          position: 'absolute',
                          right: 8,
                          bottom: 8,
                          color: 'white'
                        }}>
                          <ArrowIcon />
                        </IconButton>
                      </CardContent>
                    </Card>
                    </Link>

                  </Box>
                </Grid>

                {/* Second row - two cards (Interiors and Renovations) */}
                {constructionCards.slice(1, 3).map((card, index) => (
                  <Grid item xs={6} key={index}>
                    <Card sx={{
                      height: '100px',
                      width: '175px',
                      borderRadius: '12px',
                      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                      background: card.bgImage,
                      backgroundSize: 'cover',
                      color: 'white',
                      display: 'flex',
                      cursor: 'pointer',
                      position: 'relative',
                      '&:hover': {
                        transform: 'scale(1.02)',
                        transition: 'transform 0.3s ease'
                      }
                    }}>
                      <CardContent sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        width: '100%'
                      }}>
                        <Box sx={{ textAlign: 'left' }}>
                          {card.icon}
                          <Typography variant="h6" component="div" mt={1}>
                            {card.title}
                          </Typography>
                        </Box>
                        <IconButton sx={{
                          position: 'absolute',
                          right: 8,
                          bottom: 8,
                          color: 'white'
                        }}>
                          <ArrowIcon />
                        </IconButton>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Card>
          </Box>



          <Box mb={4}>


            <Card sx={{
              backgroundColor: '#f5f5f5',
              borderRadius: '10px',
              padding: '10px',
              boxShadow: 'none',
              width: '96%'
            }}>
              <Card sx={{
                height: 'auto',
                width: '98%',
                borderRadius: '12px',
                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)",
                backgroundSize: 'cover',
                color: 'white',
                display: 'flex',
                cursor: 'pointer',
                position: 'relative',
                '&:hover': {
                  transform: 'scale(1.02)',
                  transition: 'transform 0.3s ease'
                }
              }}>
                <CardContent sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'left',
                  alignItems: 'left',
                  width: '100%',
                  padding: '20px'
                }}>
                  <Typography variant="h5" component="div" align="center" gutterBottom>
                    Home Services
                  </Typography>

                  <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'left',
                    gap: '3px',
                    mt: 2
                  }}>
                    <Typography variant="body1">Painter</Typography>
                    <Typography variant="body1">Plumber</Typography>
                    <Typography variant="body1">Electrician etc..</Typography>

                  </Box>

                  <IconButton sx={{
                    position: 'absolute',
                    right: 8,
                    bottom: 8,
                    color: 'white'
                  }}>
                    <ArrowIcon />
                  </IconButton>
                </CardContent>
              </Card>
            </Card>
          </Box>




        </Box>
      </Box>

{/* 
      <Box mb={1} sx={{ width: '100%', marginLeft:'10px' }}>
        <Grid container spacing={1} sx={{
          display: 'flex',
          flexWrap: 'nowrap',
          width: '100%',
          justifyContent: 'space-between',
          px: 1
          
        }}>
          <Grid item sx={{ flex: '1 0 auto', minWidth: '60px', maxWidth: '80px' }}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <Card sx={{
                width: 70,
                height: 70,
                borderRadius: '8px',
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)",
                backgroundSize: 'cover',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.05)',
                  transition: 'transform 0.2s ease'
                }
              }} />
              <Typography variant="caption" mt={1} sx={{
                fontSize: '1rem',
                lineHeight: 1.2,
                wordBreak: 'break-word'
              }}>Sell Property</Typography>
            </Box>
          </Grid>

          <Grid item sx={{ flex: '1 0 auto', minWidth: '60px', maxWidth: '80px' }}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <Card sx={{
                width: 70,
                height: 70,
                borderRadius: '8px',
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)",
                backgroundSize: 'cover',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.05)',
                  transition: 'transform 0.2s ease'
                }
              }} />
              <Typography variant="caption" mt={1} sx={{
                fontSize: '1rem',
                lineHeight: 1.2,
                wordBreak: 'break-word'
              }}>Rent Property</Typography>
            </Box>
          </Grid>

          <Grid item sx={{ flex: '1 0 auto', minWidth: '60px', maxWidth: '80px' }}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <Card sx={{
                width: 70,
                height: 70,
                borderRadius: '8px',
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)",
                backgroundSize: 'cover',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.05)',
                  transition: 'transform 0.2s ease'
                }
              }} />
              <Typography variant="caption" mt={1} sx={{
                fontSize: '1rem',
                lineHeight: 1.2,
                wordBreak: 'break-word'
              }}>Vendor</Typography>
            </Box>
          </Grid>

          <Grid item sx={{ flex: '1 0 auto', minWidth: '60px', maxWidth: '80px' }}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <Card sx={{
                width: 70,
                height: 70,
                borderRadius: '8px',
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)",
                backgroundSize: 'cover',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.05)',
                  transition: 'transform 0.2s ease'
                }
              }} />
              <Typography variant="caption" mt={1} sx={{
                fontSize: '1rem',
                lineHeight: 1.2,
                wordBreak: 'break-word'
              }}>Best Deal</Typography>
            </Box>
          </Grid>

          <Grid item sx={{ flex: '1 0 auto', minWidth: '60px', maxWidth: '80px' }}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <Card sx={{
                width: 70,
                height: 70,
                borderRadius: '8px',
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)",
                backgroundSize: 'cover',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.05)',
                  transition: 'transform 0.2s ease'
                }
              }} />
              <Typography variant="caption" mt={1} sx={{
                fontSize: '1rem',
                lineHeight: 1.2,
                wordBreak: 'break-word'
              }}>Lease</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box> */}


    </Box>
  );
};

export default Dashboard;