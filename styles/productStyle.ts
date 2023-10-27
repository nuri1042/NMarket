import styled from "styled-components";
import { media } from "./theme";
import Image from 'next/image';

export const ContentWrap = styled.div`
  padding: 30px 0 80px 0;
  width: 100%;
  overflow-x: hidden;
  margin: 0 auto;
`;
export const ProductInfoWrap = styled.div`
  position: relative;
  margin-top: 10px;
  padding-top: 23px;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;

  ${media.medium`
      min-height: 630px;
  `}
`;
export const ProductPhotoWrap = styled.div`
  margin: 5px 40px;
   ${media.xlarge`
      margin: 5px 0;
    `} 
`;
export const ProductPhoto = styled.div`
  width: 260px;
  height: 260px;
  padding: 5px 5px 50px 5px;
  margin: 0 auto;
  ${media.xlarge`
      margin-right: 30px;
  `} 
 ${media.large`
    heigth: 300px;
 `} 
  ${media.medium`
    height: 260px;
  `}
`;
export const PdtMainImg = styled(Image)`
    display: inline;
    vertical-align: top;
`
export const ProductDetailWrap = styled.div`
  // width: 650px;
  ${media.large`
    width: 410px;
  `}
  ${media.medium`
    width: 410px;
  `}
`;
export const ProductInfo = styled.div`
  width: 440px;
  padding-bottom: 39px;
  border-bottom: 1px solid #ddd;
  min-height: 310px;

  ${media.medium`
    width: 410px;
  `}  
`;
export const Bnr = styled.div`
  margin-top: 10px;
    ${media.medium`
    width: 100%;
  `}  
`;
export const BnrImg = styled(Image)`
  width: 100%;
`
export const ProductBasic = styled.div`
  padding: 29px 0 0 0;
  border-bottom: 1px solid #ddd;
  width: 440px;

  ${media.medium`
    width: 100%;
  `}

  & h2 {
    padding-bottom: 25px;

    & p {
      padding-top: 9px;
      font-size: 26px;
      line-height: 130%;
      color: #000;
      width:100%;
    }
  }
`;
export const DetailInfo = styled.div`
  width: 440px;

  ${media.medium`
    width: 100%;
  `}
`;
export const SaleInfo = styled.dl`
  width: 100%;
  font-size: 16px;
  color: #555;

  & dt {
    float: left;
    width: 95px;
  }
  & dd {
    padding: 0 0 0 95px;

    & strong {
      font-weight: bold;
    }
  }
`;
export const SalePoint = styled.div`
  padding-top: 16px;
  font-weight: bold;
`;
export const ShipInfo = styled.div`
  padding-top: 16px;
`;
export const BtnArea = styled.div`
  padding-top: 15px;
  width: 100%;
  display: table;

  ${media.medium`
    width: 360px;
    width:100%;
  `}
`;
export const FormSpan = styled.span`
  display: inline-flex;

`;
export const AddToCartBtn = styled.button`
  width: 190px;
  height: 53px;
  color: #fff;
  padding: 18px 0;
  text-align: center;
  font-weight: bold;
  vertical-align: middle;
  cursor: pointer;
  background: #d50c0c;
  border: 1px solid #d50c0c;
  border-radius: 6px;

    ${media.medium`
    width: 160px;
  `}
`;
export const AddToFavorBtn = styled.div`
  width: 190px;
  height: 53px;
  padding: 18px 0;
  text-align: center;
  font-weight: bold;
  vertical-align: middle;
  cursor: pointer;
  border: 1px solid #d50c0c;
  border-radius: 6px;
  margin-left: 14px;
  color: #d50c0c;

  ${media.medium`
    width: 160px;
  `}
`;
