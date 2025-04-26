import React from "react";
import TwoDPlanForm from "./TwoDPlanForm";
import TwoDPlanTable from "./TwoDPlanTable";
import { Box } from "@mui/material";
import AdminDashboard from "../../Admin/Dashboard/Dashboard";

const TwoDPlansPage = () => {
  return (
    <>
      <AdminDashboard />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#f5f5f5",
          px: { xs: 2, md: 4 },
          py: { xs: 2, md: 4 },
          gap: 4, // ADD GAP BETWEEN FORM AND TABLE
        }}
      >
        <TwoDPlanForm />
        <TwoDPlanTable />
      </Box>
    </>
  );
};

export default TwoDPlansPage;
