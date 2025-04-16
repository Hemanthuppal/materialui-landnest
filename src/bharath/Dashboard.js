import React from 'react';
import { Link } from 'react-router-dom';
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
  Card,
  CardContent,
  CardMedia
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import StarRateIcon from '@mui/icons-material/StarRate';
import BoltIcon from '@mui/icons-material/Bolt';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import AddIcon from '@mui/icons-material/Add';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import image from "../Images/Leasebuilding.png"
import image1 from "../Images/building.jpeg"

import {

  Home as BuyIcon,
  House as RentIcon,
  Business as LeaseIcon,
  ArrowForward as ArrowIcon,


} from '@mui/icons-material';
import { href } from 'react-router-dom';
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
    bgImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)",
    
  }
];


function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', bgcolor: '#f8f9fa' }}>
      <AppBar 
  position="static" 
  sx={{ 
    bgcolor: 'white', 
    boxShadow: 'none', 
    height: '50px', 
    width: 'calc(100% - 65px)', // leave space for sidebar
    ml: '65px',                 // shift right to align with sidebar
    zIndex: 1 
  }}
>
  <Toolbar sx={{ minHeight: '50px !important', px: 1 }}>
    <Search sx={{ flex: 1, mx: 1 }}>
      <SearchIconWrapper>
        <SearchIcon sx={{ fontSize: '1rem' }} />
      </SearchIconWrapper>
      <StyledInputBase placeholder="Search…" sx={{ fontSize: '0.85rem' }} />
    </Search>
    <IconButton size="small">
      <FavoriteBorderIcon sx={{ fontSize: '1rem', color: '#757575' }} />
    </IconButton>
    <IconButton size="small">
      <NotificationsNoneIcon sx={{ fontSize: '1rem', color: '#757575' }} />
    </IconButton>
    <IconButton size="small">
      <ChatBubbleOutlineIcon sx={{ fontSize: '1rem', color: '#757575' }} />
    </IconButton>
  </Toolbar>
</AppBar>



      <Box sx={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
      <Box
  sx={{
    width: '60px',
    height: '85vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'hidden',
    borderTopLeftRadius: '45px',
    borderBottomRightRadius: '45px',
    boxShadow: `
      0 10px 30px -5px rgba(0,0,0,0.3),
      inset 0 -3px 10px rgba(255,255,255,0.05)
    `,
    background: 'linear-gradient(145deg, #1e1e1e, #2a2a2a)',
    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 15px 35px -5px rgba(0,0,0,0.4)'
    },
    position: 'relative'
  }}
