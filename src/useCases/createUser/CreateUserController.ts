import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
	// eslint-disable-next-line no-useless-constructor
	constructor(private createUserUseCase: CreateUserUseCase) {
		//
	}

	async handle(request: Request, response: Response) {
		const { name, email } = request.body;

		await this.createUserUseCase.execute({ name, email });

		return response.send();
	}
}

export { CreateUserController };
