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
  Card,
  CardContent,
  CardMedia
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
import {

  Home as BuyIcon,
  House as RentIcon,
  Business as LeaseIcon,
  ArrowForward as ArrowIcon,


} from '@mui/icons-material';
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
    bgImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)"
  }
];


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

        {/* <Box sx={{ flex: 1, p: 1.5, overflow: 'auto' }}>
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
        </Box> */}



        <Box flex={1} p={1} sx={{ overflow: 'auto' }}>

          <Box mb={2}>
            <Typography variant="h6" align="center" mb={1}>
              Looking For
            </Typography>

            <Card sx={{
              backgroundColor: 'gray',
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
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Box>




          {/* <Box mb={2}>
            <Typography variant="h6" fontWeight='bold' align="center" mb={1}>
              Constructions
            </Typography>

            <Card sx={{
              backgroundColor: 'gray',
              borderRadius: '10px',
              paddingBottom: '30px',
              boxShadow: 'none'
            }}>
              <Grid item xs={12}>
                <Box display="flex" justifyContent="flex-start">
                  <Card sx={{
                    height: '180px',
                    width: '100%',
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
            </Card>
          </Box> */}



          <Box mb={2}>
            <Typography variant="h6" fontWeight='bold' align="center" mb={1}>
              Constructions
            </Typography>

            <Card sx={{
              backgroundColor: 'gray',
              // borderRadius: '40px 0 0 40px',
              borderBottomRightRadius: '40px',
              borderTopLeftRadius: '40px',
              paddingBottom: '30px',
              boxShadow: 'none'
            }}>
              <Grid item xs={12}>
                <Box display="flex" justifyContent="flex-start">
                  <Card sx={{
                    height: '150px',
                    width: '100%',
                    borderBottomRightRadius: '40px',
                    borderTopLeftRadius: '40px', 
                    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                    background: cards[2].bgImage,
                    backgroundSize: 'cover',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    position: 'relative',
                    '&:hover': {
                      transform: 'scale(1.02)',
                      transition: 'transform 0.3s ease'
                    }
                  }}>
                    {/* Image section - takes up most of the card */}
                    <Box sx={{
                      height: '70%',
                      background: cards[2].bgImage,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }} />

                    {/* Bottom section with title and arrow */}
                    <CardContent sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%',
                      height: '30%',
                      padding: '8px 16px',
                      boxSizing: 'border-box'
                    }}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="body1" fontWeight='bold' component="div" ml={1}>
New Building Construction                     </Typography>
                      </Box>
                      <IconButton sx={{ color: 'white' }}>
                        <ArrowIcon />
                      </IconButton>
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
            </Card>
          </Box>

          <Box mb={2}>
           
            <Card sx={{
              backgroundColor: 'gray',
              // borderRadius: '40px 0 0 40px',
              borderBottomRightRadius: '40px',
              borderTopLeftRadius: '40px',
              paddingBottom: '30px',
              boxShadow: 'none'
            }}>
              <Grid item xs={12}>
                <Box display="flex" justifyContent="flex-start">
                  <Card sx={{
                    height: '150px',
                    width: '100%',
                    borderBottomRightRadius: '40px',
                    borderTopLeftRadius: '40px', 
                    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                    background: cards[2].bgImage,
                    backgroundSize: 'cover',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    position: 'relative',
                    '&:hover': {
                      transform: 'scale(1.02)',
                      transition: 'transform 0.3s ease'
                    }
                  }}>
                    {/* Image section - takes up most of the card */}
                    <Box sx={{
                      height: '70%',
                      background: cards[2].bgImage,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }} />

                    {/* Bottom section with title and arrow */}
                    <CardContent sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%',
                      height: '30%',
                      padding: '8px 16px',
                      boxSizing: 'border-box'
                    }}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="body1" fontWeight='bold' component="div" ml={1}>
