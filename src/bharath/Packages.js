// import React from 'react';
// import { 
//   Card, 
//   CardHeader, 
//   Accordion, 
//   AccordionSummary, 
//   AccordionDetails, 
//   Typography 
// } from '@mui/material';
// import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material';

// const ConstructionPackages = () => {
//   const [expanded, setExpanded] = React.useState({
//     basic: null,
//     package2000: null,
//     package2300: null
//   });

//   const handleChange = (panel, packageType) => (event, newExpanded) => {
//     setExpanded(prev => ({
//       ...prev,
//       [packageType]: newExpanded ? panel : null
//     }));
//   };

//   const sectionContent = {
//     design: "Includes architectural drawings, structural designs, and 3D visualization. We provide multiple design options to choose from.",
//     materials: "Quality construction materials including cement, steel, bricks, and aggregates from trusted brands for durable construction.",
//     flooring: "Ceramic tiles for flooring and wall tiling in wet areas. Various design options available to match your preferences.",
//     windows: "Standard aluminum framed windows with glass panes. Optional upgrades available for premium window solutions.",
//     doors: "Teak wood main door and flush doors for interior rooms. All doors come with standard hardware fittings.",
//     painting: "Interior and exterior painting with weatherproof exterior emulsion and premium interior paints for lasting finish.",
//     plumbing: "Complete plumbing system with high-quality pipes and sanitaryware from reputed brands. Includes bathroom fittings.",
//     extra: "Additional charges may apply for site-specific requirements, design changes, or premium material upgrades.",
//     sanctions: "Assistance with government approvals, building permits, and electrical connections. Documentation support included.",
//     elevation: "Attractive elevation design within specified budget. Options for different facade treatments and finishes.",
//     audit: "Regular site inspections and progress reports. Quality checks at every construction stage for transparency."
//   };

//   const packages = [
//     {
//       id: 'basic',
//       title: 'Basic Package',
//       price: 'Rs 1850/sqft',
//       sections: [
//         { id: 'basicOne', title: 'Design and Drawings', content: sectionContent.design },
//         { id: 'basicTwo', title: 'Construction materials', content: sectionContent.materials },
//         { id: 'basicThree', title: 'Flooring and wall tiling', content: sectionContent.flooring },
//         { id: 'basicFour', title: 'Windows', content: sectionContent.windows },
//         { id: 'basicFive', title: 'Doors', content: sectionContent.doors },
//         { id: 'basicSix', title: 'Painting and finishing', content: sectionContent.painting },
//         { id: 'basicSeven', title: 'Plumbing and sanitary', content: sectionContent.plumbing },
//         { id: 'basicEight', title: 'Extra charges', content: sectionContent.extra },
//         { id: 'basicNine', title: 'Govt sanctions and electrical assistance', content: sectionContent.sanctions },
//         { id: 'basicTen', title: 'Elevation budget', content: sectionContent.elevation },
//         { id: 'basicEleven', title: 'Site audit and reporting', content: sectionContent.audit }
//       ]
//     },
//     {
//       id: 'package2000',
//       title: 'Premium Package',
//       price: '₹2000/sq. ft.',
//       sections: [
//         { id: 'twoOne', title: 'Design and Drawings', content: sectionContent.design + " Includes additional design revisions." },
//         { id: 'twoTwo', title: 'Construction materials', content: sectionContent.materials + " Upgraded materials with better specifications." },
//         { id: 'twoThree', title: 'Flooring and wall tiling', content: sectionContent.flooring + " Premium tile options available." },
//         { id: 'twoFour', title: 'Windows', content: sectionContent.windows + " Standard includes UPVC windows." },
//         { id: 'twoFive', title: 'Doors', content: sectionContent.doors + " Premium hardware fittings included." },
//         { id: 'twoSix', title: 'Painting and finishing', content: sectionContent.painting + " Includes textured finishes for feature walls." },
//         { id: 'twoSeven', title: 'Plumbing and sanitary', content: sectionContent.plumbing + " Premium sanitaryware options available." },
//         { id: 'twoEight', title: 'Extra charges', content: sectionContent.extra },
//         { id: 'twoNine', title: 'Govt sanctions and electrical assistance', content: sectionContent.sanctions + " Complete documentation handling." },
//         { id: 'twoTen', title: 'Elevation budget', content: sectionContent.elevation + " More design options included." },
//         { id: 'twoEleven', title: 'Site audit and reporting', content: sectionContent.audit + " Weekly detailed progress reports." }
//       ]
//     },
//     {
//       id: 'package2300',
//       title: 'Luxury Package',
//       price: '₹2300/- per sq. ft.',
//       sections: [
//         { id: 'threeOne', title: 'Design and Drawings', content: sectionContent.design + " Custom designs with unlimited revisions." },
//         { id: 'threeTwo', title: 'Construction materials', content: sectionContent.materials + " Top-grade materials from premium brands." },
//         { id: 'threeThree', title: 'Flooring and wall tiling', content: sectionContent.flooring + " Imported tiles and natural stone options." },
//         { id: 'threeFour', title: 'Windows', content: sectionContent.windows + " Premium soundproof and energy-efficient windows." },
//         { id: 'threeFive', title: 'Doors', content: sectionContent.doors + " Designer doors with premium finishes." },
//         { id: 'threeSix', title: 'Painting and finishing', content: sectionContent.painting + " Premium imported paints and textures." },
//         { id: 'threeSeven', title: 'Plumbing and sanitary', content: sectionContent.plumbing + " Luxury sanitaryware and fittings." },
//         { id: 'threeEight', title: 'Extra charges', content: sectionContent.extra },
//         { id: 'threeNine', title: 'Govt sanctions and electrical assistance', content: sectionContent.sanctions + " End-to-end approval handling." },
//         { id: 'threeTen', title: 'Elevation budget', content: sectionContent.elevation + " Premium cladding and facade treatments." },
//         { id: 'threeEleven', title: 'Site audit and reporting', content: sectionContent.audit + " Daily quality checks and detailed reports." }
//       ]
//     }
//   ];

