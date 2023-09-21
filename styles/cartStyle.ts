import styled from "styled-components";
import { media } from "./theme";

export const CartWrap = styled.div`
  padding-bottom: 80px;
  width: 100%;
`;
export const PageTitle = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 54px 20px 30px;

  & h1 {
    margin: 0;
    font-size: 32px;
    ${media.medium`
      font-size: 38px;
     `}
    ${media.small`
      font-size: 43px;
     `}
  }
`;
export const CartProductBox = styled.div`
  margin: 40px auto 0;
  max-width: 1200px;
  border-bottom: 0;

  & h2 {
    margin: 0 20px 20px;
    padding: 0;
    line-height: 1.3;

    & strong {
      margin-left: 0;
      font-size: 22px;

      ${media.medium`
      font-size: 30px;
     `}
      ${media.small`
      font-size: 38px;
     `}
    }
  }
`;
export const CartHeader = styled.div`
  display: block;
  margin: 0 20px;
  padding: 16px 0 15px;
  border-top: 1px solid #ebeef2;
  border-bottom: 1px solid #ebeef2;
`;

export const EmptyCartDesc = styled.div`
  margin: 0 auto;
  text-align: center;
  margin-top: 60px;
  font-size: 18px;

  ${media.medium`
      font-size: 22px;
      font-weight: 600;
     `}
`;

export const TitBox = styled.div`
  width: 100%;
  height: 30px;

  ${media.small`
         height: 40px;
        `}
`;
export const ProductInfoCell = styled.p`
  float: left;
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  width: 50.3%;
  ${media.medium`
      font-size: 22px;
      font-weight: 600;
     `}
  ${media.small`
      font-size: 30px;
      font-weight: 600;
     `}
`;
export const PaymentPriceInfo = styled.div`
  margin: 73px auto 60px;
  width: 100%;
`;
export const PaymentPriceInfoBox = styled.div`
  display: flex;
  margin: 0 20px;
  padding: 27px 0;
  border-bottom: 1px solid #808893;
  border-top: 1px solid #808893;
  text-align: center;

  & ul {
    margin: 0;
    padding: 0;
    list-style: none;
    width: 62%;
    display: flex;
    justify-content: center;

    & li {
      position: relative;
      display: inline-block;
      margin: 9px 0;
      vertical-align: middle;

      & strong {
        font-size: 14px;
        font-weight: 400;
        color: #202429;
        ${media.medium`
          font-size: 22px;
          font-weight: 700;
        `}
        ${media.small`
          font-size: 28px;
          font-weight: 700;
        `}
      }

      & p {
        font-size: 18px;
        font-weight: 700;
        margin-top: 8px;
        ${media.medium`
          font-size: 22px;
          font-weight: 700;
        `}
        ${media.small`
          font-size: 24px;
          font-weight: 700;
        `}
      }
    }
  }
`;
export const Plus = styled.div`
  position: relative;
  left: 28px;
  top: 28px;
  width: 20px;
  height: 20px;
  color: #d3d7df;
`;
export const PaymentBox = styled.li`
  position: relative;
  display: inline-block;
  margin: 9px 0;
  vertical-align: middle;
  padding-left: 56px;

  & strong {
    font-size: 14px;
    font-weight: 400;
    color: #202429;
  }

  & p {
    font-size: 18px;
    font-weight: 700;
    margin-top: 8px;
  }
`;
export const PaymentAllPrice = styled.div`
  width: 38%;
  margin-left: 8px;
  border-left: 1px solid #d3d7df;
`;
export const PaymentAllPriceBox = styled.div`
  margin: 9px 0;

  & strong {
    font-size: 20px;
    font-weight: 700;
    color: #202429;
    ${media.medium`
        font-size: 25px;
    `}
    ${media.small`
        font-size: 30px;
    `}
  }

  & p {
    font-size: 24px;
    font-weight: 700;
    margin-top: 4px;
    color: #ff204b;
    ${media.medium`
        font-size: 28px;
    `}
    ${media.small`
        font-size: 32px;
    `}
  }
`;
