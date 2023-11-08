import React from 'react';
import $ from 'jquery';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import carousel from '../../assets/images/ringcaroul.png';

const Carousel = () => {
  const options = {
    items: 1,
    autoplay: true,
    autoplayTimeout: 4000,
    nav: true,
    responsiveClass: true,
    navText: true,
    navText: ['Prev', 'Next'],
    smartSpeed: 1000,
    loop: true,
    // dots: false,
    margin: 0,
    responsive: {
      1100: {
        items: 3,
      },
      724: {
        items: 2,
      },
      500: {
        items: 1,
      },
      370: {
        items: 1,
        innerWidth: '100%',
        outerWidth: '100%',
      },
    },
  };
  return (
    <div>
      <OwlCarousel className="owl-theme" {...options}>
        <div class="item">
          <h4 style={{ width: '40 %' }}>
            <img className="ring" src={carousel} alt="" />
          </h4>
        </div>
        <div class="item">
          <h4 style={{ width: '40 %' }}>
            <img className="ring" src={carousel} alt="" />
          </h4>
        </div>
        <div class="item">
          <h4 style={{ width: '40 %' }}>
            <img className="ring" src={carousel} alt="" />
          </h4>
        </div>
        <div class="item">
          <h4 style={{ width: '40 %' }}>
            <img className="ring" src={carousel} alt="" />
          </h4>
        </div>
        <div class="item">
          <h4 style={{ width: '40 %' }}>
            <img className="ring" src={carousel} alt="" />
          </h4>
        </div>
        <div class="item">
          <h4 style={{ width: '40 %' }}>
            <img className="ring" src={carousel} alt="" />
          </h4>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default Carousel;
