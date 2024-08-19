// src/components/Cart.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Cart.css';
import { useAuth } from '../AuthContext';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [orderSummary, setOrderSummary] = useState({
    subtotal: 0,
    shippingCost: 0,
    estimatedTotal: 0,
  });
  const { user } = useAuth();

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/cart');
        setCartItems(response.data.cartItems);
        setOrderSummary(response.data.orderSummary);
      } catch (error) {
        console.error('Error fetching cart data:', error);
      }
    };

    fetchCartData();
  }, []); // Fetch cart data when the component mounts

  return (
    <div className="cart-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item._id} className="cart-item">
            {/* Include item image, details, and price here */}
          </div>
        ))}
      </div>
      <div className="order-summary">
        <h2>ORDER SUMMARY</h2>
        <div className="subtotal">
          <span>Subtotal:</span>
          <span>${orderSummary.subtotal}</span>
        </div>
        <div className="shipping-cost">
          <span>Shipping Cost:</span>
          <span>${orderSummary.shippingCost}</span>
        </div>
        <div className="estimated-total">
          <span>Estimated Total:</span>
          <span>${orderSummary.estimatedTotal}</span>
        </div>
        <button className="checkout-button">CHECKOUT</button>
      </div>
    </div>
  );
};

export default Cart;
