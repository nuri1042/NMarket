import React from "react";
import Link from "next/link";
import {
  DescName,
  InnerCont,
  Itemlist,
  ItemlistContainer,
  Items,
  ItemsLi,
  ItemsUl,
  Price,
  ThumbImg,
} from "../styles/ItemListStyle";
import { IProductProps } from "../interfaces/productProps";

const ItemList = ({ product }: { product: IProductProps[] }) => {
  return (
    <div>
      <ItemlistContainer>
        <h2>오늘은 이 상품 어때요?</h2>
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
                          <div className="thumbnail">
                            <ThumbImg src={product.imageUrl} alt="" />
                          </div>
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
