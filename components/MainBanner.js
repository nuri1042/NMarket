import React from "react";
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const MainBanner = () => {
  const SliderWrap = styled.div`
    overflow: hidden;
    .slick-track {
      display: flex;
    }
  `;

  const SampleArrow = (props) => {
    const { className, style } = props;
    return <div className={className} style={{ ...style, display: "none" }} />;
  };

  const settings = {
    dots: true,
    speed: 500,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    prevArrow: <SampleArrow />,
    nextArrow: <SampleArrow />,

    responsive: [
      // 반응형 구현 옵션
      {
        breakpoint: 768, // 화면 사이즈 768
        settings: {
          width: "1200px",
        },
      },
    ],

    appendDots: (dots) => <ul style={{ bottom: "20px" }}>{dots}</ul>, //slick-dots에 style 적용
  };

  return (
    <>
      <SliderWrap>
        <Slick {...settings}>
          <div style={{ width: "700px" }}>
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
      </SliderWrap>
    </>
  );
};

export default MainBanner;
