import React, { useState } from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const ConstructionPackage = () => {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  const packageItems = [
    {
      title: "Design and Drawings",
      details: ["Architectural drawings", "Structural drawings", "Electrical layouts", "Plumbing plans"],
      size: "414 × 123"
    },
    {
      title: "Construction materials",
      details: ["Cement", "Steel", "Bricks", "Aggregates", "Sand"]
    },
    {
      title: "Flooring and wall tiling",
      details: ["Floor tiles", "Wall tiles", "Adhesives", "Grouting"]
    },
    {
      title: "Windows",
      details: ["Aluminum frames", "Glass", "Hardware"]
    },
    {
      title: "Doors",
      details: ["Main door", "Internal doors", "Hardware"]
    },
    {
      title: "Painting and Finishing",
      details: ["Interior paint", "Exterior paint", "Primer", "Putty"]
    },
    {
      title: "Plumbing and Sanitary",
      details: ["Pipes", "Fittings", "Sanitary ware", "Fixtures"]
    },
    {
      title: "Extra charges",
      details: ["Transportation", "Labor charges", "Miscellaneous"]
    }
  ];

  return (
    <Box sx={{ 
      width: '100%',
      maxWidth: '100%',
      p: 2,
      boxSizing: 'border-box'
    }}>
      {/* Package Header */}
      <Box sx={{ 
        textAlign: 'center',
        mb: 3,
        borderBottom: '1px solid #e0e0e0',
        pb: 2
      }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Basic Package
        </Typography>
        <Typography variant="subtitle1" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
          Rs 1850/sqft
        </Typography>
      </Box>

      {/* Package Items */}
      <Box sx={{ width: '100%' }}>
        {packageItems.map((item, index) => (
          <Accordion 
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            sx={{
              boxShadow: 'none',
              border: '1px solid #e0e0e0',
              mb: 1,
              borderRadius: '4px !important',
              '&:before': {
                display: 'none'
              }
            }}
          >
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls={`panel${index}bh-content`}
              id={`panel${index}bh-header`}
              sx={{
                minHeight: '48px !important',
                '& .MuiAccordionSummary-content': {
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  mr: 1
                }
              }}
            >
              <Typography sx={{ fontWeight: 'medium' }}>{item.title}</Typography>
              {item.size && (
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  {item.size}
                </Typography>
              )}
            </AccordionSummary>
            <AccordionDetails sx={{ pt: 0, pb: 2 }}>
              <List dense sx={{ py: 0 }}>
                {item.details.map((detail, i) => (
                  <React.Fragment key={i}>
                    <ListItem sx={{ px: 0, py: 0.5 }}>
                      <ListItemText 
                        primary={detail} 
                        primaryTypographyProps={{ variant: 'body2' }}
                      />
                    </ListItem>
                    {i < item.details.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default ConstructionPackage;