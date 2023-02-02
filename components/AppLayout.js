import React from "react";
import Link from "next/link";

import MainBanner from "./MainBanner";
import ItemList from "./ItemList";

function AppLayout({ product }) {
  return (
    <>
      <div id="body">
        <div id="banner">
          <MainBanner />
        </div>
        <ItemList product={product} />
      </div>
    </>
  );
}

export default AppLayout;
