import React from 'react';
import { Box, IconButton, InputBase, Paper } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';

const PostBack = ({ onBackClick, onSearchClick, onFilterClick }) => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1201,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 1.5,
        py: 1,
        backgroundColor: '#D6C0B3',
        boxShadow: 1,
      }}
    >
      {/* Back Button */}
      <IconButton onClick={onBackClick}>
        <ArrowBackIosNewIcon />
      </IconButton>

      {/* Search Input */}
      {/* <Paper
        component="form"
        sx={{
          display: 'flex',
          alignItems: 'center',
          px: 1.5,
          py: 0.5,
          borderRadius: 5,
          boxShadow: 0,
          backgroundColor: '#f5f5f5',
          flex: 1,
          mx: 1.5,
        }}
      >
        <InputBase
          placeholder="Search here..."
          inputProps={{ 'aria-label': 'search here' }}
          sx={{ ml: 1, flex: 1 }}
        />
        <IconButton type="button" onClick={onSearchClick}>
          <SearchIcon />
        </IconButton>
      </Paper> */}

      {/* Filter Icon */}
      {/* <IconButton onClick={onFilterClick}>
        <TuneIcon />
      </IconButton> */}
    </Box>
  );
};

export default PostBack;