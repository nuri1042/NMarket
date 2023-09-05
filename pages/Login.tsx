import { useState } from "react";
import { LiteralUnion, signIn } from "next-auth/react";
import { Form } from "antd";
import {
  Container,
  ContentWrap,
  EmailBtn,
  FormInput,
  FormLabel,
  LoginFormBox,
  SocialLoginBtn,
} from "../styles/loginStyle";
import { useRouter } from "next/dist/client/router";

// next-auth 로 로그인 구현한 코드
const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    // 로그인 시 이메일 유효성 검사 정규식 표현
    const regEmail =
      /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

    // 문자열이 정규식을 만족하지 못할 때
    if (!email || !regEmail.test(email)) {
      alert("이메일 형식이 올바르지 않습니다.");
    }
    // 문자열이 정규식을 만족할 때
    signIn("email", { email, redirect: true, callbackUrl: "/" }).then(() => {
      window.history.replaceState(window.history.state, "", "/");
    });
  };

  const handleOAuthSignIn = (provider: LiteralUnion<string>) => () => {
    signIn(provider, { redirect: true, callbackUrl: "/" });
    router.replace("/");
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

  // index.d.ts에서 signIn의 타입을 보면  signIn<P extends RedirectableProviderType | undefined = undefined>(provider?: LiteralUnion<P extends RedirectableProviderType ? P | BuiltInProviderType : BuiltInProviderType>, options?: SignInOptions, authorizationParams?: SignInAuthorizationParams): Promise<P extends RedirectableProviderType ? SignInResponse | undefined : undefined>;
  // 첫번째 파라미터 provider의 타입이 provider?: LiteralUnion<P extends RedirectableProviderType ? P | BuiltInProviderType : BuiltInProviderType> 이다.
  // 그래서 handleOAuthSignIn 함수의 provider를 LiteralUnion으로 설정함
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
                <Form.Item style={{ marginTop: "10px" }} key={id}>
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
