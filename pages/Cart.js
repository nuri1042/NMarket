import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import {
  CartHeader,
  CartProductBox,
  CartWrap,
  PageTitle,
  PaymentAllPrice,
  PaymentAllPriceBox,
  PaymentBox,
  PaymentPriceInfo,
  PaymentPriceInfoBox,
  Plus,
  ProductInfoCell,
  TitBox,
} from "../styles/cartStyle";

const Cart = () => {
  const { itemList, totalPrice } = useSelector((state) => state.product);

  return (
    <div className="container">
      <CartWrap>
        <PageTitle>
          <h1>장바구니</h1>
        </PageTitle>
        <CartProductBox>
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
          {itemList.length !== 0 ? (
            itemList.map((itemList) => {
              return <CartItem itemList={itemList} key={itemList.id} />;
            })
          ) : (
            <div
              style={{
                position: "relative",
                left: "45%",
                width: "150px",
                marginTop: "5%",
              }}
            >
              장바구니가 비어있습니다.
            </div>
          )}
        </CartProductBox>
        <PaymentPriceInfo>
          <PaymentPriceInfoBox>
            <ul className="payment-price">
              <li className="payment-box">
                <strong>총 상품금액</strong>
                <p className="price">
                  {new String(totalPrice).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </p>
              </li>
              <Plus>+</Plus>
              <PaymentBox>
                <strong>배송비</strong>
                <p className="price">전 상품 무료배송</p>
              </PaymentBox>
            </ul>
            <PaymentAllPrice>
              <PaymentAllPriceBox>
                <strong>총 결제금액</strong>
                <p className="price">
                  <span>
                    {new String(totalPrice).replace(
                      /\B(?=(\d{3})+(?!\d))/g,
                      ","
                    )}
                  </span>
                </p>
              </PaymentAllPriceBox>
            </PaymentAllPrice>
          </PaymentPriceInfoBox>
        </PaymentPriceInfo>
      </CartWrap>
    </div>
  );
};
export default Cart;
