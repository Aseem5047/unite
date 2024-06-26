import Navbar from "@/components/shared/Navbar";
import Sidebar from "@/components/shared/Sidebar";
import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
	title: "Unite",
	description: "A workspace for your team, powered by Stream Chat and Clerk.",
	icons: {
		icon: "/logo.jpg",
	},
};

const HomeLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
	return (
		<main className="relative">
			<Navbar />
			<div className="flex">
				<Sidebar />
				<section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-10">
					<div className="w-full h-full text-white">{children}</div>
				</section>
			</div>
		</main>
	);
};

export default HomeLayout;
