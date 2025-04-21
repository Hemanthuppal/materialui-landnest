import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  Grid,
  Paper,
  BottomNavigation,
  BottomNavigationAction,
  IconButton,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import PostAddIcon from '@mui/icons-material/PostAdd';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import PersonIcon from '@mui/icons-material/Person';
import FormsBottomNavbar from '../maniteja/FormsBottomNavbar';

const workerDetails = {
  name: 'Kiran',
  email: 'Kiran@gmail.com',
  mobile: '9999999999',
  address: '7-52/5b',
  customerId: 'CUSTOMER001',
  category: 'Flooring',
  description: 'Good worker',
  photos: [
    'https://thumbs.dreamstime.com/b/man-cleaning-kitchen-worktop-portrait-happy-young-222459943.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaowl-g-wcchBvXY-BNXdiopLrf9ZgNw5SJMeMlSPbdse9LMz2Y7lcFKs&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFmm06GweVSfEMNl3y9ryxP04w3X2dKqsLjHHT_8xRde6g62AKHUr1ack&s',
    'https://img.freepik.com/free-photo/medium-shot-people-cleaning-building_23-2150454565.jpg',
    'https://img.freepik.com/premium-photo/team-service-workers-cleaning-sofa-carpet-cuisine-table-panoramic-window_161094-21349.jpg',
    'https://img.freepik.com/free-photo/medium-shot-people-cleaning-building_23-2150454555.jpg',
  ],
};

const WorkerDetails = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/inboxlist'); // Navigate to inboxList
  };

  return (
    <Box
      sx={{
        maxHeight: '100vh',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        // pt: 4,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: '100%',
          maxWidth: 600,
          p: 3,
          borderRadius: 2,
          display: 'flex',
          flexDirection: 'column',
          height: '100vh'
        }}
      >
        {/* Back arrow header */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <IconButton onClick={() => navigate('/home-service')} sx={{ mr: 1 }}>
             <ArrowBackIosNewIcon />
          </IconButton>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Worker Details
          </Typography>
        </Box>

        <Box display="flex" justifyContent="center"  onClick={handleLogoClick}  sx={{ mb: 3 }}>
          <Avatar
            src="https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg="
            sx={{
              width: 100,
              height: 100,
              borderRadius: '8px',
              border: '2px solid #e0e0e0',
            }}
          />
        </Box>

        <Box sx={{ mb: 3 }}>
  {[
    { label: 'Name', value: workerDetails.name },
    { label: 'Email ID', value: workerDetails.email },
    { label: 'Mobile', value: workerDetails.mobile },
    { label: 'Address', value: workerDetails.address },
    { label: 'Customer ID', value: workerDetails.customerId },
    { label: 'Category', value: workerDetails.category },
    { label: 'Description', value: workerDetails.description },
  ].map((item, index) => (
    <Box
      key={index}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        mb: 1,
        // borderBottom: '1px solid #ddd',
        pb: 0.5,
      }}
    >
      <Typography fontWeight="bold">{item.label}:</Typography>
      <Typography>{item.value}</Typography>
    </Box>
  ))}
</Box>


        <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Work Photos:
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            // mt: 2,
          }}
        >
          {workerDetails.photos.map((photo, index) => (
            <Box
              key={index}
              component="img"
              src={photo}
              alt={`work-${index}`}
              sx={{
                width: 'calc(33.333% - 8px)',
                margin: '4px',
                borderRadius: 1,
                aspectRatio: '1',
                objectFit: 'cover',
              }}
            />
          ))}
        </Box>
      </Paper>

     <FormsBottomNavbar />
    </Box>
  );
};

export default WorkerDetails;
