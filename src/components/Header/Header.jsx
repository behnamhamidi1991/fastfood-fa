import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '../../features/themeSlice/themeSlice';
import './header.scss';
import logo from '../../assets/burger.png';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa6';
import { FaShoppingCart } from 'react-icons/fa';
import sunIcon from '../../assets/icons/sun.svg';
import moonIcon from '../../assets/icons/moon.svg';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });
  const isSticky = () => {
    const header = document.querySelector('header');
    const scrollTop = window.scrollY;
    scrollTop >= 300
      ? header?.classList.add('is-sticky')
      : header?.classList.remove('is-sticky');
  };

  const theme = useSelector((state) => state.theme.dark);
  const dispatch = useDispatch();
  return (
    <header>
      <button
        className="hamburger-menu-icon"
        onClick={() => setOpenMenu(!openMenu)}
        style={theme ? { color: 'white' } : { color: 'black' }}
      >
        <GiHamburgerMenu />
      </button>
      <Link to="/" className="header-logo">
        <img src={logo} alt="logo" />
        <p>فودکورت و کافی شاپ سورن</p>
      </Link>
      <div className="header-links">
        <ul className={openMenu ? 'show' : ''}>
          <Link to="/" className="header-logo-navbar">
            <img src={logo} alt="logo" />
            <p>فودکورت و کافی شاپ سورن</p>
          </Link>
          <li>
            <Link to="/" className="header-link-item">
              صفحه اصلی
            </Link>
          </li>
          <li>
            <Link to="/" className="header-link-item">
              رویدادها
            </Link>
          </li>
          <li>
            <Link to="/" className="header-link-item">
              وبلاگ
            </Link>
          </li>
          <li>
            <Link to="/" className="header-link-item">
              درباره ما
            </Link>
          </li>
          <li>
            <Link to="/" className="header-link-item">
              تماس با ما
            </Link>
          </li>
        </ul>
      </div>
      <div className="header-icons">
        <Link to="/" className="header-icon-dashboard">
          <FaUser className="header-icon" />
          <p>پنل کاربری</p>
        </Link>
        <button
          onClick={() => dispatch(toggle(!theme))}
          className="header-theme-icon"
        >
          <img
            src={theme ? sunIcon : moonIcon}
            className="header-icon"
            alt=""
          />
        </button>
        <Link to="/" className="header-icon-wrapper">
          <FaShoppingCart className="header-icon" />
        </Link>
      </div>
    </header>
  );
};

export default Header;

{
  /* <button onClick={() => dispatch(toggle(!theme))}>حالت تاریک</button> */
}
