
import { Link } from 'react-router-dom';

import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Box,
  Typography,
  Grid,
  
  Avatar,
  Card,
  CardContent,

} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { FaRegHeart, FaRegBell } from 'react-icons/fa';
import { RiMessengerLine } from 'react-icons/ri';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import image from "./../Images/construction.jpg";
import image1 from "./../Images/interior.avif";
import image2 from "./../Images/renovation.png";
import image3 from "./../Images/Painting.png";
import image4 from "./../Images/Electrical.jpg";
import image5 from "./../Images/tilegranites.jpg";
import image6 from "./../Images/Plumber.png";
import image7 from "./../Images/carpenter.jpg";
import image8 from "./../Images/Acrepair.jpg";
import image9 from "./../Images/gardener.jpg";
import image10 from "./../Images/Aluminium.jpg";
import image11 from "./../Images/upvc.jpg";
import image12 from "./../Images/gaspipe.jpg";
import image13 from "./../Images/steel.jpg";
import image14 from "./../Images/homeclean.jpg";
import image15 from "./../Images/toiletkitchen.jpg";
import image16 from "./../Images/sofacurtain.jpg";
import image17 from "./../Images/home.jpg";
import imagebuy from "./../Images/buy.jpg";
import imagerent from "./../Images/rent.jpg";
import imagelease from "./../Images/lease.jpg";
import imagepg from "./../Images/logo.jpg";
import logo from "./../Images/logo.jpg";
import { useNavigate } from 'react-router-dom';


import {

  Home as BuyIcon,
  House as RentIcon,
  Business as LeaseIcon,
  ArrowForward as ArrowIcon,


} from '@mui/icons-material';

import FormsBottomNavbar from './../maniteja/FormsBottomNavbar';

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
  color: ' #9e9e9e',
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




const cards = [
  {
    title: "Buy",
    icon: <BuyIcon fontSize="large" />,
    bgImage: imagebuy,
    path: "/buy-propertymap"
  },
  {
    title: "Rent",
    icon: <RentIcon fontSize="large" />,
    bgImage: imagerent,
    path: "/rent-propertymap"
  },
  {
    title: "Lease",
    icon: <LeaseIcon fontSize="large" />,
    bgImage: imagelease,
    path: "/lease_map"
  },
  {
    title: "Sell/Post",
    // icon: <PGIcon fontSize="large" />,
    bgImage: imagepg,
    path: "/pg-propertymap"
  }
];



