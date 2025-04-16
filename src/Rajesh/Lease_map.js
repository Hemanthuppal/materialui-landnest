// // Property_Map.js
// import React, { useState } from 'react';
// import {
//   Box,
//   TextField,
//   IconButton,
//   InputAdornment,
//   Chip,
//   Typography,
//   Card,
//   CardContent,
//   CardMedia,
//   BottomNavigation,
//   BottomNavigationAction,
//   Paper
// } from '@mui/material';
// import {
//   GoogleMap,
//   Marker,
//   useJsApiLoader
// } from '@react-google-maps/api';
// import SearchIcon from '@mui/icons-material/Search';
// import FilterListIcon from '@mui/icons-material/FilterList';
// import HomeIcon from '@mui/icons-material/Home';
// import ListIcon from '@mui/icons-material/List';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import MailIcon from '@mui/icons-material/Mail';
// import Img from './../Images/image-asset.jpeg';
// import img from './../Images/pexels-photo-439391.jpeg'

// const rentalTypes = [
//   "1BHK", "2BHK", "3BHK", "4+ BHK", "PLOT/LAND", "DUPLEX HOUSE",
//   "COMMERCIAL LAND", "COMMERCIAL BUILDING/ Space", "FLAT", "VILLA",
//   "PG-SCHOOL-OFFICE", "SHOPPING mall/shop", "LODGE"
// ];

// // Replace with your actual API Key
// const GOOGLE_MAPS_API_KEY = "AIzaSyAZAU88Lr8CEkiFP_vXpkbnu1-g-PRigXU";

// const properties = [
//   {
//     id: 1,
//     title: "2BHK Apartment",
//     description: "2 Beds • 2 Baths • 960 Sq.ft",
//     address: "10100 Burnt Store Rd #104",
//     price: "₹ 50,000/-",
//     lat: 26.8467,
//     lng: 80.9462,
//     image: Img // ✅ use the actual variable, not a string
//   },
//   {
//     id: 2,
//     title: "3BHK Villa",
//     description: "3 Beds • 3 Baths • 1200 Sq.ft",
//     address: "202 City Center",
//     price: "₹ 75,000/-",
//     lat: 26.8500,
//     lng: 80.9500,
//     image: img
//   }
// ];


// const Lease_map = () => {
//   const [selectedProperty, setSelectedProperty] = useState(null);

//   const { isLoaded } = useJsApiLoader({
//     googleMapsApiKey: GOOGLE_MAPS_API_KEY
//   });

//   const containerStyle = {
//     width: '100%',
//     height: '350px'
//   };

//   const center = {
//     lat: 26.8467,
//     lng: 80.9462
//   };

  
//     return (
//       <Box sx={{ p: 2, pb: 7, maxWidth: 480, mx: "auto" }}>
//         <Card elevation={4} sx={{ p: 2 }}>
//           {/* Search Bar */}
//           <Box sx={{ display: 'flex', mb: 2 }}>
//             <TextField
//               fullWidth
//               placeholder="Search"
//               variant="outlined"
//               size="small"
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton>
//                       <SearchIcon />
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//             />
//             <IconButton sx={{ ml: 1 }}>
//               <FilterListIcon />
//             </IconButton>
//           </Box>
    
//           {/* Property Rental Types */}
//           <Typography variant="subtitle1" sx={{ mb: 1 }}>Property Rental Type</Typography>
//           <Box
//             sx={{
//               display: 'flex',
//               gap: 1,
//               overflowX: 'auto',
//               whiteSpace: 'nowrap',
//               pb: 1,
//               mb: 2
//             }}
//           >
//             {rentalTypes.map((type, index) => (
//               <Chip key={index} label={type} variant="outlined" sx={{ flexShrink: 0 }} />
//             ))}
//           </Box>
    
//           {/* Google Map */}
//           {isLoaded ? (
//             <GoogleMap
//               mapContainerStyle={{ width: '100%', height: '350px' }}
//               center={center}
//               zoom={14}
//             >
//               {properties.map(property => (
//                 <Marker
//                   key={property.id}
//                   position={{ lat: property.lat, lng: property.lng }}
//                   onClick={() => setSelectedProperty(property)}
//                 />
//               ))}
//             </GoogleMap>
//           ) : (
//             <Typography>Loading map...</Typography>
//           )}
//         </Card>
    
//         {/* Property Details */}
//         {selectedProperty && (
//           <Card elevation={3} >
//             <CardMedia
//               component="img"
//               height="150"
//               image={selectedProperty.image}
//               alt={selectedProperty.title}
//             />
//             <CardContent>
//               <Typography variant="h6">{selectedProperty.title}</Typography>
//               <Typography variant="body2">{selectedProperty.description}</Typography>
//               <Typography variant="body2">{selectedProperty.address}</Typography>
//               <Typography variant="h6" sx={{ mt: 1, color: 'green' }}>{selectedProperty.price}</Typography>
//             </CardContent>
//           </Card>
//         )}
    
