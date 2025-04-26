import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import logo from '../Images/logo.jpg'; // Replace with your actual logo path

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
        backgroundColor: 'black',
        boxShadow: 1,
      }}
    >
      {/* Back Button */}
      <IconButton onClick={onBackClick}>
        <ArrowBackIosNewIcon sx={{ color: 'white' }} />
      </IconButton>

      <Typography
                variant="h6"
                sx={{
                  color: 'white',
                  fontWeight: 'bold',
                  flexGrow: 1,
                  textAlign: 'center',
                  fontFamily: 'Inter, Roboto, Helvetica, sans-serif',
                }}
              >
                LANDNEST
              </Typography>

      {/* Logo on the Right */}
      <Box
        sx={{
          width: 80,
          height: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={logo}
          alt="Landnest Logo"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
          }}
        />
      </Box>

      {/* Search and Filter (Optional/Future Use) */}
      {/*
      <Paper
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
      </Paper>

      <IconButton onClick={onFilterClick}>
        <TuneIcon />
      </IconButton>
      */}
    </Box>
  );
};

export default PostBack;
