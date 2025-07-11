
// import React, { useEffect, useState } from 'react';
// import {
//   Box, Card, CardMedia, CardContent, Typography, IconButton,
//   useMediaQuery, useTheme, CircularProgress
// } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import { Link } from 'react-router-dom';
// import FormsBottomNavbar from '../maniteja/FormsBottomNavbar';
// import logotop from './Images/landnest-logo.jpg';
// import axios from 'axios';
// import { BASE_URL } from '../../src/Api/ApiUrls';
// import { toast } from 'react-toastify';

// const API_BASE_URL = `${BASE_URL}`;
// const IMAGE_BASE_URL = `${API_BASE_URL}/construction-content`;

// const chunkArray = (array, chunkSize) => {
//   const result = [];
//   for (let i = 0; i < array.length; i += chunkSize) {
//     result.push(array.slice(i, i + chunkSize));
//   }
//   return result;
// };

// const ThreedPlansInterior = () => {
//   const theme = useTheme();
//   const navigate = useNavigate();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const [loading, setLoading] = useState(true);
//   const [plans, setPlans] = useState([]);
//   const [value, setValue] = useState('construction');

//   useEffect(() => {
//     const fetchPlans = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(`${IMAGE_BASE_URL}/`);
//         // Filter plans where category_id is 2 (for 3D Plans Interior)
//         const threeDPlans = response.data.filter(plan => plan.category_id == 2);
//         setPlans(threeDPlans);
//       } catch (error) {
//         console.error("Error fetching plans:", error);
//         toast.error("Failed to fetch plans. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPlans();
//   }, []);

//   const rows = chunkArray(plans, 2);

//   if (loading) {
//     return (
//       <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
//         <CircularProgress />
//       </Box>
//     );
//   }

//   return (
//     <>
//       {/* Sticky Header Section */}
//       <Box sx={{
//         position: 'sticky',
//         top: 0,
//         zIndex: 1200,
//         bgcolor: 'background.paper',
//         boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
//       }}>
//         {/* Top Navigation Bar */}
//         <Box display="flex" alignItems="center" justifyContent="space-between" p={1} sx={{
//           background: 'black',
//           borderBottom: '1px solid rgba(0,0,0,0.08)'
//         }}>
//           {/* Back Arrow - Left Side */}
//           <IconButton
//             onClick={() => navigate(-1)}
//             sx={{
//               color: 'white',
//               '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }
//             }}
//           >
//             <ArrowBackIosIcon />
//           </IconButton>
          
//           {/* Center Text - "landnest" */}
//           <Typography variant="h6" component="div" sx={{ 
//             color: 'white',
//             fontWeight: 'bold',
//             flexGrow: 1,
//             textAlign: 'left'
//           }}>
//             LANDNEST
//           </Typography>
          
//           {/* Right Side Logo */}
//           <Box sx={{ 
//             width: 100,
//             height: 50,
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center'
//           }}>
//             <img 
//               src={logotop} 
//               alt="Landnest Logo" 
//               style={{ 
//                 maxWidth: '100%', 
//                 maxHeight: '100%',
//                 objectFit: 'contain'
//               }}
//             />
//           </Box>
//         </Box>
      
//         {/* Construction/Interior Navigation */}
//         <Box sx={{
//           padding: isMobile ? 1 : 0.5,
//           display: 'flex',
//           justifyContent: 'space-between',
//           boxShadow: '0 5px 10px rgba(0,0,0,0.1)',
//         }}>
//           {/* Construction - Active */}
//           <Box 
//             component={Link}
//             to="/constructions"
//             sx={{
//               flex: 1,
//               textAlign: 'center',
//               py: 2,
//               textDecoration: 'none',
//               background: `
//                 linear-gradient(145deg, rgba(232,224,208,0.95), rgba(216,204,186,0.95)),
//                 url('https://www.transparenttextures.com/patterns/cream-paper.png')
//               `,
//               backgroundBlendMode: 'overlay',
//               borderRight: '1px solid rgba(0,0,0,0.1)',
//               borderTopLeftRadius: '30px',
//               boxShadow: `
//                 inset 0 0 15px rgba(0,0,0,0.1),
//                 0 2px 5px rgba(0,0,0,0.08)
//               `,
//               transform: 'scale(0.98)',
//               transition: 'all 0.3s ease',
//               '&:hover': {
//                 transform: 'scale(1)',
//                 boxShadow: `
//                   inset 0 0 20px rgba(0,0,0,0.15),
//                   0 3px 8px rgba(0,0,0,0.15)
//                 `
//               }
//             }}>
//             <Typography variant={isMobile ? "h6" : "h5"} component="div" sx={{ 
//               fontWeight: 700,
//               color: '#333333',
//               textShadow: '0 1px 3px rgba(255,255,255,0.5)',
//               fontFamily: 'Inter, Roboto, Helvetica, sans-serif',
//             }}>
//               Constructions
//             </Typography>
//           </Box>
          
