import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AuthProvider from './AuthContext/AuthContext';
import Dashboard from './bharath/Dashboard';
import Details_Page from './sharvani/PropertyList/Details_Page';
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


import Rent_description from './sharvani/Discription/Rent_description';
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
import Buy_Postdeal from './Sritajana/Buy_Postdeal';
import Buy_Posttable from './Sritajana/Buy_Posttable';
import W_Buy from './Woker/W_Buy';
import W_Lease from './Woker/W_Lease';
import W_Rent from './Woker/W_Rent';
import W_Vendors from './Woker/W_Vendors';
import W_Post from './Woker/W_Post';
import W_Navbar from '././Woker/W_Navbar';


// import AdminCategory from './Components/Admin/AdminUploadedProperties/Category';




import AdminLogin from './Components/Admin/Login/Login';
import AdminDashboard from './Components/Admin/Dashboard/Dashboard';
import AdminUploadProperties from './Components/Admin/AdminUploadedProperties/AdminUploadProperties';
import AdminTwoDPlans from './Components/Admin/TwoDPlans/TwoDPlans';
import AdminThreeDPlans from './Components/Admin/ThreeDPlans/ThreeDPlans';
import AdminPackages from './Components/Admin/Packages/Packages';
import AdminExploresConstructions from './Components/Admin/ExploresConstruction/ExploresConstruction';
import AdminElevation from './Components/Admin/Elevations/Elevations';
import AdminCustomers from './Components/Admin/Customers/Customers';
import AdminBestDeals from './Components/Admin/BestDeals/BestDeals';
import FormsBottomNavbar from './maniteja/FormsBottomNavbar';
import SampleBottomNavbar from './Rajesh/SampleButtomNavbar';
import ConstructionGetStarted from './bharath/ConstructionGetStarted';
import Addcategory from './Components/Admin/AdminUploadedProperties/Addcategory';
import Material from './Components/Admin/AdminUploadedProperties/Material';

// import CustomerList from "../src/Components/Admin/View/Customers"
import AdminUploadPropertiesForm from './Components/Admin/AdminUploadedProperties/AdminUploadPropertiesForm';
import { Category } from '@mui/icons-material';

function App() {


  return (
    <AuthProvider>
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

        {/* Tharun */}
        <Route path="/home-service" element={<HomeService />} />
        <Route path="/work-details" element={<WorkerDetails />} />
        <Route path="/work-details/:id" element={<WorkerDetails />} />

        <Route path="/inboxlist" element={<InboxList />} />
        <Route path="/work-detail" element={<WorkerDetail />} />


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
        <Route path="/construction-get-started" element={<ConstructionGetStarted />} />

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
        <Route path="/lease_sampleNavbar" element={< SampleBottomNavbar />} />
       
        
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
        <Route path="/Buy-Postdeal" element={<Buy_Postdeal/>} />
        <Route path="/Buy-Posttable" element={<Buy_Posttable/>} />
        <Route path="/W_Buy" element={<W_Buy/>} />
        <Route path="/W_Lease" element={<W_Lease/>} />
        <Route path="/W_Rent" element={<W_Rent/>} />
        <Route path="/W_Vendors" element={<W_Vendors/>} />
        <Route path="/W_Post" element={<W_Post/>} />
        <Route path="/W_Navbar" element={<W_Navbar/>} />
        

        
       



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
        <Route path="/Material" element={<Material/>} />     //sritha
        <Route path="/Addcategory" element={<Addcategory/>} />     //sritha
        

        {/* <Route path="/view" element={<CustomerList />} /> */}
        <Route path="/adminuploadpropertiesform" element={<AdminUploadPropertiesForm />} />

        {/* <Route path="/adminuploadpropertiestable" element={<AdminUploadPropertiesTable />} /> */}


        {/* <Route
            path="/admin-material"
            element={<AdminCategory />}
          /> */}

            {/* <Route
            path="/admin-construction"
            element={<Construction />}
          /> */}



      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
