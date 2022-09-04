import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import LoginForm from "../components/LoginForm";
import { signIn, useSession, verifyRequest } from "next-auth/react";
import { Form, Input, Button } from "antd";

const Login = () => {
  const { data: session } = useSession();
  const { push, asPath } = useRouter();

  const [email, setEmail] = useState("");

  useEffect(() => {
    if (session) {
      push("/");
    }
  }, [session]);

  const handleSignIn = () => {
    push(`/auth/signin?callbackUrl=${asPath}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return false;
    signIn("email", { email, redirect: true });
  };

  const providers = [
    {
      id: "github",
      name: "GitHub",
      bgColor: "#ccccff",
      fontColor: "#ffffff",
    },
    {
      id: "kakao",
      name: "Kakao",
      bgColor: "#99ccff",
      fontColor: "#ffffff",
    },
    {
      id: "google",
      name: "Google",
      bgColor: "#ffcccc",
      fontColor: "#ffffff",
    },
  ];
  const handleOAuthSignIn = (provider) => () => signIn(provider);
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
            <Form style={{ marginTop: "28px", color: "#999" }}>
              <Form.Item>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label
                    style={{
                      position: "relative",
                      left: "-100px",
                      color: "#999",
                      fontSize: "14px",
                    }}
                  >
                    Email Address
                  </label>
                  <Input
                    style={{
                      width: "278px",
                      height: "36px",
                      margin: "auto",
                      marginTop: "6px",
                      fontSize: "18px",
                    }}
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  style={{
                    width: "278px",
                    height: "48px",

                    border: "none",
                    fontSize: "14px",
                    lineHeight: "13px",
                    padding: "18px 45px",
                    fontWeight: 600,
                    letterSpacing: "2px",
                    verticalAlign: "middle",
                    cursor: "pointer",
                    margin: "14px 0 24px",
                  }}
                  type="submit"
                >
                  로그인
                </button>
              </Form.Item>
              {providers.map(({ id, name, bgColor, fontColor }) => (
                <Form.Item style={{ marginTop: "10px" }}>
                  <button
                    type="submit"
                    style={{
                      width: "278px",
                      height: "48px",
                      background: bgColor,
                      color: fontColor,
                      border: "none",
                      fontSize: "14px",
                      lineHeight: "13px",
                      padding: "18px 45px",
                      fontWeight: 600,
                      letterSpacing: "2px",
                      verticalAlign: "middle",
                      cursor: "pointer",
                    }}
                    onClick={handleOAuthSignIn(id)}
                  >
                    {name} 로그인
                  </button>
                </Form.Item>
              ))}
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
