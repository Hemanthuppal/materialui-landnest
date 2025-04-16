import React from 'react';
import {  Search, Tune } from '@mui/icons-material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Box, IconButton, InputBase, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CustomSearchBar = ({ value, onChange }) => {
  const navigate = useNavigate();
  return (
    <Paper
      component="form"
      elevation={0}
      sx={{
        display: 'flex',
        alignItems: 'center',
        borderRadius: '30px',
        px: 1,
        py: 0.5,
        backgroundColor: '#f2f5f7',
        mx: 2,
        my: 2
      }}
    >
      <IconButton onClick={() => navigate(-1)}>
        <ArrowBackIosNewIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        value={value}
        onChange={onChange}
      />
      <IconButton>
        <Search />
      </IconButton>
      <IconButton>
        <Tune />
      </IconButton>
    </Paper>
  );
};

export default CustomSearchBar;
