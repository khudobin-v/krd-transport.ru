"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

const AuthWithVK = () => {
	const searchParams = useSearchParams();
	const callbackUrl = searchParams.get("callbackUrl") || "/profile";
	return (
		<Button onClick={() => signIn("vk", { callbackUrl })} variant="login_vk">
			<img src="./vk.png" className="mr-2 h-4 w-4" /> Войти с VK ID
		</Button>
	);
};

export default AuthWithVK;
