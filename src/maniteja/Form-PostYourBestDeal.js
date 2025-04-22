import React, { useState, useRef } from 'react';
import {
    Box, Typography, TextField, Button, Paper, Stack, styled
} from '@mui/material';
import { GoogleMap, useJsApiLoader, Marker, Autocomplete } from '@react-google-maps/api';
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

// ✅ Styled buttons
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
const PostYourBestDeal = () => {
     const { isLoaded } = useJsApiLoader({
                id: 'google-map-script',
                googleMapsApiKey: GOOGLE_MAPS_API_KEY,
                libraries: ['places'],
            });
    const [location, setLocation] = useState(centerDefault);
    const [address, setAddress] = useState('');
    const autocompleteRef = useRef(null);
    const navigate = useNavigate();

    // ✅ Handle selection from Google Places dropdown
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

    // ✅ Handle manual address entry
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

    // ✅ Optional callback handlers for SearchBar
    const handleBackClick = () => {
        navigate(-1);
    };

    const handleSearchClick = () => {
        console.log('Search icon clicked');
    };

    const handleFilterClick = () => {
        console.log('Filter icon clicked');
    };
     if (!isLoaded) {
                return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <Typography>Loading Google Maps...</Typography>
                </Box>;
            }

    return (
        <>
            {/* ✅ Add SearchBar at the top */}
            <SearchBar
                onBackClick={handleBackClick}
                onSearchClick={handleSearchClick}
                onFilterClick={handleFilterClick}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', pt:'64px', backgroundColor: 'rgb(239, 231, 221)' }}>
            <Box sx={{ p: { xs: 2, sm: 3 }, maxWidth: 'md', mx: 'auto' }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Post Your Best Deal
                </Typography>

                <Paper elevation={2} sx={{ p: { xs: 2, sm: 3 }, mb: 3 }}>
                    {/* ✅ Basic Input Fields */}
                    <TextField fullWidth label="Property Type" variant="outlined" sx={{ mb: 2 }} />
                    <TextField fullWidth label="Budget" variant="outlined" sx={{ mb: 2 }} />

                    {/* ✅ Location Search using Google Autocomplete */}
                    <Autocomplete
                        onLoad={ref => (autocompleteRef.current = ref)}
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

                    {/* ✅ Google Map and Marker */}
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={location}
                        zoom={15}
                    >
                        <Marker position={location} />
                    </GoogleMap>

                    <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Description
                    </Typography>
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
                <Box sx={{ height: '70px' }} />

            </Box>
            </Box>
            <FormsBottomNavbar />
        </>
    );
};

export default PostYourBestDeal;