Interiors                        </Typography>
                      </Box>
                      <IconButton sx={{ color: 'white' }}>
                        <ArrowIcon />
                      </IconButton>
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
            </Card>
          </Box>
          <Box mb={2}>
           

            <Card sx={{
              backgroundColor: 'gray',
              // borderRadius: '40px 0 0 40px',
              borderBottomRightRadius: '40px',
              borderTopLeftRadius: '40px',
              paddingBottom: '30px',
              boxShadow: 'none'
            }}>
              <Grid item xs={12}>
                <Box display="flex" justifyContent="flex-start">
                  <Card sx={{
                    height: '150px',
                    width: '100%',
                    borderBottomRightRadius: '40px',
                    borderTopLeftRadius: '40px', 
                    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                    background: cards[2].bgImage,
                    backgroundSize: 'cover',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    position: 'relative',
                    '&:hover': {
                      transform: 'scale(1.02)',
                      transition: 'transform 0.3s ease'
                    }
                  }}>
                    {/* Image section - takes up most of the card */}
                    <Box sx={{
                      height: '70%',
                      background: cards[2].bgImage,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }} />

                    {/* Bottom section with title and arrow */}
                    <CardContent sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%',
                      height: '30%',
                      padding: '8px 16px',
                      boxSizing: 'border-box'
                    }}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="body1"  fontWeight='bold' component="div" ml={1}>
                          Renovations
                        </Typography>
                      </Box>
                      <IconButton sx={{ color: 'white' }}>
                        <ArrowIcon />
                      </IconButton>
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
            </Card>
          </Box>



          
          <Box mb={2}>
            <Typography variant="h6" fontWeight='bold' align="center" mb={1}>
              Home Services
            </Typography>

            <Card sx={{
              backgroundColor: 'gray',
              // borderRadius: '40px 0 0 40px',
              borderBottomRightRadius: '40px',
              borderTopLeftRadius: '40px',
              paddingBottom: '30px',
              boxShadow: 'none'
            }}>
              <Grid item xs={12}>
                <Box display="flex" justifyContent="flex-start">
                  <Card sx={{
                    height: '150px',
                    width: '100%',
                    borderBottomRightRadius: '40px',
                    borderTopLeftRadius: '40px', 
                    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                    background: cards[2].bgImage,
                    backgroundSize: 'cover',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    position: 'relative',
                    '&:hover': {
                      transform: 'scale(1.02)',
                      transition: 'transform 0.3s ease'
                    }
                  }}>
                    {/* Image section - takes up most of the card */}
                    <Box sx={{
                      height: '70%',
                      background: cards[2].bgImage,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }} />

                    {/* Bottom section with title and arrow */}
                    <CardContent sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%',
                      height: '30%',
                      padding: '8px 16px',
                      boxSizing: 'border-box'
                    }}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="body1" fontWeight='bold' component="div" ml={1}>
