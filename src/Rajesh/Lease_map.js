// // lease_map.js
// import React, { useState } from 'react';
// import {
//   Box,
//   Typography,
//   Card,
//   Paper,
//   BottomNavigation,
//   BottomNavigationAction,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Button,
//   IconButton,
//   Chip,
//   Grid,
//   Divider,
//   Tooltip
// } from '@mui/material';

// import {
//   GoogleMap,
//   Marker,
//   useJsApiLoader
// } from '@react-google-maps/api';

// import { useNavigate } from 'react-router-dom';
// import SearchIcon from '@mui/icons-material/Search';
// import TuneIcon from '@mui/icons-material/Tune';
// import HomeIcon from '@mui/icons-material/Home';
// import ListIcon from '@mui/icons-material/List';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import MailIcon from '@mui/icons-material/Mail';
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// import { FavoriteBorder, Share, Call, LocationOn } from '@mui/icons-material';

// import buildingImage from '../Images/duplex-house.webp';
// import buildingImage2 from '../Images/Leasebuilding.png';

// const rentalTypes = [
//   "1BHK", "2BHK", "3BHK", "4+ BHK", "PLOT/LAND", "DUPLEX HOUSE",
//   "COMMERCIAL LAND", "COMMERCIAL BUILDING/ Space", "VILLA",
//   "PG-SCHOOL-OFFICE", "SHOPPING mall/shop"
// ];

// const GOOGLE_MAPS_API_KEY = "AIzaSyAZAU88Lr8CEkiFP_vXpkbnu1-g-PRigXU";

// const leaseProperties = [
//   {
//     id: 1,
//     title: 'Plot For Lease in Btm Layout 2nd Stage',
//     location: '16th Main Road, BTM layout 2nd...',
//     price: '₹3.25 Cr/m',
//     date: '01-04-2025',
//     facing: 'East',
//     area: '1600 sq ft',
//     dimensions: '40×40',
//     listedBy: 'Owner/Agent',
//     image: buildingImage
//   },
//   {
//     id: 2,
//     title: 'Commercial Plot for Lease near Silk Board',
//     location: 'Silk Board Junction, Bangalore...',
//     price: '₹2.75 Cr/m',
//     date: '02-04-2025',
//     facing: 'North',
//     area: '1400 sq ft',
//     dimensions: '35×40',
//     listedBy: 'Builder',
//     image: buildingImage2
//   }
// ];

// const Lease_map = () => {
//   const [open, setOpen] = useState(false);
//   const [selectedProperty, setSelectedProperty] = useState(null);
//   const navigate = useNavigate();
//   const [value, setValue] = useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//     if (newValue === 0) navigate('/dashboard');
//     if (newValue === 1) navigate('/lease_details');
//     if (newValue === 2) navigate('/lease_saves');
//     if (newValue === 3) navigate('/inbox');
//   };

//   const { isLoaded } = useJsApiLoader({
//     googleMapsApiKey: GOOGLE_MAPS_API_KEY
//   });

//   const containerStyle = {
//     width: '100%',
//     height: '500px'
//   };

//   const center = {
//     lat: 26.8467,
//     lng: 80.9462
//   };

//   const handleMarkerClick = (property) => {
//     setSelectedProperty(property);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setSelectedProperty(null);
//   };

//   const handleCardClick = (property) => {
//     navigate(`/lease_description/${property.id}`, { state: property });
//   };

//   return (
//     <Box sx={{ p: 2, pb: 7, maxWidth: 480, mx: "auto" }}>
//       <Card elevation={4} sx={{ p: 2 }}>
//         {/* Back + Search Bar */}
//         <Box
//           sx={{
//             display: 'flex',
//             alignItems: 'center',
//             backgroundColor: '#e0e0e0',
//             borderRadius: '10px',
//             py: 1.2,
//             px: 1,
//             mb: 2,
//           }}
//         >
//           <IconButton onClick={() => navigate(-1)}>
//             <ArrowBackIosNewIcon sx={{ fontSize: 20 }} />
//           </IconButton>

//           <Box
//             sx={{
//               flexGrow: 1,
//               backgroundColor: '#fff',
//               borderRadius: '20px',
//               display: 'flex',
//               alignItems: 'center',
//               px: 2,
//               height: 40,
//               mx: 1
//             }}
//           >
//             <Box sx={{ flexGrow: 1 }} />
//             <SearchIcon sx={{ fontSize: 20, color: '#666' }} />
//           </Box>

//           <IconButton>
//             <TuneIcon sx={{ fontSize: 20 }} />
//           </IconButton>
//         </Box>

//         {/* Property Rental Types */}
//         <Typography variant="subtitle1" sx={{ mb: 1 }}>Property Lease Type</Typography>
//         <Box
//           sx={{
//             display: 'flex',
//             gap: 1,
//             overflowX: 'auto',
//             whiteSpace: 'nowrap',
//             pb: 1,
//             mb: 2
//           }}
//         >
//           {rentalTypes.map((type, index) => (
//             <Chip key={index} label={type} variant="outlined" sx={{ flexShrink: 0 }} />
//           ))}
//         </Box>

