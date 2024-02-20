import React from 'react';
import './addtocart.scss';
import { FaShoppingCart } from 'react-icons/fa';

const AddToCart = ({ children }) => {
  return (
    <button className="addToCartBtn">
      <FaShoppingCart />
      {children}
    </button>
  );
};

export default AddToCart;
