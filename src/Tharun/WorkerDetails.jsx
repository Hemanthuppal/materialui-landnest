import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Avatar,
  IconButton,
  CircularProgress,
  useTheme,
  useMediaQuery,
   CardContent,
  Card,
        

} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import FormsBottomNavbar from '../maniteja/FormsBottomNavbar';
import { BASE_URL } from './../Api/ApiUrls';

const WorkerDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [workerDetails, setWorkerDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const isSmallHeight = useMediaQuery('(max-height:740px)');
  const isTinyHeight = useMediaQuery('(max-height:667px)');

  useEffect(() => {
    const fetchWorkerDetails = async () => {
      try {
        const response = await fetch(`${BASE_URL}/vendors/${id}/`);
        if (!response.ok) throw new Error('Failed to fetch worker details');
        const data = await response.json();
        setWorkerDetails(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchWorkerDetails();
  }, [id]);

  if (loading || error || !workerDetails) {
    return (
      <Box
        sx={{
          bgcolor: 'rgb(239, 231, 221)',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: 2,
        }}
      >
        {loading ? <CircularProgress /> : <Typography color="error">{error || 'No worker details found'}</Typography>}
      </Box>
    );
  }

  return (
    <Box sx={{ bgcolor: 'rgb(239, 231, 221)', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          bgcolor: 'black',
          px: 2,
          py: 1,
          display: 'flex',
          alignItems: 'center',
          borderBottom: '1px solid #ccc',
          color: 'white',
        }}
      >
        <IconButton onClick={() => navigate(-1)} sx={{ mr: 1 }}>
          <ArrowBackIosNewIcon />
        </IconButton>
        <Typography variant="h6" fontWeight="bold">Worker Details</Typography>
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          pt: 8,
          pb: 14,
          px: 2,
          maxWidth: 600,
          mx: 'auto',
          overflowY: 'auto',
          flex: 1,
        }}
      >
         <Card elevation={3} sx={{ p: 2 }}>
          <CardContent>

        {/* Profile Image */}
        <Box display="flex" justifyContent="center" sx={{ mb: 3 }}>
          <Avatar
            src={`${BASE_URL}${workerDetails.profile}`}
            sx={{
              width: isTinyHeight ? 70 : isSmallHeight ? 80 : 100,
              height: isTinyHeight ? 70 : isSmallHeight ? 80 : 100,
              borderRadius: '8px',
              border: '2px solid #e0e0e0',
            }}
          />
        </Box>

        {/* Info Fields */}
        <Box sx={{ mb: 3 }}>
          {[
            { label: 'Name', value: workerDetails.name },
            { label: 'Email ID', value: workerDetails.email },
            { label: 'Mobile', value: workerDetails.mobile },
            { label: 'Address', value: workerDetails.address },
            { label: 'Profession', value: workerDetails.profession },
            { label: 'Experience', value: `${workerDetails.experience} years` },
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
              <Typography>{item.value || 'N/A'}</Typography>
            </Box>
          ))}
        </Box>

        {/* Work Photos */}
        {/* Work Photos */}
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Work Photos:
        </Typography>
        {workerDetails.work_images?.length > 0 ? (
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 1,
            }}
          >
            {workerDetails.work_images.map((image, index) => (
              <Box
                key={image.id || index}
                component="img"
                src={`${BASE_URL}${image.image}`}
                alt={`work-${index}`}
                sx={{
                  width: {
                    xs: '30%', // Allow flexible wrap based on width
                    sm: '28%',
                    md: '25%',
                  },
                  height: 'auto',
                  aspectRatio: '4 / 3',
                  objectFit: 'cover',
                  borderRadius: 2,
                  boxShadow: 1,
                }}
              />
            ))}
          </Box>
        ) : (
          <Typography>No work photos available</Typography>
        )}
 </CardContent>
        </Card>

      </Box>

      {/* Bottom Nav */}
      <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
        <FormsBottomNavbar />
      </Box>
    </Box>
  );
};

export default WorkerDetails;
