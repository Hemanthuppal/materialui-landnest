import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

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
import Forms from './maniteja/Forms';
import LeaseSave from './Rajesh/LeaseSave';
import RentSaves from './sharvani/Rent_Saves';
import Login from './auth/Login';
import Register from './auth/Register';
import HomeService from "./Tharun/HomeService";
import WorkerDetails from "./Tharun/WorkerDetails";
import InboxList from "./Tharun/InboxList";
import WorkerDetail from "./Tharun/WorkerDetail";




import Buy_Property_Map from './Sritajana/Buy_Propertymap';
import Buy_description from './Sritajana/Buy_description';
import Buy_Details_Page from './Sritajana/Details_Page';
import BuySaves from './Sritajana/Buy_Saves';


import AdminLogin from './Components/Admin/Login/Login';
import AdminDashboard from './Components/Admin/Dashboard/Dashboard';
import AdminUploadProperties from './Components/Admin/AdminUploadedProperties/AdminUploadProperties';
import AdminTwoDPlans from './Components/Admin/TwoDPlans/TwoDPlans';
import AdminThreeDPlans from './Components/Admin/ThreeDPlans/ThreeDPlans';
import AdminPackages from './Components/Admin/Packages/Pakages';
import AdminExploresConstructions from './Components/Admin/ExploresConstruction/ExploresConstruction';
import AdminElevation from './Components/Admin/Elevations/Elevations';
import AdminCustomers from './Components/Admin/Customers/Customers';
import AdminBestDeals from './Components/Admin/BestDeals/BestDeals';
import FormsBottomNavbar from './maniteja/FormsBottomNavbar';



function App() {


  return (
    <BrowserRouter>
      <Routes>
      {/* Auth routes */}
      {/* <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/register" element={<Register />} />
        
      <Route 
          path="/" 
          element={isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} 
        />

         <Route 
          path="/dashboard" 
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} 
        /> */}
              <Route path="/" element={<Login />} />
     <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home-service" element={<HomeService />} />
        <Route path="/work-details" element={<WorkerDetails />} />
        <Route path="/inboxlist" element={<InboxList />} />
        <Route path="/work-detail" element={<WorkerDetail />} />
        <Route path="/post" element={<Forms/>} />
        <Route path="/details" element={<Details_Page />} />
        <Route path="/postyourbestdeal-form" element={<PostYourBestDeal />} />
        <Route path="/lease-form" element={<LeaseForm />} />
        <Route path="/sellyourproperty-form" element={<SellYourProperty />} />
        <Route path="/vendor-form" element={<Vendor_Registration />} />
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
        <Route path="/lease_description" element={<Lease_discription />} />
        <Route path="/lease-description" element={<Lease_discription />} />
        <Route path="/lease_save" element={<LeaseSave />} />
        <Route path="/lease_nav" element={< FormsBottomNavbar />} />
        
        <Route path="/rent-form" element={<RentForm />} />
        <Route path="/get-started" element={<InteriorConsultationForm />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/samplevendor" element={<Vendorsample />} />
        <Route path="/samplevendordata" element={<Vendorsampledata/>} />
        <Route path="/rent-description" element={<Rent_description/>} />
        <Route path="/rent-propertymap" element={<Rent_Property_Map/>} />
        <Route path="/rent-saves" element={<RentSaves/>} />


        //Buy
        <Route path="/Buy-propertymap" element={<Buy_Property_Map/>} />
        <Route path="/Buy-description" element={<Buy_description/>} />
        <Route path="/Buy-details" element={<Buy_Details_Page />} />
        <Route path="/Buy-saves" element={<BuySaves/>} />


//AdminDashboard
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/adminuploadproperties" element={<AdminUploadProperties />} />
        <Route path="/admin-2dplans" element={<AdminTwoDPlans />} />
        <Route path="/admin-3dplans" element={<AdminThreeDPlans />} />
        <Route path="/admin-packages" element={<AdminPackages />} />
        <Route path="/admin-explore-constructions" element={<AdminExploresConstructions />} />
        <Route path="/admin-elevation" element={<AdminElevation />} />
        <Route path="/admin-customers" element={<AdminCustomers />} />
        <Route path="/admin-bestdeals" element={<AdminBestDeals />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
