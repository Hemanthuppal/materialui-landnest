import { useNavigate } from 'react-router-dom';
import { Box, Grid, Typography, useTheme, useMediaQuery, Card, CardContent, } from '@mui/material';
import { Link } from 'react-router-dom';

const Constructions = () => {
        const navigate = useNavigate();

        const theme = useTheme();
        const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

        const cards = [
                {
                        title: "Floor Plans 2D",
                        description: "Professional 2D plans with Detailed Measurements.",
                        bgImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
                },
                {
                        title: "Floor Plans 3D",
                        description: "Professional 3D plans with Detailed Measurements.",
                        bgImage: 'url(https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
                },
                {
                        title: "Elevations",
                        description: "Detailed Exterior Views and facade designs.",
                        bgImage: 'url(https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
                },
                {
                        title: "Our Construction Packages",
                        description: "Complete construction document sets.",
                        bgImage: 'url(https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
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





        return (
                <>
                        <Box sx={{
                                backgroundColor: '#e6f2ff',  // Light blue color
                                padding: isMobile ? 2 : 2,
                                borderRadius: 1,
                                marginTop: 3,
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




                </>
        );
};

export default Constructions;