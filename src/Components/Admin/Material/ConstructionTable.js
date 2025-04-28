import React from "react";
import {
  Container,
  Typography,
  IconButton,
  Box,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DataTable from "../Pagination/TableLayout/TableLayout";

const ConstructionTable = ({ toggleForm, constructions, categories, onEdit, onDelete }) => {
  
  // Helper to find category name from ID
  const getCategoryName = (id) => {
    const cat = categories.find(c => c.id === id);
    return cat ? cat.name : "Unknown";
  };

  const columns = [
    {
      Header: "S.No",
      id: "serialNo",
      Cell: ({ row }) => row.index + 1,
      disableSortBy: true,
    },
    {
      Header: "Image",
      accessor: "image",
      Cell: ({ value }) => (
        value ? <img src={value} alt="Material" style={{ width: 50, height: 50, objectFit: "cover", borderRadius: 4 }} /> : "No Image"
      ),
      disableSortBy: true,
    },
    {
      Header: "Category",
      accessor: "categoryId",
      Cell: ({ value }) => getCategoryName(value),
    },
    {
      Header: "Material Name",
      accessor: "materialName",
    },
    {
      Header: "Actions",
      id: "actions",
      Cell: ({ row }) => (
        <>
          <IconButton color="primary" onClick={() => onEdit(row.original.id)}>
            <EditIcon />
          </IconButton>
          <IconButton color="error" onClick={() => onDelete(row.original.id)}>
            <DeleteIcon />
          </IconButton>
        </>
      ),
      disableSortBy: true,
    },
  ];

  return (
    <Container sx={{ mt: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          mb: 2,
        }}
      >
        <Typography variant="h5">Constructions Table</Typography>

        <Button variant="contained" color="primary" onClick={toggleForm}>
          Add Material
        </Button>
      </Box>

      <DataTable columns={columns} data={constructions} />
    </Container>
  );
};

export default ConstructionTable;
