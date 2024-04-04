"use client";

import { Manrope as FontSans } from "next/font/google";
import "./globals.css";

import Header from "@/components/etc/header";
import { ThemeProvider } from "@/components/etc/theme-provider";
import { cn } from "@/lib/utils";
import { SessionProvider } from "next-auth/react";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru" suppressHydrationWarning>
			<head />
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<SessionProvider>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<Header />
						{children}
					</ThemeProvider>
				</SessionProvider>
			</body>
		</html>
	);
}
