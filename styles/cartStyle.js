import styled from "styled-components";
export const CartWrap = styled.div`
  padding-bottom: 80px;
`;
export const PageTitle = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 54px 20px 30px;

  & h1 {
    margin: 0;
    font-size: 32px;
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
export const TitBox = styled.div`
  width: 100%;
  height: 20px;
`;
export const ProductInfoCell = styled.p`
  float: left;
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  width: 50.3%;
`;
export const PaymentPriceInfo = styled.div`
  margin: 73px auto 60px;
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
      }

      & p {
        font-size: 18px;
        font-weight: 700;
        margin-top: 8px;
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
  }

  & p {
    font-size: 24px;
    font-weight: 700;
    margin-top: 4px;
    color: #ff204b;
  }
`;
