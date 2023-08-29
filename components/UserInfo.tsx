import { useSession } from "next-auth/react";
import Link from "next/link";

// session이 있으면 mypage로 이동, 없으면 login 페이지로 이동
const UserInfo = () => {
  const { data: session } = useSession();
  return session ? (
    <Link href="/Mypage">
      <a className="btn-mypage">마이페이지</a>
    </Link>
  ) : (
    <Link href="/Login">
      <a className="btn-mypage">로그인</a>
    </Link>
  );
};

export default UserInfo;
