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
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Button,
  Grid,
  Divider,
  Tooltip
} from '@mui/material';
import {
  FavoriteBorder,
  Share,
  ThumbUpAltOutlined,
  Call,
  LocationOn
} from '@mui/icons-material';
import buildingImage from '../Images/duplex-house.webp';
import buildingImage2 from '../Images/Leasebuilding.png';
import BottomNavbar from '../sharvani/BottomNavbar';

const PropertyCard = () => {
  const navigate = useNavigate();

  const propertyData = [
    {
      id: 1,
      title: 'Plot For Lease in Btm Layout 2nd Stage',
      location: '16th Main Road, BTM layout 2nd...',
      price: '₹3.25 Cr/m',
      date: '01-04-2025',
      facing: 'East',
      area: '1600 sq ft',
      dimensions: '40×40',
      listedBy: 'Owner/Agent',
      image: buildingImage
    },
    {
      id: 2,
      title: 'Commercial Plot for Lease near Silk Board',
      location: 'Silk Board Junction, Bangalore...',
      price: '₹2.75 Cr/m',
      date: '02-04-2025',
      facing: 'North',
      area: '1400 sq ft',
      dimensions: '35×40',
      listedBy: 'Builder',
      image: buildingImage2
    }
  ];

  const handleCardClick = (property) => {
    navigate(`/lease_description/${property.id}`, { state: property });
  };

  return (
    <>
      {propertyData.map((property) => (
        <Card
          key={property.id}
          sx={{
            mb: 4,
            borderRadius: 4,
            bgcolor: '#ffffff',
            boxShadow: 3,
            transition: 'transform 0.2s ease-in-out',
            '&:hover': {
              transform: 'scale(1.015)',
              boxShadow: 6
            },
            mx: 2
          }}
          onClick={() => handleCardClick(property)}
        >
          <Box position="relative">
            <CardMedia
              component="img"
              height="200"
              image={property.image}
              alt="Property"
              sx={{ borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
            />
            <Box sx={{ position: 'absolute', top: 8, right: 8, display: 'flex', gap: 1 }}>
              <Tooltip title="Add to Wishlist">
                <IconButton sx={{ bgcolor: 'white', boxShadow: 1 }}>
                  <FavoriteBorder />
                </IconButton>
              </Tooltip>
              <Tooltip title="Share">
                <IconButton sx={{ bgcolor: 'white', boxShadow: 1 }}>
                  <Share />
                </IconButton>
              </Tooltip>
            </Box>
            <Box sx={{ position: 'absolute', bottom: 8, right: 8 }}>
              <Tooltip title="Like">
                <IconButton sx={{ bgcolor: 'white', boxShadow: 1 }}>
                  <ThumbUpAltOutlined />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>

          <CardContent sx={{ p: 2.5 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              {property.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={1}>
              {property.location}
            </Typography>

            <Grid container justifyContent="space-between" alignItems="center">
              <Typography variant="subtitle1" fontWeight="bold" color="primary">
                {property.price}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Listed on: {property.date}
              </Typography>
            </Grid>

            <Box display="flex" alignItems="center" mt={2}>
              <LocationOn fontSize="small" color="action" />
              <Typography variant="body2" color="text.primary" ml={0.5}>
                Location Verified
              </Typography>
              <Box sx={{ flexGrow: 1 }} />
              <Button
                size="small"
                variant="outlined"
                color="success"
                startIcon={<Call />}
                sx={{ textTransform: 'none' }}
              >
                Call 
              </Button>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Grid
              container
              sx={{
                border: '1px solid #e0e0e0',
                borderRadius: 2,
                overflow: 'hidden'
              }}
            >
              <Grid item xs={4}>
                <Box sx={{ borderRight: '1px solid #e0e0e0', p: 1.5, textAlign: 'center' }}>
                  <Typography variant="caption" color="text.secondary">
                    Facing
                  </Typography>
                  <Typography variant="body2" fontWeight="bold">
                    {property.facing}
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={4}>
                <Box sx={{ borderRight: '1px solid #e0e0e0', p: 1.5, textAlign: 'center' }}>
                  <Typography variant="caption" color="text.secondary">
                    Area ({property.dimensions})
                  </Typography>
                  <Typography variant="body2" fontWeight="bold">
                    {property.area}
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={4}>
                <Box sx={{ p: 1.5, textAlign: 'center' }}>
                  <Typography variant="caption" color="text.secondary">
                    Listed By
                  </Typography>
                  <Typography variant="body2" fontWeight="bold">
                    {property.listedBy}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}
      <BottomNavbar />
    </>
  );
};

export default PropertyCard;

