import React from "react";
import { useSelector } from "react-redux";
import CartHeaderInfo from "../components/CartNavMenu";
import CartItem from "../components/CartItemList";
import CartTotalInfo from "../components/CartTotalInfo";
import { ProductState } from "../interfaces/productData.interfaces";
import { RootState } from "../redux/reducers";
import {
  CartProductBox,
  CartWrap,
  PaymentPriceInfo,
  PaymentPriceInfoBox,
} from "../styles/cartStyle";

const Cart = () => {
  const { itemList } = useSelector<RootState, ProductState>(
    (state) => state.product
  );

  return (
    <div className="container">
      <CartWrap>
        <CartProductBox>
          <CartHeaderInfo />
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
            <CartTotalInfo />
          </PaymentPriceInfoBox>
        </PaymentPriceInfo>
      </CartWrap>
    </div>
  );
};
export default Cart;
