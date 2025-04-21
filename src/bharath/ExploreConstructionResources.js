// import React, { useState } from 'react';
// import {
//   Box,
//   Drawer,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
//   Divider,
//   useMediaQuery,
//   IconButton
// } from '@mui/material';
// import {
//   Kitchen as KitchenIcon,
//   Home as StructureIcon,
//   Bathtub as BathroomIcon,
//   DoorFront as DoorsIcon
// } from '@mui/icons-material';
// import { useTheme } from '@mui/material/styles';
// import { useNavigate } from 'react-router-dom';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import BottomNavbar from '../sharvani/BottomNavbar';

// const chunkArray = (array, chunkSize) => {
//   const result = [];
//   for (let i = 0; i < array.length; i += chunkSize) {
//     result.push(array.slice(i, i + chunkSize));
//   }
//   return result;
// };

// const ExploreConstructionResources = () => {
//   const [activeCategory, setActiveCategory] = useState('kitchen'); // Set kitchen as default
//   const [selectedItemId, setSelectedItemId] = useState(null);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const navigate = useNavigate();

//   const drawerWidth = 80;

//   const categories = {
//     kitchen: [
//       { id: 1, title: 'Modern Kitchen', imageUrl: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
//       { id: 2, title: 'Island Kitchen', imageUrl: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
//       { id: 3, title: 'Rustic Kitchen', imageUrl: 'https://images.unsplash.com/photo-1583845112203-29329902330b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
//       { id: 4, title: 'Minimal Kitchen', imageUrl: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
//       { id: 5, title: 'Modern Kitchen', imageUrl: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
//       { id: 6, title: 'Island Kitchen', imageUrl: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
//       { id: 7, title: 'Rustic Kitchen', imageUrl: 'https://images.unsplash.com/photo-1583845112203-29329902330b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
//       { id: 8, title: 'Minimal Kitchen', imageUrl: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' }
//     ],
//     structure: [
//       { id: 1, title: 'Modern House', imageUrl: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
//       { id: 2, title: 'Wooden Cabin', imageUrl: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
//       { id: 3, title: 'Brick House', imageUrl: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
//       { id: 4, title: 'Concrete Building', imageUrl: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
//       { id: 5, title: 'Modern House', imageUrl: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
//       { id: 6, title: 'Wooden Cabin', imageUrl: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
//       { id: 7, title: 'Brick House', imageUrl: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
//       { id: 8, title: 'Concrete Building', imageUrl: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' }
//     ],
//     bathroom: [
//       { id: 1, title: 'Luxury Bathroom', imageUrl: 'https://images.unsplash.com/photo-1600566752355-35792bedcfe3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
//       { id: 2, title: 'Modern Bathroom', imageUrl: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
//       { id: 3, title: 'Small Bathroom', imageUrl: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
//       { id: 4, title: 'Stone Bathroom', imageUrl: 'https://images.unsplash.com/photo-1566669437687-7040a6926753?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
//       { id: 5, title: 'Luxury Bathroom', imageUrl: 'https://images.unsplash.com/photo-1600566752355-35792bedcfe3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
//       { id: 6, title: 'Modern Bathroom', imageUrl: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
//       { id: 7, title: 'Small Bathroom', imageUrl: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
//       { id: 8, title: 'Stone Bathroom', imageUrl: 'https://images.unsplash.com/photo-1566669437687-7040a6926753?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' }
//     ],
//     doors: [
//       { id: 1, title: 'Modern Door', imageUrl: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
//       { id: 2, title: 'Wooden Door', imageUrl: 'https://images.unsplash.com/photo-1595624871930-6e8537998592?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
//       { id: 3, title: 'Glass Door', imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
//       { id: 4, title: 'Barn Door', imageUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
//       { id: 5, title: 'Modern Door', imageUrl: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
//       { id: 6, title: 'Wooden Door', imageUrl: 'https://images.unsplash.com/photo-1595624871930-6e8537998592?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
//       { id: 7, title: 'Glass Door', imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
//       { id: 8, title: 'Barn Door', imageUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' }
//     ]
//   };

//   const rows = chunkArray(categories[activeCategory], 2);

//   return (
//     <>
//       <Box display="flex" alignItems="center" padding="10px" position='sticky'>
//         <IconButton onClick={() => navigate('/interiors')}>
//           <ArrowBackIosIcon />
//         </IconButton>
//       </Box>

