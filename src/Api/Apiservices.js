// src/services/vendorService.js
const API_URL = 'http://localhost:3001'; // json-server runs on 3001 by default

export const VendorService = {
  // Get all vendors
  getAllVendors: async () => {
    const response = await fetch(`${API_URL}/vendors`);
    return await response.json();
  },

  // Register a new vendor
  registerVendor: async (formData) => {
    const response = await fetch(`${API_URL}/vendors`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
    return await response.json();
  },

  // Method to upload image file
  uploadVendorImage: async (file) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const fileName = file.name; // Get the original file name
        const photoURL = `/assets/images/avatars/${fileName}`;
        resolve(photoURL);
      }, 500);
    });
  },
  

  // Get vendor by ID
  getVendorById: async (id) => {
    const response = await fetch(`${API_URL}/vendors/${id}`);
    return await response.json();
  },

  // Update vendor
  updateVendor: async (id, updateData) => {
    const response = await fetch(`${API_URL}/vendors/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateData)
    });
    return await response.json();
  },

  // Delete vendor
  deleteVendor: async (id) => {
    const response = await fetch(`${API_URL}/vendors/${id}`, {
      method: 'DELETE'
    });
    return response.ok;
  }
};