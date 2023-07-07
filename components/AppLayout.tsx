import React, { ReactElement } from "react";

import MainBanner from "./MainBanner";
import ItemList from "./ItemList";

export interface Props {
  product: ReactElement;
  children?: React.ReactNode;
}

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
