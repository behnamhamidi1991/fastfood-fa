import React from 'react';
import './readmore.scss';
import { FaShoppingCart } from 'react-icons/fa';

const ReadMore = ({ children }) => {
  return <button className="ReadMoreBtn">{children}</button>;
};

export default ReadMore;
