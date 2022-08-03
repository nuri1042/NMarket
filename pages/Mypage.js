import React from "react";
import { useSelector } from "react-redux";
import { getSession, signOut, useSession } from "next-auth/react";
import FavorList from "../components/FavorList";

const Mypage = () => {
  // const { me } = useSelector((state) => state.user);
  const { data: session } = useSession();
  return (
    <>
      <div
        className="container"
        style={{ background: "#f4eade", height: "1196px" }}
      >
        <div
          className="containerWrap"
          style={{ width: "100%", paddingTop: "40px" }}
        >
          <div className="mypage" style={{ width: "1140px", margin: "0 auto" }}>
            <h2
              style={{
                lineHeight: "16px",
                fontSize: "12px",
                color: "#555",
                paddingLeft: "70px",
              }}
            >
              <img
                src="https://fiximage.10x10.co.kr/web2015/my10x10/tit_my10x10.png"
                alt="MY TENBYTEN"
              />
            </h2>
            <div
              className="mypageMain"
              style={{
                marginTop: "4px",
                width: "1140px",
                padding: "0 70px 0 70px",
              }}
            >
              {/* 내 프로필 */}
              <div
                className="myprofileContainer"
                style={{ float: "left", width: "212px" }}
              >
                <div
                  className="profile"
                  style={{
                    marginTop: "20px",
                    paddingTop: "19px",
                    backgroundColor: "#fff",
                    textAlign: "center",
                  }}
                >
                  <p
                    className="hello"
                    style={{
                      color: "#000",
                      fontSize: "14px",
                      fontWeight: "bold",
                      lineHeight: "1.25em",
                      padding: "10px",
                    }}
                  >
                    Hello, {session.user.name}
                  </p>
                  <div
                    className="figure"
                    style={{ position: "relative", marginTop: "15px" }}
                  >
                    <div
                      className="profile-container"
                      style={{
                        width: "100px",
                        height: "120px",
                        margin: "0 auto",
                        borderRadius: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <img
                        src="	https://fiximage.10x10.co.kr/web2015/common/img_profile_25.png"
                        alt="프로필이미지"
                        style={{
                          objeKctFit: "cover",
                          width: "100%",
                          height: "100%",
                          paddingTop: "13px",
                        }}
                      />
                      <button
                        style={{
                          width: "80px",
                          margin: "18px 0",
                          border: "none",
                          padding: "5px",
                          cursor: "pointer",
                        }}
                        onClick={() => signOut()}
                      >
                        로그아웃
                      </button>
                    </div>
                  </div>
                  <ul
                    style={{
                      marginTop: "24px",
                      borderTop: "1px dotted #ccdbe1",
                    }}
                  >
                    <li
                      style={{
                        float: "left",
                        width: "50%",
                        borderBottom: "1px solid #f4eade",
                        padding: "11px 0",
                        backgroundColor: "#f9f9f9",
                      }}
                    >
                      <strong style={{ display: "block", color: "#000" }}>
                        8장
                      </strong>
                      쿠폰
                    </li>
                    <li
                      style={{
                        float: "left",
                        width: "50%",
                        borderBottom: "1px solid #f4eade",
                        padding: "11px 0",
                        backgroundColor: "#f9f9f9",
                      }}
                    >
                      <strong style={{ display: "block", color: "#000" }}>
                        0P
                      </strong>
                      마일리지
                    </li>
                    <li
                      style={{
                        float: "left",
                        width: "50%",
                        borderBottom: "1px solid #f4eade",
                        padding: "11px 0",
                        backgroundColor: "#f9f9f9",
                      }}
                    >
                      <strong style={{ display: "block", color: "#000" }}>
                        0원
                      </strong>
                      예치금
                    </li>
                    <li
                      style={{
                        float: "left",
                        width: "50%",
                        borderBottom: "1px solid #f4eade",
                        padding: "11px 0",
                        backgroundColor: "#f9f9f9",
                      }}
                    >
                      <strong style={{ display: "block", color: "#000" }}>
                        0원
                      </strong>
                      기프트카드
                    </li>
                  </ul>
                </div>
              </div>
              {/* 찜 목록 */}
              <FavorList />
            </div>
          </div>
        </div>
      </div>
    </>
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
