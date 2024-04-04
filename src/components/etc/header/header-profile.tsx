"use client";

import useProfile from "@/hooks/useProfile";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CircleUser } from "lucide-react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { Skeleton } from "../../ui/skeleton";

const HeaderProfile = () => {
	const { profile, status } = useProfile();

	if (status === "unauthenticated") {
		return (
			<Link href="/api/auth/signin">
				<Button variant="primary">Войти</Button>
			</Link>
		);
	}
	if (status === "loading") {
		return <Skeleton className="h-10 w-10 rounded-full" />;
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Avatar>
					{profile.image ? (
						<AvatarImage src={profile.image!}></AvatarImage>
					) : (
						<AvatarFallback>
							<CircleUser />
						</AvatarFallback>
					)}
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="mt-2.5">
				<DropdownMenuLabel>👋 Привет, {profile?.name}</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>Перейти в профиль</DropdownMenuItem>
				<DropdownMenuItem>Избранные маршруты</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem onClick={() => signOut({ callbackUrl: "/" })}>
					Выйти из аккаунта
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default HeaderProfile;
