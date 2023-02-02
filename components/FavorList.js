import React, { useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { removeFavor } from "../reducers/product";

import {
  ArticleWish,
  FavorSection,
  Nodata,
  NodataImg,
  PdtListImg,
  PdtListContainer,
  PdtName,
  PdtList,
} from "../styles/favorListStyle";
import { useDispatch } from "react-redux";

const FavorList = () => {
  const { favorList } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  return (
    <>
      <FavorSection>
        <ArticleWish>
          <h3>MY WISH</h3>
          <div className="detail">
            <PdtListContainer>
              {favorList.length !== 0 ? (
                favorList.map((favorList, index) => (
                  <PdtList>
                    <Link
                      as={`/Products/${favorList.id}`}
                      href="/Products/[favorList.id]"
                    >
                      <PdtListImg>
                        <a>
                          <img
                            src={favorList.imageUrl}
                            alt="favor item image"
                          />
                        </a>
                      </PdtListImg>
                    </Link>
                    <PdtName>
                      <a>{favorList.name}</a>
                      <div style={{ marginLeft: "20px" }}>
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
