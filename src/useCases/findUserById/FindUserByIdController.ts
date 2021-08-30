import { Request, Response } from "express";
import { FindUserByIdUseCase } from "./FindUserByIdUseCase";

class FindUserByIdController {
	// eslint-disable-next-line no-useless-constructor
	constructor(private findUserByIdUseCase: FindUserByIdUseCase) {
		//
	}

	async handle(request: Request, response: Response) {
		const { id } = request.params;

		const user = await this.findUserByIdUseCase.execute(id);

		return response.status(200).json(user);
	}
}

export { FindUserByIdController };
