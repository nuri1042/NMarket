import styled from "styled-components";
import { media } from "./theme";

export const ContentWrap = styled.div`
  padding: 85px 150px 85px;
  width: 100%;
  background: #f5f5f5;
  overflow-x: hidden;

  ${media.xlarge`
    height: 100%;
  `}

    ${media.medium`
      padding: 85px 0;
      margin: 0 auto;
  `}
`;
export const LoginFormBox = styled.div`
  padding: 50px 76px 60px;
  border: 1px solid #eee;
  border-top: 3px solid #d50c0c;
  background-color: #fff;
  margin-top: 25px;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;

  ${media.medium`
    overflow-x: hidden;
    max-width: 60%;
    margin: 0 auto;
  `}

  & h3 {
    padding-bottom: 14px;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.1;
    color: #ff3131;
    // width:100px;
    margin: 0 auto;

    ${media.medium`
      width: 110px;
      font-size: 23px;
    `}
  }

  & p {
    font-size: 12px;
    color: #999;
    line-height: 16px;
    width: 200px;
    margin: 0 auto;

    ${media.medium`
      font-size: 15px;
    `}
  }
`;
export const FormDetail = styled.div`
  width: 100%;
  overflow-x: hidden;
`
export const FormLabel = styled.div`
  position: relative;
  width: 150px;
  margin: 0 auto;
  color: #999;
  font-size: 14px;
`;
export const FormInput = styled.input`
  width: 279px;
  height: 36px;
  margin: auto;
  margin-top: 6px;
  font-size: 18px;
`;
export const EmailBtn = styled.button`
  width: 278px;
  height: 48px;
  border: none;
  font-size: 14px;
  line-height: 13px;
  padding: 18px 45px;
  font-weight: 600;
  letter-spacing: 2px;
  vertical-align: middle;
  cursor: pointer;
  margin: 14px 0 24px;
  background-color: #e4e4e4;
  color: black;
`;
export const SocialLoginBtn = styled.button`
  width: 278px;
  height: 48px;
  border: none;
  font-size: 14px;
  line-height: 13px;
  padding: 18px 45px;
  font-weight: 600;
  letter-spacing: 2px;
  vertical-align: middle;
  cursor: pointer;

     ${media.medium`
       font-weight: 700;

    `} 
`;
