import { React } from 'react';
import {
  Box,
  Typography,
  Grid,
  Chip,
  Card,
  CardContent,
  IconButton,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const SampleDescription = ({
  title,
  address,
  price,
  priceNote,
  image,
  basicInfo,
  nearbyPlaces,
  overview,
  finalInfo,
}) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ width: '100vw', minHeight: '100vh', bgcolor: ' #f8f9fa', pb: 10 ,backgroundColor: 'rgb(239, 231, 221)'}}>
      {/* Header with Back Button */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          bgcolor: 'rgb(49, 48, 49)',
          color: 'white',
          p: 2,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <IconButton onClick={() => navigate(-1)} sx={{ color: 'white', mr: 1 }}>
          <ArrowBackIosNewIcon />
        </IconButton>
        <Typography variant="h6" fontWeight="bold">
          {title}
        </Typography>
      </Box>

      {/* Details Card */}
      <Box sx={{ px: 2, mt: 10 }}>
        <Card
          sx={{
            borderRadius: '20px',
            background: 'linear-gradient(135deg, #ffffff 0%,rgb(248, 248, 248) 100%)',
            boxShadow: 5,
          }}
        >
          {/* Image */}
          <Box
            component="img"
            src={image}
            alt="Property"
            sx={{
              width: '100%',
              height: 220,
              objectFit: 'cover',
              borderTopLeftRadius: '20px',
              borderTopRightRadius: '20px',
            }}
          />

          <CardContent>
            {/* Title & Price */}
            <Grid container justifyContent="space-between" alignItems="center" sx={{ pb: 2 }}>
              <Grid item xs={8}>
                <Typography fontWeight="bold" fontSize="18px">
                  {title}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {address}
                </Typography>
              </Grid>
              <Grid item sx={{ textAlign: 'right' }}>
                <Typography fontWeight="bold" fontSize="18px" color="rgb(240, 65, 30)">
                  {price}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {priceNote}
                </Typography>
              </Grid>
            </Grid>

            {/* Basic Info */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                bgcolor: ' #ede7f6',
                borderRadius: 2,
                p: 2,
                mb: 2,
              }}
            >
              {basicInfo.map((item, i) => (
                <Box key={i} sx={{ textAlign: 'center', flex: 1 }}>
                  <Typography fontWeight="bold" color="primary">
                    {item.value}
                  </Typography>
                  <Typography variant="caption">{item.label}</Typography>
                </Box>
              ))}
            </Box>

            {/* Nearby */}
            <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
              Nearby:
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
              {nearbyPlaces.map((place, i) => (
                <Chip
                  key={i}
                  label={place}
                  sx={{
                    bgcolor: 'rgb(211, 135, 173)',
                    color: 'rgb(35, 35, 36)',
                    fontWeight: 'bold',
                    fontSize: '13px',
                  }}
                />
              ))}
            </Box>

            {/* Overview */}
            <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
              Overview:
            </Typography>
            <Box
              sx={{
                border: '2px solid #424242',
                borderRadius: 2,
                overflow: 'hidden',
              }}
            >
              {overview.map((row, rowIndex) => (
                <Box key={rowIndex} sx={{ display: 'flex' }}>
                  {row.map((item, colIndex) => (
                    <Box
                      key={colIndex}
                      sx={{
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        p: 2,
                        borderRight: colIndex == 0 ? '1px solid #9e9e9e' : 'none',
                        borderBottom: rowIndex < overview.length - 1 ? '1px solid #9e9e9e' : 'none',
                      }}
                    >
                      <Box sx={{ color: 'rgb(50, 47, 52)' }}>{item.icon}</Box>
                      <Box>
                        <Typography fontWeight={600} fontSize="15px">
                          {item.title}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {item.subtitle}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              ))}
            </Box>

            {/* Final Info */}
            <Box sx={{ mt: 3, borderTop: '1px dashed #d1c4e9', pt: 2 }}>
              {finalInfo.map(({ label, value, icon }, i) => (
                <Box
                  key={i}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mb: i !== finalInfo.length - 1 ? 1.5 : 0,
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', color: 'rgb(52, 50, 53)' }}>
                    {icon}
                    <Typography fontSize={14} sx={{ ml: 1 }} color="text.primary">
                      {label}
                    </Typography>
                  </Box>
                  <Typography fontWeight={500} color="text.primary" fontSize={14}>
                    {value}
                  </Typography>
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default SampleDescription;
