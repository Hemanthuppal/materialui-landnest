// import React from 'react';
// import { Box, IconButton, InputBase, Paper } from '@mui/material';
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// import SearchIcon from '@mui/icons-material/Search';
// import TuneIcon from '@mui/icons-material/Tune';

// const SearchBar = ({ onBackClick, onSearchClick, onFilterClick }) => {
//   return (
//     <Box
//       sx={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         right: 0,
//         zIndex: 1201,
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         px: 1.5,
//         py: 1,
//         bgcolor: 'white',
//         boxShadow: 1,
//       }}
//     >
//       {/* Back Button */}
//       <IconButton onClick={onBackClick}>
//         <ArrowBackIosNewIcon />
//       </IconButton>

//       {/* Search Input */}
//       {/* <Paper
//         component="form"
//         sx={{
//           display: 'flex',
//           alignItems: 'center',
//           px: 1.5,
//           py: 0.5,
//           borderRadius: 5,
//           boxShadow: 0,
//           backgroundColor: '#f5f5f5',
//           flex: 1,
//           mx: 1.5,
//         }}
//       >
//         <InputBase
//           placeholder="Search here..."
//           inputProps={{ 'aria-label': 'search here' }}
//           sx={{ ml: 1, flex: 1 }}
//         />
//         <IconButton type="button" onClick={onSearchClick}>
//           <SearchIcon />
//         </IconButton>
//       </Paper> */}

//       {/* Filter Icon */}
//       {/* <IconButton onClick={onFilterClick}>
//         <TuneIcon />
//       </IconButton> */}
//     </Box>
//   );
// };

// export default SearchBar;

import React from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import image from '../Images/logo.jpg'; // Your uploaded Land Nest logo

const SearchBar = ({ onBackClick }) => {
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
        bgcolor: '#D6C0B3', // Deep navy
        
      }}
    >
      {/* Back Button */}
      <IconButton onClick={onBackClick} sx={{ color: 'black' }}>
        <ArrowBackIosNewIcon />
      </IconButton>

      {/* Logo on the right side */}
      {/* <Box sx={{ ml: 'auto' }}>
        <img
          src={image}
          alt="Land Nest Logo"
          style={{
            height: '30px',
            width: 'auto',
            borderRadius: '8px',
            objectFit: 'contain',
            backgroundColor: '#1a1a2e', // Optional background behind image
            padding: '1px',
          }}
        />
      </Box> */}
    </Box>
  );
};

export default SearchBar;

