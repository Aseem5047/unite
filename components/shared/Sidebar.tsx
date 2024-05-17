"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	Tooltip,
	TooltipTrigger,
	TooltipContent,
} from "@/components/ui/tooltip";
import { sidebarLinks } from "@/constants";
import { useUser } from "@clerk/nextjs";

const Sidebar = () => {
	const pathname = usePathname();
	const { user } = useUser();

	return (
		<section className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between  bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
			<div className="flex flex-1 flex-col gap-6">
				{sidebarLinks.map((item) => {
					const isActive =
						pathname === item.route || pathname.startsWith(`${item.route}/`);

					return (
						<Tooltip key={item.label}>
							<TooltipTrigger asChild>
								<Link
									href={item.route}
									className={`flex gap-4 items-center p-4 rounded-lg justify-center lg:justify-start hover:bg-blue-1 ${
										isActive && "bg-blue-1"
									}`}
								>
									<Image
										src={item.imgURL}
										alt={item.label}
										width={24}
										height={24}
									/>

									<p className="text-lg font-semibold max-lg:hidden">
										{item.label}
									</p>
								</Link>
							</TooltipTrigger>
							<TooltipContent>
								<p>{item.label}</p>
							</TooltipContent>
						</Tooltip>
					);
				})}
			</div>
			<Link
				href={`/profile/${user?.id}`}
				className={`flex gap-4 items-center rounded-lg  justify-center lg:px-2 lg:justify-start transition-all duration-500 hover:scale-105  ${
					pathname.includes("/profile/") && "opacity-80"
				}`}
			>
				<Image
					src={user?.imageUrl || "/images/defaultProfile.png"}
					alt="Profile"
					width={24}
					height={24}
					className="rounded-full w-full max-w-[44px]"
				/>
				<div className="flex flex-col items-start justify-center max-lg:hidden">
					<span className="text-lg font-semibold capitalize">
						{user?.fullName}
					</span>
					<span className="text-sm font-semibold">{user?.username}</span>
				</div>
			</Link>
		</section>
	);
};

export default Sidebar;
