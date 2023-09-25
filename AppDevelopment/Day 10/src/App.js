import React from "react";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Terms from './Assets/Components/Footer/Terms';
import store from "./Assets/Components/store";
import LoginPage from "./Assets/Components/Login";

import Home from "./Assets/Components/Home/Home";
import Inventory from "./Assets/Components/Inventory/Inventory";
import PharmacyDashboard from "./Assets/Components/PharmacyDashboard/PharmacyDashboard";
import FeaturedProducts from "./Assets/FeaturedProduct/FeaturedProducts";
import Navbar from "./Assets/Components/Navbar/Navbar";
import PointOfSale from "./Assets/Components/PointofSale/PointofSale";

import HelpSupport from "./Assets/Components/Help/HelpSupport";
import PurchasingDetails from "./Assets/Components/PurchasingProcurement/PurchasingDetails";
import SignUp from "./Assets/Components/Signup/Signup";
import Login from "./Assets/Components/Login";
import PatientCustomerForm from "./Assets/Components/Paitent/PatientCustomerForm";
import PrescriptionManagement from "./Assets/Components/PrescriptionManagement/PrescriptionManagement";
import Footer from "./Assets/Components/Footer/Footer";


function App()
{
  return(

    <Provider store={store}>

  
   <BrowserRouter>
    <Routes>
    
        <Route path="/" element={<LoginPage/>}/>
    
        <Route path="/nav" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/Login" element={<LoginPage/>}/>
        <Route path="/Patient" element={<PatientCustomerForm/>}/>
        <Route path="/Prescription" element={<PrescriptionManagement/>}/>
        <Route path="/in" element={<Inventory/>}/>
        <Route path="/Dashboard" element={<PharmacyDashboard/>}/>
        <Route path="/Featured Products" element={<FeaturedProducts/>}/>
        <Route path="/Sales" element={<PointOfSale/>}/>
        <Route path="/help" element={<HelpSupport/>}/>
        <Route path="/purchasing" element={<PurchasingDetails/>}/>
        <Route path="/Signup" element={<SignUp/>}/>
        <Route path="/footer" element={<Footer/>}/>
        <Route path="/termsandcondition" element={<Terms/>}/>
    </Routes>
   </BrowserRouter>

   </Provider>
    
    
  );
}
export default App