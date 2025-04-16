import React from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';

const SearchBar = ({ onBackClick, onSearchClick, onFilterClick }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      px={2}
      py={1}
      bgcolor="white"
      boxShadow={1}
      position="relative"
    >
      {/* Left Back Arrow */}
      <IconButton onClick={onBackClick}>
        <ArrowBackIosNewIcon />
      </IconButton>

      {/* Center Red Dot */}
      <Box
        position="absolute"
        left="50%"
        top="50%"
        sx={{
          transform: 'translate(-50%, -50%)',
        }}
      >
        {/* <Box
          width={6}
          height={6}
          borderRadius="50%"
          bgcolor="red"
        /> */}
      </Box>

      {/* Right Icons */}
      <Box display="flex" alignItems="center" gap={1}>
        <IconButton onClick={onSearchClick}>
          <SearchIcon />
        </IconButton>
        <IconButton onClick={onFilterClick}>
          <TuneIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default SearchBar;
