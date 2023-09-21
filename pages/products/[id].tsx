import { useCallback, FunctionComponent } from "react";
import { useRouter } from "next/dist/client/router";
import { Form } from "antd";
import { useDispatch } from "react-redux";
import { addItem, addFavor } from "../../redux/actions/product";
import { useSession } from "next-auth/react";
import Image from "next/image";
import {
  AddToCartBtn,
  AddToFavorBtn,
  Bnr,
  BtnArea,
  ContentWrap,
  DetailInfo,
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
import { IProductProps } from "../../interfaces/productProps";

export interface IParams {
  params: {
    id: string;
  };
}
// props 매개변수에 직접적으로 typing해줘도 되지만 generic으로 함수형 컴포넌트의 props type을 지정 가능
const Products: FunctionComponent<{ product: IProductProps[] }> = ({
  product,
}) => {
  const { data: session } = useSession(); // useSession : user 가 로그인 되어있는지 알려주는 NextAuth Hook

  const router = useRouter();
  const id = parseInt(router.query.id as string, 10); // router.query는 ParsedUrlQuery object이다.

  const dispatch = useDispatch();

  const onAddCart = useCallback(() => {
    if (!session) {
      alert("로그인 후 이용해주세요.");
      router.push("/Login");
    } else {
      dispatch(addItem(product[id]));
      router.push("/Cart");
    }
    console.log(`add cart`, session);
  }, [product[id], session]);

  const onAddFavor = useCallback(() => {
    if (!session) {
      alert("로그인 후 이용해주세요.");
      router.push("/Login");
    } else {
      dispatch(addFavor(product[id]));
      router.push("/Mypage");
    }
    console.log(`add favor`, session);
  }, [product[id], session]);
  return (
    <>
      <div className="container">
        <ContentWrap>
          <ProductInfoWrap>
            <ProductPhotoWrap>
              <ProductPhoto>
                <img src={product[id]?.imageUrl} alt="product photo" />
              </ProductPhoto>
            </ProductPhotoWrap>
            <ProductDetailWrap>
              <ProductInfo>
                <Bnr>
                  <Image
                    src="http://imgstatic.10x10.co.kr/main/202204/715/itemprdbanner_84780_20220411180738.jpg"
                    alt="정기세일"
                    width={"440px"}
                    height={"65px"}
                    priority={true}
                  />
                </Bnr>
                <ProductBasic>
                  <h2>
                    <p>{product[id]?.name}</p>
                  </h2>
                </ProductBasic>
                <DetailInfo>
                  <SaleInfo
                    style={{
                      paddingTop: "26px",
                    }}
                  >
                    <dt>판매가</dt>
                    <dd>
                      <strong>
                        {new String(product[id]?.originPrice).replace(
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
                </DetailInfo>
              </ProductInfo>
              <BtnArea>
                <Form>
                  <FormSpan>
                    <div>
                      <AddToCartBtn onClick={onAddCart}>장바구니</AddToCartBtn>
                    </div>
                    <div>
                      <AddToFavorBtn onClick={onAddFavor}>찜하기</AddToFavorBtn>
                    </div>
                  </FormSpan>
                </Form>
              </BtnArea>
            </ProductDetailWrap>
          </ProductInfoWrap>
        </ContentWrap>
      </div>
    </>
  );
};
export async function getStaticProps({ params }: IParams) {
  // getStaticPaths로부터 각 path의 params값을 받아 id를 통해 데이터 불러옴
  // params 는 `id`를 포함
  // 만약 route가 /products/1이면 params.id는 1이다

  const id = params.id!;
  const res = await fetch(`${process.env.BASE_URL_API}/products/${id}`);
  const product: IProductProps[] = await res.json();

  return { props: { product } };
}

// data에 따라 pre-rendering할 페이지의 동적 경로를 지정하는 함수
export async function getStaticPaths() {
  const res = await fetch(`${process.env.BASE_URL_API}/products`);
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
