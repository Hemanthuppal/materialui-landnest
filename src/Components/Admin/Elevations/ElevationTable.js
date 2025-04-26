import React from "react";
import { Container, Typography, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import image1 from "../../../Images/Elevation1.jpg";
import image2 from "../../../Images/Elevation2.jpg";
import DataTable from "../Pagination/TableLayout/TableLayout"; // Adjust path as needed

const dummyElevations = [
  {
    id: 1,
    name: "Front Elevation",
    image: image1,
    date: "2024-04-12",
  },
  {
    id: 2,
    name: "Side Elevation",
    image: image2,
    date: "2024-04-12",
  },
];

const ElevationTable = () => {
  const handleEdit = (id) => {
    console.log("Edit elevation with ID:", id);
  };

  const handleDelete = (id) => {
    console.log("Delete elevation with ID:", id);
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
          <img src={value} alt={row.original.name} width="60" />
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
        Elevation Plans Table
      </Typography>
      <DataTable columns={columns} data={dummyElevations} />
    </Container>
  );
};

export default ElevationTable;
