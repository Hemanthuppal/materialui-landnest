import React, { useState, useRef } from 'react';
import {
    Box, Typography, TextField, Button, Select, MenuItem,
    InputLabel, FormControl, Paper, Stack, styled
} from '@mui/material';
import { GoogleMap, LoadScript, Marker, Autocomplete } from '@react-google-maps/api';

const GOOGLE_MAPS_API_KEY = 'AIzaSyAZAU88Lr8CEkiFP_vXpkbnu1-g-PRigXU'; // Replace with your actual API key

const containerStyle = {
    width: '100%',
    height: '300px',
};

const centerDefault = {
    lat: 18.387449,
    lng: 78.803236,
};


const RedButton = styled(Button)({
    backgroundColor: 'red',
    color: 'white',
    '&:hover': { backgroundColor: '#cc0000' },
});
const BlueButton = styled(Button)({
    backgroundColor: '#4da6ff',
    color: 'white',
    '&:hover': { backgroundColor: '#3399ff' },
});

const PostYourBestDeal = () => {
    const [location, setLocation] = useState(centerDefault);
    const [address, setAddress] = useState('');
    const autocompleteRef = useRef(null);

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

    return (
        <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY} libraries={['places']}>
            <Box sx={{ p: { xs: 2, sm: 3 }, maxWidth: 'md', mx: 'auto' }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Post Your Best Deal
                </Typography>

                <Paper elevation={2} sx={{ p: { xs: 2, sm: 3 }, mb: 3 }}>
                   

                    <TextField fullWidth label="Property Type" variant="outlined" sx={{ mb: 2 }} />
                    <TextField fullWidth label="Budget" variant="outlined" sx={{ mb: 2 }} />


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

                    {/* Map with marker */}
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={location}
                        zoom={15}
                    >
                        <Marker position={location} />
                    </GoogleMap>

                    <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>Description</Typography>
                    <TextField fullWidth variant="outlined" multiline rows={4} />
                </Paper>

                <Stack direction="row" spacing={2} justifyContent="center">
                    <RedButton variant="contained" size="large" sx={{ px: 4, fontWeight: 'bold' }}>Cancel</RedButton>
                    <BlueButton variant="contained" size="large" sx={{ px: 4, fontWeight: 'bold' }}>SUBMIT</BlueButton>
                </Stack>
            </Box>
        </LoadScript>
    );
};

export default PostYourBestDeal;