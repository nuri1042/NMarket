import AppLayout from "../components/AppLayout";
import { IProductProps } from "../interfaces/productProps";
import { GetStaticPropsContext } from "next";

export interface Props {
  children?: React.ReactNode;
}

export default function Home({ product }: { product: IProductProps[] }) {
  return (
    <>
      <AppLayout product={product} />
    </>
  );
}

// Mock API로부터 데이터 받아오기
export const getStaticProps = async (context: GetStaticPropsContext) => {
  const res = await fetch(`${process.env.BASE_URL_API}/products`);
  const product: IProductProps[] = await res.json();

  return {
    props: {
      product,
    },
  };
};
