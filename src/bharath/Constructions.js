// import { useNavigate } from 'react-router-dom';
// import {
//         Box, Grid, Typography, useTheme, useMediaQuery, Card, CardContent, IconButton
// } from '@mui/material';
// import { Link } from 'react-router-dom';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

// import React, { useEffect, useState } from 'react';
// import { CardMedia, Container } from '@mui/material';
// import BottomNavbar from '../sharvani/BottomNavbar';

// const steps = [
//         {
//                 title: 'Agreement Sign',
//                 image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
//         },
//         {
//                 title: 'Soil Test',
//                 image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
//         },
//         {
//                 title: 'Column Marking',
//                 image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
//         },
//         {
//                 title: 'Column Foundation',
//                 image: 'https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
//         },
//         {
//                 title: 'Column Plinth',
//                 image: 'https://images.unsplash.com/photo-1622372738946-62e02505feb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
//         },
//         {
//                 title: 'Roof Shuttering',
//                 image: 'https://images.unsplash.com/photo-1605153864431-a2795a1b2d95?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
//         },
//         {
//                 title: 'Roof Barbinding',
//                 image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
//         },
//         {
//                 title: 'Roof Concrete',
//                 image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
//         },
//         {
//                 title: 'Partitions Wall',
//                 image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
//         },
//         {
//                 title: 'Flooring',
//                 image: 'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
//         },
//         {
//                 title: 'Electrical',
//                 image: 'https://images.unsplash.com/photo-1605170439002-90845e8c0137?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
//         },
//         {
//                 title: 'Plumbing',
//                 image: 'https://images.unsplash.com/photo-1600566752225-9f0fc0a76e96?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
//         },
//         {
//                 title: 'Fabrication',
//                 image: 'https://images.unsplash.com/photo-1605153864431-a2795a1b2d95?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
//         },
//         {
//                 title: 'Doors and Windows',
//                 image: 'https://images.unsplash.com/photo-1600607688969-a5bfa4fe99c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
//         },
//         {
//                 title: 'Paintings',
//                 image: 'https://images.unsplash.com/photo-1600607688969-a5bfa4fe99c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
//         },
//         {
//                 title: 'Handover',
//                 image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
//         },
// ];

// const chunkArray = (array, chunkSize) => {
//         const result = [];
//         for (let i = 0; i < array.length; i += chunkSize) {
//                 result.push(array.slice(i, i + chunkSize));
//         }
//         return result;
// };
// const Constructions = () => {
//         const navigate = useNavigate();

//         const theme = useTheme();
//         const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//         const [chunkSize, setChunkSize] = useState(2); // default to 2

//         const cards = [
//                 {
//                         title: "Floor Plans 2D",
//                         description: "Professional 2D plans with Detailed Measurements.",
//                         bgImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
//                         path: "/two-d-plane-interior"

//                 },
//                 {
//                         title: "Floor Plans 3D",
//                         description: "Professional 3D plans with Detailed Measurements.",
//                         bgImage: 'url(https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
//                         path: "/three-d-plane-interior"

//                 },
//                 {
//                         title: "Elevations",
//                         description: "Detailed Exterior Views and facade designs.",
//                         bgImage: 'url(https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
//                         path: "/elevations"

//                 },
//                 {
//                         title: "Our Construction Packages",
//                         description: "Complete construction document sets.",
//                         bgImage: 'url(https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
//                         path: "/packages"

//                 },
//                 {
//                         title: "Quotations",
//                         description: "Detailed cost estimates and proposals.",
//                         bgImage: 'url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'


//                 }
//         ];

//         const trustCards = [
//                 {

//                         bgImage: 'url(https://img.freepik.com/free-vector/hand-drawn-construction-background_23-2147724568.jpg)'
//                 },
//                 {

//                         bgImage: 'url(https://img.freepik.com/free-vector/hand-drawn-construction-skyline_23-2147724566.jpg)'
//                 },
//                 {

//                         bgImage: 'url(https://img.freepik.com/free-vector/hand-drawn-city-skyline_23-2147724567.jpg)'
//                 }
//         ];