//         {/* Google Map */}
//         {isLoaded ? (
//           <GoogleMap
//             mapContainerStyle={containerStyle}
//             center={center}
//             zoom={14}
//           >
//             {leaseProperties.map(property => (
//               <Marker
//                 key={property.id}
//                 position={{ lat: center.lat + (property.id * 0.002), lng: center.lng + (property.id * 0.002) }}
//                 onClick={() => handleMarkerClick(property)}
//               />
//             ))}
//           </GoogleMap>
//         ) : (
//           <Typography>Loading map...</Typography>
//         )}
//       </Card>

//       {/* Modal for Selected Lease Property */}
//       <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
//         <DialogTitle>Lease Property</DialogTitle>
//         <DialogContent dividers>
//           {selectedProperty && (
//             <Card
//               key={selectedProperty.id}
//               sx={{
//                 mb: 3,
//                 borderRadius: 4,
//                 bgcolor: '#ffffff',
//                 boxShadow: 3,
//                 transition: 'transform 0.2s ease-in-out',
//                 '&:hover': {
//                   transform: 'scale(1.015)',
//                   boxShadow: 6
//                 }
//               }}
//               onClick={() => handleCardClick(selectedProperty)}
//             >
//               <Box position="relative">
//                 <img
//                   src={selectedProperty.image}
//                   alt={selectedProperty.title}
//                   style={{
//                     width: '100%',
//                     height: 180,
//                     objectFit: 'cover',
//                     borderTopLeftRadius: 16,
//                     borderTopRightRadius: 16
//                   }}
//                 />
//                 <Box sx={{ position: 'absolute', top: 8, right: 8, display: 'flex', gap: 1 }}>
//                   <Tooltip title="Add to Wishlist">
//                     <IconButton sx={{ bgcolor: 'white', boxShadow: 1 }}>
//                       <FavoriteBorder />
//                     </IconButton>
//                   </Tooltip>
//                   <Tooltip title="Share">
//                     <IconButton sx={{ bgcolor: 'white', boxShadow: 1 }}>
//                       <Share />
//                     </IconButton>
//                   </Tooltip>
//                 </Box>
//               </Box>
//               <Box sx={{ p: 2 }}>
//                 <Typography variant="h6" fontWeight="bold">{selectedProperty.title}</Typography>
//                 <Typography variant="body2" color="text.secondary">{selectedProperty.location}</Typography>
//                 <Grid container justifyContent="space-between" alignItems="center" mt={1}>
//                   <Typography variant="subtitle1" fontWeight="bold" color="primary">
//                     {selectedProperty.price}
//                   </Typography>
//                   <Typography variant="caption" color="text.secondary">
//                     Listed on: {selectedProperty.date}
//                   </Typography>
//                 </Grid>
//                 <Box display="flex" alignItems="center" mt={2}>
//                   <LocationOn fontSize="small" color="action" />
//                   <Typography variant="body2" color="text.primary" ml={0.5}>
//                     Location Verified
//                   </Typography>
//                   <Box sx={{ flexGrow: 1 }} />
//                   <Button size="small" variant="outlined" color="success" startIcon={<Call />}>
//                     Call
//                   </Button>
//                 </Box>
//                 <Divider sx={{ my: 2 }} />
//                 <Grid container>
//                   <Grid item xs={4}>
//                     <Typography variant="caption" color="text.secondary">Facing</Typography>
//                     <Typography variant="body2">{selectedProperty.facing}</Typography>
//                   </Grid>
//                   <Grid item xs={4}>
//                     <Typography variant="caption" color="text.secondary">Area</Typography>
//                     <Typography variant="body2">{selectedProperty.area}</Typography>
//                   </Grid>
//                   <Grid item xs={4}>
//                     <Typography variant="caption" color="text.secondary">Dimensions</Typography>
//                     <Typography variant="body2">{selectedProperty.dimensions}</Typography>
//                   </Grid>
//                 </Grid>
//               </Box>
//             </Card>
//           )}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Close</Button>
//         </DialogActions>
//       </Dialog>

//       {/* Bottom Navigation */}
//       <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
//         <BottomNavigation value={value} onChange={handleChange} showLabels>
//           <BottomNavigationAction label="Home" icon={<HomeIcon />} />
//           <BottomNavigationAction label="List" icon={<ListIcon />} />
//           <BottomNavigationAction label="Saves" icon={<FavoriteIcon />} />
//           <BottomNavigationAction label="Inbox" icon={<MailIcon />} />
//         </BottomNavigation>
//       </Paper>
//     </Box>
//   );
// };

// export default Lease_map;

