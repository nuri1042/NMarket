import React from "react";
import {
  CartHeader,
  PageTitle,
  ProductInfoCell,
  TitBox,
} from "../styles/cartStyle";
const CartHeaderInfo = () => {
  return (
    <>
      <PageTitle>
        <h1>장바구니</h1>
      </PageTitle>
      <h2 className="product-title">
        <strong>일반배송</strong>
      </h2>
      <CartHeader>
        <TitBox>
          <ProductInfoCell
            style={{
              width: "50.3%",
            }}
          >
            상품정보
          </ProductInfoCell>
          <ProductInfoCell
            style={{
              width: "28.3%",
            }}
          >
            옵션
          </ProductInfoCell>
          <ProductInfoCell
            style={{
              width: "21.4%",
            }}
          >
            상품금액
          </ProductInfoCell>
        </TitBox>
      </CartHeader>
    </>
  );
};

export default React.memo(CartHeaderInfo);
