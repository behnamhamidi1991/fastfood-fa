import React from 'react';
import { useParams } from 'react-router-dom';
import { food } from '../../../foodData';

const SingleProduction = () => {
  const { id } = useParams();
  const singleProduction = food.find((item) => item.id === id);

  return (
    <div>
      <p>{singleProduction.title}</p>
    </div>
  );
};

export default SingleProduction;
