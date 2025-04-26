import React, { useState, useEffect } from "react";
import { Box, Button, Container, TextField, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ElevationForm = ({ addElevation, editData }) => {
  const [elevationName, setElevationName] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    if (editData) {
      setElevationName(editData.name);
      setImagePreview(editData.image);
    }
  }, [editData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!elevationName || (!imageFile && !imagePreview)) return;

    if (imageFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newElevation = {
          id: editData ? editData.id : Date.now(),
          name: elevationName,
          image: reader.result,
          date: editData ? editData.date : new Date().toISOString().slice(0, 10),
        };
        addElevation(newElevation);
      };
      reader.readAsDataURL(imageFile);
    } else {
      const newElevation = {
        id: editData ? editData.id : Date.now(),
        name: elevationName,
        image: imagePreview,
        date: editData ? editData.date : new Date().toISOString().slice(0, 10),
      };
      addElevation(newElevation);
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
    <Container sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        {editData ? "Edit Elevation" : "Upload Elevation"}
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          maxWidth: 500,
          mx: "auto",
        }}
      >
        <TextField
          label="Elevation Name"
          variant="outlined"
          fullWidth
          size="small"
          value={elevationName}
          onChange={(e) => setElevationName(e.target.value)}
        />

        <Button variant="outlined" component="label">
          Upload Image
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
          disabled={!elevationName || (!imageFile && !imagePreview)}
        >
          {editData ? "Update" : "Submit"}
        </Button>
      </Box>
    </Container>
  );
};

export default ElevationForm;