function App() {

  const navigate = useNavigate();
  
  

  

  return (
    
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', bgcolor: '#f8f9fa' }}>

      <Box
  sx={{
    position: 'sticky',
    top: 0,
    zIndex: 1200,
    bgcolor: 'black',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    borderRadius: '10px',
    
    
  }}
>
  <Box
    display="flex"
    alignItems="center"
    justifyContent="space-between"
    px={1}
    py={0.5} // Smaller vertical padding
    sx={{ borderBottom: '1px solid rgba(0,0,0,0.08)', height: '44px' }} // Fixed reduced height
  >
    {/* LANDNEST Text */}
   <Typography
  variant="subtitle1"
  sx={{
    color: 'white',
    fontWeight: 'bold',
    fontFamily: "'Cinzel', serif", // stylish serif font
    letterSpacing: 1,
    ml: 1,
  }}
>
  LANDNEST
</Typography>



    {/* Logo Image */}
    <Box
  sx={{
    width: 60,
    height: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ml: 1.5,
    border: '2px solid rgba(228, 222, 185, 0.93)', // goldish border
    borderRadius: '6px', // optional rounded corners
    padding: '2px', // some inner spacing so image doesn't touch the border
  }}
>
  <img
    src={logo}
    alt="Landnest Logo"
    style={{
      maxWidth: '100%',
      maxHeight: '100%',
      objectFit: 'contain',
    }}
  />
</Box>

  </Box>
</Box>

      <Box sx={{ display: 'flex', flex: 1, overflow: 'hidden',marginBottom:"70px" }}>
        <Box
         sx={{
          width: { xs: '14%', sm: '64px' },
          height: '80vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          overflow: 'hidden',
          borderTopLeftRadius: '20px',
          borderBottomRightRadius: '20px',
          marginTop: '4px',
          marginLeft: '5px',
          boxShadow: `
            0 10px 30px -5px rgba(0,0,0,0.3),
            inset 0 -3px 10px rgba(255,255,255,0.05)
          `,
          background: 'linear-gradient(145deg, #1e1e1e, #2a2a2a)',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          '&:hover': {
            transform: { sm: 'translateY(-4px)' },
            boxShadow: '0 15px 35px -5px rgba(0,0,0,0.4)',
          },
          position: 'relative'
        }}
        >
          {/* Premium Profile Section */}
          <Box
  sx={{
    width: '100%',
    background: 'linear-gradient(145deg, rgb(18, 17, 17), rgb(18, 17, 17))',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: { xs: '70px', sm: '70px' }, // slightly increased for text space
    borderTopLeftRadius: '40px',
    boxShadow: `
      inset 0 2px 4px rgba(255,255,255,0.05),
      0 2px 5px rgba(0,0,0,0.2)
    `,
    overflow: 'hidden',
  }}
>
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '4px',
    }}
  >
    <Avatar
    onClick={() => navigate('/work-detail')}
      alt="User"
      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80"
      sx={{
        marginTop: '7px',
        width: { xs: 30, sm: 34 },
        height: { xs: 30, sm: 34 },
        border: '3px solid rgba(216,204,186,0.7)',
        boxShadow: `
          0 3px 10px rgba(0,0,0,0.3),
          inset 0 0 10px rgba(216,204,186,0.2)
        `,
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        '&:hover': {
          transform: { sm: 'scale(1.15) rotate(5deg)' },
          boxShadow: '0 5px 15px rgba(0,0,0,0.4)',
        },
      }}
    />
    <Typography
      variant="caption"
      sx={{
        color: 'rgba(216,204,186,0.9)',
        fontSize: '0.7rem',
        fontWeight: 500,
      }}
    >
      Profile
    </Typography>
  </Box>
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
              pt: 2,
              pb: 2,
              borderTopLeftRadius: '18px',
              borderBottomRightRadius: '18px',
              boxShadow: `
        inset 0 0 15px rgba(0,0,0,0.1),
        0 5px 10px rgba(0,0,0,0.1)
      `
            }}
          >
            {/* "New" Tag */}
            <Box
              sx={{
                // background: 'rgba(255,255,255,0.4)',
                borderRadius: '16px',
                px: 1,
                py: 0.5,
                // backdropFilter: 'blur(4px)',
                // boxShadow: '0 2px 5px rgba(0,0,0,0.08)',
                transform: 'scale(0.95)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1)',
                  // background: 'rgba(255,255,255,0.5)'
                }
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: '0.7rem', sm: '0.8rem' },
                  color: '#5a4d3a',
                  fontWeight: 800,
                  fontFamily: 'Inter, Roboto, Helvetica, sans-serif',
                  letterSpacing: '1.2px',
                  textTransform: 'uppercase',
                  textShadow: '0 1px 2px rgba(255,255,255,0.5)'
                }}
              >
                New
              </Typography>
            </Box>

            {/* Vertical "Building for Sale" */}
            <Box
              sx={{
                // background: 'rgba(255,255,255,0.3)',
                borderRadius: '8px',
                px: 0.5,
                py: 1.5,
                // borderLeft: '3px solid rgba(90,77,58,0.3)',
                // borderRight: '3px solid rgba(90,77,58,0.3)',
                // backdropFilter: 'blur(3px)',
                // boxShadow: '0 3px 8px rgba(0,0,0,0.1)'
              }}
            >
              <Typography
                sx={{
                  writingMode: 'vertical-rl',
                  transform: 'rotate(180deg)',
                  fontSize: { xs: '0.75rem', sm: '0.85rem' },
                  color: '#3a3225',
                  fontWeight: 800,
                  letterSpacing: '1.5px',
                  textShadow: '0 1px 3px rgba(255,255,255,0.5)',
                  py: 0.5
                }}
              >
                Building For Sale
              </Typography>
            </Box>

            {/* "Quick Deals" Tag */}
            <Box
              sx={{
                // background: 'rgba(255,255,255,0.4)',
                borderRadius: '16px',
                px: 1,
                py: 0.5,
                // backdropFilter: 'blur(4px)',
                // boxShadow: '0 2px 5px rgba(0,0,0,0.08)',
                transform: 'scale(0.95)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1)',
                  // background: 'rgba(255,255,255,0.5)'
                }
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: '0.7rem', sm: '0.8rem' },
                  color: '#5a4d3a',
                  fontWeight: 700,
                  letterSpacing: '1.2px',
                  textTransform: 'uppercase',
                  textShadow: '0 1px 2px rgba(255,255,255,0.5)'
                }}
              >
                Quick Deals
              </Typography>
            </Box>
          </Box>

          {/* Elegant Bottom Section */}
          <Box
            sx={{
              background: `
        linear-gradient(145deg,rgb(22, 22, 22),rgb(15, 15, 15)),
        url('https://www.transparenttextures.com/patterns/dark-matter.png')
      `,
              width: '100%',
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              py: 2,
              borderBottomRightRadius: '40px',
              gap: '40px',
              boxShadow: `
        inset 0 0 15px rgba(0,0,0,0.2),
        0 5px 10px rgba(0,0,0,0.15)
      `
            }}
          >
            {/* Vertical "Hot Properties" */}
            {/* <Box
              sx={{
                // background: 'rgba(0,0,0,0.25)',
                borderRadius: '8px',
                px: 0.5,
                py: 1.5,
                // borderLeft: '3px solid rgba(255,255,255,0.1)',
                // borderRight: '3px solid rgba(255,255,255,0.1)',
                // backdropFilter: 'blur(4px)',
                // boxShadow: '0 3px 10px rgba(0,0,0,0.2)'
              }}
            >
              <Typography
                sx={{
                  writingMode: 'vertical-rl',
                  transform: 'rotate(180deg)',
                  fontSize: { xs: '0.75rem', sm: '0.85rem' },
                  color: '#ffffff',
                  fontWeight: 800,
                  letterSpacing: '1.5px',
                  textShadow: '0 1px 5px rgba(0,0,0,0.7)',
                  py: 0.5
                }}
              >
                Hot Properties
              </Typography>
            </Box> */}
            <Link to="/hot-property-map" style={{ textDecoration: 'none' }}>
      <Box
        sx={{
          borderRadius: '8px',
          px: 0.5,
          py: 1.5,
          cursor: 'pointer',
          '&:hover': {
            background: 'rgba(0,0,0,0.1)',
          },
          transition: 'background 0.2s ease',
        }}
      >
        <Typography
          sx={{
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
            fontSize: { xs: '0.75rem', sm: '0.85rem' },
            color: '#ffffff',
            fontWeight: 800,
            letterSpacing: '1.5px',
            textShadow: '0 1px 5px rgba(0,0,0,0.7)',
            py: 0.5
          }}
        >
          Hot Properties
        </Typography>
      </Box>
    </Link>

            {/* "Best Deals" Tag */}
            <Box
              sx={{
                // background: 'rgba(255,255,255,0.15)',
                borderRadius: '16px',
                px: 1,
                py: 0.5,
                // backdropFilter: 'blur(4px)',
                // boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                transform: 'scale(0.95)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1)',
                  // background: 'rgba(255,255,255,0.25)',
                  // boxShadow: '0 3px 12px rgba(0,0,0,0.3)'
                }
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: '0.7rem', sm: '0.8rem' },
                  color: 'white',
                  fontWeight: 700,
                  letterSpacing: '1.2px',
                  textTransform: 'uppercase',
                  textShadow: '0 1px 3px rgba(0,0,0,0.5)'
                }}
              >
                Best Deals
              </Typography>
            </Box>
          </Box>
        </Box>


        


        <Box flex={1} p={1} sx={{ overflow: 'auto' }}>
       
        

       
        <AppBar
  position="fixed"
  sx={{
    // bgcolor: 'rgba(246, 237, 182, 0.15)',
    bgcolor: "rgba(232, 217, 183, 0.95)",
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    boxShadow: '0 6px 14px rgba(0,0,0,0.25)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '10px',
    height: '48px',
    width: '83%',
    ml: '7.3%',
    mr: '3px',
    mt: '54px',
    zIndex: 1201,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}
>
  <Toolbar sx={{ minHeight: '48px !important', px: 0.75, width: '95%' }}>
    <Search
      sx={{
        flex: 0.99,
        mx: 0.5,
        px: 0.75,
        border: '1px solid black',
        borderRadius: '18px',
      }}
    >
      <SearchIconWrapper>
        <SearchIcon sx={{ fontSize: '1.05rem', color: '#333' }} />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        sx={{ fontSize: '0.8rem', color: '#000', px: 0.75 }}
      />
    </Search>

    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <IconButton
        size="medium"
        sx={{
          p: 0.6,
          bgcolor: 'rgba(255,255,255,0.4)',
          borderRadius: '50%',
          boxShadow: '0 3px 6px rgba(0,0,0,0.25)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-1.5px)',
            boxShadow: '0 6px 10px rgba(0,0,0,0.35)',
            bgcolor: 'rgba(255,255,255,0.6)',
          },
        }}
      >
        <FavoriteBorderIcon sx={{ fontSize: '1.15rem', color: '#d32f2f' }} />
      </IconButton>

      <IconButton
        size="medium"
        sx={{
          p: 0.6,
          bgcolor: 'rgba(255,255,255,0.4)',
          borderRadius: '50%',
          boxShadow: '0 3px 6px rgba(0,0,0,0.25)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-1.5px)',
            boxShadow: '0 6px 10px rgba(0,0,0,0.35)',
            bgcolor: 'rgba(255,255,255,0.6)',
          },
        }}
      >
        <FaRegBell style={{ fontSize: '1.15rem', color: '#1976d2' }} />
      </IconButton>

      <IconButton
        size="medium"
        sx={{
          p: 0.6,
          bgcolor: 'rgba(255,255,255,0.4)',
          borderRadius: '50%',
          boxShadow: '0 3px 6px rgba(0,0,0,0.25)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-1.5px)',
            boxShadow: '0 6px 10px rgba(0,0,0,0.35)',
            bgcolor: 'rgba(255,255,255,0.6)',
          },
        }}
      >
        <RiMessengerLine style={{ fontSize: '1.15rem', color: '#673ab7' }} />
      </IconButton>
    </Box>
  </Toolbar>
