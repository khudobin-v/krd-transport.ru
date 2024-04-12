import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const Socials = () => {
	const signInWithSocials = (provider: "yandex") => {
		signIn(provider, { callbackUrl: DEFAULT_LOGIN_REDIRECT });
	};
	return (
		<div className='w-full'>
			<Button
				className='bg-[#fc3f1d] hover:bg-[#c93217] text-white font-semibold text-xs sm:text-sm w-full'
				onClick={() => {
					signInWithSocials("yandex");
				}}
			>
				<img
					src='/yandex.png'
					alt='Войти с Яндекс'
					className='mr-2 h-3 w-3 sm:mr-3 sm:h-4 sm:w-4'
					draggable={false}
				/>{" "}
				Войти с Яндекс
			</Button>
		</div>
	);
};
