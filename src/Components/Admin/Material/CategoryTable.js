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

const CategoryTable = ({ toggleForm, categories, onEdit, onDelete }) => {
  const columns = [
    {
      Header: "S.No",
      id: "serialNo",
      Cell: ({ row }) => row.index + 1,
      disableSortBy: true,
    },
    {
      Header: "Category Name",
      accessor: "name",
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
        <Typography variant="h5">Categories Table</Typography>

        <Button variant="contained" color="primary" onClick={toggleForm}>
          Add Category
        </Button>
      </Box>

      <DataTable columns={columns} data={categories} />
    </Container>
  );
};

export default CategoryTable;
