// import React, { useState } from 'react';
// import {
//   Box,
//   Button,
//   Container,
//   CssBaseline,
//   TextField,
//   FormControlLabel,
//   Checkbox,
//   Typography,
//   InputAdornment,
//   IconButton,
//   Paper,
//   Fade,
//   Avatar
// } from '@mui/material';
// import { Visibility, VisibilityOff, Lock } from '@mui/icons-material';
// import { useNavigate } from 'react-router-dom';
// import landNestLogo from '../../../assets/LandNestLogo.jpg';

// const AdminLoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [rememberMe, setRememberMe] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError('');
    
//     if (email == 'admin@gmail.com' && password == 'admin@123') {
//       navigate('/view'); 
//     } else {
//       setError('Invalid email or password');
//     }
//   };

//   return (
//     <Fade in timeout={700}>
//       <Box
//         sx={{
//           minHeight: '100vh',
//           background: 'linear-gradient(135deg, #0d0d25, #000)',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           py: 6,
//         }}
//       >
//         <Container maxWidth="xs">
//           <CssBaseline />
//           <Paper
//             elevation={10}
//             sx={{
//               p: 4,
//               borderRadius: 4,
//               background: 'rgba(255, 255, 255, 0.02)',
//               border: '1px solid rgba(255, 215, 0, 0.3)',
//               backdropFilter: 'blur(10px)',
//               textAlign: 'center',
//               color: '#fff',
//             }}
//           >
//             <Avatar
//               src={landNestLogo}
//               sx={{
//                 width: 100,
//                 height: 100,
//                 mb: 2,
//                 mx: 'auto',
//                 boxShadow: '0 0 10px #ffd700',
//               }}
//             />
//             <Typography variant="h5" sx={{ color: '#f7e896', fontWeight: 600, mb: 2 }}>
//               Admin Portal
//             </Typography>
//             {error && (
//               <Typography color="error" sx={{ fontSize: 14, mb: 2 }}>
//                 {error}
//               </Typography>
//             )}
//             <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 label="Email Address"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 InputProps={{
//                   sx: {
//                     backgroundColor: 'rgba(255,255,255,0.05)',
//                     borderRadius: 2,
//                     color: 'white',
//                   },
//                 }}
//                 InputLabelProps={{ style: { color: '#ccc' } }}
//               />
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 label="Password"
//                 type={showPassword ? 'text' : 'password'}
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 InputProps={{
//                   sx: {
//                     backgroundColor: 'rgba(255,255,255,0.05)',
//                     borderRadius: 2,
//                     color: 'white',
//                   },
//                   endAdornment: (
//                     <InputAdornment position="end">
//                       <IconButton
//                         onClick={() => setShowPassword(!showPassword)}
//                         edge="end"
//                         sx={{ color: 'rgb(248, 227, 111)' }}
//                       >
//                         {showPassword ? <VisibilityOff /> : <Visibility />}
//                       </IconButton>
//                     </InputAdornment>
//                   ),
//                 }}
//                 InputLabelProps={{ style: { color: '#ccc' } }}
//               />
//               <FormControlLabel
//                 control={
//                   <Checkbox
//                     checked={rememberMe}
//                     onChange={() => setRememberMe(!rememberMe)}
//                     sx={{ color: ' #f7e896' }}
//                   />
//                 }
//                 label={<Typography variant="body2" sx={{ color: '#ccc' }}>Remember me</Typography>}
//               />
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 startIcon={<Lock />}
//                 sx={{
//                   mt: 3,
//                   mb: 2,
//                   background: 'linear-gradient(135deg, #f1e57c, #e6ce45)',
//                   color: '#000',
//                   fontWeight: 'bold',
//                   '&:hover': {
//                     background: 'linear-gradient(135deg, #ffe85c, #f0d53e)',
//                   },
//                 }}
//               >
//                 Login
//               </Button>
//             </Box>
//           </Paper>
//         </Container>
//       </Box>
//     </Fade>
//   );
// };

// export default AdminLoginPage;














// import React, { useState } from 'react';
// import {
//   Box,
//   Button,
//   TextField,
//   FormControlLabel,
//   Checkbox,
//   Typography,
//   InputAdornment,
//   IconButton,
//   Paper,
//   Fade,
//   Divider,
//   Grid
// } from '@mui/material';
// import { Visibility, VisibilityOff, Lock, AdminPanelSettings } from '@mui/icons-material';
// import { useNavigate } from 'react-router-dom';
// import landNestLogo from '../../../assets/LandNestLogo.jpg';
// const AdminLoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [rememberMe, setRememberMe] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError('');
    
//     if (email == 'admin@gmail.com' && password == 'admin@123') {
//       navigate('/view'); 
//     } else {
//       setError('Invalid email or password');
//     }
//   };

//   return (
//     <Fade in timeout={700}>
//       <Box
//         sx={{
//           minHeight: '100vh',
//           // background: `
//           //   linear-gradient(145deg, rgba(232,224,208,0.95), rgba(216,204,186,0.95)),
//           //   url('https://www.transparenttextures.com/patterns/cream-paper.png')
//           // `,
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           py: 6,
//           padding: 4
//         }}
//       >
//      <Paper
//   elevation={10}
//   sx={{
//     width: '80%',
//     maxWidth: 1000,
//     borderRadius: 4,
//     overflow: 'hidden',
//     display: 'flex',
//     height: '70vh',
//     boxShadow: `
//       0 0 15px rgba(0, 0, 0, 0.2),
//       0 0 30px rgba(0, 0, 0, 0.1)
//     `,
//     transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//     '&:hover': {
//       transform: 'translateY(-5px)',
//       boxShadow: `
//         0 0 25px rgba(0, 0, 0, 0.25),
//         0 0 45px rgba(0, 0, 0, 0.15)
//       `
//     }
//   }}
// >
//           {/* Left Side - Branding */}
//           <Box
//            sx={{
//             width: '50%',
//             background: 'linear-gradient(135deg, #0d0d25, #000)',
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             justifyContent: 'center',
//             p: 4,
//             position: 'relative',
//             '&::after': {
//               content: '""',
//               position: 'absolute',
//               right: 0,
//               top: '50%',
//               transform: 'translateY(-50%)',
//               width: 0,
//               height: 0,
//               borderTop: '20px solid transparent',
//               borderBottom: '20px solid transparent',
//               borderLeft: '20px solid #0d0d25'
//             }
//           }}
//           >
//             <Box
//               component="img"
//               src={landNestLogo}
//               sx={{
//                 width: 300,
//                 height: 250,
//                 mb: 4,
//                 borderRadius: '50%',
//                 border: '4px solid #f7e896',
//                 boxShadow: '0 0 20px rgba(247, 232, 150, 0.5)'
//               }}
//             />
//             <Typography variant="h4" sx={{ color: '#f7e896', fontWeight: 600, mb: 1 }}>
//               LANDNEST
//             </Typography>
//             <Typography variant="subtitle1" sx={{ color: 'rgba(255,255,255,0.8)', mb: 4 }}>
//               Property Management System
//             </Typography>
//             {/* <Divider sx={{ width: '60%', bgcolor: 'rgba(255,255,255,0.3)', my: 2 }} />
//             <Typography variant="h6" sx={{ color: '#f7e896', mt: 4 }}>
//               Admin Portal
//             </Typography>
//             <AdminPanelSettings sx={{ color: '#f7e896', fontSize: 40, mt: 2 }} /> */}
//           </Box>

//           {/* Right Side - Login Form */}
//           <Box
//             sx={{
//               width: '50%',
//               p: 6,
//               display: 'flex',
//               flexDirection: 'column',
//               justifyContent: 'center',
//               background: `
//               linear-gradient(145deg, rgba(232,224,208,0.95), rgba(216,204,186,0.95)),
//               url('https://www.transparenttextures.com/patterns/cream-paper.png')
//             `,              backdropFilter: 'blur(5px)'
//             }}
//           >
//             <Typography variant="h4" sx={{  fontWeight: 600, mb: 3, textAlign: 'center' }}>
//                Login
//             </Typography>
            
//             {error && (
//               <Typography color="error" sx={{ fontSize: 14, mb: 2, textAlign: 'center' }}>
//                 {error}
//               </Typography>
//             )}

//             <Box component="form" onSubmit={handleSubmit}>
//               <TextField
//                 fullWidth
//                 label="Email Address"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 sx={{ mb: 3 }}
//                 InputProps={{
//                   sx: {
//                     borderRadius: 2,
//                     backgroundColor: 'rgba(255,255,255,0.8)'
//                   }
//                 }}
//               />
              
//               <TextField
//                 fullWidth
//                 label="Password"
//                 type={showPassword ? 'text' : 'password'}
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 sx={{ mb: 1 }}
//                 InputProps={{
//                   sx: {
//                     borderRadius: 2,
//                     backgroundColor: 'rgba(255,255,255,0.8)'
//                   },
//                   endAdornment: (
//                     <InputAdornment position="end">
//                       <IconButton
//                         onClick={() => setShowPassword(!showPassword)}
//                         edge="end"
//                         sx={{ color: '' }}
//                       >
//                         {showPassword ? <VisibilityOff /> : <Visibility />}
//                       </IconButton>
//                     </InputAdornment>
//                   ),
//                 }}
//               />

//               <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
//                 <FormControlLabel
//                   control={
//                     <Checkbox
//                       checked={rememberMe}
//                       onChange={() => setRememberMe(!rememberMe)}
//                       sx={{ color: '#2e7d32' }}
//                     />
//                   }
//                   label={<Typography variant="body2">Remember me</Typography>}
//                 />
//               </Box>

           
//                   <Button
//                               type="submit"
//                               fullWidth
//                               variant="contained"
//                               startIcon={<Lock />}
//                               sx={{
//                                 mt: 3,
//                                 mb: 2,
//                                 background: 'linear-gradient(135deg, #f1e57c, #e6ce45)',
//                                 color: '#000',
//                                 fontWeight: 'bold',
//                                 '&:hover': {
//                                   background: 'linear-gradient(135deg, #ffe85c, #f0d53e)',
//                                 },
//                               }}
//                             >
//                 Login to Dashboard
//                 </Button>

//               <Typography variant="body2" sx={{ color: 'text.secondary', mt: 3, textAlign: 'center' }}>
//                 Restricted access. Unauthorized entry prohibited.
//               </Typography>
//             </Box>
//           </Box>
//         </Paper>
//       </Box>
//     </Fade>
//   );
// };

// export default AdminLoginPage;












import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Typography,
  InputAdornment,
  IconButton,
  Paper,
  Fade,
  Divider,
  Grid,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { Visibility, VisibilityOff, Lock, AdminPanelSettings } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import landNestLogo from '../../../assets/LandNestLogo.jpg';

const AdminLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (email == 'admin@gmail.com' && password == 'admin@123') {
      navigate('/view'); 
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <Fade in timeout={700}>
      <Box
        sx={{
          marginTop:'50px',
          Height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          py: isMobile ? 2 : 6,
          px: isMobile ? 1 : 4,
          // background: `
          //   linear-gradient(145deg, rgba(232,224,208,0.95), rgba(216,204,186,0.95)),
          //   url('https://www.transparenttextures.com/patterns/cream-paper.png')
          // `,
        }}
      >
        <Paper
          elevation={isMobile ? 2 : 10}
          sx={{
            width: isMobile ? '100%' : isTablet ? '90%' : '80%',
            maxWidth: isMobile ? '100%' : 1000,
            borderRadius: isMobile ? 0 : 4,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            height: isMobile ? '100vh' : isTablet ? '80vh' : '70vh',
            boxShadow: isMobile ? 'none' : `
              0 0 15px rgba(0, 0, 0, 0.2),
              0 0 30px rgba(0, 0, 0, 0.1)
            `,
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: isMobile ? 'none' : 'translateY(-5px)',
              boxShadow: isMobile ? 'none' : `
                0 0 25px rgba(0, 0, 0, 0.25),
                0 0 45px rgba(0, 0, 0, 0.15)
              `
            }
          }}
        >
          {/* Left Side - Branding */}
          {!isMobile && (
            <Box
              sx={{
                width: isTablet ? '45%' : '50%',
                background: 'linear-gradient(135deg, #0d0d25, #000)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                p: isTablet ? 2 : 4,
                position: 'relative',
                '&::after': isTablet ? {} : {
                  content: '""',
                  position: 'absolute',
                  right: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: 0,
                  height: 0,
                  borderTop: '20px solid transparent',
                  borderBottom: '20px solid transparent',
                  borderLeft: '20px solid #0d0d25'
                }
              }}
            >
              <Box
                component="img"
                src={landNestLogo}
                sx={{
                  width: isTablet ? 200 : 300,
                  height: isTablet ? 170 : 250,
                  mb: isTablet ? 2 : 4,
                  borderRadius: '50%',
                  border: '4px solid #f7e896',
                  boxShadow: '0 0 20px rgba(247, 232, 150, 0.5)'
                }}
              />
              <Typography 
                variant={isTablet ? "h5" : "h4"} 
                sx={{ color: '#f7e896', fontWeight: 600, mb: 1 }}
              >
                LANDNEST
              </Typography>
              <Typography 
                variant={isTablet ? "body1" : "subtitle1"} 
                sx={{ color: 'rgba(255,255,255,0.8)', mb: isTablet ? 2 : 4 }}
              >
                Property Management System
              </Typography>
            </Box>
          )}

          {/* Right Side - Login Form */}
          <Box
            sx={{
              width: isMobile ? '100%' : isTablet ? '55%' : '50%',
              p: isMobile ? 3 : isTablet ? 4 : 6,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              background: `
                linear-gradient(145deg, rgba(232,224,208,0.95), rgba(216,204,186,0.95)),
                url('https://www.transparenttextures.com/patterns/cream-paper.png')
              `,
              backdropFilter: 'blur(5px)'
            }}
          >
            {isMobile && (
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
                <Box
                  component="img"
                  src={landNestLogo}
                  sx={{
                    width: 120,
                    height: 120,
                    borderRadius: '50%',
                    border: '3px solid #f7e896',
                    boxShadow: '0 0 15px rgba(247, 232, 150, 0.5)'
                  }}
                />
                <Typography 
                  variant="h5" 
                  sx={{ color: '#0d0d25', fontWeight: 600, mt: 2 }}
                >
                  LANDNEST
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ color: 'rgba(0,0,0,0.7)', mb: 2 }}
                >
                  Property Management System
                </Typography>
                <Divider sx={{ width: '80%', my: 1 }} />
              </Box>
            )}

            <Typography 
              variant={isMobile ? "h5" : "h4"} 
              sx={{ 
                fontWeight: 600, 
                mb: isMobile ? 2 : 3, 
                textAlign: 'center',
                color: isMobile ? '#0d0d25' : 'inherit'
              }}
            >
              Admin Login
            </Typography>
            
            {error && (
              <Typography 
                color="error" 
                sx={{ 
                  fontSize: 14, 
                  mb: 2, 
                  textAlign: 'center',
                  fontWeight: 'bold'
                }}
              >
                {error}
              </Typography>
            )}

            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Email Address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ mb: isMobile ? 2 : 3 }}
                size={isMobile ? "small" : "medium"}
                InputProps={{
                  sx: {
                    borderRadius: 2,
                    backgroundColor: 'rgba(255,255,255,0.8)'
                  }
                }}
              />
              
              <TextField
                fullWidth
                label="Password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{ mb: 1 }}
                size={isMobile ? "small" : "medium"}
                InputProps={{
                  sx: {
                    borderRadius: 2,
                    backgroundColor: 'rgba(255,255,255,0.8)'
                  },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                        size={isMobile ? "small" : "medium"}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={rememberMe}
                      onChange={() => setRememberMe(!rememberMe)}
                      sx={{ color: '#2e7d32' }}
                      size={isMobile ? "small" : "medium"}
                    />
                  }
                  label={<Typography variant={isMobile ? "body2" : "body1"}>Remember me</Typography>}
                />
              </Box>

              <Button
               disableRipple 
               disableElevation
                type="submit"
                fullWidth
                variant="contained"
                startIcon={<Lock />}
                sx={{
                  mt: isMobile ? 2 : 3,
                  mb: isMobile ? 1 : 2,
                  py: isMobile ? 1 : 1.5,
                  background: 'linear-gradient(135deg, #f1e57c, #e6ce45)',
                  color: '#000',
                  fontWeight: 'bold',
                  fontSize: isMobile ? '0.875rem' : '1rem',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #ffe85c, #f0d53e)',
                  },
                }}
              >
                {isMobile ? 'Login' : 'Login to Dashboard'}
              </Button>

              <Typography 
                variant={isMobile ? "caption" : "body2"} 
                sx={{ 
                  color: 'text.secondary', 
                  mt: isMobile ? 2 : 3, 
                  textAlign: 'center',
                  fontSize: isMobile ? '0.75rem' : '0.875rem'
                }}
              >
                Restricted access. Unauthorized entry prohibited.
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Fade>
  );
};

export default AdminLoginPage;