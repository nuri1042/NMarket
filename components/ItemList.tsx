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
import Image from "next/image";
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
                        as={`/products/${product.id}`}
                        href="/products/[id]"
                      >
                        <a>
                          <Thumbnail>
                            <ThumbImg
                              src={product.imageUrl}
                              alt="product image"
                              width={"260px"}
                              height={"260px"}
                              layout="fill"
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
