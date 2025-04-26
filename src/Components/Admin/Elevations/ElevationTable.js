import React from "react";
import { Container, Typography, IconButton, Box, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DataTable from "../Pagination/TableLayout/TableLayout"; // Adjust if needed

const ElevationTable = ({ toggleForm, elevations, onEdit, onDelete }) => {
  const columns = [
    {
      Header: "S.No",
      accessor: (row, i) => i + 1,
      id: "serialNo",
      disableSortBy: true,
    },
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Image",
      accessor: "image",
      Cell: ({ value, row }) =>
        value ? (
          <Box
            component="img"
            src={value}
            alt={row.original.name}
            sx={{ width: 60, borderRadius: 1 }}
          />
        ) : (
          "No Image"
        ),
      disableSortBy: true,
    },
    {
      Header: "Upload Date",
      accessor: "date",
    },
    {
      Header: "Actions",
      accessor: "id",
      Cell: ({ value }) => (
        <>
          <IconButton color="primary" onClick={() => onEdit(value)}>
            <EditIcon />
          </IconButton>
          <IconButton color="error" onClick={() => onDelete(value)}>
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
          mb: 2,
        }}
      >
        <Typography variant="h5">Elevation Plans Table</Typography>

        <Button variant="contained" color="primary" onClick={toggleForm}>
          Add Elevation
        </Button>
      </Box>

      <DataTable columns={columns} data={elevations} />
    </Container>
  );
};

export default ElevationTable;
