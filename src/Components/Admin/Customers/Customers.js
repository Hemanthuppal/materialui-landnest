import React, { useEffect, useState, useMemo } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  IconButton,
  CircularProgress,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DataTable from "../Pagination/TableLayout/TableLayout";
import UserDetailModal from "./CustomerModel";
import { useNavigate } from "react-router-dom";
import AdminDashboard from "../../Admin/Dashboard/Dashboard";

const Customer = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const dummyUsers = [
      {
        user_id: "U001",
        name: "John Doe",
        profession: "Electrician",
        mobile: "1234567890",
        email: "john@example.com",
        address: "123 Main St",
        experience: "5 years",
        description: "Expert in residential wiring.",
        lat: "37.7749",
        long: "-122.4194",
        status: "active",
      },
      {
        user_id: "U002",
        name: "Jane Smith",
        profession: "Plumber",
        mobile: "0987654321",
        email: "jane@example.com",
        address: "456 Elm St",
        experience: "3 years",
        description: "Specializes in kitchen and bathroom installations.",
        lat: "34.0522",
        long: "-118.2437",
        status: "inactive",
      },
      {
        user_id: "U003",
        name: "Alex Johnson",
        profession: "Carpenter",
        mobile: "9876543210",
        email: "alex@example.com",
        address: "789 Oak St",
        experience: "7 years",
        description: "Custom furniture and home interiors.",
        lat: "40.7128",
        long: "-74.0060",
        status: "active",
      },
    ];
    setUsers(dummyUsers);
    setLoading(false);
  }, []);

  const handleView = (user) => {
    setSelectedUser(user);
    setOpenModal(true);
  };

  const handleEdit = (userId) => {
    navigate("/a-editpartners", { state: { userId } });
  };

  const handleDelete = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers((prev) => prev.filter((u) => u.user_id !== userId));
    }
  };

  const handleAddCustomer = () => {
    navigate("/a-addpartners"); // Assuming this is the add customer page
  };

  const columns = useMemo(() => [
    { Header: "Name", accessor: "name" },
    { Header: "User ID", accessor: "user_id" },
    { Header: "Profession", accessor: "profession" },
    { Header: "Mobile", accessor: "mobile" },
    { Header: "Email", accessor: "email" },
    { Header: "Address", accessor: "address" },
    { Header: "Experience", accessor: "experience" },
    {
      Header: "Actions",
      accessor: "actions",
      disableSortBy: true,
      Cell: ({ row }) => (
        <>
          <IconButton color="primary" onClick={() => handleView(row.original)}>
            <VisibilityIcon />
          </IconButton>
          {/* <IconButton color="info" onClick={() => handleEdit(row.original.user_id)}>
            <EditIcon />
          </IconButton> */}
          <IconButton color="error" onClick={() => handleDelete(row.original.user_id)}>
            <DeleteIcon />
          </IconButton>
        </>
      ),
    },
  ], []);

  return (
    <Container sx={{ mt: 10 }}>
      <>
      <AdminDashboard />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          mb: 2,
        }}
      >
        <Typography variant="h5">Customers</Typography>

        {/* <Button variant="contained" color="primary" onClick={handleAddCustomer}>
          Add Customer
        </Button> */}
      </Box>

      {loading ? (
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      ) : (
        <DataTable columns={columns} data={users} initialSearchValue={searchTerm} />
      )}

      <UserDetailModal open={openModal} onClose={() => setOpenModal(false)} user={selectedUser} />
      </>
    </Container>
  );
};

export default Customer;
