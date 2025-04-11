import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './bharath/Dashboard';
import Details_Page from './sharvani/Details_Page';
import Vendor_Registration from './maniteja/Vendor_Registration';
import Property_Map from './Sritajana/Property_Map';
import Lease_map from './Rajesh/Lease_map';
import Lease_detail from './Rajesh/Lease_details';
import MobilePropertyUI from './tharun/MobileProperyUI';
import InteriorServices from './bharath/Interior_service';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/details" element={<Details_Page />} />
        <Route path="/vendor" element={<Vendor_Registration />} />
        <Route path="/propertymap" element={<Property_Map />} />
        <Route path="/lease_map" element={<Lease_map />} />
        <Route path="/lease_detail" element={<Lease_detail />} />
        <Route path="/mobileproperty" element={<MobilePropertyUI />} />
        <Route path="/interior_service" element={<InteriorServices />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
