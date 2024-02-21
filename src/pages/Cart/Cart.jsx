import React from 'react';
import './cart.scss';
import { FaShoppingCart } from 'react-icons/fa';

import { food } from '../../foodData';

const Cart = () => {
  return (
    <div className="cart-page">
      <div className="cart-header">
        <FaShoppingCart className="cart-page-icon" />
        <h2>سبد خرید</h2>
        <p>1 آیتم در سبد خرید شما موجود می باشد</p>
      </div>

      <div className="cart-container">
        {food.map((item) => (
          <div key={item.id} className="cart-box">
            <div className="cart-left">
              <img src={item.img} alt={item.title} />
            </div>

            <div className="cart-right">
              <h3>{item.title}</h3>
              <div className="cart-item-info">
                <p className="cart-item-price">{item.price}</p>
                <p className="cart-item-restaurant">{item.restaurant}</p>
              </div>
              <div className="cart-quantity">
                <button>+</button>
                <span>1</span>
                <button>-</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
