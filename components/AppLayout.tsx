import MainBanner from "./MainBanner";
import ItemList from "./ItemList";
import { IProductProps } from "../interfaces/productProps";

const AppLayout = ({ product }: { product: IProductProps[] }) => {
  return (
    <>
      <div id="body-inner">
        <div id="banner">
          <MainBanner />
        </div>
        <ItemList product={product} />
      </div>
    </>
  );
};

export default AppLayout;
