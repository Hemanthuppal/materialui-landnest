import React, { useState, useRef, useContext } from 'react';
import {
    Box, Typography, TextField, Button, Select, MenuItem,
    InputLabel, FormControl, Paper, Stack, styled
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useJsApiLoader, GoogleMap, Marker, Autocomplete } from '@react-google-maps/api';
import SearchBar from './FormsSearchBar'; 
import FormsBottomNavbar from './FormsBottomNavbar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext  } from '../AuthContext/AuthContext';


const GOOGLE_MAPS_API_KEY = 'AIzaSyAZAU88Lr8CEkiFP_vXpkbnu1-g-PRigXU'; // Replace with your actual API key

const containerStyle = {
    width: '100%',
    height: '300px',
};

const centerDefault = {
    lat: 18.387449,
    lng: 78.803236,
};

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const RedButton = styled(Button)({
    backgroundColor: 'red',
    color: 'white',
    '&:hover': { backgroundColor: '#cc0000' },
});

const GreenButton = styled(Button)({
    backgroundColor: 'green',
    color: 'white',
    '&:hover': { backgroundColor: '#008000' },
});

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

const facingOptions = ['East', 'West', 'North', 'South', 'North-East', 'North-West', 'South-East', 'South-West'];

const SellYourProperty = () => {

     const [workPhotos, setWorkPhotos] = useState([]);
    const { userId, logout } = useContext(AuthContext);

     const handleWorkPhotosChange = (e) => {
            if (e.target.files) {
                setWorkPhotos(Array.from(e.target.files));
            }
        };
    
        const [formData, setFormData] = useState({
            user_id: userId, // This should probably come from user auth
            category_id: 1, // This should be mapped from your category selection
            type: 'sell', // or 'sell' based on your form
            facing: '',
            roadwidth: '',
            site_area: '',
            buildup_area: '',
            list: '',
            price: '',
            borewell: '',
            location: '',
            lat: '',
            long: '',
            nearby: '',
            no_of_flores: '',
            _1bhk_count: '',
            _2bhk_count: '',
            _3bhk_count: '',
            _4bhk_count: '',
            bedrooms_count: '',
            balcony: '',
            gated_security: '',
            parking: '',
            advance_payment: '',
            duplex_bedrooms: '',
            rooms_count: '',
            shop_count: '',
            house_count: ''
        });

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: GOOGLE_MAPS_API_KEY,
        libraries: ['places'],
    });

    const [location, setLocation] = useState(centerDefault);
    const [address, setAddress] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Commercial land/plot');
    const [formValues, setFormValues] = useState({});
    const autocompleteRef = useRef(null);
    const navigate = useNavigate();

    const onPlaceChanged = () => {
        if (autocompleteRef.current) {
            const place = autocompleteRef.current.getPlace();
            if (place && place.geometry) {
                const newLoc = {
                    lat: place.geometry.location.lat(),
                    lng: place.geometry.location.lng(),
                };
                setLocation(newLoc);
                setAddress(place.formatted_address);
            }
        }
    };

    const geocodeAddress = async () => {
        if (window.google && window.google.maps) {
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ address }, (results, status) => {
            if (status === 'OK' && results[0]) {
                const location = results[0].geometry.location;
                setLocation({
                    lat: location.lat(),
                    lng: location.lng(),
                });
                setAddress(results[0].formatted_address);
            } else {
                alert('Address could not be located. Please check input.');
            }
        });
    }
    };

    const labelKeyMap = {
        'Site Area': 'site_area',
        'Facing': 'facing',
        'List': 'list',
        'Price': 'price',
        'No.of floors': 'no_of_flores',
        'Buildup area': 'buildup_area',
        'Borewell': 'borewell',
        'Parking': 'parking',
        '1bhk-count': '_1bhk_count',
        '2bhk-count': '_2bhk_count',
        '3bhk-count': '_3bhk_count',
        'Duplex bedrooms': 'duplex_bedrooms',
        'Floors': 'no_of_flores',
        'Rooms-Count': 'rooms_count',
        'Bedrooms-count': 'bedrooms_count',
        'Shop-count': 'shop_count',
        'House-count': 'house_count',
        '1bhk': '_1bhk_count',
        '2bhk': '_2bhk_count',
        '3bhk': '_3bhk_count',
        '4bhk': '_4bhk_count',
    };
    const handleBackClick = () => navigate(-1);

    const handleFieldChange = (label, value) => {
        const key = labelKeyMap[label] || label; // fallback to label if not in map
        setFormValues(prev => ({ ...prev, [label]: value }));
        setFormData(prev => ({ ...prev, [key]: value }));
    };

    const handleSearchClick = () => console.log('Search icon clicked');
    const handleFilterClick = () => console.log('Filter icon clicked');

    const handleSubmit = async (e) => {
            e.preventDefault();
        
            // Update lat & long from selected location
            const updatedFormData = {
                ...formData,
                lat: location.lat,
                long: location.lng,
                location: address, // Optional, depending on your backend
            };
        
            const formDataToSend = new FormData();
        
            // Append data fields
            Object.entries(updatedFormData).forEach(([key, value]) => {
                formDataToSend.append(key, value);
            });
        
            // Append work photos
            workPhotos.forEach((file, index) => {
                formDataToSend.append('new_property_images', file);
            });
        
            try {
                const response = await axios.post('http://46.37.122.105:89/property/', formDataToSend, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
        
                if (response.status === 201 || response.status === 200) {
                    alert('Property submitted successfully!');
                    navigate('/dashboard');
                } else {
                    alert('Something went wrong. Try again.');
                }
            } catch (error) {
                console.error('Submission Error:', error);
                if (error.response) {
                    alert(`Error: ${error.response.data.message || 'Something went wrong'}`);
                } else {
                    alert('An error occurred while submitting. Please try again.');
                }
            }
        };

    if (!isLoaded) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Typography>Loading Google Maps...</Typography>
            </Box>
        );
    }

    const fields = selectedCategory ? categoryFields[selectedCategory] : [];

    return (
        <>
            <SearchBar
                onBackClick={handleBackClick}
                onSearchClick={handleSearchClick}
                onFilterClick={handleFilterClick}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', pt: '10px', backgroundColor: 'rgb(239, 231, 221)' }}>
                <Box sx={{ p: { xs: 2, sm: 3 }, maxWidth: 'md', mx: 'auto' }}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Sell Your Property
                    </Typography>

                    <Paper elevation={2} sx={{ p: { xs: 2, sm: 3 }, mb: 3 }} component="form" onSubmit={handleSubmit}>
                        <FormControl fullWidth sx={{ mb: 3 }}>
                            <InputLabel id="category-label">Select Category</InputLabel>
                            <Select
                                labelId="category-label"
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                label="Select Category"
                            >
                                {Object.keys(categoryFields).map((cat) => (
                                    <MenuItem key={cat} value={cat}>{cat}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                       {fields.includes('Site Area') && (
  <Box key="Site Area" sx={{ mb: 2 }}>
    <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
      Site Area
    </Typography>
    <Stack direction="row" spacing={2}>
      {/* Length input and unit */}
      <TextField fullWidth label="Length" variant="outlined" />
      <TextField
        select
        label="Unit"
        defaultValue="ft"
        sx={{ minWidth: 100 }}
      >
        {['ft', 'm', 'cm', 'in'].map((unit) => (
          <MenuItem key={unit} value={unit}>
            {unit}
          </MenuItem>
        ))}
      </TextField>

      {/* Width input and unit */}
      <TextField fullWidth label="Width" variant="outlined" />
      <TextField
        select
        label="Unit"
        defaultValue="ft"
        sx={{ minWidth: 100 }}
      >
        {['ft', 'm', 'cm', 'in'].map((unit) => (
          <MenuItem key={unit} value={unit}>
            {unit}
          </MenuItem>
        ))}
      </TextField>
    </Stack>
  </Box>
)}


                        {/* Remaining Dynamic Fields */}
                        {fields.map((label) => {
                            if (label === 'Site Area') return null;
                            if (label === 'Facing') {
                                return (
                                    <FormControl fullWidth key={label} sx={{ mb: 2 }}>
                                        <InputLabel id={`${label}-label`}>{label}</InputLabel>
                                        <Select
                                            labelId={`${label}-label`}
                                            value={formValues[label] || ''}
                                            label={label}
                                            onChange={(e) => handleFieldChange(label, e.target.value)}
                                        >
                                            {facingOptions.map(option => (
                                                <MenuItem key={option} value={option}>{option}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                );
                            }
                            return (
                                <TextField
                                    key={label}
                                    fullWidth
                                    label={label}
                                    variant="outlined"
                                    sx={{ mb: 2 }}
                                    value={formValues[label] || ''}
                                    onChange={(e) => handleFieldChange(label, e.target.value)}
                                />
                            );
                        })}

                        {/* Location search + Autocomplete */}
                        <Autocomplete
                            onLoad={(ref) => (autocompleteRef.current = ref)}
                            onPlaceChanged={onPlaceChanged}
                        >
                            <TextField
                                fullWidth
                                label="Location"
                                variant="outlined"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                onBlur={geocodeAddress}
                                sx={{ mb: 2 }}
                            />
                        </Autocomplete>

                        {/* Map with marker */}
                        <div style={containerStyle}>
                            <GoogleMap
                                mapContainerStyle={{ width: '100%', height: '100%' }}
                                center={location}
                                zoom={15}
                            >
                                <Marker position={location} />
                            </GoogleMap>
                        </div>

                        {/* Image Upload */}
                        <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>Uploaded Images</Typography>
                        <Button component="label" variant="outlined" startIcon={<CloudUploadIcon />} fullWidth sx={{ mb: 3 }}>
                            Upload Images
                            <VisuallyHiddenInput
                                type="file"
                                accept="image/*"
                                multiple
                                onChange={handleWorkPhotosChange}
                            />
                        </Button>
                        {workPhotos.length > 0 && (
                            <Typography variant="caption" display="block" gutterBottom>
                                Selected: {workPhotos.length} file(s)
                            </Typography>
                        )}

                        {/* Description */}
                        <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>Description</Typography>
                        <TextField fullWidth variant="outlined" multiline rows={4} sx={{ mb: 2 }} />

                        {/* Buttons */}
                        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 2 }}>
                            <RedButton variant="contained" size="large" sx={{ px: 4, fontWeight: 'bold' }}
                            onClick={() => navigate(-1)}>
                                Cancel
                            </RedButton>
                            <GreenButton
                                variant="contained"
                                size="large"
                                sx={{ px: 4, fontWeight: 'bold' }}
                                type="submit"
                            >
                                Submit
                            </GreenButton>
                        </Stack>
                    </Paper>
                    <Box sx={{ height: '70px' }} />
                </Box>
            </Box>
            <FormsBottomNavbar />
        </>
    );
};

export default SellYourProperty;
