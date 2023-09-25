import React, { useState, useEffect } from 'react';
import './PointofSale.css';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import { getPointofSale, postPointofSale } from '../../api';

const PointOfSale = () => {
  const [cart, setCart] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState(1);
  const [itemPrice, setItemPrice] = useState('');

  // useEffect(() => {
  //   fetchCartData();
  // }, []);

  const fetchCartData = async () => {
    try {
      const response = await getPointofSale()
      setCart(response.data);
    } catch (error) {
      console.error('Error fetching cart data:', error);
    }
  };

  const handleAddToCart = async () => {
    if (!itemName || itemQuantity <= 0 || isNaN(itemPrice) || itemPrice <= 0) {
      alert('Please fill in all fields correctly.');
      return;
    }

    const cartItem = {
      name: itemName,
      quantity: itemQuantity,
      price: parseFloat(itemPrice)
    };

    try {
      const response = await postPointofSale(cartItem)

      if (response.status === 200) {
      
        setCart([...cart, cartItem]);
        setItemName('');
        setItemQuantity(1);
        setItemPrice('');
      } else {
        console.error('Failed to add item to cart:', response);

        alert('Failed to add item to cart');
      }
    } catch (error) {
      console.error('Error adding item to cart:', error);
  
      alert('Error adding item to cart');
    }
  };

  const handleUpdateCartItem = async (index) => {
    const updatedItem = cart[index];
    try {
      const response = await axios.put(`http://localhost:8080/api3/edituser/${updatedItem.id}`, updatedItem);

      if (response.status === 200) {
  
        const updatedCart = [...cart];
        updatedCart[index] = updatedItem;
        setCart(updatedCart);
      } else {
        console.error('Failed to update item in cart:', response);
    
        alert('Failed to update item in cart');
      }
    } catch (error) {
      console.error('Error updating item in cart:', error);
      
      alert('Error updating item in cart');
    }
  };

  const handleDeleteCartItem = async (index) => {
    if (cart.length === 0) {
      alert('Cart is already empty.');
      return;
    }

    const itemToDelete = cart[index];
    try {
      const response = await axios.delete(`http://localhost:8080/api3/deleteuser/${itemToDelete.id}`);

      if (response.status === 200) {
        
        const updatedCart = [...cart];
        updatedCart.splice(index, 1);
        setCart(updatedCart);
      } else {
        console.error('Failed to remove item from cart:', response);
      
        alert('Failed to remove item from cart');
      }
    } catch (error) {
      console.error('Error removing item from cart:', error);
      
      alert('Error removing item from cart');
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  return (
    <div className="fullscreen-containers">
      <Navbar />
      <div className="pos-container">
        <h2 className="pos-heading"></h2>

        <div className="item-inputs">
          <input
            type="text"
            placeholder="Item Name"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Quantity"
            min="1"
            value={itemQuantity}
            onChange={(e) => setItemQuantity(parseInt(e.target.value))}
          />
          <input
            type="number"
            placeholder="Price"
            step="0.01"
            value={itemPrice}
            onChange={(e) => setItemPrice(parseFloat(e.target.value))}
          />
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>

        <div className="cart-container">
          <h3 className="cart-heading">Cart</h3>
          <ul className="cart-items">
            {cart.map((item, index) => (
              <li key={item.id}>
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) => {
                    const updatedItem = { ...item, name: e.target.value };
                    const updatedCart = [...cart];
                    updatedCart[index] = updatedItem;
                    setCart(updatedCart);
                  }}
                />
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) => {
                    const updatedItem = { ...item, quantity: parseInt(e.target.value) };
                    const updatedCart = [...cart];
                    updatedCart[index] = updatedItem;
                    setCart(updatedCart);
                  }}
                />
                <input
                  type="number"
                  value={item.price}
                  step="0.01"
                  onChange={(e) => {
                    const updatedItem = { ...item, price: parseFloat(e.target.value) };
                    const updatedCart = [...cart];
                    updatedCart[index] = updatedItem;
                    setCart(updatedCart);
                  }}
                />
                
              </li>
            ))}
          </ul>
          <p className="cart-total">Total: ${calculateTotal().toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default PointOfSale;