</AppBar>



          {/* <AppBar
              position="fixed"
              sx={{
                bgcolor: "rgba(232, 217, 183, 0.95)",
                boxShadow: "none",
                border: "1px solid black",
                height: "50px",
                borderRadius:'10px',
                width: "82%",
                ml: "65",
                zIndex: 1201,
              }}
            >
              <Toolbar sx={{ minHeight: "50px !important", px: 1 }}>
                <Search
                  sx={{
                    flex: 1,
                    mx: 1,
                    border: "1px solid black",
                    borderRadius: "25px",
                    display: "flex",
                    alignItems: "center",
                    px: 1,
                  }}
                >
                  <SearchIconWrapper>
                    <SearchIcon sx={{ fontSize: "1rem", color: "black" }} />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    sx={{ color: "black" }}
                  />
                </Search>

                {[
                  <FavoriteBorderIcon />,
                  <FaRegBell />,
                  <AiOutlineMessage onClick={() => navigate('/inboxlist')} />,
                ].map((Icon, index) => (
                  <IconButton
                    key={index}
                    size="small"
                    sx={{
                      border: "1px solid black",
                      borderRadius: "8px",
                      p: "4px",
                      mx: 0.5,
                      backgroundColor: "transparent",
                    }}
                  >
                    {React.cloneElement(Icon, {
                      sx: { fontSize: "1rem", color: "black" },
                    })}
                  </IconButton>
                ))}
              </Toolbar>
      </AppBar> */}
          


          {/* Add spacing to avoid content going under the AppBar */}
          <Box sx={{ mt: '50px' }}>
          <Box
  mb={2}
  backgroundColor="#e7dbc9"
  borderRadius="10px"
  sx={{
    display: { xs: 'block', sm: 'none' },
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19)'
  }}
>
  <Typography variant="h6" fontWeight="bold" align="center" mb={1}>
  Looking For Properties
</Typography>

<Card
  sx={{
    backgroundColor: '#e7dbc9',
    borderRadius: '10px',
    padding: '5px',
    boxShadow: 'none'
  }}
