import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HomeHero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
        <img src="https://bulma.io/images/placeholders/480x640.png" alt="test"/>
        </div>
        <div>
        <img src="https://bulma.io/images/placeholders/480x640.png" alt="test"/>
        </div>
        <div>
        <img src="https://bulma.io/images/placeholders/480x640.png" alt="test"/>
        </div>
        <div>
        <img src="https://bulma.io/images/placeholders/480x640.png" alt="test"/>
        </div>
        <div>
        <img src="https://bulma.io/images/placeholders/480x640.png" alt="test"/>
        </div>
        <div>
        <img src="https://bulma.io/images/placeholders/480x640.png" alt="test"/>
        </div>
      </Slider>
    </div>
  );
};

export default HomeHero;
