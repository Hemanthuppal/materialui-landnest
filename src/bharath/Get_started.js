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














import React from 'react';
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
  IconButton
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import BottomNavbar from '../sharvani/BottomNavbar';

function InteriorConsultationForm() {
  const navigate = useNavigate();
  const [tabValue, setTabValue] = React.useState(1); // Highlight "Interior"
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
          backgroundColor: '#e6f2ff',
          padding: isMobile ? 2 : 2,
          borderBottom: '1px solid rgba(0,0,0,0.08)'
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
                  fontSize: isMobile ? '1rem' : '1.25rem',
                  fontWeight: tabValue === 0 ? 'bold' : 'normal'
                }} 
              />
              <Tab
                label="Interior"
                sx={{
                  fontSize: isMobile ? '1rem' : '1.25rem',
                  color: 'green',
                  fontWeight: 'bold',
                }}
              />
            </Tabs>
          </AppBar>
        </Box>
      </Box>

      <Box sx={{ mt: 2, mb: 2 }}>
            <Grid container spacing={2} justifyContent="center" >
              <Grid item>
                <Typography variant="h6" fontWeight={500}>
                  Our Services
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6" fontWeight={500}>
                  Portfolio
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6" fontWeight={500}>
                  How it works?
                </Typography>
              </Grid>
            </Grid>
          </Box>

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

      {/* Bottom Navigation */}
      <Box sx={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 1000 }}>
        <BottomNavbar />
      </Box>
    </>
  );
}

export default InteriorConsultationForm;