import React from 'react';
import './topslider.scss';
import { food } from '../../../foodData';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const TopSlider = () => {
  return (
    <div className="topslider-page">
      <div className="topslider-header">
        <h2>آیتم های برگزیده</h2>
        <p>آیتم های برگزیده از دیدگاه کاربران و مشتریان ما</p>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopSlider;
