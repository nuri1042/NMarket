import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/dist/client/router";
import axios from "axios";
import Link from "next/link";
import { Form, Card } from "antd";
import { HeartFilled, HeartTwoTone, HeartOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { addItem, addFavor, removeFavor } from "../../reducers/product";
import { useSelector } from "react-redux";
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
} from "../../styles/productStyle";

const Products = () => {
  const { data: session } = useSession(); // useSession : user 가 로그인 되어있는지 알려주는 NextAuth Hook

  const router = useRouter();
  const APIs = "https://nmarket-ten.vercel.app/api/getProductInfo";

  const { index } = router.query;
  const dispatch = useDispatch();

  const [list, setList] = useState([]);
  const [liked, setLiked] = useState(false);

  const { favorList } = useSelector((state) => state.product);

  // Data Fetch를 Client Side Rendering 으로 구현
  // 매번 페이지 로딩이 발행할 때마다 client side 에서 fetch 가 이루어짐
  // CSR은 페이지가 로드된 후 API에 접근함. 따라서 SEO 에는 부적합하고, 로그인같은 세션 구현에 적합함
  // SSR 과 차이점 : 처음 페이지를 렌더링할 때 데이터 fetch 까지 짧은 로딩시간이 존재한다.
  useEffect(() => {
    // useEffect Hook 으로 데이터를 fetch 해옴
    if (index) {
      axios.get(APIs).then((res) => {
        setList(res.data); // axios 로 데이터 fetch 된 데이터를 state에 적용시키키고 list state를 가지고 렌더링 함
      });
    }
  }, [index, liked]);

  const onAddCart = useCallback(() => {
    if (!session) {
      alert("로그인 후 이용해주세요.");
      router.push("/Login");
    } else {
      dispatch(addItem(list[index]));
    }
  }, [list[index]]);

  const onAddFavor = useCallback(() => {
    if (!session) {
      alert("로그인 후 이용해주세요.");
      router.push("/Login");
    } else {
      dispatch(addFavor(list[index]));
    }
  }, [list[index]]);

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
                    {/* <AddToFavorBtn> */}
                    <Link href="/Mypage">
                      <a>
                        <AddToFavorBtn onClick={onAddFavor}>
                          찜하기
                        </AddToFavorBtn>
                      </a>
                    </Link>
                    {/* </AddToFavorBtn> */}
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
