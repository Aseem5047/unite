"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { UpdateUserParams } from "@/types";
import { useUser } from "@clerk/nextjs";
import { Cursor, Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import CallList from "@/components/shared/CallList";
import EditProfile from "@/components/shared/EditProfile";

const UserProfilePage = () => {
	const { user } = useUser();
	const initialState: UpdateUserParams = {
		id: user?.id || "",
		email: String(user?.emailAddresses) || "",
		fullName: user?.fullName || "",
		firstName: user?.firstName || "",
		lastName: user?.lastName || "",
		username: user?.username || "",
		photo: user?.imageUrl || "/images/defaultProfile.png",
		bio: String(user?.unsafeMetadata?.bio) || "",
		role: String(user?.publicMetadata?.role) || "client",
	};

	const [userData, setUserData] = useState(initialState);
	const [editData, setEditData] = useState(false);

	// console.log(userData);

	return (
		<div className="flex justify-start items-center size-full flex-col gap-7">
			{/* Profile Info */}
			<div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] items-center w-full gap-4  lg:w-1/2">
				{/* user profile picture */}
				<Image
					src={userData.photo}
					alt="profile picture"
					width={24}
					height={24}
					className="rounded-full w-40 mx-auto"
				/>

				<div className="flex flex-col items-center md:items-start justify-center gap-2">
					{/* userDetails */}
					<div className="grid grid-cols-[2fr_1fr] items-center w-full">
						<div className="flex flex-col items-start justify-center">
							<span className="text-lg font-semibold capitalize">
								{userData?.fullName}
							</span>
							<span className="text-xs font-semibold">
								{userData?.username}
							</span>
						</div>

						<Button
							className="bg-blue-1"
							onClick={() => setEditData((prev) => !prev)}
						>
							{editData ? "Close Details" : "Edit Details"}
						</Button>
					</div>

					{/* user bio */}
					<p
						className="font-semibold pt-4 cursor-pointer hover:text-blue-1 w-full max-w-[500px] max-h-[100px] overflow-scroll no-scrollbar text-center md:text-start"
						onClick={() => setEditData((prev) => !prev)}
					>
						{userData?.bio?.length === 0
							? `${
									editData
										? "Close the Edit Description Section"
										: "Tap to add Description or Edit the Details"
							  }`
							: userData?.bio}
					</p>
				</div>
			</div>

			{/* Edit profile area */}
			{editData && (
				<div className="flex flex-col w-full lg:max-w-[50%] items-start justify-center gap-7 mt-4">
					<span className="text-2xl font-semibold">Edit User Details</span>
					<EditProfile
						userData={userData}
						setUserData={setUserData}
						initialState={initialState}
						setEditData={setEditData}
					/>
				</div>
			)}

			{/* typewritter effect */}
			<h1 className="text-3xl lg:text-4xl font-semibold mt-7">
				<Typewriter
					words={[
						`Hi There ${userData.username}`,
						"Unite Welcomes You",
						"Glad to Have You",
					]}
					loop={true}
					cursor
					cursorStyle="_"
					typeSpeed={70}
					deleteSpeed={50}
					delaySpeed={2000}
				/>
				<Cursor cursorColor="#0E78F9" />
			</h1>

			{/* user's calls */}
			<div className="grid grid-cols-1 lg:grid-cols-2 items-center w-full mt-14 gap-14 xl:gap-0">
				{/* Previous meetings */}
				<section className="flex size-full flex-col gap-7 text-white justify-center items-center">
					<h1 className="text-3xl font-bold">Previous Calls</h1>

					<CallList type="ended" />
				</section>

				{/* Upcoming meetings */}
				<section className="flex size-full flex-col gap-7 text-white justify-center items-center">
					<h1 className="text-3xl font-bold">Upcoming Calls</h1>

					<CallList type="upcoming" />
				</section>
			</div>
		</div>
	);
};

export default UserProfilePage;
