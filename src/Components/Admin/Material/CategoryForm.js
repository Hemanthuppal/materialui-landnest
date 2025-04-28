import React, { useState, useEffect } from "react";
import { Button, TextField, Box } from "@mui/material";

const CategoryForm = ({ addOrUpdateCategory, editCategory }) => {
  const [name, setName] = useState("");

  useEffect(() => {
    if (editCategory) {
      setName(editCategory.name);
    }
  }, [editCategory]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    const category = {
      id: editCategory ? editCategory.id : Date.now(),
      name,
    };
    addOrUpdateCategory(category);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" gap={2}>
        <TextField
          label="Category Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          {editCategory ? "Update Category" : "Add Category"}
        </Button>
      </Box>
    </form>
  );
};

export default CategoryForm;
