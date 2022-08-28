import React, { useCallback, useEffect } from "react";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import useInput from "../hooks/useInput";
import { useDispatch } from "react-redux";
import { loginAction } from "../reducers/user";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { Content } from "antd/lib/layout/layout";
import { useRouter } from "next/dist/client/router";

const LoginForm = () => {
  const { data: session } = useSession();
  const router = useRouter();

  // < Redux 로 로그인 구현한 코드 >
  // const [email, onChangeEmail] = useInput("");
  // const [password, onChangePassword] = useInput("");
  // const dispatch = useDispatch();

  // const onSubmitForm = useCallback(() => {
  //   console.log(email, password);
  //   dispatch(loginAction(email, password));
  // }, [email, password]);

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session]);
  return (
    <>
      <div
        className="container"
        style={{ backgroundColor: "#f5f5f5", height: "700px" }}
      >
        <div
          className="contentWrap"
          style={{
            width: "820px",
            margin: "0 auto",
            paddingTop: "85px",
          }}
        >
          <div
            className="LoginFormBox"
            style={{
              padding: "50px 76px 60px",
              border: "1px solid #eee",
              borderTop: "3px solid #d50c0c",
              backgroundColor: "#fff",
              marginTop: "25px",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                paddingBottom: "14px",
                fontSize: "20px",
                fontWeight: 700,
                lineHieght: 1.1,
                color: "#ff3131",
              }}
            >
              회원 로그인
            </h3>
            <p
              className="tip"
              style={{ fontSize: "12px", color: "#999", lineHeight: "16px" }}
            >
              로그인 후에 이용해주세요.
            </p>
            <Form
              style={{ marginTop: "8px", color: "#999" }}
              // onFinish={onSubmitForm}
            >
              {/* Redux로 로그인 구현한 코드 */}
              {/* <Form.Item>
                <Input
                  placeholder="이메일"
                  name="userEmail"
                  type="email"
                  value={email}
                  onChange={onChangeEmail}
                  required
                  style={{
                    width: "278px",
                    height: "48px",
                    marginTop: "8px",
                    boxSizing: "border-box",
                    padding: "10px",
                  }}
                />
              </Form.Item>
              <Form.Item>
                <Input
                  placeholder="비밀번호"
                  name="userPwd"
                  value={password}
                  onChange={onChangePassword}
                  type="password"
                  required
                  style={{
                    width: "278px",
                    height: "48px",
                    margin: "10px 0",
                    boxSizing: "border-box",
                    padding: "10px",
                  }}
                />
              </Form.Item> */}

              <Form.Item style={{ marginTop: "10px" }}>
                <button
                  htmlType="submit"
                  style={{
                    width: "278px",
                    height: "48px",
                    background: "#d50c0c",
                    border: "1px solid #d50c0c",
                    color: "#fff",
                    fontSize: "12px",
                    lineHeight: "13px",
                    padding: "18px 45px",
                    fontWeight: "bold",
                    verticalAlign: "middle",
                    cursor: "pointer",
                  }}
                  onClick={() => signIn()}
                >
                  구글로 로그인
                </button>

                <div style={{ paddingTop: "57px" }}>
                  <p
                    style={{
                      color: "#d50c0c",
                      paddingBottom: "15px",
                      fontSize: "12px",
                    }}
                  >
                    아직 회원이 아니세요?
                  </p>
                  <Link href="/signup">
                    <a>
                      <Button
                        style={{
                          width: "278px",
                          height: "48px",
                          border: "1px solid #d50c0c",
                          background: "#fff",
                          color: "#d50c0c",
                          fontSize: "12px",
                          lineHeight: "13px",
                          padding: "18px 45px",
                          fontWeight: "bold",
                          verticalAlign: "middle",
                        }}
                      >
                        회원가입
                      </Button>
                    </a>
                  </Link>
                </div>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
