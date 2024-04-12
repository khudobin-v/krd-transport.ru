import { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Vk from "next-auth/providers/vk";
import Yandex from "next-auth/providers/yandex";
import { LoginSchema } from "./schemas";
import { getUserByEmail } from "./data/user";
import bcrypt from "bcryptjs";

const nextAuthConfig: NextAuthConfig = {
	providers: [
		Credentials({
			async authorize(credentials) {
				const validateFields = LoginSchema.safeParse(credentials);

				if (validateFields.success) {
					const { email, password } = validateFields.data;
					const user = await getUserByEmail(email);

					if (!user || !user.password) return null;

					const passwordsMatch = await bcrypt.compare(password, user.password);
					if (passwordsMatch) return user;
				}

				return null;
			},
		}),
		Vk({
			clientId: process.env.VK_CLIENT_ID,
			clientSecret: process.env.VK_CLIENT_SECRET,
		}),
		Yandex({
			clientId: process.env.YANDEX_CLIENT_ID,
			clientSecret: process.env.YANDEX_CLIENT_SECRET,
		}),
	],
	trustHost: true,
	pages: {
		signOut: "/",
	},
};

export default nextAuthConfig;
