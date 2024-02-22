import React from 'react';
import './blog.scss';
import ReadMore from '../../components/shared/ReadMore/ReadMore';
import { blogPost } from '../../data';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  return (
    <div className="blog-page">
      <div className="blog-page-header">
        <h2>وبلاگ</h2>
        <p>جدیدترین مطالب ما را در این صفحه دنبال کنید</p>
      </div>

      <div className="blog-page-container">
        {blogPost.map((item) => (
          <div key={item.id} className="blog-page-box">
            <div className="blog-page-box-image">
              <img src={item.blogImg} alt="" />
            </div>

            <div className="blog-page-box-content">
              <h3>{item.title}</h3>
              <div className="blog-page-info-container">
                <p>نویسنده: {item.author}</p>
                <p>تاریخ انتشار: {item.date}</p>
              </div>
              <p className="blog-page-text">
                {item.content.substring(0, 189)} ...
              </p>
              <Link to={`/blog/${item.id}`} className="blog-page-read-more-btn">
                <ReadMore>بیشتر بخوانید</ReadMore>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
