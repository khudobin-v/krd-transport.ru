import type { AuthOptions } from "next-auth";
import VkProvider from "next-auth/providers/vk";
const authConfig: AuthOptions = {
	providers: [
		VkProvider({
			clientId: process.env.VK_CLIENT_ID!,
			clientSecret: process.env.VK_CLIENT_SECRET!,
		}),
	],
};

export default authConfig;
