import { useEffect } from 'react';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/dist/client/router';
import FavorList from '../components/FavorList';
import { ContainerWrap, Figure, MypageMain, MyprofileContainer, MyprofileInfo, Profile, ProfileContainer } from '../styles/mypageStyle';
import { useDispatch } from 'react-redux';
import { reset } from '../redux/actions/product';

const Mypage = () => {
  const { data: session } = useSession(); // useSession : user 가 로그인 되어있는지 알려주는 NextAuth Hook
  // useSession 은 Client Side(React) 에서 작동하는 Hook이다.
  // useSession 의 data 는 session/undefined/null 3가지가 있고
  // 로그인 한 user 객체가 session.user에 저장됨
  console.log('mypage history', session);

  const router = useRouter();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!session) {
      router.push('/Login');
    }
  }, [session]);

  const handleSignOut = () => {
    signOut({ redirect: true, callbackUrl: '/Login' });
    localStorage.clear();
    dispatch(reset());
  };

  return (
    <div className='container'>
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
                      <img src='	https://fiximage.10x10.co.kr/web2015/common/img_profile_25.png' alt='프로필이미지' />
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
// getServersideProps 가 아닌 useEffect 시용한 이유

// getServerSideProps 가 선언된 페이지는 빌드와 상관없이 매번 페이지에 들어올 때마다 데이터를 서버에 요청
// 그리고 반환한 props를 이용해서 렌더링한다
// 예를 들어 데이터 업데이트가 잦거나, AI 추천같이 사용자마다 보여줄 내용이 다른경우들에 사용한다.
// SEO가 필요없어서 pre-render 할 필요도 없고 문서에서는 useEffect를 이용한 클라이언트 사이드 데이터 패칭을 추천한다.

// export const getServerSideProps = async (context) => {
//   try {
//     const session = await getSession(context);
//     if (!session) {
//       return {
//         redirect: {
//           destination: '/Login',
//         },
//       };
//     }
//     return {
//       props: { session },
//     };
//   } catch (error) {
//     console.log(error);
//   }
// };
