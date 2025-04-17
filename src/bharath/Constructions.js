import { useNavigate } from 'react-router-dom';
import {
        Box, Grid, Typography, useTheme, useMediaQuery, Card, CardContent, IconButton
} from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import React, { useEffect, useState } from 'react';
import { CardMedia, Container } from '@mui/material';

const steps = [
        {
                title: 'Agreement Sign',
                image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
        },
        {
                title: 'Soil Test',
                image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
        },
        {
                title: 'Column Marking',
                image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
        },
        {
                title: 'Column Foundation',
                image: 'https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
        },
        {
                title: 'Column Plinth',
                image: 'https://images.unsplash.com/photo-1622372738946-62e02505feb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
        },
        {
                title: 'Roof Shuttering',
                image: 'https://images.unsplash.com/photo-1605153864431-a2795a1b2d95?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
        },
        {
                title: 'Roof Barbinding',
                image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
        },
        {
                title: 'Roof Concrete',
                image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
        },
        {
                title: 'Partitions Wall',
                image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
        },
        {
                title: 'Flooring',
                image: 'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
        },
        {
                title: 'Electrical',
                image: 'https://images.unsplash.com/photo-1605170439002-90845e8c0137?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
        },
        {
                title: 'Plumbing',
                image: 'https://images.unsplash.com/photo-1600566752225-9f0fc0a76e96?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
        },
        {
                title: 'Fabrication',
                image: 'https://images.unsplash.com/photo-1605153864431-a2795a1b2d95?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
        },
        {
                title: 'Doors and Windows',
                image: 'https://images.unsplash.com/photo-1600607688969-a5bfa4fe99c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
        },
        {
                title: 'Paintings',
                image: 'https://images.unsplash.com/photo-1600607688969-a5bfa4fe99c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
        },
        {
                title: 'Handover',
                image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
        },
];

const chunkArray = (array, chunkSize) => {
        const result = [];
        for (let i = 0; i < array.length; i += chunkSize) {
                result.push(array.slice(i, i + chunkSize));
        }
        return result;
};
const Constructions = () => {
        const navigate = useNavigate();

        const theme = useTheme();
        const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
        const [chunkSize, setChunkSize] = useState(2); // default to 2

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




        useEffect(() => {
                const updateChunkSize = () => {
                        const width = window.innerWidth;
                        if (width >= 350 && width <= 500) {
                                setChunkSize(2);
                        } else {
                                setChunkSize(1); // fallback for smaller or larger widths
                        }
                };

                updateChunkSize();
                window.addEventListener('resize', updateChunkSize);
                return () => window.removeEventListener('resize', updateChunkSize);
        }, []);

        const rows = chunkArray(steps, chunkSize);


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
                                        onClick={() => navigate('/dashboard')}
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
                                // width: '100%',
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
                                padding: isMobile ? 2 : 2,
                                marginY: 4,
                                // width: '100%'
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
                                // width: '100vw',
                                padding: 2,
                                marginY: 4,
                                // overflowX: 'auto'
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
                                {rows.map((row, rowIndex) => (
                                        <Box
                                                key={rowIndex}
                                                display="flex"
                                                flexDirection="row"
                                                gap={2}
                                                mb={2}
                                                justifyContent="center"
                                        >
                                                {row.map((step, colIndex) => (
                                                        <Card key={colIndex} sx={{ flex: 1, minWidth: 0 }}>
                                                                <CardMedia
                                                                        component="img"
                                                                        height="160"
                                                                        image={step.image}
                                                                        alt={step.title}
                                                                        sx={{ objectFit: 'cover' }}
                                                                />
                                                                <CardContent sx={{ p: 1 }}>
                                                                        <Typography variant="subtitle2" align="left" fontWeight={500}>
                                                                                {step.title}
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

export default Constructions;