//       <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
//         <Drawer
//           variant="permanent"
//           anchor="left"
//           sx={{
//             width: drawerWidth,
//             flexShrink: 0,
//             '& .MuiDrawer-paper': {
//               width: drawerWidth,
//               boxSizing: 'border-box',
//               backgroundColor: '#577BC1',
//               borderRight: 'none',
//               height: '80vh',
//               marginTop: '12vh',  
//               borderTopLeftRadius: '40px',
//               borderBottomRightRadius: '40px',
//             },
//           }}
//         >
//           <List dense sx={{ p: 0 }}>
//             {[
//               { id: 'kitchen', icon: <KitchenIcon />, label: 'Kitchen' },
//               { id: 'structure', icon: <StructureIcon />, label: 'Structure' },
//               { id: 'bathroom', icon: <BathroomIcon />, label: 'Bathroom' },
//               { id: 'doors', icon: <DoorsIcon />, label: 'Doors' }
//             ].map((item) => (
//               <React.Fragment key={item.id}>
//                 <ListItem
//                   button
//                   selected={activeCategory == item.id}
//                   onClick={() => setActiveCategory(item.id)}
//                   sx={{
//                     py: 1.5,
//                     '&.Mui-selected': {
//                       backgroundColor: '#1976d2',
//                       color: 'white',
//                       '& .MuiListItemIcon-root': { 
//                         color: 'white',
//                         '& svg': { fontSize: '1.5rem' } // Make icon larger when selected
//                       },
//                     },
//                     '&:hover': {
//                       backgroundColor: '#e3f2fd',
//                       '& .MuiListItemIcon-root': { color: '#1976d2' },
//                     },
//                     '& .MuiListItemIcon-root': {
//                       minWidth: 'auto',
//                       justifyContent: 'center',
//                       color: activeCategory == item.id ? 'white' : 'rgba(255, 255, 255, 0.7)',
//                       transition: 'color 0.2s, transform 0.2s',
//                     }
//                   }}
//                 >
//                   <ListItemIcon>
//                     {item.icon}
//                   </ListItemIcon>
//                   {!isMobile && <ListItemText primary={item.label} />}
//                 </ListItem>
//                 <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />
//               </React.Fragment>
//             ))}
//           </List>
//         </Drawer>

//         <Box
//           component="main"
//           sx={{
//             flexGrow: 1,
//             overflowY: 'auto',
//             bgcolor: '#fff',
//           }}
//         >
//           <Typography variant="h6" align="center" sx={{ mb: 2, fontWeight: 500, color: '#1a237e' }}>
//             Explore Construction Resources
//           </Typography>

//           <Box display="flex" flexDirection="column" gap={2}>
//             {rows.map((row, rowIndex) => (
//               <Box key={rowIndex} display="flex" gap={2} padding={1}>
//                 {row.map((item) => (
//                   <Card
//                     key={item.id}
//                     onClick={() => setSelectedItemId(item.id)}
//                     sx={{
//                       width: '100%',
//                       borderRadius: 2,
//                       boxShadow: selectedItemId == item.id ? 6 : 2,
//                       border: selectedItemId == item.id ? '2px solid #00C4B4' : '1px solid #ddd',
//                       cursor: 'pointer',
//                       transition: '0.2s',
//                       overflow: 'hidden',
//                     }}
//                   >
//                     <CardMedia
//                       component="img"
//                       image={item.imageUrl}
//                       alt={item.title}
//                       sx={{ height: 100, objectFit: 'cover' }}
//                     />
//                     <CardContent sx={{ p: 1 }}>
//                       <Typography variant="body2" align="center" fontWeight="500">
//                         {item.title}
//                       </Typography>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </Box>
//             ))}
//           </Box>
//         </Box>
//       </Box>

//         <Box sx={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 1000 }}>
//                     <BottomNavbar />
//                   </Box>
//     </>
//   );
// };

// export default ExploreConstructionResources;
































