import styled from "styled-components";
import { media } from "./theme";

export const ContainerWrap = styled.div`
  padding-top: 40px;
  background: #f4eade;
  height: 80vh;
  padding-bottom: 80px;
  width: 100%;
  overflow-x: hidden;

  ${media.xlarge`
    height: 100%
  `}
`;
export const MyprofileInfo = styled.div`
  margin: 0 auto;
`;
export const MypageMain = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4px;
  padding: 0 70px 0 70px;

  ${media.medium`
  padding: 0 ;
 `}

  & h2 {
    line-height: 16px;
    font-size: 24px;
    color: #000;
  }
`;
export const ProfileDetail = styled.div`
  max-width: 250px;
  width: 20%;
  margin-top: 20px;
  margin-right: 40px;

  ${media.medium`
    width: 20%;
    margin-right: 30px;
 `}
`;

export const Profile = styled.div`
  margin-top: 20px;
  padding-top: 19px;
  background-color: #fff;
  text-align: center;

  & p {
    color: #000;
    font-size: 14px;
    font-weight: bold;
    line-height: 1.25em;
    padding: 10px;

    ${media.medium`
      font-size: 19px;
     `}
  }

  & ul {
    margin-top: 24px;
    border-top: 1px dotted #ccdbe1;

    & li {
      float: left;
      width: 50%;
      border-bottom: 1px solid #f4eade;
      padding: 11px 0;
      background-color: #f9f9f9;

      & strong {
        display: block;
        color: #000;

        ${media.medium`
        font-size: 16px;
        font-weight: 500;
     `}
      }
    }
  }
`;
export const Figure = styled.div`
  position: relative;
  margin-top: 15px;
`;
export const ProfileContainer = styled.div`
  width: 100px;
  height: 120px;
  margin: 0 auto;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    padding-top: 13px;
  }

  & button {
    width: 80px;
    margin: 18px 0;
    border: none;
    padding: 5px;
    cursor: pointer;
    color: #000;

    ${media.medium`
      font-size: 16px;
     `}
  }
`;
