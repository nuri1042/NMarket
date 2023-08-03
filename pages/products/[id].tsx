import { useState, useEffect, useCallback, FunctionComponent } from 'react';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { Form } from 'antd';
import { useDispatch } from 'react-redux';
import { addItem, addFavor } from '../../redux/actions/product';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
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
} from '../../styles/productStyle.js';
import { IProductProps } from '../../interfaces/productProps';

export interface IParams {
  params: {
    id: string;
  };
}
// props 매개변수에 직접적으로 typing해줘도 되지만 generic으로 함수형 컴포넌트의 props type을 지정 가능
const Products: FunctionComponent<{ product: IProductProps[] }> = ({ product }) => {
  const { data: session } = useSession(); // useSession : user 가 로그인 되어있는지 알려주는 NextAuth Hook

  const router = useRouter();
  const id = parseInt(router.query.id as string, 10); // router.query는 ParsedUrlQuery object이다.

  const dispatch = useDispatch();

  // useState Hook을 사용하기 위해서 초기값을 빈 배열로 하면 ts는 빈 배열을 never type으로 인식함

  // Data Fetch를 Client Side Rendering 으로 구현
  // 매번 페이지 로딩이 발행할 때마다 client side 에서 fetch 가 이루어짐
  // CSR은 페이지가 로드된 후 API에 접근함. 따라서 SEO 에는 부적합하고, 로그인같은 세션 구현에 적합함

  // SSR 과 차이점 : 처음 페이지를 렌더링할 때 데이터 fetch 까지 짧은 로딩시간이 존재한다.

  // const API_URL = 'https://dee8c76b-ec25-4f44-b9fb-af069ca25f98.mock.pstmn.io/products';

  // useEffect(() => {
  //   // useEffect Hook 으로 데이터를 fetch 해옴
  //   if (id) {
  //     axios.get(API_URL).then((res) => {
  //       setList(res.data); // axios 로 데이터 fetch 된 데이터를 state에 적용시키고 list state를 가지고 렌더링 함
  //     });
  //   }
  // }, [id]);

  // useEffect(() => {
  //   // if (id) {
  //   setList(product);
  //   // }
  // }, []);

  const onAddCart = useCallback(() => {
    if (!session) {
      alert('로그인 후 이용해주세요.');
      router.push('/Login');
    } else {
      dispatch(addItem(product[id]));
    }
  }, [product[id], session]);

  const onAddFavor = useCallback(() => {
    if (!session) {
      alert('로그인 후 이용해주세요.');
      router.push('/Login');
    } else {
      dispatch(addFavor(product[id]));
    }
  }, [product[id], session]);
  return (
    <>
      <Container>
        <ContentWrap>
          <ProductInfoWrap>
            <ProductPhotoWrap>
              <ProductPhoto>
                <img src={product[id]?.imageUrl} alt='product photo' />
              </ProductPhoto>
            </ProductPhotoWrap>
            <ProductDetailWrap>
              <ProductInfo>
                <Bnr>
                  <Image src='http://imgstatic.10x10.co.kr/main/202204/715/itemprdbanner_84780_20220411180738.jpg' alt='정기세일' width={'440px'} height={'65px'} priority={true} />
                </Bnr>
                <ProductBasic>
                  <h2>
                    <p>{product[id]?.name}</p>
                  </h2>
                </ProductBasic>
                <div className='detailInfo'>
                  <SaleInfo
                    style={{
                      paddingTop: '26px',
                    }}
                  >
                    <dt>판매가</dt>
                    <dd>
                      <strong>{new String(product[id]?.originPrice).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</strong>
                    </dd>
                  </SaleInfo>
                  <SaleInfo>
                    <dt
                      style={{
                        paddingTop: '16px',
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
                        paddingTop: '16px',
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
                    <Link href='/Cart'>
                      <a>
                        <AddToCartBtn onClick={onAddCart}>장바구니</AddToCartBtn>
                      </a>
                    </Link>
                    <Link href='/Mypage'>
                      <a>
                        <AddToFavorBtn onClick={onAddFavor}>찜하기</AddToFavorBtn>
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
export async function getStaticProps({ params }: IParams) {
  // getStaticPaths로부터 각 path의 params값을 받아 id를 통해 데이터 불러옴
  // params 는 `id`를 포함
  // 만약 route가 /products/1이면 params.id는 1이다

  const id = params.id!;
  const res = await fetch(`https://dee8c76b-ec25-4f44-b9fb-af069ca25f98.mock.pstmn.io/products/${id}`);
  const product: IProductProps[] = await res.json();

  return { props: { product } };
}

// data에 따라 pre-rendering할 페이지의 동적 경로를 지정하는 함수
export async function getStaticPaths() {
  const res = await fetch('https://dee8c76b-ec25-4f44-b9fb-af069ca25f98.mock.pstmn.io/products');
  const products: IProductProps[] = await res.json();

  // pre-render할 path를 얻음
  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  // paths들만 build time에 pre-render할 경로
  // fallback: false - 다른 routes들은 404임을 의미
  return { paths, fallback: false }; // paths를 getStaticProps로 return
}

export default Products;
