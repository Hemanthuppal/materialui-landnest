import React, { useState, useEffect } from "react";
import { Box, Button, TextField, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const TwoDPlanForm = ({ addOrUpdatePlan, editPlan }) => {
  const [planName, setPlanName] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    if (editPlan) {
      setPlanName(editPlan.name);
      setImagePreview(editPlan.image);
    }
  }, [editPlan]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!planName || (!imageFile && !imagePreview)) return;

    const id = editPlan ? editPlan.id : Date.now();
    const date = editPlan ? editPlan.date : new Date().toISOString().slice(0, 10);

    if (imageFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        addOrUpdatePlan({
          id,
          name: planName,
          image: reader.result,
          date,
        });
      };
      reader.readAsDataURL(imageFile);
    } else {
      addOrUpdatePlan({
        id,
        name: planName,
        image: imagePreview,
        date,
      });
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
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
          disabled={!planName || (!imageFile && !imagePreview)}
        >
          {editPlan ? "Update" : "Submit"}
        </Button>
      </Box>
    </>
  );
};

export default TwoDPlanForm;
