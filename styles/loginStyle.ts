import styled from "styled-components";
export const Container = styled.div`
  background-color: #f5f5f5;
  height: 700px;
  margin-bottom: 150px;
`;
export const ContentWrap = styled.div`
  width: 820px;
  margin: 0 auto;
  padding-top: 85px;
`;
export const LoginFormBox = styled.div`
  padding: 50px 76px 60px;
  border: 1px solid #eee;
  border-top: 3px solid #d50c0c;
  background-color: #fff;
  margin-top: 25px;
  text-align: center;

  & h3 {
    padding-bottom: 14px;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.1;
    color: #ff3131;
  }

  & p {
    font-size: 12px;
    color: #999;
    line-height: 16px;
  }
`;
export const FormLabel = styled.div`
  position: relative;
  left: -100px;
  color: #999;
  font-size: 14px;
`;
export const FormInput = styled.input`
  width: 278px;
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
`;
