import React, { useState, useRef, useContext, useEffect } from 'react';
import {
    Box, Typography, TextField, Button, Select, MenuItem,
    InputLabel, FormControl, Paper, Stack, styled
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { GoogleMap, useJsApiLoader, Marker, Autocomplete } from '@react-google-maps/api';
import SearchBar from './FormsSearchBar';
import FormsBottomNavbar from './FormsBottomNavbar';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext/AuthContext';
import { BASE_URL } from './../Api/ApiUrls';
import { IconButton, InputAdornment } from '@mui/material';
import MyLocationIcon from '@mui/icons-material/MyLocation';
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

    const { userId, logout } = useContext(AuthContext);
 const [apiHitCount, setApiHitCount] = useState(0);
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: GOOGLE_MAPS_API_KEY,
        libraries: ['places'],
    });
const [address, setAddress] = useState('');
    const [markerIcon, setMarkerIcon] = useState(null);
      const [usingCurrentLocation, setUsingCurrentLocation] = useState(false);

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


    const incrementApiHit = () => {
        setApiHitCount(prev => prev + 1);
        console.log(`Google Maps API hits: ${apiHitCount + 1}`);
    }; 
   
    // const { user_id } = useContext( useAuth );

    // const [formData, setFormData] = useState({
    //     name: '',
    //     user_id: 1,

    const [formData, setFormData] = useState({
        name: '',
        user_id: '',
        profession: '',
        mobile: '',
        email: '',
        address: '',
        experience: '',
        description: '',
        lat: '',
        long: ''
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
                const newLat = place.geometry.location.lat();
                const newLng = place.geometry.location.lng();

                setLocation({ lat: newLat, lng: newLng });

                setFormData(prev => ({
                    ...prev,
                    address: place.formatted_address,
                    lat: newLat,
                    long: newLng
                }));
            }
        }
    };


    const geocodeAddress = async () => {
        if (window.google && window.google.maps) {
            const geocoder = new window.google.maps.Geocoder();
            geocoder.geocode({ address: formData.address }, (results, status) => {
                if (status == 'OK' && results[0]) {
                    const location = results[0].geometry.location;
                    const lat = location.lat();
                    const lng = location.lng();

                    setLocation({ lat, lng });

                    setFormData(prev => ({
                        ...prev,
                        address: results[0].formatted_address,
                        lat: lat,
                        long: lng
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
        const updatedFormData = { ...formData, user_id: userId , lat: location.lat,
            long: location.lng,
            address: address, };
        console.log('Form Data:', updatedFormData);

        Object.keys(updatedFormData).forEach(key => {
            formDataToSend.append(key, updatedFormData[key]);
        });

        if (profilePhoto) {
            formDataToSend.append('profile', profilePhoto);
        }

        workPhotos.forEach((photo, index) => {
            formDataToSend.append('new_work_images', photo);
        });

        // Debug log FormData contents
        for (let [key, value] of formDataToSend.entries()) {
            console.log(`${key}:`, value);
        }

        try {
            const response = await fetch(`${BASE_URL}/vendors/`, {
                method: 'POST',
                body: formDataToSend,
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Success:', data);
                alert('Vendor registered successfully!');
                navigate('/dashboard');
            } else {
                const errorData = await response.json();  // try to parse the error body
                console.error('Error response:', errorData);
                alert('Form submission failed. Check console for details.');
            }
        } catch (error) {
            console.error('Network or other error:', error);
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
    const workerTypes = [
        "Painting", "Carpenter", "Flooring", "AC Technician", "Cleaning maid",
        "Gardener", "Sofa Cleaning", "Water Purifier", "Kitchen/Toilet Cleaning", "Plumbing", "Electrical"
    ];



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
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                    pt: '10px',
                    backgroundColor: 'rgb(239, 231, 221)',
                }}
            >
                <Box
                    sx={{
                        flexGrow: 1,
                        p: { xs: 2, sm: 3 },
                        pb: 10,
                        display: 'flex',
                        justifyContent: 'center', // center horizontally
                    }}
                >

                    <Paper
                        elevation={2}
                        sx={{
                            p: { xs: 2, sm: 3 },
                            mb: 5,
                            width: '100%',
                            boxSizing: 'border-box',
                        }}
                        component="form"
                        onSubmit={handleSubmit}
                    >
                        <Typography
                            variant="h5"
                            gutterBottom
                            sx={{ fontWeight: 'bold', mb: 3, textAlign: 'center' }}
                        >
                            Vendor RegistartionForm
                        </Typography>
                        <FormControl fullWidth sx={{ mb: 3 }}>
                            <InputLabel id="category-label">Select Profession</InputLabel>


                            <Select
                                labelId="category-label"
                                label="Select Profession"
                                name="profession"
                                value={formData.profession}
                                onChange={handleInputChange}
                            >

                                {workerTypes.map((type, index) => (
                                    <MenuItem key={index} value={type}>{type}</MenuItem>
                                ))}
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
                             {markerIcon && (
                                  <Marker 
                                    position={location} 
                                    icon={markerIcon}
                                  />
                                )}
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
                        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 2 ,mb: 2}}>
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