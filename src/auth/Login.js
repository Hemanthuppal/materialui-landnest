// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import landNestLogo from '../../src/assets/LandNestLogo.jpg';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     try {
//       const response = await fetch('http://46.37.122.105:89/login/', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ identifier: email, password }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         if (rememberMe) {
//           sessionStorage.setItem('isAuthenticated', 'true');
//           sessionStorage.setItem('user_id', data.user_id);
//         }
//         navigate('/dashboard');
//       } else {
//         setError(data.message || 'Invalid email or password');
//       }
//     } catch (err) {
//       console.error(err);
//       setError('Something went wrong. Please try again later.');
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.card}>
//         <img src={landNestLogo} alt="Land Nest" style={styles.logo} />
//         <h2 style={styles.title}>Welcome Back</h2>
//         {error && <div style={styles.error}>{error}</div>}

//         <form onSubmit={handleSubmit} style={styles.form}>
//           <div style={styles.inputGroup}>
//             <label style={styles.label}>Email</label>
//             <input
//               type="email"
//               placeholder="you@example.com"
//               style={styles.input}
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div style={styles.inputGroup}>
//             <label style={styles.label}>Password</label>
//             <div style={styles.passwordContainer}>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="••••••••"
//                 style={styles.input}
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 style={styles.showPasswordBtn}
//               >
//                 {showPassword ? '👁️' : '👁️‍🗨️'}
//               </button>
//             </div>
//           </div>

//           <div style={styles.rememberMe}>
//             <input
//               type="checkbox"
//               checked={rememberMe}
//               onChange={() => setRememberMe(!rememberMe)}
//               style={styles.checkbox}
//             />
//             <label style={styles.rememberLabel}>Remember Me</label>
//           </div>

//           <button type="submit" style={styles.loginButton}>
//             Sign In
//           </button>

//           <div style={styles.links}>
//             <Link to="/register" style={styles.link}>Create an account</Link>
//             <Link to="/forgot-password" style={styles.link}>Forgot password?</Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     minHeight: '100vh',
//     backgroundImage: 'url("https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=1500&q=80")',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: '20px',
//   },
//   card: {
//     background: 'rgba(255, 255, 255, 0.15)',
//     borderRadius: '16px',
//     padding: '40px 30px',
//     backdropFilter: 'blur(10px)',
//     WebkitBackdropFilter: 'blur(10px)',
//     boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
//     textAlign: 'center',
//     maxWidth: '400px',
//     width: '100%',
//     color: '#fff',
//   },
//   logo: {
//     width: '180px',
//     borderRadius: '10px',
//     marginBottom: '20px',
//   },
//   title: {
//     fontSize: '26px',
//     marginBottom: '25px',
//     fontWeight: '600',
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '20px',
//   },
//   inputGroup: {
//     textAlign: 'left',
//   },
//   label: {
//     fontSize: '14px',
//     marginBottom: '6px',
//     color: '#e0e0e0',
//   },
//   input: {
//     width: '90%',
//     padding: '12px 15px',
//     borderRadius: '8px',
//     border: '1px solid rgba(255, 255, 255, 0.3)',
//     background: 'rgba(255, 255, 255, 0.1)',
//     color: '#fff',
//     fontSize: '14px',
//     outline: 'none',
//     transition: '0.3s border',
//   },
//   passwordContainer: {
//     position: 'relative',
//   },
//   showPasswordBtn: {
//     position: 'absolute',
//     right: '10px',
//     top: '9px',
//     background: 'none',
//     border: 'none',
//     color: '#fff',
//     cursor: 'pointer',
//     fontSize: '18px',
//   },
//   rememberMe: {
//     display: 'flex',
//     alignItems: 'center',
//   },
//   checkbox: {
//     marginRight: '8px',
//   },
//   rememberLabel: {
//     fontSize: '14px',
//     color: '#ddd',
//   },
//   loginButton: {
//     padding: '12px',
//     borderRadius: '8px',
//     border: 'none',
//     backgroundColor: '#00c896',
//     color: '#fff',
//     fontSize: '16px',
//     fontWeight: '600',
//     cursor: 'pointer',
//     transition: 'background 0.3s',
//   },
//   links: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     marginTop: '20px',
//     fontSize: '13px',
//   },
//   link: {
//     color: '#ffffff',
//     textDecoration: 'underline',
//     fontWeight: '500',
//   },
//   error: {
//     backgroundColor: 'rgba(255, 0, 0, 0.1)',
//     color: '#ff6b6b',
//     padding: '10px',
//     borderRadius: '6px',
//     fontSize: '14px',
//     marginBottom: '20px',
//   },
// };

// export default Login;

// Login.jsx
// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import './Login.css';
// import landNestLogo from '../../src/assets/LandNestLogo.jpg';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     try {
//       const response = await fetch('http://46.37.122.105:89/login/', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ identifier: email, password }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         if (rememberMe) {
//           sessionStorage.setItem('isAuthenticated', 'true');
//           sessionStorage.setItem('user_id', data.user_id);
//         }
//         navigate('/dashboard');
//       } else {
//         setError(data.message || 'Invalid email or password');
//       }
//     } catch (err) {
//       console.error(err);
//       setError('Something went wrong. Please try again later.');
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         <img src={landNestLogo} alt="Land Nest" className="login-logo" />
//         <h2 className="login-title">Welcome Back</h2>
//         {error && <div className="login-error">{error}</div>}

//         <form onSubmit={handleSubmit} className="login-form">
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
//             <div className="password-wrapper">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="••••••••"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="toggle-password"
//               >
//                 {showPassword ? '👁️' : '👁️‍🗨️'}
//               </button>
//             </div>
//           </div>

//           <div className="remember-me">
//             <input
//               type="checkbox"
//               checked={rememberMe}
//               onChange={() => setRememberMe(!rememberMe)}
//             />
//             <label>Remember Me</label>
//           </div>

//           <button type="submit" className="login-btn">Sign In</button>

//           <div className="login-links">
//             <Link to="/register">Create an account</Link>
//             <Link to="/forgot-password">Forgot password?</Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;


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
      const response = await fetch('http://46.37.122.105:89/login/', {
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