//         {/* Bottom Navigation */}
//         <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
//           <BottomNavigation showLabels>
//             <BottomNavigationAction label="Home" icon={<HomeIcon />} />
//             <BottomNavigationAction label="List" icon={<ListIcon />} />
//             <BottomNavigationAction label="Saves" icon={<FavoriteIcon />} />
//             <BottomNavigationAction label="Inbox" icon={<MailIcon />} />
//           </BottomNavigation>
//         </Paper>
//       </Box>
//     );
    
  
// };

// export default Lease_map;

// components/Lease_map.js
import React, { useState } from 'react';
import {
  Box,
  TextField,
  IconButton,
  InputAdornment,
  Chip,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import {
  GoogleMap,
  Marker,
  useJsApiLoader
} from '@react-google-maps/api';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import buildingImage from '../Images/Leasebuilding.png';
import buildingImage2 from '../Images/duplex-house.webp';
import Footer from "../hemanth/Hemanth";

const leaseTypes = [
  "1BHK", "2BHK", "3BHK", "4+ BHK", "PLOT/LAND", "DUPLEX HOUSE",
  "COMMERCIAL LAND", "COMMERCIAL BUILDING/ Space", "VILLA",
  "PG-SCHOOL-OFFICE", "SHOPPING mall/shop"
];

const GOOGLE_MAPS_API_KEY = "AIzaSyAZAU88Lr8CEkiFP_vXpkbnu1-g-PRigXU";

const leaseProperties = [
  {
    id: 1,
    title: "2BHK Apartment",
    description: "2 Beds • 2 Baths • 960 Sq.ft",
    address: "10100 Burnt Store Rd #104",
    price: "₹ 50,000/-",
    lat: 26.8467,
    lng: 80.9462,
    image: buildingImage
  },
  {
    id: 2,
    title: "3BHK Villa",
    description: "3 Beds • 3 Baths • 1200 Sq.ft",
    address: "202 City Center",
    price: "₹ 75,000/-",
    lat: 26.8500,
    lng: 80.9500,
    image: buildingImage2
  }
];

const Lease_map = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/lease_discription');
  };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY
  });

  const center = {
    lat: 26.8467,
    lng: 80.9462
  };

  return (
    <Box sx={{ p: 2, pb: 7, maxWidth: 480, mx: "auto" }}>
      {/* Custom Styled Search Bar */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#f1f4f5',
          borderRadius: '16px',
          p: 1,
          mb: 2
        }}
      >
        {/* Back Arrow */}
        <IconButton>
          <ArrowBackIosNewIcon />
        </IconButton>

        {/* Search Input */}
        <Box
          sx={{
            flex: 1,
            mx: 1,
            backgroundColor: 'white',
            borderRadius: '30px',
            display: 'flex',
            alignItems: 'center',
            px: 2,
            py: 0.5
          }}
        >
          <TextField
            variant="standard"
            placeholder="Search"
            InputProps={{
              disableUnderline: true,
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              )
            }}
            fullWidth
          />
        </Box>

        {/* Filter Icon */}
        <IconButton>
          <FilterListIcon />
        </IconButton>
      </Box>

      {/* Content Card */}
      <Card elevation={4} sx={{ p: 2 }}>
        {/* Lease Property Types */}
        <Typography variant="subtitle1" sx={{ mb: 1 }}>Lease Property Type</Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', pb: 1, mb: 2 }}>
          {leaseTypes.map((type, index) => (
            <Chip key={index} label={type} variant="outlined" />
          ))}
        </Box>

        {/* Google Map */}
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '350px' }}
            center={center}
            zoom={14}
          >
            {leaseProperties.map(property => (
              <Marker
                key={property.id}
                position={{ lat: property.lat, lng: property.lng }}
                onClick={() => setSelectedProperty(property)}
              />
            ))}
          </GoogleMap>
        ) : (
          <Typography>Loading map...</Typography>
        )}
      </Card>

      {/* Selected Property Card */}
      {selectedProperty && (
        <Card elevation={3} sx={{ mt: 2 }}>
          <CardMedia
            component="img"
            height="150"
            image={selectedProperty.image}
            alt={selectedProperty.title}
            onClick={handleCardClick}
          />
          <CardContent>
            <Typography variant="h6">{selectedProperty.title}</Typography>
            <Typography variant="body2">{selectedProperty.description}</Typography>
            <Typography variant="body2">{selectedProperty.address}</Typography>
            <Typography variant="h6" sx={{ mt: 1, color: 'green' }}>{selectedProperty.price}</Typography>
          </CardContent>
        </Card>
      )}

      {/* Footer Navigation */}
      <Footer />
    </Box>
  );
};

export default Lease_map;


