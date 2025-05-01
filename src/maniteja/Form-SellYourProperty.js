import React, { useState, useRef, useContext, useEffect } from 'react';
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
import { IconButton, InputAdornment } from '@mui/material';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import { AuthContext  } from '../AuthContext/AuthContext';
import {BASE_URL} from './../Api/ApiUrls';

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

// const fieldMap = {
//     'Commercial land/plot': ['Site Area', 'Facing', 'List', 'Price', 'Roadwidth'],
//     'plot/land': ['Site Area', 'Facing', 'List', 'Price', 'Roadwidth'],
//     'rent with duplex building': ['Site Area', 'Facing', 'List', 'Price', 'No of floors', 'Buildup area', 'Borewell', 'Parking', '1bhk-count', '2bhk-count', 'Duplex bedrooms', 'Roadwidth'],
//     'duplex house': ['Site Area', 'Facing', 'List', 'Price', 'No of floors', 'Buildup area', 'Borewell', 'Parking', 'Duplex bedrooms', 'Roadwidth'],
//     'rental building': ['Site Area', 'Facing', 'List', 'Price', 'No of floors', 'Buildup area', 'Borewell', 'Parking', '1bhk-count', '2bhk-count', '3bhk-count', 'Roadwidth'],
//     'pg-offices': ['Site Area', 'Facing', 'List', 'Price', 'Rooms-count', 'Floors', 'Borewell', 'Parking', 'Roadwidth'],
//     'flat': ['Site Area', 'Facing', 'List', 'Price', 'Bedrooms-count', 'Parking', 'Borewell', 'Roadwidth'],
//     'villa': ['Site Area', 'Facing', 'List', 'Price', 'Bedrooms-count', 'Parking', 'Borewell', 'Floors', 'Roadwidth'],
//     'commercial building': ['Site Area', 'Facing', 'List', 'Price', 'Shop-count', 'Parking', 'Borewell', 'Floors', 'Roadwidth'],
//     'Apartment': ['Site Area', 'Facing', 'List', 'Price', 'Parking', 'Borewell', 'House-count', '1bhk', '2bhk', '3bhk', '4bhk', 'Roadwidth'],
//     'others': ['Price', 'Roadwidth'],
// };

const fieldMap = {
    'Commercial land/plot': ['Site Area', 'Facing',  'Price', 'Roadwidth'],
    'Plot/land': ['Site Area', 'Facing',  'Price', 'Roadwidth'],
    'Rent with duplex building': ['Property Name', 'Site Area', 'Facing', 'Price', 'No of floors', 'Buildup area', 'Borewell', 'Parking', '1bhk-count', '2bhk-count', 'Duplex bedrooms', 'Roadwidth'],
    'Duplex house': ['Property Name', 'Site Area', 'Facing',  'Price', 'No of floors', 'Buildup area', 'Borewell', 'Parking', 'Duplex bedrooms', 'Roadwidth'],
    'Rental building': ['Property Name', 'Site Area', 'Facing', 'Price', 'No of floors', 'Buildup area', 'Borewell', 'Parking', '1bhk-count', '2bhk-count', '3bhk-count', 'Roadwidth'],
    'Pg-offices': ['Property Name', 'Site Area', 'Facing',  'Price', 'Rooms-count', 'Floors', 'Borewell', 'Parking', 'Roadwidth', 'Buildup area'],
    'Flat': ['Property Name', 'Site Area', 'Facing',  'Price', 'No.of Bedrooms', 'Parking', 'Borewell', 'Roadwidth', 'Buildup area'],
    'Villa': ['Property Name', 'Site Area', 'Facing', 'Price', 'No.of Bedrooms', 'Parking', 'Borewell', 'Floors', 'Roadwidth', 'Buildup area'],
    'Commercial building': ['Property Name', 'Site Area', 'Facing',  'Price', 'Shop-count', 'Parking', 'Borewell', 'Floors', 'Roadwidth', 'Buildup area'],
    'Apartment': ['Property Name', 'Site Area', 'Facing',  'Price', 'Parking', 'Borewell', 'House-count', '1bhk', '2bhk', '3bhk', '4bhk', 'Roadwidth', 'Buildup area'],
    'Others': ['Price', 'Roadwidth'],
};

const facingOptions = ['East', 'West', 'North', 'South', 'North-East', 'North-West', 'South-East', 'South-West'];

