import React from 'react';
import { Box, Typography, Button, Container, Grid, Card, CardContent, useTheme, useMediaQuery, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';

const Interiors = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const navigate = useNavigate();


  const cards = [
    {
      title: "Full Time Interiors",
      description: "Professional 2D plans with detailed measurements",
      bgImage: 'url(https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
    },
    {
      title: "Commercial Spaces Interiors",
      description: "Professional 2D plans with detailed measurements",
      bgImage: 'url(https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
    },
    {
      title: "Modular Kitchens",
      description: "Detailed exterior view facade designs",
      bgImage: 'url(https://images.unsplash.com/photo-1556909212-d5b604d0c90d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
    },
    {
      title: "Luxury Interiors",
      description: "Complete construction document sets",
      bgImage: 'url(https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
    },
    {
      title: "Home Renovations",
      description: "Detailed cost estimates and proposals",
      bgImage: 'url(https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
    },
    {
      title: "Landscaping",
      description: "Complete construction document sets",
      bgImage: 'url(https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
    },
    {
      title: "3D Elevations",
      description: "Detailed cost estimates and proposals",
      bgImage: 'url(https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
    }
  ];

  return (

    <>
   

      <Box display="flex" alignItems="center" p={1} sx={{
        background: 'white',
        boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
        position: 'sticky',
        top: 0,
        zIndex: 1100
      }}>
        <IconButton
          onClick={() => navigate('/constructions')}
          sx={{
            color: '#4A00E0',
            '&:hover': {
              backgroundColor: 'rgba(74, 0, 224, 0.1)'
            }
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>
      </Box>

        <Box sx={{
                backgroundColor: '#e6f2ff',  // Light blue color
                padding: isMobile ? 2 : 2,
                borderRadius: 1,
                position: 'sticky',
                top: 0,
                zIndex: 1100
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

      <Container sx={{ padding: 1, backgroundColor: "lightgray" }}>
        {/* Services Row */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <Typography
            variant="body1">Our services</Typography>
          <Typography
            variant="body1">Portfolio</Typography>
          <Typography onClick={() => navigate('/how-it-works')} sx={{ cursor: 'pointer' }}
            variant="body1">How it works?</Typography>
        </Box>

        {/* Full-width Image with Overlay Text & Button */}
        <Box
          sx={{
            width: '100%',
            height: 200,
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3))', // Replace with your image
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: 1,
            position: 'relative',
            mb: 3,
          }}
        >
          {/* Text on the left */}
          <Typography
            variant="h5"
            sx={{
              position: 'absolute',
              top: '20%',
              left: '5%',
              color: 'white',
              fontWeight: 'bold',
              textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
            }}
          >
            "Designing Dreams
            <br /> Crafting Delight".
          </Typography>

          {/* Button at the bottom */}
          <Button
            variant="contained"
            color="error"
            sx={{
              position: 'absolute',
              bottom: '10%',
              left: '17%',
              fontWeight: 'bold',
              borderRadius: 30,
              boxShadow: 2,
            }}
          >
            Start my transformation
          </Button>
        </Box>



        {/* Pricing Buttons */}
        <Grid container spacing={2} sx={{ mb: 2 }}>
          {/* First Row - 1BHK and 2BHK */}
          <Grid item xs={6}>
            <Button
              fullWidth
              variant="contained"
              color="error"
              sx={{
                py: 0.8,
                borderRadius: 30,
                borderWidth: 2,
                fontWeight: 'bold',
                left: '45%'

              }}
            >
              1BHK starting at 1.8L
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              fullWidth
              variant="contained"
              color="error"
              sx={{
                py: 0.8,
                borderRadius: 30,
                borderWidth: 2,
                fontWeight: 'bold',
                left: '45%'

              }}
            >
              2BHK starting at 2.5L
            </Button>
          </Grid>

          {/* Second Row - Another 2BHK */}
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              color="error"
              sx={{
                py: 0.8,
                borderRadius: 30,
                borderWidth: 2,
                fontWeight: 'bold',
                left: '45%'

              }}
            >
              3BHK starting at 3.5L
            </Button>
          </Grid>
        </Grid>

        {/* Transformation Button */}
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          sx={{
            py: 0.8,
            fontSize: '1rem',
            fontWeight: 'bold',
            borderRadius: 30,
            mt: 1
          }}
        >
          Start my transformation
        </Button>


        <Typography
          variant="h5"
          fontWeight="bold"
          gutterBottom
          sx={{
            textAlign: 'left',
            mt: 2,
            mb: 2,
            color: 'primary.main',
            fontSize: '1.5rem',
            paddingLeft: 2
          }}
        >
          Our Services
        </Typography>





        <Box sx={{ width: '100%' }}>
          {cards.map((card, index) => (
            <Card key={index} sx={{
              backgroundImage: `${card.bgImage}`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: 200,
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              color: 'white',
              position: 'relative',
              borderRadius: '12px',
              boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
              mb: 3,
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.5)',
                borderRadius: '12px'
              }
            }}>
              <CardContent sx={{
                position: 'relative',
                zIndex: 1,
                textAlign: 'left',
                width: '100%',
                padding: isMobile ? 3 : 4,
              }}>
                <Typography variant="h6" component="div" fontWeight="bold" gutterBottom>
                  {card.title}
                </Typography>
                <Typography variant="body1" component="div">
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </>
  );
}

export default Interiors;