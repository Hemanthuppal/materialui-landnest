import React, { useState, useEffect, useContext } from "react";
import {
  Button,
  TextField,
  Stack,
  Box,
  Typography,
} from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";
import { AuthContext } from "../../../AuthContext/AuthContext";

const API_BASE_URL = "http://46.37.122.105:89";
const IMAGE_BASE_URL = `${API_BASE_URL}/construction-content`;

const ElevationPlanForm = ({ editPlan, onCancel, fetchPlans }) => {
  const { userId } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (editPlan) {
      setName(editPlan.content || "");
      setPreview(`${API_BASE_URL}${editPlan.image}`);
    } else {
      setName("");
      setImage(null);
      setPreview("");
    }
  }, [editPlan]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name) {
      toast.error("Name is required");
      return;
    }

    const formData = new FormData();
    formData.append("content", name);
    formData.append("category_id", 3); // Elevation category
    formData.append("user_id", 1);
    if (image) formData.append("image", image);

    try {
      if (editPlan) {
        await axios.put(`${IMAGE_BASE_URL}/${editPlan.content_id}/`, formData);
        toast.success("Updated successfully");
      } else {
        await axios.post(`${IMAGE_BASE_URL}/`, formData);
        toast.success("Added successfully");
      }
      fetchPlans();
      onCancel();
    } catch (error) {
      toast.error("Failed to save");
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <Stack spacing={2}>
        <TextField
          label="Plan Name"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <Button variant="contained" component="label">
          {image ? "Change Image" : "Upload Image"}
          <input type="file" hidden accept="image/*" onChange={handleImageChange} />
        </Button>

        {preview && (
          <Box>
            <Typography variant="subtitle2">Preview:</Typography>
            <img src={preview} alt="Preview" style={{ width: 120, height: 100, objectFit: "contain" }} />
          </Box>
        )}

        <Stack direction="row" spacing={2} justifyContent="flex-end">
          <Button onClick={onCancel} variant="outlined" color="secondary">Cancel</Button>
          <Button type="submit" variant="contained" color="primary">{editPlan ? "Update" : "Add"}</Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ElevationPlanForm;
