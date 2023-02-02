import styled from "styled-components";

export const ContainerWrap = styled.div`
  padding-top: 40px;
  background: #f4eade;
  height: 120vh;
  min-width: 1200px;
  padding-bottom: 80px;
`;
export const MyprofileInfo = styled.div`
  width: 1140px;
  margin: 0 auto;

  & h2 {
    line-height: 16px;
    font-size: 12px;
    color: #555;
    padding-left: 70px;
  }
`;
export const MypageMain = styled.div`
  margin-top: 4px;
  width: 1140px;
  padding: 0 70px 0 70px;
`;
export const MyprofileContainer = styled.div`
  float: left;
  width: 212px;
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
  }
`;
