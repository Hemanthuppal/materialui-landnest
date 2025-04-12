import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './bharath/Dashboard';
import Details_Page from './sharvani/Details_Page';
import Vendor_Registration from './maniteja/Vendor_Registration';
import Property_Map from './Sritajana/Property_Map';
import Constructions from './bharath/Constructions'
import Interiors from './bharath/Interiors'
import ExploreConstructionResources from './bharath/ExploreConstructionResources'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/details" element={<Details_Page />} />
        <Route path="/vendor" element={<Vendor_Registration />} />
        <Route path="/propertymap" element={<Property_Map />} />
        <Route path="/constructions" element={<Constructions />} />
        <Route path="/interiors" element={<Interiors />} />
        <Route path="/explore-construction-resources" element={<ExploreConstructionResources />} />



      </Routes>
    </BrowserRouter>
  );
}

export default App;
