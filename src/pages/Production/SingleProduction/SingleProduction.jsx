import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { food } from '../../../foodData';
import Sidebar from '../../../components/shared/Sidebar/Sidebar';
import './singleproduction.scss';
import { blogPost } from '../../../data';
import AddToCart from '../../../components/shared/AddToCart/AddToCart';
import { useSelector, useDispatch } from 'react-redux';
import {
  addItemToCart,
  selectTotal,
  selectCart,
} from '../../../features/cartSlice/cartSlice';

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
        <div className="singleProduct-image">
          <img src={singleProduction.img} alt={singleProduction.title} />
        </div>
        <div className="singleProduct-content">
          <h1>{singleProduction.title}</h1>
          <p>{singleProduction.description}</p>
        </div>
        {/* COMMENTS */}
        <div className="comments"></div>
        {/* COMMENTS */}
      </div>
      <div className="singleProduct-left">
        <div className="item-sidebar-info">
          <div className="item-sidebar-info-top">
            <h4>محصول: {singleProduction.title}</h4>
            <p className="item-sidebar-info-restaurant">
              رستوران: {singleProduction.restaurant}
            </p>
            <p className="item-sidebar-info-price">
              قیمت: {singleProduction.price}
            </p>
            <Link to="/cart" className="sidebar-info-price-total">
              سبد خرید: {total}
            </Link>
            <div onClick={() => handleAddToCart(singleProduction)}>
              <AddToCart>اضافه کردن به سبد خرید</AddToCart>
            </div>
          </div>
        </div>
        <div className="singleProduct-sidebar-header">
          <ul>
            <h3>سایر آیتم های محبوب</h3>
            {filteredFood.map((item) => (
              <li key={item.id}>
                <Link className="production-sidebar-link" to="/">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Test */}
        <div className="singleProduct-sidebar-middle">
          <ul>
            <h3>آخرین مطالب</h3>
            {blogPost.map((item) => (
              <li key={item.id}>
                <Link className="production-sidebar-link" to="/">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleProduction;
