import React, { useEffect, useState, useContext } from 'react';
import {
  Box, Typography, TextField, Checkbox, FormControlLabel,
  Button, Container, Paper, useMediaQuery, useTheme, IconButton
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';
import FormsBottomNavbar from '../maniteja/FormsBottomNavbar';
import logotop from './Images/landnest-logo.jpg';
import axios from 'axios';
import { AuthContext } from '../AuthContext/AuthContext';

function InteriorConsultationForm() {
  const { userId, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  // Replace with dynamic value (e.g. from localStorage or props)

  // Fetch user data
  useEffect(() => {
    axios.get('https://landnest.net:81/users/')
      .then(response => {
        const matchedUser = response.data.find(user => user.user_id == userId);
        if (matchedUser) {
          setFormData({
            name: `${matchedUser.first_name} ${matchedUser.last_name}`,
            email: matchedUser.email,
            phone: matchedUser.mobile_no,
          });
        }
      })
      .catch(error => {
        console.error("Error fetching user data:", error);
      });
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://landnest.net:81/consultant-req/', { user_id: userId })
      .then(response => {
        alert("Consultation request submitted!");
      })
      .catch(error => {
        console.error("Submission error:", error);
        alert("Failed to submit request.");
      });
  };

  return (
    <>
      {/* Header */}
      <Box sx={{ position: 'sticky', top: 0, zIndex: 1200, bgcolor: 'background.paper', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <Box display="flex" alignItems="center" justifyContent="space-between" p={1} sx={{ background: 'black', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
          <IconButton onClick={() => navigate(-1)} sx={{ color: 'white' }}>
            <ArrowBackIosIcon />
          </IconButton>
          <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold', textAlign: 'left' }}>LANDNEST</Typography>
          <Box sx={{ width: 100, height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={logotop} alt="Landnest Logo" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
          </Box>
        </Box>
      </Box>
      <Box sx={{
        padding: isMobile ? 1 : 0.5,
        display: 'flex',
        justifyContent: 'space-between',
        boxShadow: '0 5px 10px rgba(0,0,0,0.1)',
      }}>
        {/* Construction - Inactive */}
        <Box
          component={Link}
          to="/constructions"
          sx={{
            flex: 1,
            textAlign: 'center',
            py: 2,
            textDecoration: 'none',
            background: `
                linear-gradient(145deg, rgb(22, 22, 22), rgb(15, 15, 15)),
                url('https://www.transparenttextures.com/patterns/dark-matter.png')
              `,
            backgroundBlendMode: 'overlay',
            borderRight: '1px solid rgba(0,0,0,0.1)',
            borderTopLeftRadius: '30px',
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
          }}>
          <Typography variant={isMobile ? "h6" : "h5"} component="div" sx={{
            fontWeight: 500,
            color: 'white',
            textShadow: '0 1px 5px rgba(0,0,0,0.7)',
            fontFamily: 'Inter, Roboto, Helvetica, sans-serif',
          }}>
            Constructions
          </Typography>
        </Box>

        {/* Interiors - Active */}
        <Box
          component={Link}
          to="/interiors"
          sx={{
            flex: 1,
            textAlign: 'center',
            py: 2,
            background: `
                linear-gradient(145deg, rgba(232,224,208,0.95), rgba(216,204,186,0.95)),
                url('https://www.transparenttextures.com/patterns/cream-paper.png')
              `,
            backgroundBlendMode: 'overlay',
            textDecoration: 'none',
            borderBottomRightRadius: '30px',
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
          }}
        >
          <Typography variant={isMobile ? "h6" : "h5"} component="div" sx={{
            fontWeight: 800,
            // color: '#5d4037',
            color: '#333333',
            // color:"#556b2f",
            letterSpacing: '1px',
            textShadow: '0 1px 3px rgba(255,255,255,0.5)',
            fontFamily: 'Inter, Roboto, Helvetica, sans-serif',
          }}>
            Interiors
          </Typography>
        </Box>
      </Box>

      {/* Main Form */}
      <Box sx={{ backgroundColor: "#e7dbc9", minHeight: '100vh' }}>
        <Container maxWidth="sm" sx={{ pt: 4, pb: 12 }}>
          <Paper elevation={3} sx={{ p: { xs: 2, sm: 4 } }}>
            <Typography variant={isMobile ? 'h6' : 'h5'} sx={{ fontWeight: 600, textAlign: 'center', mb: 3 }}>
              Talk to an Interior Designer
            </Typography>

            <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
              <TextField
                fullWidth label="Name" margin="normal" size="small"
                name="name" value={formData.name} onChange={handleChange} disabled
              />
              <TextField
                fullWidth label="Email ID" margin="normal" size="small"
                name="email" value={formData.email} onChange={handleChange} disabled
              />
              <TextField
                fullWidth label="Phone" margin="normal" size="small"
                name="phone" value={formData.phone} onChange={handleChange} disabled
              />

              <FormControlLabel
                control={<Checkbox defaultChecked color="primary" />}
                label="Check Updates on Whatsapp"
                sx={{ mb: 2 }} disabled
              />

              <Box sx={{ textAlign: 'center' }}>
                <Button
                  variant="contained" type="submit"
                  sx={{
                    backgroundColor: 'red', color: '#fff',
                    borderRadius: '20px', px: 4, py: 1, fontWeight: 'bold',
                    '&:hover': { backgroundColor: '#cc0000' },
                  }}
                >
                  GET FREE CONSULTATION
                </Button>
              </Box>
            </Box>
          </Paper>
        </Container>
      </Box>

      <FormsBottomNavbar />
    </>
  );
}

export default InteriorConsultationForm;
