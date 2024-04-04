"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

const AuthWithYandex = () => {
	const searchParams = useSearchParams();
	const callbackUrl = searchParams.get("callbackUrl") || "/profile";
	return (
		<Button
			onClick={() => signIn("yandex", { callbackUrl })}
			variant="login_yandex"
		>
			<img src="./yandex.png" className="mr-2 h-4 w-4" />
			Войти с Яндекс ID
		</Button>
	);
};

export default AuthWithYandex;