//         useEffect(() => {
//                 const updateChunkSize = () => {
//                         const width = window.innerWidth;
//                         if (width >= 350 && width <= 500) {
//                                 setChunkSize(2);
//                         } else {
//                                 setChunkSize(1); // fallback for smaller or larger widths
//                         }
//                 };

//                 updateChunkSize();
//                 window.addEventListener('resize', updateChunkSize);
//                 return () => window.removeEventListener('resize', updateChunkSize);
//         }, []);

//         const rows = chunkArray(steps, chunkSize);


//         return (
//                 <>



//                         <Box display="flex" alignItems="center" p={1} sx={{
//                                 background: 'white',
//                                 boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
//                                 position: 'sticky',
//                                 top: 0,
//                                 zIndex: 1100
//                         }}>
//                                 <IconButton
//                                         onClick={() => navigate('/dashboard')}
//                                         sx={{
//                                                 color: '#4A00E0',
//                                                 '&:hover': {
//                                                         backgroundColor: 'rgba(74, 0, 224, 0.1)'
//                                                 }
//                                         }}
//                                 >
//                                         <ArrowBackIosIcon />
//                                 </IconButton>
//                         </Box>


//                         <Box sx={{
//                                 backgroundColor: '#e6f2ff',  // Light blue color
//                                 padding: isMobile ? 2 : 2,
//                                 borderRadius: 1,
//                                 position: 'sticky',
//                                 top: 0,
//                                 zIndex: 1100
//                                 // width: '100%',
//                                 // Optional: adds slight rounded corners
//                         }}>
//                                 <Grid container justifyContent="space-between" alignItems="center">
//                                         <Grid item>
//                                                 <Typography variant={isMobile ? "h6" : "h5"} component="div">
//                                                         Constructions
//                                                 </Typography>
//                                         </Grid>
//                                         <Grid item>
//                                                 <Link to="/interiors" style={{ textDecoration: 'none', color: 'inherit' }}>
//                                                         <Typography variant={isMobile ? "h6" : "h5"} component="div">
//                                                                 Interiors
//                                                         </Typography>
//                                                 </Link>
//                                         </Grid>
//                                 </Grid>
//                         </Box>

//                         <Box sx={{
//                                 backgroundColor: 'rgba(173, 216, 230, 0.3)',
//                                 padding: isMobile ? 2 : 2,
//                                 marginY: 4,
//                                 // width: '100%'
//                         }}>
//                                 {/* Header row */}
//                                 <Grid container justifyContent="space-between" alignItems="center" sx={{ marginBottom: 2 }}>
//                                         <Grid item>
//                                                 <Typography
//                                                         onClick={() => navigate('/explore-construction-resources')}
//                                                         variant={isMobile ? "body1" : "body1"} fontWeight="bold">
//                                                         Explore Constructions Resources
//                                                 </Typography>
//                                         </Grid>
//                                         <Grid item>
//                                                 <Typography variant={isMobile ? "body1" : "body1"} fontWeight="bold">
//                                                         Our Projects→
//                                                 </Typography>
//                                         </Grid>
//                                 </Grid>

//                                 {/* Cards section */}
//                                 <Box sx={{ width: '100%' }}>
//                                         {cards.map((card, index) => (
//                                                 <Card key={index}
//                                                         onClick={() => navigate(card.path)} // Navigate on click
//                                                         sx={{
//                                                                 backgroundImage: `${card.bgImage}`,
//                                                                 backgroundSize: 'cover',
//                                                                 backgroundPosition: 'center',
//                                                                 minHeight: 200,
//                                                                 width: '100%',
//                                                                 display: 'flex',
//                                                                 alignItems: 'center',
//                                                                 color: 'white',
//                                                                 position: 'relative',
//                                                                 borderRadius: '12px',
//                                                                 boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
//                                                                 mb: 3,
//                                                                 '&::before': {
//                                                                         content: '""',
//                                                                         position: 'absolute',
//                                                                         top: 0,
//                                                                         left: 0,
//                                                                         right: 0,
//                                                                         bottom: 0,
//                                                                         backgroundColor: 'rgba(0,0,0,0.5)',
//                                                                         borderRadius: '12px'
//                                                                 }
//                                                         }}>
//                                                         <CardContent sx={{
//                                                                 position: 'relative',
//                                                                 zIndex: 1,
//                                                                 textAlign: 'left',
//                                                                 width: '100%',
//                                                                 padding: isMobile ? 3 : 4,
//                                                         }}>
//                                                                 <Typography variant="h6" component="div" fontWeight="bold" gutterBottom>
//                                                                         {card.title}
//                                                                 </Typography>
//                                                                 <Typography variant="body1" component="div">
//                                                                         {card.description}
//                                                                 </Typography>
//                                                         </CardContent>
//                                                 </Card>
//                                         ))}
//                                 </Box>
//                         </Box>

