// import React from 'react';
// import {
//   AppBar,
//   Tabs,
//   Tab,
//   Typography,
//   Box,
//   TextField,
//   Checkbox,
//   FormControlLabel,
//   Button,
//   Container,
//   Paper,
//   useMediaQuery,
//   useTheme,
//   Grid,
//   IconButton
// } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import BottomNavbar from '../sharvani/BottomNavbar';


// function InteriorConsultationForm() {
//   const navigate = useNavigate();

//   const [tabValue, setTabValue] = React.useState(1); // Highlight "Interior"
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//   const handleTabChange = (event, newValue) => {
//     setTabValue(newValue);
//   };

//   return (


//     <>
   
//       <Box display="flex" alignItems="center" p={1} sx={{
//         background: 'white',
//         boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
//         position: 'sticky',
//         top: 0,
//         zIndex: 1100
//       }}>
//         <IconButton
//           onClick={() => navigate('/how-it-works')}
//           sx={{
//             color: '#4A00E0',
//             '&:hover': {
//               backgroundColor: 'rgba(74, 0, 224, 0.1)'
//             }
//           }}
//         >
//           <ArrowBackIosIcon />
//         </IconButton>
//       </Box>
//       <Box sx={{
//         backgroundColor: '#e6f2ff',  // Light blue color
//         padding: isMobile ? 2 : 2,
//         borderRadius: 1,
//         // Optional: adds slight rounded corners
//       }}>
//         <Grid container justifyContent="space-between" alignItems="center">
//           <Grid item>
//             <Link to="/constructions" style={{ textDecoration: 'none', color: 'inherit' }}>
//               <Typography variant={isMobile ? "h6" : "h5"} component="div">
//                 Constructions
//               </Typography>
//             </Link>

//           </Grid>
//           <Grid item>
//             <Link to="/interiors" style={{ textDecoration: 'none', color: 'inherit' }}>
//               <Typography variant={isMobile ? "h6" : "h5"} component="div">
//                 Interiors
//               </Typography>
//             </Link>
//           </Grid>
//         </Grid>
//       </Box>



//       <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
//         <Paper elevation={3} sx={{ p: { xs: 2, sm: 4 } }}>
//           {/* Top Tabs: Constructions / Interior */}
//           <AppBar position="static" color="default" sx={{ boxShadow: 'none', backgroundColor: '#f5f5f5' }}>
//             <Tabs
//               value={tabValue}
//               onChange={handleTabChange}
//               variant="fullWidth"
//               indicatorColor="primary"
//               textColor="inherit"
//             >
//               <Tab label="Constructions" />
//               <Tab
//                 label="Interior"
//                 sx={{
//                   color: 'green',
//                   fontWeight: 'bold',
//                 }}
//               />
//             </Tabs>
//           </AppBar>

//           {/* Secondary Navigation */}
//           <Box sx={{ mt: 2, mb: 2 }}>
//             <Grid container spacing={2} justifyContent="center">
//               <Grid item>
//                 <Typography variant="body2" fontWeight={500}>
//                   Our Services
//                 </Typography>
//               </Grid>
//               <Grid item>
//                 <Typography variant="body2" fontWeight={500}>
//                   Portfolio
//                 </Typography>
//               </Grid>
//               <Grid item>
//                 <Typography variant="body2" fontWeight={500}>
//                   How it works?
//                 </Typography>
//               </Grid>
//             </Grid>
//           </Box>

//           {/* Heading */}
//           <Typography
//             variant={isMobile ? 'h6' : 'h5'}
//             sx={{ fontWeight: 600, textAlign: 'center', mb: 3 }}
//           >
//             Talk to an Interior Designer
//           </Typography>

//           {/* Form Fields */}
//           <Box component="form" noValidate autoComplete="off">
//             <TextField fullWidth label="Name" margin="normal" size="small" />
//             <TextField fullWidth label="Email ID" margin="normal" size="small" />
//             <TextField fullWidth label="Phone" margin="normal" size="small" />

//             <FormControlLabel
//               control={<Checkbox defaultChecked color="primary" />}
//               label="Check Updates on Whatsapp"
//               sx={{ mb: 2 }}
//             />

//             {/* Submit Button */}
//             <Box sx={{ textAlign: 'center' }}>
//               <Button
//                 variant="contained"
//                 sx={{
//                   backgroundColor: 'red',
//                   color: '#fff',
//                   borderRadius: '20px',
//                   px: 4,
//                   py: 1,
//                   fontWeight: 'bold',
//                   '&:hover': {
//                     backgroundColor: '#cc0000',
//                   },
//                 }}
//               >
//                 GET FREE CONSULTATION
//               </Button>
//             </Box>
//           </Box>
//         </Paper>
//       </Container>
//         <Box sx={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 1000 }}>
//               <BottomNavbar />
//             </Box>

//     </>
//   );
// }

// export default InteriorConsultationForm;














import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Container,
  Paper,
  useMediaQuery,
  useTheme,
  Grid,
  IconButton, BottomNavigation,
  BottomNavigationAction
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import AddIcon from '@mui/icons-material/Add';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

