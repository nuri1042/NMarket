import Head from "next/head";
import Link from "next/link";
import wrapper from "../redux/store/configureStore";
import "../styles/styles.css";
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/dist/shared/lib/router/router";
import CheckUserSession from "../components/CheckUserSession";
import CategoryMenu from "../components/CategoryMenu";

// 전 페이지에서 공통되는 레이아웃 관리
const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  // custom App에는 built-in type 'AppProps'를 사용
  return (
    // SessionProvider로 Component 를 감싸 nextjs에서 useSession Hook을 통해 session 정보에 접근할 수 있게 함
    <>
      <Head>
        <meta />
      </Head>
      <SessionProvider session={pageProps.session}>
        <Head>
          <meta
            charSet="utf-8"
            name="viewport"
            content="width=device-width, initial-scale=1"
          />
          <title>NMarket</title>
        </Head>
        <div id="header">
          <div id="header-inner">
            <div className="nav-main">
              <Link href="/">
                <a className="site-logo" aria-label="nmarket"></a>
              </Link>
              <div className="category">
                <div>카테고리</div>
                <CategoryMenu />
              </div>
            </div>
            <div className="head-service">
              <div className="nav-service">
                <Link href="/Cart">
                  <a className="btn-cart">장바구니</a>
                </Link>
                <div>
                  <CheckUserSession />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="body">
          <Component {...pageProps} />
        </div>
      </SessionProvider>

      <div className="footer">
        <div className="foot-cont-company">
          <em>(주)NMarket</em>
          <p>주소 : 서울시 종로구 대학로 10</p>
          <p>통신판매업 신고 : 제 01-1900호</p>
          <p>개인정보보호책임자 : 소비자피해보상보험 SGI 서울보증</p>
          <p className="tPad">호스팅서비스:(주) NMarket</p>
          <p>COPYRIGHT © NMARKET ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </>
  );
};

export default wrapper.withRedux(App);