>
  <Grid container spacing={2}>
  {/* First Row: 2 Cards */}
  {cards.slice(0, 2).map((card, index) => (
    <Grid item xs={6} key={index} display="flex" justifyContent="center">
      <Card
        onClick={() => card.path && navigate(card.path)}
        sx={{
          backgroundColor: '#d8ccba',
          borderTopLeftRadius: '24px',
          borderBottomRightRadius: '24px',
          overflow: 'hidden',
          height: 130,
          width: 161, // default
  '@media (max-width:360px)': {
    width: 130
  },
  '@media (min-width:361px) and (max-width:420px)': {
    width: 143
  },

  '@media (width:430px)': {
    width: 160
  },
  '@media (min-width:490px)': {
    width: 180
  },
  '@media (min-width:469px)': {
    width: 178
  },
  '@media (min-width:490px)': {
    width: 180
  },
  '@media (min-width:485px)': {
    width: 185
  },
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.7)', // Darker shadow for the image
          cursor: 'pointer',
          transform: 'perspective(1000px)',
          transition: 'transform 0.4s ease, box-shadow 0.4s ease',
          '&:hover': {
            transform: 'perspective(1000px) scale(1.03) rotateX(2deg)',
            boxShadow: '0 16px 32px rgba(0, 0, 0, 0.45), 0 12px 12px rgba(0, 0, 0, 0.30)',
          }
        }}
      >
        <Box
          sx={{
            height: '65%',
            backgroundImage: `url(${card.bgImage})`,
            backgroundSize: 'cover',
            border:'1px solid black',
            backgroundPosition: 'center',
            borderBottomRightRadius: '24px',
            position: 'relative',
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.35)',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '8px',
              borderBottomRightRadius: '24px',
              zIndex: 2,
            },
          }}
        />
        <CardContent
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '35%',
            px: 1.5,
            py: 0.5,
            backgroundColor: '#d8ccba',
          }}
        >
          <Typography
            variant="body2"
            fontWeight="600"
            color="#333"
            sx={{
              fontSize: '0.88rem',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {card.title}
          </Typography>
          <IconButton sx={{ color: '#333', p: 0.5 }}>
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </CardContent>
      </Card>
    </Grid>
  ))}

  {/* Second Row: Centered Third Card */}
  {/* Second Row: 2 Cards */}
{cards.slice(2, 4).map((card, index) => (
  <Grid item xs={6} key={index} display="flex" justifyContent="center">
    <Card
      onClick={() => card.path && navigate(card.path)}
      sx={{
        backgroundColor: '#d8ccba',
        borderTopLeftRadius: '24px',
        borderBottomRightRadius: '24px',
        overflow: 'hidden',
        height: 130,
        width: 161, // default
  '@media (max-width:360px)': {
    width: 130
  },
  '@media (width:375px)': {
    width: 120
  },
  '@media (min-width:361px) and (max-width:374px), (min-width:376px) and (max-width:429px)': {
    width: 143
  },
  '@media (width:430px)': {
    width: 160
  },
  '@media (min-width:490px)': {
    width: 180
  },
   '@media (min-width:469px)': {
    width: 178
  },
  '@media (min-width:490px)': {
    width: 180
  },
   '@media (min-width:485px)': {
    width: 185
  },
        marginBottom: 1,
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.7)',
        cursor: 'pointer',
        transform: 'perspective(1000px)',
        transition: 'transform 0.4s ease, box-shadow 0.4s ease',
        '&:hover': {
          transform: 'perspective(1000px) scale(1.03) rotateX(2deg)',
          boxShadow: '0 16px 32px rgba(0, 0, 0, 0.45), 0 12px 12px rgba(0, 0, 0, 0.30)',
        }
      }}
    >
      <Box
        sx={{
          height: '65%',
          backgroundImage: `url(${card.bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderBottomRightRadius: '24px',
          border:'1px solid black',
          position: 'relative',
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.35)',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '8px',
            borderBottomRightRadius: '24px',
            zIndex: 2,
          },
        }}
      />
      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          
          height: '35%',
          px: 1.5,
          py: 0.5,
          backgroundColor: '#d8ccba',
        }}
      >
        <Typography
          variant="body2"
          fontWeight="600"
          color="#333"
          sx={{
            fontSize: '0.88rem',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {card.title}
        </Typography>
        <IconButton sx={{ color: '#333', p: 0.5 }}>
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </CardContent>
    </Card>
  </Grid>
))}

</Grid>

</Card>



          </Box>

          </Box>




          {/* //Contruction cards */}
                      <Box mb={2}>
              <Typography variant="h6" fontWeight="bold" align="center" mb={1}>
                Constructions
              </Typography>
              <Card
                onClick={() => navigate('/constructions')}
                sx={{
                  backgroundColor: '#d8ccba',
                  borderTopLeftRadius: '24px',
                  borderBottomRightRadius: '24px',
                  overflow: 'hidden',
                  width: '100%',
                  height: 220,
                  boxShadow: '0 13px 30px rgba(0, 0, 0, 0.4), 0 6px 10px rgba(0, 0, 0, 0.35)', // Darker shadow
                  cursor: 'pointer',
                  transform: 'perspective(1000px)',
                  transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                  '&:hover': {
                    transform: 'perspective(1000px) scale(1.03) rotateX(2deg)',
                    boxShadow: '0 28px 40px rgba(0, 0, 0, 0.5), 0 10px 20px rgba(0, 0, 0, 0.4)', // Darker shadow on hover
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
                    borderBottomRightRadius: '24px',
                    position: 'relative',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.7)', // Darker shadow for the image
                    border: '1px solid black',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: '8px',
                      borderBottomRightRadius: '24px',
                      zIndex: 2,
                    },
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
                  <Typography variant="body1" fontWeight="600" color="#333" noWrap sx={{ flex: 1, pr: 1 }}>
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
                onClick={() => navigate('/interiors')}
                sx={{
                  backgroundColor: '#d8ccba',
                  borderTopLeftRadius: '24px',
                  borderBottomRightRadius: '24px',
                  overflow: 'hidden',
                  width: '100%',
                  height: 220,
                  boxShadow: '0 13px 30px rgba(0, 0, 0, 0.4), 0 6px 10px rgba(0, 0, 0, 0.35)', // Darker shadow
                  cursor: 'pointer',
                  transform: 'perspective(1000px)',
                  transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                  '&:hover': {
                    transform: 'perspective(1000px) scale(1.03) rotateX(2deg)',
                    boxShadow: '0 28px 40px rgba(0, 0, 0, 0.5), 0 10px 20px rgba(0, 0, 0, 0.4)', // Darker shadow on hover
                  },
                }}
              >
                {/* Top Image Section */}
                <Box
                  sx={{
                    height: '70%',
                    backgroundImage: `url(${image1})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderBottomRightRadius: '24px',
                    position: 'relative',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.7)', // Darker shadow for the image
                    border: '1px solid black',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: '8px',
                      borderBottomRightRadius: '24px',
                      zIndex: 2,
                    },
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
                onClick={() => navigate('/renovations')}
                sx={{
                  backgroundColor: '#d8ccba',
                  borderTopLeftRadius: '24px',
                  borderBottomRightRadius: '24px',
                  overflow: 'hidden',
                  width: '100%',
                  height: 220,
                  boxShadow: '0 13px 30px rgba(0, 0, 0, 0.4), 0 6px 10px rgba(0, 0, 0, 0.35)', // Darker shadow
                  cursor: 'pointer',
                  transform: 'perspective(1000px)',
                  transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                  '&:hover': {
                    transform: 'perspective(1000px) scale(1.03) rotateX(2deg)',
                    boxShadow: '0 28px 40px rgba(0, 0, 0, 0.5), 0 10px 20px rgba(0, 0, 0, 0.4)', // Darker shadow on hover
                  },
                }}
              >
                {/* Top Image Section */}
                <Box
                  sx={{
                    height: '70%',
                    backgroundImage: `url(${image2})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderBottomRightRadius: '24px',
                    position: 'relative',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.7)', // Darker shadow for the image
                    border: '1px solid black',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: '8px',
                      borderBottomRightRadius: '24px',
                      zIndex: 2,
                    },
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
                    Renovations
                  </Typography>
                  <IconButton sx={{ color: '#333' }}>
                    <ArrowForwardIosIcon fontSize="small" />
                  </IconButton>
                </CardContent>
              </Card>
            </Box>


             {/* Home services */}
             <Box mb={2}>
      <Typography variant="h6" fontWeight="bold" align="center" mb={1}>
        Home Services
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 2,
        }}
      >
        {/* First Card */}
        <Card
  onClick={() => navigate('/home-service-type', { state: { category: "Painting" } })}
  sx={{
    backgroundColor: '#d8ccba',
    borderTopLeftRadius: '24px',
    borderBottomRightRadius: '24px',
    overflow: 'hidden',
    height: 150,
    // boxShadow: '0 8px 30px rgba(0, 0, 0, 0.35), 0 6px 6px rgba(0, 0, 0, 0.28)',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.7)', // Darker shadow for the image
    cursor: 'pointer',
    transform: 'perspective(1000px)',
    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
    '&:hover': {
      transform: 'perspective(1000px) scale(1.03) rotateX(2deg)',
      boxShadow: '0 16px 32px rgba(0, 0, 0, 0.45), 0 12px 12px rgba(0, 0, 0, 0.30)',
    },
  }}
>
  <Box
    sx={{
      height: '65%',
      border: '1px solid black',
      backgroundImage: `url(${image3})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderBottomRightRadius: '24px',
      position: 'relative',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.35)',
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '8px',
        borderBottomRightRadius: '24px',
        zIndex: 2,
      },
    }}
  />
  <CardContent
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '35%',
      px: 1.5,
      py: 0.5,
      backgroundColor: '#d8ccba',
    }}
  >
    <Typography
      variant="body2"
      fontWeight="600"
      color="#333"
      sx={{
        fontSize: '0.88rem',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}
    >
      Paintings
    </Typography>
    <IconButton sx={{ color: '#333', p: 0.5 }}>
      <ArrowForwardIosIcon fontSize="small" />
    </IconButton>
  </CardContent>
</Card>




        {/* Second Card */}
        <Card
  onClick={() => navigate('/home-service-type', { state: { category: "Electrical" } })}
  sx={{
    backgroundColor: '#d8ccba',
    borderTopLeftRadius: '24px',
    borderBottomRightRadius: '24px',
    overflow: 'hidden',
    height: 150,
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.7)', // Darker shadow for the image
    cursor: 'pointer',
    transform: 'perspective(1000px)',
    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
    '&:hover': {
      transform: 'perspective(1000px) scale(1.03) rotateX(2deg)',
      boxShadow: '0 12px 24px rgba(0, 0, 0, 0.35), 0 10px 10px rgba(0, 0, 0, 0.25)',
    },
  }}
