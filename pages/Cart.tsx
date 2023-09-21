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
  EmptyCartDesc,
  PaymentPriceInfo,
  PaymentPriceInfoBox,
} from "../styles/cartStyle";

const Cart = () => {
  const { itemList } = useSelector<RootState, ProductState>(
    (state) => state.product
  );

  return (
    <div className="container" style={{ width: "100%" }}>
      <CartWrap>
        <CartProductBox>
          <CartHeaderInfo />
          {itemList.length !== 0 ? (
            itemList.map((itemList) => {
              return <CartItem itemList={itemList} key={itemList.id} />;
            })
          ) : (
            <EmptyCartDesc>장바구니가 비어있습니다.</EmptyCartDesc>
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