Painting
                        </Typography>
                      </Box>
                      <IconButton sx={{ color: 'white' }}>
                        <ArrowIcon />
                      </IconButton>
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
            </Card>
          </Box>


          <Box mb={2}>
           <Card sx={{
             backgroundColor: 'gray',
             // borderRadius: '40px 0 0 40px',
             borderBottomRightRadius: '40px',
             borderTopLeftRadius: '40px',
             paddingBottom: '30px',
             boxShadow: 'none'
           }}>
             <Grid item xs={12}>
               <Box display="flex" justifyContent="flex-start">
                 <Card sx={{
                   height: '150px',
                   width: '100%',
                   borderBottomRightRadius: '40px',
                   borderTopLeftRadius: '40px', 
                   boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                   background: cards[2].bgImage,
                   backgroundSize: 'cover',
                   color: 'white',
                   display: 'flex',
                   flexDirection: 'column',
                   cursor: 'pointer',
                   position: 'relative',
                   '&:hover': {
                     transform: 'scale(1.02)',
                     transition: 'transform 0.3s ease'
                   }
                 }}>
                   {/* Image section - takes up most of the card */}
                   <Box sx={{
                     height: '70%',
                     background: cards[2].bgImage,
                     backgroundSize: 'cover',
                     backgroundPosition: 'center'
                   }} />

                   {/* Bottom section with title and arrow */}
                   <CardContent sx={{
                     display: 'flex',
                     justifyContent: 'space-between',
                     alignItems: 'center',
                     width: '100%',
                     height: '30%',
                     padding: '8px 16px',
                     boxSizing: 'border-box'
                   }}>
                     <Box sx={{ display: 'flex', alignItems: 'center' }}>
                       <Typography variant="body1"  fontWeight='bold' component="div" ml={1}>
                         Electrical
                       </Typography>
                     </Box>
                     <IconButton sx={{ color: 'white' }}>
                       <ArrowIcon />
                     </IconButton>
                   </CardContent>
                 </Card>
               </Box>
             </Grid>
           </Card>
         </Box>


         <Box mb={2}>
           <Card sx={{
             backgroundColor: 'gray',
             // borderRadius: '40px 0 0 40px',
             borderBottomRightRadius: '40px',
             borderTopLeftRadius: '40px',
             paddingBottom: '30px',
             boxShadow: 'none'
           }}>
             <Grid item xs={12}>
               <Box display="flex" justifyContent="flex-start">
                 <Card sx={{
                   height: '150px',
                   width: '100%',
                   borderBottomRightRadius: '40px',
                   borderTopLeftRadius: '40px', 
                   boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                   background: cards[2].bgImage,
                   backgroundSize: 'cover',
                   color: 'white',
                   display: 'flex',
                   flexDirection: 'column',
                   cursor: 'pointer',
                   position: 'relative',
                   '&:hover': {
                     transform: 'scale(1.02)',
                     transition: 'transform 0.3s ease'
                   }
                 }}>
                   {/* Image section - takes up most of the card */}
                   <Box sx={{
                     height: '70%',
                     background: cards[2].bgImage,
                     backgroundSize: 'cover',
                     backgroundPosition: 'center'
                   }} />

                   {/* Bottom section with title and arrow */}
                   <CardContent sx={{
                     display: 'flex',
                     justifyContent: 'space-between',
                     alignItems: 'center',
                     width: '100%',
                     height: '30%',
                     padding: '8px 16px',
                     boxSizing: 'border-box'
                   }}>
                     <Box sx={{ display: 'flex', alignItems: 'center' }}>
                       <Typography variant="body1"  fontWeight='bold' component="div" ml={1}>
                         Tiles & Granite Repair Works
                       </Typography>
                     </Box>
                     <IconButton sx={{ color: 'white' }}>
                       <ArrowIcon />
                     </IconButton>
                   </CardContent>
                 </Card>
               </Box>
             </Grid>
           </Card>
         </Box>

         <Box mb={2}>
           <Card sx={{
             backgroundColor: 'gray',
             // borderRadius: '40px 0 0 40px',
             borderBottomRightRadius: '40px',
             borderTopLeftRadius: '40px',
             paddingBottom: '30px',
             boxShadow: 'none'
           }}>
             <Grid item xs={12}>
               <Box display="flex" justifyContent="flex-start">
                 <Card sx={{
                   height: '150px',
                   width: '100%',
                   borderBottomRightRadius: '40px',
                   borderTopLeftRadius: '40px', 
                   boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                   background: cards[2].bgImage,
                   backgroundSize: 'cover',
                   color: 'white',
                   display: 'flex',
                   flexDirection: 'column',
                   cursor: 'pointer',
                   position: 'relative',
                   '&:hover': {
                     transform: 'scale(1.02)',
                     transition: 'transform 0.3s ease'
                   }
                 }}>
                   {/* Image section - takes up most of the card */}
                   <Box sx={{
                     height: '70%',
                     background: cards[2].bgImage,
                     backgroundSize: 'cover',
                     backgroundPosition: 'center'
                   }} />

                   {/* Bottom section with title and arrow */}
                   <CardContent sx={{
                     display: 'flex',
                     justifyContent: 'space-between',
                     alignItems: 'center',
                     width: '100%',
                     height: '30%',
                     padding: '8px 16px',
                     boxSizing: 'border-box'
                   }}>
                     <Box sx={{ display: 'flex', alignItems: 'center' }}>
                       <Typography variant="body1"  fontWeight='bold' component="div" ml={1}>
                         Plumbing
                       </Typography>
                     </Box>
                     <IconButton sx={{ color: 'white' }}>
                       <ArrowIcon />
                     </IconButton>
                   </CardContent>
                 </Card>
               </Box>
             </Grid>
           </Card>
         </Box>

         <Box mb={2}>
           <Card sx={{
             backgroundColor: 'gray',
             // borderRadius: '40px 0 0 40px',
             borderBottomRightRadius: '40px',
             borderTopLeftRadius: '40px',
             paddingBottom: '30px',
             boxShadow: 'none'
           }}>
             <Grid item xs={12}>
               <Box display="flex" justifyContent="flex-start">
                 <Card sx={{
                   height: '150px',
                   width: '100%',
                   borderBottomRightRadius: '40px',
                   borderTopLeftRadius: '40px', 
                   boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                   background: cards[2].bgImage,
                   backgroundSize: 'cover',
                   color: 'white',
                   display: 'flex',
                   flexDirection: 'column',
                   cursor: 'pointer',
                   position: 'relative',
                   '&:hover': {
                     transform: 'scale(1.02)',
                     transition: 'transform 0.3s ease'
                   }
                 }}>
                   {/* Image section - takes up most of the card */}
                   <Box sx={{
                     height: '70%',
                     background: cards[2].bgImage,
                     backgroundSize: 'cover',
                     backgroundPosition: 'center'
                   }} />

                   {/* Bottom section with title and arrow */}
                   <CardContent sx={{
                     display: 'flex',
                     justifyContent: 'space-between',
                     alignItems: 'center',
                     width: '100%',
                     height: '30%',
                     padding: '8px 16px',
                     boxSizing: 'border-box'
                   }}>
                     <Box sx={{ display: 'flex', alignItems: 'center' }}>
                       <Typography variant="body1"  fontWeight='bold' component="div" ml={1}>
                         Carpenter
                       </Typography>
                     </Box>
                     <IconButton sx={{ color: 'white' }}>
                       <ArrowIcon />
                     </IconButton>
                   </CardContent>
                 </Card>
               </Box>
             </Grid>
           </Card>
         </Box>

         <Box mb={2}>
           <Card sx={{
             backgroundColor: 'gray',
             // borderRadius: '40px 0 0 40px',
             borderBottomRightRadius: '40px',
             borderTopLeftRadius: '40px',
             paddingBottom: '30px',
             boxShadow: 'none'
           }}>
             <Grid item xs={12}>
               <Box display="flex" justifyContent="flex-start">
                 <Card sx={{
                   height: '150px',
                   width: '100%',
                   borderBottomRightRadius: '40px',
                   borderTopLeftRadius: '40px', 
                   boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                   background: cards[2].bgImage,
                   backgroundSize: 'cover',
                   color: 'white',
                   display: 'flex',
                   flexDirection: 'column',
                   cursor: 'pointer',
                   position: 'relative',
                   '&:hover': {
                     transform: 'scale(1.02)',
                     transition: 'transform 0.3s ease'
                   }
                 }}>
                   {/* Image section - takes up most of the card */}
                   <Box sx={{
                     height: '70%',
                     background: cards[2].bgImage,
                     backgroundSize: 'cover',
                     backgroundPosition: 'center'
                   }} />

                   {/* Bottom section with title and arrow */}
                   <CardContent sx={{
                     display: 'flex',
                     justifyContent: 'space-between',
                     alignItems: 'center',
                     width: '100%',
                     height: '30%',
                     padding: '8px 16px',
                     boxSizing: 'border-box'
                   }}>
                     <Box sx={{ display: 'flex', alignItems: 'center' }}>
                       <Typography variant="body1"  fontWeight='bold' component="div" ml={1}>
                         AC Installation & Repair
                       </Typography>
                     </Box>
                     <IconButton sx={{ color: 'white' }}>
                       <ArrowIcon />
                     </IconButton>
                   </CardContent>
                 </Card>
               </Box>
             </Grid>
           </Card>
         </Box>

         <Box mb={2}>
           <Card sx={{
             backgroundColor: 'gray',
             // borderRadius: '40px 0 0 40px',
             borderBottomRightRadius: '40px',
             borderTopLeftRadius: '40px',
             paddingBottom: '30px',
             boxShadow: 'none'
           }}>
             <Grid item xs={12}>
               <Box display="flex" justifyContent="flex-start">
                 <Card sx={{
                   height: '150px',
                   width: '100%',
                   borderBottomRightRadius: '40px',
                   borderTopLeftRadius: '40px', 
                   boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                   background: cards[2].bgImage,
                   backgroundSize: 'cover',
                   color: 'white',
                   display: 'flex',
                   flexDirection: 'column',
                   cursor: 'pointer',
                   position: 'relative',
                   '&:hover': {
                     transform: 'scale(1.02)',
                     transition: 'transform 0.3s ease'
                   }
                 }}>
                   {/* Image section - takes up most of the card */}
                   <Box sx={{
                     height: '70%',
                     background: cards[2].bgImage,
                     backgroundSize: 'cover',
                     backgroundPosition: 'center'
                   }} />

                   {/* Bottom section with title and arrow */}
                   <CardContent sx={{
                     display: 'flex',
                     justifyContent: 'space-between',
                     alignItems: 'center',
                     width: '100%',
                     height: '30%',
                     padding: '8px 16px',
                     boxSizing: 'border-box'
                   }}>
                     <Box sx={{ display: 'flex', alignItems: 'center' }}>
                       <Typography variant="body1"  fontWeight='bold' component="div" ml={1}>
                         Aliminum Fabrication & Repair
                       </Typography>
                     </Box>
                     <IconButton sx={{ color: 'white' }}>
                       <ArrowIcon />
                     </IconButton>
                   </CardContent>
                 </Card>
               </Box>
             </Grid>
           </Card>
         </Box>
         <Box mb={2}>
           <Card sx={{
             backgroundColor: 'gray',
             // borderRadius: '40px 0 0 40px',
             borderBottomRightRadius: '40px',
             borderTopLeftRadius: '40px',
             paddingBottom: '30px',
             boxShadow: 'none'
           }}>
             <Grid item xs={12}>
               <Box display="flex" justifyContent="flex-start">
                 <Card sx={{
                   height: '150px',
                   width: '100%',
                   borderBottomRightRadius: '40px',
                   borderTopLeftRadius: '40px', 
                   boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                   background: cards[2].bgImage,
                   backgroundSize: 'cover',
                   color: 'white',
                   display: 'flex',
                   flexDirection: 'column',
                   cursor: 'pointer',
                   position: 'relative',
                   '&:hover': {
                     transform: 'scale(1.02)',
                     transition: 'transform 0.3s ease'
                   }
                 }}>
                   {/* Image section - takes up most of the card */}
                   <Box sx={{
                     height: '70%',
                     background: cards[2].bgImage,
                     backgroundSize: 'cover',
                     backgroundPosition: 'center'
                   }} />

                   {/* Bottom section with title and arrow */}
                   <CardContent sx={{
                     display: 'flex',
                     justifyContent: 'space-between',
                     alignItems: 'center',
                     width: '100%',
                     height: '30%',
                     padding: '8px 16px',
                     boxSizing: 'border-box'
                   }}>
                     <Box sx={{ display: 'flex', alignItems: 'center' }}>
                       <Typography variant="body1"  fontWeight='bold' component="div" ml={1}>
                         UPVC fabrication & Repair
                       </Typography>
                     </Box>
                     <IconButton sx={{ color: 'white' }}>
                       <ArrowIcon />
                     </IconButton>
                   </CardContent>
                 </Card>
               </Box>
             </Grid>
           </Card>
         </Box>
         <Box mb={2}>
           <Card sx={{
             backgroundColor: 'gray',
             // borderRadius: '40px 0 0 40px',
             borderBottomRightRadius: '40px',
             borderTopLeftRadius: '40px',
             paddingBottom: '30px',
             boxShadow: 'none'
           }}>
             <Grid item xs={12}>
               <Box display="flex" justifyContent="flex-start">
                 <Card sx={{
                   height: '150px',
                   width: '100%',
                   borderBottomRightRadius: '40px',
                   borderTopLeftRadius: '40px', 
                   boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                   background: cards[2].bgImage,
                   backgroundSize: 'cover',
                   color: 'white',
                   display: 'flex',
                   flexDirection: 'column',
                   cursor: 'pointer',
                   position: 'relative',
                   '&:hover': {
                     transform: 'scale(1.02)',
                     transition: 'transform 0.3s ease'
                   }
                 }}>
                   {/* Image section - takes up most of the card */}
                   <Box sx={{
                     height: '70%',
                     background: cards[2].bgImage,
                     backgroundSize: 'cover',
                     backgroundPosition: 'center'
                   }} />

                   {/* Bottom section with title and arrow */}
                   <CardContent sx={{
                     display: 'flex',
                     justifyContent: 'space-between',
                     alignItems: 'center',
                     width: '100%',
                     height: '30%',
                     padding: '8px 16px',
                     boxSizing: 'border-box'
                   }}>
                     <Box sx={{ display: 'flex', alignItems: 'center' }}>
                       <Typography variant="body1"  fontWeight='bold' component="div" ml={1}>
                         Gas Pipeline installation & Repair
                       </Typography>
                     </Box>
                     <IconButton sx={{ color: 'white' }}>
                       <ArrowIcon />
                     </IconButton>
                   </CardContent>
                 </Card>
               </Box>
             </Grid>
           </Card>
         </Box>
         <Box mb={2}>
           <Card sx={{
             backgroundColor: 'gray',
             // borderRadius: '40px 0 0 40px',
             borderBottomRightRadius: '40px',
             borderTopLeftRadius: '40px',
             paddingBottom: '30px',
             boxShadow: 'none'
           }}>
             <Grid item xs={12}>
               <Box display="flex" justifyContent="flex-start">
                 <Card sx={{
                   height: '150px',
                   width: '100%',
                   borderBottomRightRadius: '40px',
                   borderTopLeftRadius: '40px', 
                   boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                   background: cards[2].bgImage,
                   backgroundSize: 'cover',
                   color: 'white',
                   display: 'flex',
                   flexDirection: 'column',
                   cursor: 'pointer',
                   position: 'relative',
                   '&:hover': {
                     transform: 'scale(1.02)',
                     transition: 'transform 0.3s ease'
                   }
                 }}>
                   {/* Image section - takes up most of the card */}
                   <Box sx={{
                     height: '70%',
                     background: cards[2].bgImage,
                     backgroundSize: 'cover',
                     backgroundPosition: 'center'
                   }} />

                   {/* Bottom section with title and arrow */}
                   <CardContent sx={{
                     display: 'flex',
                     justifyContent: 'space-between',
                     alignItems: 'center',
                     width: '100%',
                     height: '30%',
                     padding: '8px 16px',
                     boxSizing: 'border-box'
                   }}>
                     <Box sx={{ display: 'flex', alignItems: 'center' }}>
                       <Typography variant="body1"  fontWeight='bold' component="div" ml={1}>
                         Steel Fabrications 
                       </Typography>
                     </Box>
                     <IconButton sx={{ color: 'white' }}>
                       <ArrowIcon />
                     </IconButton>
                   </CardContent>
                 </Card>
               </Box>
             </Grid>
           </Card>
         </Box>
         <Box mb={2}>
           <Card sx={{
             backgroundColor: 'gray',
             // borderRadius: '40px 0 0 40px',
             borderBottomRightRadius: '40px',
             borderTopLeftRadius: '40px',
             paddingBottom: '30px',
             boxShadow: 'none'
           }}>
             <Grid item xs={12}>
               <Box display="flex" justifyContent="flex-start">
                 <Card sx={{
                   height: '150px',
                   width: '100%',
                   borderBottomRightRadius: '40px',
                   borderTopLeftRadius: '40px', 
                   boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                   background: cards[2].bgImage,
                   backgroundSize: 'cover',
                   color: 'white',
                   display: 'flex',
                   flexDirection: 'column',
                   cursor: 'pointer',
                   position: 'relative',
                   '&:hover': {
                     transform: 'scale(1.02)',
                     transition: 'transform 0.3s ease'
                   }
                 }}>
                   {/* Image section - takes up most of the card */}
                   <Box sx={{
                     height: '70%',
                     background: cards[2].bgImage,
                     backgroundSize: 'cover',
                     backgroundPosition: 'center'
                   }} />

                   {/* Bottom section with title and arrow */}
                   <CardContent sx={{
                     display: 'flex',
                     justifyContent: 'space-between',
                     alignItems: 'center',
                     width: '100%',
                     height: '30%',
                     padding: '8px 16px',
                     boxSizing: 'border-box'
                   }}>
                     <Box sx={{ display: 'flex', alignItems: 'center' }}>
                       <Typography variant="body1"  fontWeight='bold' component="div" ml={1}>
                         Home Clean
                       </Typography>
                     </Box>
                     <IconButton sx={{ color: 'white' }}>
                       <ArrowIcon />
                     </IconButton>
                   </CardContent>
                 </Card>
               </Box>
             </Grid>
           </Card>
         </Box>

         <Box mb={2}>
           <Card sx={{
             backgroundColor: 'gray',
             // borderRadius: '40px 0 0 40px',
             borderBottomRightRadius: '40px',
             borderTopLeftRadius: '40px',
             paddingBottom: '30px',
             boxShadow: 'none'
           }}>
             <Grid item xs={12}>
               <Box display="flex" justifyContent="flex-start">
                 <Card sx={{
                   height: '150px',
                   width: '100%',
                   borderBottomRightRadius: '40px',
                   borderTopLeftRadius: '40px', 
                   boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                   background: cards[2].bgImage,
                   backgroundSize: 'cover',
                   color: 'white',
                   display: 'flex',
                   flexDirection: 'column',
                   cursor: 'pointer',
                   position: 'relative',
                   '&:hover': {
                     transform: 'scale(1.02)',
                     transition: 'transform 0.3s ease'
                   }
                 }}>
                   {/* Image section - takes up most of the card */}
                   <Box sx={{
                     height: '70%',
                     background: cards[2].bgImage,
                     backgroundSize: 'cover',
                     backgroundPosition: 'center'
                   }} />

                   {/* Bottom section with title and arrow */}
                   <CardContent sx={{
                     display: 'flex',
                     justifyContent: 'space-between',
                     alignItems: 'center',
                     width: '100%',
                     height: '30%',
                     padding: '8px 16px',
                     boxSizing: 'border-box'
                   }}>
                     <Box sx={{ display: 'flex', alignItems: 'center' }}>
                       <Typography variant="body1"  fontWeight='bold' component="div" ml={1}>
