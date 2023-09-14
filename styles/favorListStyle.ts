import styled from "styled-components";

export const FavorSection = styled.div`
  width: 598px;
  margin-left: 40px;
  float: left;
`;

export const ArticleWish = styled.div`
  margin-top: 20px;
  padding-top: 16px;
  border-top: 2px solid #555;
  background-color: #fff;
  min-height: 339px;

  & h3 {
    padding-left: 28px;
    font-size: 14px;
    line-height: 1.25em;
  }
`;

export const PdtListContainer = styled.div`
  padding-bottom: 20px;
  overflow: hidden;
  margin-top: 26px;
  padding-left: 13px;
  display: flex;
  flex-wrap: wrap;
`;

export const PdtList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer;
  margin: 0 17px 10px 0;
`;
export const PdtListImg = styled.div`
  float: left;
  position: relative;
  background: none;
  text-align: center;
  margin-bottom: 10px;

  & a {
    padding: 0 18px;
    width: 126px;
    height: 126px;
    overflow: hidden;
    display: flex;
    align-items: center;
    margin-bottom: 12px;

    & img {
      height: 100%;
      vertical-align: top;
    }
  }
`;

export const PdtName = styled.span`
  display: inline-block;
  width: 100px;
  margin-left: 24px;
  min-height: 26px;
  margin-bottom: 5px;
  vertical-align: top;
  line-height: 1.2em;
  overflow: hidden;

  & a {
    color: #777;
    font-weight: normal;
    font-size: 13px;
    display: -webkit-box;
    word-wrap: break-word;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    height: 26px;
    margin-bottom: 11px;
  }

  & div {
    & button {
      margin-bottom: 12px;
      border: none;
      width: 40px;
      height: 16px;
      font-size: 9px;
      cursor: pointer;
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
