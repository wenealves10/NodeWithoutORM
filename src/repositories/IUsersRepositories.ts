import { User } from "../entities/User";

interface IUsersRepositories {
	// eslint-disable-next-line no-unused-vars
	create(user: User): Promise<void>;
	// eslint-disable-next-line no-unused-vars
	findById(id: string): Promise<User | null>;
}

export { IUsersRepositories };
