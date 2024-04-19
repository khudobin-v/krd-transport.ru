import authConfig from "@/auth.config";
import { db } from "@/lib/db";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth, { DefaultSession } from "next-auth";
import { getUserById } from "./data/user";
import { UserRole } from "@prisma/client";


export const {
	handlers: { GET, POST },
	auth,
	signIn,
	signOut,
} = NextAuth({
	callbacks: {
		// async signIn({ user }) {
		// 	const existingUser = await getUserById(user.id);
		// 	if (!existingUser || !existingUser.emailVerified) return false;

		// 	return true;
		// },

		async session({ token, session }) {
			if (token.role && session.user) {
				session.user.role = token.role as UserRole;
				session.user.id = token.sub!;
			}
			return session;
		},

		async jwt({ token }) {
			if (!token.sub) return token;

			const existingUser = await getUserById(token.sub);

			if (!existingUser) return token;

			token.role = existingUser.role;

			return token;
		},
	},
	adapter: PrismaAdapter(db),
	session: {
		strategy: "jwt",
	},
	...authConfig,
});
