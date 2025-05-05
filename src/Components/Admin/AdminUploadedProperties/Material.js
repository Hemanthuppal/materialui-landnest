import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
  Typography,
  Container,
  TableContainer,
  TablePagination,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  Table,
  Paper,
  Stack,
  CircularProgress
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import axios from 'axios';
import { BASE_URL } from '../../../Api/ApiUrls';

const Material = () => {
  const [materials, setMaterials] = useState([]);
  const [categories, setCategories] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentMaterial, setCurrentMaterial] = useState(null);
  const [category, setCategory] = useState('');
  const [materialName, setMaterialName] = useState('');
  const [image, setImage] = useState(null);
  const [imageFileName, setImageFileName] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const API_URL = `${BASE_URL}`;

  const getCategoryName = (categoryId) => {
    const found = categories.find(cat => cat.category_id === categoryId);
    return found ? found.category : 'N/A';
  };

  const fetchAll = async () => {
    try {
      setLoading(true);
      const [catRes, matRes] = await Promise.all([
        axios.get(`${API_URL}/material-categories/`),
        axios.get(`${API_URL}/material-content/`)
      ]);

      const fetchedCategories = catRes.data;
      setCategories(fetchedCategories);

      const formattedMaterials = matRes.data.map((item) => ({
        id: item.content_id,
        category: fetchedCategories.find(cat => cat.category_id === item.category_id)?.category || 'N/A',
        category_id: item.category_id,
        materialName: item.content,
        image: `${API_URL}${item.image}`,
      }));
      setMaterials(formattedMaterials);
    } catch (err) {
      console.error('Error fetching materials:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  const handleAddClick = () => {
    setCurrentMaterial(null);
    setCategory('');
    setMaterialName('');
    setImage(null);
    setImageFile(null);
    setImageFileName('');
    setOpenDialog(true);
  };

  const handleEditClick = (material) => {
    setCurrentMaterial(material);
    setCategory(material.category_id);
    setMaterialName(material.materialName);
    setImage(material.image);
    setImageFileName(material.image.split('/').pop());
    setOpenDialog(true);
  };

  const handleDeleteClick = async (id) => {
    if (window.confirm("Are you sure you want to delete this material?")) {
      try {
        await axios.delete(`${API_URL}/material-content/${id}/`);
        setMaterials(prev => prev.filter(mat => mat.id !== id));
      } catch (err) {
        console.error("Delete error:", err);
      }
    }
  };

  const handleSave = async () => {
    const formData = new FormData();
    formData.append('user_id', 1);
    formData.append('category_id', category);
    formData.append('content', materialName);
    if (imageFile) formData.append('image', imageFile);

    try {
      if (currentMaterial) {
        await axios.put(`${API_URL}/material-content/${currentMaterial.id}/`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      } else {
        await axios.post(`${API_URL}/material-content/`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      }
      setOpenDialog(false);
      fetchAll(); // Refetch materials
    } catch (err) {
      console.error("Save error:", err);
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImageFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const filteredMaterials = materials.filter((mat) =>
    mat.materialName.toLowerCase().includes(search.toLowerCase())
  );

  const handleChangePage = (_, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container sx={{ mt: 2 }}>
      <Box sx={{ p: 2, borderRadius: 2, boxShadow: 3, backgroundColor: '#fff' }}>
        <Typography variant="h4" sx={{ mb: 2, textAlign: 'center', color: 'primary.main' }}>
          Material List
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <TextField
            label="Search Material"
            variant="outlined"
            size="small"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ width: 300 }}
          />
          <Button variant="contained" onClick={handleAddClick}>
            Add Material
          </Button>
        </Box>

        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ backgroundColor: '#1976d2' }}>
              <TableRow>
                {['S.No', 'Category', 'Material Name', 'Image', 'Actions'].map((head) => (
                  <TableCell key={head} sx={{ color: 'white', textAlign: 'center' }}>
                    <strong>{head}</strong>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredMaterials.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((mat, index) => (
                  <TableRow key={mat.id}>
                    <TableCell sx={{ textAlign: 'center' }}>{page * rowsPerPage + index + 1}</TableCell>
                    <TableCell sx={{ textAlign: 'center' }}>{mat.category}</TableCell>
                    <TableCell sx={{ textAlign: 'center' }}>{mat.materialName}</TableCell>
                    <TableCell sx={{ textAlign: 'center' }}>
                      <img src={mat.image} alt={mat.materialName} style={{ width: 60, height: 50, objectFit: 'contain' }} />
                    </TableCell>
                    <TableCell sx={{ textAlign: 'center' }}>
                      <Stack direction="row" justifyContent="center" spacing={1}>
                        <IconButton onClick={() => handleEditClick(mat)} color="primary">
                          <Edit />
                        </IconButton>
                        <IconButton onClick={() => handleDeleteClick(mat.id)} color="error">
                          <Delete />
                        </IconButton>
                      </Stack>
                    </TableCell>
                  </TableRow>
              ))}
            </TableBody>
          </Table>

          <TablePagination
            component="div"
            count={filteredMaterials.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            rowsPerPageOptions={[5, 10, 20]}
          />
        </TableContainer>
      </Box>

      {/* Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>
          {currentMaterial ? "Edit Material" : "Add Material"}
        </DialogTitle>
        <DialogContent dividers>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Category</InputLabel>
            <Select value={category} onChange={(e) => setCategory(e.target.value)} label="Category">
              {categories.map((cat) => (
                <MenuItem key={cat.category_id} value={cat.category_id}>
                  {cat.category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="Material Name"
            fullWidth
            variant="outlined"
            value={materialName}
            onChange={(e) => setMaterialName(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Box sx={{ mb: 2 }}>
            {image && <img src={image} alt="preview" style={{ width: '100%', maxHeight: 200, marginBottom: 8 }} />}
            <Button variant="outlined" component="label">
              Upload Image
              <input type="file" hidden accept="image/*" onChange={handleFileUpload} />
            </Button>
            {imageFileName && <Typography variant="caption">{imageFileName}</Typography>}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="secondary">Cancel</Button>
          <Button onClick={handleSave} variant="contained" color="primary">
            {currentMaterial ? 'Update' : 'Save'}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Material;