//           {/* Interiors - Inactive */}
//           <Box 
//             component={Link}
//             to="/interiors"
//             sx={{
//               flex: 1,
//               textAlign: 'center',
//               py: 2,
//               background: `
//                 linear-gradient(145deg, rgb(22, 22, 22), rgb(15, 15, 15)),
//                 url('https://www.transparenttextures.com/patterns/dark-matter.png')
//               `,
//               backgroundBlendMode: 'overlay',
//               textDecoration: 'none',
//               borderBottomRightRadius: '30px',
//               boxShadow: `
//                 inset 0 0 15px rgba(0,0,0,0.2),
//                 0 2px 5px rgba(0,0,0,0.1)
//               `,
//               transform: 'scale(0.98)',
//               transition: 'all 0.3s ease',
//               '&:hover': {
//                 background: `
//                   linear-gradient(145deg, rgb(35, 35, 35), rgb(25, 25, 25)),
//                   url('https://www.transparenttextures.com/patterns/dark-matter.png')
//                 `,
//                 transform: 'scale(1)',
//                 boxShadow: `
//                   inset 0 0 20px rgba(0,0,0,0.3),
//                   0 3px 8px rgba(0,0,0,0.2)
//                 `
//               }
//             }}
//           >
//             <Typography variant={isMobile ? "h6" : "h5"} component="div" sx={{ 
//               fontWeight: 700,
//               color: 'rgba(255,255,255,0.9)',
//               letterSpacing: '1px',
//               textShadow: '0 1px 5px rgba(0,0,0,0.7)',
//               fontFamily: 'Inter, Roboto, Helvetica, sans-serif',
//             }}>
//               Interiors
//             </Typography>
//           </Box>
//         </Box>
//       </Box>

//       {/* Page Title */}
//       <Typography
//         variant="h5"
//         align="center"
//         fontWeight="bold"
//         sx={{
//           mt: 3,
//           fontSize: isMobile ? '1.5rem' : '2rem'
//         }}
//       >
//         3D Plans Interior
//       </Typography>

//       {/* Content Cards */}
//       <Box sx={{ 
//         display: 'flex', 
//         flexDirection: 'column', 
//         gap: 2, 
//         px: 2,
//         pb: 15,
//         mt: 2, 
//         pt:2,
//         minHeight: '100vh',

//         backgroundColor: '#e7dbc9',
//       }}>
//         {rows.map((row, rowIndex) => (
//           <Box
//             key={rowIndex}
//             display="flex"
//             gap={2}
//           >
//             {row.map((item) => (
//               <Card
//                 key={item.content_id}
//                 sx={{ 
//                   flex: 1,
//                   borderRadius: 2,
//                   boxShadow: 3,
//                   height: '160px',
//                   '&:hover': {
//                     transform: 'translateY(-4px)',
//                     transition: 'transform 0.3s ease'
//                   }
//                 }}
//               >
//                 <CardMedia
//                   component="img"
//                   height="120"
//                   image={`${API_BASE_URL}${item.image}`}
//                   alt={item.content}
//                   sx={{ objectFit: 'cover' }}
//                   onError={(e) => {
//                     e.target.onerror = null;
//                     e.target.src = `${API_BASE_URL}/media/default.jpg`; // fallback image
//                   }}
//                 />
//                 <CardContent sx={{ padding: '8px' }}>
//                   <Typography variant="subtitle1" align="center" fontWeight="bold">
//                     {item.content}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             ))}
//           </Box>
//         ))}
//       </Box>
//       <FormsBottomNavbar />
//     </>
//   );
// };

// export default ThreedPlansInterior;








