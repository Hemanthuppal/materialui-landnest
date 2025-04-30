import React from "react";
import { Box, Button, Container, Typography, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DataTable from "../Pagination/TableLayout/TableLayout";

const BestDealsTable = ({ deals, onEdit, onDelete, toggleForm }) => {
  const columns = [
    { Header: "S.No", accessor: (_, i) => i + 1, id: "serialNo", disableSortBy: true },
    { Header: "Category", accessor: "category" },
    {
      Header: "Image",
      accessor: "image",
      Cell: ({ value }) =>
        value ? <img src={value} alt="deal" style={{ width: 60, borderRadius: 4 }} /> : "No Image",
      disableSortBy: true,
    },
    { Header: "Location", accessor: "location" },
    { Header: "Date", accessor: "date" },
    {
      Header: "Actions",
      accessor: "id",
      Cell: ({ value }) => (
        <>
          <IconButton color="primary" onClick={() => onEdit(value)}><EditIcon /></IconButton>
          <IconButton color="error" onClick={() => onDelete(value)}><DeleteIcon /></IconButton>
        </>
      ),
      disableSortBy: true,
    },
  ];

  return (
    <Container sx={{ mt: 4 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography variant="h5">Best Deals Table</Typography>
        <Button variant="contained" onClick={toggleForm}>Add Deal</Button>
      </Box>
      <DataTable columns={columns} data={deals} />
    </Container>
  );
};

export default BestDealsTable;
