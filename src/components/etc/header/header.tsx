"use client";

import { Menu } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { ThemeToggle } from "../../ui/theme-toggle";
import HeaderProfile from "./header-profile";

const Header = () => {
	const session = useSession();
	return (
		<header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
			<nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
				<Link
					href="/"
					className="text-xl transition-colors hover:text-orange-600 text-balance w-max font-bold text-orange-500 flex items-center gap-2"
				>
					<Image
						src="./krd-transport.svg"
						className="hover:fill-orange-600"
						height={25}
						width={25}
						alt="Логотип"
					/>
					Краснодарский транспорт
				</Link>
			</nav>
			<Sheet>
				<SheetTrigger asChild>
					<Button variant="outline" size="icon" className="shrink-0 md:hidden">
						<Menu className="h-5 w-5" />
					</Button>
				</SheetTrigger>
				<SheetContent side="left">
					<nav className="grid gap-6 text-lg font-medium">
						<Link
							href="/"
							className="text-foreground transition-colors hover:text-orange-600 w-1/2 text-balance font-bold text-orange-500 flex items-center gap-3"
						>
							<Image
								src="./krd-transport.svg"
								className="hover:fill-orange-600"
								height={30}
								width={30}
								alt="Логотип"
							/>
							Краснодарский транспорт
						</Link>
						<Link
							href="#"
							className="text-muted-foreground hover:text-foreground"
						>
							Orders
						</Link>
						<Link
							href="#"
							className="text-muted-foreground hover:text-foreground"
						>
							Products
						</Link>
						<Link
							href="#"
							className="text-muted-foreground hover:text-foreground"
						>
							Customers
						</Link>
						<Link
							href="#"
							className="text-muted-foreground hover:text-foreground"
						>
							Analytics
						</Link>
					</nav>
				</SheetContent>
			</Sheet>
			<div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
				<div className="ml-auto flex-1 sm:flex-initial"></div>
				<ThemeToggle />
				<HeaderProfile />
			</div>
		</header>
	);
};

export default Header;