import React, { useState, useEffect } from 'react';
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
  CircularProgress
} from '@mui/material';
import {
  Construction as ConstructionIcon,
  AcUnit as SteelIcon,
  Square as BrickIcon,
  Grain as SandIcon,
  Terrain as StoneIcon,
  Window as WoodWindowsIcon,
  Bolt as ElectricalIcon,
  Build as FabricationIcon,
  Plumbing as PlumbingIcon,
  GridOn as TilesGraniteIcon,
  FormatPaint as PaintIcon,
  Architecture as FloorPlanIcon,
  Foundation as FoundationIcon,
  ThreeDRotation as ThreeDIcon
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';
import FormsBottomNavbar from '../maniteja/FormsBottomNavbar';
import logotop from './Images/landnest-logo.jpg';
import axios from 'axios';
import { BASE_URL } from '../../src/Api/ApiUrls';

const chunkArray = (array, chunkSize) => {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const ThreedPlansInterior = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [categories, setCategories] = useState([]);
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  const drawerWidth = '15%';

  // Fetch categories and plans
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch categories from the API
        const response = await axios.get(`${BASE_URL}/construction-categories/`);
        const allCategories = response.data;

        // Filter categories where category === "3D"
        const filteredCategories = allCategories.filter(cat => cat.category === "3D");

        // Set the filtered categories in state
        setCategories(filteredCategories);

        // Set the first matching category as active and fetch its plans
        if (filteredCategories.length > 0) {
          setActiveCategory(filteredCategories[0].category_id);
          await fetchPlans(filteredCategories[0].category_id);
        }
      } catch (error) {
        console.error('Error fetching construction categories:', error);
        setCategories([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Fetch plans when active category changes
  const fetchPlans = async (categoryId) => {
    try {
      setLoading(true);
      const response = await axios.get(`${BASE_URL}/construction-content/`);
      
      // Filter plans by category_id and enhance with category info
      const filteredPlans = response.data
        .filter(item => item.category_id == categoryId)
        .map(item => {
          const category = categories.find(cat => cat.category_id === item.category_id);
          return {
            id: item.content_id,
            title: item.content,
            imageUrl: `${BASE_URL}${item.image}`,
            categoryName: category ? category.sub_cat : 'Unknown'
          };
        });
      
      setPlans(filteredPlans);
    } catch (error) {
      console.error('Error fetching plans:', error);
    } finally {
      setLoading(false);
    }
  };

  const getCategoryIcon = (categoryName) => {
    switch (categoryName.toLowerCase()) {
      case '3d floor plan':
        return <FloorPlanIcon />;
      case '3d elevation':
        return <ThreeDIcon />;
      case '3d structural view':
        return <BrickIcon />;
      case '3d plumbing':
        return <PlumbingIcon />;
      case '3d electrical':
        return <ElectricalIcon />;
      case '3d space planning':
        return <WoodWindowsIcon />;
      case '3d foundation':
        return <FoundationIcon />;
      case '3d interior':
        return <PaintIcon />;
      case '3d exterior':
        return <ConstructionIcon />;
      default:
        return <ThreeDIcon />;
    }
  };

  const rows = chunkArray(plans, 2);

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
        {/* Top Navigation Bar */}
        <Box display="flex" alignItems="center" justifyContent="space-between" p={1} sx={{
          background: 'black',
          borderBottom: '1px solid rgba(0,0,0,0.08)'
        }}>
          {/* Back Arrow - Left Side */}
          <IconButton
            onClick={() => navigate(-1)}
            sx={{
              color: 'white',
              '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }
            }}
          >
            <ArrowBackIosIcon />
          </IconButton>

          {/* Center Text - "landnest" */}
          <Typography variant="h6" component="div" sx={{
            color: 'white',
            fontWeight: 'bold',
            flexGrow: 1,
            textAlign: 'left'
          }}>
            LANDNEST
          </Typography>

          {/* Right Side Logo */}
          <Box sx={{
            width: 100,
            height: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img
              src={logotop}
              alt="Landnest Logo"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain'
              }}
            />
          </Box>
        </Box>

        {/* Construction/Interior Navigation */}
        <Box sx={{
          padding: isMobile ? 1 : 0.5,
          display: 'flex',
          justifyContent: 'space-between',
          boxShadow: '0 5px 10px rgba(0,0,0,0.1)',
        }}>
          <Box
            component={Link}
            to="/constructions"
            sx={{
              flex: 1,
              textAlign: 'center',
              py: 2,
              textDecoration: 'none',
              background: `
                linear-gradient(145deg, rgba(232,224,208,0.95), rgba(216,204,186,0.95)),
                url('https://www.transparenttextures.com/patterns/cream-paper.png')
              `,
              backgroundBlendMode: 'overlay',
              borderRight: '1px solid rgba(0,0,0,0.1)',
              borderTopLeftRadius: '30px',
              boxShadow: `
                inset 0 0 15px rgba(0,0,0,0.1),
                0 2px 5px rgba(0,0,0,0.08)
              `,
              transform: 'scale(0.98)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'scale(1)',
                boxShadow: `
                  inset 0 0 20px rgba(0,0,0,0.15),
                  0 3px 8px rgba(0,0,0,0.15)
                `
              }
            }}>
            <Typography variant={isMobile ? "h6" : "h5"} component="div" sx={{
              fontWeight: 700,
              color: '#333333',
              textShadow: '0 1px 3px rgba(255,255,255,0.5)',
              fontFamily: 'Inter, Roboto, Helvetica, sans-serif',
            }}>
              Constructions
            </Typography>
          </Box>

          <Box
            component={Link}
            to="/interiors"
            sx={{
              flex: 1,
              textAlign: 'center',
              py: 2,
              background: `
                linear-gradient(145deg, rgb(22, 22, 22), rgb(15, 15, 15)),
                url('https://www.transparenttextures.com/patterns/dark-matter.png')
              `,
              backgroundBlendMode: 'overlay',
              textDecoration: 'none',
              borderBottomRightRadius: '30px',
              boxShadow: `
                inset 0 0 15px rgba(0,0,0,0.2),
                0 2px 5px rgba(0,0,0,0.1)
              `,
              transform: 'scale(0.98)',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: `
                  linear-gradient(145deg, rgb(35, 35, 35), rgb(25, 25, 25)),
                  url('https://www.transparenttextures.com/patterns/dark-matter.png')
                `,
                transform: 'scale(1)',
                boxShadow: `
                  inset 0 0 20px rgba(0,0,0,0.3),
                  0 3px 8px rgba(0,0,0,0.2)
                `
              }
            }}
          >
            <Typography variant={isMobile ? "h6" : "h5"} component="div" sx={{
              fontWeight: 700,
              color: 'rgba(255,255,255,0.9)',
              letterSpacing: '1px',
              textShadow: '0 1px 5px rgba(0,0,0,0.7)',
              fontFamily: 'Inter, Roboto, Helvetica, sans-serif',
            }}>
              Interiors
            </Typography>
          </Box>
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
              marginTop: '155px',
              height: '69vh',
              marginLeft: '1px',
              border: '1px solid black',
            },
          }}
        >
          {loading && categories.length === 0 ? (
            <Box display="flex" justifyContent="center" alignItems="center" height="100%">
              <CircularProgress />
            </Box>
          ) : (
            <List dense sx={{ p: 0 }}>
              {categories.map((category) => {
                const isSelected = activeCategory == category.category_id;

                return (
                  <React.Fragment key={category.category_id}>
                    <ListItem
                      button
                      selected={isSelected}
                      onClick={() => {
                        setActiveCategory(category.category_id);
                        fetchPlans(category.category_id);
                      }}
                      sx={{
                        py: 1.5,
                        flexDirection: 'column',
                        backgroundColor: isSelected ? 'black' : 'transparent',
                        color: isSelected ? 'white' : 'rgba(5, 4, 4, 0.7)',
                        '&:hover': {
                          backgroundColor: isSelected ? 'black' : '#e3f2fd',
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 'auto',
                          justifyContent: 'center',
                          color: isSelected ? 'white' : 'rgba(5, 4, 4, 0.7)',
                          '& svg': {
                            fontSize: '1.5rem',
                          },
                        }}
                      >
                        {getCategoryIcon(category.sub_cat)}
                      </ListItemIcon>

                      <ListItemText
                        primary={category.sub_cat}
                        primaryTypographyProps={{
                          fontSize: '0.5rem',
                          textAlign: 'center',
                          fontWeight: isSelected ? '600' : '400',
                          color: isSelected ? '#ffffff' : 'rgba(10, 10, 10, 0.9)',
                        }}
                        sx={{
                          marginTop: '4px',
                          '& .MuiTypography-root': {
                            display: 'block',
                          },
                        }}
                      />
                    </ListItem>
                    <Divider sx={{ backgroundColor: 'rgba(9, 9, 9, 0.2)' }} />
                  </React.Fragment>
                );
              })}
            </List>
          )}
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
            Explore 3D Plans
          </Typography>

          {loading ? (
            <Box display="flex" justifyContent="center" alignItems="center" height="50vh">
              <CircularProgress />
            </Box>
          ) : (
            <Box display="flex" flexDirection="column" gap={1} marginBottom='20px'>
              {rows.length > 0 ? (
                rows.map((row, rowIndex) => (
                  <Box key={rowIndex} display="flex" gap={1} padding={1}>
                    {row.map((item) => (
                      <Card
                        key={item.id}
                        onClick={() => setSelectedItemId(item.id)}
                        sx={{
                          width: '100%',
                          borderRadius: 2,
                          border: '0.5px solid #000',
                          boxShadow: selectedItemId == item.id ? 6 : 2,
                          cursor: 'pointer',
                          transition: '0.2s',
                          overflow: 'hidden',
                          height: '135px',
                        }}
                      >
                        <CardMedia
                          component="img"
                          image={item.imageUrl}
                          alt={item.title}
                          sx={{ height: 100, objectFit: 'cover' }}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = `${BASE_URL}/media/default.jpg`; // fallback image
                          }}
                        />
                        <CardContent sx={{ padding: 1 }}>
                          <Typography variant="body2" align="center" fontWeight="500">
                            {item.title}
                          </Typography>
                        </CardContent>
                      </Card>
                    ))}
                  </Box>
                ))
              ) : (
                <Typography variant="body1" align="center" sx={{ mt: 4 }}>
                  No plans found for this category
                </Typography>
              )}
            </Box>
          )}
        </Box>
      </Box>
      <FormsBottomNavbar />
    </>
  );
};

export default ThreedPlansInterior;