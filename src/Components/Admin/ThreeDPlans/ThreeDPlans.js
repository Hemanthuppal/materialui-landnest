import React from "react";
import ThreeDPlanForm from "./ThreeDPlanForm";
import ThreeDPlanTable from "./ThreeDPlanTable";
import { Box } from "@mui/material";
import AdminDashboard from "../../Admin/Dashboard/Dashboard"

const ThreeDPlans = () => {
  return (
    <Box
    sx={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#f5f5f5",
      px: 1,
      py: 2,
    }}
  >
    <AdminDashboard />
    <Box sx={{ flexShrink: 0 }}>
      <ThreeDPlanForm />
    </Box>
    <Box sx={{ flexGrow: 1 }}>
      <ThreeDPlanTable />
    </Box>
  </Box>
  
  );
};

export default ThreeDPlans;
