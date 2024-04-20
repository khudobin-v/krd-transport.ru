"use client";

import "@/app/globals.css";
import { Manrope as ManropeFont } from "next/font/google";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Header } from "@/components/header";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const manropeFont = ManropeFont({
	subsets: ["latin"],
	variable: "--font-sans",
});

interface RootLayoutProps {
	children: React.ReactNode;
}

const queryClient = new QueryClient();

const RootLayout = ({ children }: RootLayoutProps) => {
	return (
		<html lang='ru' suppressHydrationWarning>
			<head />
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased",
					manropeFont.variable
				)}
			>
				<QueryClientProvider client={queryClient}>
					<ThemeProvider
						attribute='class'
						defaultTheme='dark'
						enableSystem
						disableTransitionOnChange
					>
						<SessionProvider>
							<Header />
							<div className='p-4' style={{ height: "calc(100vh - 64px)" }}>
								{children}
							</div>
							<Toaster />
						</SessionProvider>
					</ThemeProvider>
					<ReactQueryDevtools />
				</QueryClientProvider>
			</body>
		</html>
	);
};

export default RootLayout;
