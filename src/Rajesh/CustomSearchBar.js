import React from 'react';
import { ArrowBack, Search, Tune } from '@mui/icons-material';
import { Box, IconButton, InputBase, Paper } from '@mui/material';

const CustomSearchBar = ({ value, onChange }) => {
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
      <IconButton>
        <ArrowBack />
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
