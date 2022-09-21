import styled from "styled-components";
export const Container = styled.div`
  height: 100vh;
`;
export const ContentWrap = styled.div`
  padding: 30px 0 80px 0;
  width: 1140px;
  margin: 0 auto;
`;
export const ProductInfoWrap = styled.div`
  position: relative;
  width: 1140px;
  margin-top: 10px;
  padding-top: 23px;
  padding-bottom: 20px;
`;
export const ProductPhotoWrap = styled.div`
  position: relative;
  float: left;
  width: 510px;
  margin-top: 5px;
  padding: 0 25px;
`;
export const ProductPhoto = styled.div`
  width: 350px;
  height: 350px;
  padding: 5px 5px 50px 5px;

  & img {
    width: 350px;
    height: 350px;
    display: inline;
    vertical-align: top;
    padding-left: 100px;
  }
`;
export const ProductDetailWrap = styled.div`
  width: 570px;
  float: right;
`;
export const ProductInfo = styled.div`
  width: 570px;
  padding-bottom: 39px;
  border-bottom: 1px solid #ddd;
  min-height: 310px;
`;
export const Bnr = styled.div`
  margin-top: 10px;
`;
export const ProductBasic = styled.div`
  padding: 29px 0 0 0;
  border-bottom: 1px solid #ddd;
  width: 440px;

  & h2 {
    padding-bottom: 25px;

    & p {
      padding-top: 9px;
      font-size: 26px;
      line-height: 130%;
      color: #000;
    }
  }
`;
export const SaleInfo = styled.dl`
  width: 440px;
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
`;
export const FormSpan = styled.span`
  display: table-cell;
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
`;
export const AddToFavorBtn = styled.div`
  display: inline-block;
  border: 1px solid #dddddd;
  background: none;
  width: 53px;
  height: 53px;
  position: relative;
  right: -10px;
  border-radius: 6px;
  vertical-align: middle;
  margin: 0 4px;
`;
