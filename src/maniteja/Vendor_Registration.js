import React, { useState, useRef } from 'react';
import {
    Box, Typography, TextField, Button, Select, MenuItem,
    InputLabel, FormControl, Paper, Stack, styled
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { GoogleMap, LoadScript, Marker, Autocomplete } from '@react-google-maps/api';
import SearchBar from './FormsSearchBar';
import FormsBottomNavbar from './FormsBottomNavbar';
import { useNavigate } from 'react-router-dom';

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

const VendorRegister = () => {
    const [location, setLocation] = useState(centerDefault);
    const [address, setAddress] = useState('');
    const autocompleteRef = useRef(null);
    const navigate = useNavigate();

    // Handles when a place is selected from the dropdown
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

    // Fallback: Geocode manual address input
    const geocodeAddress = async () => {
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

    const handleBackClick = () => {
        navigate(-1);
    };

    const handleSearchClick = () => {
        console.log('Search icon clicked');
    };

    const handleFilterClick = () => {
        console.log('Filter icon clicked');
    };

    return (
        <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY} libraries={['places']}>
            <SearchBar
                onBackClick={handleBackClick}
                onSearchClick={handleSearchClick}
                onFilterClick={handleFilterClick}
            />
            <Box sx={{ p: { xs: 2, sm: 3 }, maxWidth: 'md', mx: 'auto' }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Vendor Registration
                </Typography>

                <Paper elevation={2} sx={{ p: { xs: 2, sm: 3 }, mb: 3 }}>
                    {/* <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>Category</Typography> */}
                    <FormControl fullWidth sx={{ mb: 3 }}>
                        <InputLabel id="category-label">Select Category</InputLabel>
                        <Select labelId="category-label" label="Select Category" defaultValue="Plumbing">
                            <MenuItem value="Plumbing">Plumbing</MenuItem>
                            <MenuItem value="Electrical">Electrical</MenuItem>
                            <MenuItem value="Carpentry">Carpentry</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField fullWidth label="Name" variant="outlined" sx={{ mb: 2 }} />
                    <TextField fullWidth label="Mobile" variant="outlined" sx={{ mb: 2 }} />
                    <TextField fullWidth label="Email" variant="outlined" sx={{ mb: 2 }} />
                    <TextField fullWidth label="Address" variant="outlined" sx={{ mb: 2 }} />

                    <Autocomplete
                        onLoad={ref => (autocompleteRef.current = ref)}
                        onPlaceChanged={onPlaceChanged}
                    >
                        <TextField
                            fullWidth
                            variant="outlined"
                            value={address}
                            onChange={e => setAddress(e.target.value)}
                            onBlur={geocodeAddress}
                            sx={{ mb: 2 }}
                        />
                    </Autocomplete>

                    {/* Map with marker */}
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={location}
                        zoom={15}
                    >
                        <Marker position={location} />
                    </GoogleMap>
                   
                    <TextField fullWidth label="Work Experience" variant="outlined" sx={{ mb: 2, mt:3}} />

                    {/* Upload Section */}
                    <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Profile Photo
                    </Typography>
                    <Button component="label" variant="outlined" startIcon={<CloudUploadIcon />} sx={{ mb: 3 }}>
                        Upload Profile Photo
                        <VisuallyHiddenInput type="file" multiple />
                    </Button>

                    <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Previous Worked Photos
                    </Typography>
                    <Button component="label" variant="outlined" startIcon={<CloudUploadIcon />} sx={{ mb: 3 }}>
                        Upload Previous Photos
                        <VisuallyHiddenInput type="file" multiple />
                    </Button>


                    <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>Description</Typography>
                    <TextField fullWidth variant="outlined" multiline rows={4} />
                    <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 2 }}>
                        <RedButton variant="contained" size="large" sx={{ px: 4, fontWeight: 'bold' }}>
                            Cancel
                        </RedButton>
                        <GreenButton variant="contained" size="large" sx={{ px: 4, fontWeight: 'bold' }}>
                            Submit
                        </GreenButton>
                    </Stack>
                </Paper>
                <Box sx={{ height: '70px' }} />
            </Box>
            <FormsBottomNavbar />
        </LoadScript>
    );
};

export default VendorRegister;


