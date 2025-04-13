// import React from 'react';
// import {
//   Box,
//   Card,
//   CardContent,
//   CardMedia,
//   Typography,
//   IconButton,
//   Button,
//   Grid,
//   Divider
// } from '@mui/material';
// import {
//   FavoriteBorder,
//   Share,
//   ThumbUpAltOutlined,
//   Call,
//   LocationOn
// } from '@mui/icons-material';
// import buildingImage from '../Images/duplex-house.webp'; // First image
// import buildingImage2 from '../Images/Leasebuilding.png'; // Second image
// import BottomNavbar from '../sharvani/BottomNavbar'; // ✅ Import the navbar

// const PropertyCard = () => {
//   return (
//     <>
//       {[1, 2].map((item, index) => {
//         const imageToUse = index === 1 ? buildingImage2 : buildingImage;

//         return (
//           <Card key={index} sx={{ mb: 3, borderRadius: 3, bgcolor: '#f9f9f9' }}>
//             <Box position="relative">
//               <CardMedia
//                 component="img"
//                 height="180"
//                 image={imageToUse}
//                 alt="Property"
//               />
//               <Box sx={{ position: 'absolute', top: 8, right: 8, display: 'flex', gap: 1 }}>
//                 <IconButton sx={{ bgcolor: 'white' }}><FavoriteBorder /></IconButton>
//                 <IconButton sx={{ bgcolor: 'white' }}><Share /></IconButton>
//               </Box>
//               <Box sx={{ position: 'absolute', bottom: 8, right: 8 }}>
//                 <Button
//                   variant="contained"
//                   size="small"
//                   color="primary"
//                   startIcon={<ThumbUpAltOutlined />}
//                   sx={{ borderRadius: 3 }}
//                 />
//               </Box>
//             </Box>

//             <CardContent>
//               <Typography variant="subtitle1" fontWeight="bold">
//                 Plot For Lease in Btm Layout 2nd Stage
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 16th Main Road, BTM layout 2nd...
//               </Typography>
//               <Grid container justifyContent="space-between" alignItems="center" mt={1}>
//                 <Typography variant="subtitle1" fontWeight="bold">3.25 cr/m</Typography>
//                 <Typography variant="caption" color="text.secondary">Date: 01-04-2025</Typography>
//               </Grid>
//               <Box display="flex" alignItems="center" mt={1}>
//                 <LocationOn fontSize="small" color="action" />
//                 <Typography variant="body2" color="text.primary">Location</Typography>
//                 <Box sx={{ flexGrow: 1 }} />
//                 <Button size="small" variant="contained" color="success" startIcon={<Call />}>Call</Button>
//               </Box>
//               <Divider sx={{ my: 2 }} />
//               <Grid container columnSpacing={1} textAlign="center" alignItems="stretch" wrap="nowrap">
//                 <Grid item xs>
//                   <Box
//                     sx={{
//                       p: 1,
//                       height: '100%',
//                       ml: 2,
//                       width: '87%',
//                       boxShadow: 2,
//                       borderRadius: 2,
//                       display: 'flex',
//                       flexDirection: 'column',
//                       justifyContent: 'center',
//                       alignItems: 'center',
//                     }}
//                   >
//                     <Typography variant="body2" color="text.secondary">Facing</Typography>
//                     <Typography variant="body2" fontWeight="bold">East</Typography>
//                   </Box>
//                 </Grid>

//                 <Grid item xs>
//                   <Box
//                     sx={{
//                       p: 1,
//                       height: '100%',
//                       width: '100%',
//                       boxShadow: 2,
//                       ml: 2,
//                       borderRadius: 2,
//                       cursor: 'pointer',
//                       display: 'flex',
//                       flexDirection: 'column',
//                       justifyContent: 'center',
//                       alignItems: 'center',
//                     }}
//                   >
//                     <Typography variant="body2" color="text.secondary">Area (40×40)</Typography>
//                     <Typography
//                       variant="body2"
//                       fontWeight="bold"
//                       color="primary"
//                       sx={{ textDecoration: 'underline' }}
//                     >
//                       1600 sq ft
//                     </Typography>
//                   </Box>
//                 </Grid>

