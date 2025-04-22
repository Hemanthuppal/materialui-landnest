import React, { useState, useRef } from 'react';
import {
    Box, Typography, TextField, Button, Select, MenuItem,
    InputLabel, FormControl, Paper, Stack, styled
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
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
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: GOOGLE_MAPS_API_KEY,
        libraries: ['places'],
    });
    
    const [formData, setFormData] = useState({
        name: '',
        profession: 'Plumbing',
        mobile: '',
        email: '',
        address: '',
        experience: '',
        description: ''
    });
    
    const [profilePhoto, setProfilePhoto] = useState(null);
    const [workPhotos, setWorkPhotos] = useState([]);
    const [location, setLocation] = useState(centerDefault);
    const autocompleteRef = useRef(null);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleProfilePhotoChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setProfilePhoto(e.target.files[0]);
        }
    };

    const handleWorkPhotosChange = (e) => {
        if (e.target.files) {
            setWorkPhotos(Array.from(e.target.files));
        }
    };

    const onPlaceChanged = () => {
        if (autocompleteRef.current) {
            const place = autocompleteRef.current.getPlace();
            if (place && place.geometry) {
                const newLoc = {
                    lat: place.geometry.location.lat(),
                    lng: place.geometry.location.lng(),
                };
                setLocation(newLoc);
                setFormData(prev => ({
                    ...prev,
                    address: place.formatted_address
                }));
            }
        }
    };

    const geocodeAddress = async () => {
        if (window.google && window.google.maps) {
            const geocoder = new window.google.maps.Geocoder();
            geocoder.geocode({ address: formData.address }, (results, status) => {
                if (status === 'OK' && results[0]) {
                    const location = results[0].geometry.location;
                    setLocation({
                        lat: location.lat(),
                        lng: location.lng(),
                    });
                    setFormData(prev => ({
                        ...prev,
                        address: results[0].formatted_address
                    }));
                } else {
                    alert('Address could not be located. Please check input.');
                }
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formDataToSend = new FormData();
        
        // Append all form data
        Object.keys(formData).forEach(key => {
            formDataToSend.append(key, formData[key]);
        });
        
        // Append profile photo if exists
        if (profilePhoto) {
            formDataToSend.append('profile', profilePhoto);
        }
        
        // Append work photos if exists
        workPhotos.forEach((photo, index) => {
            formDataToSend.append(`new_work_images`, photo);
        });
        
        try {
            const response = await fetch('http://46.37.122.105:89/vendors/', {
                method: 'POST',
                body: formDataToSend,
                // Don't set Content-Type header when using FormData
                // The browser will set it automatically with the correct boundary
            });
            
            if (response.ok) {
                const data = await response.json();
                console.log('Success:', data);
                alert('Vendor registered successfully!');
                navigate('/'); // Redirect to home or another page
            } else {
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error submitting form. Please try again.');
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
            <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', pt:'64px', backgroundColor: 'rgb(239, 231, 221)'}}>
                <Box sx={{ p: { xs: 2, sm: 3 }, maxWidth: 'md', mx: 'auto' }}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Vendor Registration
                    </Typography>

                    <Paper elevation={2} sx={{ p: { xs: 2, sm: 3 }, mb: 3 }} component="form" onSubmit={handleSubmit}>
                        <FormControl fullWidth sx={{ mb: 3 }}>
                            <InputLabel id="category-label">Select Profession</InputLabel>
                            <Select
                                labelId="category-label"
                                label="Select Profession"
                                name="profession"
                                value={formData.profession}
                                onChange={handleInputChange}
                            >
                                <MenuItem value="Plumbing">Plumbing</MenuItem>
                                <MenuItem value="Electrical">Electrical</MenuItem>
                                <MenuItem value="Carpentry">Carpentry</MenuItem>
                            </Select>
                        </FormControl>

                        <TextField
                            fullWidth
                            label="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            variant="outlined"
                            sx={{ mb: 2 }}
                            required
                        />
                        <TextField
                            fullWidth
                            label="Mobile"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleInputChange}
                            variant="outlined"
                            sx={{ mb: 2 }}
                            required
                        />
                        <TextField
                            fullWidth
                            label="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            variant="outlined"
                            sx={{ mb: 2 }}
                            required
                        />

                        <Autocomplete
                            onLoad={ref => (autocompleteRef.current = ref)}
                            onPlaceChanged={onPlaceChanged}
                        >
                            <TextField
                                fullWidth
                                variant="outlined"
                                label="Address"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                onBlur={geocodeAddress}
                                sx={{ mb: 2 }}
                                required
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
                       
                        <TextField
                            fullWidth
                            label="Work Experience (years)"
                            name="experience"
                            type="number"
                            value={formData.experience}
                            onChange={handleInputChange}
                            variant="outlined"
                            sx={{ mb: 2, mt: 3 }}
                            required
                        />

                        {/* Upload Section */}
                        <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                            Profile Photo
                        </Typography>
                        <Button component="label" variant="outlined" startIcon={<CloudUploadIcon />} fullWidth sx={{ mb: 3 }}>
                            Upload Profile Photo
                            <VisuallyHiddenInput
                                type="file"
                                accept="image/*"
                                onChange={handleProfilePhotoChange}
                            />
                        </Button>
                        {profilePhoto && (
                            <Typography variant="caption" display="block" gutterBottom>
                                Selected: {profilePhoto.name}
                            </Typography>
                        )}

                        <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                            Previous Worked Photos
                        </Typography>
                        <Button component="label" variant="outlined" startIcon={<CloudUploadIcon />} fullWidth sx={{ mb: 3 }}>
                            Upload Previous Photos
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

                        <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>Description</Typography>
                        <TextField
                            fullWidth
                            variant="outlined"
                            multiline
                            rows={4}
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                        />
                        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 2 }}>
                            <RedButton
                                variant="contained"
                                size="large"
                                sx={{ px: 4, fontWeight: 'bold' }}
                                onClick={() => navigate(-1)}
                            >
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

export default VendorRegister;