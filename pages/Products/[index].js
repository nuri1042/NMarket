import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/dist/client/router";
import axios from "axios";
import Link from "next/link";
import { Form } from "antd";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { addItem, addFavor, removeFavor } from "../../reducers/product";
import { useSelector } from "react-redux";
import {
  AddToCartBtn,
  AddToFavorBtn,
  Bnr,
  BtnArea,
  Container,
  ContentWrap,
  FormSpan,
  ProductBasic,
  ProductDetailWrap,
  ProductInfo,
  ProductInfoWrap,
  ProductPhoto,
  ProductPhotoWrap,
  SaleInfo,
  SalePoint,
  ShipInfo,
} from "../../styles/productStyle";

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
      <Container>
        <ContentWrap>
          <ProductInfoWrap>
            <ProductPhotoWrap>
              <ProductPhoto>
                <img src={list[index]?.imageUrl} alt="product photo" />
              </ProductPhoto>
            </ProductPhotoWrap>
            <ProductDetailWrap>
              <ProductInfo>
                <Bnr>
                  <img
                    src="http://imgstatic.10x10.co.kr/main/202204/715/itemprdbanner_84780_20220411180738.jpg"
                    alt="정기세일"
                  />
                </Bnr>
                <ProductBasic>
                  <h2>
                    <p>{list[index]?.name}</p>
                  </h2>
                </ProductBasic>
                <div className="detailInfo">
                  <SaleInfo
                    style={{
                      paddingTop: "26px",
                    }}
                  >
                    <dt>판매가</dt>
                    <dd>
                      <strong>
                        {new String(list[index]?.originPrice).replace(
                          /\B(?=(\d{3})+(?!\d))/g,
                          ","
                        )}
                      </strong>
                    </dd>
                  </SaleInfo>
                  <SaleInfo>
                    <dt
                      style={{
                        paddingTop: "16px",
                      }}
                    >
                      마일리지
                    </dt>
                    <dd>
                      <SalePoint>4 Point ~</SalePoint>
                    </dd>
                  </SaleInfo>
                  <SaleInfo>
                    <dt
                      style={{
                        paddingTop: "16px",
                      }}
                    >
                      배송정보
                    </dt>
                    <dd>
                      <ShipInfo>무료배송</ShipInfo>
                    </dd>
                  </SaleInfo>
                </div>
              </ProductInfo>
              <BtnArea>
                <Form>
                  <FormSpan>
                    <Link href="/Cart">
                      <a>
                        <AddToCartBtn onClick={onAddCart}>
                          장바구니
                        </AddToCartBtn>
                      </a>
                    </Link>
                    <AddToFavorBtn>
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
                    </AddToFavorBtn>
                  </FormSpan>
                </Form>
              </BtnArea>
            </ProductDetailWrap>
          </ProductInfoWrap>
        </ContentWrap>
      </Container>
    </>
  );
};

export default Products;
