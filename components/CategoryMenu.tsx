import Link from "next/link";
import { Category, IProductProps } from "../interfaces/productProps";
import { DetailsLi } from "../styles/categoryStyle";

const CategoryMenu = ({ product }: { product: IProductProps[] }) => {
  return (
    <>
      <div className="category-dropdown">
        <ul>
          <li>
            <Link
              href="/products/categories/household"
              as={`/products/categories/household`}
            >
              <a>
                <h3 className="mb-4">생활용품</h3>
              </a>
            </Link>
            <ul className="text-sm">
              <DetailsLi>
                <Link
                  href="/products/categories/household/kitchen"
                  as={`/products/categories/household/kitchen`}
                >
                  <a>주방용품</a>
                </Link>
              </DetailsLi>
              <DetailsLi>
                <Link
                  href="/products/categories/household/room"
                  as={`/products/categories/household/room`}
                >
                  <a>집꾸미기</a>
                </Link>
              </DetailsLi>
              <DetailsLi>
                <Link
                  href="/products/categories/household/cleaning"
                  as={`/products/categories/household/cleaning`}
                >
                  <a>청소용품</a>
                </Link>
              </DetailsLi>
            </ul>
          </li>
          <li>
            <Link
              href="/products/categories/stationary"
              as={`/products/categories/stationary`}
            >
              <a>
                <h3 className="mb-4">문구</h3>
              </a>
            </Link>
            <ul className="text-sm">
              <DetailsLi>
                <Link
                  href="/products/categories/stationary/diary"
                  as={`/products/categories/stationary/diary`}
                >
                  <a>다이어리</a>
                </Link>
              </DetailsLi>
              <DetailsLi>
                <Link
                  href="/products/categories/stationary/pen"
                  as={`/products/categories/stationary/pen`}
                >
                  <a>필기구</a>
                </Link>
              </DetailsLi>
            </ul>
          </li>
          <li>
            <Link
              href="/products/categories/refurb"
              as={`/products/categories/refurb`}
            >
              <a>
                <h3 className="mb-4">리퍼마켓</h3>
              </a>
            </Link>
            <ul className="text-sm">
              <DetailsLi>
                <Link
                  href="/products/categories/refurb/furniture"
                  as={`/products/categories/refurb/furniture`}
                >
                  <a>가구</a>
                </Link>
              </DetailsLi>
            </ul>
          </li>
          <li>
            <Link
              href="/products/categories/accessory"
              as={`/products/categories/accessory`}
            >
              <a>
                <h3 className="mb-4">악세서리</h3>
              </a>
            </Link>
            <ul className="text-sm">
              <DetailsLi>
                <Link
                  href="/products/categories/accessory/jewelry"
                  as={`/products/categories/accessory/jewelry`}
                >
                  <a>반지 및 목걸이</a>
                </Link>
              </DetailsLi>
              <DetailsLi>
                <Link
                  href="/products/categories/accessory/beauty"
                  as={`/products/categories/accessory/beauty`}
                >
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
