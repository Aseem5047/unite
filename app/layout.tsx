import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider } from "@clerk/nextjs";
import { TooltipProvider } from "@/components/ui/tooltip";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Unite",
	description: "A workspace for your team, powered by Stream Chat and Clerk.",
	icons: {
		icon: "/logo.jpg",
	},
};

export default function RootLayout({
	children,
}: Readonly<{ children: ReactNode }>) {
	return (
		<html lang="en">
			<ClerkProvider
				appearance={{
					layout: {
						socialButtonsVariant: "blockButton",
						logoImageUrl: "/logo.jpg",
					},
					variables: {
						colorText: "#fff",
						colorPrimary: "#0E78F9",
						colorBackground: "#1C1F2E",
						colorInputBackground: "#ffffff21",
						colorInputText: "#fff",
					},
				}}
			>
				<TooltipProvider>
					<body className={`${inter.className} bg-dark-2`}>
						<Toaster />
						{children}
					</body>
				</TooltipProvider>
			</ClerkProvider>
		</html>
	);
}
