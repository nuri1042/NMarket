import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/dist/client/router";
import axios from "axios";
import Link from "next/link";
import { Button, Form } from "antd";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { addItem, addFavor, removeFavor } from "../../reducers/product";
import { useSelector } from "react-redux";

const Products = () => {
  const router = useRouter();
  const API = "http://localhost:3000/api/getProductInfo";
  const { index } = router.query;
  const dispatch = useDispatch();

  const [list, setList] = useState([]);
  const [liked, setLiked] = useState(false);

  const { favorList, cartItem } = useSelector((state) => state.product);

  // Data Fetch를 Client Side Rendering 으로 구현
  // 매번 페이지 로딩이 발행할 때마다 client side 에서 fetch 가 이루어짐
  // CSR은 페이지가 로드된 후 API에 접근함. 따라서 SEO 에는 부적합하고, 로그인같은 세션 구현에 적합함
  // SSR 과 차이점 : 처음 페이지를 렌더링할 때 데이터 fetch 까지 짧은 로딩시간이 존재한다.
  useEffect(() => {
    // useEffect Hook 으로 데이터를 fetch 해옴
    if (index) {
      axios.get(API).then((res) => {
        setList(res.data); // axios 로 데이터 fetch 된 데이터를 state에 적용시키키고 list state를 가지고 렌더링 함
      });
    }
  }, [index]);

  const onAddCart = useCallback(() => {
    dispatch(addItem(list[index]));
  }, [list[index]]);

  const onAddFavor = useCallback(() => {
    dispatch(addFavor(list[index]));
    setLiked((prev) => !prev);
  }, [list[index]]);

  const onRemoveFavor = useCallback(() => {
    dispatch(removeFavor(list[index]));
    setLiked((prev) => !prev);
  }, [list[index]]);

  console.log(favorList);

  return (
    <>
      <div className="container" style={{ height: "100vh" }}>
        <div
          className="contentwrap"
          style={{
            padding: "30px 0 80px 0",
            width: "1140px",
            margin: "0 auto",
          }}
        >
          <div
            className="productInfowrap"
            style={{
              position: "relative",
              width: "1140px",
              marginTop: "10px",
              paddingTop: "23px",
              paddingBottom: "20px",
            }}
          >
            <div
              className="productPhotoWrap"
              style={{
                position: "relative",
                float: "left",
                width: "510px",
                marginTop: "5px",
                padding: "0 25px",
              }}
            >
              <div
                className="productPhoto"
                style={{
                  width: "350px",
                  height: "350px",
                  padding: "5px 5px 50px 5px",
                }}
              >
                <img
                  src={list[index]?.imageUrl}
                  alt="product photo"
                  style={{
                    width: "350px",
                    height: "350px",
                    display: "inline",
                    verticalAlign: "top",
                    paddingLeft: "100px",
                  }}
                />
              </div>
            </div>
            <div
              className="productDetailWrap"
              style={{ width: "570px", float: "right" }}
            >
              <div
                className="productInfo"
                style={{
                  width: "570px",
                  paddingBottom: "39px",
                  borderBottom: "1px solid #ddd",
                  minHeight: "310px",
                }}
              >
                <div className="bnr" style={{ marginTop: "10px" }}>
                  <img
                    src="http://imgstatic.10x10.co.kr/main/202204/715/itemprdbanner_84780_20220411180738.jpg"
                    alt="정기세일"
                  />
                </div>
                <div
                  className="productBasic"
                  style={{
                    padding: "29px 0 0 0",
                    borderBottom: "1px solid #ddd",
                    width: "440px",
                  }}
                >
                  <h2 style={{ paddingBottom: "25px" }}>
                    <p
                      style={{
                        paddingTop: "9px",
                        fontSize: "26px",
                        lineHeight: "130%",
                        color: "#000",
                      }}
                    >
                      {list[index]?.name}
                    </p>
                  </h2>
                </div>
                <div className="detailInfo">
                  <dl
                    className="saleInfo"
                    style={{
                      width: "440px",
                      fontSize: "16px",
                      color: "#555",
                      paddingTop: "26px",
                    }}
                  >
                    <dt style={{ float: "left", width: "95px" }}>판매가</dt>
                    <dd style={{ padding: "0 0 0 95px" }}>
                      <strong style={{ fontWeight: "bold" }}>
                        {new String(list[index]?.originPrice).replace(
                          /\B(?=(\d{3})+(?!\d))/g,
                          ","
                        )}
                      </strong>
                    </dd>
                  </dl>
                  <dl
                    className="saleInfo"
                    style={{
                      width: "440px",
                      fontSize: "16px",
                      color: "#555",
                    }}
                  >
                    <dt
                      style={{
                        float: "left",
                        width: "95px",
                        paddingTop: "16px",
                      }}
                    >
                      마일리지
                    </dt>
                    <dd style={{ padding: "0 0 0 95px" }}>
                      <div style={{ paddingTop: "16px", fontWeight: "bold" }}>
                        4 Point ~
                      </div>
                    </dd>
                  </dl>
                  <dl
                    className="saleInfo"
                    style={{
                      width: "440px",
                      fontSize: "16px",
                      color: "#555",
                    }}
                  >
                    <dt
                      style={{
                        float: "left",
                        width: "95px",
                        paddingTop: "16px",
                      }}
                    >
                      배송정보
                    </dt>
                    <dd style={{ padding: "0 0 0 95px" }}>
                      <div style={{ paddingTop: "16px" }}>무료배송</div>
                    </dd>
                  </dl>
                </div>
              </div>
              <div
                className="btnArea"
                style={{ paddingTop: "15px", width: "100%", display: "table" }}
              >
                <Form>
                  <span style={{ display: "table-cell" }}>
                    <Link href="/Cart">
                      <a>
                        <Button
                          style={{
                            width: "190px",
                            height: "53px",
                            color: "#fff",
                            padding: "18px 0",
                            textAlign: "center",
                            fontWeight: "bold",
                            verticalAlign: "middle",
                            cursor: "pointer",
                            background: "#d50c0c",
                            border: "1px solid #d50c0c",
                            borderRadius: "6px",
                          }}
                          onClick={onAddCart}
                        >
                          장바구니
                        </Button>
                      </a>
                    </Link>
                    <div
                      style={{
                        display: "inline-block",
                        border: "1px solid #dddddd",
                        background: "none",
                        width: "53px",
                        height: "53px",
                        position: "relative",
                        right: "-10px",
                        borderRadius: "6px",
                        verticalAlign: "middle",
                        margin: "0 4px",
                      }}
                    >
                      {liked ? (
                        <HeartFilled
                          onClick={onRemoveFavor}
                          style={{
                            fontSize: "24px",
                            transform: "translate(60%, 60%)",
                            color: "red",
                          }}
                        />
                      ) : (
                        <HeartOutlined
                          style={{
                            fontSize: "24px",
                            transform: "translate(60%, 60%)",
                          }}
                          onClick={onAddFavor}
                        />
                      )}
                    </div>
                  </span>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
