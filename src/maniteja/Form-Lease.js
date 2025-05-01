import React, { useState, useRef, useContext, useEffect } from 'react';
import {
    Box, Typography, TextField, Button, Select, MenuItem,
    InputLabel, FormControl, Paper, Stack, styled
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { GoogleMap, useJsApiLoader, LoadScript, Marker, Autocomplete } from '@react-google-maps/api';
import SearchBar from './FormsSearchBar';
import FormsBottomNavbar from './FormsBottomNavbar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IconButton, InputAdornment } from '@mui/material';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import { AuthContext  } from '../AuthContext/AuthContext';
import {BASE_URL} from './../Api/ApiUrls'; 
import ListSubheader from '@mui/material/ListSubheader';

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

const fieldMap  = {
    '1BHK': ['Facing', 'Price', 'Parking', 'Approx Area'],
    '2BHK': ['Facing', 'Price', 'Parking', 'Approx Area'],
    '3BHK': ['Facing', 'Price', 'Parking', 'Approx Area'],
    '4+ BHK': ['Facing', 'Price', 'Parking', 'Approx Area'],
    'plot/land': ['Facing', 'Price', 'Approx Area'],
    'duplex house': ['Facing', 'Price', 'Parking', 'Approx Area'],
    'commercial land': ['Facing', 'Price', 'Approx Area'],
    'commercial building/space': ['Facing', 'Price', 'Parking', 'Approx Area', 'No.of floors'],
    'Villa': ['Facing', 'Price', 'Parking', 'Approx Area'],
    'pg-school-office': ['Facing', 'Price', 'Parking', 'Approx Area', 'No.of floors', 'Rooms-Count'],
    'Shopping mall/shop': ['Facing', 'Price', 'Parking', 'Approx Area', 'No.of floors'],
}; 
const facingOptions = ['East', 'West', 'North', 'South', 'North-East', 'North-West', 'South-East', 'South-West'];

const LeaseForm = () => {

    const [workPhotos, setWorkPhotos] = useState([]);
    const { userId, logout } = useContext(AuthContext);
     const [apiHitCount, setApiHitCount] = useState(0);
    const [usingCurrentLocation, setUsingCurrentLocation] = useState(false);

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: GOOGLE_MAPS_API_KEY,
        libraries: ['places'],
    });
    const [location, setLocation] = useState(centerDefault);
    const [address, setAddress] = useState('');
    const [formValues, setFormValues] = useState({});
    const [selectedCategory, setSelectedCategory] = useState('Villa');
    const autocompleteRef = useRef(null);
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);

    
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
      
                if (data.status === 'OK' && data.results.length > 0) {
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
        incrementApiHit(); // Clicking on map uses Google Maps API

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
        axios.get('http://46.37.122.105:89/property-category/')
            .then(response => {
                const rentCategories = response.data.filter(
                    cat => cat.category_type.toLowerCase() == 'rent/lease'
                );
                setCategories(rentCategories);
            })
            .catch(error => {
                console.error("Error fetching categories:", error);
            });
    }, []);

    const groupedCategories = categories.reduce((acc, curr) => {
        const type = curr.category_type;
        if (!acc[type]) acc[type] = [];
        acc[type].push(curr);
        return acc;
    }, {});
    
    

    const [formData, setFormData] = useState({
        user_id: userId, // This should probably come from user auth
        category_id: '2', // This should be mapped from your category selection
        type: 'lease', // or 'sell' based on your form
        facing: '',
        mobile_no: '',
        roadwidth: '',
        site_area: '',
        buildup_area: '',
        list: 'Owner',
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
        advance_payment: ''
    });

    useEffect(() => {
            const fetchMobileNo = async () => {
                try {
                    const response = await axios.get(`http://46.37.122.105:89/users/`);
                    const users = response.data;
                    
                    console.log('All users from API:', users);
                    console.log('Current userId:', userId);
        
                    const matchedUser = users.find(user => user.user_id == userId);
                    
                    if (matchedUser) {
                        setFormData((prevData) => ({
                            ...prevData,
                            mobile_no: matchedUser.mobile_no,
                        }));
                        console.log('Fetched and set mobile_no:', matchedUser.mobile_no);
                    } else {
                        console.warn(`User with ID ${userId} not found`);
                    }
                } catch (error) {
                    console.error('Error fetching mobile_no:', error);
                }
            };
        
            if (userId) {
                fetchMobileNo();
            }
        }, [userId]);

    const onPlaceChanged = () => {
        if (autocompleteRef.current) {
            const place = autocompleteRef.current.getPlace();
            if (place && place.geometry) {
                incrementApiHit(); // This uses Google Maps API
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
            // Don't use API if we're using current location
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
        'Parking': 'parking',
        'Approx Area': 'site_area',
        'No.of floors': 'no_of_flores',
        'Rooms-Count': 'rooms_count', // or whatever field matches
        // Add others as needed
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
        const key = labelKeyMap[label] || label; // fallback to label if not in map
        setFormValues(prev => ({ ...prev, [label]: value }));
        setFormData(prev => ({ ...prev, [key]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submission started.');
    
        // Update lat & long from selected location
        const updatedFormData = {
            ...formData,
            lat: location.lat,
            long: location.lng,
            location: address, // Optional, depending on your backend
        };
        console.log('Updated formData with location:', updatedFormData);
    
        const formDataToSend = new FormData();
    
        // Append data fields
        Object.entries(updatedFormData).forEach(([key, value]) => {
            formDataToSend.append(key, value);
        });
        console.log('FormData fields appended.');
    
        // Append work photos
        workPhotos.forEach((file, index) => {
            formDataToSend.append('new_property_images', file);
            console.log(`Photo ${index + 1} appended:`, file.name);
        });
    
        try {
            console.log('Sending formData to API...');
            const response = await axios.post('http://46.37.122.105:89/property/', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
    
            console.log('API response:', response);
    
            if (response.status == 201 || response.status == 200) {
                console.log('Property submitted successfully!');
                alert('Property submitted successfully!');
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
            <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', pt: '10px', backgroundColor: 'rgb(239, 231, 221)', }}>
                <Box sx={{ flexGrow: 1, p: { xs: 2, sm: 3 }, pb: 12, maxWidth: 'md', mx: 'auto' }}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Lease Property Form
                    </Typography>

                    <Paper elevation={2} sx={{ p: { xs: 2, sm: 3 }, mb: 3 }} component="form" onSubmit={handleSubmit}>
                    <FormControl fullWidth sx={{ mb: 3 }}>
    <InputLabel id="category-label">Select Category</InputLabel>
    <Select
        labelId="category-label"
        value={selectedCategory}
        onChange={(e) => {
            const selected = categories.find(cat => cat.category == e.target.value);
            setSelectedCategory(selected.category); // show category name in dropdown
            setFormData(prev => ({
                ...prev,
                category_id: selected.category_id,
                type: selected.category_type,
            }));
        }}
        label="Select Category"
    >
        {Object.entries(groupedCategories).map(([type, items]) => [
            // Optional: group headers
            // <ListSubheader key={type}>{type.toUpperCase()}</ListSubheader>,
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

    {/* <Typography variant="caption" sx={{ alignSelf: 'center', mt: 1, display: 'block' }}>
        {usingCurrentLocation ? "Using browser geolocation" : "Using Google Maps API"}
    </Typography> */}
</Box>

                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={location}
                            zoom={15}
                            onClick={handleMapClick}
                        >
                            <Marker position={location} />
                        </GoogleMap>

                        {/* Upload Section */}
                        <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
                            Upload Images
                        </Typography>
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
                        <TextField fullWidth variant="outlined" multiline rows={4} />

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
                </Box>

                {/* Bottom Spacer */}
                <Box sx={{ height: '70px' }} />
            </Box>

            <FormsBottomNavbar />
        </>
    );
};

export default LeaseForm;
