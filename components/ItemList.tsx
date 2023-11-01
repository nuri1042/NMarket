import Link from "next/link";
import {
  DescName,
  InnerCont,
  Itemlist,
  ItemlistContainer,
  Items,
  ItemsLi,
  ItemsUl,
  ThumbImg,
  Thumbnail,
} from "../styles/ItemListStyle";
import { IProductProps } from "../interfaces/productProps";

const ItemList = ({ product }: { product: IProductProps[] }) => {
  return (
    <div>
      <ItemlistContainer>
        <h2>JUST DROPPED</h2>
      </ItemlistContainer>

      <Itemlist>
        <InnerCont>
          <Items>
            {product &&
              product.map((product) => {
                return (
                  <ItemsUl key={product.id}>
                    <ItemsLi>
                      <Link
                        as={`/products/product/${product.id}`}
                        href="/products/product/[id]"
                      >
                        <a>
                          <Thumbnail>
                            <ThumbImg
                              src={product.imageUrl}
                              alt="product image"
                              layout="fill"
                              loading="lazy"
                            />
                          </Thumbnail>
                          <div className="desc">
                            <DescName>{product.description}</DescName>
                          </div>
                        </a>
                      </Link>
                    </ItemsLi>
                  </ItemsUl>
                );
              })}
          </Items>
        </InnerCont>
      </Itemlist>
    </div>
  );
};
export default ItemList;
