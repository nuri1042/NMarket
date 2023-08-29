import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import KakaoProvider from "next-auth/providers/kakao";

import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../database/connectDB";

import EmailProvider from "next-auth/providers/email";

import dotenv from "dotenv";
dotenv.config();

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || " ", // 해당 값이 null이면 빈 문자열 전달
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || " ",
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID || " ",
      clientSecret: process.env.GITHUB_SECRET || " ",
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID || " ",
      clientSecret: process.env.KAKAO_CLIENT_SECRET || " ",
    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  callbacks: {
    // jwt 콜백은 JWT가 생성되거나(signIn 성공), 업데이트(useSession 등 클라이언트에서 session에 접근했을 때)시에 실행
    async jwt({ token, account }) {
      // account 내 access_token 참조 가능
      // if (account) {
      //   token.accessToken = account.access_token; // token 객체에 다시 담아서
      // }
      return token; // 반환하면 session 콜백으로 전달됨
    },
    async session({ session, token }) {
      // session.accessToken = token.accessToken; // 전달받은 token 객체에서 토큰 값을 다시 session 객체에 담고
      return session; // 반환하면 client에서 접근 가능
    },
  },
  pages: {
    verifyRequest: "/verifyRequest",
    signIn: "/Login",
  },
  adapter: MongoDBAdapter(clientPromise),
  secret: process.env.JWT_SECRET,
});
