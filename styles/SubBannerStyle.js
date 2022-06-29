import styled from "styled-components";
export const SubBannerLayout = styled.div`
  height: 330px;
  padding: 58px 0;
  background: url(http://fiximage.10x10.co.kr/web2018/main/bg_pattern_slash.png)
    0 0 repeat;
`;

export const Items = styled.div`
  text-align: center;
  padding-right: 18px;
  float: right;

  & ul {
    display: flex;
    width: 880px;

    & li {
      width: 244px;
      margin-left: 46px;
      list-style: none;
    }
  }
`;
export const Thumbnail = styled.div`
  width: 220px;
  border: 12px solid #fff;
  border-radius: 50%;

  & img {
    border-radius: 50%;
    width: 100%;
  }
`;
export const Desc = styled.div`
  margin-top: 20px;
`;
export const DescName = styled.div`
  & p {
    padding: 15px 12px 0;
    font-size: 15px;
    line-height: 1.4;
  }
`;
export const DescPrice = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-top: 3px;

  & span {
    padding-right: 3px;
  }
`;

export const InnerContent = styled.div`
  margin: 0 auto;
  width: 1140px;
  position: relative;    
  }
`;
export const InnerSaleBanner = styled.div`
  float: left;
  margin-left: 20px;
  position: relative;
  top: 50px;

  & h2 {
    padding-top: 28px;
    margin: 0;
  }
`;
// .text-exhibition {
//   padding: 64px 0 15px;
// }
// .list-card > ul {
//   display: flex;
//   overflow: hidden;
//   flex-wrap: wrap;
//   justify-content: center;
// }
// .list-card > ul > img {
//   width: 360px;
// }

// .list-card > ul > li {
//   width: 360px;
//   height: auto;
//   padding: 0 15px;
// }
// .list-card-thumbnail > img {
//   width: 360px;
// }
// .headline {
//   padding-top: 14px;
//   font-size: 17px;
//   font-weight: 500;
//   line-height: 23px;
// }
// .headline > b {
//   vertical-align: middle;
// }
// .subcopy {
//   padding-top: 5px;
//   font-size: 14px;
//   line-height: 18px;
// }
// .ellipsis {
//   padding-right: 4px;
//   vertical-align: middle;
// }
// .headline > b {
//   color: #ff3131;
// }