>
  {/* Premium Profile Section */}
  <Box
    sx={{
      width: '100%',
      background: 'linear-gradient(145deg,rgb(36, 36, 36),rgb(36, 36, 36))',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100px',
      borderTopLeftRadius: '45px',
      boxShadow: `
        inset 0 2px 4px rgba(255,255,255,0.05),
        0 2px 5px rgba(0,0,0,0.2)
      `,
      overflow: 'hidden'
    }}
  >
    <Avatar
      alt="User"
      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80"
      sx={{
        width: 44,
        height: 44,
        border: '3px solid rgba(216,204,186,0.7)',
        boxShadow: `
          0 3px 10px rgba(0,0,0,0.3),
          inset 0 0 10px rgba(216,204,186,0.2)
        `,
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        '&:hover': {
          transform: 'scale(1.15) rotate(5deg)',
          boxShadow: '0 5px 15px rgba(0,0,0,0.4)'
        }
      }}
    />
  </Box>

  {/* Luxury Middle Section */}
  <Box
    sx={{
      background: `
        linear-gradient(145deg, rgba(232,224,208,0.95), rgba(216,204,186,0.95)),
        url('https://www.transparenttextures.com/patterns/cream-paper.png')
      `,
      width: '100%',
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      pt: 3,
      pb: 3,
      borderTopLeftRadius: '45px',
      borderBottomRightRadius: '45px',
      boxShadow: `
        inset 0 0 15px rgba(0,0,0,0.1),
        0 5px 10px rgba(0,0,0,0.1)
      `
    }}
  >
    <Box
      sx={{
        background: 'rgba(255,255,255,0.4)',
        borderRadius: '16px',
        px: 1.5,
        py: 1,
        backdropFilter: 'blur(4px)',
        boxShadow: '0 2px 5px rgba(0,0,0,0.08)',
        transform: 'scale(0.95)',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'scale(1)',
          background: 'rgba(255,255,255,0.5)'
        }
      }}
    >
      <Typography sx={{
        fontSize: '0.8rem',
        color: '#5a4d3a',
        fontWeight: 700,
        fontFamily: 'Inter, Roboto, Helvetica, sans-serif',
        letterSpacing: '1.5px',
        textTransform: 'uppercase',
        textShadow: '0 1px 2px rgba(255,255,255,0.5)'
      }}>
        New
      </Typography>
    </Box>

    <Box
      sx={{
        background: 'rgba(255,255,255,0.3)',
        borderRadius: '8px',
        px: 0.5,
        py: 2,
        borderLeft: '3px solid rgba(90,77,58,0.3)',
        borderRight: '3px solid rgba(90,77,58,0.3)',
        backdropFilter: 'blur(3px)',
        boxShadow: '0 3px 8px rgba(0,0,0,0.1)'
      }}
    >
      <Typography
        sx={{
          writingMode: 'vertical-rl',
          transform: 'rotate(180deg)',
          fontSize: '0.85rem',
          color: '#3a3225',
          fontWeight: 800,
          fontFamily: 'Inter, Roboto, Helvetica, sans-serif',
          letterSpacing: '1.5px',
          textShadow: '0 1px 3px rgba(255,255,255,0.5)',
          py: 0.5
        }}
      >
        Building For Sale
      </Typography>
    </Box>

    <Box
      sx={{
        background: 'rgba(255,255,255,0.4)',
        borderRadius: '16px',
        px: 1.5,
        py: 1,
        backdropFilter: 'blur(4px)',
        boxShadow: '0 2px 5px rgba(0,0,0,0.08)',
        transform: 'scale(0.95)',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'scale(1)',
          background: 'rgba(255,255,255,0.5)'
        }
      }}
    >
      <Typography sx={{
        fontSize: '0.8rem',
        color: '#5a4d3a',
        fontWeight: 700,
        fontFamily: 'Inter, Roboto, Helvetica, sans-serif',
        letterSpacing: '1.5px',
        textTransform: 'uppercase',
        textShadow: '0 1px 2px rgba(255,255,255,0.5)'
      }}>
        Quick Deals
      </Typography>
    </Box>
  </Box>

  {/* Elegant Bottom Section */}
  <Box
    sx={{
      background: `
        linear-gradient(145deg, #2a2a2a, #1e1e1e),
        url('https://www.transparenttextures.com/patterns/dark-matter.png')
      `,
      width: '100%',
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      py: 3,
      borderBottomRightRadius: '45px',
      gap: '45px',
      boxShadow: `
        inset 0 0 15px rgba(0,0,0,0.2),
        0 5px 10px rgba(0,0,0,0.15)
      `
    }}
  >
    <Box
      sx={{
        background: 'rgba(0,0,0,0.25)',
        borderRadius: '8px',
        px: 0.5,
        py: 2,
        borderLeft: '3px solid rgba(255,255,255,0.1)',
        borderRight: '3px solid rgba(255,255,255,0.1)',
        backdropFilter: 'blur(4px)',
        boxShadow: '0 3px 10px rgba(0,0,0,0.2)'
      }}
    >
      <Typography
        sx={{
          writingMode: 'vertical-rl',
          transform: 'rotate(180deg)',
          fontSize: '0.85rem',
          color: '#ffffff',
          fontWeight: 800,
          fontFamily: 'Inter, Roboto, Helvetica, sans-serif',
          letterSpacing: '1.5px',
          textShadow: '0 1px 5px rgba(0,0,0,0.7)',
          py: 0.5
        }}
      >
        Hot Properties
      </Typography>
    </Box>

    <Box
      sx={{
        background: 'rgba(255,255,255,0.15)',
        borderRadius: '16px',
        px: 1.5,
        py: 1,
        backdropFilter: 'blur(4px)',
        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
        transform: 'scale(0.95)',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'scale(1)',
          background: 'rgba(255,255,255,0.25)',
          boxShadow: '0 3px 12px rgba(0,0,0,0.3)'
        }
      }}
    >
      <Typography sx={{
        fontSize: '0.8rem',
        color: 'white',
        fontWeight: 700,
        fontFamily: 'Inter, Roboto, Helvetica, sans-serif',
        letterSpacing: '1.5px',
        textTransform: 'uppercase',
        textShadow: '0 1px 3px rgba(0,0,0,0.5)'
      }}>
        Best Deals
      </Typography>
    </Box>
  </Box>
