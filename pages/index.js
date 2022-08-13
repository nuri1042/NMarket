import React, { useState, useEffect } from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import axios from "axios";

import MainBanner from "../components/MainBanner";
import SubBanner from "../components/SubBanner";
import ItemList from "../components/ItemList";

function Home() {
  const [product, setProduct] = useState([]);
  const API = "http://localhost:3000/api/getProductInfo";

  // postman에 mock server 를 생성 후 상품 데이터를 받아옴
  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://dee8c76b-ec25-4f44-b9fb-af069ca25f98.mock.pstmn.io/products"
  //     )
  //     .then((result) => {
  //       setProduct(result.data.products);
  //     })
  //     .catch((err) => {
  //       console.error("error 발생 : ", err);
  //     });
  // }, []);
  useEffect(() => {
    axios.get(API).then((res) => {
      setProduct(res.data);
    });
  }, []);

  return (
    <AppLayout product={product}>
      <Head>
        <meta charSet="utf-8" />
        <title>NMarket</title>
      </Head>
      <div>
        <div id="banner">{<MainBanner />}</div>
        <SubBanner />
        <ItemList product={product} />
      </div>
    </AppLayout>
  );
}

export default Home;
