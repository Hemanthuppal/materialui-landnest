// src/components/VendorList.js
import React, { useState, useEffect } from 'react';
import { VendorService } from '../Api/Apiservices'; // Adjust the import path as necessary
const VendorList = () => {
    const [vendors, setVendors] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchVendors = async () => {
        try {
          const data = await VendorService.getAllVendors();
          setVendors(data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching vendors:', error);
          setLoading(false);
        }
      };
      fetchVendors();
    }, []);
  
    if (loading) return <div>Loading...</div>;
  
    return (
      <div className="vendor-list">
        <h2>Registered Vendors</h2>
        <table>
          <thead>
            <tr>
              <th>Photo</th>
              <th>Company</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Type</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {vendors.map(vendor => (
              <tr key={vendor.id}>
                <td>
                  {vendor.photoURL ? (
                    <img 
                      src={vendor.photoURL} 
                      alt={`${vendor.companyName} logo`}
                      style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                    />
                  ) : (
                    <div className="no-image">No Image</div>
                  )}
                </td>
                <td>{vendor.companyName}</td>
                <td>{vendor.contactPerson}</td>
                <td>{vendor.email}</td>
                <td>{vendor.phone}</td>
                <td>{vendor.businessType}</td>
                <td>{vendor.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default VendorList;