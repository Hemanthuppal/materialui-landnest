import React, { useState, useEffect } from "react";
import ElevationForm from "./ElevationForm";
import ElevationTable from "./ElevationTable";
import { Box, Modal } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AdminDashboard from "../../Admin/Dashboard/Dashboard";

const ElevationsPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [elevations, setElevations] = useState([]);
  const [editElevation, setEditElevation] = useState(null);

  useEffect(() => {
    const storedElevations = JSON.parse(localStorage.getItem("elevations"));
    if (storedElevations) {
      setElevations(storedElevations);
    }
  }, []);

  const toggleForm = () => {
    setShowForm((prev) => !prev);
    setEditElevation(null); // Reset edit form
  };

  const addElevation = (newElevation) => {
    let updatedElevations;
    if (editElevation) {
      updatedElevations = elevations.map((elevation) =>
        elevation.id === editElevation.id ? { ...newElevation, id: editElevation.id } : elevation
      );
      toast.success("Elevation updated successfully!");
    } else {
      updatedElevations = [...elevations, newElevation];
      toast.success("Elevation added successfully!");
    }

    setElevations(updatedElevations);
    localStorage.setItem("elevations", JSON.stringify(updatedElevations));
    setShowForm(false);
    setEditElevation(null);
  };

  const handleEdit = (id) => {
    const selected = elevations.find((el) => el.id === id);
    if (selected) {
      setEditElevation(selected);
      setShowForm(true);
    }
  };

  const handleDelete = (id) => {
    const updatedElevations = elevations.filter((el) => el.id !== id);
    setElevations(updatedElevations);
    localStorage.setItem("elevations", JSON.stringify(updatedElevations));
    toast.success("Elevation deleted successfully!");
  };

  return (
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
      <AdminDashboard />

      <ElevationTable 
        toggleForm={toggleForm} 
        elevations={elevations} 
        onEdit={handleEdit} 
        onDelete={handleDelete} 
      />

      <Modal open={showForm} onClose={toggleForm}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
          }}
        >
          <ElevationForm addElevation={addElevation} editData={editElevation} />
        </Box>
      </Modal>

      <ToastContainer position="top-right" autoClose={2000} />
    </Box>
  );
};

export default ElevationsPage;
