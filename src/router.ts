import { Router } from "express";
import { createUserController } from "./useCases/createUser";
import { findUserByIdController } from "./useCases/findUserById";

const router = Router();

router.post("/users", (request, response) =>
	createUserController.handle(request, response)
);

router.get("/users/:id", (request, response) =>
	findUserByIdController.handle(request, response)
);

export { router };
