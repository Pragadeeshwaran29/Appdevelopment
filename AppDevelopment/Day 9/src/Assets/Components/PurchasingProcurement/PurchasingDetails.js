import React, { useState, useEffect } from 'react';
import './PurchasingDetails.css';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import { getpurchasing, postpurchasing } from '../../api';
const PurchasingDetails = () => {
  const [items, setItems] = useState([]);
  const [newProduct, setNewProduct] = useState({
    id: '',
    productName: '',
    price: 0,
    quantity: 0,
  });

  useEffect(() => {
    fetchPurchasings();
  }, []);

  const fetchPurchasings = async () => {
    try {
      const response = await getpurchasing()
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching purchasing data:', error);
    }
  };

  const handleQuantityChange = (id, event) => {
    const { name, value } = event.target;
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, [name]: name === 'quantity' ? parseInt(value) : value } : item
    );
    setItems(updatedItems);
  };

  const handleNewProductChange = (event) => {
    const { name, value } = event.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: name === 'id' ? Math.max(0, parseInt(value)) : value,
    }));
  };

  const handleAddProduct = async () => {
    if (newProduct.id && newProduct.productName && newProduct.price >= 0) {
      try {
        const response = await postpurchasing(newProduct)

        if (response.status === 200) {
          
          setItems((prevItems) => [...prevItems, newProduct]);
          setNewProduct({ id: '', productName: '', price: 0, quantity: 0 });
        } else {
          console.error('Failed to add product:', response);
        
          alert('Failed to add product');
        }
      } catch (error) {
        console.error('Error adding product:', error);
        
        alert('Error adding product');
      }
    }
  };

  const handleUpdateProduct = async (id) => {
    const productToUpdate = items.find((item) => item.id === id);
    if (!productToUpdate) return;

    try {
      const response = await axios.put(`http://localhost:8080/api1/edituser/${id}`, productToUpdate);

      if (response.status === 200) {
      
        const updatedItems = items.map((item) => (item.id === id ? productToUpdate : item));
        setItems(updatedItems);
      } else {
        console.error('Failed to update product:', response);
        
        alert('Failed to update product');
      }
    } catch (error) {
      console.error('Error updating product:', error);
      
      alert('Error updating product');
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8080/api1/deleteuser/${id}`);

      if (response.status === 200) {
        
        const updatedItems = items.filter((item) => item.id !== id);
        setItems(updatedItems);
      } else {
        console.error('Failed to remove product:', response);
        
        alert('Failed to remove product');
      }
    } catch (error) {
      console.error('Error removing product:', error);
    
      alert('Error removing product');
    }
  };

  const calculateTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="fullscreen-container">
      <Navbar />

      <div className="purchasing-details">
        <div className="add-new-product">
          <label>
            ID:
            <input
              type="number"
              name="id"
              value={newProduct.id}
              onChange={handleNewProductChange}
            />
          </label>
          <label>
            Product Name:
            <input
              type="text"
              name="productName"
              value={newProduct.productName}
              onChange={handleNewProductChange}
            />
          </label>
          <label>
            Price:
            <input
              type="number"
              name="price"
              min="0"
              value={newProduct.price}
              onChange={handleNewProductChange}
            />
          </label>
          <label>
            Quantity:
            <input
              type="number"
              name="quantity"
              min="0"
              value={newProduct.quantity}
              onChange={handleNewProductChange}
            />
          </label>
          <button onClick={handleAddProduct}>Add Product</button>
        </div>

        <h1 className="product-list-heading">Product List</h1>

        <div className="product-list">
          {items.map((item) => (
            <div key={item.id} className="product-item">
              <p>ID: {item.id}</p>
              <p>
                Product Name:
                <input
                  type="text"
                  name="productName"
                  value={item.productName}
                  onChange={(e) => handleQuantityChange(item.id, e)}
                />
              </p>
              <p>
                Price:
                <input
                  type="number"
                  min="0"
                  name="price"
                  value={item.price}
                  onChange={(e) => handleQuantityChange(item.id, e)}
                />
              </p>
              <p>
                Quantity:
                <input
                  type="number"
                  min="0"
                  name="quantity"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, e)}
                />
              </p>
              <p>Total Price: ${item.price * item.quantity}</p>
              
            </div>
          ))}
        </div>

        <h2 className="total-price">Total Price: ${calculateTotalPrice()}</h2>
      </div>
    </div>
  );
};

export default PurchasingDetails;