function InteriorConsultationForm() {
  const navigate = useNavigate();
  const [tabValue, setTabValue] = React.useState(1); // Highlight "Interior"
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [value, setValue] = useState('construction');
      const handleChange = (event, newValue) => {
        setValue(newValue);
        // Navigate to the corresponding route
        switch (newValue) {
          case 'home':
            navigate('/dashboard');
            break;
          case 'construction':
            navigate('/constructions');
            break;
          case 'post':
            navigate('/post');
            break;
          case 'services':
            navigate('/home-service');
            break;
          case 'profile':
            navigate('/profile');
            break;
          default:
            navigate('/');
        }
      };
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    // Navigate to the selected tab
    navigate(newValue === 0 ? '/constructions' : '/interiors');
  };

  return (
    <>
      {/* Sticky Header Section */}
      <Box sx={{
        position: 'sticky',
        top: 0,
        zIndex: 1200,
        bgcolor: 'background.paper',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        {/* Back Arrow */}
        <Box display="flex" alignItems="center" p={1} sx={{
          background: 'white',
          borderBottom: '1px solid rgba(0,0,0,0.08)'
        }}>
          <IconButton
            onClick={() => navigate('/how-it-works')}
            sx={{
              color: '#4A00E0',
              '&:hover': {
                backgroundColor: 'rgba(74, 0, 224, 0.1)'
              }
            }}
          >
            <ArrowBackIosIcon />
          </IconButton>
        </Box>

        {/* Construction/Interior Navigation */}
        <Box sx={{
              bgcolor: 'rgb(212, 209, 205)',
              padding: isMobile ? 1 : 1,
        }}>
          <AppBar position="static" color="default" sx={{ boxShadow: 'none', backgroundColor: 'transparent' }}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              variant="fullWidth"
              indicatorColor="primary"
              textColor="inherit"
            >
              <Tab 
                label="Constructions" 
                sx={{ 
                  fontSize: isMobile ? '1.3rem' : '1.3rem',
                  fontWeight: tabValue === 0 ? 'bold' : 'bold',
                  textTransform: 'none' // Add this line
                }} 
              />
              <Tab
                label="Interior"
                sx={{
                  fontSize: isMobile ? '1.3rem' : '1.3rem',
                  color: 'green',
                  fontWeight: 'bold',
                  textTransform: 'none' // Add this line
                }}
              />
            </Tabs>
          </AppBar>
        </Box>
      </Box>

    

            {/* <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-around', 
                    p: 1, 
                    bgcolor: '#fff',
                    borderBottom: '1px solid rgba(0,0,0,0.08)'
                  }}>
                      <Link to="/interiors" style={{ textDecoration: 'none', color: 'inherit' }}>
          
                    <Typography  fontWeight={500}>Our Services</Typography>
                    </Link>
          
                    <Typography fontWeight={500}>Portfolio</Typography>

                    <Link to="/how-it-works" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography fontWeight={500} >How it works?</Typography>
                    </Link>

                  </Box> */}

      {/* Main Content */}
      <Container maxWidth="sm" sx={{ mt: 4, mb: 12 }}>
        <Paper elevation={3} sx={{ p: { xs: 2, sm: 4 } }}>
          {/* Secondary Navigation */}
        

          {/* Heading */}
          <Typography
            variant={isMobile ? 'h6' : 'h5'}
            sx={{ fontWeight: 600, textAlign: 'center', mb: 3 }}
          >
            Talk to an Interior Designer
          </Typography>

          {/* Form Fields */}
          <Box component="form" noValidate autoComplete="off">
            <TextField fullWidth label="Name" margin="normal" size="small" />
            <TextField fullWidth label="Email ID" margin="normal" size="small" />
            <TextField fullWidth label="Phone" margin="normal" size="small" />

            <FormControlLabel
              control={<Checkbox defaultChecked color="primary" />}
              label="Check Updates on Whatsapp"
              sx={{ mb: 2 }}
            />

            {/* Submit Button */}
            <Box sx={{ textAlign: 'center' }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: 'red',
                  color: '#fff',
                  borderRadius: '20px',
                  px: 4,
                  py: 1,
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: '#cc0000',
                  },
                }}
              >
                GET FREE CONSULTATION
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>

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
            <BottomNavigation
              value={value}
              onChange={handleChange}
              showLabels
              sx={{
                borderTop: '1px solid #e0e0e0',
                height: '60px',
                '& .MuiBottomNavigationAction-root': {
                  minWidth: 'auto',
                  padding: '6px 0',
                  color: 'black',
                },
                '& .MuiBottomNavigationAction-label': {
                  fontSize: '0.7rem',
                },
              }}
            >
              <BottomNavigationAction
                value="home"
                label="Home"
                icon={<HomeIcon sx={{ fontSize: '1.3rem' }} />}
              />
              <BottomNavigationAction
                value="construction"
                label="Construction & Interiors"
                icon={<BuildIcon sx={{ fontSize: '1.3rem' }} />}
              />
              <BottomNavigationAction
                value="post"
                label="Post"
                icon={<AddIcon sx={{ fontSize: '1.3rem' }} />}
                sx={{
                  '& .MuiSvgIcon-root': { color: '#2196f3' },
                  '& .MuiBottomNavigationAction-label': { color: '#2196f3' }
                }}
              />
              <BottomNavigationAction
                value="services"
                label="Home Services"
                icon={<CleaningServicesIcon sx={{ fontSize: '1.3rem' }} />}
              />
              <BottomNavigationAction
                value="profile"
                label="Profile"
                icon={<AccountCircleIcon sx={{ fontSize: '1.3rem' }} />}
              />
            </BottomNavigation>
                </Paper>
    </>
  );
}

export default InteriorConsultationForm;