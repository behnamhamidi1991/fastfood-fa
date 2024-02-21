import React from 'react';
import { useParams } from 'react-router-dom';
import { blogPost } from '../../../data';

const BlogSinglePost = () => {
  const { id } = useParams();
  const singlePost = blogPost.find((item) => item.id === id);

  return (
    <div>
      <h1>{singlePost.title}</h1>
    </div>
  );
};

export default BlogSinglePost;
