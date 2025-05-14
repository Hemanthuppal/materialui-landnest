import React, { useState, useEffect } from "react";
import { Box, Modal } from "@mui/material";
import CategoryForm from "./CategoryForm";
import CategoryTable from "./CategoryTable";
import AdminDashboard from "../../Admin/Dashboard/Dashboard";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Category = () => {
  const [showForm, setShowForm] = useState(false);
  const [categories, setCategories] = useState([]);
  const [editCategory, setEditCategory] = useState(null);

  useEffect(() => {
    const storedCategories = JSON.parse(localStorage.getItem("categories"));
    if (storedCategories) {
      setCategories(storedCategories);
    }
  }, []);

  const toggleForm = () => {
    setEditCategory(null);
    setShowForm((prev) => !prev);
  };

  const addOrUpdateCategory = (category) => {
    let updatedCategories;
    if (editCategory) {
      updatedCategories = categories.map((c) =>
        c.id == editCategory.id ? category : c
      );
      toast.success("Category updated successfully!");
    } else {
      updatedCategories = [...categories, category];
      toast.success("Category added successfully!");
    }
    setCategories(updatedCategories);
    localStorage.setItem("categories", JSON.stringify(updatedCategories));
    setShowForm(false);
  };

  const handleEdit = (id) => {
    const categoryToEdit = categories.find((c) => c.id == id);
    if (categoryToEdit) {
      setEditCategory(categoryToEdit);
      setShowForm(true);
    }
  };

  const handleDelete = (id) => {
    const updatedCategories = categories.filter((c) => c.id !== id);
    setCategories(updatedCategories);
    localStorage.setItem("categories", JSON.stringify(updatedCategories));
    toast.success("Category deleted successfully!");
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
        <CategoryTable
          toggleForm={toggleForm}
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
            <CategoryForm addOrUpdateCategory={addOrUpdateCategory} editCategory={editCategory} />
          </Box>
        </Modal>
        <ToastContainer position="top-right" autoClose={2000} />
      </Box>
    </>
  );
};

export default Category;
