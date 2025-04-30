import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  CircularProgress,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { toast } from "react-toastify";

const TwoDPlanForm = ({ addOrUpdatePlan, editPlan }) => {
  const [planName, setPlanName] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("Edit Plan received:", editPlan);
    if (editPlan) {
      setPlanName(editPlan.name);
      setImagePreview(editPlan.image);
    }
  }, [editPlan]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!planName || (!imageFile && !imagePreview)) return;
  
    setLoading(true);
  
    try {
      const formData = new FormData();
      formData.append("user_id", 1);
      formData.append("category_id", 1);
      formData.append("content", planName);
  
      // Always include image data when updating
      if (editPlan) {
        if (imageFile) {
          // New image file selected
          formData.append("image", imageFile);
        } else if (imagePreview) {
          // Keep existing image (might need special handling for your API)
          // Some APIs need explicit instruction to keep existing image
          formData.append("image", ""); // Or your API might need different handling
        } else {
          // Image was removed
          formData.append("image", ""); // Explicitly clear image
        }
      } else {
        // For new creations, only include if imageFile exists
        if (imageFile) {
          formData.append("image", imageFile);
        }
      }
  
      const url = editPlan
        ? `http://46.37.122.105:89/construction-content/${editPlan.content_id || editPlan.id}/`
        : "http://46.37.122.105:89/construction-content/";
  
      const method = editPlan ? "PUT" : "POST";
  
      // Debug log to verify FormData contents
      console.log("FormData contents:");
      for (let [key, value] of formData.entries()) {
        console.log(key, value);
      }
  
      const response = await fetch(url, {
        method,
        body: formData,
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error("API Error:", errorData);
        throw new Error(errorData.detail || "Operation failed");
      }
  
      const result = await response.json();
      console.log("API Success:", result);
  
      toast.success(editPlan ? "Plan updated successfully!" : "Plan uploaded to server!");
      const updatedPlan = {
        id: editPlan ? editPlan.content_id || editPlan.id : Date.now(),
        name: planName,
        image: imageFile ? URL.createObjectURL(imageFile) : imagePreview,
        date: new Date().toISOString().slice(0, 10),
      };
      addOrUpdatePlan(updatedPlan);
  
    } catch (error) {
      console.error("Submission Error:", error);
      toast.error(error.message || "An error occurred during submission.");
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log("Image selected:", file);
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        console.log("Image preview generated");
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    console.log("Image removed");
    setImageFile(null);
    setImagePreview(null);
  };

  return (
    <>
      <Typography variant="h5" gutterBottom>
        {editPlan ? "Edit 2D Plan" : "Upload 2D Plan"}
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <TextField
          label="Plan Name"
          variant="outlined"
          fullWidth
          size="small"
          value={planName}
          onChange={(e) => setPlanName(e.target.value)}
        />

        <Button variant="outlined" component="label">
          {imagePreview ? "Change Image" : "Upload Image"}
          <input hidden type="file" accept="image/*" onChange={handleImageChange} />
        </Button>

        {imagePreview && (
          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxHeight: 200,
              overflow: "hidden",
              borderRadius: 2,
              mt: 1,
            }}
          >
            <img
              src={imagePreview}
              alt="Preview"
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
            <IconButton
              size="small"
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                bgcolor: "white",
                ":hover": { bgcolor: "grey.200" },
              }}
              onClick={handleRemoveImage}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>
        )}

        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={!planName || (!imageFile && !imagePreview) || loading}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : editPlan ? "Update" : "Submit"}
        </Button>
      </Box>
    </>
  );
};

export default TwoDPlanForm;