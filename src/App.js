import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './bharath/Dashboard';
import Details_Page from './sharvani/Details_Page';
import Vendor_Registration from './maniteja/Vendor_Registration';
import Property_Map from './Sritajana/Property_Map';
import Saved_Buy from './Sritajana/Savedbuy';
import Constructions from './bharath/Constructions'
import Interiors from './bharath/Interiors-Our-Services'
import ExploreConstructionResources from './bharath/ExploreConstructionResources'
import PostYourBestDeal from './maniteja/Form-PostYourBestDeal';
import LeaseForm from './maniteja/Form-Lease';
import SellYourProperty from './maniteja/Form-SellYourProperty';
import Lease_map from './Rajesh/Lease_map';
import Lease_detail from './Rajesh/Lease_details';
import MobilePropertyUI from './tharun/MobileProperyUI';

import RentForm from './maniteja/Rent_form';
import InteriorConsultationForm from './bharath/Get_started';
import Footer from './hemanth/Hemanth';
import Vendorsample from './hemanth/VendorForm';
import Vendorsampledata from './hemanth/Vendordata';
import TwodPlansInterior from './bharath/TwodPlansInterior';
import ThreedPlansInterior from './bharath/ThreedPlansInterior';
import Elevations from './bharath/Elevations';
import Packages from './bharath/Packages'
import HowItWorks from './bharath/HowItWorks'
import Lease_discription from './Rajesh/Lease_description';
import Rent_Property_Map from './sharvani/Rent_Propertymap';
import Rent_description from './sharvani/Rent_description';
import LeaseSave from './Rajesh/LeaseSave';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/details" element={<Details_Page />} />
        <Route path="/postyourbestdeal-form" element={<PostYourBestDeal />} />
        <Route path="/lease-form" element={<LeaseForm />} />
        <Route path="/sellyourproperty-form" element={<SellYourProperty />} />
        <Route path="/vendor" element={<Vendor_Registration />} />
        <Route path="/propertymap" element={<Property_Map />} />
        <Route path="/Savedbuy" element={<Saved_Buy />} />
        <Route path="/constructions" element={<Constructions />} />
        <Route path="/interiors" element={<Interiors />} />
        <Route path="/explore-construction-resources" element={<ExploreConstructionResources />} />
        <Route path="/two-d-plane-interior" element={<TwodPlansInterior />} />
        <Route path="/three-d-plane-interior" element={<ThreedPlansInterior />} />
        <Route path="/elevations" element={<Elevations />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/how-it-works" element={<HowItWorks />} />



        <Route path="/lease_map" element={<Lease_map />} />
        <Route path="/lease_details" element={<Lease_detail />} />
        <Route path="/lease_description/:id" element={<Lease_discription />} />
        <Route path="/mobileproperty" element={<MobilePropertyUI />} />
        <Route path="/lease-description" element={<Lease_discription />} />
        <Route path="/lease_save" element={<LeaseSave />} />
        
        <Route path="/rent" element={<RentForm />} />
        <Route path="/get-started" element={<InteriorConsultationForm />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/samplevendor" element={<Vendorsample />} />
        <Route path="/samplevendordata" element={<Vendorsampledata/>} />
        <Route path="/rent-description" element={<Rent_description/>} />
        <Route path="/rent-propertymap" element={<Rent_Property_Map/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