const SellYourProperty = () => {
    const [workPhotos, setWorkPhotos] = useState([]);
    const { userId, logout } = useContext(AuthContext);
    const [apiHitCount, setApiHitCount] = useState(0);
    const [usingCurrentLocation, setUsingCurrentLocation] = useState(false);

    const handleWorkPhotosChange = (e) => {
        if (e.target.files) {
            setWorkPhotos(Array.from(e.target.files));
        }
    };
    
    const [formData, setFormData] = useState({
        user_id: userId,
        category_id: '1', 
        type: 'sell',
        mobile_no: '',
        facing: '',
        roadwidth: '',
        site_area: '',
        buildup_area: '',
        list: 'Owner',
        price: '',
        borewell: '',
        location: '',
        lat: '',
        long: '',
        units: 'ft', // Add this line
        nearby: 'Gandi Hospital',
        length: '',
        width: '',
        no_of_flores: '',
        _1bhk_count: '',
        _2bhk_count: '',
        _3bhk_count: '',
        _4bhk_count: '',
        bedrooms_count: '',
        bathrooms_count: '4',
        balcony: '',
        gated_security: 'yes',
        parking: '',
        advance_payment: '',
        duplex_bedrooms: '',
        power_backup: 'yes',
        rooms_count: '',
        shop_count: '',
        house_count: '',
        property_name: ''
    });

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: GOOGLE_MAPS_API_KEY,
        libraries: ['places'],
    });
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

    const [location, setLocation] = useState(centerDefault);
    const [address, setAddress] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Apartment');
    const [formValues, setFormValues] = useState({});
    const autocompleteRef = useRef(null);
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);

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
    
    
    // Track API hits
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
            // Don't use API if we're using current location
            return;
        }

        if (window.google && window.google.maps) {
            incrementApiHit(); // This uses Google Maps API
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
        'Roadwidth': 'roadwidth',
        'Length': 'length',
        'Width': 'width',
        'Property Name': 'property_name'
    };

    const handleBackClick = () => navigate(-1);

    const handleFieldChange = (label, value) => {
        const key = labelKeyMap[label] || label;
        setFormValues(prev => ({ ...prev, [label]: value }));
        setFormData(prev => ({ ...prev, [key]: value }));
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
        axios.get('http://46.37.122.105:89/property-category/')
            .then(response => {
                const rentCategories = response.data.filter(
                    cat => cat.category_type.toLowerCase() == 'sell'
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        console.log('Form submission initiated');
        console.log('Current formData:', formData);
        console.log('Location:', location);
        console.log('Address:', address);
        console.log('Work photos count:', workPhotos.length);
    
        // Calculate site area in original units
        const length = parseFloat(formData.length) || 0;
        const width = parseFloat(formData.width) || 0;
        const site_area = length * width;
    
        console.log('Length:', length, formData.units);
        console.log('Width:', width, formData.units);
        console.log('Calculated Site Area:', site_area, `${formData.units}²`);
    
        const updatedFormData = {
            ...formData,
            lat: location.lat.toString(),
            long: location.lng.toString(),
            location: address,
            site_area: site_area.toString(),
            // mobile_no: formData.mobile_no
        };
    
        console.log('Data being prepared for submission:', updatedFormData);
    
        const formDataToSend = new FormData();
    
        // Log each form data entry
        Object.entries(updatedFormData).forEach(([key, value]) => {
            formDataToSend.append(key, value);
            console.log(`Appended to formData: ${key} =`, value);
        });
    
        // Log each file being uploaded
        workPhotos.forEach((file, index) => {
            formDataToSend.append('new_property_images', file);
            console.log(`Appended file ${index + 1}:`, file.name, file.type, `${(file.size / 1024).toFixed(2)}KB`);
        });
    
        console.log('FormData prepared, sending to server...');
    
        try {
            console.log('Making POST request to:', 'http://46.37.122.105:89/property/');
            
            const response = await axios.post('http://46.37.122.105:89/property/', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
    
            console.log('Server response:', response);
            
            if (response.status == 201 || response.status == 200) {
                console.log('Success! Response data:', response.data);
                alert('Property submitted successfully!');
                navigate('/dashboard');
            } else {
                console.warn('Unexpected status code:', response.status);
                alert('Something went wrong. Try again.');
            }
        } catch (error) {
            console.error('Submission Error:', error);
            
            if (error.response) {
                console.error('Error response data:', error.response.data);
                console.error('Error status:', error.response.status);
                console.error('Error headers:', error.response.headers);
                
                alert(`Error: ${error.response.data.message || 'Something went wrong'}`);
            } else if (error.request) {
                console.error('No response received:', error.request);
                alert('No response from server. Please check your connection.');
            } else {
                console.error('Request setup error:', error.message);
                alert('An error occurred while submitting. Please try again.');
            }
        } finally {
            console.log('Submission process completed');
        }
    };

    if (!isLoaded) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Typography>Loading Google Maps...</Typography>
            </Box>
        );
    }

    const fields = selectedCategory && fieldMap[selectedCategory] ? fieldMap[selectedCategory] : [];

    return (
        <>
            <SearchBar onBackClick={handleBackClick} />
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

                        {fields.includes('Site Area') && (
    <Box key="Site Area" sx={{ mb: 2 }}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Site Area
        </Typography>
        <Stack direction="row" spacing={2}>
            <TextField 
                fullWidth 
                label="Length" 
                variant="outlined"
                value={formData.length || ''}
                onChange={(e) => {
                    handleFieldChange('Length', e.target.value);
                    setFormData(prev => ({...prev, length: e.target.value}));
                }}
            />
            <TextField 
                fullWidth 
                label="Width" 
                variant="outlined"
                value={formData.width || ''}
                onChange={(e) => {
                    handleFieldChange('Width', e.target.value);
                    setFormData(prev => ({...prev, width: e.target.value}));
                }}
            />
            <TextField 
                select 
                label="Units" 
                defaultValue="ft" 
                sx={{ minWidth: 100 }}
                value={formData.units || 'ft'}
                onChange={(e) => setFormData(prev => ({...prev, units: e.target.value}))}
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
                        {fields.map((label) => {
                            if (label == 'Site Area') return null;
                            if (label == 'Facing') {
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

                        {/* Location Section */}
                    {/* Location Section */}
<Box sx={{ mb: 2 }}>
  <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
    Location
  </Typography>

  {isLoaded && (
    <Autocomplete
      onLoad={(autocomplete) => {
        autocompleteRef.current = autocomplete;
      }}
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
  )}

  {/* Map with marker */}
  <div style={containerStyle}>
  <GoogleMap
    mapContainerStyle={{ width: '100%', height: '100%' }}
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
</div>
</Box>

                        {/* API Hit Counter (for debugging) */}
                        {/* <Typography variant="caption" sx={{ display: 'block', textAlign: 'right', mt: 1 }}>
                            Google Maps API hits: {apiHitCount}
                        </Typography> */}

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