import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    
    <div className="home-container">
      <Navbar />
      <div className="content-container">
        <div className="dashboard">
          <Link to="/Dashboard" className="nav-link">
            <h2>SalesExpenses</h2>
          </Link>
        </div>
        <div className="featured-products">
          <Link to="/Featured Products" className="nav-link">
            <h2>Featured Products</h2>
          </Link>
        </div>
        
        <div className="news-announcements">
          <Link to="/News and Announcements" className="nav-link">
            <h2>News and Announcements</h2>
          </Link>
          <div className='pdf'>
       <Footer/>
       </div>
        </div>
      </div>
    </div>
    
  );
};

export default Home;
