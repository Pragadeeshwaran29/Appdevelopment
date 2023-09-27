import React from 'react';
import './Sidebar.css';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import PaymentsIcon from '@mui/icons-material/Payments';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined';
import AddShoppingCartTwoToneIcon from '@mui/icons-material/AddShoppingCartTwoTone';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import Navbar from '../Pages/Navbar';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
// import Footer from '../Pages/Footer';

const Sidebar = () => {
  return (
    <>
    <Navbar/>
    <div>
    <div>
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2><SpaceDashboardIcon/>Dashboard</h2>
      </div>
      <ul className="sidebar-menu">
        <li><Diversity1OutlinedIcon/>PATIENTS</li>
        <li><ArticleOutlinedIcon/>PRESCRIPTIONS</li>
        <li><AddShoppingCartTwoToneIcon/>CART</li>
        <li><PaymentsIcon/>PAYMENT</li>
        <li><LogoutTwoToneIcon/>LOGOUT</li>
      </ul>
    </aside>
    </div>
    </div>
    </>

  );
};

export default Sidebar;

