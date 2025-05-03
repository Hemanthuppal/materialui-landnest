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
  TablePagination,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  Table,
} from '@mui/material';
import { Edit, Delete, Visibility } from '@mui/icons-material';
import AdminDashboard from '../../Admin/Dashboard/Dashboard';
import { useTable, usePagination, useGlobalFilter, useSortBy } from 'react-table';
import axios from 'axios';

function GlobalFilter({ globalFilter, setGlobalFilter }) {
  return (
    <Box mb={2} display="flex" justifyContent="flex-start">
      <TextField
        variant="outlined"
        placeholder="Search..."
        size="small"
        value={globalFilter || ''}
        onChange={(e) => setGlobalFilter(e.target.value)}
        sx={{ width: 250 }}
      />
    </Box>
  );
}

const Material = () => {
  const [materials, setMaterials] = useState([]);
  const [categories, setCategories] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentMaterial, setCurrentMaterial] = useState(null);
  const [category, setCategory] = useState('');
  const [materialName, setMaterialName] = useState('');
  const [image, setImage] = useState(null);
  const [imageFileName, setImageFileName] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [imageFile, setImageFile] = useState(null);

  // Function to get category name by ID
  const getCategoryName = (categoryId) => {
    const foundCategory = categories.find(cat => cat.category_id === categoryId);
    return foundCategory ? foundCategory.category : 'N/A';
  };

  useEffect(() => {
    // Fetch categories first
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://46.37.122.105:89/material-categories/');
        setCategories(response.data);
        
        // Then fetch materials after categories are loaded
        fetchMaterials(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    // Fetch materials with category mapping
    const fetchMaterials = async (categories) => {
      try {
        const response = await axios.get('http://46.37.122.105:89/material-content/');
        const fetchedMaterials = response.data.map((item) => ({
          id: item.content_id,
          category: getCategoryName(item.category_id),
          category_id: item.category_id, // Keep the ID for editing
          materialName: item.content,
          image: `http://46.37.122.105:89${item.image}`,
        }));
        setMaterials(fetchedMaterials);
      } catch (error) {
        console.error('Error fetching materials:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleAddClick = () => {
    setOpenDialog(true);
    setIsEditing(false);
    setCategory('');
    setMaterialName('');
    setImage(null);
    setImageFileName('');
    setCurrentMaterial(null);
  };

  const handleSaveMaterial = async () => {
    const formData = new FormData();
    formData.append('user_id', 1);
    formData.append('category_id', category);
    formData.append('content', materialName);
    if (imageFile) {
      formData.append('image', imageFile);
    }

    try {
      if (isEditing && currentMaterial) {
        // Update existing material
        await axios.put(
          `http://46.37.122.105:89/material-content/${currentMaterial.id}/`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );
      } else {
        // Create new material
        await axios.post('http://46.37.122.105:89/material-content/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      }
      
      // Refresh the materials list
      const categoriesResponse = await axios.get('http://46.37.122.105:89/material-categories/');
      const materialsResponse = await axios.get('http://46.37.122.105:89/material-content/');
      
      const updatedMaterials = materialsResponse.data.map((item) => ({
        id: item.content_id,
        category: getCategoryName(item.category_id),
        category_id: item.category_id,
        materialName: item.content,
        image: `http://46.37.122.105:89${item.image}`,
      }));
      
      setCategories(categoriesResponse.data);
      setMaterials(updatedMaterials);
      setOpenDialog(false);
    } catch (error) {
      console.error('Error saving material:', error);
    }
  };

  const handleEditClick = (material) => {
    setOpenDialog(true);
    setIsEditing(true);
    setCategory(material.category_id);
    setMaterialName(material.materialName);
    setImage(material.image);
    setImageFileName(material.image.split('/').pop());
    setCurrentMaterial(material);
  };

  const handleDeleteClick = async (materialId) => {
    if (!window.confirm("Are you sure you want to delete this material?")) return;

    try {
      await axios.delete(`http://46.37.122.105:89/material-content/${materialId}/`);
      setMaterials(prev => prev.filter(mat => mat.id !== materialId));
    } catch (error) {
      console.error("Error deleting material:", error);
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

  const columns = React.useMemo(
    () => [
      {
        Header: 'S.No',
        accessor: (_row, i) => i + 1,
      },
      {
        Header: 'Category',
        accessor: 'category',
      },
      {
        Header: 'Material Name',
        accessor: 'materialName',
      },
      {
        Header: 'Image',
        accessor: 'image',
        Cell: ({ value }) => <img src={value} alt="material" width={50} />,
      },
      {
        Header: 'Actions',
        accessor: 'actions',
        Cell: ({ row }) => (
          <Box>
            <IconButton onClick={() => handleEditClick(row.original)}>
              <Edit />
            </IconButton>
            <IconButton color="error" onClick={() => handleDeleteClick(row.original.id)}>
              <Delete />
            </IconButton>
            <IconButton onClick={() => alert('View clicked')}>
              <Visibility />
            </IconButton>
          </Box>
        ),
      },
    ],
    []
  );
  const filterAllColumns = (rows, id, filterValue) => {
    if (!filterValue) return rows;
  
    const lowerFilter = filterValue.toLowerCase();
  
    return rows.filter((row) =>
      Object.values(row.original || {}).some((value) =>
        String(value).toLowerCase().includes(lowerFilter)
      )
    );
  };
  

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    setGlobalFilter,
    setPageSize,
    gotoPage,
    state: { globalFilter, pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data: materials,
      globalFilter: filterAllColumns,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  return (
    <>
      <AdminDashboard />
      <Box
        sx={{
          minHeight: '100vh',
          px: { xs: 2, md: 4 },
          py: { xs: 2, md: 4 },
          mt: '40px',
          maxWidth: 1100,
          mx: 'auto',
        }}
      >
        <Box mb={2} display="flex" justifyContent="space-between" alignItems="center">
          <h3 style={{ margin: 0 }}>Add Materials</h3>
          <Button variant="contained" color="primary" size="small" onClick={handleAddClick}>
            Add
          </Button>
        </Box>

        <GlobalFilter globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />

        <Box sx={{ overflowX: 'auto' }}>
          <Table {...getTableProps()}>
            <TableHead>
              {headerGroups.map((headerGroup) => (
                <TableRow {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <TableCell
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      sx={{
                        fontWeight: 'bold',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        maxWidth: 200,
                        backgroundColor: '#1976d2',
                        color: 'white',
                      }}
                    >
                      {column.render('Header')}
                      <span>
                        {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                      </span>
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableHead>
            <TableBody {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);
                return (
                  <TableRow {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <TableCell {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>
                    ))}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>

          <TablePagination
            component="div"
            count={materials.length}
            page={pageIndex}
            onPageChange={(e, newPage) => gotoPage(newPage)}
            rowsPerPage={pageSize}
            onRowsPerPageChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
            rowsPerPageOptions={[5, 10, 20]}
          />
        </Box>

        <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
          <DialogTitle>{isEditing ? 'Edit Material' : 'Add Material'}</DialogTitle>
          <DialogContent>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Category</InputLabel>
              <Select 
                value={category} 
                onChange={(e) => setCategory(e.target.value)} 
                label="Category"
              >
                {categories.map((cat) => (
                  <MenuItem key={cat.category_id} value={cat.category_id}>
                    {cat.category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label="Material Name"
              variant="outlined"
              fullWidth
              value={materialName}
              onChange={(e) => setMaterialName(e.target.value)}
              sx={{ mb: 2 }}
            />
            <Box sx={{ mb: 2 }}>
              {image && (
                <img 
                  src={image} 
                  alt="Preview" 
                  style={{ maxWidth: '100%', maxHeight: '200px', marginBottom: '10px' }} 
                />
              )}
              <Button variant="outlined" component="label">
                Upload Image
                <input type="file" hidden accept="image/*" onChange={handleFileUpload} />
              </Button>
              {imageFileName && <Box sx={{ mt: 1 }}>{imageFileName}</Box>}
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleSaveMaterial} variant="contained" color="primary">
              {isEditing ? 'Update' : 'Save'}
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </>
  );
};

export default Material;