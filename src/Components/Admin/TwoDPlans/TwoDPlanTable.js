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

const TwoDPlanTable = ({ toggleForm, plans, onEdit, onDelete }) => {
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
          flexWrap: "wrap",
          mb: 2,
        }}
      >
        <Typography variant="h5">2D Plans Table</Typography>

        <Button variant="contained" color="primary" onClick={toggleForm}>
          Add 2D Plan
        </Button>
      </Box>

      <DataTable columns={columns} data={plans} />
    </Container>
  );
};

export default TwoDPlanTable;