>
  <Box
    sx={{
      height: '65%',
      border: '1px solid black',
      backgroundImage: `url(${image4})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderBottomRightRadius: '24px',
      position: 'relative',
      boxShadow: '0 8px 12px rgba(0, 0, 0, 0.3)',
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '8px',
        borderBottomRightRadius: '24px',
        zIndex: 2,
      },
    }}
  />
  <CardContent
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '35%',
      px: 1.5,
      py: 0.5,
      backgroundColor: '#d8ccba',
    }}
  >
    <Typography
      variant="body2"
      fontWeight="600"
      color="#333"
      sx={{
        fontSize: '0.88rem',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}
    >
      Electrical
    </Typography>
    <IconButton sx={{ color: '#333', p: 0.5 }}>
      <ArrowForwardIosIcon fontSize="small" />
    </IconButton>
  </CardContent>
</Card>



        {/* Third Card */}
        <Card
  onClick={() => navigate('/home-service-type', { state: { category: "Plumbing" } })}
  sx={{
    backgroundColor: '#d8ccba',
    borderTopLeftRadius: '24px',
    borderBottomRightRadius: '24px',
    overflow: 'hidden',
    height: 150,
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.7)', // Darker shadow for the image
    cursor: 'pointer',
    transform: 'perspective(1000px)',
    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
    '&:hover': {
      transform: 'perspective(1000px) scale(1.03) rotateX(2deg)',
      boxShadow: '0 12px 24px rgba(0, 0, 0, 0.35), 0 10px 10px rgba(0, 0, 0, 0.25)',
    },
  }}
>
  <Box
    sx={{
      height: '65%',
      border: '1px solid black',
      backgroundImage: `url(${image6})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderBottomRightRadius: '24px',
      position: 'relative',
      boxShadow: '0 8px 12px rgba(0, 0, 0, 0.3)',
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '8px',
        borderBottomRightRadius: '24px',
        zIndex: 2,
      },
    }}
  />
  <CardContent
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '35%',
      px: 1.5,
      py: 0.5,
      backgroundColor: '#d8ccba',
    }}
  >
    <Typography
      variant="body2"
      fontWeight="600"
      color="#333"
      sx={{
        fontSize: '0.88rem',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}
    >
      Plumbing
    </Typography>
    <IconButton sx={{ color: '#333', p: 0.5 }}>
      <ArrowForwardIosIcon fontSize="small" />
    </IconButton>
  </CardContent>
</Card>

        {/* fourth card */}
        <Card
  onClick={() => navigate('/home-service-type', { state: { category: " Tiles & Granite Repair works" } })}
  sx={{
    backgroundColor: '#d8ccba',
    borderTopLeftRadius: '24px',
    borderBottomRightRadius: '24px',
    overflow: 'hidden',
    height: 150,
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.7)', // Darker shadow for the image
    cursor: 'pointer',
    transform: 'perspective(1000px)',
    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
    '&:hover': {
      transform: 'perspective(1000px) scale(1.03) rotateX(2deg)',
      boxShadow: '0 12px 24px rgba(0, 0, 0, 0.35), 0 10px 10px rgba(0, 0, 0, 0.25)',
    },
  }}
