import React, { useState } from 'react';
import './SideBar.css'; // Import the CSS file for styling
// import Navbar from '../Pages/Navbar'
// import Footer from '../Pages/Footer'
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PaymentIcon from '@mui/icons-material/Payment';
import LogoutIcon from '@mui/icons-material/Logout';
import Home from './Home';
import Navbar from '../Pages/Navbar';
function Sidebar() {
  const [showDropdown, setShowDropdown] = useState(false);

  // Function to toggle the dropdown menu
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div>
    <Navbar/>
    <Home/>
    
    <div className="sidebar">
      <div className="sidebar-header">
      <DashboardIcon></DashboardIcon> DASHBOARD
      </div>
      <ul className="sidebar-menu">
        <li><button className='button'>HEALTH CARE</button></li>
        <li className={`sidebar-dropdown ${showDropdown ? 'active' : ''}`} onClick={toggleDropdown}>
          <span><button className='button'>MEDICINE DETAILS</button></span>
          <i className={`fas ${showDropdown ? 'fa-caret-up' : 'fa-caret-down'}`}></i>
          {/* Show caret up or down icon based on dropdown state */}
          {showDropdown && (
            <ul className="dropdown-menu">
              <li><button className='button'>FOR ADULT</button></li>
              <li><button className='button'>FOR CHILDRENS</button></li>
              {/* Add more dropdown items here */}
            </ul>
          )}
        </li>
        <li><button className='button'>DOCTORS</button></li>
        <li><button className='button'>LAB TEST</button></li>
        <li><button className='button'><ShoppingCartIcon></ShoppingCartIcon>  CART</button></li>
        <li><button className='button'><PaymentIcon/>  PAYMENT</button></li>
        <li><button className='button'><LogoutIcon/>LOGOUT</button></li>
      </ul>
      </div>
      </div>
      );
    }
    
    export default Sidebar;
    // <Footer/>
    // <Navbar/>
