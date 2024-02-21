import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './feedback.scss';
import { feedback } from '../../../foodData';

const Feedback = () => {
  return (
    <div className="feedback-container">
      <div className="titleBox">
        <h2>نظرات مشتریان ما</h2>
        <p>نظرات مشتریان ما نشان دهنده کیفیت سرویس های ما می باشد</p>
      </div>

      <div className="slider-box">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {feedback.map((item) => (
            <SwiperSlide key={item.id} className="slide">
              <div className="image-container">
                <img
                  src={item.img}
                  width={200}
                  alt={item.name}
                  className="image"
                />
              </div>
              <div className="content-container">
                <h4>{item.name}</h4>
                <p>{item.feedback}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Feedback;
