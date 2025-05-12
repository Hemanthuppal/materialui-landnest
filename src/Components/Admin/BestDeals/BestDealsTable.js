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
  Checkbox,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../../../Api/ApiUrls";
import ViewModal from "./ViewModal";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Carousel from 'react-material-ui-carousel';
import { styled } from '@mui/material/styles';

const StyledCarousel = styled(Carousel)({
  width: '200px',
  height: '150px',
  borderRadius: '8px',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
 
});

const BestPlanTable = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [modalOpen, setModalOpen] = useState(false);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [currentProperty, setCurrentProperty] = useState(null);
  const [selectedProperties, setSelectedProperties] = useState([]);
  const [changeMobileDialogOpen, setChangeMobileDialogOpen] = useState(false);
  const [newMobile, setNewMobile] = useState('');

   const getImageUrl = (imagePath) => {
    return `${BASE_URL}${imagePath}`;
  };

  const fetchProperties = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${BASE_URL}/property/`);
      // Filter properties where type is "best-deal"
      const bestdealProperties = response.data.filter(property => property.type === "best-deal");
      setProperties(bestdealProperties);
    } catch (error) {
      console.error("Error fetching properties:", error);
      toast.error("Failed to fetch properties. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  const handleDelete = async (property_id) => {
    if (window.confirm("Are you sure you want to delete this property?")) {
      try {
        await axios.delete(`${BASE_URL}/property/${property_id}/`);
        toast.success("Property deleted successfully");
        fetchProperties();
      } catch (error) {
        console.error("Error deleting property:", error);
        toast.error("Failed to delete property. Please try again.");
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

  const handleViewClick = (property) => {
    setCurrentProperty(property);
    setViewModalOpen(true);
  };

  const handleStatusChange = async (propertyId, newStatus) => {
    const previousStatus = properties.find(prop => prop.property_id === propertyId)?.status;
    const adminMobile = properties.find(prop => prop.property_id === propertyId)?.admin_mobile;
  
    console.log("Previous status:", previousStatus);
  
    const payload = [
      {
        property_id: propertyId,
        admin_mobile: adminMobile,
        Admin_status: newStatus
      }
    ];
  
    try {
      const response = await axios.put(`${BASE_URL}/properties-update/`, payload);
  
      console.log("API response:", response.data);
      console.log("Payload sent to backend:", payload);
  
      setProperties(prev =>
        prev.map(prop =>
          prop.property_id === propertyId ? { ...prop, status: newStatus } : prop
        )
      );
  
      toast.success("Status updated successfully");
      fetchProperties();
    } catch (error) {
      console.error("Error updating status:", error);
      toast.error("Failed to update status");
  
      setProperties(prev =>
        prev.map(prop =>
          prop.property_id === propertyId ? { ...prop, status: previousStatus } : prop
        )
      );
    }
  };
  
  

  const handleSelectProperty = (propertyId) => {
    setSelectedProperties(prev => 
      prev.includes(propertyId) 
        ? prev.filter(id => id !== propertyId) 
        : [...prev, propertyId]
    );
  };

  const handleOpenChangeMobileDialog = () => {
    setChangeMobileDialogOpen(true);
    setNewMobile('');
  };

  const handleCloseChangeMobileDialog = () => {
    setChangeMobileDialogOpen(false);
  };

  const handleMobileChangeSubmit = async () => {
    if (!newMobile) {
      toast.error("Please enter a mobile number");
      return;
    }
  
    // Construct the payload with full property info for each selected property
    const payload = selectedProperties.map(propertyId => {
      const property = properties.find(p => p.property_id === propertyId);
      return {
        property_id: propertyId,
        admin_mobile: newMobile,
        Admin_status: property?.Admin_status || "Pending"  // Default if missing
      };
    });
  
    try {
      // Send full payload in a single request
      const response = await axios.put(`${BASE_URL}/properties-update/`, payload);
  
      console.log("Payload sent to backend:", payload);
      console.log("API response:", response.data);
  
      toast.success("Mobile numbers updated successfully");
      fetchProperties(); // Refresh data
      setSelectedProperties([]); // Clear selection
      setChangeMobileDialogOpen(false);
    } catch (error) {
      console.error("Error updating mobile numbers:", error);
      toast.error("Failed to update mobile numbers");
    }
  };
  

  const filteredProperties = properties.filter(property => {
    const searchTerm = search.toLowerCase();
    
    // Convert all numeric fields to strings for searching
    const priceString = property.price?.toString() || '';
    const areaString = property.site_area?.toString() || '';
    
    return (
      property.property_name?.toLowerCase().includes(searchTerm) ||
      property.posted_by?.toLowerCase().includes(searchTerm) ||
      priceString.includes(searchTerm) ||
      areaString.includes(searchTerm)
    );
  });

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container sx={{ mt: 2 }}>
      <Box sx={{  mx: 'auto', p: 1, borderRadius: 2, boxShadow: 3, backgroundColor: '#fff',    width: "128%",
    marginLeft: "-14%" }}>
        <Typography variant="h4" sx={{ textAlign: 'center', color: 'primary.main', mb: 2 }}>
          Best Deal Properties
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <TextField
            label="Search Properties"
            variant="outlined"
            value={search}
            onChange={handleSearchChange}
            placeholder="Search by name or location..."
            size="small"
            sx={{ width: 300 }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleOpenChangeMobileDialog}
            disabled={selectedProperties.length === 0}
          >
            Change Mobile
          </Button>
        </Box>

        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ backgroundColor: '#1976d2' }}>
              <TableRow>
                <TableCell sx={{ color: 'white', textAlign: 'center', fontSize: 16 }}>
                  <strong>Select</strong>
                </TableCell>
                {['S.No', 'Name', 'images','User Mobile', 'Admin Mobile', 'Posted By', 'Facing', 'Site Area', 'Price', 'Location', 'Status', 'Actions'].map((head) => (
                  <TableCell key={head} sx={{ color: 'white', textAlign: 'center', fontSize: 16 }}>
                    <strong>{head}</strong>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
<TableBody>
        {filteredProperties
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((property, index) => (
            <TableRow key={property.property_id}>
              <TableCell sx={{ textAlign: 'center' }}>
                <Checkbox
                  checked={selectedProperties.includes(property.property_id)}
                  onChange={() => handleSelectProperty(property.property_id)}
                />
              </TableCell>
              <TableCell sx={{ textAlign: 'center' }}>{page * rowsPerPage + index + 1}</TableCell>
              <TableCell sx={{ textAlign: 'center' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Typography>{property.property_name}</Typography>
                 
                </Box>
              </TableCell>
              <TableCell sx={{ textAlign: 'center' }}> 
                {property.property_images && property.property_images.length > 0 && (
                    <StyledCarousel
                      autoPlay={true}
                      animation="slide"
                      navButtonsAlwaysVisible ={false}
                      indicators={property.property_images.length > 1}
                      sx={{ mt: 1 }}
                    >
                      {property.property_images.map((imageObj, imgIndex) => (
                        <img
                          key={imageObj.id}
                          src={getImageUrl(imageObj.image)}
                          alt={`${property.property_name} ${imgIndex + 1}`}
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/150'; // Fallback image
                          }}
                        />
                      ))}
                    </StyledCarousel>
                  )}
                  </TableCell>
              <TableCell sx={{ textAlign: 'center' }}>{property.mobile_no}</TableCell>
              <TableCell sx={{ textAlign: 'center' }}>{property.admin_mobile}</TableCell>
              <TableCell sx={{ textAlign: 'center' }}>{property.posted_by}</TableCell>
              <TableCell sx={{ textAlign: 'center' }}>{property.facing}</TableCell>
              <TableCell sx={{ textAlign: 'center' }}>{property.site_area}</TableCell>
              <TableCell sx={{ textAlign: 'center' }}>{property.price}</TableCell>
              <TableCell sx={{ textAlign: 'center' }}>{property.location}</TableCell>
              
              <TableCell sx={{ textAlign: 'center' }}>
                <Select
                  value={property.Admin_status || 'Pending'}
                  onChange={(e) => handleStatusChange(property.property_id, e.target.value)}
                  sx={{ minWidth: 120 }}
                >
                  <MenuItem value="Pending">Pending</MenuItem>
                  <MenuItem value="Approved">Approved</MenuItem>
                </Select>
              </TableCell>
              
              <TableCell sx={{ textAlign: 'center' }}>
                <Stack direction="row" spacing={1} justifyContent="center">
                  <IconButton color="info" onClick={() => handleViewClick(property)}>
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton color="primary" onClick={() => {
                    setCurrentProperty(property);
                    setModalOpen(true);
                  }}>
                    <EditIcon />
                  </IconButton>
                  <IconButton color="error" onClick={() => handleDelete(property.property_id)}>
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
            count={filteredProperties.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            rowsPerPageOptions={[5, 10, 15]}
          />
        </TableContainer>
      </Box>

      {/* View Modal */}
      <ViewModal 
        open={viewModalOpen} 
        onClose={() => setViewModalOpen(false)} 
        property={currentProperty} 
      />

      {/* Change Mobile Dialog */}
      <Dialog open={changeMobileDialogOpen} onClose={handleCloseChangeMobileDialog}>
        <DialogTitle>Change Mobile Number</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="New Mobile Number"
            type="text"
            fullWidth
            variant="outlined"
            value={newMobile}
            onChange={(e) => setNewMobile(e.target.value)}
          />
          <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
            This will update the admin_mobile field for {selectedProperties.length} selected properties.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseChangeMobileDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleMobileChangeSubmit} color="primary" variant="contained">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default BestPlanTable;