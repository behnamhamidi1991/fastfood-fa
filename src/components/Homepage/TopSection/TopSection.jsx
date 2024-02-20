import React from 'react';
import './topsection.scss';
import burgerMain from '../../../assets/images/burger-main.png';
import { FaHamburger } from 'react-icons/fa';
import { GiSandwich } from 'react-icons/gi';
import { FaPizzaSlice } from 'react-icons/fa6';
import { GiChickenOven } from 'react-icons/gi';
import { GiCoffeeCup } from 'react-icons/gi';
import { GiCakeSlice } from 'react-icons/gi';

const TopSection = () => {
  return (
    <div className="top-section">
      <div className="top-section-right">
        <img src={burgerMain} alt="burger" />
      </div>

      {/* LEFT */}
      <div className="top-section-left">
        <div className="top-section-left-header">
          <h1>فودکورت و کافی شاپ سورن</h1>
          <p className="top-section-left-header-subtitle-1">
            بزرگترین مجموعه خدمات غذایی دارای شعب در سرتاسر ایران
          </p>
          <p className="top-section-left-header-subtitle-2">
            سفارش آنلاین و ارسال در سریع ترین زمان ممکن{' '}
          </p>
        </div>
        <div className="top-section-left-icons">
          <div className="top-section-icon-box">
            <FaHamburger className="top-section-icon" />
            <p>برگر</p>
          </div>
          <div className="top-section-icon-box">
            <GiSandwich className="top-section-icon" />
            <p>ساندویچ</p>
          </div>
          <div className="top-section-icon-box">
            <FaPizzaSlice className="top-section-icon" />
            <p>پیتزا</p>
          </div>
          <div className="top-section-icon-box">
            <GiChickenOven className="top-section-icon" />
            <p>ایرانی</p>
          </div>
          <div className="top-section-icon-box">
            <GiCoffeeCup className="top-section-icon" />
            <p>قهوه</p>
          </div>
          <div className="top-section-icon-box">
            <GiCakeSlice className="top-section-icon" />
            <p>شیرینی</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