>
  <Box
    sx={{
      height: '65%',
      border: '1px solid black',
      backgroundImage: `url(${image5})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderBottomRightRadius: '24px',
      position: 'relative',
      boxShadow: '0 8px 12px rgba(0, 0, 0, 0.3)',
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '8px',
        borderBottomRightRadius: '24px',
        zIndex: 2,
      },
    }}
  />
  <CardContent
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '35%',
      px: 1.5,
      py: 0.5,
      backgroundColor: '#d8ccba',
    }}
  >
    <Typography
      variant="body2"
      fontWeight="600"
      color="#333"
      sx={{
        fontSize: '0.88rem',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}
    >
      Tiles & Granite Repair works
    </Typography>
    <IconButton sx={{ color: '#333', p: 0.5 }}>
      <ArrowForwardIosIcon fontSize="small" />
    </IconButton>
  </CardContent>
</Card>


        {/* fifth card */}
        <Card
  onClick={() => navigate('/home-service-type', { state: { category: " Category" } })}
  sx={{
    backgroundColor: '#d8ccba',
    borderTopLeftRadius: '24px',
    borderBottomRightRadius: '24px',
    overflow: 'hidden',
    height: 150,
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.7)', // Darker shadow for the image
    cursor: 'pointer',
    transform: 'perspective(1000px)',
    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
    '&:hover': {
      transform: 'perspective(1000px) scale(1.03) rotateX(2deg)',
      boxShadow: '0 12px 24px rgba(0, 0, 0, 0.35), 0 10px 10px rgba(0, 0, 0, 0.25)',
    },
  }}
>
  <Box
    sx={{
      height: '65%',
      border: '1px solid black',
      backgroundImage: `url(${image7})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderBottomRightRadius: '24px',
      position: 'relative',
      boxShadow: '0 8px 12px rgba(0, 0, 0, 0.3)',
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '8px',
        borderBottomRightRadius: '24px',
        zIndex: 2,
      },
    }}
  />
  <CardContent
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '35%',
      px: 1.5,
      py: 0.5,
      backgroundColor: '#d8ccba',
    }}
  >
    <Typography
      variant="body2"
      fontWeight="600"
      color="#333"
      sx={{
        fontSize: '0.88rem',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}
    >
      Carpenter
    </Typography>
    <IconButton sx={{ color: '#333', p: 0.5 }}>
      <ArrowForwardIosIcon fontSize="small" />
    </IconButton>
  </CardContent>
</Card>


        <Card
  onClick={() => navigate('/home-service-type', { state: { category: " AC Technician" } })}
  sx={{
    backgroundColor: '#d8ccba',
    borderTopLeftRadius: '24px',
    borderBottomRightRadius: '24px',
    overflow: 'hidden',
    height: 150,
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.7)', // Darker shadow for the image
    cursor: 'pointer',
    transform: 'perspective(1000px)',
    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
    '&:hover': {
      transform: 'perspective(1000px) scale(1.03) rotateX(2deg)',
      boxShadow: '0 12px 24px rgba(0, 0, 0, 0.35), 0 10px 10px rgba(0, 0, 0, 0.25)',
    },
  }}
>
  <Box
    sx={{
      height: '65%',
      backgroundImage: `url(${image8})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      border: '1px solid black',
      borderBottomRightRadius: '24px',
      position: 'relative',
      boxShadow: '0 8px 12px rgba(0, 0, 0, 0.3)',
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '8px',
        borderBottomRightRadius: '24px',
        zIndex: 2,
      },
    }}
  />
  <CardContent
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '35%',
      px: 1.5,
      py: 0.5,
      backgroundColor: '#d8ccba',
    }}
  >
    <Typography
      variant="body2"
      fontWeight="600"
      color="#333"
      sx={{
        fontSize: '0.88rem',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}
    >
      AC installation
    </Typography>
    <IconButton sx={{ color: '#333', p: 0.5 }}>
      <ArrowForwardIosIcon fontSize="small" />
    </IconButton>
  </CardContent>
</Card>

         
        <Card
 onClick={() => navigate('/home-service-type', { state: { category: "Gardener" } })}
  sx={{
    backgroundColor: '#d8ccba',
    borderTopLeftRadius: '24px',
    borderBottomRightRadius: '24px',
    overflow: 'hidden',
    height: 150,
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.7)', // Darker shadow for the image
    cursor: 'pointer',
    transform: 'perspective(1000px)',
    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
    '&:hover': {
      transform: 'perspective(1000px) scale(1.03) rotateX(2deg)',
      boxShadow: '0 12px 24px rgba(0, 0, 0, 0.35), 0 10px 10px rgba(0, 0, 0, 0.25)',
    },
  }}
>
  <Box
    sx={{
      height: '65%',
      backgroundImage: `url(${image9})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      border: '1px solid black',
      borderBottomRightRadius: '24px',
      position: 'relative',
      boxShadow: '0 8px 12px rgba(0, 0, 0, 0.3)',
    }}
  />
  <CardContent
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '35%',
      px: 1.5,
      py: 0.5,
      backgroundColor: '#d8ccba',
    }}
  >
    <Typography
      variant="body2"
      fontWeight="600"
      color="#333"
      sx={{
        fontSize: '0.88rem',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}
    >
      Gardener
    </Typography>
    <IconButton sx={{ color: '#333', p: 0.5 }}>
      <ArrowForwardIosIcon fontSize="small" />
    </IconButton>
  </CardContent>
</Card>


        <Card
  onClick={() => navigate('/home-service-type', { state: { category: "  Alluminium Fabrication" } })}
  sx={{
    backgroundColor: '#d8ccba',
    borderTopLeftRadius: '24px',
    borderBottomRightRadius: '24px',
    overflow: 'hidden',
    height: 150,
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.7)', // Darker shadow for the image
    cursor: 'pointer',
    transform: 'perspective(1000px)',
    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
    '&:hover': {
      transform: 'perspective(1000px) scale(1.03) rotateX(2deg)',
      boxShadow: '0 12px 24px rgba(0, 0, 0, 0.35), 0 10px 10px rgba(0, 0, 0, 0.25)',
    },
  }}
