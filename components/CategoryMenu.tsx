import Link from "next/link";
import { Category, IProductProps } from "../interfaces/productProps";
import { DetailsLi } from "../styles/categoryStyle";

const CategoryMenu = ({ product }: { product: IProductProps[] }) => {
  const UniqueNameAndDetail = Object.values(product)!.filter(
    (value, index, arr) =>
      index ===
      arr.findIndex(
        (e) =>
          value.category?.name === e.category?.name &&
          value.category?.detail === e.category?.detail
      )
  );
  const filteredByCategoryName = UniqueNameAndDetail?.map((product) => {
    return product.category?.name;
  });
  const UniqueCategoryName = [...new Set(filteredByCategoryName)];

  return (
    <>
      <div className="category-dropdown">
        <ul>
          <li>
            <Link
              href="/products/categories/[UniqueCategoryName[0]]"
              as={`/products/categories/${UniqueCategoryName[0]}`}
            >
              <a>
                <h3 className="mb-4">생활용품</h3>
              </a>
            </Link>
            <ul className="text-sm">
              <DetailsLi>
                <Link href="">
                  <a>주방용품</a>
                </Link>
              </DetailsLi>
              <DetailsLi>
                <Link href="">
                  <a>집꾸미기</a>
                </Link>
              </DetailsLi>
              <DetailsLi>
                <Link href="">
                  <a>청소용품</a>
                </Link>
              </DetailsLi>
            </ul>
          </li>
          <li>
            <Link
              href="/products/categories/[UniqueCategoryName[1]]"
              as={`/products/categories/${UniqueCategoryName[1]}`}
            >
              <a>
                <h3 className="mb-4">문구</h3>
              </a>
            </Link>
            <ul className="text-sm">
              <DetailsLi>
                <Link href="">
                  <a>다이어리</a>
                </Link>
              </DetailsLi>
              <DetailsLi>
                <Link href="">
                  <a>필기구</a>
                </Link>
              </DetailsLi>
            </ul>
          </li>
          <li>
            <Link
              href="/products/categories/[UniqueCategoryName[2]]"
              as={`/products/categories/${UniqueCategoryName[2]}`}
            >
              <a>
                <h3 className="mb-4">리퍼마켓</h3>
              </a>
            </Link>
            <ul className="text-sm">
              <DetailsLi>
                <Link href="/products/categories/refurb">
                  <a>가구</a>
                </Link>
              </DetailsLi>
            </ul>
          </li>
          <li>
            <Link
              href="/products/categories/[UniqueCategoryName[3]]"
              as={`/products/categories/${UniqueCategoryName[3]}`}
            >
              <a>
                <h3 className="mb-4">악세서리</h3>
              </a>
            </Link>
            <ul className="text-sm">
              <DetailsLi>
                <Link href="">
                  <a>반지 및 목걸이</a>
                </Link>
              </DetailsLi>
              <DetailsLi>
                <Link href="">
                  <a>기타</a>
                </Link>
              </DetailsLi>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};
export default CategoryMenu;
