// SearchBar.js
import React from 'react';
import {
  Box,
  TextField,
  IconButton,
  InputAdornment
} from '@mui/material';
import {
  Search as SearchIcon,
  FilterList as FilterListIcon
} from '@mui/icons-material';

const SearchBar = () => {
  return (
    <Box sx={{ display: 'flex', mb: 2 }}>
      <TextField
        fullWidth
        placeholder="Search"
        variant="outlined"
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <IconButton sx={{ ml: 1 }}>
        <FilterListIcon />
      </IconButton>
    </Box>
  );
};

export default SearchBar;
