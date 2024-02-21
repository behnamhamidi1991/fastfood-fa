import React from 'react';
import './cart.scss';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import {
  addItemToCart,
  removeItemFromCart,
  incrementQuantity,
  decrementQuantity,
} from '../../features/cartSlice/cartSlice';

import { food } from '../../foodData';

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="cart-page">
      <div className="cart-header">
        <FaShoppingCart className="cart-page-icon" />
        <h2>سبد خرید</h2>
        {cart.length === 0 ? (
          <p> سبد خرید شما خالی می باشد</p>
        ) : (
          <p>{cart.length} آیتم در سبد خرید شما موجود می باشد</p>
        )}
        <p>مبلغ قابل پرداخت: 0</p>
      </div>

      <div className="cart-container">
        {cart.map((item) => (
          <div key={item.id} className="cart-box">
            <div className="cart-left">
              <img src={item.img} alt={item.title} />
            </div>

            <div className="cart-right">
              <div className="cart-item-info">
                <h3>{item.title}</h3>
                <p className="cart-item-price">{item.price}</p>
                <p className="cart-item-restaurant">{item.restaurant}</p>
              </div>
              <div className="cart-quantity">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
            </div>
          </div>
        ))}

        <div className="continue-buttons">
          <button className="continuePay">ادامه و پرداخت</button>
          <button className="continueShop">ادامه خرید</button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
