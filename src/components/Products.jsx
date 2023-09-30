import React from 'react';
import data from '../data/db.json';
import { FaShoppingCart } from 'react-icons/fa';

const Products = ({ addToCart }) => {
  return (
    <>
      {data.map((item, index) => (
        <div key={index} className='product-list'>
          <div className="overlay"></div>
          <img src={item.image} alt="" />
          <h6>{item.name}</h6>
          <div className='hover-effect'>
            <h6>₹{item.price}</h6>
            <p>{item.description}</p>
            <button onClick={() => addToCart(item.id, item.name, item.price)}><FaShoppingCart /></button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Products;
