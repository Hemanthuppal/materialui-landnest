import React, { useState } from 'react';
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
import {
  useTable,
  usePagination,
  useGlobalFilter,
  useSortBy,
} from 'react-table';

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
  const [openDialog, setOpenDialog] = useState(false);
  const [currentMaterial, setCurrentMaterial] = useState(null);
  const [category, setCategory] = useState('');
  const [materialName, setMaterialName] = useState('');
  const [image, setImage] = useState(null);
  const [imageFileName, setImageFileName] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleAddClick = () => {
    setOpenDialog(true);
    setIsEditing(false);
    setCategory('');
    setMaterialName('');
    setImage(null);
    setImageFileName('');
  };

  const handleEditClick = (material) => {
    setOpenDialog(true);
    setIsEditing(true);
    setCategory(material.category);
    setMaterialName(material.materialName);
    setImage(material.image);
    setImageFileName(material.imageFileName);
    setCurrentMaterial(material);
  };

  const handleSaveMaterial = () => {
    if (isEditing) {
      const updatedMaterials = materials.map((material) =>
        material.id === currentMaterial.id
          ? { ...material, category, materialName, image, imageFileName }
          : material
      );
      setMaterials(updatedMaterials);
    } else {
      const newMaterial = {
        id: Date.now(),
        category,
        materialName,
        image,
        imageFileName,
      };
      setMaterials([...materials, newMaterial]);
    }
    setOpenDialog(false);
  };

  const handleDeleteClick = (id) => {
    setMaterials(materials.filter((material) => material.id !== id));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
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
    [materials]
  );

  const filterAllColumns = (rows, id, filterValue) => {
    if (!filterValue) return rows;
    const lowerFilter = filterValue.toLowerCase();
    return rows.filter((row) =>
      Object.values(row.original).some(
        (value) => value && value.toString().toLowerCase().includes(lowerFilter)
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

          {/* TablePagination */}
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

        {/* Add/Edit Dialog */}
        <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
          <DialogTitle>{isEditing ? 'Edit Material' : 'Add Material'}</DialogTitle>
          <DialogContent>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Category</InputLabel>
              <Select value={category} onChange={(e) => setCategory(e.target.value)} label="Category">
                <MenuItem value="Category 1">Category 1</MenuItem>
                <MenuItem value="Category 2">Category 2</MenuItem>
                <MenuItem value="Category 3">Category 3</MenuItem>
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
            <TextField
              label="Upload Image"
              variant="outlined"
              fullWidth
              value={imageFileName}
              InputProps={{
                endAdornment: (
                  <Button variant="outlined" component="label">
                    Upload
                    <input type="file" hidden accept="image/*" onChange={handleFileUpload} />
                  </Button>
                ),
              }}
              sx={{ mb: 2 }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleSaveMaterial} color="primary">
              {isEditing ? 'Update' : 'Save'}
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </>
  );
};

export default Material;
