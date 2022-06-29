import React from "react";
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainBanner = () => {
  const settings = {
    dots: true,
    arrows: true,
    speed: 500,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,

    appendDots: (dots) => <ul style={{ bottom: "20px" }}>{dots}</ul>, //slick-dots에 style 적용
  };
  return (
    <>
      <div>
        <Slick {...settings}>
          <div>
            <img src="/img/banners/banner1.jpg" alt="first slide" />
          </div>
          <div>
            <img src="/img/banners/banner2.gif" alt="second slide" />
          </div>
          <div>
            <img src="/img/banners/banner3.jpg" alt="third slide" />
          </div>
          <div>
            <img src="/img/banners/banner4.jpg" alt="fourth slide" />
          </div>
          <div>
            <img src="/img/banners/banner5.gif" alt="fifth slide" />
          </div>
          <div>
            <img src="/img/banners/banner6.gif" alt="sixth slide" />
          </div>
          <div>
            <img src="/img/banners/banner7.jpg" alt="seventh slide" />
          </div>
        </Slick>
      </div>
    </>
  );
};

export default MainBanner;
