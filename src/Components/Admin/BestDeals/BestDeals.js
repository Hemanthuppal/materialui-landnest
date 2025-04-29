import React, { useEffect, useState } from 'react';
import {
  Container, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Paper,
  Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField,
  Typography, IconButton, FormControl, InputLabel, Select
} from '@mui/material';
import { Add, Edit, Delete } from '@mui/icons-material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminDashboard from "../../Admin/Dashboard/Dashboard";

const directions = ['North', 'North-East', 'East', 'South-East', 'South', 'South-West', 'West', 'North-West'];
const units = ['ft', 'm', 'cm', 'in'];

const categoryFields = {
  'Commercial land/plot': ['Site Area', 'Facing', 'List', 'Price'],
  'plot/land': ['Site Area', 'Facing', 'List', 'Price'],
  'rent with duplex building': ['Site Area', 'Facing', 'List', 'Price', 'No of floors', 'Buildup area', 'Borewell', 'Parking', '1bhk-count', '2bhk-count', 'Duplex bedrooms'],
  'duplex house': ['Site Area', 'Facing', 'List', 'Price', 'No of floors', 'Buildup area', 'Borewell', 'Parking', 'Duplex bedrooms'],
  'rental building': ['Site Area', 'Facing', 'List', 'Price', 'No of floors', 'Buildup area', 'Borewell', 'Parking', '1bhk-count', '2bhk-count', '3bhk-count'],
  'pg-offices': ['Site Area', 'Facing', 'List', 'Price', 'Rooms-count', 'Floors', 'Borewell', 'Parking'],
  'flat': ['Site Area', 'Facing', 'List', 'Price', 'Bedrooms-count', 'Parking', 'Borewell'],
  'villa': ['Site Area', 'Facing', 'List', 'Price', 'Bedrooms-count', 'Parking', 'Borewell', 'Floors'],
  'commercial building': ['Site Area', 'Facing', 'List', 'Price', 'Shop-count', 'Parking', 'Borewell', 'Floors'],
  'appartments': ['Site Area', 'Facing', 'List', 'Price', 'Parking', 'Borewell', 'House-count', '1bhk', '2bhk', '3bhk', '4bhk'],
  'others': ['Price'],
};

const categories = Object.keys(categoryFields);

const initialFormState = {
  category: '',
  siteArea: { length: '', lengthUnit: 'ft', width: '', widthUnit: 'ft' },
  facing: '', list: '', price: '', location: '', description: '', images: [],
  nooffloors: '', builduparea: '', borewell: '', parking: '',
  '1bhkcount': '', '2bhkcount': '', '3bhkcount': '', '4bhkcount': '',
  duplexbedrooms: '', bedroomscount: '', shopcount: '', housecount: '', roomscount: '', floors: ''
};

