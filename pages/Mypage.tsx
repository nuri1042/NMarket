import { signOut, useSession } from "next-auth/react";
import FavorList from "../components/FavorList";
import {
  ContainerWrap,
  Figure,
  MypageMain,
  ProfileDetail,
  MyprofileInfo,
  Profile,
  ProfileContainer,
} from "../styles/mypageStyle";
import { useDispatch } from "react-redux";
import { reset } from "../redux/actions/product";

const Mypage = () => {
  const { data: session } = useSession(); 
  const dispatch = useDispatch();

  console.log(session)
  const handleSignOut = () => {
    signOut({ callbackUrl: "/" }).then(() => {
      window.history.replaceState(window.history.state, "", "/");
    });

    localStorage.clear();
    dispatch(reset());
  };

  return (
    <div className="container">
      <ContainerWrap>
        <MyprofileInfo>
          <MypageMain>
            <ProfileDetail>
              <h2>MY PAGE</h2>
              {/* 내 프로필 */}
              {session ? (
                <div>
                  <Profile>
                    <p>Hello, {session.user.name}</p>
                    <Figure>
                      <ProfileContainer>
                        {session.user.image? (
                        <img
                          src={session.user.image}
                          alt="프로필이미지"
                        />)
                      :(<img
                          src="https://fiximage.10x10.co.kr/web2015/common/img_profile_25.png"
                          alt="프로필이미지"
                        />)}
                        
                        <button onClick={handleSignOut}>로그아웃</button>
                      </ProfileContainer>
                    </Figure>
                    <ul>
                      <li>
                        <strong>0장</strong>
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
                </div>
              ) : null}
            </ProfileDetail>
            {/* 찜 목록 */}
            <FavorList />
          </MypageMain>
        </MyprofileInfo>
      </ContainerWrap>
    </div>
  );
};

export default Mypage;
