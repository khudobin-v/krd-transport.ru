import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import type { AuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import VkProvider from "next-auth/providers/vk";
import YandexProvider from "next-auth/providers/yandex";

const prisma = new PrismaClient();

const authConfig: AuthOptions = {
	adapter: PrismaAdapter(prisma) as AuthOptions["adapter"],
	providers: [
		VkProvider({
			clientId: process.env.VK_CLIENT_ID!,
			clientSecret: process.env.VK_CLIENT_SECRET!,
		}),
		YandexProvider({
			clientId: process.env.YANDEX_CLIENT_ID!,
			clientSecret: process.env.YANDEX_CLIENT_SECRET!,
		}),
		EmailProvider({
			server: process.env.EMAIL_SERVER,
			from: process.env.EMAIL_FROM,
		}),
	],
	pages: {
		signIn: "/auth",
		verifyRequest: "/verify-email"
	},
};

export default authConfig;
