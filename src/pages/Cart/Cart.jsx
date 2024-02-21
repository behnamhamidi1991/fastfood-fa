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

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

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
                <p className="cart-item-price">قیمت: {item.price}</p>
                <p className="cart-item-restaurant">
                  رستوران: {item.restaurant}
                </p>
              </div>

              <div className="cart-quantity">
                <button
                  className="quantity-btn"
                  onClick={() => handleDecrement(item.id)}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  className="quantity-btn"
                  onClick={() => handleIncrement(item.id)}
                >
                  +
                </button>
                <button
                  className="cart-remove-btn"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  حذف آیتم
                </button>
              </div>
            </div>
          </div>
        ))}

        {cart.length !== 0 ? (
          <div className="continue-buttons">
            <button className="continuePay">ادامه و پرداخت</button>
            <button className="continueShop">ادامه خرید</button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ShoppingCart;
