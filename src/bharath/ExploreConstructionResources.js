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
//                   selected={activeCategory === item.id}
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
//                       color: activeCategory === item.id ? 'white' : 'rgba(255, 255, 255, 0.7)',
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
//                       boxShadow: selectedItemId === item.id ? 6 : 2,
//                       border: selectedItemId === item.id ? '2px solid #00C4B4' : '1px solid #ddd',
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
  Grid
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
import BottomNavbar from '../sharvani/BottomNavbar';

const chunkArray = (array, chunkSize) => {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const ExploreConstructionResources = () => {
  const [activeCategory, setActiveCategory] = useState('kitchen');
  const [selectedItemId, setSelectedItemId] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  const drawerWidth = 80;

  const categories = {
    kitchen: [
      { id: 1, title: 'Modern Kitchen', imageUrl: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 2, title: 'Island Kitchen', imageUrl: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 3, title: 'Rustic Kitchen', imageUrl: 'https://images.unsplash.com/photo-1583845112203-29329902330b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 4, title: 'Minimal Kitchen', imageUrl: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 5, title: 'Modern Kitchen', imageUrl: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 6, title: 'Island Kitchen', imageUrl: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 7, title: 'Rustic Kitchen', imageUrl: 'https://images.unsplash.com/photo-1583845112203-29329902330b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
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
      { id: 1, title: 'Luxury Bathroom', imageUrl: 'https://images.unsplash.com/photo-1600566752355-35792bedcfe3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 2, title: 'Modern Bathroom', imageUrl: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 3, title: 'Small Bathroom', imageUrl: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 4, title: 'Stone Bathroom', imageUrl: 'https://images.unsplash.com/photo-1566669437687-7040a6926753?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 5, title: 'Luxury Bathroom', imageUrl: 'https://images.unsplash.com/photo-1600566752355-35792bedcfe3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
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
          backgroundColor: '#e6f2ff',
          padding: isMobile ? 2 : 2,
          borderBottom: '1px solid rgba(0,0,0,0.08)'
        }}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography variant={isMobile ? "h6" : "h5"} component="div" sx={{ 
                color: 'green',
                fontWeight: 'bold'
              }}>
                Constructions
              </Typography>
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
              backgroundColor: '#577BC1',
              borderRight: 'none',
              borderTopLeftRadius: '40px',
              borderBottomRightRadius: '40px',
              marginTop: '170px',
              height:'70vh' // Adjusted to account for sticky header
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
                  selected={activeCategory === item.id}
                  onClick={() => setActiveCategory(item.id)}
                  sx={{
                    py: 1.5,
                    '&.Mui-selected': {
                      backgroundColor: '#1976d2',
                      color: 'white',
                      '& .MuiListItemIcon-root': { 
                        color: 'white',
                        '& svg': { fontSize: '1.5rem' }
                      },
                    },
                    '&:hover': {
                      backgroundColor: '#e3f2fd',
                      '& .MuiListItemIcon-root': { color: '#1976d2' },
                    },
                    '& .MuiListItemIcon-root': {
                      minWidth: 'auto',
                      justifyContent: 'center',
                      color: activeCategory === item.id ? 'white' : 'rgba(255, 255, 255, 0.7)',
                      transition: 'color 0.2s, transform 0.2s',
                    }
                  }}
                >
                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>
                  {!isMobile && <ListItemText primary={item.label} />}
                </ListItem>
                <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />
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
            pb: 7
          }}
        >
          <Typography variant="body1" align="center" sx={{ mb: 2, fontWeight: 500, color: '#1a237e' }}>
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
                      boxShadow: selectedItemId === item.id ? 6 : 2,
                      border: selectedItemId === item.id ? '2px solid #00C4B4' : '1px solid #ddd',
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

      <Box sx={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 1000 }}>
        <BottomNavbar />
      </Box>
    </>
  );
};

export default ExploreConstructionResources;