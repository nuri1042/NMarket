import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/dist/client/router";
import axios from "axios";
import Link from "next/link";
import { Form } from "antd";
import { useDispatch } from "react-redux";
import { addItem, addFavor } from "../../redux/actions/product";
import { useSession } from "next-auth/react";
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
} from "../../styles/productStyle.js";

const Products = ({ product }) => {
  const { data: session } = useSession(); // useSession : user 가 로그인 되어있는지 알려주는 NextAuth Hook

  const router = useRouter();
  const { id } = router.query;

  const dispatch = useDispatch();

  const [list, setList] = useState([]);

  // const API_URL = 'https://dee8c76b-ec25-4f44-b9fb-af069ca25f98.mock.pstmn.io/products';

  // Data Fetch를 Client Side Rendering 으로 구현
  // 매번 페이지 로딩이 발행할 때마다 client side 에서 fetch 가 이루어짐
  // CSR은 페이지가 로드된 후 API에 접근함. 따라서 SEO 에는 부적합하고, 로그인같은 세션 구현에 적합함

  // SSR 과 차이점 : 처음 페이지를 렌더링할 때 데이터 fetch 까지 짧은 로딩시간이 존재한다.
  // useEffect(() => {
  //   // useEffect Hook 으로 데이터를 fetch 해옴
  //   if (id) {
  //     axios.get(API_URL).then((res) => {
  //       setList(res.data); // axios 로 데이터 fetch 된 데이터를 state에 적용시키고 list state를 가지고 렌더링 함
  //     });
  //   }
  // }, [id]);

  useEffect(() => {
    if (id) {
      setList(product);
    }
  }, [id]);

  const onAddCart = useCallback(() => {
    if (!session) {
      alert("로그인 후 이용해주세요.");
      router.push("/Login");
    } else {
      dispatch(addItem(list[id]));
    }
  }, [list[id], session]);

  const onAddFavor = useCallback(() => {
    if (!session) {
      alert("로그인 후 이용해주세요.");
      router.push("/Login");
    } else {
      dispatch(addFavor(list[id]));
    }
  }, [list[id], session]);

  return (
    <>
      <Container>
        <ContentWrap>
          <ProductInfoWrap>
            <ProductPhotoWrap>
              <ProductPhoto>
                <img src={list[id]?.imageUrl} alt="product photo" />
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
                    <p>{list[id]?.name}</p>
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
                        {new String(list[id]?.originPrice).replace(
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
                    <Link href="/Mypage">
                      <a>
                        <AddToFavorBtn onClick={onAddFavor}>
                          찜하기
                        </AddToFavorBtn>
                      </a>
                    </Link>
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

export async function getStaticPaths() {
  const res = await fetch(
    "https://dee8c76b-ec25-4f44-b9fb-af069ca25f98.mock.pstmn.io/products"
  );
  const product = await res.json();

  const paths = product.map((product) => ({
    params: { id: product.id.toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://dee8c76b-ec25-4f44-b9fb-af069ca25f98.mock.pstmn.io/products/${params.id}`
  );
  const product = await res.json();

  return { props: { product } };
}

export default Products;
