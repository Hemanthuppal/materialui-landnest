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


import React, { useState } from 'react';
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
  Tooltip,
  Paper,
  BottomNavigation,
  BottomNavigationAction
} from '@mui/material';
import {
  FavoriteBorder,
  Favorite,
  Share,
  ThumbUpAltOutlined,
  ThumbUpAlt,
  Call,
  LocationOn,
  Home as HomeIcon,
  List as ListIcon,
  Favorite as FavoriteIcon,
  Mail as MailIcon
} from '@mui/icons-material';
import buildingImage from '../Images/duplex-house.webp';
import buildingImage2 from '../Images/Leasebuilding.png';
import CustomSearchBar from './CustomSearchBar';
import CustomBottomNav from './CustomBottomNav';

const PropertyCard = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [saved, setSaved] = useState(() => {
    const stored = localStorage.getItem('savedLease');
    return stored ? JSON.parse(stored) : [];
  });
  const [likedCards, setLikedCards] = useState({});

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) navigate('/dashboard');
    if (newValue === 1) navigate('/lease_details');
    if (newValue === 2) navigate('/lease_save');
    if (newValue === 3) navigate('/inboxlist');
  };

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

  const toggleSave = (property) => {
    const isSaved = saved.find((p) => p.id === property.id);
    let updated;
    if (isSaved) {
      updated = saved.filter((p) => p.id !== property.id);
    } else {
      updated = [...saved, property];
    }
    setSaved(updated);
    localStorage.setItem('savedLease', JSON.stringify(updated));
  };

  const isSaved = (property) => saved.some((p) => p.id === property.id);

  const toggleLike = (id) => {
    setLikedCards((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredProperties = propertyData.filter((property) =>
    property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    property.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
    <Box
        sx={{ 
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          bgcolor: '#fff', // background to cover content underneath
          px: 1,
          py: 1,
          backgroundColor: 'rgb(239, 231, 221)'
        }}
      >
      <CustomSearchBar value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      </Box>
      <Box sx={{ pb: 10, backgroundColor: 'rgb(239, 231, 221)'}}>
        {filteredProperties.map((property) => (
          <Card
            key={property.id}
            sx={{
              mb: 4,
              mx: 2,
              borderRadius: 4,
              boxShadow: 3,
              transition: 'transform 0.2s ease-in-out',
              '&:hover': { transform: 'scale(1.015)', boxShadow: 6 }
            }}
            onClick={(e) => {
              const isButtonClick = e.target.closest('button') || e.target.closest('svg');
              if (!isButtonClick) {
                navigate('/lease_description', { state: { property } });
              }
            }}
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
                  <IconButton
                    sx={{ bgcolor: 'white', boxShadow: 1 }}
                    onClick={() => toggleSave(property)}
                  >
                    {isSaved(property) ? <Favorite color="error" /> : <FavoriteBorder />}
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
                  <IconButton
                    sx={{
                      bgcolor: 'white',
                      boxShadow: 1,
                      color: likedCards[property.id] ? 'blue' : 'default'
                    }}
                    onClick={() => toggleLike(property.id)}
                  >
                    {likedCards[property.id] ? <ThumbUpAlt /> : <ThumbUpAltOutlined />}
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

              <Box sx={{ display: 'flex', border: '1px solid black', borderRadius: 2, overflow: 'hidden' }}>
                {[ 
                  { label: 'Facing', value: property.facing },
                  { label: `Area (${property.dimensions})`, value: property.area },
                  { label: 'Listed By', value: property.listedBy }
                ].map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      flex: 1,
                      p: 1.5,
                      textAlign: 'center',
                      borderRight: index < 2 ? '1px solid black' : 'none'
                    }}
                  >
                    <Typography variant="caption" color="text.secondary">{item.label}</Typography>
                    <Typography variant="body2" fontWeight="bold">{item.value}</Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>

      
        <CustomBottomNav />
      
    </>
  );
};

export default PropertyCard;