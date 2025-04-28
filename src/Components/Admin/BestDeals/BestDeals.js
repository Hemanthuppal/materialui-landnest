// import React from 'react'

// const BestDeals = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default BestDeals







import React, { useState } from 'react';
import {
  Container,

  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  IconButton,
  FormControl,
  InputLabel,
  Select
} from '@mui/material';
import { Add, Edit, Delete } from '@mui/icons-material';
import AdminDashboard from "../../Admin/Dashboard/Dashboard"

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
  siteArea: {
    length: '',
    lengthUnit: 'ft',
    width: '',
    widthUnit: 'ft'
  },
  facing: '',
  list: '',
  price: '',
  location: '',
  description: '',
  images: [],
  // Additional fields
  noOfFloors: '',
  buildupArea: '',
  borewell: '',
  parking: '',
  '1bhk-count': '',
  '2bhk-count': '',
  '3bhk-count': '',
  '4bhk-count': '',
  duplexBedrooms: '',
  bedroomsCount: '',
  shopCount: '',
  houseCount: '',
  roomsCount: ''
};

const PropertyCRUD = () => {
  const [properties, setProperties] = useState([]);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState(initialFormState);
  const [editIndex, setEditIndex] = useState(null);
  const [imagePreview, setImagePreview] = useState([]);
  const [currentFields, setCurrentFields] = useState([]);

  const handleOpen = () => {
    setOpen(true);
    setFormData(initialFormState);
    setEditIndex(null);
    setImagePreview([]);
    setCurrentFields([]);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setFormData(prev => ({
      ...prev,
      category
    }));
    setCurrentFields(categoryFields[category] || []);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSiteAreaChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      siteArea: {
        ...prev.siteArea,
        [name]: value
      }
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const previews = files.map(file => URL.createObjectURL(file));
    setImagePreview(previews);
    setFormData(prev => ({
      ...prev,
      images: files
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newProperty = {
      ...formData,
      id: Date.now()
    };

    if (editIndex !== null) {
      // Update existing property
      const updatedProperties = [...properties];
      updatedProperties[editIndex] = newProperty;
      setProperties(updatedProperties);
    } else {
      // Add new property
      setProperties([...properties, newProperty]);
    }

    handleClose();
  };

  const handleEdit = (index) => {
    const propertyToEdit = properties[index];
    setFormData(propertyToEdit);
    setCurrentFields(categoryFields[propertyToEdit.category] || []);
    setEditIndex(index);
    setOpen(true);
  };

  const handleDelete = (index) => {
    const updatedProperties = properties.filter((_, i) => i !== index);
    setProperties(updatedProperties);
  };

  const renderFieldInput = (field) => {
    switch (field) {
      case 'Site Area':
        return (
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Site Area
            </Typography>
            <Stack direction="row" spacing={2}>
              <TextField
                fullWidth
                label="Length"
                name="length"
                value={formData.siteArea.length}
                onChange={handleSiteAreaChange}
                type="number"
                required
              />
              <TextField
                select
                label="Unit"
                name="lengthUnit"
                value={formData.siteArea.lengthUnit}
                onChange={handleSiteAreaChange}
                sx={{ minWidth: 100 }}
                required
              >
                {units.map((unit) => (
                  <MenuItem key={unit} value={unit}>
                    {unit}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                fullWidth
                label="Width"
                name="width"
                value={formData.siteArea.width}
                onChange={handleSiteAreaChange}
                type="number"
                required
              />
              <TextField
                select
                label="Unit"
                name="widthUnit"
                value={formData.siteArea.widthUnit}
                onChange={handleSiteAreaChange}
                sx={{ minWidth: 100 }}
                required
              >
                {units.map((unit) => (
                  <MenuItem key={unit} value={unit}>
                    {unit}
                  </MenuItem>
                ))}
              </TextField>
            </Stack>
          </Box>
        );
      case 'Facing':
        return (
          <TextField
            select
            fullWidth
            label="Facing Direction"
            name="facing"
            value={formData.facing}
            onChange={handleChange}
            required
          >
            {directions.map((direction) => (
              <MenuItem key={direction} value={direction}>
                {direction}
              </MenuItem>
            ))}
          </TextField>
        );
      case 'List':
        return (
          <TextField
            fullWidth
            label="List"
            name="list"
            value={formData.list}
            onChange={handleChange}
            required
          />
        );
      case 'Price':
        return (
          <TextField
            fullWidth
            label="Price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            type="number"
            required
          />
        );
      case 'No of floors':
        return (
          <TextField
            fullWidth
            label="No of floors"
            name="noOfFloors"
            value={formData.noOfFloors}
            onChange={handleChange}
            type="number"
          />
        );
      case 'Buildup area':
        return (
          <TextField
            fullWidth
            label="Buildup area"
            name="buildupArea"
            value={formData.buildupArea}
            onChange={handleChange}
          />
        );
      case 'Borewell':
        return (
          <TextField
            select
            fullWidth
            label="Borewell"
            name="borewell"
            value={formData.borewell}
            onChange={handleChange}
          >
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
          </TextField>
        );
      case 'Parking':
        return (
          <TextField
            select
            fullWidth
            label="Parking"
            name="parking"
            value={formData.parking}
            onChange={handleChange}
          >
            <MenuItem value="Available">Available</MenuItem>
            <MenuItem value="Not Available">Not Available</MenuItem>
          </TextField>
        );
      case '1bhk-count':
        return (
          <TextField
            fullWidth
            label="1 BHK Count"
            name="1bhk-count"
            value={formData['1bhk-count']}
            onChange={handleChange}
            type="number"
          />
        );
      case '2bhk-count':
        return (
          <TextField
            fullWidth
            label="2 BHK Count"
            name="2bhk-count"
            value={formData['2bhk-count']}
            onChange={handleChange}
            type="number"
          />
        );
      case '3bhk-count':
        return (
          <TextField
            fullWidth
            label="3 BHK Count"
            name="3bhk-count"
            value={formData['3bhk-count']}
            onChange={handleChange}
            type="number"
          />
        );
      case '4bhk-count':
        return (
          <TextField
            fullWidth
            label="4 BHK Count"
            name="4bhk-count"
            value={formData['4bhk-count']}
            onChange={handleChange}
            type="number"
          />
        );
      case 'Duplex bedrooms':
        return (
          <TextField
            fullWidth
            label="Duplex Bedrooms"
            name="duplexBedrooms"
            value={formData.duplexBedrooms}
            onChange={handleChange}
            type="number"
          />
        );
      case 'Bedrooms-count':
        return (
          <TextField
            fullWidth
            label="Bedrooms Count"
            name="bedroomsCount"
            value={formData.bedroomsCount}
            onChange={handleChange}
            type="number"
          />
        );
      case 'Shop-count':
        return (
          <TextField
            fullWidth
            label="Shop Count"
            name="shopCount"
            value={formData.shopCount}
            onChange={handleChange}
            type="number"
          />
        );
      case 'House-count':
        return (
          <TextField
            fullWidth
            label="House Count"
            name="houseCount"
            value={formData.houseCount}
            onChange={handleChange}
            type="number"
          />
        );
      case 'Rooms-count':
        return (
          <TextField
            fullWidth
            label="Rooms Count"
            name="roomsCount"
            value={formData.roomsCount}
            onChange={handleChange}
            type="number"
          />
        );
      default:
        return null;
    }
  };

  const renderTableCell = (property, field) => {
    switch (field) {
      case 'Site Area':
        return `${property.siteArea.length} ${property.siteArea.lengthUnit} x ${property.siteArea.width} ${property.siteArea.widthUnit}`;
      case 'Facing':
        return property.facing;
      case 'List':
        return property.list;
      case 'Price':
        return property.price;
      case 'No of floors':
        return property.noOfFloors;
      case 'Buildup area':
        return property.buildupArea;
      case 'Borewell':
        return property.borewell;
      case 'Parking':
        return property.parking;
      case '1bhk-count':
        return property['1bhk-count'];
      case '2bhk-count':
        return property['2bhk-count'];
      case '3bhk-count':
        return property['3bhk-count'];
      case '4bhk-count':
        return property['4bhk-count'];
      case 'Duplex bedrooms':
        return property.duplexBedrooms;
      case 'Bedrooms-count':
        return property.bedroomsCount;
      case 'Shop-count':
        return property.shopCount;
      case 'House-count':
        return property.houseCount;
      case 'Rooms-count':
        return property.roomsCount;
      default:
        return '';
    }
  };

  const getTableHeaders = () => {
    const allFields = new Set(['Category', 'Location']);
    properties.forEach(property => {
      const fields = categoryFields[property.category] || [];
      fields.forEach(field => allFields.add(field));
    });
    return Array.from(allFields);
  };

  return (
    <Container>
    <AdminDashboard />

    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4">Property Listings</Typography>
        <Button  disableRipple 
               disableElevation variant="contained" startIcon={<Add />} onClick={handleOpen}>
          Add Property
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {getTableHeaders().map(header => (
                <TableCell key={header}>{header}</TableCell>
              ))}
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {properties.length === 0 ? (
              <TableRow>
                <TableCell colSpan={getTableHeaders().length + 1} align="center">No properties added yet</TableCell>
              </TableRow>
            ) : (
              properties.map((property, index) => {
                const fields = categoryFields[property.category] || [];
                return (
                  <TableRow key={property.id}>
                    <TableCell>{property.category}</TableCell>
                    <TableCell>{property.location}</TableCell>
                    {getTableHeaders().slice(2).map(header => (
                      <TableCell key={header}>
                        {fields.includes(header) ? renderTableCell(property, header) : '-'}
                      </TableCell>
                    ))}
                    <TableCell>
                      <IconButton onClick={() => handleEdit(index)}>
                        <Edit color="primary" />
                      </IconButton>
                      <IconButton onClick={() => handleDelete(index)}>
                        <Delete color="error" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>{editIndex !== null ? 'Edit Property' : 'Add New Property'}</DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <Stack spacing={3}>
              {/* Category */}
              <FormControl fullWidth required>
                <InputLabel>Category</InputLabel>
                <Select
                  label="Category"
                  name="category"
                  value={formData.category}
                  onChange={handleCategoryChange}
                >
                  {categories.map((category) => (
                    <MenuItem key={category} value={category}>
                      {category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* Location */}
              <TextField
                fullWidth
                label="Location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />

              {/* Render dynamic fields based on category */}
              {currentFields.map(field => (
                <Box key={field}>
                  {renderFieldInput(field)}
                </Box>
              ))}

              {/* Image Upload */}
              <Box>
                <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Upload Images
                </Typography>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageChange}
                />
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 2 }}>
                  {imagePreview.map((preview, index) => (
                    <img
                      key={index}
                      src={preview}
                      alt={`Preview ${index}`}
                      style={{ width: 100, height: 100, objectFit: 'cover' }}
                    />
                  ))}
                </Box>
              </Box>

              {/* Description */}
              <TextField
                fullWidth
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                multiline
                rows={4}
              />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button  disableRipple 
               disableElevation variant="contained" color='red'
                onClick={handleClose}>Cancel</Button>
            <Button  disableRipple 
               disableElevation type="submit" variant="contained">
              {editIndex !== null ? 'Update' : 'Submit'}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Box>
    </Container>
  );
};

export default PropertyCRUD;