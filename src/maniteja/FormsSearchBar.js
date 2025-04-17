// import React from 'react';
// import { Box, IconButton } from '@mui/material';
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// import SearchIcon from '@mui/icons-material/Search';
// import TuneIcon from '@mui/icons-material/Tune';

// const SearchBar = ({ onBackClick, onSearchClick, onFilterClick }) => {
//   return (
//     <Box
//       display="flex"
//       alignItems="center"
//       justifyContent="space-between"
//       px={2}
//       py={1}
//       bgcolor="white"
//       boxShadow={1}
//       position="relative"
//     >
//       {/* Left Back Arrow */}
//       <IconButton onClick={onBackClick}>
//         <ArrowBackIosNewIcon />
//       </IconButton>

//       {/* Center Red Dot */}
//       <Box
//         position="absolute"
//         left="50%"
//         top="50%"
//         sx={{
//           transform: 'translate(-50%, -50%)',
//         }}
//       >
//       </Box>

//       {/* Right Icons */}
//       <Box display="flex" alignItems="center" gap={1}>
//         <IconButton onClick={onSearchClick}>
//           <SearchIcon />
//         </IconButton>
//         <IconButton onClick={onFilterClick}>
//           <TuneIcon />
//         </IconButton>
//       </Box>
//     </Box>
//   );
// };

// export default SearchBar;

import React from 'react';
import { Box, IconButton, InputBase, Paper } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';

const SearchBar = ({ onBackClick, onSearchClick, onFilterClick }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      px={1.5}
      py={1}
      bgcolor="white"
      boxShadow={1}
      // boxShadow={0}
    >
      {/* Back Button */}
      <IconButton onClick={onBackClick}>
        <ArrowBackIosNewIcon />
      </IconButton>

      {/* Centered Search Input */}
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

      {/* Filter Icon */}
      <IconButton onClick={onFilterClick}>
        <TuneIcon />
      </IconButton>
    </Box>
  );
};

export default SearchBar;

