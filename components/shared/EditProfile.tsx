"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { updateUser } from "@/lib/actions/user.actions";
import { UpdateUserParams } from "@/types";
import { useClerk, useUser } from "@clerk/nextjs";
import { clerkClient } from "@clerk/nextjs/server";
import { useParams } from "next/navigation";
import React from "react";
import { editProfileFormSchema } from "@/lib/validator";
import { Textarea } from "../ui/textarea";

export type EditProfileProps = {
	userData: UpdateUserParams;
	setUserData: any;
	initialState: UpdateUserParams;
};

const EditProfile = ({
	userData,
	setUserData,
	initialState,
}: EditProfileProps) => {
	const { user } = useUser();
	const userId = user?.id;

	// 1. Define your form.
	const form = useForm<z.infer<typeof editProfileFormSchema>>({
		resolver: zodResolver(editProfileFormSchema),
		defaultValues: {
			firstName: userData.firstName,
			lastName: userData.lastName,
			username: userData.username,
			bio: userData.bio,
		},
	});

	// 2. Define a submit handler.
	async function onSubmit(values: z.infer<typeof editProfileFormSchema>) {
		try {
			if (
				values.firstName !== initialState.firstName ||
				values.lastName !== initialState.lastName ||
				values.username !== initialState.username
			) {
				user &&
					clerkClient.users.updateUser(user?.id, {
						firstName: values.firstName,
						lastName: values.lastName,
						username: values.username,
					});
			}

			if (values.bio !== initialState.bio) {
				await clerkClient.users.updateUserMetadata(String(userId), {
					unsafeMetadata: {
						bio: values.bio,
					},
				});
			}

			setUserData({
				firstName: user?.firstName,
				lastName: user?.lastName,
				username: user?.username,
				bio: String(user?.publicMetadata?.bio),
			});

			await updateUser(String(userId), userData);
		} catch (error) {
			console.log(error);
		}
	}

	console.log(user);

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-8 w-full flex flex-col items-center"
			>
				<FormField
					control={form.control}
					name="firstName"
					render={({ field }) => (
						<FormItem className="w-full">
							<FormLabel>First Name</FormLabel>
							<FormControl>
								<Input
									placeholder="Edit First Name"
									{...field}
									className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0 hover:opacity-80"
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="lastName"
					render={({ field }) => (
						<FormItem className="w-full">
							<FormLabel>Last Name</FormLabel>
							<FormControl>
								<Input
									placeholder="Edit Last Name"
									{...field}
									className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0 hover:opacity-80"
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItem className="w-full">
							<FormLabel>Username</FormLabel>
							<FormControl>
								<Input
									placeholder="Edit your Username"
									{...field}
									className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0 hover:opacity-80"
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="bio"
					render={({ field }) => (
						<FormItem className="w-full">
							<FormLabel className="text-2xl font-semibold">
								{userData?.bio?.length === 0 ? "Add" : "Edit"} Description
							</FormLabel>
							<FormControl>
								<Textarea
									className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0 hover:opacity-80 max-h-32"
									placeholder="Tell us a little bit about yourself"
									{...field}
								/>
							</FormControl>
							<FormDescription>
								Your bio will be edited to the support your profile.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button
					className="bg-blue-1 hover:opacity-80 w-3/4 mx-auto"
					type="submit"
				>
					Update Details
				</Button>
			</form>
		</Form>
	);
};

export default EditProfile;
