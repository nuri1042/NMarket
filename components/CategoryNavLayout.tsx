import Link from "next/link";
import React from "react";
import { IProductProps } from "../interfaces/productProps";
import {
  ContentHeader,
  ContentHeaderTitle,
  ContentWrap,
  Nav,
} from "../styles/categoryStyle";

const CategoryNavLayout = ({
  product,
  categoryTitle,
  categoryUrl,
}: {
  product: IProductProps[];
  categoryTitle: string[];
  categoryUrl: string[];
}) => {
  return (
    <>
      <ContentWrap>
        <section>
          <ContentHeader>
            <ContentHeaderTitle>
              <div>{product[0]?.category.name.desc}</div>
              <p>{product.length}개 제품</p>
            </ContentHeaderTitle>
            {/* <ContentSortDiv>
              <select>
                <option disabled>정렬 기준</option>
                <option value="popularity">인기순</option>
                <option value="priceDes">가격 높은 순</option>
                <option value="priceAsc">가격 낮은 순</option>
              </select>
              <div>필터</div>
            </ContentSortDiv> */}
          </ContentHeader>
        </section>
        <Nav>
          <ul style={{ display: "flex", gap: "1.35rem" }}>
            <Link
              href={`/products/categories/${product[0].category.name.src}`}
              as={`/products/categories/${product[0].category.name.src}`}
            >
              <a>
                <li>전체</li>
              </a>
            </Link>
            {categoryTitle.map((detail, i) => (
              <Link
                href={`/products/categories/${product[0].category.name.src}/${categoryUrl[i]}`}
                as={`/products/categories/${product[0].category.name.src}/${categoryUrl[i]}`}
              >
                <a>
                  <li>{detail}</li>
                </a>
              </Link>
            ))}
          </ul>
        </Nav>
      </ContentWrap>
    </>
  );
};

export default React.memo(CategoryNavLayout);
