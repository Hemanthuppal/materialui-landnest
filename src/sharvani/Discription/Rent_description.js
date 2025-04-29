import { React, useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import SampleDescription from '../SampleDescription'; // Import the layout component

// Import required icons from MUI
import BedIcon from '@mui/icons-material/Bed';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import BathtubIcon from '@mui/icons-material/Bathtub';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BalconyIcon from '@mui/icons-material/Balcony';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PowerIcon from '@mui/icons-material/Power';
import CropSquareOutlinedIcon from '@mui/icons-material/CropSquareOutlined';
import CompassCalibrationOutlinedIcon from '@mui/icons-material/CompassCalibrationOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';

const BASE_URL = 'http://your-api-base-url'; // Replace with your actual API base URL

const Rent_description = () => {
  const { propertyId } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Property ID:', propertyId);

    if (propertyId) {
      axios.get(`http://46.37.122.105:89/property/${propertyId}/`)
        .then((res) => {
          setProperty(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error('Failed to fetch property:', err);
          setError(err);
          setLoading(false);
        });
    }
  }, [propertyId]);

  if (loading) {
    return <div>Loading property details...</div>;
  }

  if (error) {
    return <div>Error loading property details</div>;
  }

  if (!property) {
    return <div>No property data found</div>;
  }

  // Prepare data for SampleDescription component
  const sampleDescriptionProps = {
    title: property.title || 'Property Details',
    address: property.address || 'Address not specified',
    price: property.price ? `₹${property.price}/month` : 'Price not available',
    priceNote: property.price_note || 'Price from owner',
    image: property.image || 'default-image-url',
    basicInfo: [
      { label: 'Built Up Area', value: property.area || 'NA' },
      { label: 'Risk Area', value: property.risk_area || 'NA' },
      { label: 'Land', value: property.land_status || 'Unverified' },
    ],
    nearbyPlaces: property.nearby_places || ['Location not specified'],
    overview: [
      [
        { icon: <BedIcon />, title: `${property.bedrooms || 'NA'} Bedroom`, subtitle: 'No. of Bedrooms' },
        { icon: <CalendarTodayIcon />, title: property.posted_date || 'NA', subtitle: 'Posted on' },
      ],
      [
        { icon: <BathtubIcon />, title: `${property.bathrooms || 'NA'} Bathroom`, subtitle: 'No. of Bathrooms' },
        { icon: <AccessTimeIcon />, title: property.available_from || 'Immediately', subtitle: 'Available From' },
      ],
      [
        { icon: <BalconyIcon />, title: property.balcony ? 'Yes' : 'No', subtitle: 'Balcony' },
        { icon: <HomeWorkIcon />, title: property.property_type || 'Independent', subtitle: 'Property Type' },
      ],
      [
        { icon: <DirectionsCarIcon />, title: property.parking || 'NA', subtitle: 'Parking' },
        { icon: <PowerIcon />, title: property.power_backup || 'None', subtitle: 'Power Backup' },
      ],
    ],
    finalInfo: [
      { label: 'Built Up Area', value: `${property.area || 'NA'} Sq.ft`, icon: <CropSquareOutlinedIcon /> },
      { label: 'Facing', value: property.facing || 'NA', icon: <CompassCalibrationOutlinedIcon /> },
      { label: 'Floor', value: property.floor || 'NA', icon: <LayersOutlinedIcon /> },
      { label: 'Gated Security', value: property.gated_security ? 'Yes' : 'No', icon: <SecurityOutlinedIcon /> },
    ]
  };

  return <SampleDescription {...sampleDescriptionProps} />;
};

export default Rent_description;