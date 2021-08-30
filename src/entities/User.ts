import { v4 as uuid } from "uuid";

class User {
	id: string;

	name: string;

	email: string;

	constructor() {
		if (!this.id) {
			this.id = uuid();
		}
	}
}

export { User };
