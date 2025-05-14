import React, { useState, useEffect } from "react";
import TwoDPlanForm from "./TwoDPlanForm";
import TwoDPlanTable from "./TwoDPlanTable";
import { Box, Modal } from "@mui/material";
import AdminDashboard from "../../Admin/Dashboard/Dashboard";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const TwoDPlansPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [plans, setPlans] = useState([]);
  const [editPlan, setEditPlan] = useState(null);

  

  const toggleForm = () => {
    setEditPlan(null);
    setShowForm((prev) => !prev);
  };

  const addOrUpdatePlan = (plan) => {
    let updatedPlans;
    if (editPlan) {
      updatedPlans = plans.map((p) => (p.id == editPlan.id ? plan : p));
      toast.success("Plan updated successfully!");
    } else {
      updatedPlans = [...plans, plan];
      toast.success("Plan added successfully!");
    }
    setPlans(updatedPlans);
    localStorage.setItem("plans", JSON.stringify(updatedPlans));
    setShowForm(false);
  };

  const handleEdit = (id) => {
    const planToEdit = plans.find((plan) => plan.id == id);
    if (planToEdit) {
      setEditPlan(planToEdit);
      setShowForm(true);
    }
  };

  const handleDelete = (id) => {
    const updatedPlans = plans.filter((plan) => plan.id !== id);
    setPlans(updatedPlans);
    localStorage.setItem("plans", JSON.stringify(updatedPlans));
    toast.success("Plan deleted successfully!");
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
        <TwoDPlanTable
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
            <TwoDPlanForm addOrUpdatePlan={addOrUpdatePlan} editPlan={editPlan} />
          </Box>
        </Modal>
           <ToastContainer position="top-right" autoClose={2000} />
      </Box>
    </>
  );
};

export default TwoDPlansPage;
