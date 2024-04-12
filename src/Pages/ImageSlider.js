import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 2000, // Adjust as needed
    dots: true,
    arrows: false,
  };
  return (
    <div className="slider-container">
      <Slider {...sliderSettings}>
        <div className="slider-item">
        </div>
        <div className="slider-item1">
        </div>
        <div className="slider-item2">
        </div>
        <div className="slider-item3">
        </div>
        
      </Slider>
    </div>
  );
};

export default ImageSlider;
