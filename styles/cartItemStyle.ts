import styled from "styled-components";
import { media } from "./theme";

export const ItemInfoBox = styled.div`
  display: flex;
  width: 100%;
`;
export const ItemInfo = styled.div`
  width: 50.3%;
  margin-bottom: 0;
  padding: 22px 0;
  border-right: 1px solid #ebeef2;
  position: relative;

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export const ProductThumb = styled.div`
  width: 70px;
  height: 70px;
  float: left;
  margin-left: 10px;
`;

export const ProductInfo = styled.div`
  width: calc(100%-172px);
  margin: 0 42px 0 20px;
  float: left;

   ${media.medium`
      width: 250px;
  `} 
  & p {
    & a {
      font-size: 18px;
      font-weight: 600;
      ${media.medium`
      font-size: 22px;
      `}
      ${media.small`
      font-size: 27px;
      `}
    }
  }
`;

export const Price = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-top: 7px;
  ${media.medium`
      font-size: 20px;
  `}
  ${media.small`
      font-size: 27px;
  `}
`;

export const ItemOptionBox = styled.div`
  border-right: 1px solid #ebeef2;
  width: 28.3%;
  display: flex;
  justify-content: center;
  padding: 22px;

  ${media.large`
    flex-direction: column;
    align-items: center;
  `}
`;

export const QtyDesc = styled.div`
  float: left;
  font-size: 13px;
  margin: 23px 0;

  ${media.large`
      margin: 0;
  `} 
  ${media.medium`
    margin: 0;
    font-size: 18px;
  `}
  ${media.small`
    margin: 0;
    font-size: 22px;
    font-weight: 500;
  `}
`;

export const InputQty = styled.div`
  float: right;
  padding: 0 12px;

  & div {
    padding-top: 16px;

    & input {
      width: 32px;
      height: 30px;
      text-align: center;
      border: 1px solid #ebeef2;
      box-sizing: border-box;

    }
  }
`;
export const InputQtyBtn = styled.button`
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: 1px solid #ebeef2;
`;
export const ItemDelBtn = styled.button`
  width: 48px;
  height: 24px;
  margin-top: 20px;
  background: #202429;
  border: none;
  color: #fff;

  ${media.medium`
    width: 54px;
    height: 32px;
    font-size: 16px;
  `}
`;
export const BtnItemBuyWrap = styled.div`
  position: relative;
  width: 21.4%;
  text-align: center;
`;

export const BtnItemBuyBox = styled.div`
  position: absolute;
  top: 38%;
  left: 0;
  width: 100%;
`;

export const ItemPrice = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #202429;
  ${media.medium`
    font-size: 21px;
  `}
  ${media.small`
    font-size: 30px;
  `}
`;
