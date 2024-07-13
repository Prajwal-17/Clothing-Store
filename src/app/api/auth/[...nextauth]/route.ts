import NextAuth from 'next-auth/next'
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from 'bcryptjs';
import prisma from "../../../../../utils/db";


// import { authOptions } from "@/utils/authOptions";
// import NextAuth from "next-auth/next";

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };

const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt"
  },
  debug: process.env.NODE_ENV === "development",
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "hello@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email }
        });

        if (!user) {
          return null;
        }

        const isPasswordValid = await compare(credentials.password, user.hashedPassword);

        if (!isPasswordValid) {
          return null;
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
        }
      }
    })
  ],
  pages: {
    signIn: '/sign-in',
  },
  callbacks: {
    jwt: ({ token, user }) => {
      console.log("user", "token", user, token)
      if (user) {
        return {
          ...token,
          id: user.id
        }
      }
      return token
    },
    session: ({ session, token }) => {
      console.log("session", "token", { session, token })
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
        }
      }
    }
  }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
