import React, { useCallback, useEffect } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeItem } from "../reducers/product";

const CartItem = ({ itemList }) => {
  const dispatch = useDispatch();

  const onIncrease = useCallback(() => {
    dispatch(increaseQty(itemList));
  }, [itemList]);

  const onDecrease = useCallback(() => {
    dispatch(decreaseQty(itemList));
  }, [itemList]);

  const onRemove = useCallback(() => {
    dispatch(removeItem(itemList));
  }, [itemList]);
  return (
    <>
      <ul className="cart-seller-list">
        <li style={{ borderTop: "1px solid #f2f4f7" }}>
          <div className="cart-seller-item" style={{ margin: "0 20px" }}>
            <div
              className="item-info-box"
              style={{ display: "flex", width: "calc(100%-40px)" }}
            >
              <div
                className="item-info"
                style={{
                  width: "50.3%",
                  marginBottom: 0,
                  padding: "22px 0",
                  borderRight: "1px solid #ebeef2",
                  position: "relative",
                }}
              >
                <div
                  className="product-thumb"
                  style={{
                    width: "70px",
                    height: "70px",
                    float: "left",
                    marginLeft: "10px",
                  }}
                >
                  <Link
                    as={`/Products/${itemList.id}`}
                    href="/Products/[index]"
                  >
                    <a>
                      <div>
                        <img
                          src={itemList.imageUrl}
                          alt="아이템 이미지"
                          style={{ width: "70px", height: "70px" }}
                        />
                      </div>
                    </a>
                  </Link>
                </div>
                <div
                  className="product-info"
                  style={{
                    width: "calc(100%-172px)",
                    margin: "0 42px 0 20px",
                    float: "left",
                  }}
                >
                  <p className="name" style={{ lineHeight: 1.4 }}>
                    <Link
                      as={`/Products/${itemList.id}`}
                      href="/Products/[index]"
                    >
                      <a style={{ fontSize: "15px", fontWeight: 700 }}>
                        {itemList.name}
                      </a>
                    </Link>
                  </p>
                  <div className="price-wrap">
                    <div
                      className="price"
                      style={{
                        fontSize: "16px",
                        fontWeight: 700,
                        marginTop: "7px",
                      }}
                    >
                      {new String(itemList.originPrice).replace(
                        /\B(?=(\d{3})+(?!\d))/g,
                        ","
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="item-option-box"
                style={{
                  borderRight: "1px solid #ebeef2",
                  width: "28.3%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div
                  className="item-option"
                  style={{
                    padding: "22px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      float: "left",
                      fontSize: "13px",
                      margin: "24px",
                    }}
                  >
                    수량
                  </div>
                  <div className="input-quantity" style={{ float: "right" }}>
                    <div className="qty" style={{ paddingTop: "16px" }}>
                      <button
                        style={{
                          width: "30px",
                          height: "30px",
                          float: "left",
                          backgroundColor: "transparent",
                          border: "1px solid #ebeef2",
                        }}
                        onClick={onDecrease}
                      >
                        -
                      </button>
                      <input
                        type="text"
                        name="itemea"
                        maxLength={4}
                        pattern="[0-9]*"
                        value={itemList.quantity}
                        style={{
                          width: "32px",
                          height: "30px",
                          textAlign: "center",
                          border: "1px solid #ebeef2",
                          boxSizing: "border-box",
                        }}
                      />

                      <button
                        style={{
                          width: "30px",
                          height: "30px",
                          backgroundColor: "transparent",
                          border: "1px solid #ebeef2",
                        }}
                        onClick={onIncrease}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  style={{
                    width: "48px",
                    height: "24px",
                    marginTop: "41px",
                    marginRight: "34px",
                    background: "#202429",
                    border: "none",
                    color: "#fff",
                  }}
                  onClick={onRemove}
                >
                  삭제
                </button>
              </div>
              <div
                className="btn-item-buy-wrap"
                style={{
                  position: "relative",
                  width: "21.4%",
                  textAlign: "center",
                }}
              >
                <div
                  className="btn-item-buy-box"
                  style={{
                    position: "absolute",
                    top: "38%",
                    left: 0,
                    width: "100%",
                  }}
                >
                  <div className="item-price-box">
                    <div className="item-price">
                      <span
                        style={{
                          fontSize: "16px",
                          fontWeight: 600,
                          color: "#202429",
                        }}
                      >
                        {new String(itemList.changedPrice).replace(
                          /\B(?=(\d{3})+(?!\d))/g,
                          ","
                        )}
                        원
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};
export default CartItem;
