import MainBanner from "./MainBanner";
import ItemList from "./ItemList";
import { IProductProps } from "../interfaces/productProps";
import { ItemlistTitle } from "../styles/ItemListStyle";

const AppLayout = ({ product }: { product: IProductProps[] }) => {
  return (
    <>
      <div id="body-inner">
        <div id="banner">
          <MainBanner />
        </div>
        <ItemlistTitle>
          <h2>JUST DROPPED</h2>
        </ItemlistTitle>
        <ItemList product={product} />
      </div>
    </>
  );
};

export default AppLayout;
