import React, { useState, useEffect } from "react";
import BestDealsForm from "./BestDealsForm";
import BestDealsTable from "./BestDealsTable";
import { Box, Modal } from "@mui/material";
import AdminDashboard from "../../Admin/Dashboard/Dashboard";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const BestDealsPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [deals, setDeals] = useState([]);
  const [editDeal, setEditDeal] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("bestDeals"));
    if (stored) setDeals(stored);
  }, []);

  const toggleForm = () => {
    setEditDeal(null);
    setShowForm(prev => !prev);
  };

  const addOrUpdateDeal = (deal) => {
    let updated;
    if (editDeal) {
      updated = deals.map(d => d.id === editDeal.id ? deal : d);
      toast.success("Deal updated!");
    } else {
      updated = [...deals, deal];
      toast.success("Deal added!");
    }
    setDeals(updated);
    localStorage.setItem("bestDeals", JSON.stringify(updated));
    setShowForm(false);
  };

  const handleEdit = (id) => {
    const deal = deals.find(d => d.id === id);
    setEditDeal(deal);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    const updated = deals.filter(d => d.id !== id);
    setDeals(updated);
    localStorage.setItem("bestDeals", JSON.stringify(updated));
    toast.info("Deal deleted");
  };

  return (
    <>
      <AdminDashboard />
      <Box sx={{ px: { xs: 2, md: 4 }, py: { xs: 2, md: 4 }, backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
        <BestDealsTable deals={deals} onEdit={handleEdit} onDelete={handleDelete} toggleForm={toggleForm} />
        <Modal open={showForm} onClose={toggleForm}>
          <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 400, bgcolor: "background.paper", borderRadius: 2, boxShadow: 24, p: 4 }}>
            <BestDealsForm addOrUpdateDeal={addOrUpdateDeal} editDeal={editDeal} />
          </Box>
        </Modal>
        <ToastContainer position="top-right" autoClose={2000} />
      </Box>
    </>
  );
};

export default BestDealsPage;
