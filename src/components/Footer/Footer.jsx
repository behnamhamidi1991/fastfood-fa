import React from 'react';
import './footer.scss';
import { IoLogoInstagram } from 'react-icons/io5';
import { CiFacebook } from 'react-icons/ci';
import { CiTwitter } from 'react-icons/ci';
import { PiTelegramLogo } from 'react-icons/pi';
import { FaWhatsapp } from 'react-icons/fa';
import { CiLinkedin } from 'react-icons/ci';
import { ImPinterest2 } from 'react-icons/im';
import { FaTiktok } from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';
import icon from '../../assets/burger.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="right">
        <div className="right-header">
          <div className="right-header-title">
            <img src={icon} alt="icon" className="icon" />
            <h2>فست فود و فودکورت سورنا</h2>
          </div>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </p>
        </div>
        <div className="right-middle">
          <input
            type="email"
            placeholder="جهت عضویت در خبرنامه ایمیل خود را وارد کنید"
          />
          <button type="submit">عضویت</button>
        </div>

        <div className="right-bottom">
          <div className="right-bottom-header">
            <h3>مارا در شبکه های اجتماعی دنبال کنید</h3>
          </div>
          <div className="right-icon-box">
            <ul>
              <li>
                <a href="#">
                  <IoLogoInstagram />{' '}
                </a>
              </li>
              <li>
                <a href="#">
                  <CiFacebook />{' '}
                </a>
              </li>
              <li>
                <a href="#">
                  <CiTwitter />{' '}
                </a>
              </li>
              <li>
                <a href="#">
                  <PiTelegramLogo />{' '}
                </a>
              </li>
              <li>
                <a href="#">
                  <FaWhatsapp />{' '}
                </a>
              </li>
              <li>
                <a href="#">
                  <CiLinkedin />{' '}
                </a>
              </li>
              <li>
                <a href="#">
                  <ImPinterest2 />{' '}
                </a>
              </li>
              <li>
                <a href="#">
                  <FaTiktok />{' '}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="left">
        <div className="left-top">
          <div className="left-top-header">
            <h3>لینک دسترسی آسان</h3>
          </div>

          <div className="left-top-link">
            <ul className="link-box">
              <h4 className="link-header">صفحات سایت</h4>
              <li className="link-item">
                <IoIosArrowBack className="arrowIcon" /> صفحه اصلی
              </li>
              <li className="link-item">
                <IoIosArrowBack className="arrowIcon" /> وبلاگ
              </li>
              <li className="link-item">
                <IoIosArrowBack className="arrowIcon" /> رویدادها
              </li>
              <li className="link-item">
                <IoIosArrowBack className="arrowIcon" /> درباره ما
              </li>
              <li className="link-item">
                <IoIosArrowBack className="arrowIcon" /> تماس با ما
              </li>
            </ul>
            <ul className="link-box">
              <h4 className="link-header">بخش کاربری</h4>
              <li className="link-item">
                <IoIosArrowBack className="arrowIcon" /> ورود کاربر
              </li>
              <li className="link-item">
                <IoIosArrowBack className="arrowIcon" /> ثبت نام
              </li>
              <li className="link-item">
                <IoIosArrowBack className="arrowIcon" /> راهنما
              </li>
              <li className="link-item">
                <IoIosArrowBack className="arrowIcon" /> پشتیبانی
              </li>
              <li className="link-item">
                <IoIosArrowBack className="arrowIcon" /> پنل کاربری
              </li>
            </ul>
            <ul className="link-box">
              <h4 className="link-header">سفارش</h4>
              <li className="link-item">
                <IoIosArrowBack className="arrowIcon" /> فست فود
              </li>
              <li className="link-item">
                <IoIosArrowBack className="arrowIcon" /> ایرانی
              </li>
              <li className="link-item">
                <IoIosArrowBack className="arrowIcon" /> ایتالیایی
              </li>
              <li className="link-item">
                <IoIosArrowBack className="arrowIcon" /> قهوه
              </li>
              <li className="link-item">
                <IoIosArrowBack className="arrowIcon" /> شیرینی
              </li>
            </ul>
            <ul className="link-box">
              <h4 className="link-header">تماس سریع</h4>
              <li className="link-item">
                <IoIosArrowBack className="arrowIcon" /> مدیریت
              </li>
              <li className="link-item">
                <IoIosArrowBack className="arrowIcon" /> رستوران
              </li>
              <li className="link-item">
                <IoIosArrowBack className="arrowIcon" /> کافی شاپ
              </li>
              <li className="link-item">
                <IoIosArrowBack className="arrowIcon" /> حراست
              </li>
              <li className="link-item">
                <IoIosArrowBack className="arrowIcon" /> اطلاعات
              </li>
            </ul>
          </div>
        </div>
        <div className="left-middle">
          <div className="left-middle-header">
            <h3>شعب کافه فودکورت سورنا</h3>
          </div>

          <div className="left-middle-links">
            <ul className="link-box">
              <li className="link-item">
                <IoIosArrowBack className="arrowIcon" /> تهران
              </li>
              <li className="link-item">
                <IoIosArrowBack className="arrowIcon" /> کرج
              </li>
              <li className="link-item">
                <IoIosArrowBack className="arrowIcon" /> اصفهان
              </li>
              <li className="link-item">
                <IoIosArrowBack className="arrowIcon" /> مشهد
              </li>
              <li className="link-item">
                <IoIosArrowBack className="arrowIcon" /> شیراز
              </li>
            </ul>
            <ul className="link-box">
              <li className="link-item">
                <IoIosArrowBack className="arrowIcon" /> اهواز
              </li>
              <li className="link-item">
                <IoIosArrowBack className="arrowIcon" /> بندرعباس
              </li>
              <li className="link-item">
                <IoIosArrowBack className="arrowIcon" /> چابهار
              </li>
              <li className="link-item">
                <IoIosArrowBack className="arrowIcon" /> ایلام
              </li>
              <li className="link-item">
                <IoIosArrowBack className="arrowIcon" /> کرمانشاه
              </li>
            </ul>
            <ul className="link-box">
              <li className="link-item">
                <IoIosArrowBack className="arrowIcon" /> رشت
              </li>
              <li className="link-item">
                <IoIosArrowBack className="arrowIcon" /> انزلی
              </li>
              <li className="link-item">
                <IoIosArrowBack className="arrowIcon" /> چالوس
              </li>
              <li className="link-item">
                <IoIosArrowBack className="arrowIcon" /> کلاردشت
              </li>
              <li className="link-item">
                <IoIosArrowBack className="arrowIcon" /> ساری
              </li>
            </ul>
            <ul className="link-box">
              <li className="link-item">
                <IoIosArrowBack className="arrowIcon" /> گنبدکاووس
              </li>
              <li className="link-item">
                <IoIosArrowBack className="arrowIcon" /> گرگان
              </li>
              <li className="link-item">
                <IoIosArrowBack className="arrowIcon" /> اراک
              </li>
              <li className="link-item">
                <IoIosArrowBack className="arrowIcon" /> نوشهر
              </li>
              <li className="link-item">
                <IoIosArrowBack className="arrowIcon" /> آبادان
              </li>
            </ul>
            <ul className="link-box">
              <li className="link-item">
                <IoIosArrowBack className="arrowIcon" /> بابلسر
              </li>
              <li className="link-item">
                <IoIosArrowBack className="arrowIcon" /> کرمان
              </li>
              <li className="link-item">
                <IoIosArrowBack className="arrowIcon" /> بوشهر
              </li>
              <li className="link-item">
                <IoIosArrowBack className="arrowIcon" /> بهبهان
              </li>
              <li className="link-item">
                <IoIosArrowBack className="arrowIcon" /> قزوین
              </li>
            </ul>
          </div>
        </div>
        <div className="left-bottom">
          <p className="copyright">
            تمامی حقوق برای مجموعه کافه فودکورت سورنا محفوظ است.
          </p>
          <p className="designer">طراح وبسایت: بهنام حمیدی</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