//   return (
//     <div style={{ 
//       padding: '12px', 
//       backgroundColor: '#f5f5f5',
//       maxWidth: '100%',
//       boxSizing: 'border-box'
//     }}>
//       {packages.map((pkg) => (
//         <Card 
//           key={pkg.id}
//           sx={{ 
//             borderRadius: '15px', 
//             boxShadow: '0 4px 8px rgba(0,0,0,0.1)', 
//             marginBottom: '20px',
//             overflow: 'hidden'
//           }}
//         >
//           <CardHeader
//             title={pkg.title}
//             subheader={pkg.price}
//             sx={{
//               backgroundColor: '#f4a344',
//               color: '#000',
//               padding: '15px',
//               textAlign: 'center',
//               '& .MuiCardHeader-title': {
//                 fontWeight: 600,
//                 fontSize: '1.6rem'
//               },
//               '& .MuiCardHeader-subheader': {
//                 fontWeight: 'bold',
//                 fontSize: '2rem'
//               }
//             }}
//           />
          
//           <div>
//             {pkg.sections.map((section) => (
//               <Accordion 
//                 key={section.id}
//                 expanded={expanded[pkg.id] === section.id}
//                 onChange={handleChange(section.id, pkg.id)}
//                 sx={{
//                   '&:before': {
//                     display: 'none'
//                   },
//                   boxShadow: 'none',
//                   borderBottom: '1px solid rgba(24, 19, 19, 0.12)'
//                 }}
//               >
//                 <AccordionSummary
//                   expandIcon={expanded[pkg.id] === section.id ? <RemoveIcon /> : <AddIcon />}
//                   aria-controls={`${section.id}-content`}
//                   id={`${section.id}-header`}
//                   sx={{
//                     padding: '0 16px',
//                     minHeight: '48px !important',
//                     '& .MuiAccordionSummary-content': {
//                       margin: '12px 0'
//                     }
//                   }}
//                 >
//                   <Typography sx={{ fontWeight: 500 }}>{section.title}</Typography>
//                 </AccordionSummary>
//                 <AccordionDetails sx={{ padding: '0 16px 16px' }}>
//                   <Typography variant="body2" color="text.secondary"  sx={{ textAlign: 'justify' }}>
//                     {section.content}
//                   </Typography>
//                 </AccordionDetails>
//               </Accordion>
//             ))}
//           </div>
//         </Card>
//       ))}
//     </div>
//   );
// };

