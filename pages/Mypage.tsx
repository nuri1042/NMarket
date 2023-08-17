import { signOut, useSession } from "next-auth/react";
import FavorList from "../components/FavorList";
import {
  ContainerWrap,
  Figure,
  MypageMain,
  MyprofileContainer,
  MyprofileInfo,
  Profile,
  ProfileContainer,
} from "../styles/mypageStyle";
import { useDispatch } from "react-redux";
import { reset } from "../redux/actions/product";

const Mypage = () => {
  const { data: session } = useSession(); // useSession : user 가 로그인 되어있는지 알려주는 NextAuth Hook
  // useSession 은 Client Side(React) 에서 작동하는 Hook이다.
  // useSession 의 data 는 session/undefined/null 3가지가 있고
  // 로그인 한 user 객체가 session.user에 저장됨

  const dispatch = useDispatch();
  console.log(`mypage`, session);
  const handleSignOut = () => {
    signOut({ redirect: true, callbackUrl: "/Login" });

    localStorage.clear();
    dispatch(reset());
  };

  return (
    <div className="container">
      <ContainerWrap>
        <MyprofileInfo>
          <h2>MY PAGE</h2>
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
