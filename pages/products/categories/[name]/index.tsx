import { GetStaticPropsContext } from "next-redux-wrapper";
import React, { FunctionComponent } from "react";
import ItemList from "../../../../components/ItemList";
import { IProductProps } from "../../../../interfaces/productProps";
import {
  ContentHeader,
  ContentHeaderTitle,
  ContentSortDiv,
  ContentWrap,
  Nav,
} from "../../../../styles/categoryStyle";

interface PropsData {
  [x: string]: any;
  product: {
    id?: number;
    quantity?: number;
    name?: string;
    description?: string;
    originPrice?: number;
    changedPrice?: number;
    imageUrl?: string;
    category: {
      name: string;
      detail: string;
    };
  };
}
interface Props {
  product: Array<PropsData>;
}
const CategoryDetailPage: FunctionComponent<Props> = ({ product }) => {
  console.log(`1`, product);
  const categoryDetails = [
    ...new Set(product.map((data) => data.category.detail)),
  ];

  return (
    <>
      <div className="container">
        <ContentWrap>
          <section>
            <ContentHeader>
              <ContentHeaderTitle>
                <div>{product[0].category.name}</div>
                <p>{product.length}개 제품</p>
              </ContentHeaderTitle>
              <ContentSortDiv>
                <select>
                  <option disabled>정렬 기준</option>
                  <option value="popularity">인기순</option>
                  <option value="priceDes">가격 높은 순</option>
                  <option value="priceAsc">가격 낮은 순</option>
                </select>
                <div>필터</div>
              </ContentSortDiv>
            </ContentHeader>
          </section>
          <Nav>
            <ul style={{ display: "flex", gap: "1.35rem" }}>
              <li>전체</li>
              {categoryDetails.map((detail) => (
                <li>{detail}</li>
              ))}
            </ul>
          </Nav>
        </ContentWrap>
        <div>
          <ItemList product={product} />
        </div>
      </div>
    </>
  );
};
export default CategoryDetailPage;

export async function getStaticPaths() {
  const res = await fetch(`${process.env.BASE_URL_API}/products`);
  const products: IProductProps[] = await res.json();

  const paths = products.map((product) => ({
    params: { name: product.category.name },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const res = await fetch(`${process.env.BASE_URL_API}/products`);
  const products: IProductProps[] = await res.json();

  const product = products.filter(
    (product) => product.category.name === params.name
  );

  return { props: { product } };
}
