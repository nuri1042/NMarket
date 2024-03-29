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
    
  },
  pages: {
    verifyRequest: "/verifyRequest",
    signIn: "/Login",
  },
  adapter: MongoDBAdapter(clientPromise),
  secret: process.env.JWT_SECRET,
});
