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
  min-height: 320px;

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
`;

export const PdtList = styled.div`
  cursor: pointer;
`;
export const PdtListImg = styled.div`
  float: left;
  position: relative;
  width: 142px;
  background: none;
  text-align: center;
  
  & a {
  padding: 0 18px;
  width: 106px;
  height: 106px
  overflow: hidden;
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  & img {
    width: 100%;
    height: auto;
    vertical-align: top;
    }
  }
`;

export const PdtName = styled.span`
  display: block;
  width: 106px;
  margin: 0 auto;
  min-height: 32px;
  padding-bottom: 5px;
  vertical-align: top;
  line-height: 1.2em;
  word-wrap: break-word;
  overflow: hidden;
  max-height: 2.4em;

  & a {
    color: #777;
    font-weight: normal;
    width: 106px;
    font-size: 13px;
    padding: 0 3px;
  }
`;

export const Nodata = styled.div`
  margin-top: 70px;
  text-align: center;
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
