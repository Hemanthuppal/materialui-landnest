import React, { useState, useEffect } from 'react';
import {
  Box, Button, Container, Dialog, DialogContent, DialogTitle,
  IconButton, InputAdornment, Paper, Stack, Table, TableBody,
  TableCell, TableContainer, TableHead, TablePagination, TableRow,
  TextField, Typography
} from '@mui/material';
import { Add, Edit, Delete, Close } from '@mui/icons-material';
import { useTable, usePagination, useGlobalFilter, useSortBy } from 'react-table';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import AdminDashboard from "../Dashboard/Dashboard";

// Global Filter Component
function GlobalFilter({ globalFilter, setGlobalFilter }) {
  return (
    <Box mb={2}>
      <TextField
        label="Search Categories"
        variant="outlined"
        size="small"
        fullWidth
        value={globalFilter || ''}
        onChange={(e) => setGlobalFilter(e.target.value)}
      />
    </Box>
  );
}

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const [editing, setEditing] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const columns = React.useMemo(() => [
    {
      Header: 'S.No',
      accessor: (_, index) => index + 1,
    },
    {
      Header: 'Category Name',
      accessor: 'name',
    },
    {
      Header: 'Actions',
      accessor: 'actions',
      Cell: ({ row }) => (
        <Stack direction="row" spacing={1} justifyContent="center">
          <IconButton color="primary" onClick={() => handleEdit(row.original)}>
            <Edit />
          </IconButton>
          <IconButton color="error" onClick={() => handleDelete(row.original.id)}>
            <Delete />
          </IconButton>
        </Stack>
      ),
    },
  ], [categories]);

  const filterAllColumns = (rows, id, filterValue) => {
    if (!filterValue) return rows;
    const lowercased = filterValue.toLowerCase();
    return rows.filter(row =>
      Object.values(row.original).some(
        val => val && val.toString().toLowerCase().includes(lowercased)
      )
    );
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    setPageSize,
    setGlobalFilter,
    gotoPage,
    state: { pageIndex, pageSize, globalFilter }
  } = useTable(
    { columns, data: categories, globalFilter: filterAllColumns },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const fetchCategories = async () => {
    try {
      const res = await axios.get('http://46.37.122.105:89/material-categories/');
      const formatted = res.data.map(item => ({
        id: item.category_id,
        name: item.category
      }));
      setCategories(formatted);
    } catch (err) {
      toast.error('Failed to fetch categories!');
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleAddOrUpdateCategory = async () => {
    if (!categoryName.trim()) {
      toast.error('Category name cannot be empty!');
      return;
    }

    try {
      if (editing) {
        await axios.put(`http://46.37.122.105:89/material-categories/${editing.id}/`, {
          category: categoryName.trim()
        });
        toast.success('Category updated!');
      } else {
        await axios.post('http://46.37.122.105:89/material-categories/', {
          user_id: 1,
          category: categoryName.trim()
        });
        toast.success('Category added!');
      }

      setCategoryName('');
      setEditing(null);
      setModalOpen(false);
      await fetchCategories();
      gotoPage(0);
    } catch (err) {
      toast.error('Failed to save category!');
    }
  };

  const handleEdit = (cat) => {
    setCategoryName(cat.name);
    setEditing(cat);
    setModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      try {
        await axios.delete(`http://46.37.122.105:89/material-categories/${id}/`);
        toast.success('Category deleted!');
        fetchCategories();
      } catch (err) {
        toast.error('Delete failed!');
      }
    }
  };

  return (
    <>
      <AdminDashboard />
      <Container sx={{ mt: 2 }}>
        <Box sx={{ maxWidth: 1300, mx: 'auto', p: 2, borderRadius: 2, boxShadow: 3, backgroundColor: '#fff' }}>
          <Typography variant="h4" sx={{ textAlign: 'center', color: 'primary.main', mb: 2 }}>
             Categories
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <GlobalFilter globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                setCategoryName('');
                setEditing(null);
                setModalOpen(true);
              }}
            >
              <Add sx={{ mr: 1 }} /> Add Category
            </Button>
          </Box>

          <TableContainer component={Paper}>
            <Table {...getTableProps()}>
              <TableHead sx={{ backgroundColor: '#1976d2' }}>
                <TableRow>
                  {headerGroups.map(headerGroup =>
                    headerGroup.headers.map(column => (
                      <TableCell
                        key={column.id}
                        {...column.getHeaderProps(column.getSortByToggleProps())}
                        sx={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}
                      >
                        {column.render('Header')}
                        {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                      </TableCell>
                    ))
                  )}
                </TableRow>
              </TableHead>

              <TableBody {...getTableBodyProps()}>
                {page.map(row => {
                  prepareRow(row);
                  return (
                    <TableRow key={row.id}>
                      {row.cells.map(cell => (
                        <TableCell key={cell.id} sx={{ textAlign: 'center' }}>
                          {cell.render('Cell')}
                        </TableCell>
                      ))}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>

            <TablePagination
              component="div"
              count={categories.length}
              page={pageIndex}
              onPageChange={(e, newPage) => gotoPage(newPage)}
              rowsPerPage={pageSize}
              onRowsPerPageChange={(e) => setPageSize(Number(e.target.value))}
              rowsPerPageOptions={[5, 10, 20]}
            />
          </TableContainer>
        </Box>
      </Container>

      {/* Add / Edit Modal */}
      <Dialog open={modalOpen} onClose={() => setModalOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>
          <Typography variant="h6">{editing ? "Edit Category" : "Add Category"}</Typography>
          <IconButton
            aria-label="close"
            onClick={() => setModalOpen(false)}
            sx={{ position: "absolute", right: 8, top: 8, color: (theme) => theme.palette.grey[500] }}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <TextField
            label="Category Name"
            fullWidth
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <Box textAlign="right">
            <Button
              variant="contained"
              color="primary"
              startIcon={editing ? <Edit /> : <Add />}
              onClick={handleAddOrUpdateCategory}
            >
              {editing ? 'Update' : 'Add'}
            </Button>
          </Box>
        </DialogContent>
      </Dialog>

      <ToastContainer />
    </>
  );
};

export default Category;