const PropertyCRUD = () => {
  const [properties, setProperties] = useState([]);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState(initialFormState);
  const [editIndex, setEditIndex] = useState(null);
  const [imagePreview, setImagePreview] = useState([]);
  const [currentFields, setCurrentFields] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('properties');
    if (stored) setProperties(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('properties', JSON.stringify(properties));
  }, [properties]);

  const handleOpen = () => {
    setOpen(true);
    setFormData(initialFormState);
    setEditIndex(null);
    setImagePreview([]);
    setCurrentFields([]);
  };

  const handleClose = () => setOpen(false);

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setFormData(prev => ({ ...prev, category }));
    setCurrentFields(categoryFields[category] || []);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSiteAreaChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      siteArea: { ...prev.siteArea, [name]: value }
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const previews = files.map(file => URL.createObjectURL(file));
    setImagePreview(previews);
    setFormData(prev => ({ ...prev, images: previews }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProperty = { ...formData, id: Date.now() };

    if (editIndex !== null) {
      const updated = [...properties];
      updated[editIndex] = newProperty;
      setProperties(updated);
      toast.success('Property updated successfully!');
    } else {
      setProperties([...properties, newProperty]);
      toast.success('Property added successfully!');
    }

    handleClose();
  };

  const handleEdit = (index) => {
    const prop = properties[index];
    setFormData(prop);
    setCurrentFields(categoryFields[prop.category] || []);
    setEditIndex(index);
    setOpen(true);
  };

  const handleDelete = (index) => {
    const updated = properties.filter((_, i) => i !== index);
    setProperties(updated);
    toast.info('Property deleted!');
  };

  const renderTableCell = (property, field) => {
    if (field === 'Site Area') {
      return `${property.siteArea.length} ${property.siteArea.lengthUnit} x ${property.siteArea.width} ${property.siteArea.widthUnit}`;
    }

    const normalized = field.toLowerCase().replace(/[- ]/g, '');
    return property[normalized] || '-';
  };

  const getTableHeaders = () => {
    const headers = new Set(['Category', 'Location', 'Image']);
    properties.forEach(p => (categoryFields[p.category] || []).forEach(f => headers.add(f)));
    return Array.from(headers);
  };

  const renderFieldInput = (field) => {
    const name = field.toLowerCase().replace(/[- ]/g, '');
    if (field === 'Facing') {
      return (
        <TextField select fullWidth label="Facing Direction" name="facing" value={formData.facing} onChange={handleChange}>
          {directions.map(d => <MenuItem key={d} value={d}>{d}</MenuItem>)}
        </TextField>
      );
    }
    if (field === 'Price') {
      return <TextField fullWidth label="Price" name="price" value={formData.price} onChange={handleChange} type="number" />;
    }
    if (field === 'Site Area') {
      return (
        <Stack direction="row" spacing={2}>
          <TextField fullWidth label="Length" name="length" value={formData.siteArea.length} onChange={handleSiteAreaChange} />
          <TextField select name="lengthUnit" value={formData.siteArea.lengthUnit} onChange={handleSiteAreaChange}>
            {units.map(u => <MenuItem key={u} value={u}>{u}</MenuItem>)}
          </TextField>
          <TextField fullWidth label="Width" name="width" value={formData.siteArea.width} onChange={handleSiteAreaChange} />
          <TextField select name="widthUnit" value={formData.siteArea.widthUnit} onChange={handleSiteAreaChange}>
            {units.map(u => <MenuItem key={u} value={u}>{u}</MenuItem>)}
          </TextField>
        </Stack>
      );
    }
    return (
      <TextField
        fullWidth
        label={field}
        name={name}
        value={formData[name] || ''}
        onChange={handleChange}
      />
    );
  };

  return (
    <Container>
      <ToastContainer />
      <AdminDashboard />
      <Box sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <Typography variant="h4">Property Listings</Typography>
          <Button variant="contained" startIcon={<Add />} onClick={handleOpen}>Add Property</Button>
        </Box>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {getTableHeaders().map(h => <TableCell key={h}>{h}</TableCell>)}
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {properties.length === 0 ? (
                <TableRow><TableCell colSpan={getTableHeaders().length + 1} align="center">No properties</TableCell></TableRow>
              ) : (
                properties.map((p, i) => (
                  <TableRow key={p.id}>
                    <TableCell>{p.category}</TableCell>
                    <TableCell>{p.location}</TableCell>
                    <TableCell>
                      {p.images?.length > 0 && (
                        <img src={p.images[0]} alt="preview" width={60} height={60} style={{ objectFit: 'cover' }} />
                      )}
                    </TableCell>
                    {getTableHeaders().slice(3).map(h => (
                      <TableCell key={h}>{renderTableCell(p, h)}</TableCell>
                    ))}
                    <TableCell>
                      <IconButton onClick={() => handleEdit(i)}><Edit color="primary" /></IconButton>
                      <IconButton onClick={() => handleDelete(i)}><Delete color="error" /></IconButton>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
          <DialogTitle>{editIndex !== null ? 'Edit Property' : 'Add New Property'}</DialogTitle>
          <form onSubmit={handleSubmit}>
            <DialogContent>
              <Stack spacing={3}>
                <FormControl fullWidth required>
                  <InputLabel>Category</InputLabel>
                  <Select label="Category" name="category" value={formData.category} onChange={handleCategoryChange}>
                    {categories.map(c => <MenuItem key={c} value={c}>{c}</MenuItem>)}
                  </Select>
                </FormControl>

                <TextField fullWidth label="Location" name="location" value={formData.location} onChange={handleChange} required />

                {currentFields.map(f => <Box key={f}>{renderFieldInput(f)}</Box>)}

                <TextField fullWidth label="Description" name="description" value={formData.description} onChange={handleChange} multiline rows={4} />

                <input type="file" multiple accept="image/*" onChange={handleImageChange} />
                <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
                  {imagePreview.map((src, i) => (
                    <img key={i} src={src} alt="preview" width={80} height={80} />
                  ))}
                </Box>
              </Stack>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit" variant="contained">{editIndex !== null ? 'Update' : 'Submit'}</Button>
            </DialogActions>
          </form>
        </Dialog>
      </Box>
    </Container>
  );
};

export default PropertyCRUD;
