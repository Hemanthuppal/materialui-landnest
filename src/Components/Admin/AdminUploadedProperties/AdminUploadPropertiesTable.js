import React from "react";
import {
  Container,
  Typography,
  IconButton,
  Box,
  Button
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DataTable from "../Pagination/TableLayout/TableLayout"; // adjust path if needed
import { useNavigate } from 'react-router-dom';

// Dummy data for testing
const dummyProperties = [
  {
    id: 1,
    site_area: "1200 sqft",
    facing: "East",
    price: "45L",
    no_of_flores: "2",
    buildup_area: "2200 sqft",
    parking: "Available",
  },
  {
    id: 2,
    site_area: "800 sqft",
    facing: "North",
    price: "30L",
    no_of_flores: "1",
    buildup_area: "1500 sqft",
    parking: "Not Available",
  },
];

const AdminUploadPropertiesTable = () => {

    const navigate = useNavigate();

  const handleEdit = (id) => {
    console.log("Edit property with ID:", id);
  };

  const handleDelete = (id) => {
    console.log("Delete property with ID:", id);
  };

  const columns = [
    {
      Header: "S.No",
      accessor: (row, i) => i + 1,
      id: "serialNo",
      disableSortBy: true,
    },
    { Header: "Site Area", accessor: "site_area" },
    { Header: "Facing", accessor: "facing" },
    { Header: "Price", accessor: "price" },
    { Header: "Floors", accessor: "no_of_flores" },
    { Header: "Buildup Area", accessor: "buildup_area" },
    { Header: "Parking", accessor: "parking" },
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
      <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                mb: 2,
              }}
            >
              <Typography variant="h5">Upload Properties</Typography>
      
              <Button variant="contained" color="primary" onClick={() => navigate('/adminuploadpropertiesform')}>
                Add Upload 
              </Button>
            </Box>
      
      <DataTable columns={columns} data={dummyProperties} />
    </Container>
  );
};

export default AdminUploadPropertiesTable;
