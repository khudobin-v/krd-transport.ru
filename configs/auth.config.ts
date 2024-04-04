import type { AuthOptions } from "next-auth";
import VkProvider from "next-auth/providers/vk";
import YandexProvider from "next-auth/providers/yandex";

const authConfig: AuthOptions = {
	providers: [
		VkProvider({
			clientId: process.env.VK_CLIENT_ID!,
			clientSecret: process.env.VK_CLIENT_SECRET!,
		}),
		YandexProvider({
			clientId: process.env.YANDEX_CLIENT_ID!,
			clientSecret: process.env.YANDEX_CLIENT_SECRET!,
		}),
	],
};

export default authConfig;
