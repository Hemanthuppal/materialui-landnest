import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box
} from '@mui/material';

const rows = [
  {
    propertyType: 'Apartment',
    budget: '50 Lakh',
    latitude: '28.6139',
    longitude: '77.2090',
    description: 'Near Connaught Place, good connectivity.',
    status: 'Pending',
  },
  {
    propertyType: 'Villa',
    budget: '2 Crore',
    latitude: '28.6020',
    longitude: '77.2105',
    description: 'Luxury villa in central Delhi.',
    status: 'Pending',
  },
];

const Buy_Posttable = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Posted Deals
      </Typography>
      <TableContainer component={Paper} sx={{ overflowX: 'auto' }}>
        <Table sx={{ minWidth: 650 }} aria-label="responsive table">
          <TableHead sx={{ backgroundColor: '#white' }}>
            <TableRow>
              <TableCell sx={{ color: 'black' }}>Property Type</TableCell>
              <TableCell sx={{ color: 'black' }}>Budget</TableCell>
              <TableCell sx={{ color: 'black' }}>Latitude</TableCell>
              <TableCell sx={{ color: 'black' }}>Longitude</TableCell>
              <TableCell sx={{ color: 'black' }}>Description</TableCell>
              <TableCell sx={{ color: 'black' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.propertyType}</TableCell>
                <TableCell>{row.budget}</TableCell>
                <TableCell>{row.latitude}</TableCell>
                <TableCell>{row.longitude}</TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Buy_Posttable;
