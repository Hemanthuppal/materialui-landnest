import React, { useState, useEffect } from 'react';
import { Button, TextField, Box, Typography, Paper, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTable, usePagination, useGlobalFilter, useSortBy } from 'react-table';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Add, Edit, Delete, Search } from '@mui/icons-material'; // Add the Add icon


// Global Search Filter Component
function GlobalFilter({ globalFilter, setGlobalFilter }) {
  return (
    <Box mb={2} sx={{ display: 'inline-flex', alignItems: 'center' }}>
      <TextField
        value={globalFilter || ''}
        onChange={(e) => setGlobalFilter(e.target.value)}
        variant="outlined"
        placeholder="Search..."
        size="small"
        sx={{ maxWidth: 250, marginRight: '10px' }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => setGlobalFilter('')} // Clear search on button click
        startIcon={<Search />}
      >
      
      </Button>
    </Box>
  );
}

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const [editing, setEditing] = useState(null); // Track if we're editing a category
  
  // Columns configuration for the table
  const columns = React.useMemo(
    () => [
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
              onClick={() => handleEdit(row.index)}
              startIcon={<Edit />}
              style={{ marginRight: '10px' }}
            >
             
            </Button>
            <Button
              color="secondary"
              onClick={() => handleDelete(row.index)}
              startIcon={<Delete />}
            >
            
            </Button>
          </Box>
        ),
      },
    ],
    [categories]
  );

  // Global Filter logic for searching across all columns
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

  // Table setup using react-table hooks
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    setPageSize,
    setGlobalFilter,
    state: { pageIndex, pageSize, globalFilter },
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

  useEffect(() => {
    if (editing !== null) {
      setCategoryName(categories[editing].name);
    }
  }, [editing, categories]);

  // Handle Add or Update Category
  const handleAddOrUpdateCategory = () => {
    if (editing !== null) {
      // Update existing category
      const updatedCategories = categories.map((cat, index) =>
        index === editing ? { ...cat, name: categoryName } : cat
      );
      setCategories(updatedCategories);
      setEditing(null); // Reset editing state
      toast.success('Category updated successfully!');
    } else {
      // Add new category
      setCategories([...categories, { name: categoryName }]);
      toast.success('Category added successfully!');
    }
    setCategoryName(''); // Clear the input field
  };

  // Handle Editing a Category
  const handleEdit = (index) => {
    setEditing(index); // Set the category being edited
  };

  // Handle Deleting a Category
  const handleDelete = (index) => {
    setCategories(categories.filter((_, i) => i !== index));
    toast.error('Category deleted successfully!');
  };

  return (
    <div style={{ width: '80%', margin: '0 auto', textAlign: 'center' }}>
      <h2>{editing !== null ? 'Update Category' : 'Add Category'}</h2>

      {/* Input and Button for Add/Update Category */}
      <Box mb={3} sx={{ display: 'inline-flex', alignItems: 'center' }}>
        <TextField
          label="Category Name"
          variant="outlined"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          sx={{ marginRight: '10px' }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddOrUpdateCategory}
          startIcon={editing !== null ? <Edit /> : <Add />}
        >
          {editing !== null ? 'Update' : 'Add'}
        </Button>
      </Box>

      {/* Global Filter */}
      <GlobalFilter
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
      />

      {/* Table */}
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

        {/* Pagination */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
          <Typography>
            Page {pageIndex + 1} of {pageOptions.length}
          </Typography>

          <Box>
            <Button
              variant="contained"
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
              sx={{ mr: 1 }}
            >
              Prev
            </Button>
            <Button
              variant="contained"
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              Next
            </Button>
          </Box>

          <FormControl size="small" sx={{ minWidth: 100 }}>
            <InputLabel>Rows</InputLabel>
            <Select
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
              label="Rows"
            >
              {[5, 10, 20].map((size) => (
                <MenuItem key={size} value={size}>
                  Show {size}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Paper>

      {/* ToastContainer to display toast notifications */}
      <ToastContainer />
    </div>
  );
};

export default Category;
