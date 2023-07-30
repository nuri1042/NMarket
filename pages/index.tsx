import AppLayout from "../components/AppLayout";
import Head from "next/head";
import { IProductProps } from "../interfaces/productProps";
import { getSession } from "next-auth/react";
import { Session } from "next-auth";

export interface Props {
  children?: React.ReactNode;
}

export default function Home({ product }: { product: IProductProps[] }) {
  // < Data Fetch를 Client Side Rendering 으로 구현한 부분 >

  // const [product, setProduct] = useState([]);
  // const API = "http://localhost:3000/api/getProductInfo";

  // useEffect(() => {
  //   axios.get(API).then((res) => {
  //     setProduct(res.data);
  //   });
  // }, []);

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

// < Data Fetch를 Static Side Generation 으로 구현한 부분 >
// export async function getStaticProps() {
//   // getStaticProps - next build 명령어가 실행될 때 getStaticProps 함수도 실행된다.
//   // 즉 사이트가 빌드될 때 한번 serverside fetch를 하게 되고, 이때 얻은 데이터를 이용해서 페이지를 렌더링한다.
//   // next build 를 다시 하기 전에는 더이상 데이터가 변하지 않고 처음 실행했을 때의 데이터가 계속 유지됨.

//   // 장점 - The page must be pre-rendered (for SEO) and be very fast
//   // But, getStaticProps always runs on the server and never on the client
//   // 서버 환경에서 작동되는 data fetching 함수에서 API Route를 fetch 하지 않는 것이 좋다고 한다.
//   // 해당 함수는 빌드시에만 실행되고 클라이언트 번들에 추가되지 않기 때문에 fetch 하지 않고 데이터베이스에 직접 요청하는 방식으로 하는걸 권장.

//   const product = await fetch("/api/getProductInfo").then((res) => res.json());
//   // product 데이터가 담긴 props를 빌드타임에 Home 컴포넌트에 전달함
//   return {
//     props: {
//       product,
//     },
//   };
// }

// SSR 방식
// getServerSideProps 함수를 async(비동기)로 실행시키면 index.js 파일이 로딩될 때 서버 명령어를 실행시켜 데이터를 가져옴
// SSR 은 페이지 로드 전에 API 에 접근함
// CSR과 차이점 : 페이지가 렌더되기 전에 getStaticProps 함수를 이용해서 데이터를 먼저 fetch 하게 되고, 데이터가 fetch 되면 렌더딩이 일어난다.
//              따라서 데이터가 fetch 되기까지의 로딩시간이 존재하지 않는다.
// export async function getServerSideProps() {
//   const res = await fetch(
//     "https://38840a05-1807-4390-bd4e-e1faca1add11.mock.pstmn.io/products"
//   );
//   const product: IProductProps[] = await res.json();
//   return {
//     props: {
//       product,
//     },
//   };
// }

// Static Generation 이용해서 Mock API로부터 데이터 받아오기
export async function getStaticProps() {
  const res = await fetch(
    "https://dee8c76b-ec25-4f44-b9fb-af069ca25f98.mock.pstmn.io/products"
  );
  const product: IProductProps[] = await res.json();

  return {
    props: {
      product,
    },
  };
}
