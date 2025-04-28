// components/UserDetailModal.jsx

import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
  Box,
} from "@mui/material";

const UserDetailModal = ({ open, onClose, user }) => {
  if (!user) return null;

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>User Details</DialogTitle>
      <DialogContent dividers>
        <Box>
          <Typography><strong>Name:</strong> {user.name || "N/A"}</Typography>
          <Typography><strong>UserId:</strong> {user.user_id}</Typography>
          <Typography><strong>Profession:</strong> {user.profession}</Typography>
          <Typography><strong>Mobile:</strong> {user.mobile}</Typography>
          <Typography><strong>Email:</strong> {user.email}</Typography>
          <Typography><strong>Address:</strong> {user.address}</Typography>
          <Typography><strong>Experience:</strong> {user.experience}</Typography>
          <Typography><strong>Description:</strong> {user.description}</Typography>
          <Typography><strong>Latitude:</strong> {user.lat}</Typography>
          <Typography><strong>Longitude:</strong> {user.long}</Typography>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default UserDetailModal;
