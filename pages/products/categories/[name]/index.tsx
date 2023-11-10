import { GetStaticPropsContext } from "next-redux-wrapper";
import React, { FunctionComponent } from "react";
import CategoryNavLayout from "../../../../components/CategoryNavLayout";
import ItemList from "../../../../components/ItemList";
import { IProductProps } from "../../../../interfaces/productProps";

const DetailsAll: FunctionComponent<{ product: IProductProps[] }> = ({
  product,
}) => {
  const categoryTitle = [
    ...new Set(product.map((data) => data.category.detail.desc)),
  ];
  const categoryUrl = [
    ...new Set(product.map((data) => data.category.detail.src)),
  ];
  return (
    <>
      <CategoryNavLayout
        product={product}
        categoryTitle={categoryTitle}
        categoryUrl={categoryUrl}
      />
      <ItemList product={product} />
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`${process.env.BASE_URL_API}/products`);
  const products: IProductProps[] = await res.json();

  const paths = products.map((product) => ({
    params: { name: product.category.name.src },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const res = await fetch(`${process.env.BASE_URL_API}/products`);
  const products: IProductProps[] = await res.json();

  const product = products.filter(
    (product) => product.category.name.src === params.name
  );

  return { props: { product } };
}

export default DetailsAll;
