import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { blogPost } from '../../../data';
import './blogsingle.scss';
import { CiInstagram } from 'react-icons/ci';
import { PiLinkedinLogoThin } from 'react-icons/pi';
import { PiYoutubeLogoThin } from 'react-icons/pi';
import { PiWhatsappLogoThin } from 'react-icons/pi';
import { PiFacebookLogoThin } from 'react-icons/pi';
import { PiTiktokLogoThin } from 'react-icons/pi';
import Comments from '../../../components/shared/Comments/Comments';

const BlogSinglePost = () => {
  const { id } = useParams();
  const singlePost = blogPost.find((item) => item.id === id);
  const filteredPosts = blogPost.filter((item) => item.id !== id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="singleblog-page">
      <div className="singleblog-page-right">
        <div className="singleblog-image">
          <img
            src={singlePost.blogImg}
            alt={singlePost.title}
            className="singlepost-blog-top-image"
          />
        </div>
        <div className="singleblog-content">
          <h3>{singlePost.title}</h3>
          <p>{singlePost.content}</p>
        </div>
        <div className="comments">
          <Comments />
        </div>
      </div>
      <div className="singleblog-page-left">
        <div className="singleblog-sidebar-top">
          <div className="singleblog-sidebar-top-image">
            <img
              src={singlePost.blogImg}
              alt={singlePost.title}
              className="singleblog-post-image"
            />
            <img
              src={singlePost.authorImg}
              alt="profile-img"
              className="singleblog-profile"
            />
          </div>
          <div className="singleblog-sidebar-top-content">
            <p>نویسنده: {singlePost.author}</p>
            <p>انتشار: {singlePost.date}</p>
            <p className="blog-page-about-me">
              درباره من: لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
              چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
              روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
              تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود.
            </p>
            <div className="blog-writer-social">
              <ul>
                <li>
                  <CiInstagram />
                </li>
                <li>
                  <PiLinkedinLogoThin />
                </li>
                <li>
                  <PiYoutubeLogoThin />
                </li>
                <li>
                  <PiWhatsappLogoThin />
                </li>
                <li>
                  <PiFacebookLogoThin />
                </li>
                <li>
                  <PiTiktokLogoThin />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="singleblog-sidebar-middle">
          <h3>سایر مطالب</h3>
          <ul>
            {filteredPosts.map((item) => (
              <li key={item.id}>
                <Link
                  to={`/blog/${item.id}`}
                  className="singleblog-sidebar-middle-link"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="singleblog-sidebar-bottom"></div>
      </div>
    </div>
  );
};

export default BlogSinglePost;
