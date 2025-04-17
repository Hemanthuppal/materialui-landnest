import React from 'react';
import { Box, Card, CardMedia, CardContent, Typography,   IconButton,  Grid,
  useMediaQuery,   useTheme,
  
} from '@mui/material';
import pic1 from './Images/2d-pic1.jpg';
import pic2 from './Images/2d-pic2.jpg';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';

const data = [
  {
    id: 1,
    title: '2d plans',
    image: pic1
  },
  {
    id: 2,
    title: 'content 2',
    image: pic1
  },
  {
    id: 3,
    title: 'content 3',
    image: pic2
  },
  {
    id: 4,
    title: 'content 4',
    image: pic2
  },
  {
    id: 5,
    title: 'content 5',
    image: pic1
  },
  {
    id: 6,
    title: 'content 6',
    image: pic2
  },
  {
    id: 7,
    title: 'content 7',
    image: pic1
  },
  {
    id: 8,
    title: 'content 8',
    image: pic2
  }

];

// Function to split data into chunks of 2 items each
const chunkArray = (array, chunkSize) => {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const TwodPlansInterior = () => {
    const theme = useTheme();
  
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const rows = chunkArray(data, 2); // Split data into groups of 2

  return (

    <>


    <Box display="flex" alignItems="center" padding="10px">
        <IconButton onClick={() => navigate('/constructions')}>
          <ArrowBackIosIcon />
        </IconButton>
       
      </Box>

      <Box sx={{
          backgroundColor: '#e6f2ff',  // Light blue color
          padding: isMobile ? 2 : 2,
          borderRadius: 1,
          // Optional: adds slight rounded corners
        }}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Link to="/constructions" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography variant={isMobile ? "h6" : "h5"} component="div">
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


      <Typography
          align="center"
          flex={1}
          fontWeight="bold"
          fontSize="25px"
        >
          2D Plans Interior
        </Typography>


    <Box display="flex" flexDirection="column" gap={1} marginTop="10px">


      
      {rows.map((row, rowIndex) => (
        <Box
          key={rowIndex}
          display="flex"
          overflow="auto"
          padding={1}
          gap={1}
        >
          {row.map((item) => (
            <Card
              key={item.id}
              sx={{ minWidth: '48%', flexShrink: 0, borderRadius: 2, boxShadow: 3 }}
            >
              <CardMedia
                component="img"
                height="100"
                image={item.image}
                alt={item.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ padding: '6px' }}>
                <Typography variant="subtitle1" align="left" fontWeight="bold">
                  {item.title}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      ))}
    </Box>
    </>
  );
};

export default TwodPlansInterior;