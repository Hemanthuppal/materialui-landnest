import React, { useState, useEffect } from "react";
import { Button, TextField, Box, MenuItem, Select, InputLabel, FormControl, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const ConstructionForm = ({ addOrUpdateConstruction, editConstruction, categories }) => {
  const [materialName, setMaterialName] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (editConstruction) {
      setMaterialName(editConstruction.materialName);
      setCategoryId(editConstruction.categoryId);
      setImage(editConstruction.image || "");
    }
  }, [editConstruction]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!materialName.trim() || !categoryId) return;

    const construction = {
      id: editConstruction ? editConstruction.id : Date.now(),
      materialName,
      categoryId,
      image,
    };
    addOrUpdateConstruction(construction);
    setMaterialName("");
    setCategoryId("");
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" gap={2}>
        <FormControl required>
          <InputLabel id="category-label">Category</InputLabel>
          <Select
            labelId="category-label"
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            label="Category"
          >
            {categories.map((category) => (
              <MenuItem key={category.id} value={category.id}>
                {category.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          label="Material Name"
          value={materialName}
          onChange={(e) => setMaterialName(e.target.value)}
          required
        />

        <Button variant="contained" component="label">
          Upload Image
          <input type="file" accept="image/*" hidden onChange={handleImageChange} />
        </Button>

        {image && (
          <Box
            position="relative"
            sx={{
              width: "100%",
              height: 200,
              border: "1px solid #ccc",
              borderRadius: 1,
              mt: 1,
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              src={image}
              alt="Preview"
              sx={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
            <IconButton
              size="small"
              onClick={removeImage}
              sx={{ position: "absolute", top: 8, right: 8, backgroundColor: "white" }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>
        )}

        <Button type="submit" variant="contained" color="primary">
          {editConstruction ? "Update Material" : "Add Material"}
        </Button>
      </Box>
    </form>
  );
};

export default ConstructionForm;
