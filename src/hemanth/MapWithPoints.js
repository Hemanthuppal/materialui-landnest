import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

// Fix missing marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

function MapWithMarkers() {
  useEffect(() => {
    const map = L.map('map').setView([18.1124, 78.0179], 9);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    // Fetch properties from API
    axios.get('http://46.37.122.105:89/property/')
      .then(response => {
        const properties = Array.isArray(response.data) ? response.data : [response.data];
console.log('Fetched properties:', properties);
        properties.forEach(property => {
          let lat = parseFloat((property.lat || '').replace(':', '.'));
          let lng = parseFloat((property.long || '').replace(':', '.'));
        
          if (isNaN(lat) || isNaN(lng)) {
            console.warn('Invalid lat/lng for property:', property.property_id, property.lat, property.long);
            return;
          }
        
          if (lat < -90 || lat > 90 || lng < -180 || lng > 180) {
            console.warn('Out-of-range coordinates for property:', property.property_id, lat, lng);
            return;
          }
        
          L.marker([lat, lng])
            .addTo(map)
            .bindPopup(`
              <b>Property ID:</b> ${property.property_id}<br/>
              <b>Type:</b> ${property.type}<br/>
              <b>Price:</b> ₹${property.price}<br/>
              <b>Location:</b> ${property.location}
            `);
        });
        
      })
      .catch(error => {
        console.error('Error fetching properties:', error);
      });

    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" style={{ height: '500px', width: '100%' }}></div>;
}

export default MapWithMarkers;
