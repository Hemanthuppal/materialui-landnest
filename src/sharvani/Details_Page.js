// Details_Page.js
import React from 'react';
import { Box } from '@mui/material';
import PropertyCard from './PropertyCard';
import SearchBar from './SearchBar';
import BottomNavbar from './BottomNavbar';

const Details_Page = () => {
  return (
    <Box sx={{ p: 2, pb: 8 }}>
      <SearchBar />
      <PropertyCard />
      <PropertyCard />
      <BottomNavbar />
    </Box>
  );
};

export default Details_Page;
