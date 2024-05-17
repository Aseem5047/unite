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
	id?: string;
	email?: string;
	fullName?: string;
	firstName: string;
	lastName: string;
	username: string;
	photo: string;
	bio?: string;
	role?: string;
};