Toilet & Kitchen Cleaning                       </Typography>
                     </Box>
                     <IconButton sx={{ color: 'white' }}>
                       <ArrowIcon />
                     </IconButton>
                   </CardContent>
                 </Card>
               </Box>
             </Grid>
           </Card>
         </Box>
         <Box mb={2}>
           <Card sx={{
             backgroundColor: 'gray',
             // borderRadius: '40px 0 0 40px',
             borderBottomRightRadius: '40px',
             borderTopLeftRadius: '40px',
             paddingBottom: '30px',
             boxShadow: 'none'
           }}>
             <Grid item xs={12}>
               <Box display="flex" justifyContent="flex-start">
                 <Card sx={{
                   height: '150px',
                   width: '100%',
                   borderBottomRightRadius: '40px',
                   borderTopLeftRadius: '40px', 
                   boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                   background: cards[2].bgImage,
                   backgroundSize: 'cover',
                   color: 'white',
                   display: 'flex',
                   flexDirection: 'column',
                   cursor: 'pointer',
                   position: 'relative',
                   '&:hover': {
                     transform: 'scale(1.02)',
                     transition: 'transform 0.3s ease'
                   }
                 }}>
                   {/* Image section - takes up most of the card */}
                   <Box sx={{
                     height: '70%',
                     background: cards[2].bgImage,
                     backgroundSize: 'cover',
                     backgroundPosition: 'center'
                   }} />

                   {/* Bottom section with title and arrow */}
                   <CardContent sx={{
                     display: 'flex',
                     justifyContent: 'space-between',
                     alignItems: 'center',
                     width: '100%',
                     height: '30%',
                     padding: '8px 16px',
                     boxSizing: 'border-box'
                   }}>
                     <Box sx={{ display: 'flex', alignItems: 'center' }}>
                       <Typography variant="body1"  fontWeight='bold' component="div" ml={1}>
                         Sofa & Curtain Installatio & Cleaning
                       </Typography>
                     </Box>
                     <IconButton sx={{ color: 'white' }}>
                       <ArrowIcon />
                     </IconButton>
                   </CardContent>
                 </Card>
               </Box>
             </Grid>
           </Card>
         </Box>
         <Box mb={2}>
           <Card sx={{
             backgroundColor: 'gray',
             // borderRadius: '40px 0 0 40px',
             borderBottomRightRadius: '40px',
             borderTopLeftRadius: '40px',
             paddingBottom: '30px',
             boxShadow: 'none'
           }}>
             <Grid item xs={12}>
               <Box display="flex" justifyContent="flex-start">
                 <Card sx={{
                   height: '150px',
                   width: '100%',
                   borderBottomRightRadius: '40px',
                   borderTopLeftRadius: '40px', 
                   boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                   background: cards[2].bgImage,
                   backgroundSize: 'cover',
                   color: 'white',
                   display: 'flex',
                   flexDirection: 'column',
                   cursor: 'pointer',
                   position: 'relative',
                   '&:hover': {
                     transform: 'scale(1.02)',
                     transition: 'transform 0.3s ease'
                   }
                 }}>
                   {/* Image section - takes up most of the card */}
                   <Box sx={{
                     height: '70%',
                     background: cards[2].bgImage,
                     backgroundSize: 'cover',
                     backgroundPosition: 'center'
                   }} />

                   {/* Bottom section with title and arrow */}
                   <CardContent sx={{
                     display: 'flex',
                     justifyContent: 'space-between',
                     alignItems: 'center',
                     width: '100%',
                     height: '30%',
                     padding: '8px 16px',
                     boxSizing: 'border-box'
                   }}>
                     <Box sx={{ display: 'flex', alignItems: 'center' }}>
                       <Typography variant="body1"  fontWeight='bold' component="div" ml={1}>
                         Homemaid
                       </Typography>
                     </Box>
                     <IconButton sx={{ color: 'white' }}>
                       <ArrowIcon />
                     </IconButton>
                   </CardContent>
                 </Card>
               </Box>
             </Grid>
           </Card>
         </Box>
         <Box mb={2}>
           <Card sx={{
             backgroundColor: 'gray',
             // borderRadius: '40px 0 0 40px',
             borderBottomRightRadius: '40px',
             borderTopLeftRadius: '40px',
             paddingBottom: '30px',
             boxShadow: 'none'
           }}>
             <Grid item xs={12}>
               <Box display="flex" justifyContent="flex-start">
                 <Card sx={{
                   height: '150px',
                   width: '100%',
                   borderBottomRightRadius: '40px',
                   borderTopLeftRadius: '40px', 
                   boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                   background: cards[2].bgImage,
                   backgroundSize: 'cover',
                   color: 'white',
                   display: 'flex',
                   flexDirection: 'column',
                   cursor: 'pointer',
                   position: 'relative',
                   '&:hover': {
                     transform: 'scale(1.02)',
                     transition: 'transform 0.3s ease'
                   }
                 }}>
                   {/* Image section - takes up most of the card */}
                   <Box sx={{
                     height: '70%',
                     background: cards[2].bgImage,
                     backgroundSize: 'cover',
                     backgroundPosition: 'center'
                   }} />

                   {/* Bottom section with title and arrow */}
                   <CardContent sx={{
                     display: 'flex',
                     justifyContent: 'space-between',
                     alignItems: 'center',
                     width: '100%',
                     height: '30%',
                     padding: '8px 16px',
                     boxSizing: 'border-box'
                   }}>
                     <Box sx={{ display: 'flex', alignItems: 'center' }}>
                       <Typography variant="body1"  fontWeight='bold' component="div" ml={1}>
                         Gardener
                       </Typography>
                     </Box>
                     <IconButton sx={{ color: 'white' }}>
                       <ArrowIcon />
                     </IconButton>
                   </CardContent>
                 </Card>
               </Box>
             </Grid>
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
