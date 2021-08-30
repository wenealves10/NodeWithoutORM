import { IUsersRepositories } from "../../repositories/IUsersRepositories";

class FindUserByIdUseCase {
	// eslint-disable-next-line no-useless-constructor
	constructor(private usersRepository: IUsersRepositories) {
		//
	}

	async execute(id: string) {
		const user = await this.usersRepository.findById(id);
		return user;
	}
}

export { FindUserByIdUseCase };
