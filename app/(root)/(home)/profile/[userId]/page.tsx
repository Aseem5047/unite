"use client";

import { useUser } from "@clerk/nextjs";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

export type UserDataValues = {
	id: string;
	fullname: string;
	username: string;
	profilePicture: string;
};

const UserProfile = () => {
	const { user } = useUser();
	const initialState: UserDataValues = {
		id: user?.id || "",
		fullname: user?.fullName || "",
		username: user?.username || "",
		profilePicture: user?.imageUrl || "",
	};
	const { userId } = useParams();
	const [userData, setUserData] = useState(initialState);

	console.log(user);

	useEffect(() => {
		const getCurrentUser = async () => {};

		getCurrentUser();
	}, []);

	const updateUser = async () => {};

	return (
		<div>
			<Typewriter
				options={{
					strings: ["Hello", "World"],
					autoStart: true,
					loop: true,
				}}
			/>
		</div>
	);
};

export default UserProfile;
