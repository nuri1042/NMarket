import styled from "styled-components";
import { media } from "./theme";

export const FavorSection = styled.div`
  width: 60%;
`;

export const ArticleWish = styled.div`
  margin-top: 56px;
  padding-top: 16px;
  border-top: 2px solid #555;
  background-color: #fff;
  min-height: 339px;

  & h3 {
    padding-left: 28px;
    font-size: 14px;
    line-height: 1.25em;

    ${media.medium`
      font-size: 19px;
     `}
  }
`;

export const PdtListContainer = styled.div`
  padding-bottom: 20px;
  overflow: hidden;
  margin-top: 26px;
  padding-left: 23px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  ${media.medium`
    justify-content: space-around;
  `}
`;

export const PdtList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer;
  margin: 0 50px 10px 0;
`;
export const PdtListImg = styled.div`
  float: left;
  position: relative;
  background: none;
  text-align: center;
  margin-bottom: 10px;

  & a {
    // padding: 0 18px;

    overflow: hidden;

    margin-bottom: 12px;

    & img {
      height: 100%;
      vertical-align: top;
      width: 135px;
      height: 135px;

      ${media.medium`
      width: 165px;
      height: 165px;
     `}
    }
  }
`;
export const ImgCaption = styled.div`
  width: 100%;
  height: 100%;
  bottom: 0;
  opacity: 0;
  position: absolute;
  background: rgba(0, 0, 0, 0.6);
  color: white;

  & h3 {
    padding: 16px;
  }

  &:hover {
    opacity: 1;
  }
`;
export const PdtName = styled.span`
  display: inline-block;
  width: 130px;
  // margin-left: 24px;
  min-height: 26px;
  margin-bottom: 5px;
  vertical-align: top;
  // line-height: 1.2em;
  overflow: hidden;

  ${media.medium`
      width: 150px;
     `}

  & a {
    color: #777;
    font-weight: normal;
    font-size: 13px;
    display: block;
    word-wrap: break-word;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    // height: 28px;
    margin-bottom: 11px;

    ${media.medium`
      font-size: 18px;
      font-weight: 600;
      line-height:1.6;
     `}
  }

  & div {
    & button {
      margin-bottom: 12px;
      border: none;
      width: 40px;
      height: 16px;
      font-size: 9px;
      cursor: pointer;

      ${media.medium`
      width: 60px;
      height: 24px;
      font-size: 15px;
      font-weight: 500;
      line-height:1.6;
     `}
    }
  }
`;

export const Nodata = styled.div`
  margin-top: 70px;
  text-align: center;
  position: relative;
  left: 32%;
`;

export const NodataImg = styled.a`
  margin-top: 13px;
  width: 140px;
  background: #d50c0c;
  border: 1px solid #d50c0c;
  color: #fff;
  font-size: 11px;
  line-height: 13px;
  padding: 9px 10px 10px;
  display: inline-block;
  text-align: center;
  font-weight: bold;
  vertical-align: middle;
  cursor: pointer;
`;
