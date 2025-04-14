import React, { useState, useRef } from 'react';
import {
    Box, Typography, TextField, Button, Select, MenuItem,
    InputLabel, FormControl, Paper, Stack, styled
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { GoogleMap, LoadScript, Marker, Autocomplete } from '@react-google-maps/api';

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
    'plot/land': ['Facing', 'Price',  'Approx Area'],
    'duplex house': ['Facing', 'Price', 'Parking', 'Approx Area'],
    'commercial land': ['Facing', 'Price',  'Approx Area'],
    'commercial building/space': ['Facing', 'Price', 'Parking', 'Approx Area','No.of floors'],
    'villa': ['Facing', 'Price', 'Parking', 'Approx Area'],
    'pg-school-office': ['Facing', 'Price', 'Parking', 'Approx Area','No.of floors','Rooms-Count'],
    'Shopping mall/shop': ['Facing', 'Price', 'Parking', 'Approx Area','No.of floors'],
};

const LeaseForm = () => {
    const [location, setLocation] = useState(centerDefault);
    const [address, setAddress] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const autocompleteRef = useRef(null);

    const onPlaceChanged = () => {
        const place = autocompleteRef.current.getPlace();
        if (place && place.geometry) {
            const newLoc = {
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng(),
            };
            setLocation(newLoc);
            setAddress(place.formatted_address);
        }
    };

    const geocodeAddress = () => {
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
    };

    return (
        <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY} libraries={['places']}>
            <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Box sx={{ flexGrow: 1, p: { xs: 2, sm: 3 }, pb: 10, maxWidth: 'md', mx: 'auto' }}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Rent Property Form
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
                                <TextField
                                    key={label}
                                    fullWidth
                                    label={label}
                                    variant="outlined"
                                    sx={{ mb: 2 }}
                                />
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
                    </Paper>

                    {/* Action Buttons */}
                    <Stack direction="row" spacing={2} justifyContent="center">
                        <RedButton variant="contained" size="large" sx={{ px: 4, fontWeight: 'bold' }}>Cancel</RedButton>
                        <GreenButton variant="contained" size="large" sx={{ px: 4, fontWeight: 'bold' }}>Submit</GreenButton>
                    </Stack>
                </Box>
            </Box>
        </LoadScript>
    );
};

export default LeaseForm ;