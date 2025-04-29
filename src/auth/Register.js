

//export default Register;
// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import './Register.css';
// import landNestLogo from '../../src/assets/LandNestLogo.jpg';

// const Register = () => {
//   const [fullName, setFullName] = useState('');
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [state, setState] = useState('');
//   const [city, setCity] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     if (password !== confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }

//     try {
//       const response = await fetch('http://46.37.122.105:89/register/', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ fullName, mobileNumber, state, city, email, password }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         navigate('/login');
//       } else {
//         setError(data.message || 'Registration failed');
//       }
//     } catch (err) {
//       console.error(err);
//       setError('Something went wrong. Please try again later.');
//     }
//   };

//   return (
//     <div className="register-container">
//       <div className="register-card">
//         <img src={landNestLogo} alt="Land Nest" className="register-logo" />
//         <h2 className="register-title">Create an Account</h2>
//         {error && <div className="register-error">{error}</div>}

//         <form onSubmit={handleSubmit} className="register-form">
//           <div className="input-group">
//             <label>Full Name</label>
//             <input
//               type="text"
//               placeholder="John Doe"
//               value={fullName}
//               onChange={(e) => setFullName(e.target.value)}
//               required
//             />
//           </div>

//           <div className="input-group">
//             <label>Mobile Number</label>
//             <input
//               type="text"
//               placeholder="+1234567890"
//               value={mobileNumber}
//               onChange={(e) => setMobileNumber(e.target.value)}
//               required
//             />
//           </div>

//           <div className="input-group">
//             <label>State</label>
//             <input
//               type="text"
//               placeholder="State"
//               value={state}
//               onChange={(e) => setState(e.target.value)}
//               required
//             />
//           </div>

//           <div className="input-group">
//             <label>City</label>
//             <input
//               type="text"
//               placeholder="City"
//               value={city}
//               onChange={(e) => setCity(e.target.value)}
//               required
//             />
//           </div>

//           <div className="input-group">
//             <label>Email</label>
//             <input
//               type="email"
//               placeholder="you@example.com"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div className="input-group">
//             <label>Password</label>
//             <input
//               type="password"
//               placeholder="••••••••"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           <div className="input-group">
//             <label>Confirm Password</label>
//             <input
//               type="password"
//               placeholder="••••••••"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//             />
//           </div>

//           <button type="submit" className="register-btn">Sign Up</button>

//           <div className="register-links">
//             <Link to="/login">Already have an account? Sign in</Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;


import React, { useState, useEffect } from 'react';
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
import { Visibility, VisibilityOff, Lock } from '@mui/icons-material';
import { useNavigate, Link } from 'react-router-dom';
import landNestLogo from '../../src/assets/LandNestLogo.jpg'; // Update if the path differs
import {BASE_URL} from '../Api/ApiUrls';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
  
    if (!name || !email || !phone || !password || !confirmPassword || !state || !city) {
      setError('All fields are required.');
      return;
    }
  
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
  
    const formData = {
      username: name,
      first_name: name,
      last_name: name,
      email: email,
      mobile_no: phone,
      password: password,
      state: state,
      city: city,
      role: 1
    };
  
    try {
      const response = await fetch('http://46.37.122.105:89/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log('Registration successful:', result);
        alert('Registration successful!');
        navigate('/'); // redirect to login page
      } else {
        const errorData = await response.json();
        console.error('Registration failed:', errorData);
        alert('Registration failed. Please check your details.');
      }
    } catch (error) {
      console.error('API error:', error);
      alert('An error occurred while registering. Try again later.');
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
            <Avatar
              src={landNestLogo}
              sx={{
                width: 100,
                height: 100,
                mb: 2,
                mx: 'auto',
                boxShadow: '0 0 10px #ffd700',
              }}
            />
            <Typography variant="h5" sx={{ color: '#f7e896', fontWeight: 600, mb: 2 }}>
              Create an Account
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
                label="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                label="Email Address"
                type="email"
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
                label="Phone Number"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
                label="State"
                value={state}
                onChange={(e) => setState(e.target.value)}
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
                label="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
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
                        sx={{ color: 'rgb(252, 232, 118)' }}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{ style: { color: '#ccc' } }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="Confirm Password"
                type={showPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
                        sx={{ color: 'rgb(249, 229, 116)' }}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{ style: { color: ' #ccc' } }}
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
                Register
              </Button>
              <Box display="flex" justifyContent="space-between">
                <MUILink component={Link} to="/login" variant="body2" sx={{ color: 'rgb(250, 231, 121)' }}>
                  Already have an account? Login
                </MUILink>
              </Box>
            </Box>
          </Paper>
        </Container>
      </Box>
    </Fade>
  );
};

export default RegisterPage;
