import React, { useEffect } from "react";
import {
  useTable,
  usePagination,
  useGlobalFilter,
  useSortBy,
} from "react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Typography,
  Box,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

// Global Search Filter Component (with Add button)
function GlobalFilter({ globalFilter, setGlobalFilter, onAdd }) {
  return (
    <Box
      mb={2}
      display="flex"
      justifyContent="flex-end"
      alignItems="center"
      gap={2}
      flexWrap="wrap"
    >
      <TextField
        value={globalFilter || ""}
        onChange={(e) => setGlobalFilter(e.target.value)}
        variant="outlined"
        placeholder="Search..."
        size="small"
        sx={{ maxWidth: 250 }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={onAdd}
        size="small"
      >
        Add
      </Button>
    </Box>
  );
}

export default function DataTable({ columns, data, initialSearchValue }) {
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
    setPageSize,
    setGlobalFilter,
    state: { pageIndex, pageSize, globalFilter },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, globalFilter: initialSearchValue },
      globalFilter: filterAllColumns,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  useEffect(() => {
    if (initialSearchValue) {
      setGlobalFilter(initialSearchValue);
    }
  }, [initialSearchValue, setGlobalFilter]);

  const handleAdd = () => {
    console.log("Add button clicked!");
    // Open a modal, navigate to Add form page, etc.
  };

  return (
    <Box>
      {/* Global Filter and Add Button */}
      <GlobalFilter
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
        onAdd={handleAdd}
      />

      {/* Table */}
      <TableContainer component={Paper}>
        <Table {...getTableProps()}>
          <TableHead>
            {headerGroups.map((headerGroup) => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <TableCell
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    sx={{
                      fontWeight: "bold",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      maxWidth: 200,
                    }}
                  >
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
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
                    <TableCell
                      {...cell.getCellProps()}
                      sx={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: 200,
                      }}
                    >
                      {cell.render("Cell")}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt={2}
        flexWrap="wrap"
        gap={2}
      >
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
    </Box>
  );
}
