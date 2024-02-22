import React from 'react';
import { useParams } from 'react-router-dom';
import { blogPost } from '../../../data';
import './blogsingle.scss';

const BlogSinglePost = () => {
  const { id } = useParams();
  const singlePost = blogPost.find((item) => item.id === id);

  return (
    <div className="singleblog-page">
      <div className="singleblog-image"></div>
    </div>
  );
};

export default BlogSinglePost;
