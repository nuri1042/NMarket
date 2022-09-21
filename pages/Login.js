import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { Form, Input, Button } from "antd";
import {
  Container,
  ContentWrap,
  EmailBtn,
  FormInput,
  FormLabel,
  LoginFormBox,
  SocialLoginBtn,
} from "../styles/loginStyle";

// next-auth 로 로그인 구현한 코드

const Login = () => {
  const { data: session } = useSession();
  const { push, asPath } = useRouter();

  const [email, setEmail] = useState("");

  useEffect(() => {
    if (session) {
      push("/");
    }
  }, [session]);

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
      <Container>
        <ContentWrap>
          <LoginFormBox>
            <h3>회원 로그인</h3>
            <p className="tip">로그인 후에 이용해주세요.</p>
            <Form style={{ marginTop: "28px", color: "#999" }}>
              <Form.Item>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <FormLabel>Email Address</FormLabel>
                  <FormInput
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <EmailBtn onClick={handleSubmit} type="submit">
                  로그인
                </EmailBtn>
              </Form.Item>
              {providers.map(({ id, name, bgColor, fontColor }) => (
                <Form.Item style={{ marginTop: "10px" }}>
                  <SocialLoginBtn
                    type="submit"
                    style={{
                      background: bgColor,
                      color: fontColor,
                    }}
                    onClick={handleOAuthSignIn(id)}
                  >
                    {name} 로그인
                  </SocialLoginBtn>
                </Form.Item>
              ))}
            </Form>
          </LoginFormBox>
        </ContentWrap>
      </Container>
    </>
  );
};

export default Login;