//                         <Box sx={{
//                                 // width: '100vw',
//                                 padding: 2,
//                                 marginY: 4,
//                                 // overflowX: 'auto'
//                         }}>
//                                 {/* Section Heading */}
//                                 <Typography
//                                         variant="h5"
//                                         fontWeight="bold"
//                                         gutterBottom
//                                         sx={{
//                                                 textAlign: 'left',
//                                                 mb: 2,
//                                                 color: 'primary.main',
//                                                 fontSize: '1.5rem',
//                                                 paddingLeft: 1
//                                         }}
//                                 >
//                                         Landnest & bold Trust
//                                 </Typography>

//                                 <Box sx={{
//                                         display: 'flex',
//                                         gap: 1,
//                                         width: 'max-content',
//                                         minWidth: '100%',
//                                 }}>
//                                         {trustCards.map((card, index) => (
//                                                 <Card key={index} sx={{
//                                                         backgroundImage: `${card.bgImage}`,
//                                                         backgroundSize: 'cover',
//                                                         backgroundPosition: 'center',
//                                                         height: 100,
//                                                         minWidth: '100px',
//                                                         flex: 1,
//                                                         display: 'flex',
//                                                         flexDirection: 'column',
//                                                         justifyContent: 'flex-end',
//                                                         position: 'relative',
//                                                         borderRadius: '8px',
//                                                         overflow: 'hidden',
//                                                         boxShadow: 1,
//                                                         '&:before': {
//                                                                 content: '""',
//                                                                 position: 'absolute',
//                                                                 top: 0,
//                                                                 left: 0,
//                                                                 right: 0,
//                                                                 bottom: 0,
//                                                                 background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)'
//                                                         }
//                                                 }}>
//                                                         <CardContent sx={{
//                                                                 position: 'relative',
//                                                                 zIndex: 1,
//                                                                 color: 'white',
//                                                                 padding: 1.5,
//                                                                 '&:last-child': {
//                                                                         paddingBottom: 1.5
//                                                                 }
//                                                         }}>
//                                                                 <Typography variant="subtitle2" fontWeight="bold" gutterBottom sx={{
//                                                                         fontSize: '0.9rem',
//                                                                         lineHeight: 1.2
//                                                                 }}>
//                                                                         {card.title}
//                                                                 </Typography>
//                                                                 <Typography variant="caption" sx={{
//                                                                         fontSize: '0.7rem',
//                                                                         lineHeight: 1.1,
//                                                                         display: 'block'
//                                                                 }}>
//                                                                         {card.description}
//                                                                 </Typography>
//                                                         </CardContent>
//                                                 </Card>
//                                         ))}
//                                 </Box>
//                         </Box>
//                         <Typography
//                                 variant="h5"
//                                 fontWeight="bold"
//                                 gutterBottom
//                                 sx={{
//                                         textAlign: 'left',
//                                         mb: 2,
//                                         color: 'primary.main',
//                                         fontSize: '1.5rem',
//                                         paddingLeft: 2
//                                 }}
//                         >
//                                 Our Construction Process
//                         </Typography>



