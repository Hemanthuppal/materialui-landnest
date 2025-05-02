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
import { BASE_URL } from "../../../Api/ApiUrls"; // adjust path as needed

const API_BASE_URL = `${BASE_URL}`;
const IMAGE_BASE_URL = `${API_BASE_URL}/construction-content`;

const TwoDPlanForm = ({ editPlan, onCancel, fetchPlans }) => {
  const { userId } = useContext(AuthContext); // assuming context provides user object
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (editPlan) {
      setName(editPlan.content || "");
      setPreview(`${API_BASE_URL}${editPlan.image}`);
      setImage(null);
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
    formData.append("category_id", 1); // 2D Plan category
    formData.append("user_id", 1); // assuming user has an 'id' field
    if (image) formData.append("image", image);

    try {
      if (editPlan) {
        await axios.put(`${IMAGE_BASE_URL}/${editPlan.content_id}/`, formData);
        toast.success("Plan updated successfully");
      } else {
        await axios.post(`${IMAGE_BASE_URL}/`, formData);
        toast.success("Plan added successfully");
      }
      fetchPlans();
      onCancel();
    } catch (error) {
      console.error("Error saving plan:", error);
      toast.error("Failed to save plan");
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
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={handleImageChange}
          />
        </Button>

        {/* Preview of selected or existing image */}
        {preview && (
          <Box>
            <Typography variant="subtitle2">Preview:</Typography>
            <img
              src={preview}
              alt="Preview"
              style={{ width: 120, height: 100, objectFit: "contain", border: "1px solid #ccc" }}
            />
          </Box>
        )}

        <Stack direction="row" spacing={2} justifyContent="flex-end">
          <Button onClick={onCancel} variant="outlined" color="secondary">
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            {editPlan ? "Update" : "Add"}
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default TwoDPlanForm;
