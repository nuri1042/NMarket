import { GetStaticPropsContext } from "next";
import { FunctionComponent } from "react";
import CategoryNavLayout from "../../../../components/CategoryNavLayout";
import ItemList from "../../../../components/ItemList";
import { IProductProps } from "../../../../interfaces/productProps";

const Details: FunctionComponent<{ product: IProductProps[] }> = ({
  product,
}) => {
  return (
    <>
      <CategoryNavLayout product={product} />
      <ItemList product={product} />
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`${process.env.BASE_URL_API}/products`);
  const products: IProductProps[] = await res.json();

  const paths = products.map((product) => ({
    params: { name: product.category.name, detail: product.category.detail },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const res = await fetch(`${process.env.BASE_URL_API}/products`);
  const products: IProductProps[] = await res.json();

  const product = products.filter(
    (product) => product.category.detail === params.detail
  );

  return { props: { product } };
}

export default Details;
