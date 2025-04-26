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
  IconButton
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import { Link } from 'react-router-dom';
import FormsBottomNavbar from '../maniteja/FormsBottomNavbar';
import logotop from './Images/landnest-logo.jpg'


function ConstructionConsultationForm() {
  const navigate = useNavigate();
  const [tabValue, setTabValue] = React.useState(1); // Highlight "Interior"
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [value, setValue] = useState('construction');
   
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
       {/* Top Navigation Bar */}
       <Box display="flex" alignItems="center" justifyContent="space-between" p={1} sx={{
         background: 'black',
         borderBottom: '1px solid rgba(0,0,0,0.08)'
       }}>
         {/* Back Arrow - Left Side */}
         <IconButton
           onClick={() => navigate(-1)}
           sx={{
             color: 'white',
             '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }
           }}
         >
           <ArrowBackIosIcon />
         </IconButton>
         
         {/* Center Text - "landnest" */}
         <Typography variant="h6" component="div" sx={{ 
           color: 'white',
           fontWeight: 'bold',
           flexGrow: 1,
           textAlign: 'left'
         }}>
           LANDNEST
         </Typography>
         
         {/* Right Side Logo */}
         <Box sx={{ 
           width: 100,
           height: 50,
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'center'
         }}>
           <img 
             src={logotop} 
             alt="Landnest Logo" 
             style={{ 
               maxWidth: '100%', 
               maxHeight: '100%',
               objectFit: 'contain'
             }}
           />
         </Box>
       </Box>
     
       {/* Construction/Interior Navigation */}
       <Box sx={{
       padding: isMobile ? 1 : 0.5,
       display: 'flex',
       justifyContent: 'space-between',
       boxShadow: '0 5px 10px rgba(0,0,0,0.1)',
     }}>
       {/* Construction - Active */}
       <Box 
        component={Link}
         to="/constructions"
       
       sx={{
         flex: 1,
         textAlign: 'center',
         py: 2,
         textDecoration: 'none',

         background: `
           linear-gradient(145deg, rgba(232,224,208,0.95), rgba(216,204,186,0.95)),
           url('https://www.transparenttextures.com/patterns/cream-paper.png')
         `,
         backgroundBlendMode: 'overlay',
         borderRight: '1px solid rgba(0,0,0,0.1)',
         borderTopLeftRadius: '30px',
         boxShadow: `
           inset 0 0 15px rgba(0,0,0,0.1),
           0 2px 5px rgba(0,0,0,0.08)
         `,
         transform: 'scale(0.98)',
         transition: 'all 0.3s ease',
         '&:hover': {
           transform: 'scale(1)',
           boxShadow: `
             inset 0 0 20px rgba(0,0,0,0.15),
             0 3px 8px rgba(0,0,0,0.15)
           `
         }
       }}>
         <Typography variant={isMobile ? "h6" : "h5"} component="div" sx={{ 
           fontWeight: 700,
           color: 'green',
           textShadow: '0 1px 3px rgba(255,255,255,0.5)',
           fontFamily: 'Inter, Roboto, Helvetica, sans-serif',
           // textTransform: 'uppercase'
         }}>
           Constructions
         </Typography>
       </Box>
       
       {/* Interiors - Inactive */}
       <Box 
         component={Link}
         to="/interiors"
         sx={{
           flex: 1,
           textAlign: 'center',
           py: 2,
           background: `
             linear-gradient(145deg, rgb(22, 22, 22), rgb(15, 15, 15)),
             url('https://www.transparenttextures.com/patterns/dark-matter.png')
           `,
           backgroundBlendMode: 'overlay',
           textDecoration: 'none',
           borderBottomRightRadius: '30px',
           boxShadow: `
             inset 0 0 15px rgba(0,0,0,0.2),
             0 2px 5px rgba(0,0,0,0.1)
           `,
           transform: 'scale(0.98)',
           transition: 'all 0.3s ease',
           '&:hover': {
             background: `
               linear-gradient(145deg, rgb(35, 35, 35), rgb(25, 25, 25)),
               url('https://www.transparenttextures.com/patterns/dark-matter.png')
             `,
             transform: 'scale(1)',
             boxShadow: `
               inset 0 0 20px rgba(0,0,0,0.3),
               0 3px 8px rgba(0,0,0,0.2)
             `
           }
         }}
       >
         <Typography variant={isMobile ? "h6" : "h5"} component="div" sx={{ 
           fontWeight: 700,
           color: 'rgba(255,255,255,0.9)',
           letterSpacing: '1px',
           textShadow: '0 1px 5px rgba(0,0,0,0.7)',
           fontFamily: 'Inter, Roboto, Helvetica, sans-serif',
           // textTransform: 'uppercase'
         }}>
           Interiors
         </Typography>
       </Box>
     </Box>
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
    <FormsBottomNavbar />
                
    </>
  );
}

export default ConstructionConsultationForm;