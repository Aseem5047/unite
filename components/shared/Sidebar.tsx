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

const Sidebar = () => {
	const pathname = usePathname();

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
									className={`flex gap-4 items-center p-4 rounded-lg justify-start hover:bg-blue-1 ${
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
		</section>
	);
};

export default Sidebar;
