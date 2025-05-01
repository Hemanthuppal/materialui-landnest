import React, { useState, useEffect } from 'react';
import {
  Button, TextField, Box, Typography, Paper, FormControl,
  InputLabel, Select, MenuItem, InputAdornment, Table,
  TableBody, TableCell, TableContainer, TableHead, TableRow
} from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTable, usePagination, useGlobalFilter, useSortBy } from 'react-table';
import { Add, Edit, Delete } from '@mui/icons-material';
import AdminDashboard from "../Dashboard/Dashboard";
import TablePagination from '@mui/material/TablePagination';


// Global Search Filter Component
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
            />
            <Button
              color="secondary"
              onClick={() => handleDelete(row.index)}
              startIcon={<Delete />}
            />
          </Box>
        ),
      },
    ],
    [categories]
  );

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
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    gotoPage, // <-- Add this line
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

  const handleAddOrUpdateCategory = () => {
    if (editing !== null) {
      const updatedCategories = categories.map((cat, index) =>
        index === editing ? { ...cat, name: categoryName } : cat
      );
      setCategories(updatedCategories);
      setEditing(null);
      toast.success('Category updated successfully!');
    } else {
      setCategories([...categories, { name: categoryName }]);
      toast.success('Category added successfully!');
    }
    setCategoryName('');
  };

  const handleEdit = (index) => {
    setEditing(index);
  };

  const handleDelete = (index) => {
    setCategories(categories.filter((_, i) => i !== index));
    toast.error('Category deleted successfully!');
  };

  return (
    <>
      <AdminDashboard />

      <div style={{ width: '80%', margin: '0 auto', textAlign: 'center' }}>
        <h2>{editing !== null ? 'Update Category' : 'Add Category'}</h2>

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
                    startIcon={editing !== null ? <Edit /> : <Add />}
                  >
                    {editing !== null ? 'Update' : 'Add'}
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
  onRowsPerPageChange={(e) => {
    setPageSize(Number(e.target.value));
  }}
  rowsPerPageOptions={[5, 10, 20]}
/>

        </Paper>

        <ToastContainer />
      </div>
    </>
  );
};

export default Category;
