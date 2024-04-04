import type { AuthOptions } from "next-auth";
import Providers from "next-auth/providers";
const authConfig: AuthOptions = {
	providers: [
		Providers.VK({
			clientId: process.env.VK_CLIENT_ID!,
			clientSecret: process.env.VK_CLIENT_SECRET!,
		}),
	],
};

export default authConfig;
