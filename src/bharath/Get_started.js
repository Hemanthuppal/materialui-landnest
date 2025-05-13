import React, { useEffect, useState ,useContext} from 'react';
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
                name="name" value={formData.name} onChange={handleChange}
              />
              <TextField
                fullWidth label="Email ID" margin="normal" size="small"
                name="email" value={formData.email} onChange={handleChange}
              />
              <TextField
                fullWidth label="Phone" margin="normal" size="small"
                name="phone" value={formData.phone} onChange={handleChange}
              />

              <FormControlLabel
                control={<Checkbox defaultChecked color="primary" />}
                label="Check Updates on Whatsapp"
                sx={{ mb: 2 }}
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
