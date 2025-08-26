import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousel = () => {
  const banners = [
    "/images/banner23.webp",
    "/images/BNR1.webp",
    "/images/BNR2.webp",
    "/images/BNR4.webp",
    "/images/BNR5.webp",
    "/images/BNR6.webp",
    "/images/BNR7.webp",
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="home" className="pt-20 overflow-hidden">
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div key={index} className="w-full aspect-[1900/680]">
            <img
              src={banner}
              alt={`Banner ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroCarousel;
