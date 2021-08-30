import { Pool } from "pg";
import { createConnection } from "../../database/connection";
import { User } from "../../entities/User";
import { IUsersRepositories } from "../IUsersRepositories";

class UsersPostgresRepositories implements IUsersRepositories {
	private client: Pool;

	constructor() {
		// eslint-disable-next-line no-return-assign
		createConnection().then(({ client }) => (this.client = client));
	}

	async create({ id, name, email }: User): Promise<void> {
		await this.client.query(
			"INSERT INTO USERS(ID, NAME, EMAIL) VALUES($1, $2, $3)",
			[id, name, email]
		);
	}

	async findById(idUser: string): Promise<User | null> {
		const { rows } = await this.client.query(
			"SELECT * FROM USERS WHERE ID = $1 LIMIT 1",
			[idUser]
		);

		if (rows.length > 0) {
			const { id, name, email } = rows[0];

			const user: User = {
				id,
				name,
				email,
			};

			return user;
		}

		return null;
	}
}
export { UsersPostgresRepositories };