// export default ConstructionPackages;






















import React from 'react';
import { 
  Card, 
  CardHeader, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails, 
  Typography,

  Box,
  useTheme
} from '@mui/material';
import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material';

const ConstructionPackages = () => {
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
      title: 'Basic Package',
      price: 'Rs 1850/sqft',
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
      title: 'Premium Package',
      price: '₹2000/sq. ft.',
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
      title: 'Luxury Package',
      price: '₹2300/- per sq. ft.',
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
        <Box sx={{
                padding: { xs: '12px', sm: '20px' },
                backgroundColor: '#f9f9f9',
                maxWidth: '100%',
                boxSizing: 'border-box',
                backgroundImage: 'linear-gradient(to bottom, #ffffff, #f9f9f9)'
              }}>
                {packages.map((pkg) => (
                  <Card 
                    key={pkg.id}
                    sx={{ 
                      borderRadius: '16px',
                      boxShadow: '0 6px 15px rgba(0,0,0,0.08)',
                      marginBottom: '30px',
                      overflow: 'hidden',
                      transition: 'transform 0.3s',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.12)'
                      },
                      borderLeft: '4px solid #f4a344'
                    }}
                  >
                    <CardHeader
                      title={
                        <Typography variant="h6" sx={{ fontWeight: 700, color: '#333' }}>
                          {pkg.title}
                        </Typography>
                      }
                      subheader={
                        <Typography variant="h5" sx={{ 
                          fontWeight: 600, 
                          color: '#222',
                          mt: 1,
                          backgroundColor: 'rgba(244, 163, 68, 0.2)',
                          display: 'inline-block',
                          px: 2,
                          py: 0.5,
                          borderRadius: '12px'
                        }}>
                          {pkg.price}
                        </Typography>
                      }
                      sx={{
                        backgroundColor: '#f4a344',
                        padding: '20px',
                        textAlign: 'center',
                        position: 'relative',
                        '&:after': {
                          content: '""',
                          position: 'absolute',
                          bottom: 0,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '80px',
                          height: '3px',
                          backgroundColor: '#fff',
                          borderRadius: '3px'
                        }
                      }}
                    />
                    
                    <Box>
                      {pkg.sections.map((section) => (
                        <Accordion 
                          key={section.id}
                          expanded={expanded[pkg.id] === section.id}
                          onChange={handleChange(section.id, pkg.id)}
                          sx={{
                            '&:before': { display: 'none' },
                            boxShadow: 'none',
                            borderBottom: '1px solid rgba(0,0,0,0.08)',
                            backgroundColor: expanded[pkg.id] === section.id ? 'rgba(244, 163, 68, 0.05)' : 'transparent',
                            transition: 'background-color 0.3s ease'
                          }}
                        >
                          <AccordionSummary
                            expandIcon={
                              expanded[pkg.id] === section.id ? 
                              <RemoveIcon sx={{ color: '#f4a344' }} /> : 
                              <AddIcon sx={{ color: '#666' }} />
                            }
                            aria-controls={`${section.id}-content`}
                            id={`${section.id}-header`}
                            sx={{
                              padding: '0 20px',
                              minHeight: '56px !important',
                              '& .MuiAccordionSummary-content': {
                                margin: '12px 0',
                                alignItems: 'center'
                              },
                              '&:hover': {
                                backgroundColor: 'rgba(244, 163, 68, 0.05)'
                              }
                            }}
                          >
                            <Typography sx={{ 
                              fontWeight: 500,
                              color: expanded[pkg.id] === section.id ? '#f4a344' : '#444',
                              fontSize: '0.95rem'
                            }}>
                              {section.title}
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails sx={{ 
                            padding: '0 20px 20px',
                            backgroundColor: '#fff',
                            borderLeft: '3px solid #f4a344',
                            marginLeft: '20px',
                            marginBottom: '10px',
                            borderRadius: '0 8px 8px 0'
                          }}>
                            <Typography variant="body2" sx={{ 
                              color: '#555',
                              textAlign: 'justify',
                              lineHeight: '1.7',
                              fontSize: '0.9rem'
                            }}>
                              {section.content}
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                      ))}
                    </Box>
                  </Card>
                ))}
              </Box>
  );
};

export default ConstructionPackages;