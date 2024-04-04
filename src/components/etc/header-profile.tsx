"use client";

import useProfile from "@/hooks/useProfile";
import { AvatarFallback } from "@radix-ui/react-avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { CircleUser } from "lucide-react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";

const HeaderProfile = () => {
	const { name, email, image, status } = useProfile();

	if (status === "unauthenticated") {
		return (
			<Link href="/api/auth/signin">
				<Button>Войти</Button>
			</Link>
		);
	}
	if (status === "loading") {
		return <Skeleton className="h-10 w-10 rounded-full" />;
	}
	if (status === "authenticated") {
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Avatar>
					<AvatarFallback>
						<CircleUser className="h-5 w-5" />
					</AvatarFallback>
					<AvatarImage>
						<Image src={image!} height={20} width={20} alt="Фото профиля" />
					</AvatarImage>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuLabel>👋 Привет, {name}</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>Перейти в профиль</DropdownMenuItem>
				<DropdownMenuItem>Избранные маршруты</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem onClick={() => signOut({ callbackUrl: "/" })}>
					Выйти из аккаунта
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>;
	}
};

export default HeaderProfile;
