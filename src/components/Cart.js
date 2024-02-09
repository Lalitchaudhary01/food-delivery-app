import React, { useState } from "react";

const Cart = () => {
  const [items, setItems] = useState([]); // State to manage items in the cart

  // Function to clear the cart
  const clearCart = () => {
    setItems([]);
  };

  // Function to render cart items
  const renderItems = () => {
    return items.map((item, index) => (
      <div key={index} className="cart-item">
        <span>{item.name}</span>
        <span>${item.price}</span>
      </div>
    ));
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Cart</h1>
      <div className="cart-items">
        {items.length > 0 ? renderItems() : <p>Your cart is empty</p>}
      </div>
      <div className="cart-actions">
        <button className="clear-button" onClick={clearCart}>
          Clear Cart
        </button>
        {/* Add more actions/buttons as needed */}
      </div>
    </div>
  );
};

export default Cart;
