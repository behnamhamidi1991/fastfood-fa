import React, { useEffect } from 'react';
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
          <button className="singleProduct-left-content-btn">
            اضافه کردن به سبد خرید
          </button>
        </div>
        <div className="singleProduct-left-cart">
          <button>+</button>
          <span>1</span>
          <button>-</button>
        </div>
        <div className="singleProduct-left-total">
          <FaShoppingCart className="singleProduct-left-cart-icon" />
          <p>جمع مبلغ در سبد خرید شما: 0</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduction;
