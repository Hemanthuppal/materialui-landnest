import React from 'react';
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
import buildingImage from '../Images/house.jpeg';
import buildingImage2 from '../Images/house1.jpg';
import BottomNavbar from './BottomNavbar'; // ✅ Import the navbar

const PropertyCard = () => {
  return (
    <>
      {[1, 2].map((item, index) => {
        const imageToUse = index === 1 ? buildingImage2 : buildingImage;

        return (
          <Card key={index} sx={{ mb: 3, borderRadius: 3, bgcolor: '#f9f9f9' }}>
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
                  
                  sx={{ bgcolor: 'white' }}><ThumbUpAltOutlined /></Button>
                 
              </Box>
            </Box>

            <CardContent>
              <Typography variant="subtitle1" fontWeight="bold">
                Plot For Rent in Btm Layout 2nd Stage
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
             

<Grid container sx={{ border: '1px solid #e0e0e0', borderRadius: 1, overflow: 'hidden' }}>
  {/* Facing */}
  <Grid item xs={4}>
    <Box
      sx={{
        borderRight: '1px solid #e0e0e0',
        p: 1.5,
        textAlign: 'center',
      }}
    >
      <Typography variant="body2" fontWeight="bold" color="text.primary">
        Facing
      </Typography>
      <Typography variant="body2" color="text.secondary">
        East
      </Typography>
    </Box>
  </Grid>

  {/* Area */}
  <Grid item xs={4}>
    <Box
      sx={{
        borderRight: '1px solid #e0e0e0',
        p: 1.5,
        textAlign: 'center',
      }}
    >
      <Typography variant="body2" fontWeight="bold" color="text.primary">
        Area <span style={{ fontWeight: 'normal' }}>(40×40)</span>
      </Typography>
      <Typography variant="body2" color="text.secondary">
        1600 sq ft
      </Typography>
    </Box>
  </Grid>

  {/* Listed By */}
  <Grid item xs={4}>
    <Box
      sx={{
        p: 1.5,
        textAlign: 'center',
      }}
    >
      <Typography
        variant="body2"
        fontWeight="bold"
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={0.5}
        color="text.primary"
      >
        <LocationOn fontSize="small" color="action" /> Listed by
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Owner/Agent
      </Typography>
    </Box>
  </Grid>
</Grid>

            </CardContent>
          </Card>
        );
      })}

      
    </>
  );
};

export default PropertyCard;
