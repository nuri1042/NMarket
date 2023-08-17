import AppLayout from "../components/AppLayout";
import Head from "next/head";
import { IProductProps } from "../interfaces/productProps";
import { getSession } from "next-auth/react";
import { GetServerSideProps, GetStaticProps } from "next";

export interface Props {
  children?: React.ReactNode;
}

export default function Home({ product }: { product: IProductProps[] }) {
  return (
    <>
      <AppLayout product={product} />
      <Head>
        <meta charSet="utf-8" />
        <title>NMarket</title>
      </Head>
    </>
  );
}

// SSR 이용해서 Mock API로부터 데이터 받아오기
export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  const res = await fetch(
    "https://38840a05-1807-4390-bd4e-e1faca1add11.mock.pstmn.io/products"
  );
  const product: IProductProps[] = await res.json();

  return {
    props: {
      product,
      session,
    },
  };
};
