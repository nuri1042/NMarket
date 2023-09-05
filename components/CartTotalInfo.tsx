import React from "react";
import { useSelector } from "react-redux";
import { ProductState } from "../interfaces/productData.interfaces";
import { RootState } from "../redux/reducers";
import {
  PaymentAllPrice,
  PaymentAllPriceBox,
  PaymentBox,
  Plus,
} from "../styles/cartStyle";
const CartTotalInfo = () => {
  const { totalPrice } = useSelector<RootState, ProductState>(
    (state) => state.product
  );

  return (
    <>
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
              {new String(totalPrice).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </span>
          </p>
        </PaymentAllPriceBox>
      </PaymentAllPrice>
    </>
  );
};
export default CartTotalInfo;