>
  <Box
    sx={{
      height: '65%',
      backgroundImage: `url(${image10})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      border: '1px solid black',
      borderBottomRightRadius: '24px',
      position: 'relative',
      boxShadow: '0 8px 12px rgba(0, 0, 0, 0.3)',
    }}
  />
  <CardContent
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '35%',
      px: 1.5,
      py: 0.5,
      backgroundColor: '#d8ccba',
    }}
  >
    <Typography
      variant="body2"
      fontWeight="600"
      color="#333"
      sx={{
        fontSize: '0.88rem',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}
    >
      Alluminium Fabrication
    </Typography>
    <IconButton sx={{ color: '#333', p: 0.5 }}>
      <ArrowForwardIosIcon fontSize="small" />
    </IconButton>
  </CardContent>
</Card>


        <Card
 onClick={() => navigate('/home-service-type', { state: { category: " UPVC Fabrications" } })}
  sx={{
    backgroundColor: '#d8ccba',
    borderTopLeftRadius: '24px',
    borderBottomRightRadius: '24px',
    overflow: 'hidden',
    height: 150,
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.7)', // Darker shadow for the image
    cursor: 'pointer',
    transform: 'perspective(1000px)',
    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
    '&:hover': {
      transform: 'perspective(1000px) scale(1.03) rotateX(2deg)',
      boxShadow: '0 12px 24px rgba(0, 0, 0, 0.35), 0 10px 10px rgba(0, 0, 0, 0.25)',
    },
  }}
>
  <Box
    sx={{
      height: '65%',
      backgroundImage: `url(${image11})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      border: '1px solid black',
      borderBottomRightRadius: '24px',
      position: 'relative',
      boxShadow: '0 8px 12px rgba(0, 0, 0, 0.3)',
    }}
  />
  <CardContent
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '35%',
      px: 1.5,
      py: 0.5,
      backgroundColor: '#d8ccba',
    }}
  >
    <Typography
      variant="body2"
      fontWeight="600"
      color="#333"
      sx={{
        fontSize: '0.88rem',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}
    >
      UPVC Fabrications
    </Typography>
    <IconButton sx={{ color: '#333', p: 0.5 }}>
      <ArrowForwardIosIcon fontSize="small" />
    </IconButton>
  </CardContent>
</Card>

        
        <Card
  onClick={() => navigate('/home-service-type', { state: { category: " Gas Pipeline Installation & Repair" } })}
  sx={{
    backgroundColor: '#d8ccba',
    borderTopLeftRadius: '24px',
    borderBottomRightRadius: '24px',
    overflow: 'hidden',
    height: 150,
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.7)', // Darker shadow for the image
    cursor: 'pointer',
    transform: 'perspective(1000px)',
    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
    '&:hover': {
      transform: 'perspective(1000px) scale(1.03) rotateX(2deg)',
      boxShadow: '0 12px 24px rgba(0, 0, 0, 0.35), 0 10px 10px rgba(0, 0, 0, 0.25)',
    },
  }}
>
  <Box
    sx={{
      height: '65%',
      backgroundImage: `url(${image12})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      border: '1px solid black',
      borderBottomRightRadius: '24px',
      position: 'relative',
      boxShadow: '0 8px 12px rgba(0, 0, 0, 0.3)',
    }}
  />
  <CardContent
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '35%',
      px: 1.5,
      py: 0.5,
      backgroundColor: '#d8ccba',
    }}
  >
    <Typography
      variant="body2"
      fontWeight="600"
      color="#333"
      sx={{
        fontSize: '0.88rem',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}
    >
      Gas Pipeline Installation & Repair
    </Typography>
    <IconButton sx={{ color: '#333', p: 0.5 }}>
      <ArrowForwardIosIcon fontSize="small" />
    </IconButton>
  </CardContent>
</Card>

        <Card
   onClick={() => navigate('/home-service-type', { state: { category: "  Steel Fabrications" } })}
  sx={{
    backgroundColor: '#d8ccba',
    borderTopLeftRadius: '24px',
    borderBottomRightRadius: '24px',
    overflow: 'hidden',
    height: 150,
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.7)', // Darker shadow for the image
    cursor: 'pointer',
    transform: 'perspective(1000px)',
    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
    '&:hover': {
      transform: 'perspective(1000px) scale(1.03) rotateX(2deg)',
      boxShadow: '0 12px 24px rgba(0, 0, 0, 0.35), 0 10px 10px rgba(0, 0, 0, 0.25)',
    },
  }}
>
  <Box
    sx={{
      height: '65%',
      backgroundImage: `url(${image13})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      border: '1px solid black',
      borderBottomRightRadius: '24px',
      position: 'relative',
      boxShadow: '0 8px 12px rgba(0, 0, 0, 0.3)',
    }}
  />
  <CardContent
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '35%',
      px: 1.5,
      py: 0.5,
      backgroundColor: '#d8ccba',
    }}
  >
    <Typography
      variant="body2"
      fontWeight="600"
      color="#333"
      sx={{
        fontSize: '0.88rem',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}
    >
      Steel Fabrications
    </Typography>
    <IconButton sx={{ color: '#333', p: 0.5 }}>
      <ArrowForwardIosIcon fontSize="small" />
    </IconButton>
  </CardContent>
</Card>


        <Card
  onClick={() => navigate('/home-service-type', { state: { category: "  Home Clean" } })}
  sx={{
    backgroundColor: '#d8ccba',
    borderTopLeftRadius: '24px',
    borderBottomRightRadius: '24px',
    overflow: 'hidden',
    height: 150,
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.7)', // Darker shadow for the image
    cursor: 'pointer',
    transform: 'perspective(1000px)',
    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
    '&:hover': {
      transform: 'perspective(1000px) scale(1.03) rotateX(2deg)',
      boxShadow: '0 12px 24px rgba(0, 0, 0, 0.35), 0 10px 10px rgba(0, 0, 0, 0.25)',
    },
  }}
