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

// import React from 'react';
// import { Box, IconButton } from '@mui/material';
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// import image from '../Images/logo.jpg'; // Your uploaded Land Nest logo

// const SearchBar = ({ onBackClick }) => {
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
//         bgcolor: '#D6C0B3', // Deep navy
        
//       }}
//     >
//       {/* Back Button */}
//       <IconButton onClick={onBackClick} sx={{ color: 'black' }}>
//         <ArrowBackIosNewIcon />
//       </IconButton>

//       {/* Logo on the right side */}
//       {/* <Box sx={{ ml: 'auto' }}>
//         <img
//           src={image}
//           alt="Land Nest Logo"
//           style={{
//             height: '30px',
//             width: 'auto',
//             borderRadius: '8px',
//             objectFit: 'contain',
//             backgroundColor: '#1a1a2e', // Optional background behind image
//             padding: '1px',
//           }}
//         />
//       </Box> */}
//     </Box>
//   );
// };

// export default SearchBar;

import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import logo from '../Images/logo.jpg'; // Your uploaded Land Nest logo

const SearchBar = ({ onBackClick }) => {
  return (
    <Box
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 1200,
        bgcolor: 'black',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p={1}
        sx={{ borderBottom: '1px solid rgba(0,0,0,0.08)' }}
      >
        {/* Back Button */}
        <IconButton
          onClick={onBackClick}
          sx={{
            color: 'white',
            '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' },
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>

        {/* LANDNEST Text */}
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

        {/* Logo Image */}
        <Box
          sx={{
            width: 80,
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            ml: 2,
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
      </Box>
    </Box>
  );
};

export default SearchBar;


