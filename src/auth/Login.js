


import React, { useState, useContext} from 'react';
import {
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Typography,
  InputAdornment,
  IconButton,
  Link as MUILink,
  Avatar,
  Fade,
  Paper,
} from '@mui/material';
import { AuthContext } from '../AuthContext/AuthContext';
import { Visibility, VisibilityOff, Lock } from '@mui/icons-material';
import { useNavigate, Link } from 'react-router-dom';
import landNestLogo from '../../src/assets/LandNestLogo.jpg';
import {BASE_URL} from '../Api/ApiUrls';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
  
    try {
      const response = await fetch(`${BASE_URL}/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          identifier: email,
          password: password
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Save to context instead of only sessionStorage
        login(data.user_id); // <- this sets user_id in AuthContext
  
        if (rememberMe) {
          sessionStorage.setItem('isAuthenticated', 'true');
          sessionStorage.setItem('user_id', data.user_id);
        }
  
        console.log("userid=", data.user_id);
        navigate('/dashboard');
      } else {
        setError(data.message || 'Invalid email or password');
      }
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <Fade in timeout={700}>
      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #0d0d25, #000)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          py: 6,
        }}
      >
        <Container maxWidth="xs">
          <CssBaseline />
          <Paper
            elevation={10}
            sx={{
              p: 4,
              borderRadius: 4,
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 215, 0, 0.3)',
              backdropFilter: 'blur(10px)',
              textAlign: 'center',
              color: '#fff',
            }}
          >
            <Box
  component="img"
  src={landNestLogo}
  alt="Land Nest Logo"
  sx={{
    width: 180,
    height: 120,
    mb: 2,
    mx: 'auto',
    borderRadius: 2, // Optional: slightly rounded corners
    boxShadow: '0 0 20px #ffd700',
    display: 'block',
  }}
/>

            <Typography variant="h5" sx={{ color: '#f7e896', fontWeight: 600, mb: 2 }}>
              Welcome Back
            </Typography>
            {error && (
              <Typography color="error" sx={{ fontSize: 14, mb: 2 }}>
                {error}
              </Typography>
            )}
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                label="Mobile Number"
                type="mobile"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{
                  sx: {
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    borderRadius: 2,
                    color: 'white',
                  },
                }}
                InputLabelProps={{ style: { color: '#ccc' } }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="Password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  sx: {
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    borderRadius: 2,
                    color: 'white',
                  },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                        sx={{ color: 'rgb(248, 227, 111)' }}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{ style: { color: '#ccc' } }}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    sx={{ color: ' #f7e896' }}
                  />
                }
                label={<Typography variant="body2" sx={{ color: '#ccc' }}>Remember me</Typography>}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                startIcon={<Lock />}
                sx={{
                  mt: 3,
                  mb: 2,
                  background: 'linear-gradient(135deg, #f1e57c, #e6ce45)',
                  color: '#000',
                  fontWeight: 'bold',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #ffe85c, #f0d53e)',
                  },
                }}
              >
                Sign In
              </Button>
              <Box display="flex" justifyContent="space-between">
                <MUILink component={Link} to="/register" variant="body2" sx={{ color: 'rgb(250, 225, 85)' }}>
                  Create account
                </MUILink>
                <MUILink component={Link} to="/forgot-password" variant="body2" sx={{ color: 'rgb(250, 228, 101)' }}>
                  Forgot password?
                </MUILink>
              </Box>
            </Box>
          </Paper>
        </Container>
      </Box>
    </Fade>
  );
};

export default Login;
