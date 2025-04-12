import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './bharath/Dashboard';
import Details_Page from './sharvani/Details_Page';
import Vendor_Registration from './maniteja/Vendor_Registration';
import Property_Map from './Sritajana/Property_Map';
import Saved_Buy from './Sritajana/Savedbuy';
import Constructions from './bharath/Constructions'
import Interiors from './bharath/Interiors'
import ExploreConstructionResources from './bharath/ExploreConstructionResources'
import PostYourBestDeal from './maniteja/Form-PostYourBestDeal';
import LeaseForm from './maniteja/Form-Lease';
import SellYourProperty from './maniteja/Form-SellYourProperty';
import Lease_map from './Rajesh/Lease_map';
import Lease_detail from './Rajesh/Lease_details';
import MobilePropertyUI from './tharun/MobileProperyUI';
import InteriorServices from './bharath/Interior_service';
import RentForm from './maniteja/Rent_form';
import InteriorConsultationForm from './bharath/Get_started';
import Footer from './hemanth/Hemanth';
import Vendorsample from './hemanth/VendorForm';
import Vendorsampledata from './hemanth/Vendordata';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/details" element={<Details_Page />} />
        <Route path="/vendor" element={<Vendor_Registration />} />
        <Route path="/propertymap" element={<Property_Map />} />
        <Route path="/Savedbuy" element={<Saved_Buy />} />
        <Route path="/constructions" element={<Constructions />} />
        <Route path="/interiors" element={<Interiors />} />



        <Route path="/lease_map" element={<Lease_map />} />
        <Route path="/lease_detail" element={<Lease_detail />} />
        <Route path="/mobileproperty" element={<MobilePropertyUI />} />
        <Route path="/interior_service" element={<InteriorServices />} />
        <Route path="/rent" element={<RentForm />} />
        <Route path="/get-started" element={<InteriorConsultationForm />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/samplevendor" element={<Vendorsample />} />
        <Route path="/samplevendordata" element={<Vendorsampledata/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