import React, { useState } from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Divider,
  useMediaQuery,
  IconButton,
  Grid, BottomNavigation,
  BottomNavigationAction, Paper
} from '@mui/material';
import {
  Kitchen as KitchenIcon,
  Home as StructureIcon,
  Bathtub as BathroomIcon,
  DoorFront as DoorsIcon
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import AddIcon from '@mui/icons-material/Add';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const chunkArray = (array, chunkSize) => {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const ExploreConstructionResources = () => {
  const [activeCategory, setActiveCategory] = React.useState('kitchen')
  const [selectedItemId, setSelectedItemId] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const [value, setValue] = useState('construction');


  const drawerWidth = 75;

  const categories = {
    kitchen: [
      { id: 1, title: 'Modern Kitchen', imageUrl: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 2, title: 'Island Kitchen', imageUrl: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 3, title: 'Rustic Kitchen', imageUrl: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 4, title: 'Minimal Kitchen', imageUrl: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 5, title: 'Modern Kitchen', imageUrl: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 6, title: 'Island Kitchen', imageUrl: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 7, title: 'Rustic Kitchen', imageUrl: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 8, title: 'Minimal Kitchen', imageUrl: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' }
    ],
    structure: [
      { id: 1, title: 'Modern House', imageUrl: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 2, title: 'Wooden Cabin', imageUrl: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 3, title: 'Brick House', imageUrl: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 4, title: 'Concrete Building', imageUrl: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 5, title: 'Modern House', imageUrl: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 6, title: 'Wooden Cabin', imageUrl: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 7, title: 'Brick House', imageUrl: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 8, title: 'Concrete Building', imageUrl: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' }
    ],
    bathroom: [
      { id: 1, title: 'Luxury Bathroom', imageUrl: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 2, title: 'Modern Bathroom', imageUrl: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 3, title: 'Small Bathroom', imageUrl: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 4, title: 'Stone Bathroom', imageUrl: 'https://images.unsplash.com/photo-1566669437687-7040a6926753?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 5, title: 'Luxury Bathroom', imageUrl: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 6, title: 'Modern Bathroom', imageUrl: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 7, title: 'Small Bathroom', imageUrl: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 8, title: 'Stone Bathroom', imageUrl: 'https://images.unsplash.com/photo-1566669437687-7040a6926753?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' }
    ],
    doors: [
      { id: 1, title: 'Modern Door', imageUrl: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 2, title: 'Wooden Door', imageUrl: 'https://images.unsplash.com/photo-1595624871930-6e8537998592?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 3, title: 'Glass Door', imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 4, title: 'Barn Door', imageUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 5, title: 'Modern Door', imageUrl: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 6, title: 'Wooden Door', imageUrl: 'https://images.unsplash.com/photo-1595624871930-6e8537998592?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 7, title: 'Glass Door', imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 8, title: 'Barn Door', imageUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' }
    ]
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // Navigate to the corresponding route
    switch (newValue) {
      case 'home':
        navigate('/dashboard');
        break;
      case 'construction':
        navigate('/constructions');
        break;
      case 'post':
        navigate('/post');
        break;
      case 'services':
        navigate('/home-service');
        break;
      case 'profile':
        navigate('/profile');
        break;
      default:
        navigate('/');
    }
  };

  const rows = chunkArray(categories[activeCategory], 2);

  return (
    <>
      {/* Sticky Header Section */}
      <Box sx={{
        position: 'sticky',
        top: 0,
        zIndex: 1200,
        bgcolor: 'background.paper',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        {/* Back Arrow */}
        <Box display="flex" alignItems="center" p={1} sx={{
          background: 'white',
          borderBottom: '1px solid rgba(0,0,0,0.08)'
        }}>
          <IconButton
            onClick={() => navigate('/constructions')}
            sx={{
              color: '#4A00E0',
              '&:hover': { backgroundColor: 'rgba(74, 0, 224, 0.1)' }
            }}
          >
            <ArrowBackIosIcon />
          </IconButton>
        </Box>

        {/* Construction/Interior Navigation */}
        <Box sx={{
          bgcolor: 'rgb(212, 209, 205)',
          padding: isMobile ? 2 : 2,
          borderBottom: '1px solid rgba(0,0,0,0.08)'
        }}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Link to="/interiors" style={{ textDecoration: 'none' }}>
                <Typography variant={isMobile ? "h6" : "h5"} component="div" sx={{
                  color: 'green',
                  fontWeight: 'bold'
                }}>
                  Constructions
                </Typography>
              </Link>

            </Grid>
            <Grid item>
              <Link to="/interiors" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography variant={isMobile ? "h6" : "h5"} component="div">
                  Interiors
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', height: 'calc(100vh - 112px)', overflow: 'hidden' }}>
        <Drawer
          variant="permanent"
          anchor="left"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              backgroundColor: '#e7dbc9',
              borderRight: 'none',
              borderTopLeftRadius: '40px',
              borderBottomRightRadius: '40px',
              marginTop: '170px',
              height: '65vh',
              marginLeft:'1px',
              border: '1px solid black'
            },
          }}
        >
          <List dense sx={{ p: 0 }}>
            {[
              { id: 'kitchen', icon: <KitchenIcon />, label: 'Kitchen' },
              { id: 'structure', icon: <StructureIcon />, label: 'Structure' },
              { id: 'bathroom', icon: <BathroomIcon />, label: 'Bathroom' },
              { id: 'doors', icon: <DoorsIcon />, label: 'Doors' }
            ].map((item) => (
              <React.Fragment key={item.id}>
                <ListItem
                  button
                  selected={activeCategory == item.id}
                  onClick={() => setActiveCategory(item.id)}
                  sx={{
                    py: 1.5,
                    flexDirection: 'column',
                    '&.Mui-selected': {
                      backgroundColor: '#3A56A8',
                      color: 'white',
                      '& .MuiListItemIcon-root': {
                        color: 'white',
                        '& svg': { fontSize: '1.5rem' }
                      },
                      '&:hover': {
                        backgroundColor: '#3A56A8',
                      }
                    },
                    '&:hover': {
                      backgroundColor: '#e3f2fd',
                      '& .MuiListItemIcon-root': { color: '#1976d2' },
                    },
                    '& .MuiListItemIcon-root': {
                      minWidth: 'auto',
                      justifyContent: 'center',
                                            color: activeCategory == item.id ? 'white' : 'rgba(5, 4, 4, 0.7)',

                      // color: activeCategory == item.id ? 'white' : 'rgba(255, 255, 255, 0.7)',
                      transition: 'color 0.2s, transform 0.2s'
                    }
                  }}
                >
                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontSize: '0.7rem',
                      textAlign: 'center',
                      fontWeight: activeCategory == item.id ? '600' : '400',
                      color: activeCategory == item.id ? '#577BC1' : 'rgba(10, 10, 10, 0.9)'
                    }}
                    sx={{
                      marginTop: '4px',
                      '& .MuiTypography-root': {
                        display: 'block'
                      }
                    }}
                  />
                </ListItem>
                <Divider sx={{ backgroundColor: 'rgba(9, 9, 9, 0.2)' }} />
              </React.Fragment>
            ))}
          </List>
        </Drawer>

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            overflowY: 'auto',
            bgcolor: '#fff',
            pt: 2,
            pb: 10
          }}
        >
          <Typography variant="body1" align="center" sx={{ mb: 2, fontWeight: 500 }}>
            Explore Construction Resources
          </Typography>

          <Box display="flex" flexDirection="column" gap={2}>
            {rows.map((row, rowIndex) => (
              <Box key={rowIndex} display="flex" gap={2} padding={1}>
                {row.map((item) => (
                  <Card
                    key={item.id}
                    onClick={() => setSelectedItemId(item.id)}
                    sx={{
                      width: '100%',
                      borderRadius: 2,
                      boxShadow: selectedItemId == item.id ? 6 : 2,
                      border: selectedItemId == item.id ? '2px solid #00C4B4' : '1px solid #ddd',
                      cursor: 'pointer',
                      transition: '0.2s',
                      overflow: 'hidden',
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={item.imageUrl}
                      alt={item.title}
                      sx={{ height: 100, objectFit: 'cover' }}
                    />
                    <CardContent sx={{ p: 1 }}>
                      <Typography variant="body2" align="center" fontWeight="500">
                        {item.title}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Paper
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
        }}
        elevation={3}
      >
        <BottomNavigation
          value={value}
          onChange={handleChange}
          showLabels
          sx={{
            borderTop: '1px solid #e0e0e0',
            height: '60px',
            '& .MuiBottomNavigationAction-root': {
              minWidth: 'auto',
              padding: '6px 0',
              color: 'black',
            },
            '& .MuiBottomNavigationAction-label': {
              fontSize: '0.7rem',
            },
          }}
        >
          <BottomNavigationAction
            value="home"
            label="Home"
            icon={<HomeIcon sx={{ fontSize: '1.3rem' }} />}
          />
          <BottomNavigationAction
            value="construction"
            label="Construction & Interiors"
            icon={<BuildIcon sx={{ fontSize: '1.3rem' }} />}
          />
          <BottomNavigationAction
            value="post"
            label="Post"
            icon={<AddIcon sx={{ fontSize: '1.3rem' }} />}
            sx={{
              '& .MuiSvgIcon-root': { color: '#2196f3' },
              '& .MuiBottomNavigationAction-label': { color: '#2196f3' }
            }}
          />
          <BottomNavigationAction
            value="services"
            label="Home Services"
            icon={<CleaningServicesIcon sx={{ fontSize: '1.3rem' }} />}
          />
          <BottomNavigationAction
            value="profile"
            label="Profile"
            icon={<AccountCircleIcon sx={{ fontSize: '1.3rem' }} />}
          />
        </BottomNavigation>
      </Paper>
    </>
  );
};

export default ExploreConstructionResources;