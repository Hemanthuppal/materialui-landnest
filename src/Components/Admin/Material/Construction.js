import React, { useState, useEffect } from "react";
import { Box, Modal } from "@mui/material";
import ConstructionForm from "./ConstructionForm";
import ConstructionTable from "./ConstructionTable";
import AdminDashboard from "../../Admin/Dashboard/Dashboard";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Construction = () => {
  const [showForm, setShowForm] = useState(false);
  const [constructions, setConstructions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [editConstruction, setEditConstruction] = useState(null);

  useEffect(() => {
    const storedConstructions = JSON.parse(localStorage.getItem("constructions")) || [];
    const storedCategories = JSON.parse(localStorage.getItem("categories")) || [];
    setConstructions(storedConstructions);
    setCategories(storedCategories);
  }, []);

  const toggleForm = () => {
    setEditConstruction(null);
    setShowForm((prev) => !prev);
  };

  const addOrUpdateConstruction = (construction) => {
    let updatedConstructions;
    if (editConstruction) {
      updatedConstructions = constructions.map((c) =>
        c.id == editConstruction.id ? construction : c
      );
      toast.success("Material updated successfully!");
    } else {
      updatedConstructions = [...constructions, construction];
      toast.success("Material added successfully!");
    }
    setConstructions(updatedConstructions);
    localStorage.setItem("constructions", JSON.stringify(updatedConstructions));
    setShowForm(false);
  };

  const handleEdit = (id) => {
    const materialToEdit = constructions.find((c) => c.id == id);
    if (materialToEdit) {
      setEditConstruction(materialToEdit);
      setShowForm(true);
    }
  };

  const handleDelete = (id) => {
    const updatedConstructions = constructions.filter((c) => c.id !== id);
    setConstructions(updatedConstructions);
    localStorage.setItem("constructions", JSON.stringify(updatedConstructions));
    toast.success("Material deleted successfully!");
  };

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
        <ConstructionTable
          toggleForm={toggleForm}
          constructions={constructions}
          categories={categories}
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
            <ConstructionForm
              addOrUpdateConstruction={addOrUpdateConstruction}
              editConstruction={editConstruction}
              categories={categories}
            />
          </Box>
        </Modal>
        <ToastContainer position="top-right" autoClose={2000} />
      </Box>
    </>
  );
};

export default Construction;
