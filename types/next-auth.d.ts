import nextAuth from "next-auth";
declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `Provider` React Context
   */
  interface Session {
    // pages/Mypage.tsx 에서 session.user.name 에 개체가 undefined라는 오류 발생해서 타입 정의해줌
    user: {
      name: string;
      image: string;
    };
  }
}
