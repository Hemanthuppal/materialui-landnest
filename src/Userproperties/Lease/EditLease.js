import React, { useState, useRef, useContext, useEffect } from 'react';
import {
    Box, Typography, TextField, Button, Select, MenuItem,
    InputLabel, FormControl, Paper, Stack, styled
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { GoogleMap, useJsApiLoader, Marker, Autocomplete } from '@react-google-maps/api';
import SearchBar from '../../maniteja/FormsSearchBar';
import FormsBottomNavbar from '../../maniteja/FormsBottomNavbar';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { IconButton, InputAdornment } from '@mui/material';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import { AuthContext } from '../../AuthContext/AuthContext';
import { BASE_URL } from '../../Api/ApiUrls';
import ListSubheader from '@mui/material/ListSubheader';

const GOOGLE_MAPS_API_KEY = 'AIzaSyAZAU88Lr8CEkiFP_vXpkbnu1-g-PRigXU';

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

const fieldMap = {
    '1BHK': ['Property Name', 'Facing', 'Price', 'No.of Cars Parking', 'Approx Area'],
    '2BHK': ['Property Name', 'Facing', 'Price', 'No.of Cars Parking', 'Approx Area'],
    '3BHK': ['Property Name', 'Facing', 'Price', 'No.of Cars Parking', 'Approx Area'],
    '4+BHK': ['Property Name', 'Facing', 'Price', 'No.of Cars Parking', 'Approx Area'],
    'Plot/land': ['Property Name', 'Facing', 'Price', 'Approx Area'],
    'Duplex house': ['Property Name', 'Facing', 'Price', 'No.of Cars Parking', 'Approx Area'],
    'Commercial land': ['Property Name', 'Facing', 'Price', 'Approx Area'],
    'Commercial building/space': ['Property Name', 'Facing', 'Price', 'No.of Cars Parking', 'Approx Area', 'No.of floors'],
    'Villa': ['Property Name', 'Facing', 'Price', 'No.of Cars Parking', 'Approx Area'],
    'Pg-school-office': ['Property Name', 'Facing', 'Price', 'No.of Cars Parking', 'Approx Area', 'No.of floors', 'Rooms-Count'],
    'Shopping mall/shop': ['Property Name', 'Facing', 'Price', 'No.of Cars Parking', 'Approx Area', 'No.of floors'],
};

const facingOptions = ['East', 'West', 'North', 'South', 'North-East', 'North-West', 'South-East', 'South-West'];

const EditLeaseForm = () => {
    const { menuPropertyId } = useParams();
    console.log("menuPropertyId:", menuPropertyId);
    const [workPhotos, setWorkPhotos] = useState([]);
    const [existingImages, setExistingImages] = useState([]);
    const { userId, logout } = useContext(AuthContext);
    const [apiHitCount, setApiHitCount] = useState(0);
    const [usingCurrentLocation, setUsingCurrentLocation] = useState(false);
    const [postedBy, setPostedBy] = useState('');
    const [isLoading, setIsLoading] = useState(true);

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
    const [categories, setCategories] = useState([]);
    const [markerIcon, setMarkerIcon] = useState(null);

    useEffect(() => {
        if (isLoaded && window.google) {
            setMarkerIcon({
                url: "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22%23ff0000%22%20d%3D%22M12%202C8.13%202%205%205.13%205%209c0%205.25%207%2013%207%2013s7-7.75%207-13c0-3.87-3.13-7-7-7zm0%209.5c-1.38%200-2.5-1.12-2.5-2.5s1.12-2.5%202.5-2.5%202.5%201.12%202.5%202.5-1.12%202.5-2.5%202.5z%22%2F%3E%3C%2Fsvg%3E",
                scaledSize: new window.google.maps.Size(40, 40),
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(20, 40)
            });
        }
    }, [isLoaded]);

    const incrementApiHit = () => {
        setApiHitCount(prev => prev + 1);
        console.log(`Google Maps API hits: ${apiHitCount + 1}`);
    };

    const getCurrentLocation = () => {
        if (navigator.geolocation) {
            setUsingCurrentLocation(true);
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };
                    setLocation(pos);

                    try {
                        const response = await fetch(
                            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${pos.lat},${pos.lng}&key=${GOOGLE_MAPS_API_KEY}`
                        );
                        const data = await response.json();

                        if (data.status == 'OK' && data.results.length > 0) {
                            const address = data.results[0].formatted_address;
                            setAddress(address);
                        } else {
                            console.warn('No address found, fallback to coordinates.');
                            setAddress(`Lat: ${pos.lat.toFixed(6)}, Lng: ${pos.lng.toFixed(6)}`);
                        }
                    } catch (error) {
                        console.error('Google Maps API error:', error);
                        setAddress(`Lat: ${pos.lat.toFixed(6)}, Lng: ${pos.lng.toFixed(6)}`);
                    }
                },
                (error) => {
                    console.error("Error getting current location:", error);
                    alert("Error getting current location. Please enable location services.");
                }
            );
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    };

    const handleWorkPhotosChange = (e) => {
        if (e.target.files) {
            setWorkPhotos(Array.from(e.target.files));
        }
    };

    const handleMapClick = async (e) => {
        const lat = e.latLng.lat();
        const lng = e.latLng.lng();
        setLocation({ lat, lng });
        setUsingCurrentLocation(false);
        incrementApiHit();

        if (window.google && window.google.maps) {
            const geocoder = new window.google.maps.Geocoder();
            geocoder.geocode({ location: { lat, lng } }, (results, status) => {
                if (status == 'OK' && results[0]) {
                    setAddress(results[0].formatted_address);
                } else {
                    setAddress(`Lat: ${lat.toFixed(6)}, Lng: ${lng.toFixed(6)}`);
                }
            });
        }
    };

    useEffect(() => {
        const fetchPropertyData = async () => {
            try {
                // Fetch categories first
                const categoriesResponse = await axios.get(`${BASE_URL}/property-category/`);
                const rentCategories = categoriesResponse.data.filter(
                    cat => cat.category_type.toLowerCase() == 'rent/lease'
                );

                const customOrder = [
                    "1BHK", "2BHK", "3BHK", "4+BHK",
                    "Plot/land", "Duplex house", "Commercial land",
                    "Commercial building/space", "Villa",
                    "Pg-school-office", "Shopping mall/shop"
                ];

                const sortedCategories = rentCategories.sort((a, b) => {
                    return customOrder.indexOf(a.category) - customOrder.indexOf(b.category);
                });

                setCategories(sortedCategories);

                // Then fetch property data
                const propertyResponse = await axios.get(`${BASE_URL}/property/${menuPropertyId}/`);
                const propertyData = propertyResponse.data;
                console.log("data=",propertyData);

                // Find the category for this property
                const propertyCategory = sortedCategories.find(
                    cat => cat.category_id == propertyData.category_id
                );

                if (propertyCategory) {
                    setSelectedCategory(propertyCategory.category);
                }

                // Set location and address
                if (propertyData.lat && propertyData.long) {
                    setLocation({
                        lat: parseFloat(propertyData.lat),
                        lng: parseFloat(propertyData.long)
                    });
                }
                if (propertyData.location) {
                    setAddress(propertyData.location);
                }

                // Set form values
                const initialFormValues = {};
                const labelKeyMapReverse = {
                    'facing': 'Facing',
                    'price': 'Price',
                    'parking': 'No.of Cars Parking',
                    'site_area': 'Approx Area',
                    'no_of_flores': 'No.of floors',
                    'rooms_count': 'Rooms-Count',
                    'property_name': 'Property Name'
                };

                Object.entries(propertyData).forEach(([key, value]) => {
                    if (labelKeyMapReverse[key] && value !== null) {
                        initialFormValues[labelKeyMapReverse[key]] = value.toString();
                    }
                });

                setFormValues(initialFormValues);

                // Set form data
                setFormData({
                    user_id: userId,
                    category_id: propertyData.category_id,
                    facing: propertyData.facing || '',
                    mobile_no: propertyData.mobile_no || '',
                    roadwidth: propertyData.roadwidth || '',
                    site_area: propertyData.site_area || '',
                    buildup_area: propertyData.buildup_area || '',
                    posted_by: propertyData.posted_by || '',
                    price: propertyData.price || '',
                    location: propertyData.location || '',
                    lat: propertyData.lat || '',
                    long: propertyData.long || '',
                    nearby: propertyData.nearby || '',
                    no_of_flores: propertyData.no_of_flores || '',
                    _1bhk_count: propertyData._1bhk_count || '',
                    bedrooms_count: propertyData.bedrooms_count || '',
                    balcony: propertyData.balcony || '',
                    gated_security: propertyData.gated_security || '',
                    parking: propertyData.parking || '',
                    advance_payment: propertyData.advance_payment || '',
                    description: propertyData.description || ''
                });

                setPostedBy(propertyData.posted_by || '');

                // Set existing images
                if (propertyData.property_images && propertyData.property_images.length > 0) {
                    setExistingImages(propertyData.property_images);
                }

                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching property data:", error);
                setIsLoading(false);
            }
        };

        fetchPropertyData();
    }, [menuPropertyId, userId]);

    const groupedCategories = categories.reduce((acc, curr) => {
        const type = curr.category_type;
        if (!acc[type]) acc[type] = [];
        acc[type].push(curr);
        return acc;
    }, {});

    const [formData, setFormData] = useState({
        user_id: userId,
        category_id: '',
        facing: '',
        mobile_no: '',
        roadwidth: '',
        site_area: '',
        buildup_area: '',
        posted_by: '',
        mobile_no: '',
        price: '',
        location: '',
        lat: '',
        long: '',
        nearby: '',
        no_of_flores: '',
        _1bhk_count: '',
        bedrooms_count: '',
        balcony: '',
        gated_security: '',
        parking: '',
        advance_payment: '',
        description: ''
    });

    const handleChange = (event) => {
        const value = event.target.value;
        setPostedBy(value);
        setFormData((prevData) => ({
            ...prevData,
            posted_by: value
        }));
    };

    const onPlaceChanged = () => {
        if (autocompleteRef.current) {
            const place = autocompleteRef.current.getPlace();
            if (place && place.geometry) {
                incrementApiHit();
                setUsingCurrentLocation(false);
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
        if (!address) return;

        if (usingCurrentLocation) {
            return;
        }
        if (window.google && window.google.maps) {
            incrementApiHit();
            const geocoder = new window.google.maps.Geocoder();
            geocoder.geocode({ address }, (results, status) => {
                if (status == 'OK' && results[0]) {
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
        'Facing': 'facing',
        'Price': 'price',
        'No.of Cars Parking': 'parking',
        'Approx Area': 'site_area',
        'No.of floors': 'no_of_flores',
        'Rooms-Count': 'rooms_count',
        'Property Name': 'property_name'
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
        const key = labelKeyMap[label] || label;
        setFormValues(prev => ({ ...prev, [label]: value }));
        setFormData(prev => ({ ...prev, [key]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submission started.');

        const updatedFormData = {
            ...formData,
            lat: location.lat,
            long: location.lng,
            location: address,
            type: 'lease',
        };
        console.log('Updated formData with location:', updatedFormData);

        const formDataToSend = new FormData();

        // Append data fields
        Object.entries(updatedFormData).forEach(([key, value]) => {
            if (value !== null && value !== undefined) {
                formDataToSend.append(key, value);
            }
        });
        console.log('FormData fields appended.');

        // Append work photos
        workPhotos.forEach((file, index) => {
            formDataToSend.append('new_property_images', file);
            console.log(`Photo ${index + 1} appended:`, file.name);
        });

        try {
            console.log('Sending formData to API...');
            const response = await axios.put(`${BASE_URL}/property/${menuPropertyId}/`, formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('API response:', response);

            if (response.status == 200) {
                console.log('Property updated successfully!');
                alert('Property updated successfully!');
                navigate('/dashboard');
            } else {
                console.warn('Unexpected response status:', response.status);
                alert('Something went wrong. Try again.');
            }
        } catch (error) {
            console.error('Submission Error:', error);

            if (error.response) {
                console.error('Error response from server:', error.response.data);
                alert(`Error: ${error.response.data.message || 'Something went wrong'}`);
            } else {
                console.error('No server response. Possible network error.');
                alert('An error occurred while submitting. Please try again.');
            }
        }
    };

    const handleRemoveImage = (imageId) => {
        // This would need to call your API to delete the image
        console.log('Image to remove:', imageId);
        // You would typically make an API call here to delete the image
        // Then update the existingImages state
        setExistingImages(existingImages.filter(img => img.id !== imageId));
    };

    if (!isLoaded) {
        return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Typography>Loading Google Maps...</Typography>
        </Box>;
    }

    if (isLoading) {
        return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Typography>Loading property data...</Typography>
        </Box>;
    }

    return (
        <>
            <SearchBar
                onBackClick={handleBackClick}
                onSearchClick={handleSearchClick}
                onFilterClick={handleFilterClick}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', pt: '10px', backgroundColor: 'rgb(239, 231, 221)', }}>
                <Box sx={{ flexGrow: 1, p: { xs: 2, sm: 3 }, pb: 12, maxWidth: 'md', mx: 'auto' }}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Edit Lease Property
                    </Typography>

                    <Paper elevation={2} sx={{ p: { xs: 2, sm: 3 }, mb: 3 }} component="form" onSubmit={handleSubmit}>
                        <FormControl fullWidth sx={{ mb: 3 }}>
                            <InputLabel id="category-label">Select Category</InputLabel>
                            <Select
                                labelId="category-label"
                                value={selectedCategory}
                                onChange={(e) => {
                                    const selected = categories.find(cat => cat.category == e.target.value);
                                    setSelectedCategory(selected.category);
                                    setFormData(prev => ({
                                        ...prev,
                                        category_id: selected.category_id,
                                        type: selected.category_type,
                                    }));
                                }}
                                label="Select Category"
                            >
                                {Object.entries(groupedCategories).map(([type, items]) => [
                                    ...items.map(cat => (
                                        <MenuItem key={cat.category_id} value={cat.category}>
                                            {cat.category}
                                        </MenuItem>
                                    ))
                                ])}
                            </Select>
                        </FormControl>

                        {selectedCategory &&
                            fieldMap[selectedCategory]?.map((label) => (
                                label == 'Facing' ? (
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
                            ))
                        }

                        {/* Location Section */}
                        <Box sx={{ mb: 2 }}>
                            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                                Location
                            </Typography>

                            <Autocomplete
                                onLoad={(ref) => (autocompleteRef.current = ref)}
                                onPlaceChanged={onPlaceChanged}
                            >
                                <TextField
                                    fullWidth
                                    label="Search Location"
                                    variant="outlined"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    onBlur={geocodeAddress}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton onClick={getCurrentLocation} edge="end">
                                                    <MyLocationIcon />
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Autocomplete>
                        </Box>

                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={location}
                            zoom={15}
                            onClick={handleMapClick}
                        >
                            {markerIcon && (
                                <Marker
                                    position={location}
                                    icon={markerIcon}
                                />
                            )}
                        </GoogleMap>

                        {/* Upload Section */}
                        <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
                            Property Images
                        </Typography>

                        {/* Display existing images */}
                        {existingImages.length > 0 && (
                            <Box sx={{ mb: 2 }}>
                                <Typography variant="subtitle2">Current Images:</Typography>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                                    {existingImages.map((image) => (
                                        <Box key={image.id} sx={{ position: 'relative' }}>
                                            <img
                                                src={`${BASE_URL}${image.image}`}
                                                alt="Property"
                                                style={{ width: 100, height: 100, objectFit: 'cover' }}
                                            />
                                            <Button
                                                size="small"
                                                color="error"
                                                sx={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    right: 0,
                                                    minWidth: 'auto',
                                                    p: 0.5,
                                                    backgroundColor: 'rgba(255, 0, 0, 0.7)'
                                                }}
                                                onClick={() => handleRemoveImage(image.id)}
                                            >
                                                ×
                                            </Button>
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                        )}

                        <Button component="label" variant="outlined" startIcon={<CloudUploadIcon />} fullWidth sx={{ mb: 3 }}>
                            Upload New Images
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

                        <FormControl fullWidth margin="normal">
                            <InputLabel id="posted-by-label">Posted By</InputLabel>
                            <Select
                                labelId="posted-by-label"
                                value={postedBy}
                                label="Posted by"
                                onChange={handleChange}
                            >
                                <MenuItem value="Owner">Owner</MenuItem>
                                <MenuItem value="Agent">Agent</MenuItem>
                                <MenuItem value="Builder">Builder</MenuItem>
                            </Select>
                        </FormControl>

                        {/* Description */}
                        <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>Description</Typography>
                        <TextField
                            fullWidth
                            variant="outlined"
                            multiline
                            rows={4}
                            value={formData.description || ''}
                            onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                        />

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
                                Update Property
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

export default EditLeaseForm;