import React from 'react';
import './iranianfood.scss';
import { iranian } from '../../../foodData';

const IranianFood = () => {
  return (
    <div className="iranian-food">
      <div className="iranian-food-header">
        <h2>ویژه: غذاهای ایرانی با قیمت استثنائی</h2>
        <p>
          اینجا می تونید بهترین غذاهای ایرانی رو با ویژه ترین قیمت سفارش بدید
        </p>
      </div>

      <div className="iranian-food-container">
        {iranian.map((item) => (
          <div key={item.id} className="iranian-food-box">
            <div className="iranian-image-container">
              <img
                src={item.img}
                alt="food"
                className={item.soldout === true ? 'soldout' : ''}
              />
            </div>
            <div className="iranian-food-content">
              {item.soldout === false ? (
                <p className="iranian-food-price"> {item.price} تومان</p>
              ) : null}
              {item.soldout === false ? (
                <p className="iranian-food-discount">50% تخفیف ویژه</p>
              ) : null}
              {item.soldout === true ? (
                <p className="iranian-food-soldout">اتمام موجودی :(</p>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IranianFood;
