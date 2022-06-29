import React from "react";
import {
  SubBannerLayout,
  Items,
  Thumbnail,
  Desc,
  DescName,
  DescPrice,
  InnerContent,
  InnerSaleBanner,
} from "../styles/SubBannerStyle.js";

const SubBanner = () => {
  return (
    <>
      <SubBannerLayout>
        <InnerContent>
          <InnerSaleBanner>
            <h2>
              <img
                src="https://fiximage.10x10.co.kr/web2018/main/tit_just_1day_v2.png?v=1.1"
                alt="inner-content"
              />
            </h2>
            <p className="sale">
              <strong>~91%</strong> SALE
            </p>
          </InnerSaleBanner>
          <Items>
            <ul>
              <li>
                <Thumbnail>
                  <img
                    src="https://webimage.10x10.co.kr/eventIMG/2022/today/Frontimage20220325164754.JPEG
"
                  />
                </Thumbnail>
                <Desc>
                  <DescName>
                    베개커버 990원!
                    <br />
                    오늘만 최저가
                  </DescName>
                  <DescPrice>
                    <span className="discount" style={{ color: "red" }}>
                      ~91%
                    </span>
                    <span className="sum">999원~</span>
                  </DescPrice>
                </Desc>
              </li>
              <li>
                <Thumbnail>
                  <img
                    src="https://webimage.10x10.co.kr/eventIMG/2022/today/Frontimage20220325164804.JPEG"
                    alt=""
                  />
                </Thumbnail>
                <Desc>
                  <DescName>
                    푸와 함께 달콤한 시간
                    <br />
                    디저트식기 하루 특가
                  </DescName>
                  <DescPrice>
                    <span className="discount" style={{ color: "red" }}>
                      ~44%
                    </span>
                    <span className="sum">12,400원~</span>
                  </DescPrice>
                </Desc>
              </li>
              <li>
                <Thumbnail>
                  <img src="https://webimage.10x10.co.kr/eventIMG/2022/today/Frontimage20220325164814.JPEG" />
                </Thumbnail>
                <Desc>
                  <DescName>
                    공부의지 활활!
                    <br />
                    모트모트 특가
                  </DescName>
                  <DescPrice>
                    <span className="discount" style={{ color: "red" }}>
                      ~30%
                    </span>
                    <span className="sum">4,860원~</span>
                  </DescPrice>
                </Desc>
              </li>
            </ul>
          </Items>
        </InnerContent>
      </SubBannerLayout>
    </>
  );
};

export default SubBanner;
