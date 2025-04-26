import React, { useEffect, useState, useMemo } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Grid,
  Card,
  CardContent,
  CircularProgress,
  IconButton,
  Avatar,
  Stack,
  Paper,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import GroupIcon from "@mui/icons-material/Group";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import GroupOffIcon from "@mui/icons-material/GroupOff";
import { useNavigate } from "react-router-dom";

import UserDetailModal from "./CustomerModel";
import DataTable from "../Pagination/TableLayout/TableLayout"; // import your reusable table component
import AdminDashboard from "../../Admin/Dashboard/Dashboard"

const summaryCardsData = [
  { title: "Total Customers", key: "total", icon: <GroupIcon color="primary" /> },
  { title: "Active", key: "active", icon: <GroupAddIcon color="success" /> },
  { title: "Inactive", key: "inactive", icon: <GroupOffIcon color="error" /> },
];

const Customer = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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

  const handleEdit = (userId) => navigate("/a-editpartners", { state: { userId } });

  const handleDelete = (userId) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      setUsers((prev) => prev.filter((u) => u.user_id !== userId));
      alert("User deleted successfully!");
    } catch {
      alert("Failed to delete user.");
    }
  };

  const handleView = (user) => {
    setSelectedUser(user);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedUser(null);
  };

  const totalUsers = users.length;
  const activeUsers = users.filter((u) => u.status === "active").length;
  const inactiveUsers = totalUsers - activeUsers;

  const columns = useMemo(
    () => [
      { Header: "Name", accessor: "name" },
      { Header: "User ID", accessor: "user_id" },
      { Header: "Profession", accessor: "profession" },
      { Header: "Mobile", accessor: "mobile" },
      { Header: "Email", accessor: "email" },
      { Header: "Address", accessor: "address" },
      { Header: "Experience", accessor: "experience" },
      { Header: "Description", accessor: "description" },
      { Header: "Lat", accessor: "lat" },
      { Header: "Long", accessor: "long" },
      {
        Header: "Actions",
        accessor: "actions",
        disableSortBy: true,
        Cell: ({ row }) => (
          <Stack direction="row" spacing={0.5} justifyContent="center">
            <IconButton onClick={() => handleView(row.original)} color="primary">
              <VisibilityIcon />
            </IconButton>
            <IconButton onClick={() => handleEdit(row.original.user_id)} color="info">
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => handleDelete(row.original.user_id)} color="error">
              <DeleteIcon />
            </IconButton>
          </Stack>
        ),
      },
    ],
    []
  );

  return (
    <Container sx={{ pt: 4 }}>
      <AdminDashboard />
      <Typography variant="h4" align="center" gutterBottom>
        Customer Management
      </Typography>


      <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2} mt={1}>
        {summaryCardsData.map((card, index) => (
          <Card
            key={index}
            elevation={3}
            sx={{
              display: "flex",
              alignItems: "center",
              p: 2,
              borderRadius: 3,
              width: {
                xs: "100%",
                sm: "47%",
                md: "30%",
              },
              minWidth: "250px",
              flexGrow: 1,
            }}
          >
            <Avatar sx={{ bgcolor: "white", mr: 2, width: 48, height: 48 }}>
              {card.icon}
            </Avatar>
            <Box>
              <Typography variant="subtitle1">{card.title}</Typography>
              <Typography variant="h5" fontWeight="bold">
                {card.key === "total"
                  ? totalUsers
                  : card.key === "active"
                  ? activeUsers
                  : inactiveUsers}
              </Typography>
            </Box>
          </Card>
        ))}
      </Box>

      <Box mt={4} mb={2} display="flex" justifyContent={isMobile ? "center" : "flex-end"}>
        <TextField
          placeholder="Search by name, ID, etc..."
          variant="outlined"
          size="small"
          sx={{ width: "100%", maxWidth: 300 }}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Box>

      {loading ? (
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : (
        <Paper elevation={2} sx={{ p: 2 }}>
          <DataTable columns={columns} data={users} initialSearchValue={searchTerm} />
        </Paper>
      )}

      <UserDetailModal open={openModal} onClose={handleCloseModal} user={selectedUser} />
    </Container>
  );
};

export default Customer;
