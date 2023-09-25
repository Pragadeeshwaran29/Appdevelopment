import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/Home" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/in" className="nav-link">Inventory</Link>
        </li>
        <li className="nav-item">
          <Link to="/sales" className="nav-link">Sales/PointofSale</Link>
        </li>
        <li className="nav-item">
          <Link to="/purchasing" className="nav-link">Purchasing/Procurement</Link>
        </li>
        {/* <li className="nav-item">
          <Link to="/reports" className="nav-link">Reports/Analytics</Link>
        </li> */}
        <li className="nav-item">
          <Link to="/help" className="nav-link">Help/Support</Link>
        </li>
        <li className="nav-item">
          <Link to="/Login" className="nav-link">Logout</Link>
        </li>
        <li className="nav-item">
          <Link to="/Patient" className="nav-link">Patient</Link>
        </li>
        <li className="nav-item">
          <Link to="/Prescription" className="nav-link">Prescription</Link>
        </li>
        
        
      </ul>
    </nav>
  );
};

export default Navbar;