import React from 'react';
import './FeaturedProducts.css';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';

const FeatureProduct = () => {
  const products = [
    { id: 1, name: 'Product A', price: '$19.99', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQydprRt-7JyaGGgsuA1DcjQNphhuufAagxxg&usqp=CAU' },
    { id: 2, name: 'Product B', price: '$24.99', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Uh2TqJlI64U4iHi1KvDWWrn8Iy9jJBgTDPW6Zww3GVILK759fRTqIUjRr46rDOh3okM&usqp=CAU' },
    { id: 3, name: 'Product C', price: '$29.99', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Bfk2jZr7TVV_C9LqxSV6qLgD0w7b-5W3pYLIyjJvK-yroslwQCn4ykafAnWIma8BYa8&usqp=CAU' },
    // Add more featured products here
  ];

  return (
    <div className="feature-product-container">
      <Navbar/>
      <h2>Featured Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureProduct;
