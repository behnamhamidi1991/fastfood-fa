import React from 'react';
import TopSection from '../../components/Homepage/TopSection/TopSection';
import TopSlider from '../../components/Homepage/TopSlider/TopSlider';
import IranianFood from '../../components/Homepage/IranianFood/IranianFood';
import FoodStory from '../../components/Homepage/FoodStory/FoodStory';
import Feedback from '../../components/Homepage/Feedback/Feedback';
import Blog from '../../components/Homepage/Blog/Blog';

const Homepage = () => {
  return (
    <div>
      <TopSection />
      <TopSlider />
      <IranianFood />
      <FoodStory />
      <Feedback />
      <Blog />
    </div>
  );
};

export default Homepage;
