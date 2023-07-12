import React from "react";

import MainBanner from "./MainBanner";
import ItemList from "./ItemList";
import { Props } from "../pages";

const AppLayout = ({ product }: Props) => {
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
};

export default AppLayout;
