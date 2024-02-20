import React from 'react';
import TopSection from '../../components/Homepage/TopSection/TopSection';
import TopSlider from '../../components/Homepage/TopSlider/TopSlider';
import IranianFood from '../../components/Homepage/IranianFood/IranianFood';
import FoodStory from '../../components/Homepage/FoodStory/FoodStory';

const Homepage = () => {
  return (
    <div>
      <TopSection />
      <TopSlider />
      <IranianFood />
      <FoodStory />
    </div>
  );
};

export default Homepage;
