// src/components/VendorForm.js
import React, { useState,useRef } from 'react';
import { VendorService } from '../Api/Apiservices'; // Adjust the import path as necessary


const VendorForm = () => {
    const [formData, setFormData] = useState({
      companyName: '',
      contactPerson: '',
      email: '',
      phone: '',
      address: '',
      businessType: 'Supplier',
      photoURL: ''
    });
  
    const [message, setMessage] = useState('');
    const [isUploading, setIsUploading] = useState(false);
    const fileInputRef = useRef(null);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };
  
    const handleFileChange = async (e) => {
      const file = e.target.files[0];
      if (!file) return;
  
      setIsUploading(true);
      try {
        const photoURL = await VendorService.uploadVendorImage(file);
        setFormData(prev => ({
          ...prev,
          photoURL
        }));
        setMessage('Image uploaded successfully');
      } catch (error) {
        setMessage('Error uploading image');
        console.error(error);
      } finally {
        setIsUploading(false);
      }
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await VendorService.registerVendor(formData);
        setMessage('Vendor registered successfully!');
        // Reset form
        setFormData({
          companyName: '',
          contactPerson: '',
          email: '',
          phone: '',
          address: '',
          businessType: 'Supplier',
          photoURL: ''
        });
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      } catch (error) {
        setMessage('Error registering vendor');
        console.error(error);
      }
    };
  
  return (
    <div className="vendor-form">
      <h2>Vendor Registration</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-group">
          <label>Company Name:</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Contact Person:</label>
          <input
            type="text"
            name="contactPerson"
            value={formData.contactPerson}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Address:</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Business Type:</label>
          <select
            name="businessType"
            value={formData.businessType}
            onChange={handleChange}
          >
            <option value="Supplier">Supplier</option>
            <option value="Manufacturer">Manufacturer</option>
            <option value="Distributor">Distributor</option>
            <option value="Service Provider">Service Provider</option>
          </select>
        </div>
        <div className="form-group">
          <label>Company Logo/Photo:</label>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            disabled={isUploading}
          />
          {isUploading && <p>Uploading image...</p>}
          {formData.photoURL && (
            <div className="image-preview">
              <p>Selected image: {formData.photoURL}</p>
            </div>
          )}
        </div>
        <button type="submit">Register Vendor</button>
      </form>
    </div>
  );
};

export default VendorForm;