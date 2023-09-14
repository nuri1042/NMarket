import { useSession } from "next-auth/react";
import Link from "next/link";

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