// Lease_Property_Map.js
import React, { useState } from "react";
import {
  Box,
  Typography,
  Chip,
  IconButton,
  Paper,
  BottomNavigation,
  BottomNavigationAction,
  Card,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MailIcon from "@mui/icons-material/Mail";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import leaseImage1 from '../Images/duplex-house.webp';
import leaseImage2 from '../Images/Leasebuilding.png';
import CustomSearchBar from './CustomSearchBar';
import ReUsableCard from '../sharvani/ReUsableCard';

const leaseTypes = [
  "Office",
  "Retail",
  "Industrial",
  "Warehouse",
  "Land",
  "Showroom",
];

const leaseProperties = [
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
    lat: 26.8467,
    lng: 80.9462,
    image:leaseImage1,
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
    lat: 26.8500,
    lng: 80.9500,
    image:leaseImage2,
  },
];

const GOOGLE_MAPS_API_KEY = "AIzaSyAZAU88Lr8CEkiFP_vXpkbnu1-g-PRigXU";

const Lease_Property_Map = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const [saved, setSaved] = useState(() => {
        const stored = localStorage.getItem('savedRent');
        return stored ? JSON.parse(stored) : [];
      });
    
      const [likedCards, setLikedCards] = useState({});

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) navigate("/dashboard");
    if (newValue === 1) navigate("/lease_details");
    if (newValue === 2) navigate("/lease_save");
    if (newValue === 3) navigate("/inboxlist");
  };

  const rentalTypes = [
    "1BHK", "2BHK", "3BHK", "4+ BHK", "PLOT/LAND", "DUPLEX HOUSE",
    "COMMERCIAL LAND", "COMMERCIAL BUILDING/ Space", "VILLA",
    "PG-SCHOOL-OFFICE", "SHOPPING mall/shop"
  ];

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  });

  const containerStyle = {
    width: "100%",
    height: "calc(100vh - 240px)",
  };

  const toggleSave = (property) => {
    const isSaved = saved.find((p) => p.id === property.id);
    let updated;

    if (isSaved) {
      updated = saved.filter((p) => p.id !== property.id);
    } else {
      updated = [...saved, property];
    }

    setSaved(updated);
    localStorage.setItem('savedRent', JSON.stringify(updated));
  };
  const isSaved = (property) => saved.some((p) => p.id === property.id);
  const toggleLike = (id) => {
    setLikedCards((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const center = { lat: 26.8467, lng: 80.9462 };

  
  return (
    <Box sx={{ pb: 7, maxWidth: 480, mx: "auto", position: 'relative', backgroundColor: 'rgb(239, 231, 221)' }}>
       {/* Sticky Search Bar */}
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
    <CustomSearchBar />
  </Box>

      {/* Rental Type Chips */}
      <Box sx={{ p: 2 }}>
        <Typography variant="subtitle1" sx={{ mb: 1 }}>Lesae Property Type</Typography>
        <Box
          sx={{
            display: 'flex',
            gap: 1,
            overflowX: 'auto',
            whiteSpace: 'nowrap',
            pb: 1,
            mb: 2
          }}
        >
          {rentalTypes.map((type, index) => (
            <Chip key={index} label={type} variant="outlined" sx={{ flexShrink: 0 }} />
          ))}
        </Box>
      </Box>

      {/* Google Map */}
      {isLoaded ? (
        <Box sx={{ px: 2, pb: 10 }}> {/* Add padding around map */}
        <Box sx={{ width: '100%', height: containerStyle.height }}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={14}
            options={{
              gestureHandling: 'greedy',  // allows scroll to zoom
              zoomControl: true,
              mapTypeControl: false,
              streetViewControl: false,
              fullscreenControl: false
            }}
            
          >
            {leaseProperties.map(property => (
              <Marker
                key={property.id}
                position={{ lat: property.lat, lng: property.lng }}
                onClick={() => setSelectedProperty(property)}
              />
            ))}
          </GoogleMap>
          </Box>

        

{selectedProperty && (
  <Box sx={{
    position: 'absolute',
    bottom: 164,
    left: 0,
    right: 0,
    margin: '0 auto',
    width: '100%',
    maxWidth: 480,
    zIndex: 999
  }}>
    <ReUsableCard
  property={selectedProperty}
  onCardClick={() => navigate('/lease_description', { state: { property: selectedProperty } })}
  isSaved={isSaved}
  toggleSave={toggleSave}
  likedCards={likedCards}
  toggleLike={toggleLike}
  onClose={() => setSelectedProperty(null)} // 🔽 add this
/>

  </Box>
)}

        </Box>
      ) : (
        <Typography sx={{ textAlign: 'center' }}>Loading map...</Typography>
      )}

      {/* Bottom Navigation */}
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation value={value} onChange={handleChange} showLabels>
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="List" icon={<ListIcon />} />
          <BottomNavigationAction label="Saves" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Inbox" icon={<MailIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

export default Lease_Property_Map;
