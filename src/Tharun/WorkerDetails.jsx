import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  IconButton,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
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
    navigate('/inboxlist');
  };

  return (
    <Box sx={{ bgcolor: 'rgb(239, 231, 221)', minHeight: '100vh' }}>
      {/* Fixed Header */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          bgcolor: 'rgb(239, 231, 221)',
          px: 2,
          py: 1,
          display: 'flex',
          alignItems: 'center',
          borderBottom: '1px solid #ccc',
        }}
      >
        <IconButton onClick={() => navigate('/home-service')} sx={{ mr: 1 }}>
          <ArrowBackIosNewIcon />
        </IconButton>
        <Typography variant="h6" fontWeight="bold">
          Worker Details
        </Typography>
      </Box>

      {/* Scrollable Content */}
      <Box
        sx={{
          pt: 8,
          pb: 8,
          px: 2,
          maxWidth: 600,
          mx: 'auto',
          bgcolor: 'rgb(239, 231, 221)',
        }}
      >
        <Box display="flex" justifyContent="center" onClick={handleLogoClick} sx={{ mb: 3 }}>
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

        {/* Worker Info */}
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
              }}
            >
              <Typography fontWeight="bold">{item.label}:</Typography>
              <Typography>{item.value}</Typography>
            </Box>
          ))}
        </Box>

        {/* Work Photos */}
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Work Photos:
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
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
      </Box>

      {/* Bottom Navigation */}
      <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
        <FormsBottomNavbar />
      </Box>
    </Box>
  );
};

export default WorkerDetails;
