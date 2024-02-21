import React from 'react';
import './topslider.scss';
import { food } from '../../../foodData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { IoIosPricetag } from 'react-icons/io';
import { IoRestaurant } from 'react-icons/io5';
import { MdCategory } from 'react-icons/md';
import AddToCart from '../../shared/AddToCart/AddToCart';
import ReadMore from '../../shared/ReadMore/ReadMore';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItemToCart } from '../../../features/cartSlice/cartSlice';

const TopSlider = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleAddTocart = (item) => {
    dispatch(addItemToCart(item));
  };

  return (
    <div className="topslider-page">
      <div className="topslider-header">
        <h2>آیتم های برگزیده</h2>
        <p>آیتم های برگزیده از دیدگاه کاربران و مشتریان ما</p>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={12}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          99: {
            slidesPerView: 1,
            spaceBetween: 12,
          },
          802: {
            slidesPerView: 2,
            spaceBetween: 12,
          },
          1194: {
            slidesPerView: 3,
            spaceBetween: 12,
          },
          1596: {
            slidesPerView: 4,
            spaceBetween: 12,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, FreeMode, Pagination]}
        className="topslider-swiper"
      >
        {food.map((item) => (
          <SwiperSlide key={item.id} className="topslider-swiper-slide">
            <div className="topslider-image-container">
              <img src={item.img} alt="" />
            </div>
            <div className="topslider-content">
              <h3>{item.title}</h3>
              <p>{item.description.substring(0, 198)} ...</p>
            </div>
            <div className="topslider-info">
              <p className="topslider-category">
                <MdCategory /> دسته بندی: {item.category}
              </p>
              <p className="topslider-price">
                {' '}
                <IoIosPricetag /> قیمت: {item.price}
              </p>
              <p className="topslider-restaurant">
                <IoRestaurant /> رستوران: {item.restaurant}
              </p>
              <div className="topslider-btn-container">
                <div onClick={() => handleAddTocart(item)}>
                  <AddToCart>اضافه کردن به سبد خرید</AddToCart>
                </div>
                <Link to="/">
                  <ReadMore>مشاهده محصول</ReadMore>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopSlider;
