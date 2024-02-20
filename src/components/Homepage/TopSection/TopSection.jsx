import React from 'react';
import './topsection.scss';
import burgerMain from '../../../assets/images/burger-main.png';
import { FaHamburger } from 'react-icons/fa';
import { GiSandwich } from 'react-icons/gi';
import { FaPizzaSlice } from 'react-icons/fa6';
import { GiChickenOven } from 'react-icons/gi';
import { GiCoffeeCup } from 'react-icons/gi';
import { GiCakeSlice } from 'react-icons/gi';
import { MdDeliveryDining } from 'react-icons/md';
import { MdOutlineCreditScore } from 'react-icons/md';
import { IoRestaurantSharp } from 'react-icons/io5';

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
            <MdDeliveryDining />
            بزرگترین مجموعه خدمات غذایی دارای شعب در سرتاسر ایران
          </p>
          <p className="top-section-left-header-subtitle-1">
            <IoRestaurantSharp />
            سفارش آنلاین و ارسال در سریع ترین زمان ممکن{' '}
          </p>
          <p className="top-section-left-header-subtitle-1">
            <MdOutlineCreditScore />
            پرداخت امن و دارای مجوز معتبر{' '}
          </p>
          <p className="top-section-left-header-subtitle-2">
            <b>درباره ما:</b> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
            صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
            روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
            تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی
            می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت
            فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری.
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
