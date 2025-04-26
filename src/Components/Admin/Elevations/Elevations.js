import React from "react";
import ElevationForm from "./ElevationForm";
import ElevationTable from "./ElevationTable";
import { Box } from "@mui/material";
import AdminDashboard from "../../Admin/Dashboard/Dashboard"

const ElevationsPage = () => {
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
        <ElevationForm />
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <ElevationTable />
      </Box>
    </Box>
  );
};

export default ElevationsPage;
