import { useNavigate } from 'react-router-dom';
import { Box, Grid, Typography, useTheme, useMediaQuery, Card, CardContent,   IconButton
} from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';



// Helper to chunk array into rows of 2
const chunkArray = (arr, size) => {
        const result = [];
        for (let i = 0; i < arr.length; i += size) {
          result.push(arr.slice(i, i + size));
        }
        return result;
      };
const Constructions = () => {
        const navigate = useNavigate();

        const theme = useTheme();
        const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

        const cards = [
                {
                        title: "Floor Plans 2D",
                        description: "Professional 2D plans with Detailed Measurements.",
                        bgImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
                        path: "/two-d-plane-interior"

                },
                {
                        title: "Floor Plans 3D",
                        description: "Professional 3D plans with Detailed Measurements.",
                        bgImage: 'url(https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
                        path: "/three-d-plane-interior"

                },
                {
                        title: "Elevations",
                        description: "Detailed Exterior Views and facade designs.",
                        bgImage: 'url(https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
                        path: "/elevations"

                },
                {
                        title: "Our Construction Packages",
                        description: "Complete construction document sets.",
                        bgImage: 'url(https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
                        path: "/packages"

                },
                {
                        title: "Quotations",
                        description: "Detailed cost estimates and proposals.",
                        bgImage: 'url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'


                }
        ];

        const trustCards = [
                {

                        bgImage: 'url(https://img.freepik.com/free-vector/hand-drawn-construction-background_23-2147724568.jpg)'
                },
                {

                        bgImage: 'url(https://img.freepik.com/free-vector/hand-drawn-construction-skyline_23-2147724566.jpg)'
                },
                {

                        bgImage: 'url(https://img.freepik.com/free-vector/hand-drawn-city-skyline_23-2147724567.jpg)'
                }
        ];

        const processImages = [
                {
                  title: 'Agreement Sign',
                  imageUrl: 'https://cdn.pixabay.com/photo/2017/07/31/11/21/document-2559790_1280.jpg',
                },
                {
                  title: 'Soil Test',
                  imageUrl: 'https://img.freepik.com/free-photo/agronomist-analyzing-soil-test_1150-16173.jpg',
                },
                {
                  title: 'Planning',
                  imageUrl: 'https://img.freepik.com/free-photo/close-up-architect-drawing_23-2147792445.jpg',
                },
                {
                  title: 'Construction',
                  imageUrl: 'https://img.freepik.com/free-photo/building-construction-site-with-cranes_23-2148898290.jpg',
                },
              ];
              
              const rows = chunkArray(processImages, 2); // Now it works fine
              
              



        return (
                <>

                        <Box display="flex" alignItems="center" padding="10px">
                                <IconButton onClick={() => navigate('/dashboard')}>
                                        <ArrowBackIosIcon />
                                </IconButton>

                        </Box>


                        <Box sx={{
                                backgroundColor: '#e6f2ff',  // Light blue color
                                padding: isMobile ? 2 : 2,
                                borderRadius: 1,
                                width: '100%',
                                // Optional: adds slight rounded corners
                        }}>
                                <Grid container justifyContent="space-between" alignItems="center">
                                        <Grid item>
                                                <Typography variant={isMobile ? "h6" : "h5"} component="div">
                                                        Constructions
                                                </Typography>
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

                        <Box sx={{
                                backgroundColor: 'rgba(173, 216, 230, 0.3)',
                                padding: isMobile ? 1 : 2,
                                marginY: 4,
                                width: '104%'
                        }}>
                                {/* Header row */}
                                <Grid container justifyContent="space-between" alignItems="center" sx={{ marginBottom: 2 }}>
                                        <Grid item>
                                                <Typography
                                                        onClick={() => navigate('/explore-construction-resources')}
                                                        variant={isMobile ? "body1" : "body1"} fontWeight="bold">
                                                        Explore Constructions Resources
                                                </Typography>
                                        </Grid>
                                        <Grid item>
                                                <Typography variant={isMobile ? "body1" : "body1"} fontWeight="bold">
                                                        Our Projects→
                                                </Typography>
                                        </Grid>
                                </Grid>

                                {/* Cards section */}
                                <Box sx={{ width: '100%' }}>
                                        {cards.map((card, index) => (
                                                <Card key={index}
                                                        onClick={() => navigate(card.path)} // Navigate on click
                                                        sx={{
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
                        </Box>

                        <Box sx={{
                                width: '100vw',
                                padding: 2,
                                marginY: 4,
                                overflowX: 'auto'
                        }}>
                                {/* Section Heading */}
                                <Typography
                                        variant="h5"
                                        fontWeight="bold"
                                        gutterBottom
                                        sx={{
                                                textAlign: 'left',
                                                mb: 2,
                                                color: 'primary.main',
                                                fontSize: '1.5rem',
                                                paddingLeft: 1
                                        }}
                                >
                                        Landnest & bold Trust
                                </Typography>

                                {/* Three Cards in Horizontal Row */}
                                <Box sx={{
                                        display: 'flex',
                                        gap: 1,
                                        width: 'max-content',
                                        minWidth: '100%',
                                }}>
                                        {trustCards.map((card, index) => (
                                                <Card key={index} sx={{
                                                        backgroundImage: `${card.bgImage}`,
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center',
                                                        height: 100,
                                                        minWidth: '100px',
                                                        flex: 1,
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        justifyContent: 'flex-end',
                                                        position: 'relative',
                                                        borderRadius: '8px',
                                                        overflow: 'hidden',
                                                        boxShadow: 1,
                                                        '&:before': {
                                                                content: '""',
                                                                position: 'absolute',
                                                                top: 0,
                                                                left: 0,
                                                                right: 0,
                                                                bottom: 0,
                                                                background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)'
                                                        }
                                                }}>
                                                        <CardContent sx={{
                                                                position: 'relative',
                                                                zIndex: 1,
                                                                color: 'white',
                                                                padding: 1.5,
                                                                '&:last-child': {
                                                                        paddingBottom: 1.5
                                                                }
                                                        }}>
                                                                <Typography variant="subtitle2" fontWeight="bold" gutterBottom sx={{
                                                                        fontSize: '0.9rem',
                                                                        lineHeight: 1.2
                                                                }}>
                                                                        {card.title}
                                                                </Typography>
                                                                <Typography variant="caption" sx={{
                                                                        fontSize: '0.7rem',
                                                                        lineHeight: 1.1,
                                                                        display: 'block'
                                                                }}>
                                                                        {card.description}
                                                                </Typography>
                                                        </CardContent>
                                                </Card>
                                        ))}
                                </Box>
                        </Box>
                        <Typography
                                variant="h5"
                                fontWeight="bold"
                                gutterBottom
                                sx={{
                                        textAlign: 'left',
                                        mb: 2,
                                        color: 'primary.main',
                                        fontSize: '1.5rem',
                                        paddingLeft: 2
                                }}
                        >
                                Our Construction Process
                        </Typography>



                        <Box sx={{ px: 2, py: 4 }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Our construction process
      </Typography>

      <Grid container spacing={2}>
        {rows.map((row, rowIndex) => (
          <Grid container item spacing={2} key={rowIndex}>
            {row.map((step, index) => (
              <Grid item xs={6} key={index}>
                <Card
                  sx={{
                    borderRadius: 3,
                    boxShadow: 3,
                    p: 1,
                    textAlign: 'center',
                  }}
                >
                  <Typography variant="subtitle1" fontWeight="600" gutterBottom>
                    {step.title}
                  </Typography>
                  <Box
                    component="img"
                    src={step.imageUrl}
                    alt={step.title}
                    sx={{
                      width: '100%',
                      height: 100,
                      objectFit: 'cover',
                      borderRadius: 2,
                    }}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        ))}
      </Grid>
    </Box>



                </>
        );
};

export default Constructions;




