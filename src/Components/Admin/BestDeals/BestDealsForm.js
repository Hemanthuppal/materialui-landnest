import React, { useEffect, useState } from "react";
import {
  Box, Button, TextField, Typography, IconButton, MenuItem,
  FormControl, InputLabel, Select, Stack
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { Grid } from "@mui/material";


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

const initialFormState = {
  category: '',
  siteArea: { length: '', lengthUnit: 'ft', width: '', widthUnit: 'ft' },
  facing: '', list: '', price: '', location: '', description: '', image: '',
  nooffloors: '', builduparea: '', borewell: '', parking: '',
  '1bhkcount': '', '2bhkcount': '', '3bhkcount': '', '4bhkcount': '',
  duplexbedrooms: '', bedroomscount: '', shopcount: '', housecount: '', roomscount: '', floors: ''
};

const BestDealsForm = ({ addOrUpdateDeal, editDeal }) => {
  const [formData, setFormData] = useState(initialFormState);
  const [imagePreview, setImagePreview] = useState(null);
  const [currentFields, setCurrentFields] = useState([]);

  useEffect(() => {
    if (editDeal) {
      setFormData(editDeal);
      setImagePreview(editDeal.image);
      setCurrentFields(categoryFields[editDeal.category] || []);
    }
  }, [editDeal]);

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
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
      setFormData(prev => ({ ...prev, image: reader.result }));
    };
    reader.readAsDataURL(file);
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
          <TextField label="Length" name="length" value={formData.siteArea.length} onChange={handleSiteAreaChange} />
          <TextField select name="lengthUnit" value={formData.siteArea.lengthUnit} onChange={handleSiteAreaChange}>
            {units.map(u => <MenuItem key={u} value={u}>{u}</MenuItem>)}
          </TextField>
          <TextField label="Width" name="width" value={formData.siteArea.width} onChange={handleSiteAreaChange} />
          <TextField select name="widthUnit" value={formData.siteArea.widthUnit} onChange={handleSiteAreaChange}>
            {units.map(u => <MenuItem key={u} value={u}>{u}</MenuItem>)}
          </TextField>
        </Stack>
      );
    }
    return <TextField fullWidth label={field} name={name} value={formData[name] || ''} onChange={handleChange} />;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const deal = { ...formData, id: editDeal ? editDeal.id : Date.now(), date: new Date().toISOString().slice(0, 10) };
    addOrUpdateDeal(deal);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5" mb={2}>{editDeal ? "Edit Property Deal" : "Add Property Deal"}</Typography>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Category</InputLabel>
        <Select value={formData.category} onChange={handleCategoryChange} name="category" label="Category">
          {Object.keys(categoryFields).map(c => <MenuItem key={c} value={c}>{c}</MenuItem>)}
        </Select>
      </FormControl>

            <Box sx={{ maxHeight: 400, overflowY: 'auto', mb: 2 }}>
        <Grid container spacing={2}>
            {currentFields.map((field, index) => (
            <Grid item xs={12} sm={6} key={field}>
                {renderFieldInput(field)}
            </Grid>
            ))}
        </Grid>
        </Box>


      <TextField fullWidth label="Location" name="location" value={formData.location} onChange={handleChange} sx={{ mb: 2 }} />
      <TextField fullWidth label="Description" name="description" value={formData.description} onChange={handleChange} multiline rows={3} sx={{ mb: 2 }} />

      <Button component="label" variant="outlined" fullWidth>
        {imagePreview ? "Change Image" : "Upload Image"}
        <input hidden type="file" accept="image/*" onChange={handleImageChange} />
      </Button>

      {imagePreview && (
        <Box sx={{ mt: 2, position: "relative" }}>
          <img src={imagePreview} alt="Preview" style={{ width: "100%", maxHeight: 200, objectFit: "cover" }} />
          <IconButton sx={{ position: "absolute", top: 8, right: 8, bgcolor: "white" }} onClick={() => { setImagePreview(null); setFormData(prev => ({ ...prev, image: '' })); }}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
      )}

      <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }} disabled={!formData.category || !formData.location}>
        {editDeal ? "Update" : "Submit"}
      </Button>
    </form>
  );
};

export default BestDealsForm;
