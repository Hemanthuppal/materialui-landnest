
import React from 'react';
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
  Grow
} from '@mui/material';
import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const ConstructionPackages = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const [expanded, setExpanded] = React.useState({
    basic: null,
    package2000: null,
    package2300: null
  });

  const handleChange = (panel, packageType) => (event, newExpanded) => {
    setExpanded(prev => ({
      ...prev,
      [packageType]: newExpanded ? panel : null
    }));
  };

  const sectionContent = {
    design: "Includes architectural drawings, structural designs, and 3D visualization. We provide multiple design options to choose from.",
    materials: "Quality construction materials including cement, steel, bricks, and aggregates from trusted brands for durable construction.",
    flooring: "Ceramic tiles for flooring and wall tiling in wet areas. Various design options available to match your preferences.",
    windows: "Standard aluminum framed windows with glass panes. Optional upgrades available for premium window solutions.",
    doors: "Teak wood main door and flush doors for interior rooms. All doors come with standard hardware fittings.",
    painting: "Interior and exterior painting with weatherproof exterior emulsion and premium interior paints for lasting finish.",
    plumbing: "Complete plumbing system with high-quality pipes and sanitaryware from reputed brands. Includes bathroom fittings.",
    extra: "Additional charges may apply for site-specific requirements, design changes, or premium material upgrades.",
    sanctions: "Assistance with government approvals, building permits, and electrical connections. Documentation support included.",
    elevation: "Attractive elevation design within specified budget. Options for different facade treatments and finishes.",
    audit: "Regular site inspections and progress reports. Quality checks at every construction stage for transparency."
  };

  const packages = [
    {
      id: 'basic',
      title: 'Basic Package Details',
      price: 'Rs 1850/sqft',
      color: '#3a7bd5',
      gradient: 'linear-gradient(135deg, #3a7bd5, #00d2ff)',
      sections: [
        { id: 'basicOne', title: 'Design and Drawings', content: sectionContent.design },
        { id: 'basicTwo', title: 'Construction materials', content: sectionContent.materials },
        { id: 'basicThree', title: 'Flooring and wall tiling', content: sectionContent.flooring },
        { id: 'basicFour', title: 'Windows', content: sectionContent.windows },
        { id: 'basicFive', title: 'Doors', content: sectionContent.doors },
        { id: 'basicSix', title: 'Painting and finishing', content: sectionContent.painting },
        { id: 'basicSeven', title: 'Plumbing and sanitary', content: sectionContent.plumbing },
        { id: 'basicEight', title: 'Extra charges', content: sectionContent.extra },
        { id: 'basicNine', title: 'Govt sanctions and electrical assistance', content: sectionContent.sanctions },
        { id: 'basicTen', title: 'Elevation budget', content: sectionContent.elevation },
        { id: 'basicEleven', title: 'Site audit and reporting', content: sectionContent.audit }
      ]
    },
    {
      id: 'package2000',
      title: 'Construction Package',
      price: '₹2000/sq. ft.',
      color: '#6a11cb',
      gradient: 'linear-gradient(135deg, #6a11cb, #2575fc)',
      sections: [
        { id: 'twoOne', title: 'Design and Drawings', content: sectionContent.design + " Includes additional design revisions." },
        { id: 'twoTwo', title: 'Construction materials', content: sectionContent.materials + " Upgraded materials with better specifications." },
        { id: 'twoThree', title: 'Flooring and wall tiling', content: sectionContent.flooring + " Premium tile options available." },
        { id: 'twoFour', title: 'Windows', content: sectionContent.windows + " Standard includes UPVC windows." },
        { id: 'twoFive', title: 'Doors', content: sectionContent.doors + " Premium hardware fittings included." },
        { id: 'twoSix', title: 'Painting and finishing', content: sectionContent.painting + " Includes textured finishes for feature walls." },
        { id: 'twoSeven', title: 'Plumbing and sanitary', content: sectionContent.plumbing + " Premium sanitaryware options available." },
        { id: 'twoEight', title: 'Extra charges', content: sectionContent.extra },
        { id: 'twoNine', title: 'Govt sanctions and electrical assistance', content: sectionContent.sanctions + " Complete documentation handling." },
        { id: 'twoTen', title: 'Elevation budget', content: sectionContent.elevation + " More design options included." },
        { id: 'twoEleven', title: 'Site audit and reporting', content: sectionContent.audit + " Weekly detailed progress reports." }
      ]
    },
    {
      id: 'package2300',
      title: 'Construction Package',
      price: '₹2300/- per sq. ft.',
      color: '#8E2DE2',
      gradient: 'linear-gradient(135deg, #4A00E0, #8E2DE2)',
      sections: [
        { id: 'threeOne', title: 'Design and Drawings', content: sectionContent.design + " Custom designs with unlimited revisions." },
        { id: 'threeTwo', title: 'Construction materials', content: sectionContent.materials + " Top-grade materials from premium brands." },
        { id: 'threeThree', title: 'Flooring and wall tiling', content: sectionContent.flooring + " Imported tiles and natural stone options." },
        { id: 'threeFour', title: 'Windows', content: sectionContent.windows + " Premium soundproof and energy-efficient windows." },
        { id: 'threeFive', title: 'Doors', content: sectionContent.doors + " Designer doors with premium finishes." },
        { id: 'threeSix', title: 'Painting and finishing', content: sectionContent.painting + " Premium imported paints and textures." },
        { id: 'threeSeven', title: 'Plumbing and sanitary', content: sectionContent.plumbing + " Luxury sanitaryware and fittings." },
        { id: 'threeEight', title: 'Extra charges', content: sectionContent.extra },
        { id: 'threeNine', title: 'Govt sanctions and electrical assistance', content: sectionContent.sanctions + " End-to-end approval handling." },
        { id: 'threeTen', title: 'Elevation budget', content: sectionContent.elevation + " Premium cladding and facade treatments." },
        { id: 'threeEleven', title: 'Site audit and reporting', content: sectionContent.audit + " Daily quality checks and detailed reports." }
      ]
    }
  ];

  return (
    <Fade in={true} timeout={800}>
      <Box sx={{ 
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #f8f9fa, #e9ecef)',
        pb: 6
      }}>
        <Box display="flex" alignItems="center" p={2} sx={{ 
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
          {/* <Typography
            align="center"
            flex={1}
            fontWeight="700"
            fontSize="1.8rem"
            sx={{
              color: '#333',
              letterSpacing: '0.5px',
              background: 'linear-gradient(to right, #4A00E0, #8E2DE2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline'
            }}
          >
            Construction Packages
          </Typography> */}
        </Box>

        <Box sx={{
          px: { xs: 2, sm: 4, md: 6 },
          pt: 4,
          maxWidth: '1200px',
          margin: '0 auto'
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
                      fontSize: '1.6rem',
                      letterSpacing: '0.5px'
                    }}>
                      {pkg.title}
                    </Typography>
                  }
                  subheader={
                    <Typography variant="h4" sx={{ 
                      fontWeight: 700, 
                      color: 'white',
                      mt: 1.5,
                      background: 'rgba(255,255,255,0.2)',
                      display: 'inline-block',
                      px: 3,
                      py: 1,
                      borderRadius: '20px',
                      backdropFilter: 'blur(5px)',
                      fontSize: '1.5rem'
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
                      expanded={expanded[pkg.id] === section.id}
                      onChange={handleChange(section.id, pkg.id)}
                      sx={{
                        '&:before': { display: 'none' },
                        boxShadow: 'none',
                        borderBottom: '1px solid rgba(0,0,0,0.05)',
                        backgroundColor: expanded[pkg.id] === section.id ? 'rgba(74, 0, 224, 0.03)' : 'transparent',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: 'rgba(74, 0, 224, 0.03)'
                        }
                      }}
                    >
                      <AccordionSummary
                        expandIcon={
                          expanded[pkg.id] === section.id ? 
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
                          color: expanded[pkg.id] === section.id ? pkg.color : '#444',
                          fontSize: '1rem',
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
                          fontSize: '0.95rem'
                        }}>
                          {section.content}
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
  );
};

export default ConstructionPackages;