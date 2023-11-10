import Link from "next/link";
import { useSelector } from "react-redux";
import { removeFavor } from "../redux/actions/product";

import {
  ArticleWish,
  FavorSection,
  Nodata,
  NodataImg,
  PdtListImg,
  PdtListContainer,
  PdtName,
  PdtList,
  ImgCaption,
} from "../styles/favorListStyle";
import { useDispatch } from "react-redux";
import { RootState } from "../redux/reducers";
import { ProductState } from "../interfaces/productData.interfaces";

const FavorList = () => {
  const { favorList } = useSelector<RootState, ProductState>(
    (state) => state.product
  ); // useSelector<RootState, returned value we expect>
  const dispatch = useDispatch();

  return (
    <>
      <FavorSection>
        <ArticleWish>
          <h3>MY WISH</h3>
          <div className="detail">
            <PdtListContainer>
              {favorList.length !== 0 ? (
                favorList.map((favorList) => (
                  <PdtList key={favorList.id}>
                    <Link
                      as={`/products/product//${favorList.id}`}
                      href="/products/product/[id]"
                    >
                      <PdtListImg>
                        <a>
                          <img
                            src={favorList.imageUrl}
                            alt="favor item image"
                          />
                          <ImgCaption>
                            <h3>{favorList.name}</h3>
                            <p>{favorList.originPrice}원</p>
                          </ImgCaption>
                        </a>
                      </PdtListImg>
                    </Link>
                    <PdtName>
                      <a>{favorList.name}</a>
                      <div>
                        <button
                          onClick={() => dispatch(removeFavor(favorList))}
                        >
                          삭제
                        </button>
                      </div>
                    </PdtName>
                  </PdtList>
                ))
              ) : (
                <Nodata>
                  <p>
                    <img
                      src="https://fiximage.10x10.co.kr/web2015/my10x10/txt_no_data_wish.png"
                      alt=""
                    />
                  </p>
                  <NodataImg href="/">WISH 담으러 가기</NodataImg>
                </Nodata>
              )}
            </PdtListContainer>
          </div>
        </ArticleWish>
      </FavorSection>
    </>
  );
};

export default FavorList;
