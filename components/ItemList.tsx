import Link from "next/link";
import {
  Desc,
  DescName,
  InnerCont,
  Items,
  ItemsLi,
  ItemsUl,
  ThumbImg,
  Thumbnail,
} from "../styles/ItemListStyle";
import { IProductProps } from "../interfaces/productProps";

const ItemList = ({ product }: { product: IProductProps[] }) => {
  return (
    <>
      {/* <Itemlist> */}
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
                            placeholder="blur"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPcVg8AAfEBN0joyNIAAAAASUVORK5CYII="
                          />
                        </Thumbnail>
                        <Desc>
                          <DescName>{product.description}</DescName>
                        </Desc>
                      </a>
                    </Link>
                  </ItemsLi>
                </ItemsUl>
              );
            })}
        </Items>
      </InnerCont>
      {/* </Itemlist> */}
    </>
  );
};
export default ItemList;
