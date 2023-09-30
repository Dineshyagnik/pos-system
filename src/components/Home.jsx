import React, { useState } from 'react';
import Cart from './Cart';
import Products from './Products';

const Home = () => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add a product to the cart
  const addToCart = (id, name, price) => {
    const existingItem = cartItems.find((item) => item.id === id);

    if (existingItem) {
      setCartItems((prevCart) =>
        prevCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems((prevCart) => [...prevCart, { id, name, price, quantity: 1 }]);
    }
  };

  return (
    <div className='main-container'>
      <div className='left-panel'>
        <Cart cartItems={cartItems} />
      </div>
      <div className='right-panel'>
        <Products addToCart={addToCart} />
      </div>
    </div>
  );
};

export default Home;
