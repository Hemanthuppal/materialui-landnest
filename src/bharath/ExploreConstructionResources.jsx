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
  useMediaQuery
} from '@mui/material';
import {
  Kitchen as KitchenIcon,
  Home as StructureIcon,
  Bathtub as BathroomIcon,
  DoorFront as DoorsIcon
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

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

  const drawerWidth = 80;

  const categories = {
    kitchen: [
      { id: 1, title: 'Modern Kitchen', imageUrl: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 2, title: 'Island Kitchen', imageUrl: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 3, title: 'Rustic Kitchen', imageUrl: 'https://images.unsplash.com/photo-1583845112203-29329902330b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 4, title: 'Minimal Kitchen', imageUrl: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' }
    ],
    structure: [
      { id: 1, title: 'Modern House', imageUrl: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 2, title: 'Wooden Cabin', imageUrl: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 3, title: 'Brick House', imageUrl: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 4, title: 'Concrete Building', imageUrl: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' }
    ],
    bathroom: [
      { id: 1, title: 'Luxury Bathroom', imageUrl: 'https://images.unsplash.com/photo-1600566752355-35792bedcfe3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 2, title: 'Modern Bathroom', imageUrl: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 3, title: 'Small Bathroom', imageUrl: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 4, title: 'Stone Bathroom', imageUrl: 'https://images.unsplash.com/photo-1566669437687-7040a6926753?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' }
    ],
    doors: [
      { id: 1, title: 'Modern Door', imageUrl: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 2, title: 'Wooden Door', imageUrl: 'https://images.unsplash.com/photo-1595624871930-6e8537998592?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 3, title: 'Glass Door', imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
      { id: 4, title: 'Barn Door', imageUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' }
    ]
  };

  const rows = chunkArray(categories[activeCategory], 2);

  return (
    <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#f5f5f5',
            borderRight: 'none',
          },
        }}
      >
        <List dense sx={{ p: 0 }}>
          {[{ id: 'kitchen', icon: <KitchenIcon />, label: 'Kitchen' },
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
                    backgroundColor: '#00C4B4',
                    color: 'white',
                    '& .MuiListItemIcon-root': { color: 'white' },
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 'auto', mr: 1 }}>{item.icon}</ListItemIcon>
                {!isMobile && <ListItemText primary={item.label} sx={{ ml: 1 }} />}
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </Drawer>

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 2,
          overflowY: 'auto',
          bgcolor: '#fff',
        }}
      >
        <Typography variant="h6" align="center" sx={{ mb: 2, fontWeight: 500, color: '#1a237e' }}>
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
  );
};

export default ExploreConstructionResources;
