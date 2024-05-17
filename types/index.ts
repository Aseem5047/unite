// ====== USER PARAMS
export type CreateUserParams = {
	clerkId: string;
	firstName: string;
	lastName: string;
	username: string;
	email: string;
	photo: string;
	role: string;
	bio?: string;
};

export type UpdateUserParams = {
	firstName: string;
	lastName: string;
	username: string;
	photo: string;
	bio?: string;
};
