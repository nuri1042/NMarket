import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { itemList, totalPrice } = useSelector((state) => state.product);

  return (
    <div className="container">
      <div className="cartWrap" style={{ paddingBottom: "80px" }}>
        <div
          className="page-title"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "54px 20px 30px",
          }}
        >
          <h1 style={{ margin: 0, fontSize: "32px" }}>장바구니</h1>
        </div>
        <div
          className="cart-product-box"
          style={{ margin: "40px auto 0", maxWidth: "1200px", borderBottom: 0 }}
        >
          <h2
            className="product-title"
            style={{
              margin: "0 20px 20px",
              padding: 0,
              lineHeight: 1.3,
            }}
          >
            <strong style={{ marginLeft: 0, fontSize: "22px" }}>
              일반배송
            </strong>
          </h2>
          <div
            className="cart-header"
            style={{
              display: "block",
              margin: "0 20px",
              padding: "16px 0 15px",
              borderTop: "1px solid #ebeef2",
              borderBottom: "1px solid #ebeef2",
            }}
          >
            <div className="tit-box" style={{ width: "100%", height: "20px" }}>
              <p
                className="product-info-cell"
                style={{
                  float: "left",
                  margin: 0,
                  fontSize: "14px",
                  fontWeight: 700,
                  textAlign: "center",
                  width: "50.3%",
                }}
              >
                상품정보
              </p>
              <p
                className="product-option-cell"
                style={{
                  float: "left",
                  margin: 0,
                  fontSize: "14px",
                  fontWeight: 700,
                  textAlign: "center",
                  width: "28.3%",
                }}
              >
                옵션
              </p>
              <p
                className="product-price-cell"
                style={{
                  float: "left",
                  margin: 0,
                  fontSize: "14px",
                  fontWeight: 700,
                  textAlign: "center",
                  width: "21.4%",
                }}
              >
                상품금액
              </p>
            </div>
          </div>
          {itemList.length !== 0 ? (
            itemList.map((itemList) => {
              return <CartItem itemList={itemList} key={itemList.id} />;
            })
          ) : (
            <div
              style={{ position: "absolute", left: "50%", marginTop: "25px" }}
            >
              장바구니가 비어있습니다.
            </div>
          )}
        </div>
        <div
          className="payment-price-info"
          style={{ margin: "73px auto 60px" }}
        >
          <div
            className="payment-price-info-box"
            style={{
              display: "flex",
              margin: "0 20px",
              padding: "27px 0",
              borderBottom: "1px solid #808893",
              borderTop: "1px solid #808893",
              textAlign: "center",
            }}
          >
            <ul
              className="payment-price"
              style={{
                margin: 0,
                padding: 0,
                listStyle: "none",
                width: "62%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <li
                className="payment-box"
                style={{
                  position: "relative",
                  display: "inline-block",
                  margin: "9px 0",
                  verticalAlign: "middle",
                }}
              >
                <strong
                  style={{
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#202429",
                  }}
                >
                  총 상품금액
                </strong>
                <p
                  className="price"
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    marginTop: "8px",
                  }}
                >
                  {new String(totalPrice).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </p>
              </li>
              <div
                style={{
                  position: "relative",
                  left: "28px",
                  top: "28px",
                  width: "20px",
                  height: "20px",
                  color: "#d3d7df",
                }}
              >
                +
              </div>
              <li
                className="payment-box"
                style={{
                  position: "relative",
                  display: "inline-block",
                  margin: "9px 0",
                  verticalAlign: "middle",
                  paddingLeft: "56px",
                }}
              >
                <strong
                  style={{
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#202429",
                  }}
                >
                  배송비
                </strong>
                <p
                  className="price"
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    marginTop: "8px",
                  }}
                >
                  전 상품 무료배송
                </p>
              </li>
            </ul>
            <div
              className="payment-all-price"
              style={{
                width: "38%",
                marginLeft: "8px",
                borderLeft: "1px solid #d3d7df",
              }}
            >
              <div
                className="payment-all-price-box"
                style={{ margin: "9px 0" }}
              >
                <strong
                  style={{
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#202429",
                  }}
                >
                  총 결제금액
                </strong>
                <p
                  className="price"
                  style={{
                    fontSize: "24px",
                    fontWeight: 700,
                    marginTop: "4px",
                    color: "#ff204b",
                  }}
                >
                  <span>
                    {new String(totalPrice).replace(
                      /\B(?=(\d{3})+(?!\d))/g,
                      ","
                    )}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
