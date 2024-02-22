import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { food } from '../../../foodData';
import './singleproduction.scss';
import { useSelector, useDispatch } from 'react-redux';
import {
  addItemToCart,
  selectTotal,
  selectCart,
} from '../../../features/cartSlice/cartSlice';
import { IoIosPricetag } from 'react-icons/io';
import { IoRestaurant } from 'react-icons/io5';
import { FaShoppingCart } from 'react-icons/fa';

const SingleProduction = () => {
  const { id } = useParams();
  const singleProduction = food.find((item) => item.id === id);

  const filteredFood = food.filter((item) => item.id !== id);
  const cart = useSelector(selectCart);
  const itemQuantity = cart.find((item) => item.id === id)?.quantity || 0;
  const itemExist = cart.find((item) => item.id === id);

  const dispatch = useDispatch();
  const total = useSelector((state) => selectTotal(selectCart(state)));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ADD TO CART
  const handleAddToCart = (item) => {
    dispatch(addItemToCart(item));
  };

  return (
    <div className="singleProduct">
      <div className="singleProduct-right">
        <h3>{singleProduction.title}</h3>
        <p>{singleProduction.description}</p>
        <div className="singleProduct-right-other-container">
          <div className="singleProduct-right-other-header">
            <h3>آیتم های مشابه</h3>
          </div>
          <div className="singleProduct-right-other">
            {filteredFood.map((item) => (
              <Link
                to={`/production/${item.id}`}
                key={item.id}
                className="singleProduct-right-other-box"
              >
                <img src={item.img} alt={item.title} />
                <h4>{item.title}</h4>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="singleProduct-left">
        <img src={singleProduction.img} alt={singleProduction.title} />
        <div className="singleProduct-left-content">
          <p className="singleProduct-left-content-price">
            <IoIosPricetag className="singleProduct-left-content-icon" />
            قیمت: {singleProduction.price}
          </p>
          <p className="singleProduct-left-content-restaurant">
            <IoRestaurant className="singleProduct-left-content-icon" />
            رستوران: {singleProduction.restaurant}
          </p>
          <button
            className="singleProduct-left-content-btn"
            onClick={() => handleAddToCart(singleProduction)}
          >
            اضافه کردن به سبد خرید
          </button>
        </div>

        {itemExist ? (
          <div className="singleProduct-left-cart">
            <p>تعداد: </p>
            <p>{itemQuantity}</p>
          </div>
        ) : null}
        <div className="singleProduct-left-total">
          <FaShoppingCart className="singleProduct-left-cart-icon" />
          <p>
            جمع مبلغ در سبد خرید شما: <span>{total}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduction;