>
  <Box
    sx={{
      height: '65%',
      backgroundImage: `url(${image14})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderBottomRightRadius: '24px',
      border: '1px solid black',
      position: 'relative',
      boxShadow: '0 8px 12px rgba(0, 0, 0, 0.3)',
    }}
  />
  <CardContent
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '35%',
      px: 1.5,
      py: 0.5,
      backgroundColor: '#d8ccba',
    }}
  >
    <Typography
      variant="body2"
      fontWeight="600"
      color="#333"
      sx={{
        fontSize: '0.88rem',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}
    >
      Home Clean
    </Typography>
    <IconButton sx={{ color: '#333', p: 0.5 }}>
      <ArrowForwardIosIcon fontSize="small" />
    </IconButton>
  </CardContent>
</Card>


        <Card
 onClick={() => navigate('/home-service-type', { state: { category: "  Toilet & Kitchen Cleaning" } })}
  sx={{
    backgroundColor: '#d8ccba',
    borderTopLeftRadius: '24px',
    borderBottomRightRadius: '24px',
    overflow: 'hidden',
    height: 150,
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.7)', // Darker shadow for the image
    cursor: 'pointer',
    transform: 'perspective(1000px)',
    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
    '&:hover': {
      transform: 'perspective(1000px) scale(1.03) rotateX(2deg)',
      boxShadow: '0 12px 24px rgba(0, 0, 0, 0.35), 0 10px 10px rgba(0, 0, 0, 0.25)',
    },
  }}
>
  <Box
    sx={{
      height: '65%',
      backgroundImage: `url(${image15})`,
      border:'1px solid black',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderBottomRightRadius: '24px',
      position: 'relative',
      boxShadow: '0 8px 12px rgba(0, 0, 0, 0.3)',
    }}
  />
  <CardContent
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '35%',
      px: 1.5,
      py: 0.5,
      backgroundColor: '#d8ccba',
    }}
  >
    <Typography
      variant="body2"
      fontWeight="600"
      color="#333"
      sx={{
        fontSize: '0.88rem',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}
    >
      Toilet & Kitchen Cleaning
    </Typography>
    <IconButton sx={{ color: '#333', p: 0.5 }}>
      <ArrowForwardIosIcon fontSize="small" />
    </IconButton>
  </CardContent>
</Card>


        <Card
   onClick={() => navigate('/home-service-type', { state: { category: " Soft & Curtain Installation & Cleaning" } })}
  sx={{
    backgroundColor: '#d8ccba',
    borderTopLeftRadius: '24px',
    borderBottomRightRadius: '24px',
    overflow: 'hidden',
    height: 150,
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.7)', // Darker shadow for the image
    cursor: 'pointer',
    transform: 'perspective(1000px)',
    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
    '&:hover': {
      transform: 'perspective(1000px) scale(1.03) rotateX(2deg)',
      boxShadow: '0 12px 24px rgba(0, 0, 0, 0.35), 0 10px 10px rgba(0, 0, 0, 0.25)',
    },
  }}
>
  <Box
    sx={{
      height: '65%',
      border:'1px solid black',
      backgroundImage: `url(${image16})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderBottomRightRadius: '24px',
      position: 'relative',
      boxShadow: '0 8px 12px rgba(0, 0, 0, 0.3)',
    }}
  />
  <CardContent
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '35%',
      px: 2,
      py: 0.5,
      backgroundColor: '#d8ccba',
    }}
  >
    <Typography
      variant="body2"
      fontWeight="600"
      color="#333"
      sx={{
        fontSize: '0.85rem',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}
    >
      Soft & Curtain Installation & Cleaning
    </Typography>
    <IconButton sx={{ color: '#333', p: 0.5 }}>
      <ArrowForwardIosIcon fontSize="small" />
    </IconButton>
  </CardContent>
</Card>


<Card
onClick={() => navigate('/home-service-type', { state: { category: " Homemaid" } })}
  sx={{
    backgroundColor: '#d8ccba',
    borderTopLeftRadius: '24px',
    borderBottomRightRadius: '24px',
    overflow: 'hidden',
    height: 150,
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.7)', // Darker shadow for the image
    cursor: 'pointer',
    transform: 'perspective(1000px)',
    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
    '&:hover': {
      transform: 'perspective(1000px) scale(1.03) rotateX(2deg)',
      boxShadow: '0 12px 24px rgba(0, 0, 0, 0.35), 0 10px 10px rgba(0, 0, 0, 0.25)',
    },
  }}
>
  <Box
    sx={{
      height: '65%',
      border:'1px solid black',
      backgroundImage: `url(${image17})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderBottomRightRadius: '24px',
      position: 'relative',
      boxShadow: '0 8px 12px rgba(0, 0, 0, 0.3)',
    }}
  />
  <CardContent
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '35%',
      px: 2,
      py: 0.5,
      backgroundColor: '#d8ccba',
    }}
  >
    <Typography
      variant="body2"
      fontWeight="600"
      color="#333"
      sx={{
        fontSize: '0.9rem',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}
    >
      Homemaid
    </Typography>
    <IconButton sx={{ color: '#333', p: 0.5 }}>
      <ArrowForwardIosIcon fontSize="small" />
    </IconButton>
  </CardContent>
</Card>

      </Box>
    </Box>

  </Box>
      
  </Box>

      <FormsBottomNavbar />

    </Box>
    
    
  );
}

export default App;
