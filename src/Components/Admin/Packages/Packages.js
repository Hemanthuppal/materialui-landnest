import React from 'react';
import { Box, Grid } from '@mui/material';
import Packages from "./packages1" ;
import Packages2 from "./Packages2";
import Packages3 from "./Packages3";
import AdminDashboard from "../../Admin/Dashboard/Dashboard";

const MainPackages = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
         <AdminDashboard />
      <Grid container spacing={3} >
        {/* First package component */}
        <Grid item xs={12} sm={6} md={4} sx={{ width: "30%",marginLeft:"3%" }}>
          <Packages />
        </Grid>
        
        {/* Second package component */}
        <Grid item xs={12} sm={6} md={4} sx={{ width: "30%" }}>
          <Packages2  />
        </Grid>
        
        {/* Add more package components as needed */}
        <Grid item xs={12} sm={6} md={4} sx={{ width: "30%" }}>
           <Packages3 />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainPackages;