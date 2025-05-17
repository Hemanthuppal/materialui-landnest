
import React, { useEffect, useState } from 'react';
import {
  Card,
  CardHeader,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  IconButton,
  Box,
  useTheme,
  Fade,
  Grow,
  
  useMediaQuery, 
  
} from '@mui/material';
import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';


import FormsBottomNavbar from '../maniteja/FormsBottomNavbar';
import logotop from './Images/landnest-logo.jpg'

const ConstructionPackages = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
   const [value, setValue] = useState('construction');

  const [expanded, setExpanded] = React.useState({
    package2000: null,
    package2300: null,
    package2500: null
  });

  const handleChange = (panel, packageType) => (event, newExpanded) => {
    setExpanded(prev => ({
      ...prev,
      [packageType]: newExpanded ? panel : null
    }));
  };


  const sectionContent = {
    package2000: {
      design: "• <strong>2D Floor Plans:</strong> \n• <strong>3D Elevation:</strong> \n• <strong>Plumbing & Electrical Layout:</strong> \n• <strong>Working Drawings for Execution, Schedule of Openings:</strong> ",
      materials: "• <strong>Steel:</strong> Fe500/550 Grade TMT (Meenakshi, Prime Gold, Turbo, Indus, or Equivalent)\n• <strong>Cement:</strong> 53 & 43 Grade (Zuari, ACC, Ramco, Birla super or Equivalent)\n• <strong>Aggregates:</strong> 20mm & 40mm\n• <strong>Sand:</strong> M-Sand for Blockwork, P-Sand for Plastering\n• <strong>Blocks:</strong> 6″ {42 per pic} & 4″ {32 per pic}\n• <strong>Concrete Mix:</strong> RMC or handmix– M25 Grade\n• <strong>Underground Sump:</strong> 6″ solid block with waterproof plastering\n• <strong>Plinth Foundation:</strong> Three-course size stone masonry\n• <strong>Ceiling Height:</strong> 10 feet (floor to floor)\n• <strong>Waterproofing:</strong> Dr. Fixit or Fosroc",
      flooring: "• <strong>Living, Kitchen, Dining & Bedroom:</strong> Tiles up to ₹100/sq. ft.\n• <strong>Staircase:</strong> Granite up to ₹100/sq. ft.\n• <strong>Balconies & Sitout Areas:</strong> Anti-skid tiles up to ₹100/sq. ft.\n• <strong>Bathroom Wall & Flooring:</strong> Tiles up to ₹100/sq. ft.\n• <strong>Parking Area:</strong> Flooring up to ₹100/sq. ft.\n• <strong>Kitchen Countertop:</strong> Granite up to ₹100/sq. ft.\n• <strong>Kitchen Backsplash (Dadoing, 4ft height):</strong> Tiles up to ₹100/sq. ft.\n• <strong>Bathroom Wall Tiling:</strong> Up to 8 feet height\n• <strong>Terrace Finishing:</strong> Screed concrete",
      windows: "• <strong>Standard Windows:</strong> 2.5-3 track UPVC with 5mm glass & MS grill (₹750/sq. ft.)\n• <strong>Maximum Window Openings:</strong> 3-track UPVC with 5mm glass & MS grill (₹700/sq. ft.) or Sal wood frames with shutters\n• <strong>Maximum Window Coverage:</strong> 10% of total wall space",
      doors: "• <strong>Main Door:</strong> Teakwood frame (6″x4″) with teak shutter & fittings (₹30,000 per door)\n• <strong>Pooja Room Door:</strong> Frame (5″x3″) with readymade shutter & fittings (₹25,000 per door)\n• <strong>Internal Doors:</strong> WPC or Sal wood frame (4″x3″) with membrane shutter & fittings (₹10,000 per door)\n• <strong>Bathroom Doors:</strong> WPC doors",
      painting: "• <strong>Interior Walls & Ceilings:</strong> 2 coats putty + 1 coat primer + 2 coats of Asian Tractor Emulsion\n• <strong>Exterior Walls:</strong> 1 coat primer + 2 coats of Apex Emulsion\n• <strong>Windows & MS Grills:</strong> 2 coats of enamel paint\n• <strong>Paint Brands:</strong> Asian, Berger, Dulux (as per owner preference)",
      fabrication: "• <strong>MS Staircase Railing:</strong> ₹450 per sq. ft. (3′ height)\n• <strong>MS Standard Gate:</strong> ₹450 per sq. ft. (5′ height)",
      plumbing: "• <strong>Pipes:</strong> CPVC (Ashirwad, Supreme, Astral)\n• <strong>Overhead Tank:</strong> PVC (Ganga or Kaveri) with MS support (6ft height)\n• <strong>Solar & Geyser Provision:</strong> Diverter and mixer-ready\n• <strong>Sanitary Installations:</strong>\n  o <strong>Overhead tank:</strong> ₹2000\n  o <strong>Commode:</strong> ₹10000\n  o <strong>Wall mixer set:</strong> ₹6000",
      extra: "• <strong>BBMP/BDA Approvals & Liaison Fees:</strong>  \n• <strong>Building Plinth Level Above 18″ from Road:</strong>  \n• <strong>External Ramps & Landscaping:</strong>  \n• <strong>Extra Depth for Sump Tank,Rain water sump, gas lines:</strong>  \n• <strong>Interior Works (Wardrobes, False Ceiling, etc.):</strong>  \n• <strong>External Elevation Cladding:</strong>  \n• <strong>Security Fabrication Works:</strong>  \n• <strong>Any Civil Works Outside the Main House,Road cutting:</strong>  \n• <strong>Additional Height for Compound Wall:</strong>  \n• <strong>Electrical Fixtures (Lights, Fans, Bulbs, etc.):</strong>  \n• <strong>Additional Charges for Soil Bearing Capacity < 180 SBC:</strong>  ",
      sanctions: "We assist with obtaining permissions, approvals, and sanction fees for:\n• <strong>Construction Plan Sanction:</strong> Assistance provided\n• <strong>Temporary Electricity Connection:</strong> Assistance provided\n• <strong>Permanent Electrical Connection:</strong> Assistance provided\n• <strong>Water Connection:</strong> Assistance provided\n• <strong>Sewage Connection:</strong> Assistance provided",
      elevation: "<strong>Elevation Budget:</strong> 0.5% of the Project's Super Built-Up Cost",
      audit: "• <strong>Soil Testing:</strong> Additional charges\n• <strong>Site Supervision:</strong> Civil Engineer & Project Manager assigned\n• <strong>Architect Visits:</strong> Additional charges"
    },
    package2300: {
      design: "• <strong>2D Floor Plans</strong> \n• <strong>3D Elevation</strong> \n• <strong>Structural Drawing</strong> \n• <strong>Plumbing & Electrical Layout</strong> \n• <strong>Working Drawings for Execution & Schedule of Openings</strong> ",
      materials: "• <strong>Steel:</strong> Fe500/550 Grade TMT – Indus, Prime Gold, JSW, or Tata Equivalent\n• <strong>Cement:</strong> 53 & 43 Grades (Birla, ACC, Ultratech, or Equivalent)\n• <strong>Aggregates:</strong> 20MM & 40MM\n• <strong>Sand:</strong> M-Sand for Blockwork & P-Sand for Plastering\n• <strong>Blocks:</strong> Solid Blocks : 6″ {55 per pic} & 4″ {45 per pic}\n• <strong>Concrete Mix:</strong> RMC – M20 Grade",
      foundation: "• <strong>Underground Sump</strong> 6″ Solid Block, Waterproof Plastered\n• <strong>Plinth Foundation</strong> Two-Course Size Stone Masonry Under Plinth\n• <strong>Ceiling Height:</strong> 10 Feet (Floor to Floor)\n• <strong>Waterproofing:</strong> Dr. Fixit or Fosroc",
      flooring: "• <strong>Living, Kitchen, Dining & Bedroom:</strong> ₹150/- per sq. ft.\n• <strong>Staircase:</strong> Granite up to ₹120/- per sq. ft.\n• <strong>Balconies & Sitouts:</strong> Anti-skid tiles up to ₹150/- per sq. ft.\n• <strong>Bathroom/Toilet Wall & Flooring:</strong> ₹150/- per sq. ft.\n• <strong>Parking Floor:</strong> ₹150/- per sq. ft.\n• <strong>Kitchen Countertop:</strong> ₹450/- per sq. ft.\n• <strong>Kitchen Dadoing (2 feet tiles):</strong> ₹150/- per sq. ft.\n• <strong>Bathroom Dadoing (10 feet height):</strong> Included\n• <strong>Terrace:</strong> Screed Concreting",
      windows: "• <strong>Windows:</strong> 3-Track UPVC with 5mm Glass & MS Grill (Budget ₹850/- per sq. ft.)\n• <strong>Maximum Opening Percentage:</strong> 15%",
      doors: "• <strong>Main Door:</strong> Teak Wood Frame (6″X6″) + Teak Door Shutter (₹40,000 per door)\n• <strong>Pooja Door:</strong> 5″X3″ Readymade Door (₹35,000 per door)\n• <strong>Internal Doors:</strong> WPC/Sal Frame (4″X3″) + Membrane Door Shutter (₹12,000 per door)\n• <strong>Bathroom Doors:</strong> WPC",
      painting: "• <strong>Interior Walls & Ceiling:</strong> 2 Coats Putty + 1 Coat Primer + 2 Coats of Asian Royale\n• <strong>Exterior Walls:</strong> 1 Coat Primer + 2 Coats of Apex ultima\n• <strong>Windows MS Grills:</strong> 2 Coats of Enamel Paint\n• <strong>Brands Considered:</strong> Asian, Berger, Dulux (Owner's Choice)",
      fabrication: "• <strong>MS Staircase Railing:</strong> ₹1000 per sq. ft. (3'6” height)\n• <strong>MS Standard Gate:</strong> ₹550 per sq. ft. (6' height)",
      plumbing: "• <strong>Pipes:</strong> Ashirwad / Supreme / Astral CPVC\n• <strong>Water Tank:</strong> PVC Overhead Tank (Ganga/Kaveri) with MS Structure (6' height)\n• <strong>Solar & Geyser Provision:</strong> Provided for Diverters/Mixtures Only\n• <strong>Sewage Chambers:</strong> PVC Cover Inside Plot Area (Overhead Tank: ₹4000, Commode: ₹12,000, Wall Mixer: ₹8000)",
      extra: "• <strong>Liaison Work:</strong> BBMP/BDA or other approving bodies\n• <strong>Extra Civil Work:</strong>\n  o Floor Level more than 18″ above Road Level\n  o Outside Ramping & Extra Sump Depth, Rain water sump\n  o Interior Works (Wardrobe, False Ceiling, etc.)\n  o External Cladding for Elevation\n  o Landscaping & Security Fabrication Work\n  o Any Civil Work outside House Area Road cutting\n  o Additional Height for Compound\n• <strong>Electrical Fittings:</strong> Light Tubes, Bulbs, Fans, etc., not included\n• <strong>Soil Bearing Capacity (SBC):</strong> Extra charges if SBC < 180",
      sanctions: "Assistance for:\n• <strong>Construction Plan Sanction:</strong> Included\n• <strong>Temporary Electricity Connection:</strong> Included\n• <strong>Permanent Electrical Connection:</strong> Included\n• <strong>Water Connection:</strong> Included\n• <strong>Sewage Connection:</strong> Included",
      additional: "• <strong>Elevation Budget:</strong> 1.25% of Project Super built Cost\n• <strong>Soil Testing:</strong> Extra charges\n• <strong>Site Supervision:</strong> Civil Engineer & PM assigned\n• <strong>Architect Visits:</strong> Extra charges"
    },
    package2500: {
      design: "• <strong>2D Floor Plans</strong> \n• <strong>3D Elevations</strong>",
      materials: "• <strong>Steel:</strong> Fe500/550 Grade TMT (A-One Gold, Prime Gold, or Equivalent)\n• <strong>Cement:</strong> 53 & 43 Grade (Bharathi, Dalmia, Maha, or Equivalent)\n• <strong>Aggregates:</strong> 20mm & 40mm\n• <strong>Sand:</strong> M-Sand for blockwork, P-Sand for plastering\n• <strong>Blocks:</strong> Solid Blocks (6″ {36 per pic} & 4″ {28 per pic})\n• <strong>Concrete Mix:</strong> RMC or hand mix – M20 Grade\n• <strong>Underground Sump:</strong> 6″ solid block with waterproof plastering\n• <strong>Plinth Foundation:</strong> One course of size stone masonry\n• <strong>Ceiling Height:</strong> 10 feet (floor to floor)\n• <strong>Waterproofing:</strong> Dr. Fixit or Fosroc",
      flooring: "• <strong>Living, Kitchen, Dining & Bedroom:</strong> Tiles up to ₹60/sq. ft.\n• <strong>Staircase:</strong> Granite up to ₹80/sq. ft.\n• <strong>Balconies & Sitouts:</strong> Anti-skid tiles up to ₹60/sq. ft.\n• <strong>Bathrooms/Toilets:</strong> Wall & floor tiles up to ₹60/sq. ft.\n• <strong>Parking Area:</strong> Flooring up to ₹50/sq. ft.\n• <strong>Kitchen Countertop:</strong> Granite up to ₹100/sq. ft.\n• <strong>Kitchen Backsplash (Dadoing, 4ft height):</strong> Tiles up to ₹50/sq. ft.\n• <strong>Bathroom Wall Tiling:</strong> Up to 7 feet height\n• <strong>Terrace Finishing:</strong> Screed concrete",
      windows: "• <strong>Standard Windows:</strong> 2-track UPVC with 5mm glass & MS grill (₹550/sq. ft.)\n• <strong>Maximum Window Openings:</strong> 2.5-track Aluminum with 4mm glass & MS grill\n• <strong>Maximum Window Coverage:</strong> 10% of total wall space",
      doors: "• <strong>Main Door:</strong> Teakwood frame (5″x3″) with teak shutter & fittings (₹22,000 per door)\n• <strong>Pooja Room Door:</strong> Frame (5″x3″) with readymade shutter & fittings (₹20,000 per door)\n• <strong>Internal Doors:</strong> WPC or neem wood frame (4″x3″) with membrane shutter & fittings (₹8,000 per door)\n• <strong>Bathroom Doors:</strong> PVC/WPC doors",
      painting: "• <strong>Interior Walls & Ceilings:</strong> 2 coats putty + 1 coat primer + 2 coats of Asian Tractor Emulsion\n• <strong>Exterior Walls:</strong> 1 coat primer + 2 coats of ACE Emulsion\n• <strong>Windows & MS Grills:</strong> 2 coats of enamel paint\n• <strong>Paint Brands:</strong> Asian, Berger, Dulux (as per owner preference)",
      fabrication: "• <strong>MS Staircase Railing:</strong> ₹300 per sq. ft. (3′ height)\n• <strong>MS Standard Gate:</strong> ₹350 per sq. ft. (5′ height)",
      plumbing: "• <strong>Pipes:</strong> CPVC (Ashirwad, Supreme, Astral)\n• <strong>Overhead Tank:</strong> PVC (Ganga or Kaveri) with MS support (6ft height)\n• <strong>Solar & Geyser Provision:</strong> Diverter and mixer-ready\n• <strong>Sanitary Installations:</strong>\n  o <strong>Overhead tank:</strong> ₹1,000\n  o <strong>Commode:</strong> ₹6,500\n  o <strong>Wall mixer:</strong> ₹3,500",
      extra: "• <strong>Compound Wall Construction</strong>\n• <strong>BBMP/BDA Approvals & Liaison Fees</strong>\n• <strong>Building Plinth Level Above 18″ from Road</strong>\n• <strong>External Ramps & Landscaping, road cutting works</strong>\n• <strong>Extra Depth for Sump Tank, Rain water sump</strong>\n• <strong>Interior Works (Wardrobes, False Ceiling, etc.)</strong>\n• <strong>External Elevation Cladding</strong>\n• <strong>Security Fabrication Works</strong>\n• <strong>Any Civil Works Outside the Main House</strong>\n• <strong>Additional Height for Compound Wall</strong>\n• <strong>Electrical Fixtures (Lights, Fans, Bulbs, etc.)</strong>\n• <strong>Additional Charges for Soil Bearing Capacity < 180 SBC</strong>",
      sanctions: "Assistance with approvals from government agencies, including:\n• <strong>Construction Plan Sanction</strong>\n• <strong>Temporary Electricity Connection</strong>\n• <strong>Permanent Electrical Connection</strong>\n• <strong>Water Connection</strong>\n• <strong>Sewage Connection</strong>",
      elevation: "<strong>Elevation Budget:</strong> 0.25% of the Project's Super Built-Up Cost",
      audit: "• <strong>Soil Testing:</strong> Additional charges\n• <strong>Site Supervision:</strong> Civil Engineer & Project Manager assigned\n• <strong>Architect Visits:</strong> Additional charges"
    }
  };

  const packages = [
    {
      id: 'package2500',
      title: 'Basic Package Details',
      price: 'Rs 1850/sqft',
      color: '', // White text for better contrast
  gradient: 'linear-gradient(135deg,rgb(101, 81, 77),rgb(124, 119, 119))', // Coffee to black gradient
      sections: [
        { id: 'pkg2500One', title: 'Design & Drawings', content: sectionContent.package2500.design },
        { id: 'pkg2500Two', title: 'Construction Materials', content: sectionContent.package2500.materials },
        { id: 'pkg2500Three', title: 'Flooring & Wall Tiling', content: sectionContent.package2500.flooring },
        { id: 'pkg2500Four', title: 'Windows', content: sectionContent.package2500.windows },
        { id: 'pkg2500Five', title: 'Doors', content: sectionContent.package2500.doors },
        { id: 'pkg2500Six', title: 'Painting & Finishing', content: sectionContent.package2500.painting },
        { id: 'pkg2500Seven', title: 'Fabrication Works', content: sectionContent.package2500.fabrication },
        { id: 'pkg2500Eight', title: 'Plumbing & Sanitary', content: sectionContent.package2500.plumbing },
        { id: 'pkg2500Nine', title: 'Extra Charges', content: sectionContent.package2500.extra },
        { id: 'pkg2500Ten', title: 'Government Sanctions & Electrical Assistance', content: sectionContent.package2500.sanctions },
        { id: 'pkg2500Eleven', title: 'Elevation Budget', content: sectionContent.package2500.elevation },
        { id: 'pkg2500Twelve', title: 'Site Audit & Reporting', content: sectionContent.package2500.audit }
      ]
    },
    {
      id: 'package2000',
      title: 'Premium Package Details',
      price: 'Rs 2000/sqft',
      color: '', // White text for better contrast
      gradient: 'linear-gradient(135deg,rgb(101, 81, 77),rgb(124, 119, 119))',      sections: [
        { id: 'pkg2000One', title: 'Design & Drawings', content: sectionContent.package2000.design },
        { id: 'pkg2000Two', title: 'Core Construction Materials', content: sectionContent.package2000.materials },
        { id: 'pkg2000Three', title: 'Flooring & Wall Tiling', content: sectionContent.package2000.flooring },
        { id: 'pkg2000Four', title: 'Windows', content: sectionContent.package2000.windows },
        { id: 'pkg2000Five', title: 'Doors', content: sectionContent.package2000.doors },
        { id: 'pkg2000Six', title: 'Painting & Finishing', content: sectionContent.package2000.painting },
        { id: 'pkg2000Seven', title: 'Fabrication Works', content: sectionContent.package2000.fabrication },
        { id: 'pkg2000Eight', title: 'Plumbing & Sanitary', content: sectionContent.package2000.plumbing },
        { id: 'pkg2000Nine', title: 'Extra Charges', content: sectionContent.package2000.extra },
        { id: 'pkg2000Ten', title: 'Government Sanctions & Electrical Assistance', content: sectionContent.package2000.sanctions },
        { id: 'pkg2000Eleven', title: 'Elevation Budget', content: sectionContent.package2000.elevation },
        { id: 'pkg2000Twelve', title: 'Site Audit & Reporting', content: sectionContent.package2000.audit }
      ]
    },
    {
      id: 'package2300',
      title: 'Construction Package Details',
      price: 'Rs 2300/sqft',
      color: '', // White text for better contrast
      gradient: 'linear-gradient(135deg,rgb(101, 81, 77),rgb(124, 119, 119))',      sections: [
        { id: 'pkg2300One', title: 'Design & Drawings', content: sectionContent.package2300.design },
        { id: 'pkg2300Two', title: 'Materials & Construction', content: sectionContent.package2300.materials },
        { id: 'pkg2300Three', title: 'Foundation & Waterproofing', content: sectionContent.package2300.foundation },
        { id: 'pkg2300Four', title: 'Flooring & Finishing', content: sectionContent.package2300.flooring },
        { id: 'pkg2300Five', title: 'Windows', content: sectionContent.package2300.windows },
        { id: 'pkg2300Six', title: 'Doors', content: sectionContent.package2300.doors },
        { id: 'pkg2300Seven', title: 'Painting & Finishing', content: sectionContent.package2300.painting },
        { id: 'pkg2300Eight', title: 'Railings & Gates', content: sectionContent.package2300.fabrication },
        { id: 'pkg2300Nine', title: 'Plumbing & Sanitation', content: sectionContent.package2300.plumbing },
        { id: 'pkg2300Ten', title: 'Exclusions & Additional Charges', content: sectionContent.package2300.extra },
        { id: 'pkg2300Eleven', title: 'Government Approvals & Utilities', content: sectionContent.package2300.sanctions },
        { id: 'pkg2300Twelve', title: 'Additional Charges', content: sectionContent.package2300.additional }
      ]
    },
   
  ];


  const handleChangebottom = (event, newValue) => {
    setValue(newValue);
    // Navigate to the corresponding route
    switch (newValue) {
      case 'home':
        navigate('/dashboard');
        break;
      case 'construction':
        navigate('/constructions');
        break;
      case 'post':
        navigate('/post');
        break;
      case 'services':
        navigate('/home-service');
        break;
      case 'profile':
        navigate('/work-detail');
        break;
      default:
        navigate('/');
    }
  };

  return (

    <>
    <Fade in={true} timeout={800}>
      <Box sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #f8f9fa, #e9ecef)',
        pb: 6

      }}>
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
       <Box sx={{
       padding: isMobile ? 1 : 0.5,
       display: 'flex',
       justifyContent: 'space-between',
       boxShadow: '0 5px 10px rgba(0,0,0,0.1)',
     }}>
       {/* Construction - Active */}
       <Box 
        component={Link}
         to="/constructions"
       
       sx={{
         flex: 1,
         textAlign: 'center',
         py: 2,
         textDecoration: 'none',

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
         transform: 'scale(0.98)',
         transition: 'all 0.3s ease',
         '&:hover': {
           transform: 'scale(1)',
           boxShadow: `
             inset 0 0 20px rgba(0,0,0,0.15),
             0 3px 8px rgba(0,0,0,0.15)
           `
         }
       }}>
         <Typography variant={isMobile ? "h6" : "h5"} component="div" sx={{ 
           fontWeight: 700,
           color: '#333333',
           textShadow: '0 1px 3px rgba(255,255,255,0.5)',
           fontFamily: 'Inter, Roboto, Helvetica, sans-serif',
           // textTransform: 'uppercase'
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
         <Typography variant={isMobile ? "h6" : "h5"} component="div" sx={{ 
           fontWeight: 700,
           color: 'rgba(255,255,255,0.9)',
           letterSpacing: '1px',
           textShadow: '0 1px 5px rgba(0,0,0,0.7)',
           fontFamily: 'Inter, Roboto, Helvetica, sans-serif',
           // textTransform: 'uppercase'
         }}>
           Interiors
         </Typography>
       </Box>
     </Box>
     </Box>

        <Box sx={{
          px: { xs: 2, sm: 4, md: 6 },
          pt: 2,
          maxWidth: '1200px',
          margin: '0 auto',
          backgroundColor: '#e7dbc9',
          pb: 0.5

        }}>
          {packages.map((pkg, index) => (
            <Grow in={true} timeout={index * 200 + 400} key={pkg.id}>
              <Card
                sx={{
                  borderRadius: '16px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  marginBottom: '40px',
                  overflow: 'hidden',
                  transition: 'transform 0.4s, box-shadow 0.4s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 15px 35px rgba(0,0,0,0.15)'
                  },
                  border: 'none'
                }}
              >
                <CardHeader
                  title={
                    <Typography variant="h5" sx={{
                      fontWeight: 700,
                      color: 'white',
                      fontSize: '20px',
                      letterSpacing: '0.5px',
                    }}>
                      {pkg.title}
                    </Typography>
                  }
                  subheader={
                    <Typography variant="h4" sx={{
                      fontWeight: 700,
                      color: 'white',
                      mt: 0.5,
                      background: 'rgba(255,255,255,0.2)',
                      display: 'inline-block',
                      px: 3,
                      py: 1,
                      borderRadius: '20px',
                      backdropFilter: 'blur(5px)',
                      fontSize: '20px'
                    }}>
                      {pkg.price}
                    </Typography>
                  }
                  sx={{
                    background: pkg.gradient,
                    padding: '30px 20px',
                    textAlign: 'center',
                    position: 'relative',
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '100px',
                      height: '4px',
                      backgroundColor: 'rgba(255,255,255,0.5)',
                      borderRadius: '2px'
                    }
                  }}
                />

                <Box sx={{ background: '#fff' }}>
                  {pkg.sections.map((section) => (
                    <Accordion
                      key={section.id}
                      expanded={expanded[pkg.id] == section.id}
                      onChange={handleChange(section.id, pkg.id)}
                      sx={{
                        '&:before': { display: 'none' },
                        boxShadow: 'none',
                        borderBottom: '1px solid rgba(0,0,0,0.05)',
                        backgroundColor: expanded[pkg.id] == section.id ? 'rgba(74, 0, 224, 0.03)' : 'transparent',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: 'rgba(74, 0, 224, 0.03)'
                        }
                      }}
                    >
                      <AccordionSummary
                        expandIcon={
                          expanded[pkg.id] == section.id ?
                            <RemoveIcon sx={{ color: pkg.color }} /> :
                            <AddIcon sx={{ color: '#666' }} />
                        }
                        aria-controls={`${section.id}-content`}
                        id={`${section.id}-header`}
                        sx={{
                          padding: '0 25px',
                          minHeight: '68px !important',
                          '& .MuiAccordionSummary-content': {
                            margin: '12px 0',
                            alignItems: 'center'
                          }
                        }}
                      >
                        <Typography sx={{
                          fontWeight: 600,
                          color: expanded[pkg.id] == section.id ? pkg.color : '#444',
                          fontSize: '18px',
                          letterSpacing: '0.2px'
                        }}>
                          {section.title}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails sx={{
                        padding: '0 25px 25px',
                        backgroundColor: '#fff',
                        borderLeft: `3px solid ${pkg.color}`,
                        marginLeft: '25px',
                        marginBottom: '15px',
                        borderRadius: '0 8px 8px 0',
                        transition: 'all 0.3s ease'
                      }}>
                        <Typography variant="body1" sx={{
                          color: '#555',
                          textAlign: 'left',
                          lineHeight: '1.8',
                          fontSize: '0.95rem',
                          whiteSpace: 'pre-line'
                        }}>
                          <span dangerouslySetInnerHTML={{ __html: section.content }} />
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </Box>
              </Card>
            </Grow>
          ))}
        </Box>
      </Box>
    </Fade>

        <FormsBottomNavbar />
                

    </>
  );
};

export default ConstructionPackages;