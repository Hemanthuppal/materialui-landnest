import React, { useEffect, useState, useContext } from 'react';
import {
  Box, Typography, TextField, Checkbox, FormControlLabel,
  Button, Container, Paper, useMediaQuery, useTheme, IconButton
} from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { AuthContext } from '../AuthContext/AuthContext';
import FormsBottomNavbar from '../maniteja/FormsBottomNavbar';
import logotop from './Images/landnest-logo.jpg';
import axios from 'axios';

function ConstructionConsultationForm() {
  const { userId, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    whatsappOptIn: true,
  });

  // Fetch user data by userId
  useEffect(() => {
    if (userId) {
      axios.get(`https://landnest.net:81/users/`)
        .then(res => {
          const user = res.data.find(u => u.user_id === userId);
          if (user) {
            setUserData({
              name: `${user.first_name} ${user.last_name}`,
              email: user.email || '',
              phone: user.mobile_no || '',
              whatsappOptIn: true,
            });
          }
        })
        .catch(err => {
          console.error('Error fetching user data:', err);
        });
    }
  }, [userId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userId) return;

    axios.post('https://landnest.net:81/consultant-req/', { user_id: userId })
      .then(() => {
        alert('Consultation request submitted successfully.');
        navigate('/constructions'); // or any route you want
      })
      .catch(err => {
        console.error('Submission error:', err);
        alert('Failed to submit consultation request.');
      });
  };

  return (
    <>
      {/* Header */}
      <Box sx={{
        position: 'sticky', top: 0, zIndex: 1200, bgcolor: 'background.paper',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <Box display="flex" alignItems="center" justifyContent="space-between" p={1} sx={{ background: 'black' }}>
          <IconButton onClick={() => navigate(-1)} sx={{ color: 'white' }}>
            <ArrowBackIosIcon />
          </IconButton>
          <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold', flexGrow: 1, textAlign: 'left' }}>
            LANDNEST
          </Typography>
          <Box sx={{ width: 100, height: 50 }}>
            <img src={logotop} alt="Landnest Logo" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
          </Box>
        </Box>

        {/* Tabs */}
        <Box sx={{
          padding: isMobile ? 1 : 0.5, display: 'flex', justifyContent: 'space-between',
          boxShadow: '0 5px 10px rgba(0,0,0,0.1)',
        }}>
          <Box component={Link} to="/constructions" sx={{
            flex: 1, textAlign: 'center', py: 2, textDecoration: 'none',
            background: `
              linear-gradient(145deg, rgba(232,224,208,0.95), rgba(216,204,186,0.95)),
              url('https://www.transparenttextures.com/patterns/cream-paper.png')`,
            borderRight: '1px solid rgba(0,0,0,0.1)',
            borderTopLeftRadius: '30px',
            boxShadow: `inset 0 0 15px rgba(0,0,0,0.1), 0 2px 5px rgba(0,0,0,0.08)`,
          }}>
            <Typography variant={isMobile ? "h6" : "h5"} sx={{
              fontWeight: 700, color: 'green', textShadow: '0 1px 3px rgba(255,255,255,0.5)',
            }}>
              Constructions
            </Typography>
          </Box>
          <Box component={Link} to="/interiors" sx={{
            flex: 1, textAlign: 'center', py: 2, textDecoration: 'none',
            background: `
              linear-gradient(145deg, rgb(22, 22, 22), rgb(15, 15, 15)),
              url('https://www.transparenttextures.com/patterns/dark-matter.png')`,
            borderBottomRightRadius: '30px',
            boxShadow: `inset 0 0 15px rgba(0,0,0,0.2), 0 2px 5px rgba(0,0,0,0.1)`,
          }}>
            <Typography variant={isMobile ? "h6" : "h5"} sx={{
              fontWeight: 700, color: 'rgba(255,255,255,0.9)',
              textShadow: '0 1px 5px rgba(0,0,0,0.7)',
            }}>
              Interiors
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Form */}
      <Container maxWidth="sm" sx={{ mt: 4, mb: 12 }}>
        <Paper elevation={3} sx={{ p: { xs: 2, sm: 4 } }}>
          <Typography variant={isMobile ? 'h6' : 'h5'} sx={{ fontWeight: 600, textAlign: 'center', mb: 3 }}>
            Talk to an Interior Designer
          </Typography>

          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              fullWidth label="Name" margin="normal" size="small"
              value={userData.name} disabled
            />
            <TextField
              fullWidth label="Email ID" margin="normal" size="small"
              value={userData.email} disabled
            />
            <TextField
              fullWidth label="Phone" margin="normal" size="small"
              value={userData.phone} disabled
            />
            <FormControlLabel
              control={<Checkbox checked={userData.whatsappOptIn} disabled color="primary" />}
              label="Check Updates on Whatsapp"
              sx={{ mb: 2 }}
            />
            <Box sx={{ textAlign: 'center' }}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: 'red',
                  color: '#fff',
                  borderRadius: '20px',
                  px: 4,
                  py: 1,
                  fontWeight: 'bold',
                  '&:hover': { backgroundColor: '#cc0000' },
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