</Box>













        <Box flex={1} p={1} sx={{ overflow: 'auto' }}>

        <Box mb={2} backgroundColor="#e7dbc9" borderRadius='10px'>
    <Typography variant="h6" align="center" mb={1}>
      Looking For
    </Typography>

    <Card sx={{
      backgroundColor: '#e7dbc9',
      borderRadius: '10px',
      padding: '5px',
      boxShadow: 'none'
    }}>
      <Grid container spacing={2}>
        {cards.slice(0, 2).map((card, index) => (
          <Grid item xs={6} key={index}>
            <Card sx={{
              height: '100px',
              width: '140px',
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
            <Link to="/lease_map" style={{ textDecoration: 'none' }}>  {/* Link wrapping the Lease card */}
              <Card sx={{
                height: '100px',
                width: '140px',
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
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Card>
  </Box>

          <Box mb={2}>
            <Typography variant="h6" fontWeight='bold' align="center" mb={1}>
              Constructions
            </Typography>

            <Card
      sx={{
        backgroundColor: '#d8ccba',
        borderTopLeftRadius: '40px',
        borderBottomRightRadius: '40px',
        overflow: 'hidden',
        width: 310,
        height: 220,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        '&:hover': {
          transform: 'scale(1.02)',
          transition: 'transform 0.3s ease',
        },
      }}
    >
      {/* Top Image Section */}
      <Box
        sx={{
          height: '70%',
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderBottomRightRadius:"40px",
        }}
      />

      {/* Bottom Text + Arrow Section */}
      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '30%',
          
          px: 2,
          py: 1,
          backgroundColor: '#d8ccba',
        }}
      >
        <Typography variant="body1" fontWeight="600" color="#333">
          New Building Construction
        </Typography>
        <IconButton sx={{ color: '#333' }}>
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </CardContent>
             </Card>
          </Box>

          <Box mb={2}>
           
          <Card
      sx={{
        backgroundColor: '#d8ccba',
        borderTopLeftRadius: '40px',
        borderBottomRightRadius: '40px',
        overflow: 'hidden',
        width: 310,
        height: 220,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        '&:hover': {
          transform: 'scale(1.02)',
          transition: 'transform 0.3s ease',
        },
      }}
    >
      {/* Top image section */}
      <Box
        sx={{
          height: '70%',
          backgroundImage: `url(${image1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderBottomRightRadius:"40px",
        }}
      />

      {/* Bottom text and arrow */}
      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '30%',
          px: 2,
          py: 1,
          backgroundColor: '#d8ccba',
        }}
      >
        <Typography variant="body1" fontWeight="600" color="#333">
          Interiors
        </Typography>
        <IconButton sx={{ color: '#333' }}>
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </CardContent>
          </Card>
          </Box>
          <Box mb={2}>
           

          <Card
      sx={{
        backgroundColor: '#d8ccba',
        borderTopLeftRadius: '40px',
        borderBottomRightRadius: '40px',
        overflow: 'hidden',
        width: 310,
        height: 220,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        '&:hover': {
          transform: 'scale(1.02)',
          transition: 'transform 0.3s ease',
        },
      }}
    >
      {/* Top image section */}
      <Box
        sx={{
          height: '70%',
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderBottomRightRadius:"40px",
        }}
      />

      {/* Bottom text and arrow section */}
      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '30%',
          px: 2,
          py: 1,
          backgroundColor: '#d8ccba',
        }}
      >
        <Typography variant="body1" fontWeight="600" color="#333">
          Renovations
        </Typography>
        <IconButton sx={{ color: '#333' }}>
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </CardContent>
    </Card>
          </Box>



          
          <Box mb={2}>
            <Typography variant="h6" fontWeight='bold' align="center" mb={1}>
              Home Services
            </Typography>

            <Card
      sx={{
        backgroundColor: '#d8ccba',
        borderTopLeftRadius: '40px',
        borderBottomRightRadius: '40px',
        overflow: 'hidden',
        width: 310,
        height: 220,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        '&:hover': {
          transform: 'scale(1.02)',
          transition: 'transform 0.3s ease',
        },
      }}
    >
      {/* Top image section */}
      <Box
        sx={{
          height: '70%',
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderBottomRightRadius:"40px",
        }}
      />

      {/* Bottom text and arrow section */}
      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '30%',
          px: 2,
          py: 1,
          backgroundColor: '#d8ccba',
        }}
      >
        <Typography variant="body1" fontWeight="600" color="#333">
          Paintings
        </Typography>
        <IconButton sx={{ color: '#333' }}>
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </CardContent>
    </Card>
          </Box>


          <Box mb={2}>
          <Card
      sx={{
        backgroundColor: '#d8ccba',
        borderTopLeftRadius: '40px',
        borderBottomRightRadius: '40px',
        overflow: 'hidden',
        width: 310,
        height: 220,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        '&:hover': {
          transform: 'scale(1.02)',
          transition: 'transform 0.3s ease',
        },
      }}
    >
      {/* Top image section */}
      <Box
        sx={{
          height: '70%',
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderBottomRightRadius:"40px",
        }}
      />

      {/* Bottom text and arrow section */}
      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '30%',
          px: 2,
          py: 1,
          backgroundColor: '#d8ccba',
        }}
      >
        <Typography variant="body1" fontWeight="600" color="#333">
          Electrical
        </Typography>
        <IconButton sx={{ color: '#333' }}>
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </CardContent>
    </Card>
         </Box>


         <Box mb={2}>
         <Card
      sx={{
        backgroundColor: '#d8ccba',
        borderTopLeftRadius: '40px',
        borderBottomRightRadius: '40px',
        overflow: 'hidden',
        width: 310,
        height: 220,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        '&:hover': {
          transform: 'scale(1.02)',
          transition: 'transform 0.3s ease',
        },
      }}
    >
      {/* Top image section */}
      <Box
        sx={{
          height: '70%',
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderBottomRightRadius:"40px",
        }}
      />

      {/* Bottom text and arrow section */}
      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '30%',
          px: 2,
          py: 1,
          backgroundColor: '#d8ccba',
        }}
      >
        <Typography variant="body1" fontWeight="600" color="#333">
          Tiles & Granites Repair Works
        </Typography>
        <IconButton sx={{ color: '#333' }}>
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </CardContent>
    </Card>
         </Box>

         <Box mb={2}>
         <Card
      sx={{
        backgroundColor: '#d8ccba',
        borderTopLeftRadius: '40px',
        borderBottomRightRadius: '40px',
        overflow: 'hidden',
        width: 310,
        height: 220,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        '&:hover': {
          transform: 'scale(1.02)',
          transition: 'transform 0.3s ease',
        },
      }}
    >
      {/* Top image section */}
      <Box
        sx={{
          height: '70%',
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderBottomRightRadius:"40px",
        }}
      />

      {/* Bottom text and arrow section */}
      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '30%',
          px: 2,
          py: 1,
          backgroundColor: '#d8ccba',
        }}
      >
        <Typography variant="body1" fontWeight="600" color="#333">
          Plumbing
        </Typography>
        <IconButton sx={{ color: '#333' }}>
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </CardContent>
    </Card>
         </Box>

         <Box mb={2}>
         <Card
      sx={{
        backgroundColor: '#d8ccba',
        borderTopLeftRadius: '40px',
        borderBottomRightRadius: '40px',
        overflow: 'hidden',
        width: 310,
        height: 220,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        '&:hover': {
          transform: 'scale(1.02)',
          transition: 'transform 0.3s ease',
        },
      }}
    >
      {/* Top image section */}
      <Box
        sx={{
          height: '70%',
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderBottomRightRadius:"40px",
        }}
      />

      {/* Bottom text and arrow section */}
      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '30%',
          px: 2,
          py: 1,
          backgroundColor: '#d8ccba',
        }}
      >
        <Typography variant="body1" fontWeight="600" color="#333">
          Carpenter
        </Typography>
        <IconButton sx={{ color: '#333' }}>
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </CardContent>
    </Card>
         </Box>

         <Box mb={2}>
         <Card
      sx={{
        backgroundColor: '#d8ccba',
        borderTopLeftRadius: '40px',
        borderBottomRightRadius: '40px',
        overflow: 'hidden',
        width: 310,
        height: 220,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        '&:hover': {
          transform: 'scale(1.02)',
          transition: 'transform 0.3s ease',
        },
      }}
    >
      {/* Top image section */}
      <Box
        sx={{
          height: '70%',
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderBottomRightRadius:"40px",
        }}
      />

      {/* Bottom text and arrow section */}
      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '30%',
          px: 2,
          py: 1,
          backgroundColor: '#d8ccba',
        }}
      >
        <Typography variant="body1" fontWeight="600" color="#333">
          AC installation & Repair
        </Typography>
        <IconButton sx={{ color: '#333' }}>
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </CardContent>
    </Card>
         </Box>

         <Box mb={2}>
           
               <Card
      sx={{
        backgroundColor: '#d8ccba',
        borderTopLeftRadius: '40px',
        borderBottomRightRadius: '40px',
        overflow: 'hidden',
        width: 310,
        height: 220,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        '&:hover': {
          transform: 'scale(1.02)',
          transition: 'transform 0.3s ease',
        },
      }}
    >
      {/* Top image section */}
      <Box
        sx={{
          height: '70%',
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderBottomRightRadius:"40px",
        }}
      />

      {/* Bottom text and arrow section */}
      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '30%',
          px: 2,
          py: 1,
          backgroundColor: '#d8ccba',
        }}
      >
        <Typography variant="body1" fontWeight="600" color="#333">
          Gardener
        </Typography>
        <IconButton sx={{ color: '#333' }}>
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </CardContent>
    </Card>
              
         </Box>
         <Box mb={2}>
         <Card
      sx={{
        backgroundColor: '#d8ccba',
        borderTopLeftRadius: '40px',
        borderBottomRightRadius: '40px',
        overflow: 'hidden',
        width: 310,
        height: 220,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        '&:hover': {
          transform: 'scale(1.02)',
          transition: 'transform 0.3s ease',
        },
      }}
    >
      {/* Top image section */}
      <Box
        sx={{
          height: '70%',
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderBottomRightRadius:"40px",
        }}
      />

      {/* Bottom text and arrow section */}
      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '30%',
          px: 2,
          py: 1,
          backgroundColor: '#d8ccba',
        }}
      >
        <Typography variant="body1" fontWeight="600" color="#333">
          Aliminum Fabrication & Repair
        </Typography>
        <IconButton sx={{ color: '#333' }}>
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </CardContent>
    </Card>
         </Box>
         <Box mb={2}>
         <Card
      sx={{
        backgroundColor: '#d8ccba',
        borderTopLeftRadius: '40px',
        borderBottomRightRadius: '40px',
        overflow: 'hidden',
        width: 310,
        height: 220,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        '&:hover': {
          transform: 'scale(1.02)',
          transition: 'transform 0.3s ease',
        },
      }}
    >
      {/* Top image section */}
      <Box
        sx={{
          height: '70%',
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderBottomRightRadius:"40px",
        }}
      />

      {/* Bottom text and arrow section */}
      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '30%',
          px: 2,
          py: 1,
          backgroundColor: '#d8ccba',
        }}
      >
        <Typography variant="body1" fontWeight="600" color="#333">
          UPVC Fabrications & Repair
        </Typography>
        <IconButton sx={{ color: '#333' }}>
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </CardContent>
    </Card>
         </Box>
         <Box mb={2}>
         <Card
      sx={{
        backgroundColor: '#d8ccba',
        borderTopLeftRadius: '40px',
        borderBottomRightRadius: '40px',
        overflow: 'hidden',
        width: 310,
        height: 220,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        '&:hover': {
          transform: 'scale(1.02)',
          transition: 'transform 0.3s ease',
        },
      }}
    >
      {/* Top image section */}
      <Box
        sx={{
          height: '70%',
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderBottomRightRadius:"40px",
        }}
      />

      {/* Bottom text and arrow section */}
      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '30%',
          px: 2,
          py: 1,
          backgroundColor: '#d8ccba',
        }}
      >
        <Typography variant="body1" fontWeight="600" color="#333">
          Gas Pipeline installation & Repair
        </Typography>
        <IconButton sx={{ color: '#333' }}>
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </CardContent>
    </Card>
         </Box>
         <Box mb={2}>
         <Card
      sx={{
        backgroundColor: '#d8ccba',
        borderTopLeftRadius: '40px',
        borderBottomRightRadius: '40px',
        overflow: 'hidden',
        width: 310,
        height: 220,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        '&:hover': {
          transform: 'scale(1.02)',
          transition: 'transform 0.3s ease',
        },
      }}
    >
      {/* Top image section */}
      <Box
        sx={{
          height: '70%',
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderBottomRightRadius:"40px",
        }}
      />

      {/* Bottom text and arrow section */}
      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '30%',
          px: 2,
          py: 1,
          backgroundColor: '#d8ccba',
        }}
      >
        <Typography variant="body1" fontWeight="600" color="#333">
          Steel Fabrications
        </Typography>
        <IconButton sx={{ color: '#333' }}>
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </CardContent>
    </Card>
         </Box>

         <Box mb={2}>
         <Card
      sx={{
        backgroundColor: '#d8ccba',
        borderTopLeftRadius: '40px',
        borderBottomRightRadius: '40px',
        overflow: 'hidden',
        width: 310,
        height: 220,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        '&:hover': {
          transform: 'scale(1.02)',
          transition: 'transform 0.3s ease',
        },
      }}
    >
      {/* Top image section */}
      <Box
        sx={{
          height: '70%',
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderBottomRightRadius:"40px",
        }}
      />

      {/* Bottom text and arrow section */}
      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '30%',
          px: 2,
          py: 1,
          backgroundColor: '#d8ccba',
        }}
      >
        <Typography variant="body1" fontWeight="600" color="#333">
          Home Clean
        </Typography>
        <IconButton sx={{ color: '#333' }}>
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </CardContent>
    </Card>
         </Box>
         <Box mb={2}>
         <Card
      sx={{
        backgroundColor: '#d8ccba',
        borderTopLeftRadius: '40px',
        borderBottomRightRadius: '40px',
        overflow: 'hidden',
        width: 310,
        height: 220,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        '&:hover': {
          transform: 'scale(1.02)',
          transition: 'transform 0.3s ease',
        },
      }}
    >
      {/* Top image section */}
      <Box
        sx={{
          height: '70%',
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderBottomRightRadius:"40px",
        }}
      />

      {/* Bottom text and arrow section */}
      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '30%',
          px: 2,
          py: 1,
          backgroundColor: '#d8ccba',
        }}
      >
        <Typography variant="body1" fontWeight="600" color="#333">
          Tiolet & Kitchen Cleaning
        </Typography>
        <IconButton sx={{ color: '#333' }}>
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </CardContent>
    </Card>
         </Box>
         <Box mb={2}>
         <Card
      sx={{
        backgroundColor: '#d8ccba',
        borderTopLeftRadius: '40px',
        borderBottomRightRadius: '40px',
        overflow: 'hidden',
        width: 310,
        height: 220,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        '&:hover': {
          transform: 'scale(1.02)',
          transition: 'transform 0.3s ease',
        },
      }}
    >
      {/* Top image section */}
      <Box
        sx={{
          height: '70%',
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderBottomRightRadius:"40px",
        }}
      />

      {/* Bottom text and arrow section */}
      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '30%',
          px: 2,
          py: 1,
          backgroundColor: '#d8ccba',
        }}
      >
        <Typography variant="body1" fontWeight="600" color="#333">
          Soft & Curtain installation & cleaning
        </Typography>
        <IconButton sx={{ color: '#333' }}>
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </CardContent>
    </Card>
         </Box>
         <Box mb={2}>
         <Card
      sx={{
        backgroundColor: '#d8ccba',
        borderTopLeftRadius: '40px',
        borderBottomRightRadius: '40px',
        overflow: 'hidden',
        width: 310,
        height: 220,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        '&:hover': {
          transform: 'scale(1.02)',
          transition: 'transform 0.3s ease',
        },
      }}
    >
      {/* Top image section */}
      <Box
        sx={{
          height: '70%',
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderBottomRightRadius:"40px",
        }}
      />

      {/* Bottom text and arrow section */}
      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '30%',
          px: 2,
          py: 1,
          backgroundColor: '#d8ccba',
        }}
      >
        <Typography variant="body1" fontWeight="600" color="#333">
          Homemaid
        </Typography>
        <IconButton sx={{ color: '#333' }}>
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </CardContent>
    </Card>
         </Box>


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
