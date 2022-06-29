import { React, useState, useCallback } from "react";
import { Form, Input, Checkbox, Button } from "antd";
import styled from "styled-components";
import useInput from "../hooks/useInput";
import { useDispatch } from "react-redux";

import { signupAction } from "../reducers/user";
import { useSelector } from "react-redux";

const ErrorMessage = styled.div`
  color: red;
`;

const Signup = () => {
  const [email, onChangeEmail] = useInput("");
  const [nickname, onChangeNickname] = useInput("");
  const [password, onChangePassword] = useInput("");

  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const [term, setTerm] = useState("");
  const [termError, setTermError] = useState(false);
  const termOptions = [
    "[필수] 본인은 만 14세 이상입니다.",
    "[필수] 이용약관에 동의합니다.",
    "[필수] 개인정보 수집 및 이용에 동의합니다.",
  ];

  const dispatch = useDispatch();

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password); // 일치하지 않으면 true 리턴
    },
    [password]
  );

  const onChangeTerm = useCallback(
    (list) => {
      setTerm(list.length === termOptions.length);
      setTermError(false);
    },
    [term]
  );

  const onSubmitForm = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    console.log("가입완료");
    dispatch(
      signupAction({
        email,
        password,
        nickname,
      })
    );
  }, [password, passwordCheck, term]);

  return (
    <div className="container" style={{ backgroundColor: "#f5f5f5" }}>
      <div
        className="contentWrap"
        style={{
          width: "820px",
          margin: "0 auto",
          padding: "85px 0 110px",
        }}
      >
        <div
          className="SignupFormBox"
          style={{
            width: "666px",
            padding: "50px 76px 60px",
            border: "1px solid #eee",
            borderTop: "3px solid #d50c0c",
            color: "#888",
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
            회원가입
          </h3>
          <Form
            onFinish={onSubmitForm}
            style={{
              marginTop: "8px",
              color: "#999",
              marginBottom: "40px",
              paddingBottom: "15px",
            }}
          >
            <div
              style={{
                marginBottom: "40px",
                height: "250px",
                borderBottom: "1px solid #eee",
              }}
            >
              <Form.Item>
                <Input
                  name="user-email"
                  value={email}
                  type="email"
                  placeholder="이메일"
                  required
                  onChange={onChangeEmail}
                  style={{
                    width: "600px",
                    height: "48px",
                    padding: "0 19px",
                    fontSize: "13px",
                    fontWeight: "bold",
                    color: "#999",
                    border: "1px solid #999",
                  }}
                />
              </Form.Item>
              <Form.Item>
                <Input
                  name="nickname"
                  value={nickname}
                  placeholder="닉네임"
                  required
                  onChange={onChangeNickname}
                  style={{
                    width: "600px",
                    height: "48px",
                    padding: "0 19px",
                    marginTop: "10px",
                    fontSize: "13px",
                    fontWeight: "bold",
                    color: "#999",
                    border: "1px solid #999",
                  }}
                />
              </Form.Item>
              <Form.Item>
                <Input
                  name="user-password"
                  value={password}
                  type="password"
                  placeholder="비밀번호"
                  required
                  onChange={onChangePassword}
                  style={{
                    width: "600px",
                    height: "48px",
                    padding: "0 19px",
                    marginTop: "10px",
                    fontSize: "13px",
                    fontWeight: "bold",
                    color: "#999",
                    border: "1px solid #999",
                  }}
                />
              </Form.Item>
              <Form.Item>
                <Input
                  name="user-password-check"
                  value={passwordCheck}
                  type="password"
                  placeholder="비밀번호 확인"
                  required
                  onChange={onChangePasswordCheck}
                  style={{
                    width: "600px",
                    height: "48px",
                    padding: "0 19px",
                    marginTop: "10px",
                    fontSize: "13px",
                    fontWeight: "bold",
                    color: "#999",
                    border: "1px solid #999",
                  }}
                />
                {passwordError && (
                  <ErrorMessage>비밀번호가 일치하지 않습니다</ErrorMessage>
                )}
              </Form.Item>
            </div>
            <div
              style={{
                lineHeight: "160%",
                border: "1px solid #999",
                padding: "14px 19px 17px 19px ",
                fontSize: "13px",
                width: "600px",
                left: "13px",
                position: "relative",
                display: "flex",
              }}
            >
              <div className="checkbox-group" style={{ width: "50%" }}>
                <Checkbox.Group
                  options={termOptions}
                  name="user-term"
                  checked={term}
                  onChange={onChangeTerm}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                />
              </div>
              {termError &&
                alert("개인정보를 위한 이용자 동의사항에 동의 해주세요.")}
            </div>
            <Form.Item style={{ marginTop: "40px" }}>
              <Button
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
                }}
              >
                회원가입 신청하기
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
