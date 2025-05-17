import React, { useState, useEffect } from 'react';
import {
  Typography,
  Box,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Paper,
  Stack,
  TextField,
  IconButton,
  CircularProgress,
  Container
} from '@mui/material';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import TablePagination from '@mui/material/TablePagination';
import axios from 'axios';
import AdminDashboard from '../../Admin/Dashboard/Dashboard';
import UserDetailModal from "./CustomerModel";

import { BASE_URL } from '../../../Api/ApiUrls'; // adjust path as needed
const Customer = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selectedUser, setSelectedUser] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/users/`);
        const transformedUsers = res.data.map((user) => ({
          id: user.user_id,
          name: `${user.first_name} ${user.last_name}`,
          profession: "N/A",
          mobile: user.mobile_no,
          email: user.email,
          address: `${user.city}, ${user.state}`,
          experience: "N/A",
          status: "active",
        }));
        setUsers(transformedUsers);
      } catch (err) {
        console.error("Failed to fetch users:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleView = (user) => {
    setSelectedUser(user);
    setOpenModal(true);
  };

  const handleDelete = async (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`${BASE_URL}/users/${userId}/`);
        setUsers((prev) => prev.filter((u) => u.id !== userId));
        alert("User deleted successfully");
      } catch (error) {
        console.error("Failed to delete user:", error);
        alert("Failed to delete user");
      }
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.mobile.includes(search) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container sx={{ mt: 10 }}>
      <AdminDashboard />
      
      <Box sx={{ maxWidth: 1300, mx: 'auto', p: 1, borderRadius: 2, boxShadow: 3, backgroundColor: '#fff' }}>
        <Typography variant="h4" sx={{ textAlign: 'center', color: 'primary.main', mb: 2 }}>
          Customers Table
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <TextField
            id="search"
            label="Search by Name / Mobile / Email"
            variant="outlined"
            value={search}
            onChange={handleSearchChange}
            placeholder="Type name, mobile number, or email..."
            size="small"
            sx={{ width: 300 }}
          />
          {/* <Button variant="contained" component={Link} to="/add-customer">
            <AddIcon sx={{ mr: 1 }} /> Add New Customer
          </Button> */}
        </Box>

        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ backgroundColor: '#1976d2' }}>
              <TableRow>
                {['ID', 'Name', 'Mobile', 'Email', 'Address',  'Status', 'Actions'].map((head) => (
                  <TableCell key={head} sx={{ color: 'white', textAlign: 'center', fontSize: 16 }}>
                    <strong>{head}</strong>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {filteredUsers
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((user, index) => (
                  <TableRow key={user.id}>
                    <TableCell sx={{ textAlign: 'center' }}>{page * rowsPerPage + index + 1}</TableCell>
                    <TableCell sx={{ textAlign: 'center' }}>{user.name}</TableCell>
                   
                    <TableCell sx={{ textAlign: 'center' }}>{user.mobile}</TableCell>
                    <TableCell sx={{ textAlign: 'center' }}>{user.email}</TableCell>
                    <TableCell sx={{ textAlign: 'center' }}>{user.address}</TableCell>
                    
                    <TableCell sx={{ textAlign: 'center' }}>{user.status}</TableCell>
                    <TableCell sx={{ textAlign: 'center' }}>
                      <Stack direction="row" spacing={1} justifyContent="center">
                        <IconButton 
                          color="info" 
                          size="small"
                          onClick={() => handleView(user)}
                        >
                          <VisibilityIcon />
                        </IconButton>
                        <IconButton 
                          color="error" 
                          size="small" 
                          onClick={() => handleDelete(user.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>

          <TablePagination
            component="div"
            count={filteredUsers.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            rowsPerPageOptions={[5, 10, 15]}
          />
        </TableContainer>

        <UserDetailModal
          open={openModal}
          onClose={() => setOpenModal(false)}
          user={selectedUser}
        />
      </Box>
    </Container>
  );
};

export default Customer;