//                 <Grid item xs>
//                   <Box
//                     sx={{
//                       p: 1,
//                       height: '100%',
//                       width: '100%',
//                       ml: 2,
//                       boxShadow: 2,
//                       borderRadius: 2,
//                       display: 'flex',
//                       flexDirection: 'column',
//                       justifyContent: 'center',
//                       alignItems: 'center',
//                     }}
//                   >
//                     <Typography
//                       variant="body2"
//                       color="text.secondary"
//                       display="flex"
//                       alignItems="center"
//                       gap={0.5}
//                     >
//                       <LocationOn fontSize="small" color="action" /> Listed by
//                     </Typography>
//                     <Typography variant="body2" fontWeight="bold">Owner/Agent</Typography>
//                   </Box>
//                 </Grid>
//               </Grid>
//             </CardContent>
//           </Card>
//         );
//       })}

//       <BottomNavbar /> {/* ✅ Bottom navbar added here */}
//     </>
//   );
// };

// export default PropertyCard;


import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Button,
  Grid,
  Divider
} from '@mui/material';
import {
  FavoriteBorder,
  Share,
  ThumbUpAltOutlined,
  Call,
  LocationOn
} from '@mui/icons-material';
import buildingImage from '../Images/duplex-house.webp'; // First image
import buildingImage2 from '../Images/Leasebuilding.png'; // Second image
import BottomNavbar from '../sharvani/BottomNavbar'; // ✅ Import the navbar

const PropertyCard = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleCardClick = () => {
    navigate('/lease_description/123'); // Replace '123' with the actual ID of the property, if needed
  };

  return (
    <>
      {[1, 2].map((item, index) => {
        const imageToUse = index === 1 ? buildingImage2 : buildingImage;

        return (
          <Card 
            key={index} 
            sx={{ mb: 3, borderRadius: 3, bgcolor: '#f9f9f9' }} 
            onClick={handleCardClick} // Add click handler to the Card
          >
            <Box position="relative">
              <CardMedia
                component="img"
                height="180"
                image={imageToUse}
                alt="Property"
              />
              <Box sx={{ position: 'absolute', top: 8, right: 8, display: 'flex', gap: 1 }}>
                <IconButton sx={{ bgcolor: 'white' }}><FavoriteBorder /></IconButton>
                <IconButton sx={{ bgcolor: 'white' }}><Share /></IconButton>
              </Box>
              <Box sx={{ position: 'absolute', bottom: 8, right: 8 }}>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  startIcon={<ThumbUpAltOutlined />}
                  sx={{ borderRadius: 3 }}
                />
              </Box>
            </Box>

            <CardContent>
              <Typography variant="subtitle1" fontWeight="bold">
                Plot For Lease in Btm Layout 2nd Stage
              </Typography>
              <Typography variant="body2" color="text.secondary">
                16th Main Road, BTM layout 2nd...
              </Typography>
              <Grid container justifyContent="space-between" alignItems="center" mt={1}>
                <Typography variant="subtitle1" fontWeight="bold">3.25 cr/m</Typography>
                <Typography variant="caption" color="text.secondary">Date: 01-04-2025</Typography>
              </Grid>
              <Box display="flex" alignItems="center" mt={1}>
                <LocationOn fontSize="small" color="action" />
                <Typography variant="body2" color="text.primary">Location</Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Button size="small" variant="contained" color="success" startIcon={<Call />}>Call</Button>
              </Box>
              <Divider sx={{ my: 2 }} />
              <Grid container columnSpacing={1} textAlign="center" alignItems="stretch" wrap="nowrap">
                <Grid item xs>
                  <Box
                    sx={{
                      p: 1,
                      height: '100%',
                      ml: 2,
                      width: '87%',
                      boxShadow: 2,
                      borderRadius: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Typography variant="body2" color="text.secondary">Facing</Typography>
                    <Typography variant="body2" fontWeight="bold">East</Typography>
                  </Box>
                </Grid>

                <Grid item xs>
                  <Box
                    sx={{
                      p: 1,
                      height: '100%',
                      width: '100%',
                      boxShadow: 2,
                      ml: 2,
                      borderRadius: 2,
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Typography variant="body2" color="text.secondary">Area (40×40)</Typography>
                    <Typography
                      variant="body2"
                      fontWeight="bold"
                      color="primary"
                      sx={{ textDecoration: 'underline' }}
                    >
                      1600 sq ft
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs>
                  <Box
                    sx={{
                      p: 1,
                      height: '100%',
                      width: '100%',
                      ml: 2,
                      boxShadow: 2,
                      borderRadius: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      display="flex"
                      alignItems="center"
                      gap={0.5}
                    >
                      <LocationOn fontSize="small" color="action" /> Listed by
                    </Typography>
                    <Typography variant="body2" fontWeight="bold">Owner/Agent</Typography>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        );
      })}

      <BottomNavbar /> {/* ✅ Bottom navbar added here */}
    </>
  );
};

export default PropertyCard;
