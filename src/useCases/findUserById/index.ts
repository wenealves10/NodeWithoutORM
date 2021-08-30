import { UsersPostgresRepositories } from "../../repositories/implementations/UsersPostgresRepositories";
import { FindUserByIdController } from "./FindUserByIdController";
import { FindUserByIdUseCase } from "./FindUserByIdUseCase";

const usersRepository = new UsersPostgresRepositories();

const findUserByIdUseCase = new FindUserByIdUseCase(usersRepository);

const findUserByIdController = new FindUserByIdController(findUserByIdUseCase);

export { findUserByIdController };
