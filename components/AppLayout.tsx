import React, { ReactElement } from "react";

import MainBanner from "./MainBanner";
import ItemList from "./ItemList";
import { FC } from "react";

interface Props {
  product: ReactElement;
}
const AppLayout: FC<Props> = ({ product }) => {
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
