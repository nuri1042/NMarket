import Head from "next/head";
import Link from "next/link";
import wrapper from "../redux/store/configureStore";
import "../styles/styles.css";
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/dist/shared/lib/router/router";
import UserInfo from "../components/UserInfo";

// 전 페이지에서 공통되는 레이아웃 관리
const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  // custom App에는 built-in type 'AppProps'를 사용

  return (
    // SessionProvider로 Component 를 감싸 nextjs에서 useSession Hook을 통해 session 정보에 접근할 수 있게 함
    <SessionProvider session={session}>
      <Head>
        <meta charSet="utf-8" />
        <title>NMarket</title>
      </Head>
      <div id="header">
        <div id="header-inner">
          <Link href="/" prefetch={true}>
            <a className="site-logo"></a>
          </Link>
          <div className="head-service">
            <div className="nav-service">
              <Link href="/Cart">
                <a className="btn-cart">장바구니</a>
              </Link>
              <div>
                <UserInfo />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="body">
        <Component {...pageProps} />
      </div>

      <div className="footer">
        <div className="foot-cont-company">
          <em>(주)NMarket</em>
          <p>주소 : 서울시 종로구 대학로 50</p>
          <p>통신판매업 신고 : 제 01-1968호</p>
          <p>개인정보보호책임자 : 소비자피해보상보험 SGI 서울보증</p>
          <p className="tPad">호스팅서비스:(주) NMarket</p>
          <p>COPYRIGHT © NMARKET ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </SessionProvider>
  );
};

export default wrapper.withRedux(App);
