import React, { useState, useEffect } from "react";
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
  Container,
  TablePagination,
  Dialog,
  DialogTitle,
  DialogContent
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { toast } from "react-toastify";
import ElevationForm from "./ElevationForm";
import { BASE_URL } from "../../../Api/ApiUrls"; // adjust path as needed

const API_BASE_URL = `${BASE_URL}`;
const IMAGE_BASE_URL = `${API_BASE_URL}/construction-content`;

const ElevationPlanTable = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentPlan, setCurrentPlan] = useState(null);

  const fetchPlans = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${IMAGE_BASE_URL}/`);
      const twoDPlans = response.data.filter(plan => plan.category_id == 3);
      setPlans(twoDPlans);
    } catch (error) {
      console.error("Error fetching plans:", error);
      toast.error("Failed to fetch plans. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this plan?")) {
      try {
        await axios.delete(`${IMAGE_BASE_URL}/${id}/`);
        toast.success("Plan deleted successfully");
        fetchPlans();
      } catch (error) {
        console.error("Error deleting plan:", error);
        toast.error("Failed to delete plan. Please try again.");
      }
    }
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredPlans = plans.filter(plan =>
    plan.content?.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container sx={{ mt: 2 }}>
      <Box sx={{ maxWidth: 1300, mx: 'auto', p: 1, borderRadius: 2, boxShadow: 3, backgroundColor: '#fff' }}>
        <Typography variant="h4" sx={{ textAlign: 'center', color: 'primary.main', mb: 2 }}>
          Elevations Plans Table
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <TextField
            label="Search by Plan Name"
            variant="outlined"
            value={search}
            onChange={handleSearchChange}
            placeholder="Type plan name..."
            size="small"
            sx={{ width: 300 }}
          />
          <Button 
            variant="contained" 
            color="primary" 
            onClick={() => {
              setCurrentPlan(null);
              setModalOpen(true);
            }}
          >
            <AddIcon sx={{ mr: 1 }} /> Add Elevation Plan
          </Button>
        </Box>

        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ backgroundColor: '#1976d2' }}>
              <TableRow>
                {['S.No', 'Name', 'Image', 'Upload Date', 'Actions'].map((head) => (
                  <TableCell key={head} sx={{ color: 'white', textAlign: 'center', fontSize: 16 }}>
                    <strong>{head}</strong>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {filteredPlans
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((plan, index) => (
                  <TableRow key={plan.content_id}>
                    <TableCell sx={{ textAlign: 'center' }}>{page * rowsPerPage + index + 1}</TableCell>
                    <TableCell sx={{ textAlign: 'center' }}>{plan.content}</TableCell>
                    <TableCell sx={{ textAlign: 'center' }}>
                      {plan.image ? (
                        <img
                          src={`${API_BASE_URL}${plan.image}`}
                          alt={plan.content}
                          style={{
                            width: '80px',
                            height: '60px',
                            objectFit: 'contain',
                            display: 'block',
                            margin: '0 auto',
                          }}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = `${API_BASE_URL}/media/default.jpg`; // fallback image
                          }}
                        />
                      ) : (
                        "No Image"
                      )}
                    </TableCell>
                    <TableCell sx={{ textAlign: 'center' }}>
                      {new Date(plan.created_at).toLocaleDateString()}
                    </TableCell>
                    <TableCell sx={{ textAlign: 'center' }}>
                      <Stack direction="row" spacing={1} justifyContent="center">
                        <IconButton
                          color="primary"
                          onClick={() => {
                            setCurrentPlan(plan);
                            setModalOpen(true);
                          }}
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton 
                          color="error" 
                          onClick={() => handleDelete(plan.content_id)}
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
            count={filteredPlans.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            rowsPerPageOptions={[5, 10, 15]}
          />
        </TableContainer>
      </Box>

      {/* Modal for Add/Edit */}
      <Dialog open={modalOpen} onClose={() => setModalOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>
          <Typography variant="h6">
            {currentPlan ? "Edit Elevation Plan" : "Add Elevation Plan"}
          </Typography>
          <IconButton
            aria-label="close"
            onClick={() => setModalOpen(false)}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <ElevationForm 
            editPlan={currentPlan} 
            onCancel={() => setModalOpen(false)}
            fetchPlans={fetchPlans}
          />
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default ElevationPlanTable;
