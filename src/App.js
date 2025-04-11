import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './bharath/Dashboard';
import Details_Page from './sharvani/Details_Page';
import Vendor_Registration from './maniteja/Vendor_Registration';
import Property_Map from './Sritajana/Property_Map';
import PostYourBestDeal from './maniteja/Form-PostYourBestDeal';
import LeaseForm from './maniteja/Form-Lease';
import SellYourProperty from './maniteja/Form-SellYourProperty';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/details" element={<Details_Page />} />
        <Route path="/vendor-form" element={<Vendor_Registration />} />
        <Route path="/sellyourproperty-form" element={<SellYourProperty />} />
        <Route path="/lease-form" element={<LeaseForm />} />
        <Route path="/postyourbestdeal-form" element={<PostYourBestDeal />} />
        <Route path="/propertymap" element={<Property_Map />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
