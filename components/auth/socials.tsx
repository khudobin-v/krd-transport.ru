import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const Socials = () => {
	const signInWithSocials = (provider: "vk" | "yandex") => {
		signIn(provider, { callbackUrl: DEFAULT_LOGIN_REDIRECT });
	};
	return (
		<div className='grid grid-cols-2 gap-3 w-full'>
			<Button
				className='bg-[#fc3f1d] hover:bg-[#c93217] text-white font-semibold text-xs'
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
			<Button
				className='bg-[#0077ff] hover:bg-[#005fcc] text-white font-semibold text-xs'
				onClick={() => {
					signInWithSocials("vk");
				}}
			>
				<img
					src='/vk.png'
					alt='Войти с ВКонтакте'
					className='mr-2 h-3 w-3 sm:mr-3 sm:h-4 sm:w-4'
					draggable={false}
				/>
				Войти с ВКонтакте
			</Button>
		</div>
	);
};
