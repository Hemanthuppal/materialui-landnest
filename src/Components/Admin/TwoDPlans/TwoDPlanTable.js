import React from "react";
import {
  Container,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import image1 from "../../../Images/Admin2D.jpg";
import image2 from "../../../Images/Admin2D-1.jpg";
import DataTable from "../Pagination/TableLayout/TableLayout"; // Update this path as needed

const dummyPlans = [
  {
    id: 1,
    name: "Ground Floor Plan",
    image: image1,
    date: "2024-04-01",
  },
  {
    id: 2,
    name: "First Floor Plan",
    image: image2,
    date: "2024-04-10",
  },
  {
    id: 3,
    name: "Ground Floor Plan",
    image: image1,
    date: "2024-04-01",
  },
  {
    id: 4,
    name: "First Floor Plan",
    image: image2,
    date: "2024-04-10",
  },

  {
    id: 5,
    name: "Ground Floor Plan",
    image: image1,
    date: "2024-04-01",
  },
  {
    id: 6,
    name: "First Floor Plan",
    image: image2,
    date: "2024-04-10",
  },
  // Add more for testing
];

const TwoDPlanTable = () => {
  const handleEdit = (id) => {
    console.log("Edit plan with ID:", id);
  };

  const handleDelete = (id) => {
    console.log("Delete plan with ID:", id);
  };

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
          <Box component="img" src={value} alt={row.original.name} sx={{ width: 60, borderRadius: 1 }} />
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
          <IconButton color="primary" onClick={() => handleEdit(value)}>
            <EditIcon />
          </IconButton>
          <IconButton color="error" onClick={() => handleDelete(value)}>
            <DeleteIcon />
          </IconButton>
        </>
      ),
      disableSortBy: true,
    },
  ];

  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h5" gutterBottom>
        2D Plans Table
      </Typography>
      <DataTable columns={columns} data={dummyPlans} />
    </Container>
  );
};

export default TwoDPlanTable;