//                         <Box sx={{ px: 2, py: 4 }}>
//                                 {rows.map((row, rowIndex) => (
//                                         <Box
//                                                 key={rowIndex}
//                                                 display="flex"
//                                                 flexDirection="row"
//                                                 gap={2}
//                                                 mb={2}
//                                                 justifyContent="center"
//                                         >
//                                                 {row.map((step, colIndex) => (
//                                                         <Card key={colIndex} sx={{ flex: 1, minWidth: 0 }}>
//                                                                 <CardMedia
//                                                                         component="img"
//                                                                         height="160"
//                                                                         image={step.image}
//                                                                         alt={step.title}
//                                                                         sx={{ objectFit: 'cover' }}
//                                                                 />
//                                                                 <CardContent sx={{ p: 1 }}>
//                                                                         <Typography variant="subtitle2" align="left" fontWeight={500}>
//                                                                                 {step.title}
//                                                                         </Typography>
//                                                                 </CardContent>
//                                                         </Card>
//                                                 ))}
//                                         </Box>
//                                 ))}
//                         </Box>




//  <Box sx={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 1000 }}>
//         <BottomNavbar />
//       </Box>


//                 </>
//         );
// };

// export default Constructions;




















import { useNavigate } from 'react-router-dom';
import {
  Box, Grid, Typography, useTheme, useMediaQuery, Card, CardContent, IconButton,
  CardMedia, Container, BottomNavigation,
  BottomNavigationAction, Paper, Button

} from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import React, { useEffect, useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import AddIcon from '@mui/icons-material/Add';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import doors from "./Images/doors-windows.jpg"
import fabrication1 from "./Images/fabrication1.jpg"
import paintings1 from "./Images/paintings1.jpg"
import pic4 from "../Images/roofshuttering.webp";

import soiltest1 from "../Images/soiltest.webp";
import pic1 from "../Images/column_marking.webp";
import pic2 from "../Images/columnfoundation.jpg";
import pic3 from "../Images/plinth.avif";
import pic5 from "../Images/roofbarbending.jpg";
import pic6 from "../Images/roofconcreate.jpg";
import pic7 from "../Images/partitionwalls.jpg";
import pic8 from "../Images/flooring.jpg";
import pic9 from "../Images/electricals.jpg";
import pic10 from "../Images/plumbing.webp";
import pic11 from "../Images/fabrication.jpg";
import pic12 from "../Images/doors_windows.jpg";
import pic13 from "../Images/paintings.jpg";
import pic14 from "../Images/handover.jpg";
import pic15 from "../Images/agreement.webp";
import logotop from './Images/landnest-logo.jpg'
import { jsPDF } from "jspdf";
import FormsBottomNavbar from '../maniteja/FormsBottomNavbar';

const steps = [
  { title: 'Agreement Sign', image: pic15 },
  { title: 'Soil Test', image: soiltest1 },
  { title: 'Column Marking', image: pic1 },
  { title: 'Column Foundation', image: pic2 },
  { title: 'Column Plinth', image: pic3 },
  { title: 'Roof Shuttering', image: pic4 },
  { title: 'Roof Barbending', image: pic5 },
  { title: 'Roof Concrete', image: pic6 },
  { title: 'Partitions Wall', image: pic7 },
  { title: 'Flooring', image: pic8 },
  { title: 'Electrical', image: pic9 },
  { title: 'Plumbing', image: pic10 },
  { title: 'Fabrication', image: pic11 }, // Replaced
  { title: 'Doors and Windows', image: pic12 },
  { title: 'Paintings', image: pic13 }, // Replaced
  { title: 'Handover', image: pic14 },
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
  const [chunkSize, setChunkSize] = useState(2);
  const [value, setValue] = useState('construction');



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
    { bgImage: 'url(https://img.freepik.com/free-vector/hand-drawn-construction-background_23-2147724568.jpg)' },
    { bgImage: 'url(https://img.freepik.com/free-vector/hand-drawn-construction-skyline_23-2147724566.jpg)' },
    { bgImage: 'url(https://img.freepik.com/free-vector/hand-drawn-city-skyline_23-2147724567.jpg)' }
  ];

  useEffect(() => {
    const updateChunkSize = () => {
      const width = window.innerWidth;
      if (width >= 350 && width <= 500) {
        setChunkSize(2);
      } else {
        setChunkSize(1);
      }
    };

    updateChunkSize();
    window.addEventListener('resize', updateChunkSize);
    return () => window.removeEventListener('resize', updateChunkSize);
  }, []);

  const handleDownloadQuotation = () => {
    // Create a new PDF document
    const doc = new jsPDF();

    // Add logo or header (you can add your own image if needed)
    // doc.addImage(logoData, 'JPEG', 10, 10, 50, 25);

    // Title
    doc.setFontSize(20);
    doc.setTextColor(40, 40, 40);
    doc.text('CONSTRUCTION QUOTATION', 105, 30, { align: 'center' });

    // Company Info
    doc.setFontSize(12);
    doc.text('Landnest Construction Co.', 105, 40, { align: 'center' });
    doc.text('123 Construction Street, City, Country', 105, 46, { align: 'center' });
    doc.text('Phone: +123 456 7890 | Email: contact@landnest.com', 105, 52, { align: 'center' });

    // Client Info
    doc.setFontSize(12);
    doc.text('Bill To:', 20, 70);
    doc.text('Client Name: Sample Client', 20, 78);
    doc.text('Project Address: 123 Client Street, City', 20, 86);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 94);
    doc.text('Quotation #: Q-2023-001', 20, 102);

    // Table Header
    doc.setFontSize(12);
    doc.setTextColor(255, 255, 255);
    doc.setFillColor(57, 106, 177);
    doc.rect(20, 110, 170, 10, 'F');
    doc.text('Description', 25, 116);
    doc.text('Qty', 120, 116);
    doc.text('Unit Price', 140, 116);
    doc.text('Amount', 170, 116);

    // Table Content
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    const items = [
      { description: "Construction Materials (Phase 1)", quantity: 1, unitPrice: 5000, total: 5000 },
      { description: "Labor Costs (200 hours)", quantity: 1, unitPrice: 3000, total: 3000 },
      { description: "Design and Planning Fees", quantity: 1, unitPrice: 2000, total: 2000 },
      { description: "Permits and Approvals", quantity: 1, unitPrice: 500, total: 500 },
      { description: "Roofing Materials", quantity: 1, unitPrice: 2500, total: 2500 },
      { description: "Electrical Installation", quantity: 1, unitPrice: 1500, total: 1500 }
    ];

    let y = 120;
    items.forEach((item, index) => {
      // Alternate row colors
      if (index % 2 === 0) {
        doc.setFillColor(240, 240, 240);
        doc.rect(20, y, 170, 10, 'F');
      }

      doc.text(item.description, 25, y + 7);
      doc.text(item.quantity.toString(), 120, y + 7);
      doc.text(`$${item.unitPrice.toFixed(2)}`, 140, y + 7);
      doc.text(`$${item.total.toFixed(2)}`, 170, y + 7);
      y += 10;
    });

    // Totals
    const subtotal = items.reduce((sum, item) => sum + item.total, 0);
    const tax = subtotal * 0.1;
    const total = subtotal + tax;

    y += 15;
    doc.setFontSize(12);
    doc.text('Subtotal:', 140, y);
    doc.text(`$${subtotal.toFixed(2)}`, 170, y);
    y += 10;
    doc.text('Tax (10%):', 140, y);
    doc.text(`$${tax.toFixed(2)}`, 170, y);
    y += 10;
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text('TOTAL:', 140, y);
    doc.text(`$${total.toFixed(2)}`, 170, y);

    // Notes
    y += 20;
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    doc.text('Notes:', 20, y);
    doc.text('1. This quotation is valid for 30 days from the date of issue.', 25, y + 7);
    doc.text('2. Payment terms: 50% advance, 50% upon completion.', 25, y + 14);
    doc.text('3. Prices include all materials and labor unless otherwise specified.', 25, y + 21);

    // Footer
    doc.setFontSize(8);
    doc.setTextColor(100, 100, 100);
    doc.text('Thank you for choosing Landnest Construction!', 105, 280, { align: 'center' });
    doc.text('Terms and conditions apply', 105, 285, { align: 'center' });

    // Save the PDF
    doc.save(`Landnest_Quotation_${new Date().toISOString().split('T')[0]}.pdf`);
  };

 

  const rows = chunkArray(steps, chunkSize);

  return (
    <>
      {/* Sticky Header Section */}


<Box sx={{
  position: 'sticky',
  top: 0,
  zIndex: 1200,
  bgcolor: 'background.paper',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
}}>
  {/* Top Navigation Bar */}
  <Box display="flex" alignItems="center" justifyContent="space-between" p={1} sx={{
    background: 'black',
    borderBottom: '1px solid rgba(0,0,0,0.08)'
  }}>
    {/* Back Arrow - Left Side */}
    <IconButton
      onClick={() => navigate(-1)}
      sx={{
        color: 'white',
        '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }
      }}
    >
      <ArrowBackIosIcon />
    </IconButton>
    
    {/* Center Text - "landnest" */}
    <Typography variant="h6" component="div" sx={{ 
      color: 'white',
      fontWeight: 'bold',
      flexGrow: 1,
      textAlign: 'left'
    }}>
      LANDNEST
    </Typography>
    
    {/* Right Side Logo */}
    <Box sx={{ 
      width: 100,
      height: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <img 
        src={logotop} 
        alt="Landnest Logo" 
        style={{ 
          maxWidth: '100%', 
          maxHeight: '100%',
          objectFit: 'contain'
        }}
      />
    </Box>
  </Box>

  {/* Construction/Interior Navigation */}
{/* Construction/Interior Navigation */}
<Box sx={{
  padding: isMobile ? 1 : 0.5,
  display: 'flex',
  justifyContent: 'space-between',
  boxShadow: '0 5px 10px rgba(0,0,0,0.1)',
}}>
  {/* Construction - Active */}
  <Box sx={{
    flex: 1,
    textAlign: 'center',
    py: 2,
    background: `
      linear-gradient(145deg, rgba(232,224,208,0.95), rgba(216,204,186,0.95)),
      url('https://www.transparenttextures.com/patterns/cream-paper.png')
    `,
    backgroundBlendMode: 'overlay',
    borderRight: '1px solid rgba(0,0,0,0.1)',
    borderTopLeftRadius: '30px',
    boxShadow: `
      inset 0 0 15px rgba(0,0,0,0.1),
      0 2px 5px rgba(0,0,0,0.08)
    `,
    transform: 'scale(1.02) translateY(-2px)',
    transition: 'all 0.3s ease',
    position: 'relative',
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '50%',
      height: '4px',
      backgroundColor: 'green',
      borderRadius: '2px'
    },
    '&:hover': {
      transform: 'scale(1.05) translateY(-3px)',
      boxShadow: `
        inset 0 0 20px rgba(0,0,0,0.15),
        0 3px 8px rgba(0,0,0,0.15)
      `
    }
  }}>
    <Typography variant={isMobile ? "h6" : "h5"} component="div" sx={{ 
      fontWeight: 800,
      color: 'green',
      letterSpacing: '1px',
      textShadow: '0 1px 3px rgba(255,255,255,0.5)',
      fontFamily: 'Inter, Roboto, Helvetica, sans-serif',
      textTransform: 'uppercase'
    }}>
      Constructions
    </Typography>
  </Box>
  
  {/* Interiors - Inactive */}
  <Box 
    component={Link}
    to="/interiors"
    sx={{
      flex: 1,
      textAlign: 'center',
      py: 2,
      background: `
        linear-gradient(145deg, rgb(22, 22, 22), rgb(15, 15, 15)),
        url('https://www.transparenttextures.com/patterns/dark-matter.png')
      `,
      backgroundBlendMode: 'overlay',
      textDecoration: 'none',
      borderBottomRightRadius: '30px',
      boxShadow: `
        inset 0 0 15px rgba(0,0,0,0.2),
        0 2px 5px rgba(0,0,0,0.1)
      `,
      transform: 'scale(0.98)',
      transition: 'all 0.3s ease',
      '&:hover': {
        background: `
          linear-gradient(145deg, rgb(35, 35, 35), rgb(25, 25, 25)),
          url('https://www.transparenttextures.com/patterns/dark-matter.png')
        `,
        transform: 'scale(1)',
        boxShadow: `
          inset 0 0 20px rgba(0,0,0,0.3),
          0 3px 8px rgba(0,0,0,0.2)
        `
      }
    }}
  >
    <Typography variant={isMobile ? "h6" : "h6"} component="div" sx={{ 
      fontWeight: 300,
      color: 'rgba(255,255,255,0.7)',
      letterSpacing: '1px',
      textShadow: '0 1px 5px rgba(0,0,0,0.7)',
      fontFamily: 'Inter, Roboto, Helvetica, sans-serif',
      textTransform: 'uppercase'
    }}>
      Interiors
    </Typography>
  </Box>
</Box>
</Box>

      {/* Main Content */}
      <Box sx={{ pb: 2 }}>
        <Box sx={{
          // backgroundColor: 'rgba(173, 216, 230, 0.3)',
          background: "#e7dbc9",
          padding: isMobile ? 2 : 2,
          marginY: 2
        }}>
          {/* Fixed Explore Resources and Projects row */}
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2,
            px: 2,
            py: 1,
            backgroundColor: 'white',
            borderRadius: 1,
            boxShadow: 1
          }}>
            <Typography
              variant="body1"
              fontWeight="bold"
              onClick={() => navigate('/explore-construction-resources')}
              sx={{ cursor: 'pointer', fontSize:'18px' }}
            >
              Explore Construction Resources →
            </Typography>
          
          </Box>

        

          <Box sx={{ width: '100%' }}>
            {cards.map((card, index) => (
              <Card key={index}
                onClick={() => {
                  if (card.path) {
                    navigate(card.path);
                  } else if (card.title === "Quotations") {
                    handleDownloadQuotation();
                  }
                }}
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
                  cursor: 'pointer',
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

          <Box sx={{ textAlign: 'center' }}>
      <Button
        variant="contained"
        sx={{
          backgroundColor: 'green',
          color: '#fff',
          borderRadius: '20px',
          px: 4,
          py: 1,
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor: '#cc0000',
          },
        }}
        onClick={() => navigate('/construction-get-started')} // or history.push('/consultation')
      >
        GET FREE CONSULTATION
      </Button>
    </Box>       </Box>

        <Box sx={{ padding: 2, marginY: 1 }}>
          <Typography
            variant="h5"
            fontWeight="bold"
            gutterBottom
            sx={{
              textAlign: 'center',
              mb: 2,
              color: 'primary.main',
              fontSize: '1.5rem',
              paddingLeft: 1
            }}
          >
            Landnest & bold Trust
          </Typography>

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
                  '&:last-child': { paddingBottom: 1.5 }
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



        <Box sx={{ px: 2, py: 1, bgcolor: '#e7dbc9', paddingBottom: '40px', marginBottom:'40px' }}>
          <Typography
            variant="h5"
            fontWeight="bold"
            gutterBottom
            sx={{
              textAlign: 'center',
              mb: 2,
              color: 'primary.main',
              fontSize: '1.5rem',
              paddingLeft: 1
            }}
          >
            Our Construction Process
          </Typography>
          {rows.map((row, rowIndex) => (
           

             <Box
                        key={rowIndex}
                        display="flex"
                        gap={2}
                        mb={2}
                      >
                        {row.map((item) => (
                          <Card
                            key={item.id}
                            sx={{ 
                              flex: 1,
                              borderRadius: 2,
                              boxShadow: 3,
                                                height:'160px',
            
                              '&:hover': {
                                transform: 'translateY(-4px)',
                                transition: 'transform 0.3s ease'
                              }
                            }}
                          >
                            <CardMedia
                              component="img"
                              height="125"
                              image={item.image}
                              alt={item.title}
                              sx={{ objectFit: 'cover' }}
                            />
                            <CardContent sx={{ padding: '8px' }}>
                              <Typography variant="subtitle1" align="center" fontWeight="bold">
                                {item.title}
                              </Typography>
                            </CardContent>
                          </Card>
                        ))}
                      </Box>
          ))}
        </Box>
      </Box>
    
      <FormsBottomNavbar />
    </>
  );
};

export default Constructions;
