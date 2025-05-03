import React, { useState, useEffect } from 'react';
import {
  Button, TextField, Box, Paper, InputAdornment,
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow
} from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  useTable, usePagination, useGlobalFilter, useSortBy
} from 'react-table';
import { Add, Edit, Delete } from '@mui/icons-material';
import AdminDashboard from "../Dashboard/Dashboard";
import TablePagination from '@mui/material/TablePagination';
import axios from 'axios';

// Global Filter Component
function GlobalFilter({ globalFilter, setGlobalFilter }) {
  return (
    <Box mb={2} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 1 }}>
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

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const [editing, setEditing] = useState(null);

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
        <Box>
          <Button
            color="primary"
            onClick={() => handleEdit(row.original)}
            startIcon={<Edit />}
            style={{ marginRight: '10px' }}
          />
          <Button
            color="secondary"
            onClick={() => handleDelete(row.original.id)}
            startIcon={<Delete />}
          />
        </Box>
      ),
    },
  ], [categories]);

  const filterAllColumns = (rows, id, filterValue) => {
    if (!filterValue) return rows;
    const lowercasedFilter = filterValue.toLowerCase();
    return rows.filter((row) =>
      Object.values(row.original).some(
        (value) =>
          value && value.toString().toLowerCase().includes(lowercasedFilter)
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
    {
      columns,
      data: categories,
      globalFilter: filterAllColumns,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  // ✅ Fetch categories function (reusable)
  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://46.37.122.105:89/material-categories/');
      const formattedData = response.data.map(item => ({
        id: item.category_id,
        name: item.category
      }));
      setCategories(formattedData);
    } catch (error) {
      console.error('Error fetching categories:', error);
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
      if (editing !== null) {
        await axios.put(`http://46.37.122.105:89/material-categories/${editing.id}/`, {
          category: categoryName.trim()
        });
        toast.success('Category updated successfully!');
      } else {
        await axios.post('http://46.37.122.105:89/material-categories/', {
          user_id: 1,
          category: categoryName.trim()
        });
        toast.success('Category added successfully!');
      }

      setCategoryName('');
      setEditing(null);
      await fetchCategories(); // ✅ Refresh categories list
      gotoPage(0); // ✅ Reset pagination to first page (optional)

    } catch (error) {
      console.error(error);
      toast.error('Failed to save category!');
    }
  };

  const handleEdit = (category) => {
    setCategoryName(category.name);
    setEditing(category);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://46.37.122.105:89/material-categories/${id}/`);
      await fetchCategories(); // ✅ Refresh categories list after delete
      toast.success('Category deleted successfully!');
    } catch (error) {
      console.error(error);
      toast.error('Failed to delete category!');
    }
  };

  return (
    <>
      <AdminDashboard />

      <div style={{ width: '80%', margin: '0 auto', textAlign: 'center' }}>
        <h2>{editing ? 'Update Category' : 'Add Category'}</h2>

        <Box mb={3} sx={{ maxWidth: 400, mx: 'auto' }}>
          <TextField
            label="Category Name"
            variant="outlined"
            size="small"
            fullWidth
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleAddOrUpdateCategory}
                    size="small"
                    sx={{ ml: 1, height: '100%' }}
                    startIcon={editing ? <Edit /> : <Add />}
                  >
                    {editing ? 'Update' : 'Add'}
                  </Button>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <GlobalFilter
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
        />

        <Paper sx={{ overflow: 'hidden' }}>
          <TableContainer>
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
                          {column.isSorted
                            ? column.isSortedDesc
                              ? ' 🔽'
                              : ' 🔼'
                            : ''}
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
                        <TableCell {...cell.getCellProps()}>
                          {cell.render('Cell')}
                        </TableCell>
                      ))}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>

          <TablePagination
            component="div"
            count={categories.length}
            page={pageIndex}
            onPageChange={(e, newPage) => gotoPage(newPage)}
            rowsPerPage={pageSize}
            onRowsPerPageChange={(e) => setPageSize(Number(e.target.value))}
            rowsPerPageOptions={[5, 10, 20]}
          />
        </Paper>

        <ToastContainer />
      </div>
    </>
  );
};

export default Category;
