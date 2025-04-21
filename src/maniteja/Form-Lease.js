import React, { useState, useRef } from 'react';
import {
    Box, Typography, TextField, Button, Select, MenuItem,
    InputLabel, FormControl, Paper, Stack, styled
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { GoogleMap, useJsApiLoader, LoadScript, Marker, Autocomplete } from '@react-google-maps/api';
import SearchBar from './FormsSearchBar';
import FormsBottomNavbar from './FormsBottomNavbar';
import { useNavigate } from 'react-router-dom';

const GOOGLE_MAPS_API_KEY = 'AIzaSyAZAU88Lr8CEkiFP_vXpkbnu1-g-PRigXU'; // Replace with your actual key

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
    '1BHK': ['Facing', 'Price', 'Parking', 'Approx Area'],
    '2BHK': ['Facing', 'Price', 'Parking', 'Approx Area'],
    '3BHK': ['Facing', 'Price', 'Parking', 'Approx Area'],
    '4+ BHK': ['Facing', 'Price', 'Parking', 'Approx Area'],
    'plot/land': ['Facing', 'Price', 'Approx Area'],
    'duplex house': ['Facing', 'Price', 'Parking', 'Approx Area'],
    'commercial land': ['Facing', 'Price', 'Approx Area'],
    'commercial building/space': ['Facing', 'Price', 'Parking', 'Approx Area', 'No.of floors'],
    'villa': ['Facing', 'Price', 'Parking', 'Approx Area'],
    'pg-school-office': ['Facing', 'Price', 'Parking', 'Approx Area', 'No.of floors', 'Rooms-Count'],
    'Shopping mall/shop': ['Facing', 'Price', 'Parking', 'Approx Area', 'No.of floors'],
};
const facingOptions = ['East', 'West', 'North', 'South', 'North-East', 'North-West', 'South-East', 'South-West'];

const LeaseForm = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: GOOGLE_MAPS_API_KEY,
        libraries: ['places'],
    });
    const [location, setLocation] = useState(centerDefault);
    const [address, setAddress] = useState('');
    const [formValues, setFormValues] = useState({});
    const [selectedCategory, setSelectedCategory] = useState('1BHK');
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

    const geocodeAddress = () => {
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

    const handleBackClick = () => {
        navigate(-1);
    };

    const handleSearchClick = () => {
        console.log('Search icon clicked');
    };

    const handleFilterClick = () => {
        console.log('Filter icon clicked');
    };
    const handleFieldChange = (label, value) => {
        setFormValues(prev => ({ ...prev, [label]: value }));
    };
    if (!isLoaded) {
        return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Typography>Loading Google Maps...</Typography>
        </Box>;
    }

    return (
        <>
            <SearchBar
                onBackClick={handleBackClick}
                onSearchClick={handleSearchClick}
                onFilterClick={handleFilterClick}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', pt: '64px', backgroundColor: 'rgb(239, 231, 221)', }}>
                <Box sx={{ flexGrow: 1, p: { xs: 2, sm: 3 }, pb: 12, maxWidth: 'md', mx: 'auto' }}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Lease Property Form
                    </Typography>

                    <Paper elevation={2} sx={{ p: { xs: 2, sm: 3 }, mb: 3 }}>
                        {/* Category Dropdown */}
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

                        {/* Dynamic Fields */}
                        {selectedCategory &&
                            categoryFields[selectedCategory].map((label) => (
                                label === 'Facing' ? (
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
                                ) : (
                                    <TextField
                                        key={label}
                                        fullWidth
                                        label={label}
                                        variant="outlined"
                                        sx={{ mb: 2 }}
                                        value={formValues[label] || ''}
                                        onChange={(e) => handleFieldChange(label, e.target.value)}
                                    />
                                )
                            ))}

                        {/* Location + Map */}
                        <Autocomplete
                            onLoad={(ref) => (autocompleteRef.current = ref)}
                            onPlaceChanged={onPlaceChanged}
                        >
                            <TextField
                                fullWidth
                                label="Location"
                                variant="outlined"
                                value={address}
                                onChange={e => setAddress(e.target.value)}
                                onBlur={geocodeAddress}
                                sx={{ mb: 2 }}
                            />
                        </Autocomplete>

                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={location}
                            zoom={15}
                        >
                            <Marker position={location} />
                        </GoogleMap>

                        {/* Upload Section */}
                        <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
                            Upload Images
                        </Typography>
                        <Button component="label" variant="outlined" startIcon={<CloudUploadIcon />} sx={{ mb: 3 }}>
                            Upload Image
                            <VisuallyHiddenInput type="file" multiple />
                        </Button>

                        {/* Description */}
                        <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>Description</Typography>
                        <TextField fullWidth variant="outlined" multiline rows={4} />

                        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 2 }}>
                            <RedButton variant="contained" size="large" sx={{ px: 4, fontWeight: 'bold' }}
                             onClick={() => navigate(-1)}>
                                Cancel
                            </RedButton>
                            <GreenButton variant="contained" size="large" sx={{ px: 4, fontWeight: 'bold' }}>
                                Submit
                            </GreenButton>
                        </Stack>
                    </Paper>
                </Box>

                {/* Bottom Spacer */}
                <Box sx={{ height: '70px' }} />
            </Box>

            <FormsBottomNavbar />
        </>
    );
};

export default LeaseForm;
