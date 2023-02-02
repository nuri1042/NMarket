import React, { useState, useEffect } from "react";
import Head from "next/head";
import PropTypes from "prop-types";

import Link from "next/link";
import wrapper from "../store/configureStore";
import "../styles/styles.css";
import { useSelector } from "react-redux";
import { SessionProvider, useSession } from "next-auth/react";

// 전 페이지에서 공통되는 부분 관리
const App = ({ Component, session, status, pageProps }) => {
  return (
    <SessionProvider session={session}>
      <Head>
        <meta charSet="utf-8" />
        <title>NMarket</title>
      </Head>
      <div id="header">
        <div id="header-inner">
          <Link href="/">
            <a className="site-logo"></a>
          </Link>
          <div className="head-service">
            <div className="nav-service">
              <Link href="/Cart">
                <a className="btn-cart">장바구니</a>
              </Link>
              <Link href="/Mypage">
                <a className="btn-mypage">마이페이지</a>
              </Link>
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
          <p>
            주소 : 서울시 종로구 대학로 57 홍익대학교 대학로캠퍼스 교육동 14층
          </p>
          <p>통신판매업 신고 : 제 01-1968호</p>
          <p>개인정보보호책임자 : 소비자피해보상보험 SGI 서울보증</p>
          <p className="tPad">호스팅서비스:(주) NMarket</p>
          <p>COPYRIGHT © TENBYTEN ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </SessionProvider>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(App);
