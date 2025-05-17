

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
  FormatPaint as PaintIcon
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';
import FormsBottomNavbar from '../maniteja/FormsBottomNavbar';
import logotop from './Images/landnest-logo.jpg';
import axios from 'axios';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';  // Hall
import WindowIcon from '@mui/icons-material/Window';            // Window
import KitchenIcon from '@mui/icons-material/Kitchen'; 
import { BASE_URL } from '../../src/Api/ApiUrls';

const chunkArray = (array, chunkSize) => {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const ExploreConstructionResources = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [categories, setCategories] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  const drawerWidth = '15%';

  // Default categories with icons (fallback if API fails)
  const defaultCategories = [
    { category_id: 1, category: 'Cement' },
    { category_id: 2, category: 'Steel' },
    { category_id: 3, category: 'Brick' },
    { category_id: 4, category: 'Sand' },
    { category_id: 5, category: 'Stone' },
    { category_id: 6, category: 'Wood and Windows' },
    { category_id: 7, category: 'Electrical' },
    { category_id: 8, category: 'Fabrication Works' },
    { category_id: 9, category: 'Plumbing Works' },
    { category_id: 10, category: 'Tiles and Granite' },
    { category_id: 11, category: 'Paint Work' }
  ];

  // Fetch categories and materials
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch categories from API
        const categoriesResponse = await axios.get(`${BASE_URL}/material-categories/`);
        const fetchedCategories = categoriesResponse.data.length > 0 ? 
          categoriesResponse.data : defaultCategories;
        
        setCategories(fetchedCategories);
        
        // Set the first category as active by default
        if (fetchedCategories.length > 0) {
          setActiveCategory(fetchedCategories[0].category_id);
          await fetchMaterials(fetchedCategories[0].category_id);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
        // Fallback to default categories if API fails
        setCategories(defaultCategories);
        if (defaultCategories.length > 0) {
          setActiveCategory(defaultCategories[0].category_id);
          fetchMaterials(defaultCategories[0].category_id);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Fetch materials when active category changes
  useEffect(() => {
    if (activeCategory) {
      fetchMaterials(activeCategory);
    }
  }, [activeCategory]);

  const fetchMaterials = async (categoryId) => {
    try {
      setLoading(true);
      const response = await axios.get(`${BASE_URL}/material-content/`);
      const filteredMaterials = response.data
        .filter(item => item.category_id == categoryId)
        .map(item => ({
          id: item.content_id,
          title: item.content,
          imageUrl: `${BASE_URL}${item.image}`
        }));
      setMaterials(filteredMaterials);
    } catch (error) {
      console.error('Error fetching materials:', error);
    } finally {
      setLoading(false);
    }
  };

  const getCategoryIcon = (categoryName) => {
    switch (categoryName.toLowerCase()) {
       case 'hall':
      return <MeetingRoomIcon />;
    case 'window':
      return <WindowIcon />;
    case 'kitchen':
      return <KitchenIcon />;
      case 'cement':
        return <ConstructionIcon />;
      case 'steel':
        return <SteelIcon />;
      case 'brick':
        return <BrickIcon />;
      case 'sand':
        return <SandIcon />;
      case 'stone':
        return <StoneIcon />;
      case 'wood and windows':
        return <WoodWindowsIcon />;
      case 'electrical':
        return <ElectricalIcon />;
      case 'fabrication works':
        return <FabricationIcon />;
      case 'plumbing works':
        return <PlumbingIcon />;
      case 'tiles and granite':
        return <TilesGraniteIcon />;
      case 'paint work':
        return <PaintIcon />;
      default:
        return <ConstructionIcon />;
    }
  };

  const rows = chunkArray(materials, 2);

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

      <Box sx={{ display: 'flex', height: 'calc(100vh - 112px)', overflow: 'hidden',  }}>
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
              height: '70vh',
              marginLeft: '1px',
              border: '1px solid black',
            },
          }}
        >
          {loading && categories.length == 0 ? (
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
                      onClick={() => setActiveCategory(category.category_id)}
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
                        {getCategoryIcon(category.category)}
                      </ListItemIcon>

                      <ListItemText
                        primary={category.category}
                        primaryTypographyProps={{
                          fontSize: '0.7rem',
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
            Explore Construction Resources
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
                  No materials found for this category
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

export default ExploreConstructionResources;