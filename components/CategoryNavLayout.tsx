import { IProductProps } from "../interfaces/productProps";
import {
  ContentHeader,
  ContentHeaderTitle,
  ContentSortDiv,
  ContentWrap,
  Nav,
} from "../styles/categoryStyle";

const CategoryNavLayout = ({product}: {product: IProductProps[]}) => {
    const categoryDetails = [
      ...new Set(product.map((data) => data.category.detail)),
    ];
  return (
    <>
      <ContentWrap>
        <section>
          <ContentHeader>
            <ContentHeaderTitle>
              <div>{product[0].category.name}</div>
              <p>{product.length}개 제품</p>
            </ContentHeaderTitle>
            <ContentSortDiv>
              <select>
                <option disabled>정렬 기준</option>
                <option value="popularity">인기순</option>
                <option value="priceDes">가격 높은 순</option>
                <option value="priceAsc">가격 낮은 순</option>
              </select>
              <div>필터</div>
            </ContentSortDiv>
          </ContentHeader>
        </section>
        <Nav>
          <ul style={{ display: "flex", gap: "1.35rem" }}>
            <li>전체</li>
            {categoryDetails.map((detail) => (
              <li>{detail}</li>
            ))}
          </ul>
        </Nav>
      </ContentWrap>
    </>
  );
};

export default CategoryNavLayout;
