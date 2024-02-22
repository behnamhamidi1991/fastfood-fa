import React from 'react';
import { useParams } from 'react-router-dom';
import { blogPost } from '../../../data';
import './blogsingle.scss';

const BlogSinglePost = () => {
  const { id } = useParams();
  const singlePost = blogPost.find((item) => item.id === id);

  return (
    <div className="singleblog-page">
      <div className="singleblog-page-right">
        <div className="singleblog-image"></div>
        <div className="singleblog-content">
          <h3>{singlePost.title}</h3>
          <p>{singlePost.content}</p>
        </div>
        <div className="comments"></div>
      </div>
      <div className="singleblog-page-left">
        <div className="singleblog-sidebar-top"></div>
        <div className="singleblog-sidebar-middle"></div>
        <div className="singleblog-sidebar-bottom"></div>
      </div>
    </div>
  );
};

export default BlogSinglePost;
