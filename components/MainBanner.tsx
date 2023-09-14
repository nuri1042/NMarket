import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";
import { BannerImages } from "../database/bannerImage";
import { number, string } from "prop-types";

interface ImagesType {
  id: number;
  src: string;
  alt: string;
}
const MainBanner = () => {
  const [images, setImages] = useState<ImagesType[]>(BannerImages);

  const SliderWrap = styled.div`
    overflow: hidden;
    .slick-track {
      display: flex;
    }
  `;

  const SampleArrow = (props: any) => {
    const { className, style } = props;
    return <div className={className} style={{ ...style, display: "none" }} />;
  };

  const settings: Settings = {
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

    appendDots: (dots: React.ReactNode) => (
      <ul style={{ bottom: "20px" }}>{dots}</ul>
    ), //slick-dots에 style 적용
  };

  return (
    <>
      <SliderWrap>
        <Slider {...settings}>
          {images.map((item) => {
            return (
              <div>
                <Image
                  src={`/${item.src}`}
                  width={"1920px"}
                  height={"600px"}
                  layout={"responsive"}
                />
              </div>
            );
          })}
        </Slider>
      </SliderWrap>
    </>
  );
};

export default MainBanner;
