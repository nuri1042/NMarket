import React from "react";
import { getSession, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/dist/client/router";
import FavorList from "../components/FavorList";
import {
  Container,
  ContainerWrap,
  Figure,
  MypageMain,
  MyprofileContainer,
  MyprofileInfo,
  Profile,
  ProfileContainer,
} from "../styles/mypageStyle";

const Mypage = () => {
  const { data: session } = useSession(); // useSession : user 가 로그인 되어있는지 알려주는 NextAuth Hook
  // useSession 은 Client Side(React) 에서 작동하는 Hook이다.
  // useSession 의 data 는 session/undefined/null 3가지가 있고
  // 로그인 한 user 객체가 session.user에 저장됨

  const { push } = useRouter();

  const handleSignOut = async () => {
    const data = await signOut({ redirect: false, callbackUrl: "/" });
    localStorage.clear(); // 로그아웃 시 redux 데이터 초기화
    push(data.url);
  };
  return (
    <div className="container">
      <ContainerWrap>
        <MyprofileInfo>
          <h2>
            <img
              src="https://fiximage.10x10.co.kr/web2015/my10x10/tit_my10x10.png"
              alt="MY TENBYTEN"
            />
          </h2>
          <MypageMain>
            {/* 내 프로필 */}
            {session ? (
              <MyprofileContainer>
                <Profile>
                  <p>Hello, {session.user.name}</p>
                  <Figure>
                    <ProfileContainer>
                      <img
                        src="	https://fiximage.10x10.co.kr/web2015/common/img_profile_25.png"
                        alt="프로필이미지"
                      />
                      <button onClick={handleSignOut}>로그아웃</button>
                    </ProfileContainer>
                  </Figure>
                  <ul>
                    <li>
                      <strong>8장</strong>
                      쿠폰
                    </li>
                    <li>
                      <strong>0P</strong>
                      마일리지
                    </li>
                    <li>
                      <strong>0원</strong>
                      예치금
                    </li>
                    <li>
                      <strong>0원</strong>
                      기프트카드
                    </li>
                  </ul>
                </Profile>
              </MyprofileContainer>
            ) : null}
            {/* 찜 목록 */}
            <FavorList />
          </MypageMain>
        </MyprofileInfo>
      </ContainerWrap>
    </div>
  );
};

export default Mypage;

// 로그인 되어있지 않으면 Login 페이지로 이동
export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/Login",
      },
    };
  }
  return {
    props: { session },
  };
};
