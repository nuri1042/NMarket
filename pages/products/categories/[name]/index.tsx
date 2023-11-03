import { GetStaticPropsContext } from "next-redux-wrapper";
import React, { FunctionComponent } from "react";
import CategoryNavLayout from "../../../../components/CategoryNavLayout";
import ItemList from "../../../../components/ItemList";
import { IProductProps } from "../../../../interfaces/productProps";

const CategoryDetailPage: FunctionComponent<{ product: IProductProps[] }> = ({
  product,
}) => {
  return (
    <>
      <div className="container">
        <CategoryNavLayout product={product} />
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
