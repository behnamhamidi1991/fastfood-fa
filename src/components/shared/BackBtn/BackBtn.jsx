import React from 'react';
import { Link } from 'react-router-dom';
import './backbtn.scss';
import { IoMdHome } from 'react-icons/io';

const BackBtn = () => {
  return (
    <Link to="/" className="back-to-homepage-btn">
      <IoMdHome />

      <p>بازگشت به صفحه اصلی</p>
    </Link>
  );
};

export default BackBtn;
