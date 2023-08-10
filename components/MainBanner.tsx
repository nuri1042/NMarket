import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import Image from 'next/image';

const MainBanner = () => {
  const SliderWrap = styled.div`
    overflow: hidden;
    .slick-track {
      display: flex;
    }
  `;
  // slick-dots > li > button에 가끔씩 숫자가 노출되는 것 innerHTML=""로 해결
  const removeText = (item: any) => {
    item.innerHTML = '';
  };
  let dotNums;
  if (typeof document !== 'undefined') {
    dotNums = document.querySelector('.slick-dots > li');
    dotNums.querySelectorAll('button').forEach(removeText);
  }

  const SampleArrow = (props: any) => {
    const { className, style } = props;
    return <div className={className} style={{ ...style, display: 'none' }} />;
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

    // responsive: [
    //   // 반응형 옵션 구현
    //   {
    //     breakpoint: 768, // 화면 사이즈 768
    //     settings: {
    //       width: "1200px",
    //     },
    //   },
    // ],

    appendDots: (dots: React.ReactNode) => <ul style={{ bottom: '20px' }}>{dots}</ul>, //slick-dots에 style 적용
  };

  return (
    <>
      <SliderWrap>
        <Slider {...settings}>
          <div>
            <Image src='/img/banners/banner1.jpg' alt='first slide' width={'1920px'} height={'600px'} layout={'responsive'} />
          </div>
          <div>
            <Image src='/img/banners/banner2.png' alt='second slide' width={'1920px'} height={'600px'} layout={'responsive'} />
          </div>
          <div>
            <Image src='/img/banners/banner3.jpg' alt='third slide' width={'1920px'} height={'600px'} layout={'responsive'} />
          </div>
          <div>
            <Image src='/img/banners/banner4.jpg' alt='fourth slide' width={'1920px'} height={'600px'} layout={'responsive'} />
          </div>
          <div>
            <Image src='/img/banners/banner5.png' alt='fifth slide' width={'1920px'} height={'600px'} layout={'responsive'} />
          </div>
          <div>
            <Image src='/img/banners/banner6.png' alt='sixth slide' width={'1920px'} height={'600px'} layout={'responsive'} />
          </div>
          <div>
            <Image src='/img/banners/banner7.jpg' alt='seventh slide' width={'1920px'} height={'600px'} layout={'responsive'} />
          </div>
        </Slider>
      </SliderWrap>
    </>
  );
};

export default MainBanner;
