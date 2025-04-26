import React, { useState, useEffect } from "react";
import ThreeDPlanForm from "./ThreeDPlanForm";
import ThreeDPlanTable from "./ThreeDPlanTable";
import { Box, Modal } from "@mui/material";
import AdminDashboard from "../../Admin/Dashboard/Dashboard";
import { toast, ToastContainer } from "react-toastify"; // Import both toast and ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import CSS for react-toastify

const ThreeDPlans = () => {
  const [showForm, setShowForm] = useState(false);
  const [plans, setPlans] = useState([]);
  const [editPlan, setEditPlan] = useState(null);

  useEffect(() => {
    const storedPlans = JSON.parse(localStorage.getItem("threeDPlans"));
    if (storedPlans) {
      setPlans(storedPlans);
    }
  }, []);

  const toggleForm = () => {
    setEditPlan(null);
    setShowForm((prev) => !prev);
  };

  const addOrUpdatePlan = (plan) => {
    let updatedPlans;
    if (editPlan) {
      updatedPlans = plans.map((p) => (p.id === editPlan.id ? plan : p));
      toast.success("3D Plan updated successfully!");
    } else {
      updatedPlans = [...plans, plan];
      toast.success("3D Plan added successfully!");
    }
    setPlans(updatedPlans);
    localStorage.setItem("threeDPlans", JSON.stringify(updatedPlans));
    setShowForm(false);
  };

  const handleEdit = (id) => {
    const planToEdit = plans.find((plan) => plan.id === id);
    if (planToEdit) {
      setEditPlan(planToEdit);
      setShowForm(true);
    }
  };

  const handleDelete = (id) => {
    const updatedPlans = plans.filter((plan) => plan.id !== id);
    setPlans(updatedPlans);
    localStorage.setItem("threeDPlans", JSON.stringify(updatedPlans));
    toast.success("3D Plan deleted successfully!");
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

      <ThreeDPlanTable
        toggleForm={toggleForm}
        plans={plans}
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
          <ThreeDPlanForm addOrUpdatePlan={addOrUpdatePlan} editPlan={editPlan} />
        </Box>
      </Modal>

      {/* Toast Container here */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </Box>
  );
};

export default ThreeDPlans;
