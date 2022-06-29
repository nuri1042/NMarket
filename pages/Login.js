import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import LoginForm from "../components/LoginForm";

const Login = () => {
  const { me } = useSelector((state) => state.user);
  const router = useRouter();

  useEffect(() => {
    if (me) {
      // alert("로그인했으니 메인 페이지로 이동합니다.");
      router.push("/");
      console.log(router);
    }
  }, [me && me.id]);
  return <LoginForm />;
};

export default Login;
