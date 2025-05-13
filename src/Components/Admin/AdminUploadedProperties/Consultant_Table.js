import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Paper,
  Button,
  TextField,
  IconButton,
  TableFooter,
  TablePagination,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import AdminDashboard from '../../Admin/Dashboard/Dashboard';

const Consultant_Table = () => {
  const allConsultants = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210' },
    { id: 3, name: 'David Johnson', email: 'david@example.com', phone: '555-123-4567' },
    { id: 4, name: 'Emily Brown', email: 'emily@example.com', phone: '444-222-1111' },
    { id: 5, name: 'Michael Scott', email: 'michael@dundermifflin.com', phone: '777-888-9999' },
  ];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedConsultants = allConsultants.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <>
      <AdminDashboard />
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: '#f5f5f5',
          px: { xs: 2, md: 4 },
          py: { xs: 2, md: 4 },
        }}
      >
        <Card sx={{ borderRadius: 2, p: 2, maxWidth: '85%', mx: 'auto' }}>
          <CardContent>
            <Typography
              variant="h5"
              sx={{ textAlign: 'center', fontWeight: 'bold', color: '#1976d2', mb: 2 }}
            >
              Consultant Table
            </Typography>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mb: 2,
                flexWrap: 'wrap',
                gap: 1,
              }}
            >
              <TextField
                size="small"
                placeholder="Search by Name"
                sx={{ width: '300px', backgroundColor: 'white' }}
              />
              <Button variant="contained" startIcon={<AddIcon />}>
                Add Consultant
              </Button>
            </Box>

            <TableContainer component={Paper}>
              <Table>
                <TableHead sx={{ backgroundColor: '#1976d2' }}>
                  <TableRow>
                    <TableCell sx={{ color: 'white' }}>S.No</TableCell>
                    <TableCell sx={{ color: 'white' }}>Name</TableCell>
                    <TableCell sx={{ color: 'white' }}>Email ID</TableCell>
                    <TableCell sx={{ color: 'white' }}>Phone</TableCell>
                    <TableCell sx={{ color: 'white' }}>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paginatedConsultants.map((consultant, index) => (
                    <TableRow key={consultant.id}>
                      <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                      <TableCell>{consultant.name}</TableCell>
                      <TableCell>{consultant.email}</TableCell>
                      <TableCell>{consultant.phone}</TableCell>
                      <TableCell>
                        <IconButton color="primary">
                          <EditIcon />
                        </IconButton>
                        <IconButton color="error">
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>

                {/* Pagination Footer */}
                <TableFooter>
                  <TableRow>
                    <TablePagination
                      rowsPerPageOptions={[5, 10, 25]}
                      count={allConsultants.length}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      onPageChange={handleChangePage}
                      onRowsPerPageChange={handleChangeRowsPerPage}
                      labelRowsPerPage="Rows per page:"
                    />
                  </TableRow>
                </TableFooter>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default Consultant_Table;
