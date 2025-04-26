import React from "react";
import AdminUploadPropertiesForm from "./AdminUploadPropertiesForm";
import AdminUploadPropertiesTable from "./AdminUploadPropertiesTable";
import { Box } from "@mui/material";
import AdminDashboard from "../../Admin/Dashboard/Dashboard"

const UploadPropertiesPage = () => {
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
        gap: 4,
      }}
    >
      <AdminUploadPropertiesTable />
    </Box>
    </>
  );
};

export default UploadPropertiesPage;
